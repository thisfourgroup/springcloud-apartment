/*
* DateInput zhangjingwei V1.0
* Released under the MIT, BSD, and GPL Licenses.
*/
(function ($, undefined) {

    /* TODO: 
    *  剔除键盘功能、选择日期、弹出速度、字符国际化、休息日样式
    *  增加双日历
    */

    $.tools = $.tools || { version: '1.3' };

    var instances = [],
         tool,
         LABELS = {};

    tool = $.tools.dateinput = {

        conf: {
            format: 'yyyy-mm-dd',
            monthRange: [0, 12],
            lang: 'zh-cn',
            offset: [0, 0],
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            min: 0,
            max: undefined,
            trigger: 0,
            toggle: 0,
            editable: 0,
            houseData: null,
            mindate: null,
            editable: true,
            checkin: true,  // The date is checkin or checkout

            css: {
                prefix: 'cal',
                input: 'date',

                // ids
                root: 0,
                head: 0,
                title: 0,
                prev: 0,
                next: 0,
                days: 0,
                content: 0,
                body: 0,
                weeks: 0,
                today: 0,
                current: 0,

                // classnames
                week: 0,
                off: "disabled",
                sunday: 0,
                focus: "current",
                disabled: "disabled",
                deleted: "delete",
                trigger: 0
            }
        },

        localize: function (language, labels) {
            $.each(labels, function (key, val) {
                labels[key] = val.split(",");
            });
            LABELS[language] = labels;
        }

    };
    //@配置支持其他语言映射表
    // 多语言支持
    tool.localize("zh-cn", {
        months: '1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
        shortMonths: '1,2,3,4,5,6,7,8,9,10,11,12',
        days: '星期日,星期一,星期二,星期三,星期四,星期五,星期六',
        shortDays: '日,一,二,三,四,五,六'
    });


    //{{{ private functions


    // @return amount of days in certain month
    function dayAm(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    function zeropad(val, len) {
        val = '' + val;
        len = len || 2;
        while (val.length < len) { val = "0" + val; }
        return val;
    }

    // thanks: http://stevenlevithan.com/assets/misc/date.format.js 
    var Re = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g, tmpTag = $("<a/>");

    function format(date, fmt, lang) {
        var d = date.getDate(),
            D = date.getDay(),
            m = date.getMonth(),
            y = date.getFullYear(),

            flags = {
                d: d,
                dd: zeropad(d),
                ddd: LABELS[lang].shortDays[D],
                dddd: LABELS[lang].days[D],
                m: m + 1,
                mm: zeropad(m + 1),
                mmm: LABELS[lang].shortMonths[m],
                mmmm: LABELS[lang].months[m],
                yy: String(y).slice(2),
                yyyy: y
            };

        var ret = fmt.replace(Re, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });

        // a small trick to handle special characters
        return tmpTag.html(ret).html();

    }

    function integer(val) {
        return parseInt(val, 10);
    }

    function isSameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() == d2.getMonth() &&
            d1.getDate() == d2.getDate();
    }

    function parseDate(val, date) {
        if (val === undefined) { return; }
        if (val.constructor == Date) { return val; }

        if (typeof val == 'string') {

            // rfc3339?
            var els = val.split("-");
            if (els.length == 3) {
                return new Date(integer(els[0]), integer(els[1]) - 1, integer(els[2]));
            }

            // invalid offset
            if (!(/^-?\d+$/).test(val)) { return; }

            // convert to integer
            val = integer(val);
        }

        date.setDate(date.getDate() + val);
        return date;
    }

    //}}}


    function Dateinput(input, conf) {
        // variables
        var self = this,
             now = parseDate(input.val()) || conf.value || new Date,
			 yearNow = now.getFullYear(),
             monthNow = now.getMonth(),
             css = conf.css,
             labels = LABELS[conf.lang],
             root = $("#" + css.root),
             title = root.find("#" + css.title),
             trigger,
             pm, nm,
             currYear, currMonth, currDay,
             value = input.attr("value") || conf.value || input.val(),
             min = input.attr("min") || conf.min,
             max = input.attr("max") || conf.max,
             opened,
             original,
             scrolltimer;
        // zero min is not undefined     
        if (min === 0) { min = "0"; }
        // use sane values for value, min & max
        value = parseDate(value) || now;
        //min，max使用来设置日历控件的现实范围
        min = parseDate(min || new Date(yearNow + Math.floor((monthNow + conf.monthRange[0]) / 12), monthNow + conf.monthRange[0] % 12, 1), value);
        max = parseDate(max || new Date(yearNow + Math.floor((monthNow + conf.monthRange[1]) / 12), monthNow + conf.monthRange[1] % 12, 0), value);

        // Replace built-in date input: NOTE: input.attr("type", "text") throws exception by the browser
        if (input.attr("type") == 'date') {// 如果是原生的date控件，则替换为text控件
            var original = input.clone(),
	          def = original.wrap("<div/>").parent().html(),
	          clone = $(def.replace(/type/i, "type=text data-orig-type"));

            if (conf.value) clone.val(conf.value);   // jquery 1.6.2 val(undefined) will clear val()

            input.replaceWith(clone);
            input = clone;
        }

        input.addClass(css.input);
        //console.log(self);
        var fire = input.add(self); //将构造函数new对象加入到jquery对象中.
        var bookStatus = {
            notCheck: 0,
            canCheckIn: 1,
            canCheckOut: 2,
            curCheckIn: 3,
        };
        var checkInDate;
        var checkOutDate;
        // construct layout
        /*
        * 将原来一次绘制日历的方式分为两个部分
        * 先绘制外围DOM节点
        * 日历部分构件完成后，插入到外围节点中
        */
        if (!root.length) { //如果是第一次使用控件，则先创建外部html结构

            // root
            root = $('<div><a/><a/><div/></div>')
                .hide().css({ position: 'absolute' }).attr("id", css.root).addClass("calendarBox");

            // elements
            root.children() //给初始化的html结构添加class和id属性
                .eq(0).attr("id", css.prev).addClass("calPrev").end()
                .eq(1).attr("id", css.next).addClass("calNext").end()
                    .eq(2).attr("id", css.content);
            root.append('<a href="javascript:void(0)"class="cal-close-btn" title="关闭"></a>');
            $("body").append(root);
        }
        pm = $("#" + css.prev);
        nm = $("#" + css.next);
        /*bind next prev event*/
        //root.off("click", "#" + css.prev).on("click", "#" + css.prev, function () {
        //    if (!$(this).hasClass(css.disabled)) {
        //        self.addMonth(-2);
        //    }
        //    return false;
        //});
        //root.off("click", "#" + css.next).on("click", "#" + css.next, function () {
        //    if (!$(this).hasClass(css.disabled)) {
        //        self.addMonth();
        //    }
        //    return false;
        //});
        ///*bind mouseenter mouseleave event*/
        //root.off("mouseenter").on("mouseenter", "td", function (e) {
        //    var $td = $(this);
        //    var curDate = $td.data("date");
        //    if (!curDate) {
        //        return;
        //    }
        //    if (checkInDate) {
        //        switch (self.checkBook(checkInDate, curDate)) {
        //            case bookStatus.curCheckIn:
        //                self.showTips($td,e);
        //                break;
        //            case bookStatus.canCheckIn:
        //                $td.data("tdTxt", $td.text()).text("入");
        //                break;
        //            case bookStatus.canCheckOut:
        //                $td.data("tdTxt", $td.text()).text("退");
        //                break;
        //            case bookStatus.notCheck:
        //                break;
        //        }
        //    } else {
        //        if (self.getInventory(curDate)) {
        //            $td.data("tdTxt", $td.text()).text("入");
        //        }
        //    }
        //});
        //root.off("mouseleave").on("mouseleave", "td", function () {
        //    var $td = $(this);
        //    if ($td.data("tdTxt") && !$td.hasClass("checkIn")) {
        //        $td.text($td.data("tdTxt"));
        //    }
        //    /*remove tips*/
        //    if ($td.hasClass("checkIn")) {
        //        $td.children(".calendar-small-tips").remove();
        //    }
        //});

        //root.off("click","td").on("click", "td", function () {
        //    var $td = $(this);
        //    var curDate = $td.data("date");
        //    if (checkInDate) {
        //        switch (self.checkBook(checkInDate, curDate)) {
        //            case bookStatus.curCheckIn:
        //                checkInDate = null;
        //                $td.removeClass("checkIn").text($td.data("tdTxt"));
        //                break;
        //            case bookStatus.canCheckIn:
        //                //  $td.data("tdTxt", $td.text()).text("入");
        //                self.updateCalUi();
        //                $td.addClass("checkIn").text("入");
        //                checkInDate = curDate;
        //                break;
        //            case bookStatus.canCheckOut:
        //                self.bookHouse(checkInDate,curDate);
        //                break;
        //            case bookStatus.notCheck:
        //                break;
        //        }
        //    } else {
        //        if (self.getInventory(curDate)) {
        //            $td.addClass("checkIn").text("入");
        //            checkInDate = curDate;
        //        }
        //    }
        //    return false;
        //});
        // layout elements
        var weeks = root.find("#" + css.weeks);  //没发现weeks元素???

        //{{{ pick

        function select(date, conf, e, el) {
            // current value
            value = date;
            currYear = date.getFullYear();
            currMonth = date.getMonth();
            currDay = date.getDate();

            // beforChange
            e = e || $.Event("api");
            e.type = "beforeChange";

            fire.trigger(e, el);
            if (e.isDefaultPrevented()) { return; }

            // formatting           
            input.val(format(date, conf.format, conf.lang));

            // change
            e.type = "change";
            fire.trigger(e, [date]);

            // store value into input
            input.data("date", date);

            self.hide(e);
        }
        //}}}


        //{{{ onShow

        function onShow(ev) {

            ev.type = "onShow";
            fire.trigger(ev);

            // click outside dateinput
            $(document).bind("click.d", function (e) {
                var el = e.target;

                if (!$(el).parents("#" + css.root).length && $(el).attr("id") != css.root && el != input[0] && (!trigger || el != trigger[0])) {
                    self.hide(e);
                }

            });
        }
        //}}}

        // 获取所在月份的日历HTML
        //noOpen 设置为不打开界面
        function getCalHtml(year, month, day, noOpen) {
            var date = integer(month) >= -2 ? new Date(integer(year), integer(month), integer(day == undefined || isNaN(day) ? 1 : day)) : year || value;//,
            //noOpen = noOpen ? true : false;
            var hasNoHouse = false;
            if (date < min) {
                date = min;
            } else if (date > max) {
                date = max;
            }

            if (typeof year == 'string') { date = parseDate(year); }

            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate();

            // roll year & month
            if (month == -1) {
                month = 11;
                year--;
            } else if (month == 12) {
                month = 0;
                year++;
            }

            ////if (!opened || noOpen) {
            ////    select(date, conf);
            ////    return self;
            ////}/* else {
            //    // formatting           
            //    input.val(format(date, conf.format, conf.lang));
            //    input.data("date", date);
            //    value = date;
            //}*/

            currMonth = month;
            currYear = year;
            currDay = day;

            var targetMonth = currMonth + 1,
            daysInTargetMonth = dayAm(currYear, targetMonth),
            targetDay = daysInTargetMonth,
			targetYear = currYear;

            // roll next year & next month
            if (targetMonth == -1) {
                targetMonth = 11;
                targetYear--;
            } else if (targetMonth == 12) {
                targetMonth = 0;
                targetYear++;
            }

            var dateNext = new Date(targetYear, targetMonth, targetDay);

            var $calendarRoot = $("<div class='calendar'><h2/><table><thead><tr/></thead><tbody></tbody></table></div>"),
                    days = $calendarRoot.children().eq(1).children().eq(0).children();

            // days of the week
            for (var d = 0; d < 7; d++) {
                days.append($("<th/>").text(labels.shortDays[(d + conf.firstDay) % 7]));
            }

            var $calendarNextRoot = $calendarRoot.clone();
            pm.add(nm).removeClass(css.disabled);  //删除向前向后按钮disable状态

            $.each([$calendarRoot, $calendarNextRoot], function (i, $n) {
                var d = i ? dateNext : date,
				   title = $n.children().eq(0),//tbody
				   weeks = $n.children().eq(1).children().eq(1),
				   dd,
                   caldata;

                var year = d.getFullYear(),
                month = d.getMonth(),
                day = d.getDate();

                if (conf.houseData) {
                    if ((year - min.getFullYear()) == 0) {
                        caldata = conf.houseData[month - min.getMonth()];
                    } else {
                        caldata = conf.houseData[month + 12 - min.getMonth()];
                    }
                }

                // variables
                var tmp = new Date(year, month, 1 - conf.firstDay), begin = tmp.getDay(),
                     days = dayAm(year, month);
                //prevDays = dayAm(year, month - 1);

                title.html(year + "年" + labels.shortMonths[month] + '月');

                // !begin === "sunday"
                //for (var j = !begin ? -7 : 0, a, num; j < (!begin ? 35 : 42); j++) {
                for (var j = 0, a, num; j < 42; j++) {
                    if (j % 7 == 0) {
                        var $curRow = $("<tr/>").appendTo(weeks);
                    }
                    $td = $("<td/>");

                    //  前后
                    //num = prevDays - begin + j + 1;
                    //date = new Date(year, month - 1, num);
                    //num = j - days - begin + 1;
                    //date = new Date(year, month + 1, num);
                    if (j < begin || j >= begin + days) {
                        $td.addClass(css.off);
                        num = "";
                        dd = null;
                    } else {
                        num = j - begin + 1;
                        dd = new Date(year, month, num);

						// modified by haozhang_6 remove today css for travel
                        // 对选中日期\今日进行样式处理
                        //if (isSameDay(value, dd)) {
                            //$td.attr("id", css.current).addClass(css.focus);
                        //} else if (isSameDay(now, dd)) {
                           // $td.attr("id", css.today);
                        //}
                    }

                    // 日期正确则压入
                    $td.text(num).data("date", dd);
                    //if (checkInDate && dd && dd.getTime() === checkInDate.getTime()) {
                    //    $td.data("tdTxt", $td.text()).text("入").addClass("checkIn");
                    //}
                    // 对不可选日期作出样式处理
                    if (min && dd < min && dd != null) {
                        $td.add(pm).addClass(css.disabled);
                        $curRow.append($td);
                        continue;
                    }
                    if (max && dd > max) {
                        $td.add(nm).addClass(css.disabled);
                        $curRow.append($td);
                        continue;
                    }

                    // 对房态进行处理
                    if (num && caldata) {
                        if (caldata[num - 1]) {
                            var houseNum = caldata[num - 1][0];
                            if (houseNum <= 0) {
                                $td.addClass("no-house");
                                hasNoHouse = true;
                            } else {
                                $td.addClass("has-house-status");
                            }
                            //if (type == 0) {
                            //    $td.addClass(css.deleted);
                            //} else {
                            //    if (conf.checkin) {
                            //        if (type == 2 || type == 3) {
                            //            $td.addClass(css.deleted);
                            //        }
                            //    } else {
                            //        if (type == 3 || type == 2) {
                            //            $td.addClass(css.deleted);
                            //        }
                            //    }
                            //}
                        }
                    }
                    $curRow.append($td);
                }
            });
            var tips = hasNoHouse ? '<div style="clear:left;padding:2px 0 0 5px;">当前日历中<span style="color:#f60;">部分日期无房</span></div>' : '<div style="clear:left;padding:2px 0 0 5px;">当前日期全部可住</div>';
            return $("<div/>").append($calendarRoot).append($calendarNextRoot).after(tips);
        }

        //给构造函数new出的对象绑定一些方法
        $.extend(self, {


            /**
            *   @public
            *   展开日历
            */
            show: function (e) {

                if (input.attr("readonly") || input.attr("disabled") || opened) { return; }

                // onBeforeShow
                e = e || $.Event();
                e.type = "onBeforeShow";
                fire.trigger(e);
                if (e.isDefaultPrevented()) { return; }

                $.each(instances, function () {
                    this.hide();
                });
                root.off("click", ".cal-close-btn").on("click", ".cal-close-btn", function () {
                    self.hide();
                });
                root.off("click", "#" + css.prev).on("click", "#" + css.prev, function () {
                    if (!$(this).hasClass(css.disabled)) {
                        self.addMonth(-2);
                    }
                    return false;
                });
                root.off("click", "#" + css.next).on("click", "#" + css.next, function () {
                    if (!$(this).hasClass(css.disabled)) {
                        self.addMonth();
                    }
                    return false;
                });
                /*bind mouseenter mouseleave event*/
                root.off("mouseenter").on("mouseenter", "td", function (e) {
                    var $td = $(this);
                    var curDate = $td.data("date");
                    if (!curDate) {
                        return;
                    }
					// modified by haozhang_6 remove tips for travel
                    /*if (checkInDate) {
                        switch (self.checkBook(checkInDate, curDate)) {
                            case bookStatus.curCheckIn:
                                self.showTips($td, e);
                                break;
                            case bookStatus.canCheckIn:
                                $td.data("tdTxt", $td.text()).text("入");
                                break;
                            case bookStatus.canCheckOut:
                                $td.data("tdTxt", $td.text()).text("退");
                                break;
                            case bookStatus.notCheck:
                                break;
                        }
                    } else {
                       
                            $td.data("tdTxt", $td.text()).text("入");
                        
                    }*/
                });
                root.off("mouseleave").on("mouseleave", "td", function () {
                    var $td = $(this);
                    if ($td.data("tdTxt") && !$td.hasClass("checkIn")) {
                        $td.text($td.data("tdTxt"));
                    }
                    /*remove tips*/
                    if ($td.hasClass("checkIn")) {
                        $td.children(".calendar-small-tips").remove();
                    }
                });

                root.off("click", "td").on("click", "td", function () {
                    var $td = $(this);
                    var curDate = $td.data("date");
					// modified by haozhang_6 remove tips for travel
                    /*if (checkInDate) {
                        switch (self.checkBook(checkInDate, curDate)) {
                            case bookStatus.curCheckIn:
                                checkInDate = null;
                                $td.removeClass("checkIn").text($td.data("tdTxt"));
                                break;
                            case bookStatus.canCheckIn:
                                //  $td.data("tdTxt", $td.text()).text("入");
                                self.updateCalUi();
                                $td.addClass("checkIn").text("入");
                                checkInDate = curDate;
                                break;
                            case bookStatus.canCheckOut:
                                input.trigger("dateConfirmed", { checkinDate: checkInDate, checkoutDate: curDate });
                                break;
                            case bookStatus.notCheck:
                                break;
                        }
                    } else {
                      
                            $td.addClass("checkIn").text("入");
                            checkInDate = curDate;
                      
                    }*/
                    return false;
                });
                opened = true;

                // set date
                self.setValue(value);

                // show calendar
                var pos = input.offset();

                // iPad position fix
                if (/iPad/i.test(navigator.userAgent)) {
                    pos.top -= $(window).scrollTop();
                }

                var bodyWidth = $(document.body).outerWidth(true);
                var posLeft = pos.left + conf.offset[1] + root.outerWidth(true);
                if ((posLeft - bodyWidth) > 0) {
                    posLeft = posLeft - (posLeft - bodyWidth)
                }

                root.css({
                    top: pos.top + input.outerHeight({ margins: true }) + conf.offset[0],
                    left: posLeft - root.outerWidth(true)
                });

                root.show();
                onShow(e);

                $(window).bind("resize.dateinput", function () {
                    var pos = input.offset(),
                     bodyWidth = $(document.body).outerWidth(true),
                     posLeft = pos.left + conf.offset[1] + root.outerWidth(true);

                    if ((posLeft - bodyWidth) > 0) {
                        posLeft = posLeft - (posLeft - bodyWidth)
                    }

                    root.css({
                        top: pos.top + input.outerHeight({ margins: true }) + conf.offset[0],
                        left: posLeft - root.outerWidth(true)
                    });
                }).bind("scroll.dateinput", function () {
                    clearTimeout(scrolltimer);
                    scrolltimer = setTimeout(function () {
                        var pos = input.offset(),
                             bodyWidth = $(document.body).outerWidth(true),
                             posLeft = pos.left + conf.offset[1] + root.outerWidth(true);

                        if ((posLeft - bodyWidth) > 0) {
                            posLeft = posLeft - (posLeft - bodyWidth)
                        }

                        root.css({
                            top: pos.top + input.outerHeight({ margins: true }) + conf.offset[0],
                            left: posLeft - root.outerWidth(true)
                        });
                    }, 10);
                });

                return self;
            },

            /**
            *   @public
            *
            *   设置日历输入框的值
            */
            setValue: function (year, month, day, noOpen) {
                var calHtml = getCalHtml(year, month, day, noOpen);
                $("#" + css.content).html(calHtml);
                // date picking
                //$("#calcontent").html(calHtml).find("td").unbind("click").bind("click", function (e) {
                //    var el = $(this);
                //    if (!(el.hasClass(css.disabled) || el.hasClass(css.deleted))) {
                //        $("#" + css.current).removeAttr("id");
                //        el.attr("id", css.current);
                //        select(el.data("date"), conf, e, el);
                //        //console.log(el.data("date"));
                //    }
                //    return false;
                //});

                return self;
            },

            // 设置日历的值，并且不打开日历
            setValueNoOpen: function (year, month, day) {
                var date = integer(month) >= -2 ? new Date(integer(year), integer(month), integer(day == undefined || isNaN(day) ? 1 : day)) : year || value;//,
                //noOpen = noOpen ? true : false;

                if (date < min) {
                    date = min;
                } else if (date > max) {
                    date = max;
                }

                input.val(format(date, conf.format, conf.lang));
                input.data("date", date);
                value = date;

                return self;
            },

            //}}}

            setMin: function (val, fit) {
                min = parseDate(val);
                if (fit && value < min) { self.setValue(min); }
                return self;
            },

            setMax: function (val, fit) {
                max = parseDate(val);
                if (fit && value > max) { self.setValue(max); }
                return self;
            },

            today: function () {
                return self.setValue(now);
            },

            addDay: function (amount) {
                return this.setValue(currYear, currMonth, currDay + (amount || 1));
            },

            addMonth: function (amount) {
                var targetMonth = currMonth + (amount || 2),
                daysInTargetMonth = dayAm(currYear, targetMonth),
                targetDay = currDay <= daysInTargetMonth ? currDay : daysInTargetMonth;

                return this.setValue(currYear, targetMonth, targetDay);
            },

            addYear: function (amount) {
                return this.setValue(currYear + (amount || 2), currMonth, currDay);
            },

            destroy: function () {
                input.add(document).unbind("click.d");
                root.add(trigger).remove();
                input.removeData("dateinput").removeClass(css.input);
                if (original) { input.replaceWith(original); }
            },

            hide: function (e) {

                if (opened) {

                    // onHide 
                    e = $.Event();
                    e.type = "onHide";
                    fire.trigger(e);

                    // cancelled ?
                    if (e.isDefaultPrevented()) { return; }

                    $(document).unbind("click.d").unbind("keydown.d");

                    // do the hide
                    root.hide();
                    opened = false;
                    checkInDate = null;
                    $(window).unbind("resize.dateinput").unbind("scroll.dateinput");
                }

                return self;
            },

            getConf: function () {
                return conf;
            },

            getInput: function () {
                return input;
            },

            getCalendar: function () {
                return root;
            },

            getValue: function (dateFormat) {
                return dateFormat ? format(value, dateFormat, conf.lang) : value;
            },

            isOpen: function () {
                return opened;
            },

            refreshDateInput: function (houseData) {
                conf.houseData = houseData;
            },
            getInventory: function (date) {
                var houseStatus = conf.houseData;
                var now = new Date();
                var year = date.getFullYear(),
                    month = date.getMonth(),
                    day = date.getDate(),
                    calData;
                // roll year & month
                if (month == -1) {
                    month = 11;
                    year--;
                } else if (month == 12) {
                    month = 0;
                    year++;
                }
                if (houseStatus) {
                    if ((year - now.getFullYear()) == 0) {
                        calData = houseStatus[month - now.getMonth()];
                    } else {
                        calData = houseStatus[month + 12 - now.getMonth()];
                    }
                    if (calData[day - 1][0]) {
                        return true;
                    }
                }
                return false;
            },
            checkInventory: function (checkinDate, checkoutDate) {
                //checkinDate、checkoutDate，其中一个没有设置值，则不认为是一个区间，直接返回true
                if (checkinDate && checkoutDate) {
                    var date = new Date(checkinDate.getFullYear(), checkinDate.getMonth(), checkinDate.getDate());
                    for (; date < checkoutDate; date.setDate(date.getDate() + 1)) {
                        var inventory = self.getInventory(date);
                        if (!inventory || inventory <= 0) {
                            return false;
                        }
                    }
                }
                return true;
            },
            checkBook: function (checkInDate, checkOutDate) {
                if (checkInDate && checkOutDate) {
                    checkInDate = new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate());
                    checkOutDate = new Date(checkOutDate.getFullYear(), checkOutDate.getMonth(), checkOutDate.getDate());
                    if (checkInDate.getTime() === checkOutDate.getTime()) {
                        return bookStatus.curCheckIn;
                    } else if (checkInDate.getTime() > checkOutDate.getTime()) {
                        return bookStatus.canCheckIn;
                    } else if (checkInDate.getTime() < checkOutDate.getTime()) {
                        return bookStatus.canCheckOut;
                    } else {
                        return bookStatus.notCheck;
                    }
                   
                } 
                   
            },
            showTips: function ($td) {
                $td.css("position","relative");
                $('<div class="calendar-small-tips">点击取消入住</div>').appendTo($td).css({
                    position: "absolute",
                    left: "-32px",
                    top: "-30px"
                });
            },
            updateCalUi: function () {
                var $checkIn = root.find("td.checkIn");
                $checkIn.removeClass("checkIn").text($checkIn.data("tdTxt"));
            }
        });

        // callbacks    //这里用于给self绑定事件,在each方法中可以存储遍历的值
        $.each(['onBeforeShow', 'onShow', 'change', 'beforeChange', 'onHide', 'onEmpty'], function (i, name) {

            // configuration
            if ($.isFunction(conf[name])) {
                $(self).bind(name, conf[name]);
            }

            // API methods              
            self[name] = function (fn) {
                if (fn) { $(self).bind(name, fn); }
                return self;
            };
        });

        // show dateinput & assign keyboard shortcuts
        input.bind("focus.d click.d", self.show).keydown(function (e) {

            var key = e.keyCode;

            // open dateinput with navigation keyw
            if (!opened && $(KEYS).index(key) >= 0) {
                self.show(e);
                return e.preventDefault();
            }

            if (conf.editable) {
                if (opened && (key == 8 || key == 46)) {
                    input.val("");
                    e = e || $.Event();
                    e.type = "onEmpty";
                    fire.trigger(e);
                    if (e.isDefaultPrevented()) { return; }
                }
            }

            if (key == 9) {
                self.hide();
            }

            // allow tab
            return key == 9 ? true : e.preventDefault();

        });

        input.attr({
            "autocomplete": "off",
            "spellcheck": "false",
            "dir": "ltr"//,
            //"draggable": "false"
        })

        // initial value        
        if (parseDate(input.val())) {
            select(value, conf);
        }

    }
    //@自定义一个:date选择器，用于选择日历控件元素
    $.expr[':'].date = function (el) {
        var type = el.getAttribute("type");
        return type && type == 'date' || !!$(el).data("dateinput");
    };


    $.fn.dateinputSingleStatus = function (conf) {

        // already instantiated
        if (this.data("dateinput")) { return this; }

        // configuration
        conf = $.extend(true, {}, tool.conf, conf);

        // CSS prefix @修改日历控件中的类名
        $.each(conf.css, function (key, val) {
            if (!val && key != 'prefix') {
                conf.css[key] = (conf.css.prefix || '') + (val || key);
            }
        });

        var els;

        this.each(function () {
            var el = new Dateinput($(this), conf);
            instances.push(el);
            var input = el.getInput().data("dateinput", el);
            els = els ? els.add(input) : input;
        });

        return els ? els : this;
    };


})(jQuery);