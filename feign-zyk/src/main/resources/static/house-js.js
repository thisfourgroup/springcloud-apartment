document.write('<script src="/javascript/jsFiles.js"></script>')
$(function () {
    queryHouseInfo();
    querySheShiInfo();
    queryRules();
    queryHouseImage();
    initTime();
})

var minTime = "";
var maxTime = "";
var housePrice;

function initTime() {
    $('input[name="datePicker"]').daterangepicker({
        beforeShowDay: function () {
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [array.indexOf(string) == -1]
        },
        timePicker: true, //显示时间
        timePicker24Hour: true, //时间制
        startDate: moment(new Date()), //设置开始日期
        endDate: moment().hours(99999).minutes(99999).seconds(99999), //设置结束器日期
        maxDate: moment().hours(99999).minutes(99999).seconds(99999), //设置最大日期
        "opens": "center",
        ranges: {
            // '今天': [moment(), moment()],
            '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            '上周': [moment().subtract(6, 'days'), moment()],
            '前30天': [moment().subtract(29, 'days'), moment()],
            '本月': [moment().startOf('month'), moment().endOf('month')],
            '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        showWeekNumbers: true,
        locale: {
            format: "YYYY-MM-DD", //设置显示格式
            applyLabel: '确定', //确定按钮文本
            cancelLabel: '取消', //取消按钮文本
            customRangeLabel: '自定义',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'
            ],
            firstDay: 1
        },
    }, function (start, end, label) {
        timeRangeChange = [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')];
        minTime = timeRangeChange[0];
        maxTime = timeRangeChange[1];
        console.log(minTime);
        console.log(maxTime);
    });
}

function queryHouseInfo() {
    $.ajax({
        url: '/house/queryHouseById',
        data: {houseId: 5},
        success: function (result) {
            var html = "<p>" + result.name + "</p>";
            var region = "<span>" + result.provinceName + "--" + result.cityName + "</span>";
            var desc = "<span>" + result.houseDescribe + "</span>"
            var price = "<span>" + result.price + "</span>"
            housePrice = result.price;
            var maxPrice = "<span>" + result.discount + "</span>";
            $('#houseTitle').html(html);
            $('#regionId').html(region);
            $('#houseDesc').html(desc);
            $('#housePriceId').html(maxPrice);
            $('#houseMaxPrice').html(price);
            $('#houseIdInfo').append("<span style='margin-left: 10px;'>(房屋编号 " + result.id + ")</span>")
        },
        error: function () {

        }
    })
}

function reserveMehted() {
    $.ajax({
        url: '/house/reserveMehted',
        success: function (result) {
            console.log(minTime)
            console.log(maxTime)
            console.log(housePrice)
            if (result) {
                $.ajax({
                    url: '/house/queryTime',
                    data: {
                        minTime: minTime,
                        maxTime: maxTime,
                        housePrice: housePrice
                    },
                    success: function (result) {
                        bootbox.alert({
                            size: "large",
                            title: "<span style='font-size: 25px'>消息",
                            message: "<span style='font-size: 20px'>您好,您预定的房屋一共需要支付 <span style='color: red;font-size: 25px'>" + result + " </span>人民币,请准备好你的钱包,等我开发完您就可以进行支付了</span>",
                            callback: function () { /* your callback code */
                            }
                        })
                    },
                    error: function () {

                    }
                })
            } else {
                bootbox.alert({
                    size: "large",
                    title: "<span style='font-size: 25px;color: #b92c28'>提示</span>",
                    message: "<span style='font-size: 20px;color: red'>您还没有登录,请先登录!!!</span>",
                    callback: function () { /* your callback code */
                    }
                })
            }
        },
        error: function () {

        }
    })
}

function queryHouseImage() {
    $.ajax({
        url: '/house/queryHosueImage',
        data: {houseId: 3},
        success: function (result) {
            console.log(result)
            var html = "";
            $.each(result, function (index, row) {
                index = index+8
                $('#image_' + index).prop('src', row.imgUrl)
            })

        },
        error: function () {

        }
    })
}


function queryRules() {

    $.ajax({
        url: '/house/queryRulesByHouseId',
        data: {houseId: 3},
        success: function (result) {
            var rules = "";
            $.each(result, function (index, row) {
                if (row.checked) {
                    rules += "<li class='not'><i class='iconfont'></i>" + row.rulesInfo + "</li>";
                }
                rules += "<li> <i class='iconfont'></i>" + row.rulesInfo + "</li>";
            })
            $('#rulesDiv').html(rules)
        },
        error: function () {

        }
    })
}

function querySheShiInfo() {
    $.ajax({
        url: 'house/queryFacilitys',
        data: {houseId: 3},
        success: function (result) {
            $.each(result, function (index, row) {
                var html = "<span>" + row.facName + "</span>"
                $('#sheshiId' + index).html(html)
                var value = "";
                $.each(row.children, function (i, val) {
                    if (val.checked) {
                        value += "<li>" + val.facName + "</li>"
                    }
                    value += "<li class='i-not'>" + val.facName + "</li>"
                })
                $('#sheshiinfo_' + index).html(value);
            })
        },
        error: function () {

        }
    })
}
