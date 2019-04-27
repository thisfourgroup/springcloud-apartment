webpackJsonp([3], {
    "1": function (t, n, e) {
        "use strict";
        var i = e(55), a = e(22);
        t.exports = a("prod", i)
    }, "11": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0});
        var i = e(71), a = (e.n(i), e(74));
        e.n(a), e(26);
        e(29), e(27), e(28), e(30), window.tjGlobal = window.tjGlobal || {}, window.tjGlobal.host = e.i({
            "NO_VERSION_STATIC_CDN_PREFIX": "https://wpp.tujia.com",
            "SERVER_DOMAIN": "tujia.com",
            "TUJIA_DOMAIN": "tujia.com",
            "TUJIA_HOST": "https://www.tujia.com",
            "GO_TUJIA_HOST": "https://go.tujia.com",
            "PASSPORT_TUJIA_HOST": "https://passport.tujia.com",
            "VIP_TUJIA_HOST": "https://vip.tujia.com",
            "STATICFILE_TUJIA_HOST": "https://staticfile.tujia.com",
            "PIC_TUJIA_HOST": "https://pic.tujia.com",
            "P_TUJIA_HOST": "https://p.tujia.com",
            "API_TUJIA_HOST": "https://api.tujia.com",
            "IM_TUJIA_HOST": "https://im.tujia.com",
            "CONTENT_TUJIA_HOST": "https://content.tujia.com",
            "TRAVEL_TUJIA_HOST": "https://travel.tujia.com",
            "EDIT_TUJIA_HOST": "https://edit.tujia.com",
            "BP_TUJIA_HOST": "https://bp.tujia.com",
            "BOOKING_TUJIA_HOST": "https://booking.tujia.com",
            "COMMENT_TUJIA_HOST": "https://comment.tujia.com",
            "HOTEL_TUJIA_HOST": "https://hotel.tujia.com",
            "ORDER_TUJIA_HOST": "https://order.tujia.com",
            "PAY_TUJIA_HOST": "https://pay.tujia.com",
            "TUJING_TUJIA_HOST": "https://tujing.tujia.com",
            "OWNER_TUJIA_HOST": "https://owner.tujia.com",
            "MERCHANTCRM_TUJIA_HOST": "https://merchantcrm.tujia.com",
            "MERCHANT_TUJIA_HOST": "https://merchant.tujia.com",
            "M_TUJIA_HOST": "https://m.tujia.com",
            "PWA_TUJIA_HOST": "https://pwa.tujia.com",
            "PWASTATIC_TUJIA_HOST": "https://pwastatic.tujia.com",
            "FELOG_TUJIA_HOST": "https://felog.tujia.com"
        }), window.tjAlert = e(9)["default"].alert
    }, "111": function (t, n, e) {
        "use strict";
        $(".g-collp-link").on("click", function (t) {
            var n = $(t.target);
            return n.hasClass("g-collp-link-cls") ? (n.removeClass("g-collp-link-cls"), n.parent().addClass("g-link-hide")) : (n.addClass("g-collp-link-cls"), n.parent().removeClass("g-link-hide")), !1
        })
    }, "12": function (t, n, e) {
        "use strict";
        Function.prototype.bind || (Function.prototype.bind = function (t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var n = Array.prototype.slice.call(arguments, 1), e = this, i = function () {
            }, a = function () {
                return e.apply(this instanceof i ? this : t, n.concat(Array.prototype.slice.call(arguments)))
            };
            return this.prototype && (i.prototype = this.prototype), a.prototype = new i, a
        })
    }, "126": function (t, n, e) {
        "use strict";

        function i() {
            o.a.remove(r.ctripSource, {"domain": s})
        }

        n["a"] = i;
        var a = e(182), o = e.n(a), s = "tujia.com",
            r = (window.tjGlobal && window.tjGlobal.host && window.tjGlobal.host.TUJIA_DOMAIN, {"ctripSource": "Partner_PartnerStyle"})
    }, "13": function (t, n) {
        function e(t) {
            for (var n = $(".t-navbar ul.t-fl li a"), e = 0; e < n.length; e++) {
                var i = $(n[e]);
                e === t ? i.addClass("t-nav-cata-on") : i.removeClass("t-nav-cata-on")
            }
        }

        function i(t) {
            t && t.userID || t && t.userId ? ($(".g-login .m-unlogin").remove(), t.enumCustomerAccountFlag && (t.enumCustomerAccountFlag.toLowerCase().indexOf("mercant") > -1 || t.enumCustomerAccountFlag.toLowerCase().indexOf("fangdong") > -1 || t.enumCustomerAccountFlag.toLowerCase().indexOf("pms") > -1 || t.enumCustomerAccountFlag.toLowerCase().indexOf("owner") > -1) ? (-1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("mercant") && -1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("fangdong") && -1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("pms") ? $(".g-login .m-tujing-merchant-system").remove() : $(".g-login .m-tujing-merchant-send").remove(), -1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("owner") && $(".m-yezhu-nav").remove()) : ($(".g-login .m-tujing-merchant-system").remove(), $(".m-yezhu-nav").remove())) : ($(".g-login .m-login").remove(), $(".m-yezhu-nav").remove(), $(".m-tujing-merchant-system").remove()), $(".g-login").removeClass("z-hidden")
        }

        var a = $(".m-tujing-merchant-send");
        a.on("mouseover", function () {
            $(this).find(".pop-box").show()
        }), a.on("mouseout", function () {
            $(this).find(".pop-box").hide()
        }), n.initIndex = e, n.updateLoginInfo = i
    }, "130": function (t, n, e) {
        "use strict";
        var i = function (t) {
            this._selectedIndex = -1, this._opts = t || {}, this._tabs = [], this._tabContents = []
        };
        i.prototype = {
            "setSelected": function (t) {
                if (t != this._selectedIndex) {
                    -1 != this._selectedIndex && this._active(this._selectedIndex, !1), this._active(t, !0), this._selectedIndex = t;
                    var n = this._opts.fn;
                    $.isFunction(n) && n.call(this, this._selectedIndex)
                }
            }, "setTabDisabled": function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.index, e = t.select;
                if (!(n < 0 || n > this._tabs.length - 1)) {
                    $(this._tabs[n]).hide();
                    var i = $(this._tabs[n]).index(), a = this._tabs.length, o = 0;
                    for ("number" == typeof e && (o = o < 0 || o > a - 1 ? 0 : e); o < a && o == i;) o++;
                    this.setSelected(o)
                }
            }, "install": function () {
                this._opts.selectedIndex >= 0 && (this._selectedIndex = this._opts.selectedIndex)
            }, "_active": function (t, n) {
                var e = this._opts.on, i = this._opts.contentOn;
                n ? ($(this._tabContents[t]).show(), e && $(this._tabs[t]).addClass(e), i && $(this._tabContents[t]).addClass(i)) : ($(this._tabContents[t]).hide(), e && $(this._tabs[t]).removeClass(e), i && $(this._tabContents[t]).removeClass(i))
            }, "addTab": function (t, n) {
                var e = this, i = this._tabs.length;
                $(t).attr("_twi", i), this._tabs.push(t), this._tabContents.push(n), $(t).click(function (t) {
                    for (var n = t.target, i = null; n && !(i = $(n).attr("_twi"));) n = n.parentNode;
                    return e.setSelected(parseInt(i)), t.preventDefault(), t.stopPropagation(), !1
                })
            }, "getSelected": function () {
                return this._selectedIndex
            }
        };
        var a = function (t, n, e) {
            var a = new i(e), o = $("#" + t + " > li"), s = $("#" + n + " > li");
            return o.each(function (t, n) {
                a.addTab(n, s.get(t))
            }), a
        };
        n.TabWidget = i, n.initTabFrom = a
    }, "137": function (t, n, e) {
        "use strict";

        function i(t) {
            console.log("360分析unitId" + t), function (n, e) {
                n[e] = "function" == typeof n[e] ? n[e] : function () {
                    (n[e].c = n[e].c || []).push(arguments)
                }, _qha("send", {"et": 30, "id": t, "vendorId": ""})
            }(window, "_qha")
        }

        function a(t, n, e) {
            console.log("360分析数据：unitId=" + t + "，总间夜=" + n + "，总价格=" + e), function (i, a) {
                i[a] = "function" == typeof i[a] ? i[a] : function () {
                    (i[a].c = i[a].c || []).push(arguments)
                }, _qha("send", {"et": 32, "goods": [{"id": t, "vendorId": "", "name": "", "price": e, "quantity": n}]})
            }(window, "_qha")
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), n["renderFenxiUnitDetail"] = i, n["renderFenxiOrderFill"] = a
    }, "139": function (t, n, e) {
        "use strict";

        function i() {
            e.i(o["a"])({
                "appId": window.location.host,
                "platform": "tujia-pc",
                "logversion": "1.0",
                "tujia_code": r,
                "tujia_code_site": c,
                "path": "webActionLog",
                "utm_source": l
            }), e.i(o["b"])("userId", s)
        }

        function a() {
            setTimeout(function () {
                e.i(o["c"])(window.location.href)
            }, 0)
        }

        n["a"] = i, n["b"] = a;
        var o = e(200), s = (e(126), window.tjGlobal && window.tjGlobal.userId),
            r = window.tjGlobal && window.tjGlobal.tujia_code, c = window.tjGlobal && window.tjGlobal.tujia_code_site,
            l = window.tjGlobal && window.tjGlobal.tujia_utm
    }, "14": function (t, n, e) {
        function i(t) {
            return e(a(t))
        }

        function a(t) {
            var n = o[t];
            if (!(n + 1)) throw new Error("Cannot find module '" + t + "'.");
            return n
        }

        var o = {
            "./deploy_dev.json": 17,
            "./deploy_fvt.json": 18,
            "./deploy_prod.json": 19,
            "./deploy_t1.json": 20,
            "./deploy_t2.json": 21
        };
        i.keys = function () {
            return Object.keys(o)
        }, i.resolve = a, t.exports = i, i.id = 14
    }, "142": function (t, n, e) {
        function i() {
            this.pageId = "", this.maxShowPageItem = 5
        }

        e(145), i.prototype = {
            "init": function (t, n, e) {
                this.pageId = e["class"], this.maxShowPageItem = e.maxShowPageItem, this.totalPageCount = e.totalPageCount, this.callBack = e.callBack, !0 === e.ignoreFirstRender || this.initPage(this.totalPageCount, n), this.initPageEvent(t)
            }, "initPage": function (t, n) {
                t < 0 && (t = 0), n <= 0 && (n = 1), this.setPagepageCount(t, n)
            }, "setPagepageCount": function (t, n, e) {
                t = parseInt(t), n = parseInt(n), this.totalPageCount = t, this.initPageEvent(t), this.initWithUI(t, n), e || this.viewPage(n, this.data)
            }, "initWithUI": function (t, n) {
                console.log(t, n);
                var e = this.getPageListModel(t, n);
                $("." + this.pageId).html(e)
            }, "initPageEvent": function (t) {
                var n = this;
                $("." + this.pageId).off("click", "ul .pageItem"), $("." + this.pageId).on("click", "ul .pageItem", function () {
                    return n.setPagepageCount(t, $(this).attr("page-data")), !1
                })
            }, "viewPage": function (t, n) {
                this.callBack(t)
            }, "getPageListModel": function (t, n) {
                var e = n - 1, i = n + 1, a = "pageItem", o = "pageItem";
                e <= 0 && (a = "pageItemDisable"), i > t && (o = "pageItemDisable");
                var s = 1;
                n - parseInt(this.maxShowPageItem / 2) > 0 && n + parseInt(this.maxShowPageItem / 2) <= t ? s = n - parseInt(this.maxShowPageItem / 2) : n - parseInt(this.maxShowPageItem / 2) > 0 && n + parseInt(this.maxShowPageItem / 2) > t && (s = t - this.maxShowPageItem + 1) <= 0 && (s = 1);
                var r = "<ul>", c = parseInt(this.maxShowPageItem), l = s, d = null;
                1 !== n && (r += "<li class='pageItem' page-data='1' page-rel='prepage'>首页</li><li class='" + a + "' page-data='" + e + "' page-rel='prepage'>上一页</li>"), n > 4 && (r += "<li class='pageItem dot-more' page-data='" + (l - 1 > 0 ? l - 1 : 1) + "' page-rel='prepage'>...</li>"), t < c && (c = t);
                for (var u = 0; u < c; u++) {
                    var p = s++, h = "pageItem";
                    p == n && (h = "pageItemActive"), r += "<li class='" + h + "' page-data='" + p + "' page-rel='itempage'>" + p + "</li>"
                }
                return d = s, t - n > 4 && (r += "<li class='pageItem dot-more' page-data='" + (d <= t ? d : t) + "' page-rel='prepage'>...</li>"), n !== t && (r += "<li class='" + o + "' page-data='" + i + "' page-rel='nextpage'>下一页</li><li class='pageItem' page-data=" + t + " page-rel='prepage'>尾页</li><li class='"), r += "</ul>", 0 === t ? "" : r
            }
        }, n.Pagination = i
    }, "143": function (t, n, e) {
        "use strict";

        function i() {
            o.call(this)
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "TJPageRequest", function () {
            return i
        });
        var a = e(24), o = e(34)["default"];
        i.prototype = new o, i.prototype.callbackHandle = function (t, n, e, i) {
            t ? n.isSuccess ? i && i(!0, {
                "data": n.data,
                "commonData": n.commonData
            }) : (a["a"].ipMonitor(n), i && i(!1, null, {
                "errorNo": n.errorNo,
                "errorMsg": n.errorMsg
            })) : i && i(t, null, e)
        }
    }, "144": function (t, n) {
    }, "145": function (t, n) {
    }, "15": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.config, a = i.$escape;
            return n += '<div class="base-alert">\n  <div class="alert-header">\n    ', e.title && (n += '\n    <span class="title">', n += a(e.title), n += "</span>\n    "), n += '\n  </div>\n  <div class="alert-cont">\n    <h2>', n += a(e.content), n += '</h2>\n  </div>\n  <div class="alert-footer">\n    <span class="ensure btn">', n += a(e.ensure), n += "</span>\n    ", e.cancel && (n += '\n    <span class="cancel btn">', n += a(e.cancel), n += "</span>\n    "), n += "\n  </div>\n</div>\n"
        }
    }, "16": function (t, n) {
    }, "17": function (t, n) {
        t.exports = {
            "NO_VERSION_STATIC_CDN_PREFIX": "http://static.dev.tujia.com",
            "SERVER_DOMAIN": "dev.tujia.com",
            "TUJIA_DOMAIN": "dev.tujia.com",
            "TUJIA_HOST": "http://www.dev.tujia.com",
            "GO_TUJIA_HOST": "http://go.dev.tujia.com",
            "PASSPORT_TUJIA_HOST": "http://passport.dev.tujia.com",
            "VIP_TUJIA_HOST": "http://vip.dev.tujia.com",
            "STATICFILE_TUJIA_HOST": "http://staticfile.dev.tujia.com",
            "PIC_TUJIA_HOST": "http://pic.dev.tujia.com",
            "P_TUJIA_HOST": "http://p.dev.tujia.com",
            "API_TUJIA_HOST": "http://api.dev.tujia.com",
            "IM_TUJIA_HOST": "http://im.dev.tujia.com",
            "CONTENT_TUJIA_HOST": "http://content.dev.tujia.com",
            "TRAVEL_TUJIA_HOST": "http://travel.dev.tujia.com",
            "EDIT_TUJIA_HOST": "http://edit.dev.tujia.com",
            "BP_TUJIA_HOST": "http://bp.dev.tujia.com",
            "BOOKING_TUJIA_HOST": "http://booking.dev.tujia.com",
            "COMMENT_TUJIA_HOST": "http://comment.dev.tujia.com",
            "HOTEL_TUJIA_HOST": "http://hotel.dev.tujia.com",
            "ORDER_TUJIA_HOST": "http://order.dev.tujia.com",
            "PAY_TUJIA_HOST": "http://pay.dev.tujia.com",
            "TUJING_TUJIA_HOST": "http://tujing.dev.tujia.com",
            "OWNER_TUJIA_HOST": "http://owner.dev.tujia.com",
            "MERCHANTCRM_TUJIA_HOST": "http://merchantcrm.dev.tujia.com",
            "MERCHANT_TUJIA_HOST": "http://merchant.dev.tujia.com",
            "M_TUJIA_HOST": "http://m.dev.tujia.com",
            "PWA_TUJIA_HOST": "http://pwa.dev.tujia.com",
            "PWASTATIC_TUJIA_HOST": "https://pwastatic.dev.tujia.com",
            "FELOG_TUJIA_HOST": "https://felog.fvt.tujia.com"
        }
    }, "18": function (t, n) {
        t.exports = {
            "NO_VERSION_STATIC_CDN_PREFIX": "https://wpp.fvt.tujia.com",
            "SERVER_DOMAIN": "fvt.tujia.com",
            "TUJIA_DOMAIN": "fvt.tujia.com",
            "TUJIA_HOST": "https://www.fvt.tujia.com",
            "GO_TUJIA_HOST": "https://go.fvt.tujia.com",
            "PASSPORT_TUJIA_HOST": "https://passport.fvt.tujia.com",
            "VIP_TUJIA_HOST": "https://vip.fvt.tujia.com",
            "STATICFILE_TUJIA_HOST": "https://staticfile.fvt.tujia.com",
            "PIC_TUJIA_HOST": "https://pic.fvt.tujia.com",
            "P_TUJIA_HOST": "https://p.fvt.tujia.com",
            "API_TUJIA_HOST": "https://api.fvt.tujia.com",
            "IM_TUJIA_HOST": "https://im.fvt.tujia.com",
            "CONTENT_TUJIA_HOST": "https://content.fvt.tujia.com",
            "TRAVEL_TUJIA_HOST": "https://travel.fvt.tujia.com",
            "EDIT_TUJIA_HOST": "https://edit.fvt.tujia.com",
            "BP_TUJIA_HOST": "https://bp.fvt.tujia.com",
            "BOOKING_TUJIA_HOST": "https://booking.fvt.tujia.com",
            "COMMENT_TUJIA_HOST": "https://comment.fvt.tujia.com",
            "HOTEL_TUJIA_HOST": "https://hotel.fvt.tujia.com",
            "ORDER_TUJIA_HOST": "https://order.fvt.tujia.com",
            "PAY_TUJIA_HOST": "https://pay.fvt.tujia.com",
            "TUJING_TUJIA_HOST": "https://tujing.fvt.tujia.com",
            "OWNER_TUJIA_HOST": "https://owner.fvt.tujia.com",
            "MERCHANTCRM_TUJIA_HOST": "https://merchantcrm.fvt.tujia.com",
            "MERCHANT_TUJIA_HOST": "https://merchant.fvt.tujia.com",
            "M_TUJIA_HOST": "https://m.fvt.tujia.com",
            "PWA_TUJIA_HOST": "https://pwa.fvt.tujia.com",
            "PWASTATIC_TUJIA_HOST": "https://pwastatic.fvt.tujia.com",
            "FELOG_TUJIA_HOST": "https://felog.fvt.tujia.com"
        }
    }, "188": function (t, n) {
    }, "19": function (t, n) {
        t.exports = {
            "NO_VERSION_STATIC_CDN_PREFIX": "https://wpp.tujia.com",
            "SERVER_DOMAIN": "tujia.com",
            "TUJIA_DOMAIN": "tujia.com",
            "TUJIA_HOST": "https://www.tujia.com",
            "GO_TUJIA_HOST": "https://go.tujia.com",
            "PASSPORT_TUJIA_HOST": "https://passport.tujia.com",
            "VIP_TUJIA_HOST": "https://vip.tujia.com",
            "STATICFILE_TUJIA_HOST": "https://staticfile.tujia.com",
            "PIC_TUJIA_HOST": "https://pic.tujia.com",
            "P_TUJIA_HOST": "https://p.tujia.com",
            "API_TUJIA_HOST": "https://api.tujia.com",
            "IM_TUJIA_HOST": "https://im.tujia.com",
            "CONTENT_TUJIA_HOST": "https://content.tujia.com",
            "TRAVEL_TUJIA_HOST": "https://travel.tujia.com",
            "EDIT_TUJIA_HOST": "https://edit.tujia.com",
            "BP_TUJIA_HOST": "https://bp.tujia.com",
            "BOOKING_TUJIA_HOST": "https://booking.tujia.com",
            "COMMENT_TUJIA_HOST": "https://comment.tujia.com",
            "HOTEL_TUJIA_HOST": "https://hotel.tujia.com",
            "ORDER_TUJIA_HOST": "https://order.tujia.com",
            "PAY_TUJIA_HOST": "https://pay.tujia.com",
            "TUJING_TUJIA_HOST": "https://tujing.tujia.com",
            "OWNER_TUJIA_HOST": "https://owner.tujia.com",
            "MERCHANTCRM_TUJIA_HOST": "https://merchantcrm.tujia.com",
            "MERCHANT_TUJIA_HOST": "https://merchant.tujia.com",
            "M_TUJIA_HOST": "https://m.tujia.com",
            "PWA_TUJIA_HOST": "https://pwa.tujia.com",
            "PWASTATIC_TUJIA_HOST": "https://pwastatic.tujia.com",
            "FELOG_TUJIA_HOST": "https://felog.tujia.com"
        }
    }, "192": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = i.$each, a = t.data, o = (t.value, t.index, i.$escape);
            return n += '<span class="breadcrumb-item">\n  <span class="breadcrumb-item-inner">\n    <a href="https://www.tujia.com/">途家网</a>\n  </span>  \n  <span class="breadcrumb-item-separator">&gt;</span> \n</span>\n', e(a, function (t, e) {
                n += '\n  <span class="breadcrumb-item">\n    ', null !== t.url ? (n += ' \n      <span class="breadcrumb-item-inner isClick ', n += o(t.long ? "isLong" : ""), n += '"><a href="', n += o(t.url), n += '">', n += o(t.label), n += "</a></span>\n    ") : (n += '\n      <span class="breadcrumb-item-inner">', n += o(t.label), n += "</span>\n    "), n += '\n    <span class="breadcrumb-item-separator">&gt;</span>\n  </span>\n'
            }), n += " "
        }
    }, "194": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "handleBreadcurmbData", function () {
            return d
        });
        var i = e(267), a = e.n(i), o = e(266), s = e.n(o), r = e(128), c = e.n(r);
        e(144);
        var l = e(192), d = function (t, n) {
            var e = [{}, {}, {}], i = location.pathname, o = !1, r = !1;
            if (n) return $(function () {
                var n = l({"data": t});
                $(".breadcrumb").html(n)
            }), !1;
            t.forEach(function (t) {
                2 === t.gType && 1 !== t.type && (r = !0), 0 === t.gType && 42 === t.type ? e[0].a = t.label : 1 === t.gType && 27 === t.type ? e[0].b = "度假公寓" : e[0].c = "公寓住宿"
            });
            var d = {"state": !1, "data": null};
            t.forEach(function (n, a) {
                if (0 === n.gType && 42 === n.type) e[1].a = n.label; else if (2 === n.gType) e[1].b = n.label + "附近"; else if (3 === n.gType && 21 === n.type) e[1].c = n.label + "元"; else if (1 === n.gType && 26 === n.type) e[1].d = n.label; else if (1 === n.gType && 23 === n.type) "256" === n.value ? e[1].e = "有wifi可上网" : "8" !== n.value && "4" !== n.value && "4" !== n.value || (e[1].e = "带" + n.label); else if (1 === n.gType && 6 === n.type && "18801" === n.value) e[1].e = "可做饭"; else if (1 === n.gType && 24 === n.type && "2" === n.value) e[1].e = "带宠物"; else if (1 === n.gType && 24 === n.type && "8" === n.value) e[1].e = "适合聚会轰趴"; else if (1 === n.gType && 22 === n.type && "256" === n.value) e[1].e = "有发票"; else if (1 === n.gType && 6 === n.type && "18800" === n.value) {
                    o = !0;
                    var s = e[1].a + "月租公寓";
                    e[1] = {"a": s}
                } else 1 === n.gType && 27 === n.type ? e[1].x = "度假公寓" : e[1].x = "公寓住宿";
                a === t.length - 1 && r && (e[1].x = "酒店公寓"), a === t.length - 1 && /^\/duanzu_\w*/.test(i) && (e[1].x = "短租公寓"), (1 === n.gType && 54 === n.type || 1 === n.gType && 2 === n.type) && (d.state = !0, d.data = n), a === t.length - 1 && d.state && (e[1].x = d.data.label + "住宿")
            }), o && t.forEach(function (n, i) {
                0 === n.gType && 42 === n.type ? e[2].a = n.label : 2 === n.gType ? e[2].b = n.label + "附近" : 3 === n.gType && 21 === n.type ? e[2].c = n.label + "元" : 1 === n.gType && 26 === n.type ? e[2].d = n.label : 1 === n.gType && 23 === n.type ? "256" === n.value ? e[2].e = "有wifi可上网" : "8" !== n.value && "4" !== n.value && "4" !== n.value || (e[2].e = "带" + n.label) : 1 === n.gType && 6 === n.type && "18801" === n.value ? e[2].e = "可做饭" : 1 === n.gType && 24 === n.type && "2" === n.value ? e[2].e = "带宠物" : 1 === n.gType && 24 === n.type && "8" === n.value ? e[2].e = "适合聚会轰趴" : 1 === n.gType && 22 === n.type && "256" === n.value ? e[2].e = "有发票" : 1 === n.gType && 25 === n.type && "4" === n.value ? e[2].e : 1 === n.gType && 23 === n.type && "4" === n.value && e[2].e, i === t.length - 1 && (e[2].x = "月租公寓")
            });
            var u = [];
            e.map(function (t) {
                for (var n = "", e = c()(t).sort(), i = 0; i < e.length; i++) n += t[e[i]];
                n && u.push(n)
            }), u = s()(new a.a(u));
            var p = u.map(function (t, n) {
                return 0 === n ? 1 === u.length ? {"label": t, "url": null} : {
                    "label": t,
                    "url": "https://www.tujia.com/" + /(\/\w+)/g.exec(i)[0]
                } : 1 === n ? 2 === u.length ? {"label": t, "url": null} : {
                    "label": t,
                    "url": "https://www.tujia.com/" + /(\/\w+)+/g.exec(i)[0],
                    "long": o
                } : 2 === n ? {"label": t, "url": null} : void 0
            }), h = l({"data": p});
            $(".breadcrumb").html(h)
        }
    }, "195": function (t, n, e) {
        "use strict";
        var i = e(73).Dialog, a = e(25).CalUtil, o = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i.call(this, t), this._opts = t, this.$pane = null, this._selection = [], this.build()
        };
        o.STATE_EMPTY = 0, o.STATE_NO_ASSIGN = 1, o.STATE_NO_HOUSE = 2, o.STATE_HAS_HOUSE = 3, $.extend(o.prototype, i.prototype);
        var s = o.prototype;
        s.step = function (t) {
            var n = this._opts.baseDate;
            n = n ? new Date(n.getTime()) : new Date, a.clearMSM(n), n.setDate(1), n.setMonth(n.getMonth() + t), this._opts.baseDate = n, this._render()
        }, s.setBaseDay = function (t) {
            this._opts.baseDay = t
        }, s.loopTd = function (t) {
            for (; t && "TD" != t.nodeName;) t = t.parentNode;
            return t
        }, s.setSelectionStart = function (t) {
            this._selection.length = 0, this._selection[0] = t, this.step(0)
        }, s.getRangeArr = function () {
            for (var t = this._selection.slice(0), n = t[0], e = t[1], i = {}, a = new Date(parseInt(n)).getMonth() + 1, o = new Date(parseInt(e)).getMonth() + 1; a <= o;) i[a++] = [];
            for (; n <= e;) {
                var s = new Date(parseInt(n));
                i[s.getMonth() + 1].push(s.getDate()), n += 864e5
            }
            return i
        }, s._rangeCheck = function (t, n) {
            var e = this._selection;
            if (0 == e.length) e[0] = n; else if (1 == e.length) {
                e[1] = n;
                var i = Math.min(e[0], e[1]), a = Math.max(e[0], e[1]);
                e[0] = i, e[1] = a
            } else e.length = 0, e[0] = n;
            this.step(0);
            var o = e.slice(0), s = this._opts.onSelection;
            $.isFunction(s) && s.apply(this, o)
        }, s._rngCls = function (t, n) {
            var e = this._selection;
            return n == e[0] ? "date-rng-start" : n == e[1] ? "date-rng-end" : n < e[1] && n > e[0] ? "date-rng-span" : ""
        }, s.build = function () {
            var t = this, n = this._opts.parent ? this._opts.parent : "body";
            this.$pane = $('<div class="house-status-box"></div>').appendTo(n), this.$pane.hide(), this._render(), this.hideEvent(), this.$pane.delegate(".icon-close", "click", function (n) {
                return t.hide(), !1
            }), this.$pane.delegate(".house-cal-prev, .house-cal-next", "click", function (n) {
                $(n.target).hasClass("house-cal-prev") ? t.step(-1) : t.step(1)
            }), this.$pane.delegate("td[data-date-index]", "click", function (n) {
                var e = $(t.loopTd(n.target)), i = e.data("date-index");
                if (e.hasClass("day-nohouse-date")) return !1;
                var o = +e.data("ts"), s = new Date(o);
                return a.clearMSM(s), t._rangeCheck(i, s.getTime()), !1
            })
        }, s._render = function () {
            var t = (new Date, this._opts.baseDate), n = [];
            t || (t = new Date);
            var e = new Date(t.getTime());
            e.setDate(1);
            var i = e.getFullYear(), o = e.getMonth() + 1, s = e.getDate(), r = e.getDay(), c = this._selection,
                l = c.length > 0;
            a.copyFrom(t, e), e.setDate(1), e.setMonth(e.getMonth() + 1), e.setDate(1), e.setDate(e.getDate() - 1);
            for (var d = e.getDate(), u = e.getDay(), p = 0; p < r; p++) n.push('\n      <td class="default-date"></td>\n    ');
            a.copyFrom(t, e);
            for (var p = s; p <= d; p++) {
                e.setDate(p);
                var h = e.getDay(), f = e.getTime();
                h % 7 == 0 && n.push("\n              </tr>\n              <tr>\n      ");
                var m = "day-dafault-date", v = this._opts.onSingleDay, g = null, b = "", y = "";
                if ($.isFunction(v) && (g = v.call(this, f, p, e))) switch (g.state) {
                    case 2:
                        m = "day-nohouse-date", y = '<span class="no-house">无房</span>';
                        break;
                    case 3:
                        m = "day-remainhouse-date", b = '<span class="house-price">￥' + g.price + "</span>", y = '<span class="remain-num">还有' + g.house + "套</span>"
                }
                if (l) {
                    var w = this._rngCls(e, f);
                    w && (m += " " + w)
                }
                n.push('\n      <td class="' + m + '" data-ts="' + f + '" data-date-index="' + p + '">\n        ' + b + '\n        <span class="date-number">' + p + "</span>\n        " + y + '\n        <p class="checkIn">入住\n        <span class="days-number">' + p + '</span>\n        </p>\n        <p class="checkOut">离店\n        <span class="days-number">' + p + '</span>\n        </p>\n        <p class="checkRange">\n        <span class="days-number">' + p + "</span>\n        </p>\n      </td>\n\n    ")
            }
            for (var T = u + 1; T < 7; T++) n.push('\n        <td class="default-date"></td>\n      ');
            var _ = '\n    <i class="icon-close iconfont">&#xe0aa</i>\n    <div class="status-title-box">\n      <span class="status-title">\n        <a class="house-cal-prev" href="javascript:;"></a>\n        <a class="house-cal-next" href="javascript:;"></a>\n        ' + i + "年" + o + '月</span>\n      </div>\n    <div class="cal-content">\n    <table>\n      <thead>\n        <tr>\n          <th>日</th>\n          <th>一</th>\n          <th>二</th>\n          <th>三</th>\n          <th>四</th>\n          <th>五</th>\n          <th>六</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n        ' + n.join("") + '\n        </tr>\n      </tbody>\n    </table>\n    </div>\n    <p class="prompt-information">在日历上选择入住退房日期，可重新查询</p>\n  ';
            this.$pane.html(_)
        }, n.HouseCal = o
    }, "20": function (t, n) {
        t.exports = {
            "NO_VERSION_STATIC_CDN_PREFIX": "https://static1.fvt.tujia.com",
            "SERVER_DOMAIN": "fvt.tujia.com",
            "TUJIA_DOMAIN": "fvt.tujia.com",
            "TUJIA_HOST": "https://www1.fvt.tujia.com",
            "GO_TUJIA_HOST": "https://go1.fvt.tujia.com",
            "PASSPORT_TUJIA_HOST": "https://passport1.fvt.tujia.com",
            "VIP_TUJIA_HOST": "https://vip1.fvt.tujia.com",
            "STATICFILE_TUJIA_HOST": "https://staticfile1.fvt.tujia.com",
            "PIC_TUJIA_HOST": "https://pic1.fvt.tujia.com",
            "P_TUJIA_HOST": "https://p1.fvt.tujia.com",
            "API_TUJIA_HOST": "https://api1.fvt.tujia.com",
            "IM_TUJIA_HOST": "https://im1.fvt.tujia.com",
            "CONTENT_TUJIA_HOST": "https://content1.fvt.tujia.com",
            "TRAVEL_TUJIA_HOST": "https://travel.fvt.tujia.com",
            "EDIT_TUJIA_HOST": "https://edit1.fvt.tujia.com",
            "BP_TUJIA_HOST": "https://bp1.fvt.tujia.com",
            "BOOKING_TUJIA_HOST": "https://booking1.fvt.tujia.com",
            "COMMENT_TUJIA_HOST": "https://comment1.fvt.tujia.com",
            "HOTEL_TUJIA_HOST": "https://hotel1.fvt.tujia.com",
            "ORDER_TUJIA_HOST": "https://order1.fvt.tujia.com",
            "PAY_TUJIA_HOST": "https://pay1.fvt.tujia.com",
            "TUJING_TUJIA_HOST": "https://tujing1.fvt.tujia.com",
            "OWNER_TUJIA_HOST": "https://owner1.fvt.tujia.com",
            "MERCHANTCRM_TUJIA_HOST": "https://merchantcrm1.fvt.tujia.com",
            "MERCHANT_TUJIA_HOST": "https://merchant1.fvt.tujia.com",
            "M_TUJIA_HOST": "https://m1.fvt.tujia.com",
            "PWA_TUJIA_HOST": "https://pwa1.fvt.tujia.com",
            "PWASTATIC_TUJIA_HOST": "https://pwastatic1.fvt.tujia.com",
            "FELOG_TUJIA_HOST": "https://felog.fvt.tujia.com"
        }
    }, "21": function (t, n) {
        t.exports = {
            "NO_VERSION_STATIC_CDN_PREFIX": "https://static2.fvt.tujia.com",
            "SERVER_DOMAIN": "fvt.tujia.com",
            "TUJIA_DOMAIN": "fvt.tujia.com",
            "TUJIA_HOST": "https://www2.fvt.tujia.com",
            "GO_TUJIA_HOST": "https://go2.fvt.tujia.com",
            "PASSPORT_TUJIA_HOST": "https://passport2.fvt.tujia.com",
            "VIP_TUJIA_HOST": "https://vip2.fvt.tujia.com",
            "STATICFILE_TUJIA_HOST": "https://staticfile2.fvt.tujia.com",
            "PIC_TUJIA_HOST": "https://pic2.fvt.tujia.com",
            "P_TUJIA_HOST": "https://p2.fvt.tujia.com",
            "API_TUJIA_HOST": "https://api2.fvt.tujia.com",
            "IM_TUJIA_HOST": "https://im2.fvt.tujia.com",
            "CONTENT_TUJIA_HOST": "https://content2.fvt.tujia.com",
            "TRAVEL_TUJIA_HOST": "https://travel2.fvt.tujia.com",
            "EDIT_TUJIA_HOST": "https://edit2.fvt.tujia.com",
            "BP_TUJIA_HOST": "https://bp2.fvt.tujia.com",
            "BOOKING_TUJIA_HOST": "https://booking2.fvt.tujia.com",
            "COMMENT_TUJIA_HOST": "https://comment2.fvt.tujia.com",
            "HOTEL_TUJIA_HOST": "https://hotel2.fvt.tujia.com",
            "ORDER_TUJIA_HOST": "https://order2.fvt.tujia.com",
            "PAY_TUJIA_HOST": "https://pay2.fvt.tujia.com",
            "TUJING_TUJIA_HOST": "https://tujing2.fvt.tujia.com",
            "OWNER_TUJIA_HOST": "https://owner2.fvt.tujia.com",
            "MERCHANTCRM_TUJIA_HOST": "https://merchantcrm2.fvt.tujia.com",
            "MERCHANT_TUJIA_HOST": "https://merchant2.fvt.tujia.com",
            "M_TUJIA_HOST": "https://m2.fvt.tujia.com",
            "PWA_TUJIA_HOST": "https://pwa2.fvt.tujia.com",
            "PWASTATIC_TUJIA_HOST": "https://pwastatic2.fvt.tujia.com",
            "FELOG_TUJIA_HOST": "https://felog.fvt.tujia.com"
        }
    }, "22": function (t, n, e) {
        var i = e(58), a = function (t, n) {
            console.log("bind in mode %s", t);
            var a = e(14)("./deploy_" + t + ".json");
            return Object.keys(a).forEach(function (t, e) {
                n[t] = a[t]
            }), "local" == i.env.NODE_DEPLOYLOCAL && (n["NO_VERSION_STATIC_CDN_PREFIX"] = ""), n
        };
        t.exports = a
    }, "23": function (t, n, e) {
        "use strict";

        function i(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            n || s["a"].init(), p.postRequest("/bingo/pc/Config/getCommonConfigs", null, function (n, o, s) {
                window.tjGlobal.userInfo = o.userInfo, window.tujiaTnsConf = o.tns, r.updateLoginInfo(n ? o.userInfo || {} : {}), t(n, o, s), n && a(o, e, i)
            })
        }

        function a(t, n, e) {
            setTimeout(function () {
                t.popupAdvertisement && !e && l.initPopupAds(t.popupAdvertisement), n || l.initBottomAds();
                var i = $("#tujia_page_navbar");
                d.init({
                    "qimoClientInfo": {
                        "nickName": t.userInfo ? t.userInfo.mobile : "",
                        "userId": t.userInfo && (t.userInfo.userId || t.userInfo.userID) ? t.userInfo.userId || t.userInfo.userID : "-544208800"
                    },
                    "imConfig": {
                        "imVersion": t.config.imVersion,
                        "serverDomain": t.config.serverDomain,
                        "orderNoticeRadio": t.config.orderNoticeRadio,
                        "tujiaClientId": t.config.tujiaClientId,
                        "portalUrl": i.data("tujia-host"),
                        "apiUrl": i.data("api-tujia-host"),
                        "vipUrl": i.data("vip-tujia-host"),
                        "imUrl": i.data("im-tujia-host"),
                        "imJsUrl": t.config.imURL
                    }
                }), o["default"].dynamicAddScript("//webchat.7moor.com/javascripts/7moorInit.js?accessId=797098a0-b29d-11e5-b3b1-49764155fe50&autoShow=false")
            }, 50)
        }

        var o = e(59), s = e(72);
        e(11), e(12);
        var r = e(13), c = $("#tujia_page_navbar");
        c.data("cnd-static");
        e(36), e(41), e(38), e(39);
        var l = e(37), d = e(40), u = e(8).TJRequestV2, p = new u, h = function () {
            s["a"].init()
        };
        n["a"] = {"initPage": i, "initStatisticsFun": h}
    }, "248": function (t, n, e) {
        t.exports = e.p + "static/img/loading.9c388e9.gif"
    }, "25": function (t, n, e) {
        "use strict";
        var i = e(92).Calendar, a = function (t, n) {
            this._date = t, this._opts = n || {}
        };
        a.rngCache = null, a.prototype._rngCls = function (t, n) {
            var e = a.rngCache;
            return e || (e = a.rngCache = o.getNow()), e.setTime(t.getTime()), o.clearMSM(e), n[0] == e.getTime() || n[1] == e.getTime() ? "range-edge" : e.getTime() < n[1] && e.getTime() > n[0] ? "range-span" : void 0
        }, a.prototype.toHtml = function () {
            var t = [], n = o.toYYYYMM(this._date), e = o.getNow(), i = "";
            if (!0 === this._opts.nextCtrl) i = "t-cal-ctrl t-cal-ctrl-next"; else if (!0 === this._opts.prevCtrl) {
                var a = o.compareDate(o.MONTH, e, this._date);
                i = a < 0 ? "t-cal-ctrl t-cal-ctrl-prev" : "t-cal-ctrl t-cal-ctrl-prev hide"
            } else i = "t-cal-ctrl hide";
            var s = this._opts.onSingleDay, r = "function" == typeof s;
            t.push('\n      <div class="t-calendar t-bx">\n        <div class="t-bx-head"><a href="javascript:;" class="' + i + '"></a>' + n + '</div>\n        <div class="t-bx-body">\n          <table>\n            <thead>\n              <tr>\n                <th class="weekend">日</th>\n                <th>一</th>\n                <th>二</th>\n                <th>三</th>\n                <th>四</th>\n                <th>五</th>\n                <th class="weekend">六</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n  ');
            var l = new Date(this._date.getTime());
            l.setDate(1);
            var d = l.getDate(), u = l.getDay(), p = this._opts.selectionRange, h = 2 == p.length;
            o.copyFrom(this._date, l), l.setDate(1), l.setMonth(l.getMonth() + 1), l.setDate(1), l.setDate(l.getDate() - 1);
            for (var f = l.getDate(), m = l.getDay(), v = 0; v < u; v++) t.push('\n      <td class="ep"></td>\n    ');
            o.copyFrom(this._date, l);
            var g = void 0 !== this._opts.disableDayBefore && this._opts.disableDayBefore instanceof Date, b = null,
                y = 0;
            g && (b = o.getNow(), o.copyFrom(this._opts.disableDayBefore, b), o.clearMSM(b), y = b.getTime());
            var w = void 0 !== this._opts.disableDayAfter && this._opts.disableDayAfter instanceof Date, T = null,
                _ = 0;
            w && (T = o.getNow(), o.copyFrom(this._opts.disableDayAfter, T), o.clearMSM(T), _ = T.getTime());
            for (var v = d; v <= f; v++) {
                l.setDate(v);
                var I = l.getDay(), $ = l.getTime();
                I % 7 == 0 && t.push("\n              </tr>\n              <tr>\n      ");
                var S = "day";
                if (g && l.getTime() < y ? S = "disable" : w && l.getTime() > _ && (S = "disable"), h) {
                    var x = this._rngCls(l, p);
                    x && (S += " " + x)
                }
                if (r) {
                    var C = s.call(this, v, $, l);
                    "string" == typeof C && (S += " " + C)
                }
                if (o.sameDay(e, l)) t.push('\n        <td class="' + S + '" data-ts="' + $ + '" data-date-index="' + v + '">今天</td>\n      '); else {
                    var A = c(l, v);
                    t.push('\n        <td class="' + S + '" data-ts="' + $ + '" data-date-index="' + v + '">' + A + "</td>\n      ")
                }
            }
            for (var j = m + 1; j < 7; j++) t.push('\n        <td class="ep"></td>\n      ');
            return t.push("\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  "), t.join("")
        }, n.CalView = a;
        var o = {
            "toYYYYMM": function (t) {
                return t.getFullYear() + "年" + (t.getMonth() + 1) + "月"
            }, "makeDisableDateEnd": function () {
                var t = o.getNow();
                return o.clearMSM(t), t.setMonth(t.getMonth() + 6), t.setDate(t.getDate() - 2), t
            }, "toConYYMMDD": function (t) {
                var n = new Date(t), e = n.getMonth() + 1, i = n.getDate();
                return n.getFullYear() + "-" + (e < 10 ? "0" + e : e) + "-" + (i < 10 ? "0" + i : i)
            }, "padZero": function (t, n) {
                return (t < 10 ? "0" + t : t) + "" + (n < 10 ? "0" + n : n)
            }, "makeDefaultRange": function () {
                var t = o.getNow();
                o.clearMSM(t);
                var n = t.getTime();
                return t.setDate(t.getDate() + 1), [n, t.getTime()]
            }, "formatRange": function (t, n) {
                var e = o.getNow();
                e.setTime(t);
                var i = this.formatDate(e);
                return e.setTime(n), i + " 至 " + this.formatDate(e)
            }, "formatDate": function (t) {
                return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
            }, "clearMSM": function (t) {
                t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0)
            }, "copyFrom": function (t, n) {
                n.setTime(t.getTime())
            }, "getNow": function () {
                return new Date
            }, "compareDate": function (t, n, e) {
                switch (t) {
                    case o.YEAR:
                        return n.getFullYear() - e.getFullYear();
                    case o.MONTH:
                        return n.getFullYear() != e.getFullYear() ? n.getFullYear() - e.getFullYear() : n.getMonth() - e.getMonth();
                    case o.DATE:
                        return n.getTime() - e.getTime();
                    default:
                        return 0
                }
            }, "sameDay": function (t, n) {
                return t.getFullYear() == n.getFullYear() && t.getMonth() == n.getMonth() && t.getDate() == n.getDate()
            }
        };
        o.YEAR = 1, o.MONTH = 2, o.DATE = 3, o.GREG = 1, o.TRID = 2, o.FORE = 3, n.CalUtil = o;
        var s = {}, r = function () {
        }, c = function (t, n) {
            var e = s[o.GREG], a = o.padZero(t.getMonth(), t.getDate()), r = e[a];
            if (r) return r;
            var c = i.solar2lunar(t.getFullYear(), t.getMonth() + 1, t.getDate()), l = o.padZero(c.IMonth, c.IDay),
                d = s[o.TRID], u = d[l];
            if (u) return u;
            var p = s[o.FORE], h = p[a];
            return h || (void 0 !== n ? n : t.getDate())
        };
        n.registerFest = r, n.getFest = c;
        !function () {
            s[o.GREG] = {"0001": "元旦", "0401": "五一", "0901": "国庆"}, s[o.TRID] = {
                "0505": "端午",
                "0815": "中秋",
                "0101": "春节",
                "0102": "初二",
                "0103": "初三"
            }, s[o.FORE] = {"1124": "圣诞"}
        }()
    }, "252": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "isPreviewVisiting", function () {
            return o
        }), e.d(n, "getPreviewGUID", function () {
            return s
        });
        var i = e(35), a = null, o = function () {
            return (a = i["a"].queryString("unit_guid")) && "off" == i["a"].queryString("ssr")
        }, s = function () {
            return a
        }
    }, "256": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$escape;
            return e && e[0] && "true" === e[0].IsLandlordStory && (n += '\n<div class="m-listing-cont" >\n  <div class="sidebar-hd"><h2>房东故事</h2></div>\n  <div class="diary-cont" UnitID="18837">\n    <img alt="" src="', n += a(e[0].AbsoluteDefaultPicture), n += '" width="310px" heigth="192px"/>\n    <div class="diary-info">\n      <h3 class="diary-tit">', n += a(e[0].Title), n += '</h3>\n      <div class="diary-text">\n        ', n += a(e[0].Summary), n += '\n        <p class="link-cont"><a href="', n += a(e[0].AbsoluteArticleUrl), n += '" target="_blank">查看全文</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n'), n += "\n"
        }
    }, "257": function (t, n, e) {
        e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="view-tel">\n <div class="view-number-wrap">\n    <div class="view-number-head">\n      <h2>查看临时号码</h2>\n      <i id="closeBtn" class="icon iconfont" title="关闭">&#xe0aa</i>\n    </div>\n    <div class="view-number-body">\n      <div class="step-cont" >\n         <span class="step1"><i class="order">1</i>输入您的手机号</span><span class="step2"><i class="order">2</i>获取临时号码，并拨打</span>\n      </div>\n      \n      <div class="number-wrap">\n        <div class="num-box" >\n          <input class="tel-val" placeholder="请输入你的手机号码" />\n          <button id="getNumberConfirmBtn" data-ismayi="False" inuse="true" >获取临时号码</button>\n        </div>\n\n        <div class="tel-landlord" style="display:none">\n          <p class="tel-self">请用您的手机号 <span id="input-num-info">1865555</span><span class="change" id="change">修改</span></p>\n          <p class="show-tel">拨打临时号码：<span id="gotNumber">13912345678</span></p>\n        </div>\n        <div class="tel-four" style="display:none">\n           联系电话：<span id="tel-four-info"> 400-606-1230转21879</span>\n        </div>\n      </div>\n      <div class="prompt-info prompt1" style="display:none">\n        <p>注：输入的手机号须为您拨打使用的手机号，否则无法接通</p>\n        <ol >\n          <li>为保障双方信息安全，获取到的170号码为途家提供的一次性临时号码，并非房东手机号，下次拨打仍需重新获取临时号码；</li>\n          <li>下单成功后，您可以通过订单详情或者确认短信查看房东的真实手机号；</li>\n          <li>请确保在途家平台进行交易，以防诈骗! 如与房东私下交易产生纠纷，途家不承担任何责任；</li>\n        </ol>\n      </div>\n      <div class="prompt-info prompt2" style="display:none">\n        <ol>\n          <li>请确保在途家平台进行交易，以防诈骗! 如与房东私下交易产生纠纷，途家不承担任何责任</li>\n        </ol>\n      </div>\n\n    </div>\n\n\n  \n</div>\n\n    \n<div id="exposeMask"></div>\n</div>\n'
        }
    }, "26": function (t, n, e) {
        "use strict";
        var i = e(5);
        e.i(i["b"])({"userId": tjGlobal.userInfo && tjGlobal.userInfo.userId})
    }, "27": function (t, n) {
    }, "28": function (t, n) {
    }, "29": function (t, n) {
    }, "3": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "getQueryString", function () {
            return i
        }), e.d(n, "parseQueryString", function () {
            return a
        }), e.d(n, "getCookie", function () {
            return o
        }), e.d(n, "setCookie", function () {
            return s
        }), e.d(n, "deleteCookie", function () {
            return r
        }), e.d(n, "modifyCookie", function () {
            return c
        });
        var i = function (t) {
            var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), e = location.search.substr(1).match(n);
            return null !== e ? decodeURIComponent(e[2]) : null
        }, a = function () {
            var t = /([^?&=]+)=([^&#]*)/g, n = {};
            return location.search.replace(t, function (t, e, i) {
                var a = decodeURIComponent(e), o = decodeURIComponent(i);
                return n[a] = o, t
            }), n
        }, o = function (t) {
            if (document.cookie.length > 0) {
                var n = document.cookie.indexOf(t + "=");
                if (-1 != n) {
                    n = n + t.length + 1;
                    var e = document.cookie.indexOf(";", n);
                    return -1 == e && (e = document.cookie.length), unescape(document.cookie.substring(n, e))
                }
            }
            return ""
        }, s = function (t, n, e, i) {
            if (e) {
                var a = new Date;
                a.setTime(a.getTime() + 24 * e * 60 * 60 * 1e3);
                var o = "; expires=" + a.toGMTString()
            } else var o = "";
            document.cookie = t + "=" + n + o + "; path=/" + (i ? ";domain=" + i : "")
        }, r = function (t) {
            var n = new Date;
            n.setTime(n.getTime() - 1), document.cookie = t + "=; expires=" + n.toGMTString() + ";path=/"
        }, c = function (t, n, e) {
            r(t), s(t, n, e)
        }
    }, "30": function (t, n) {
    }, "341": function (t, n, e) {
        e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="unitDetailInfo clearfix" id="unitdetailinfo">\n  \n#if($respond)\n#set($data = $respond.data)\n    \x3c!--吸顶--\x3e\n    <div class="house-tab-box" data-ssr="true">\n    <div class="house-tab" id="contentTab">\n        <ul class="clearfix">\n            <li class="item-first current">\n                <a href="#unitdetailinfo">房屋详情</a>\n            </li>\n            <li>\n                <a href="#unitcheckinneedtoknow">预订须知</a>\n            </li>\n            <li>\n                <a href="#unitmap">位置地图</a>\n            </li>\n            #if($data.commentSummary)\n            #if($data.commentSummary.totalCount != 0)\n            <li>\n                <a href="#comment">房屋点评（<span class="comment-total">$!data.commentSummary.totalCount条</span>）</a>\n            </li>\n            #end\n            #end\n            #if($talentExperience)\n            <li id="talentExp" class="ssr-hide hide">\n                <a href="#talentExperience">达人体验</a>\n            </li>\n            #end\n\n            <li class="item-last">\n                <a href="#product-date" id="tabbookbtn" class="book-btn">查看房价</a>\n                <a href="#product-date" id="tabbookprice"><span class="price-value"><dfn class="f-vt">￥</dfn> <i class="priceInfo"></i></span></a>\n            </li>\n        </ul>\n    </div>\n    </div>\n\n    \x3c!--房屋亮点--\x3e\n    #if($data.unit.highLight)\n    <div data-ssr="true" class="unit-cont highlight-cont line-dashed" id="unitdetailinfo">\n        <div class="side-box">\n            <i class="iconfont highlight">&#xe085;</i>\n            <h3>房屋亮点</h3>\n        </div>\n        <div class="content-box">\n            <ol class="highlight-info">\n                #foreach($value in $data.unit.highLight)\n                <li>$value</li>\n                #end\n            </ol>\n        </div>\n    </div>\n    #end\n    \x3c!--设施服务--\x3e\n    #if($data.unit.facilities)\n    <div class="unit-cont facility-cont line-dashed">\n        <div class="side-box">\n            <i class="iconfont">&#xe086;</i>\n            <h3>设施服务</h3>\n        </div>\n        <div class="content-box">\n            <div class="facility-list" id="listWrap">\n                #foreach($facility in $data.unit.facilities)\n                <h5>$facility.groupName</h5>\n                <ul class="clearfix">\n                    #foreach($tags in $facility.tags)\n                        #if($tags.deleted)\n                            <li class="i-not"><i class="iconfont">&#x$tags.code;</i>$tags.name</li>\n                        #else\n                            #if($tags.name == "部分空调")\n                            <li title="部分卧室客厅有空调"><i class="iconfont">&#x$tags.code;</i>$tags.name</li>\n                            #else\n                            <li><i class="iconfont">&#x$tags.code;</i>$tags.name</li>\n                            #end\n                        #end\n\n                    #end\n                </ul>\n                #end\n            </div>\n            <div class="show-all-btn" id="facilityshowmore">\n                <a href="javascript:;">查看全部</a><i class="icon-arrow down"></i>\n            </div>\n        </div>\n    </div>\n    #end\n    \x3c!--房屋描述--\x3e\n    #if($data.unit.introduction)\n    <div class="unit-cont intro-cont line-dashed">\n        <div class="side-box">\n            <i class="iconfont">&#xe083;</i>\n            <h3>房屋描述</h3>\n        </div>\n        <div class="content-box">\n            <div class="desc-info">$data.unit.introduction</div>\n            #if($data.unit.surroundingIntroduction)\n            #foreach($surround in $data.unit.surroundingIntroduction)\n            <div class="desc-info">\n                #if($surround.title)\n                <p>$surround.title</p>\n                #end\n                $surround.introduction\n            </div>\n            #end\n            #end\n\n            <div class="show-all-btn" id="introshowmore">\n                <a href="javascript:;">查看全部</a><i class="icon-arrow down"></i>\n            </div>\n        </div>\n    </div>\n    #end\n\n    \x3c!--小区概况--\x3e\n    #if($data.unit.residentialQuarter)\n    <div class="unit-cont resident-cont line-dashed">\n        <div class="side-box">\n            <i class="iconfont">&#xe084;</i>\n            <h3>小区概况</h3>\n        </div>\n        <div class="content-box">\n            <div class="resident-info">\n            \x3c!--小区名称--\x3e\n            #if($data.unit.residentialQuarter.name)\n                <div class="cont-info">$data.unit.residentialQuarter.name</div>\n            #end\n            \x3c!--小区介绍--\x3e\n            #if($data.unit.residentialQuarter.introduction)\n                <div class="cont-info">$data.unit.residentialQuarter.introduction</div>\n            #end\n            \x3c!--小区设施--\x3e\n            #if($data.unit.residentialQuarter.facilities)\n                <div class="cont-info">\n                    #foreach($value in $data.unit.residentialQuarter.facilities)\n                        <p>$value</p>\n                    #end\n                </div>\n            #end\n            \x3c!--特色--\x3e\n            #if($data.unit.residentialQuarter.feature)\n                <div class="cont-info">$data.unit.residentialQuarter.feature</div>\n            #end\n            \x3c!--安保措施--\x3e\n            #if($data.unit.residentialQuarter.security)\n                <div class="cont-info">$data.unit.residentialQuarter.security</div>\n            #end\n            \x3c!--年份--\x3e\n            #if($data.unit.residentialQuarter.buildYear)\n                <div class="cont-info label-text">年份-$data.unit.residentialQuarter.buildYear</div>\n            #end\n            \x3c!--绿化率--\x3e\n            #if($data.unit.residentialQuarter.greening)\n                <div class="cont-info label-text">绿化率-$data.unit.residentialQuarter.greening%</div>\n            #end\n            \x3c!--停车费--\x3e\n            #if($data.unit.residentialQuarter.parking)\n                <div class="cont-info label-text">停车费-$data.unit.residentialQuarter.parking</div>\n            #end\n            \x3c!--便利店--\x3e\n            #if($data.unit.residentialQuarter.accessoriesSummary)\n                <div>$data.unit.residentialQuarter.accessoriesSummary</div>\n            #end\n            \x3c!--小区图片--\x3e\n            #if($data.unit.residentialQuarter.housePictures)\n            <div class="cont-info">\n                <ul class="cont-pic clearfix">\n                    #foreach($value in $data.unit.residentialQuarter.housePictures)\n                    <li>\n                        <a class="group1" rel="$value">\n                            <img ', n += 'src="$value"', n += ' width="70" height="43" >\n                        </a>\n                    </li>\n                    #end\n                </ul>\n            </div>\n            #end\n            </div>\n            <div class="show-all-btn" id="residentshowmore">\n                <a href="javascript:;">查看全部</a><i class="icon-arrow down"></i>\n            </div>\n        </div>\n    </div>\n    #end\n#end\n\n\n</div>\n'
        }
    }, "36": function (t, n, e) {
        !function () {
            $.ajaxSetup({
                "dataFilter": function (t) {
                    return t && (t.indexOf("wafcode") > -1 || t.indexOf("monitorcode") > -1) && (t = JSON.parse(t), 999 !== t.wafcode && 998 !== t.wafcode || t.data && t.data.redirectURL && (window.location.href = t.data.redirectURL), 999 === t.monitorcode && (window.location.href = "https://m.tujia.com/pwa/verify_code?returnurl=" + encodeURIComponent(window.location.href) + "&host=" + t.host)), t
                }
            }), $.ajax()
        }()
    }, "363": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e(513);
        var i = e(254), a = e(441), o = (e(89), e(56)), s = o.hasSSRView, r = function (t) {
            var n = $(".swiper-container");
            s(n) || n.html(a({"data": t.unit.picUrlList, "unitInstanceCount": t.unit.unitInstanceCount}));
            var e = null;
            $(".swiper-container").length && i && (e || (e = new i(".swiper-container", {
                "loop": !0,
                "slidesPerView": "auto",
                "loopedSlides": 8
            }), $(".thumb-prev").on("click", function () {
                e.swipePrev()
            }), $(".thumb-next").on("click", function () {
                e.swipeNext()
            })))
        };
        n["default"] = {"initRender": r}
    }, "364": function (t, n, e) {
        function i() {
            d(h, function (t, n, e) {
                t ? ($(".comment-group").html(l(n)), s(), a(), setTimeout(function () {
                    $(".group2.cboxelement").powerFloat({
                        "offsets": {"x": 0, "y": 0},
                        "eventType": "hover",
                        "position": "7-5",
                        "targetMode": "ajax"
                    })
                }, 1e3), $(".avatarPic").attr("src", p)) : $(".comment-group").html('\n            <div class="t-layer-loading">' + e.errorMsg + "</div>\n          ")
            })
        }

        function a() {
            $(".htl-reply");
            $(".btn-cont a").click(function () {
                "收起回复" == $(this).text() ? ($(this).parent().siblings(".htl-reply").hide(), $(this).text("查看房东回复")) : ($(this).parent().siblings(".htl-reply").show(), $(this).text("收起回复"))
            })
        }

        function o() {
            var t = $("#overallScore").text(), n = 20 * t + "%";
            $(".score").css("width", n)
        }

        function s() {
            $(".comment-detail").each(function () {
                var t = $(this).children("span").text();
                if (t.length > 230) {
                    var n = t.substr(0, 230), e = t.slice(230);
                    $(this).html("<span>" + n + '</span><a href="javascript:;" class="showMore" style="color: #3b83cb;">展开全部</a>');
                    $(".showMore");
                    $(this).find(".showMore").click(function () {
                        "展开全部" == $(this).text() ? ($(this).text("收起"), $(this).parent().children("span").html(n + e)) : "收起" == $(this).text() && ($(this).text("展开全部"), $(this).parent().children("span").html(n))
                    })
                }
            })
        }

        e(514), e(97);
        var r = (e(70), e(130).initTabFrom), c = e(436), l = e(437), d = e(89).getSearchUnitComments,
            u = (e(89).getUnit3, e(142).Pagination), p = void 0,
            h = {"hasPic": !1, "pageIndex": 1, "pageSize": 10, "unitId": 5e5, "recommended": !1}, f = function (t, n) {
                var e = $(".comment-container");
                if (t) {
                    if (e.html(c({"data": t})), p = t.landlordSummary.logoUrl, t.commentSummary) {
                        var s = Math.ceil(t.commentSummary.totalCount / 10),
                            l = (Math.ceil(t.commentSummary.recommendedCount / 10), Math.ceil(t.commentSummary.pictureCommentCount / 10));
                        n && (h.unitId = n);
                        var d = {
                            "class": "pagination",
                            "maxShowPageItem": 5,
                            "totalPageCount": s,
                            "callBack": function (t) {
                                h.pageIndex = t - 1, i();
                                var n = $("#comment-summary").offset().top;
                                $(".pagination ul li").each(function () {
                                    $(this).click(function () {
                                        $("html,body").animate({"scrollTop": n + 90}, 350)
                                    })
                                })
                            }
                        }, f = new u;
                        f.init(d.totalPageCount, h.pageIndex, d), function () {
                            r("comment_filter", "comment_list", {
                                "on": "current", "selectedIndex": 0, "fn": function (t) {
                                    this.selectedIndex = t, 1 === t ? (h.hasPic = !0, h.recommended = !1, h.pageIndex = 1, d.totalPageCount = l, console.log("-----101010"), console.log()) : 0 === t && (h.hasPic = !1, h.recommended = !1, h.pageIndex = 1, d.totalPageCount = s), f.init(d.totalPageCount, h.pageIndex, d)
                                }
                            }).install()
                        }()
                    }
                    a(), o(), $(".comment-benefit").powerFloat({
                        "eventType": "hover",
                        "reverseSharp": !0,
                        "position": "3-2"
                    })
                }
            };
        n.initRender = f
    }, "365": function (t, n, e) {
        "use strict";
        var i = 0, a = null, o = function (t) {
            0 == (i & t) && (i |= t), 3 == (3 & i) && "function" == typeof a && a.call(a)
        }, s = function (t) {
            a = t
        };
        n.setFutureCall = s, n.setFlag = o, n.FLAG_TALENT = 1, n.FLAG_PRICE = 2
    }, "366": function (t, n, e) {
        "use strict";

        function i(t, n, e, i, a) {
            u = t, p = n, h = e, d = a, f = i
        }

        function a(t) {
            if (!t || 0 === tjGlobal.unitTagBadges.length) return [];
            for (var n = [], e = 0; e < tjGlobal.unitTagBadges.length; e++) {
                var i = tjGlobal.unitTagBadges[e], a = Math.pow(2, e);
                (a & t) === a && n.push(i)
            }
            return n
        }

        function o(t, n) {
            for (var e = $(t), i = $(n), a = 0; a < e.length; a++) e[a].onmouseover = function (t) {
                return function () {
                    i[t].style.display = "block"
                }
            }(a), e[a].onmouseout = function (t) {
                return function () {
                    i[t].style.display = "none"
                }
            }(a)
        }

        function s(t) {
            m = t
        }

        Object.defineProperty(n, "__esModule", {"value": !0});
        var r = e(35);
        e(515);
        var c = (e(89), e(442)), l = (e(70), e(194).handleBreadcurmbData), d = null, u = 0, p = 0, h = null, f = 0,
            m = null, v = e(56), g = v.hasSSRView, b = "true" === r["a"].queryString("isCallCenter"), y = function (t) {
                if (t) {
                    var n = 0;
                    if (null != d) for (var e = 0; e < d.length; e++) n += d[e].reduceAmount;
                    if (b && t && t.unit && t.unit.promotionLink && (t.unit.promotionLink = null), $("#houseInfo").html(c({
                        "values": d,
                        "data": t,
                        "tagsBit": a(t.unit.unitTagsBitValue),
                        "unitTagBadges": tjGlobal.unitTagBadges,
                        "reduceArr": n,
                        "talentExperience": m,
                        "prepayType": f,
                        "setPriceOriginal": p,
                        "setPricePresent": u,
                        "productPriceTips": h
                    })), !g($(".breadcrumb"))) {
                        var i = [];
                        t.unit.navigationsLink.map(function (t, n) {
                            0 !== n && i.push({"label": t.text, "url": t.navigateUrl})
                        }), l(i, !0)
                    }
                    for (var s = a(t.unit.unitTagsBitValue), r = 0; r < s.length; r++) $(".tagsLi-style" + r).css("color", "rgb(253, 130, 56)"), $(".tagsLi-style" + r).css("background", "rgb(255, 245, 239)"), $(".tagsLi-style" + r).css("border-color", "rgb(253, 130, 56)");
                    if (p > u ? ($(".present-price").text(u), $(".original-price").text(p), $(".staring-price a").css("margin", "0 6px"), $(".t-return-money-del").hover(function () {
                        $("#price-tips").show()
                    }, function () {
                        $("#price-tips").hide()
                    }), $("#price-tips").hover(function () {
                        $("#price-tips").show()
                    }, function () {
                        $("#price-tips").hide()
                    })) : ($(".present-price").text(u), $(".staring-price a").css("margin", "0")), $("#map-link").click(function () {
                        var t = $("#unitmap").offset().top;
                        $("html,body").animate({"scrollTop": t - 100}, 350)
                    }), $("#present-price-box").click(function () {
                        var t = $("#product-date").offset().top;
                        $("html,body").animate({"scrollTop": t - 100}, 350)
                    }), $("#comments").click(function () {
                        var t = $("#comment").offset().top;
                        $("html,body").animate({"scrollTop": t - 100}, 350)
                    }), null != t.commentSummary) {
                        var v = 20 * t.commentSummary.overallScore + "%";
                        $("#score").css("width", v)
                    }
                    if (null != t.unit.specialAdvantage) for (var y = 0; y < t.unit.specialAdvantage.length; y++) null != t.unit.specialAdvantage[y].tips && (t.unit.specialAdvantage[y] == t.unit.specialAdvantage[2] && t.unit.specialAdvantage[y].tips.length > 2 ? $(".m-tips-wrap").css("text-align", "left") : $(".m-tips-wrap").css("text-align", "center"));
                    $(".exp-voucher").powerFloat({
                        "eventType": "hover",
                        "reverseSharp": !0,
                        "target": ".tips-content-wrap",
                        "position": "7-5"
                    }), o(".tagsLi", ".introducion"), o(".icon-bed", ".m-tips-wrap")
                } else $("#houseInfo").html('<div class="houseInfo-layer-loading">正在加载</div>')
            };
        n["default"] = {"initRender": y, "setPrice": i, "setTalentExperience": s}
    }, "367": function (t, n, e) {
        "use strict";

        function i(t) {
            return !(11 != t.length || !/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|)+\d{8})$/.test(t))
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "initRender", function () {
            return c
        }), e(516);
        var a = (e(89), e(70), e(443));
        e(257);
        var o = e(56), s = o.hasSSRView, r = !1, c = function (t) {
            var n = $("#landlordInfo"), e = s(n);
            if (e || n.html('<div class="landlordInfo-layer-loading">正在加载</div>'), t) {
                if (e || n.html(a({"data": t, "tjGlobal": tjGlobal})), 2 == t.landlordSummary.chatType) {
                    !function n() {
                        setTimeout(function () {
                            window.bindIMDialogClick ? bindIMDialogClick($(".link-btn-cont"), t.unit.unitId, t.landlordSummary.chatType) : n()
                        }, 200)
                    }()
                } else if (1 == t.landlordSummary.chatType) {
                    !function () {
                        setTimeout(function () {
                            $(".link-btn-cont").click(function () {
                                window.openKefu()
                            })
                        }, 200)
                    }()
                }
                $(".tel-btn").click(function () {
                    new Date;
                    if (tjGlobal.userInfo && tjGlobal.userInfo.userId) {
                        if ($(".view-tel").css("display", "block"), $(".step-cont").css("display", "block"), $(".num-box").css("display", "block"), $(".tel-val").val(tjGlobal.userInfo.mobile), $(".prompt1").css("display", "block"), $(".prompt2").css("display", "none"), $(".tel-four").css("display", "none"), $(".step1 .order").css("background", "#fd8238"), $(".step1").css("color", "#333"), $(".step2 .order").css("background", "#999"), $(".step2").css("color", "#999"), $(".tel-landlord").css("display", "none"), $(".tel-val").val().length < 11 ? $("#getNumberConfirmBtn").css("background", "#ccc") : $("#getNumberConfirmBtn").css("background", "#fd8238"), null != t.landlordSummary) {
                            null != t.landlordSummary.realTimeServiceHotlinePattern && (r = JSON.parse(t.landlordSummary.realTimeServiceHotlinePattern).isNewHotel)
                        }
                        var n = $(".tel-val").val();
                        $(".tel-val").on("input", function () {
                            11 === this.value.length ? ($("#getNumberConfirmBtn").css("background", "#fd8238"), n = $(".tel-val").val()) : $("#getNumberConfirmBtn").css("background", "#ccc")
                        }), $("#getNumberConfirmBtn").click(function () {
                            $.ajax({
                                "dataType": "jsonp",
                                "url": "/UnitDetail/Get170PhoneNumber/",
                                "data": {
                                    "unitId": t && t.landlordSummary && t.landlordSummary.realTimeServiceHotlinePattern && JSON.parse(t.landlordSummary.realTimeServiceHotlinePattern).UnitId || 0,
                                    "hotelID": t.unit.hotelId,
                                    "customerNumber": n,
                                    "defaultPhone": t.landlordSummary.serviceHotlineDescription.replace("拨打", ""),
                                    "customerloginId": tjGlobal.userInfo.userId,
                                    "isNewHotel": r
                                },
                                "success": function (t) {
                                    console.log("170", n), i($(".tel-val").val()) && null != t.phoneNumber && 0 == /^400/.test(t.phoneNumber) ? ($(".step-cont").css("display", "block"), $(".num-box").css("display", "none"), $(".step1 .order").css("background", "#999"), $(".step1").css("color", "#999"), $(".step2 .order").css("background", "#fd8238"), $(".step2").css("color", "#333"), $(".tel-landlord").css("display", "block"), $("#input-num-info").text(n), $("#gotNumber").text(t.phoneNumber), $("#change").click(function () {
                                        $(".tel-val").val(""), $(".view-tel").css("display", "block"), $(".num-box").css("display", "block"), $(".prompt1").css("display", "block"), $(".prompt2").css("display", "none"), $(".tel-four").css("display", "none"), $(".step1 .order").css("background", "#fd8238"), $(".step1").css("color", "#333"), $(".step2 .order").css("background", "#999"), $(".step2").css("color", "#999"), $(".tel-landlord").css("display", "none"), $("#getNumberConfirmBtn").css("background", "#ccc"), $(".tel-val").on("input", function () {
                                            11 === this.value.length && i($(".tel-val").val()) ? $("#getNumberConfirmBtn").css("background", "#fd8238") : $("#getNumberConfirmBtn").css("background", "#ccc")
                                        })
                                    })) : i($(".tel-val").val()) ? ($(".num-box").css("display", "none"), $(".step1 .order").css("background", "#999"), $(".step1").css("color", "#999"), $(".step2 .order").css("background", "#fd8238"), $(".step2").css("color", "#333"), $(".tel-four").css("display", "block"), $(".prompt2").css("list-style-type", "none"), $(".prompt2").css("padding-left", "13px"), $(".prompt1").css("display", "none"), $(".prompt2").css("display", "block"), $("#tel-four-info").text(t.phoneNumber), $(".step-cont").css("display", "none"), $("#getNumberConfirmBtn").unbind()) : $("#getNumberConfirmBtn").unbind()
                                },
                                "error": function () {
                                    $("#getNumberConfirmBtn").click(function () {
                                        $(".num-box").css("display", "none"), $(".step1 .order").css("background", "#999"), $(".step1").css("color", "#999"), $(".step2 .order").css("background", "#fd8238"), $(".step2").css("color", "#333"), $(".tel-four").css("display", "block"), $(".prompt2").css("list-style-type", "none"), $(".prompt2").css("padding-left", "13px"), $(".prompt1").css("display", "none"), $(".prompt2").css("display", "block"), $("#tel-four-info").text(t.phoneNumber), $(".step-cont").css("display", "none"), $("#getNumberConfirmBtn").unbind()
                                    })
                                }
                            })
                        })
                    } else $(".tel-btn").on("click", function () {
                        window.showLoginDialog()
                    })
                }), $("#closeBtn").click(function () {
                    $(".view-tel").css("display", "none"), $("#getNumberConfirmBtn").unbind()
                }), $(".photo-cont .icon-good-landlord").mouseover(function () {
                    var t = $('\n        <div class="photo-cont--icon-desc">\n          超赞房东是途家聚焦房东服务，通过严格考核机制挑选出的服务质量更高、更受住客欢迎的优秀房东。\n        </div>\n        ');
                    t.css({
                        "top": $(this).offset().top + 54 + "px",
                        "left": $(this).offset().left - 96 + "px"
                    }), $("body").append($(t))
                }), $(".photo-cont .icon-good-landlord").mouseleave(function () {
                    $(".photo-cont--icon-desc").remove()
                })
            }
        }
    }, "368": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "initRender", function () {
            return a
        });
        var i = e(35);
        e(517);
        var a = (e(89), e(256), i["a"].queryString("unitId"), function () {
        })
    }, "369": function (t, n, e) {
        "use strict";

        function i(t) {
            c["default"].dynamicAddScript("https://api.map.baidu.com/api?v=2.0&ak=RquoEX471C87SGjM3kAkDLPX&callback=init");
            var n = setInterval(function () {
                console.log("等待地图加载"), window.BMap && o && o.prototype.addHouseOverlay && "function" == typeof BMap.Map && (a(t), clearInterval(n))
            }, 500)
        }

        function a(t) {
            function n(t, n, e) {
                var i = new o("baidu-map");
                i.setOriginPointAndZoom(n.lng, n.lat, 15), i.displayOriginPoint(n.lng, n.lat, t.unit.address), i.enableScrollWheelZoom(), i.addNavigationControl(), i.addScaleControl(), i.addOriginPointInContainer("#map-origin", {
                    "lng": n.lng,
                    "lat": n.lat,
                    "name": t.unit.unitName,
                    "coordinateType": "bd09ll",
                    "address": t.unit.address
                }), i.addOriginPointHoverEvent(n), i.setUIStatus(1), e || (i.localSearchInstance = i.initSearchInstance(), i.busRoute = i.initBusRoute(), i.driveRoute = i.initDrivingRoute(), i.walkRoute = i.initWalkingRoute(), i.bindSearchEvent(), i.localSearchInstance.search(["机场", "火车站", "长途汽车站"]), $(".facility-types li:first-of-type").addClass("active"))
            }

            var e = {}, i = new BMap.Convertor;
            if ("wgs84" == t.unit.geoCoordSysType.toLowerCase()) {
                var a = new BMap.Point(t.unit.longitude, t.unit.latitude), s = [];
                s.push(a);
                var r = function (i) {
                    0 == i.status && (console.log(i.points[0]), e.lat = i.points[0].lat, e.lng = i.points[0].lng, n(t, e, !0))
                };
                i.translate(s, 1, 5, r)
            } else e = {"lat": t.unit.latitude, "lng": t.unit.longitude}, n(t, e, !1)
        }

        function o(t) {
            this.mapInstance && "object" === r()(this.mapInstance.P) || (this.mapInstance = this.createMap(t))
        }

        Object.defineProperty(n, "__esModule", {"value": !0});
        var s = e(102), r = e.n(s), c = e(59);
        e(518);
        var l = e(444), d = e(446), u = e(445), p = function (t) {
            $("#unitmap").html(l(t)), i(t)
        };
        o.prototype = {
            "constructor": o,
            "mapInstance": {},
            "originPointNode": {},
            "originPoint": {},
            "pointArray": [],
            "searchPoi": [],
            "searchPoint": [],
            "infoWindowArray": [],
            "localSearchInstance": {},
            "busRoute": {},
            "driveRoute": {},
            "walkRoute": {},
            "startPoint": {},
            "endPoint": {},
            "firstShot": !0,
            "TrafficNum": 1,
            "localSearchCache": {"0": [], "1": [], "2": [], "3": [], "4": []},
            "activePageIndex": 1,
            "activeTripMode": 1,
            "createMap": function (t) {
                return this.selector = t, new BMap.Map(t)
            },
            "setOriginPointAndZoom": function (t, n, e) {
                this.mapInstance.centerAndZoom(new BMap.Point(t, n), e)
            },
            "displayOriginPoint": function (t, n, e) {
                var i = this, a = new BMap.InfoWindow(e, {"title": "房屋位置："});
                i.originPoint = new BMap.Point(t, n);
                var o = new BMap.Icon("https://staticfile.tujia.com/portalsite2/images/markers_sj.png", new BMap.Size(30, 25), {
                    "offset": new BMap.Size(10, 25),
                    "imageOffset": new BMap.Size(0, -25)
                }), s = new BMap.Marker(i.originPoint, {"icon": o, "enableMassClear": !1});
                s.setTop(!0), i.mapInstance.addOverlay(s), s.addEventListener("mouseover", function () {
                    s.setTop(!0), i.mapInstance.openInfoWindow(a, i.originPoint)
                })
            },
            "enableScrollWheelZoom": function () {
                this.mapInstance.enableScrollWheelZoom()
            },
            "addNavigationControl": function () {
                this.mapInstance.addControl(new BMap.NavigationControl)
            },
            "addScaleControl": function () {
                this.mapInstance.addControl(new BMap.ScaleControl({"anchor": BMAP_ANCHOR_TOP_RIGHT}))
            },
            "addOriginPointInContainer": function (t, n) {
                $(t).attr(n), this.originPointNode = $(t + " .icon")
            },
            "addOriginPointHoverEvent": function (t) {
                var n = this.mapInstance;
                this.originPointNode.hover(function () {
                    n.panTo(new BMap.Point(t.lng, t.lat, 15))
                }, function () {
                })
            },
            "initSearchInstance": function () {
                var t = this;
                return new BMap.LocalSearch(this.mapInstance, {
                    "renderOptions": {
                        "autoViewport": !0,
                        "selectFirstResult": !1
                    }, "pageCapacity": 12, "onSearchComplete": function (n) {
                        if ($.isArray(n)) {
                            var e = [];
                            n.forEach(function (n, i, a) {
                                e.push(t.generateCacheData(n))
                            }), t.writeInCache(n, e), t.localSearchInstance.searchNearby("地铁站", t.originPoint, 2e3)
                        } else {
                            if (t.readCache(n) && 0 != t.readCache(n).length) var i = t.readCache(n); else {
                                var i = t.generateCacheData(n);
                                t.writeInCache(n, i)
                            }
                            if (-1 === t.buildDOMBySearchResult(n, i)) return;
                            t.setUIStatus(2)
                        }
                    }
                })
            },
            "initWalkingRoute": function () {
                var t = this;
                return new BMap.WalkingRoute(this.mapInstance, {
                    "renderOptions": {
                        "autoViewport": !0,
                        "selectFirstResult": !1,
                        "map": t.mapInstance
                    }, "onSearchComplete": function (n) {
                        if (n.getNumPlans() > 0) {
                            var e, i;
                            e = n.getPlan(0);
                            var a = [];
                            if (e.getNumRoutes()) {
                                i = e.getRoute(0);
                                for (var o = 0, s = i.getNumSteps(); o < s; o++) a.push(i.getStep(o).getDescription(!1));
                                var r = {
                                    "existRoute": !0,
                                    "startPlaceName": t.startPoint.title,
                                    "endPlaceName": t.endPoint.title,
                                    "duration": e.getDuration(),
                                    "distance": e.getDistance(),
                                    "descriptionHTML": "",
                                    "walkOrDriveSteps": a,
                                    "activeTripMode": 3
                                }
                            }
                        } else var r = {
                            "existRoute": !1,
                            "startPlaceName": t.startPoint.title,
                            "endPlaceName": t.endPoint.title,
                            "activeTripMode": 3
                        };
                        t.setUIStatus(3), $(".route-result").html(u({"data": r}))
                    }
                })
            },
            "initDrivingRoute": function () {
                var t = this;
                return new BMap.DrivingRoute(this.mapInstance, {
                    "renderOptions": {
                        "map": t.mapInstance,
                        "autoViewport": !0,
                        "selectFirstResult": !1
                    }, "onSearchComplete": function (n) {
                        if (n.getNumPlans() > 0) {
                            var e;
                            e = n.getPlan(0);
                            var i = [];
                            if (e.getNumRoutes()) {
                                for (var a = e.getRoute(0), o = 0, s = a.getNumSteps(); o < s; o++) i.push(a.getStep(o).getDescription(!1));
                                var r = {
                                    "existRoute": !0,
                                    "startPlaceName": t.startPoint.title,
                                    "endPlaceName": t.endPoint.title,
                                    "duration": e.getDuration(),
                                    "distance": e.getDistance(),
                                    "descriptionHTML": "",
                                    "walkOrDriveSteps": i,
                                    "activeTripMode": 2
                                }
                            }
                        } else var r = {
                            "existRoute": !1,
                            "startPlaceName": t.startPoint.title,
                            "endPlaceName": t.endPoint.title,
                            "activeTripMode": 2
                        };
                        t.setUIStatus(3), $(".route-result").html(u({"data": r}))
                    }
                })
            },
            "initBusRoute": function () {
                var t = this;
                return new BMap.TransitRoute(this.mapInstance, {
                    "renderOptions": {
                        "map": t.mapInstance,
                        "autoViewport": !0,
                        "selectFirstResult": !1
                    }, "onSearchComplete": function (n) {
                        var e;
                        if (n.getNumPlans() > 0) {
                            e = n.getPlan(0);
                            var i = {
                                "existRoute": !0,
                                "startPlaceName": t.startPoint.title,
                                "endPlaceName": t.endPoint.title,
                                "duration": e.getDuration(),
                                "distance": e.getDistance(),
                                "descriptionHTML": e.getDescription(),
                                "activeTripMode": 1
                            }
                        } else var i = {
                            "existRoute": !1,
                            "startPlaceName": t.startPoint.title,
                            "endPlaceName": t.endPoint.title,
                            "activeTripMode": 1
                        };
                        t.setUIStatus(3), $(".route-result").html(u({"data": i}))
                    }
                })
            },
            "bindSearchEvent": function () {
                var t = this;
                $(".facility-types").delegate("li", "click", function (n) {
                    var e = $(this), i = {"1": "餐饮", "2": "景点", "3": "购物", "4": "娱乐"};
                    if (!e.hasClass("active")) {
                        t.mapInstance.clearOverlays(), t.walkRoute.clearResults(), t.setUIStatus(1);
                        var a = e.attr("data-index");
                        0 == a ? t.localSearchInstance.searchNearby("地铁站", t.originPoint, 2e3) : t.localSearchInstance.searchNearby(i[a], t.originPoint, 2e3), $(".facility-types li").removeClass("active"), e.addClass("active"), t.activePageIndex = 1
                    }
                }), $(".main-cont").delegate(".search-result .place", "click", function (n) {
                    var e = $(this);
                    t.endPoint = new BMap.Point(e.attr("data-lng"), e.attr("data-lat")), t.endPoint.title = e.attr("title"), t.startPoint = t.originPoint, t.startPoint.title = $("#map-origin").attr("name"), $(".place-list .place").removeClass("active"), e.addClass("active"), t.setUIStatus(0), t.activeTripMode = 1, t.routeByMethod(t.activeTripMode)
                }), $(".main-cont").delegate(".pagination .page-item", "click", function () {
                    var n, e = $(this), i = e.attr("data-index"), a = $(".facility-types li.active").attr("data-index"),
                        o = $(".page-item.active").attr("data-index");
                    "prev" == i ? i = n = --o : "next" == i ? i = n = ++o : n = i;
                    var s;
                    t.localSearchCache[a] && (s = t.localSearchCache[a][parseInt(i) - 1]), e.hasClass("active") || (t.activePageIndex = n, s ? t.buildDOMBySearchResult(t.localSearchInstance.getResults(), s, !0) : t.localSearchInstance.gotoPage(parseInt(n) - 1))
                }), $(".main-cont").delegate(".switch", "click", function (n) {
                    t.setUIStatus(0);
                    var e = t.startPoint;
                    e = t.endPoint, t.endPoint = t.startPoint, t.startPoint = e, t.routeByMethod(t.activeTripMode)
                }), $(".main-cont").delegate(".close-route", "click", function (n) {
                    t.walkRoute.clearResults(), t.busRoute.clearResults(), t.driveRoute.clearResults(), $(".search-result").show(), $(".route").hide()
                }), $(".main-cont").delegate(".tab-item", "click", function (n) {
                    var e = $(this), i = e.attr("data-index");
                    t.activeTripMode = parseInt(i), t.walkRoute.clearResults(), t.busRoute.clearResults(), t.driveRoute.clearResults();
                    var a = $(".place-list .place.active");
                    t.endPoint = new BMap.Point(a.attr("data-lng"), a.attr("data-lat")), t.endPoint.title = a.attr("title"), t.startPoint = t.originPoint, t.startPoint.title = $("#map-origin").attr("name"), t.routeByMethod(t.activeTripMode)
                })
            },
            "routeByMethod": function (t) {
                switch (t) {
                    case 1:
                        this.busRoute.search(this.startPoint, this.endPoint);
                        break;
                    case 2:
                        this.driveRoute.search(this.startPoint, this.endPoint);
                        break;
                    case 3:
                        this.walkRoute.search(this.startPoint, this.endPoint)
                }
            },
            "readCache": function (t) {
                var n = this, e = {"餐饮": 1, "景点": 2, "购物": 3, "娱乐": 4};
                return "地铁站" == t.keyword ? 4 == n.localSearchCache[0].length ? n.localSearchCache[0] : [] : n.localSearchCache[e[t.keyword]][t.getPageIndex()]
            },
            "writeInCache": function (t, n) {
                var e = this, i = {"餐饮": 1, "景点": 2, "购物": 3, "娱乐": 4};
                $.isArray(t) ? $.isArray(n) && n.forEach(function (t, n, i) {
                    e.localSearchCache[0].push(t)
                }) : "地铁站" == t.keyword ? e.localSearchCache[0][3] = n : e.localSearchCache[i[t.keyword]][t.getPageIndex()] = n
            },
            "generateCacheData": function (t) {
                var n = [];
                switch (t.keyword) {
                    case"机场":
                        t.getPoi(0) && n.push(t.getPoi(0)), t.getPoi(1) && n.push(t.getPoi(1));
                        break;
                    case"火车站":
                        t.getPoi(0) && n.push(t.getPoi(0)), t.getPoi(1) && n.push(t.getPoi(1)), t.getPoi(2) && n.push(t.getPoi(2)), t.getPoi(3) && n.push(t.getPoi(3)), t.getPoi(4) && n.push(t.getPoi(4));
                        break;
                    default:
                        if (0 === t.getCurrentNumPois()) break;
                        for (var e = 0, i = t.getCurrentNumPois(); e < i; e++) n.push(t.getPoi(e))
                }
                return n
            },
            "buildDOMBySearchResult": function (t, n, e) {
                function i(t) {
                    return $.isArray(n) ? t.map(function (t, n, e) {
                        return {"title": t.title, "lat": t.point.lat, "lng": t.point.lng}
                    }) : []
                }

                var a = this, o = {
                    "trafficNum": 1,
                    "trafficStation": [],
                    "otherFacility": [],
                    "pagination": [],
                    "activePageIndex": this.activePageIndex
                };
                a.mapInstance.clearOverlays();
                var s = [];
                if ("地铁站" == t.keyword) {
                    var r = 1;
                    a.localSearchCache[0].forEach(function (t) {
                        t.forEach(function (t, n, e) {
                            a.addHouseOverlay(t, r++), s.push(t.point)
                        }), o.trafficStation.push(i(t))
                    })
                } else n.forEach(function (t, n, e) {
                    a.addHouseOverlay(t, n + 1), s.push(t.point)
                }), o.otherFacility = i(n), o.pagination = function (t) {
                    for (var n = []; t; t--) n.push(t);
                    return n.reverse(), n
                }(Math.min(t.getNumPages(), 5));
                if (a.firstShot ? (a.mapInstance.setViewport({
                    "center": a.originPoint,
                    "zoom": 15
                }), a.firstShot = !1) : (s.push(a.originPoint), a.mapInstance.setViewport(s)), $(".search-result").html(d({"data": o})), console.log("----------", o), o.otherFacility && !o.otherFacility.length && o.trafficNum <= 1) return a.setUIStatus(4)
            },
            "setUIStatus": function (t, n, e) {
                switch (t) {
                    case 0:
                        $(".route-result").hide(), $(".search-result").hide(), $(".loading").show();
                        break;
                    case 1:
                        $(".search-result").hide(), $(".route-result").hide(), $(".loading").html("途途正在努力加载中...").show();
                        break;
                    case 2:
                        $(".loading").hide(), $(".route-result").hide(), $(".search-result").show();
                        break;
                    case 3:
                        $(".loading").hide(), $(".search-result").hide(), $(".route-result").show();
                        break;
                    case 4:
                        return $(".search-result").hide(), $(".route-result").hide(), $(".loading").html("抱歉，途途没有找到相关的信息。").show(), -1;
                    case 5:
                        $(".search-result").hide(), $(".route-main").html(e), $(".route-result").show()
                }
            },
            "addHouseOverlay": function (t, n) {
                function e(t, n) {
                    this._poi = t, this._point = t instanceof BMap.Point ? t : t.point, this._text = n
                }

                var i = this;
                e.prototype = new BMap.Overlay, e.prototype.initialize = function (t) {
                    var n = this;
                    n._map = t;
                    var e = n._div = document.createElement("div");
                    return e.style.zIndex = BMap.Overlay.getZIndex(n._point.lat), e.className = "search-overlay", e.onmouseover = function () {
                        var e = new BMap.InfoWindow(n._poi.title + "：<br/>" + n._poi.address, {"offset": new BMap.Size(0, -20)});
                        e.setWidth(220), t.openInfoWindow(e, n._point)
                    }, e.onmouseout = function () {
                    }, e.appendChild(document.createTextNode(this._text)), t.getPanes().labelPane.appendChild(e), e
                }, e.prototype.draw = function () {
                    var t = this._map, n = t.pointToOverlayPixel(this._point);
                    this._div.style.left = n.x - 9 + "px", this._div.style.top = n.y - 20 + "px"
                };
                var a = new e(t, n);
                i.mapInstance.addOverlay(a)
            }
        }, n["default"] = {"initRender": p}
    }, "37": function (t, n) {
        function e(t) {
            if (t && !$.cookie("activitypopup")) {
                var n = t.htmlContent;
                $(n).appendTo($("body")), function () {
                    function t() {
                        if (console.log("cooooooookide,", $.cookie("activitypopup")), $("#j_tjdcpopup").length > 0 && !$.cookie("activitypopup")) {
                            var t = null;
                            window.ServerDomain && (t = window.ServerDomain), $.cookie("activitypopup", "1", {"domain": t});
                            var n, e, i, a;
                            if (n = $("#j_tjdcpopup"), 0 == n.length) return;
                            n.show(), e = '<div id="j_tjdc_mask"></div>', $("body").append(e), $("#j_tjdc_mask").css({
                                "filter": "alpha(Opacity=80)",
                                "opacity": "0.8",
                                "position": "fixed",
                                "top": "0",
                                "left": "0",
                                "width": "100%",
                                "height": "100%",
                                "border": "0",
                                "background-color": "#000",
                                "z-index": "999"
                            }), i = function () {
                                return $("#j_tjdcpopup").fadeOut("500", function () {
                                    return a()
                                }), $("#j_tjdc_mask").fadeOut()
                            }, a = function () {
                                return $("#j_tjdcpopup").remove(), $("#j_tjdc_mask").remove()
                            }, $("#j-tjdc-close").click(function () {
                                return i()
                            })
                        }
                    }

                    setTimeout(t, 1e3)
                }()
            }
        }

        function i(t) {
            if (t) {
                var n = '\n    <div id="J-ad-top" class="event-ad-fluid " style="height=48px">\n        <a href="' + t.titleLink + '" target="_blank" title="' + t.title + '" style="display:block;height:48px;background:url(' + t.pictureUrl + ') no-repeat top center">\n        </a>\n    </div>\n  ';
                $(n).insertBefore($(".g-page"))
            }
        }

        function a() {
            function t() {
                var t = setInterval(function () {
                    try {
                        if ("undefined" == typeof TJPFloating) return
                    } catch (t) {
                    }
                    TJPFloating.getPopHTML(e, n(document.referrer)), clearInterval(t)
                }, 100)
            }

            function n(t) {
                var n = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"), e = n.exec(t);
                return e ? e[1] : t
            }

            !function (t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.src = t, document.getElementsByTagName("head")[0].appendChild(n)
            }(function () {
                return window.tjGlobal.host.STATICFILE_TUJIA_HOST
            }() + "/PortalSite2/Scripts/UI/tjpfloating.js?" + function () {
                var t, n, e;
                return t = new Date, n = t.getMonth() + 1, e = t.getDate(), 10 > n && (n = "0" + n), 10 > e && (e = "0" + e), t.getFullYear().toString() + n + e
            }());
            var e = "";
            setTimeout(function () {
                t()
            }, 3e3)
        }

        n.initPopupAds = e, n.initTopAds = i, n.initBottomAds = a
    }, "370": function (t, n, e) {
        "use strict";

        function i(t) {
            k = t
        }

        function a() {
            return M = $("#startDate").val(), N = $("#endDate").val(), Date.diffDays(M, N)
        }

        function o() {
            U = $("#startDate").val(), R = $("#endDate").val(), $(".product-content").html('<div class="tpl-loading">途途正在努力加载中...</div>'), f.getProducts1(U, R, H, E, L, function (t, n, e) {
                t ? null == n || null == n.products ? $(".product-content").html('<div class="err-message"><span class="iconfont nullicon">&#xe0b5</span>在你选择的日期内没有可用产品</div>') : function () {
                    var t = [];
                    if (n.products) for (var e = 0; e < n.products.length; e++) {
                        for (var i = 0, a = 0; a < n.products[e].returnCashIntro.length; a++) i += n.products[e].returnCashIntro[a].reduceAmount;
                        t.push(i)
                    }
                    $(".product-content").html(h({"data": n, "reduceArr": t})), c();
                    for (var o = $(".triangle-no-refunds"), s = $(".message-box-different"), r = 0; r < o.length; r++) o[r].onmouseover = function (t) {
                        return function () {
                            s[t].style.display = "block"
                        }
                    }(r), o[r].onmouseout = function (t) {
                        return function () {
                            s[t].style.display = "none"
                        }
                    }(r);
                    for (var l = $(".price-product"), d = $(".price-float"), u = 0; u < l.length; u++) l[u].onmouseover = function (t) {
                        return function () {
                            d[t].style.display = "block"
                        }
                    }(u), l[u].onmouseout = function (t) {
                        return function () {
                            d[t].style.display = "none"
                        }
                    }(u);
                    var p = $(".product-tips"), f = $(".product-tips-float");
                    p.mouseover(function () {
                        f.css("display", "block")
                    }), p.mouseout(function () {
                        f.css("display", "none")
                    }), $(document).delegate(".order-btn", "click", function (t) {
                        if (tjGlobal.userInfo && tjGlobal.userInfo.userId) if ("ctrip" === _("Partner_PartnerStyle")) $(".p-content").show(), setTimeout(function () {
                            $(".p-content").hide();
                            var n = $(t.target), e = n.attr("data-id"), i = null;
                            i = n.attr("data-activityInfo") ? n.attr("data-activityInfo") : null, window.location.href = L ? "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i + "&isCallCenter=true" : "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i
                        }, 2e3); else {
                            var n = $(t.target), e = n.attr("data-id"), i = null;
                            i = n.attr("data-activityInfo") ? n.attr("data-activityInfo") : null, window.location.href = L ? "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i + "&isCallCenter=true" : "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i
                        } else "ctrip" === _("Partner_PartnerStyle") ? ($(".p-content").show(), setTimeout(function () {
                            $(".p-content").hide(), window.showLoginDialog()
                        }, 2e3)) : window.showLoginDialog()
                    }), $(".code-box").powerFloat({
                        "target": $(".message-box"),
                        "eventType": "hover",
                        "reverseSharp": !0,
                        "position": "7-5"
                    }), $(".tips-back").powerFloat({
                        "target": $(".back-tips"),
                        "eventType": "hover",
                        "reverseSharp": !0,
                        "position": "7-5"
                    });
                    var m = n.products[0].finalPrice, v = n.products[0].productPrice,
                        g = n.products[0].productPriceTips, b = n.products[0].returnCashIntro,
                        y = n.products[0].returnCashSettingType;
                    O && O(m, v, g, y, b)
                }() : $(".product-content").html('<div class="err-message">获取信息失败了哦，请刷新重试^_^</div>')
            })
        }

        function s() {
            $(".unit-loading").css("display", "block")
        }

        function r() {
            $(".unit-loading").css("display", "none")
        }

        function c() {
            $(".can-order").click(function (t) {
                var n = $(t.target);
                n.addClass("img-loading");
                var e = n.attr("data-productid");
                f.getProductCalendar(e, H, function (t, e, i) {
                    if (n.removeClass("img-loading"), t) return A = e, D = l(A.checkIn), V || (V = new y({
                        "parent": $("#product-date"), "onSelection": function (t, n) {
                            $("#startDate").attr("value", v.toConYYMMDD(t)), $("#startDate").val(v.toConYYMMDD(t)), $("#endDate").attr("value", "选择离店日期"), $("#endDate").val("选择离店日期"), $("#endDate").attr("value", v.toConYYMMDD(n));
                            var e = this.getRangeArr();
                            console.log(e, "111111111rangeObj");
                            for (var i in e) for (var a = 0; a < e[i].length - 1; a++) if (0 == D[i][e[i][a]].status) return void 0 !== t && void 0 !== n && this.setSelectionStart(n), $("#endDate").attr("value", "选择离店日期"), !1;
                            "NaN-NaN-NaN" == $("#endDate").val() && ($("#endDate").attr("value", "选择离店日期"), V.show(), $(".mask").show()), void 0 !== t && "NaN-NaN-NaN" != $("#endDate").val() && "选择离店日期" != $("#endDate").val() && (setTimeout(function () {
                                V.hide()
                            }, 500), o())
                        }, "onSingleDay": function (t, n, e) {
                            var i = e.getMonth() + 1, a = void 0;
                            return D[i] ? (12 * (e.getFullYear() - new Date(Date.now()).getFullYear()) + e.getMonth() - new Date(Date.now()).getMonth() < 12 && (a = D[i][n - 1] || void 0), a && 0 == a.status ? {"state": y.STATE_NO_HOUSE} : a && 1 == a.status ? {
                                "state": y.STATE_HAS_HOUSE,
                                "price": a.price,
                                "house": a.vacantCount
                            } : null) : null
                        }
                    }), V.onVisibilityChange = function (t) {
                        t ? $(".mask").show() : $(".mask").hide()
                    }), V.show(), !1;
                    console.log(i)
                })
            })
        }

        function l(t) {
            var n = {}, e = new Date, i = e.getFullYear(), a = e.getMonth(),
                o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], s = 0;
            G(i) && (o[1] = 29);
            for (var r = 0; 0 == t[s] || 1 == t[s] || null != t[s] || void 0 != t[s];) {
                var c = new Date, l = (c.getMonth() + 1 + r) % 13;
                c.getMonth() + 1 + r > 12 && (l = (c.getMonth() + 1 + r) % 13 + 1), n[l] = {};
                for (var d = o[(a + r) % 12], u = 0; u < d && s < t.length; u++) n[l][u] = t[s++];
                r++
            }
            return n
        }

        function d() {
            $(".calender").click(function (t) {
                s(), f.getUnitCalendar(H, function (t, n, e) {
                    if (r(), t) return j = n, P = l(j.checkIn), Q(x), x || (x = new m({
                        "parent": $(".date-box"),
                        "anchor": $("#wrapper"),
                        "disableDayAfter": v.makeDisableDateEnd(),
                        "onSingleDay": function (t, n, e) {
                            var i = e.getMonth() + 1, a = void 0;
                            return a = 12 * (e.getFullYear() - new Date(Date.now()).getFullYear()) + e.getMonth() - new Date(Date.now()).getMonth() < 12 ? P[i] && P[i][t - 1] || void 0 : void 0, a ? null : "t-cal-single-day"
                        },
                        "onRangeSelectionPrepare": function () {
                            var t = C.val();
                            "选择入离店日期" != t && (I = C.val(), C.val("选择入离店日期"))
                        },
                        "onRangeSelectionCancel": function () {
                            C.val(I)
                        },
                        "onRangeSelection": function (t, n) {
                            C.val(v.formatRange(t, n)), $("#startDate").val(v.toConYYMMDD(t)), $("#endDate").val(v.toConYYMMDD(n));
                            var e = v.toConYYMMDD(t), i = v.toConYYMMDD(n);
                            $("#startDate").attr("value", e), $("#endDate").attr("value", i)
                        }
                    }), x.install(), S && (x.setBaseDay(S), x.clearSelectionRange(), S = null)), x.show(), !1;
                    console.log(e)
                })
            });
            var t = g(v.makeDefaultRange());
            b(t[0], t[1]), function (t, n) {
                if (C.val(v.formatRange.apply(v, t)), $("#startDate").val(v.toConYYMMDD(t[0])), $("#endDate").val(v.toConYYMMDD(t[1])), n instanceof Date) {
                    if (null == x) return void (S = n);
                    x.setBaseDay(n), x.clearSelectionRange()
                }
            }(t)
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "initRender", function () {
            return B
        }), e.d(n, "getPromotion", function () {
            return i
        }), e.d(n, "getDays", function () {
            return a
        });
        var u = e(35), p = e(249), h = (e.n(p), e(438));
        e(519), e(97);
        var f = e(89), m = e(90).CalWidget, v = e(25).CalUtil, g = e(81).resolveCalendarTimeSlop,
            b = e(50).storeCalendarSlop, y = e(195).HouseCal, w = e(56), T = w.grabSSRParam, _ = e(3).getCookie,
            I = null, S = null, x = null, C = $(".calender"), A = null, j = null, P = null, D = null, k = null,
            O = null, U = null, R = null, M = null, N = null, H = u["a"].queryString("unitId") || T("unitId"),
            E = u["a"].queryString("activityInfo"), J = e(252), F = J.isPreviewVisiting,
            L = (J.getPreviewGUID, "true" === u["a"].queryString("isCallCenter")), B = function (t) {
                if (F()) return void $("#product-date").hide();
                O = t, d(), M = $("#startDate").val(), N = $("#endDate").val(), $(".product-content").html('<div class="tpl-loading">途途正在努力加载中...</div>'), f.getProducts1(M, N, H, E, L, function (t, n, e) {
                    t ? null == n || null == n.products ? ($(".product-content").html('<div class="err-message"><span class="iconfont nullicon">&#xe0b5</span>在你选择的日期内没有可用产品</div>'), O && O(0, 0, null, 0, null)) : function () {
                        var t = [];
                        if (n.products) for (var e = 0; e < n.products.length; e++) {
                            for (var i = 0, a = 0; a < n.products[e].returnCashIntro.length; a++) i += n.products[e].returnCashIntro[a].reduceAmount;
                            t.push(i)
                        }
                        $(".product-content").html(h({"data": n, "reduceArr": t})), c();
                        for (var o = $(".triangle-no-refunds"), s = $(".message-box-different"), r = 0; r < o.length; r++) o[r].onmouseover = function (t) {
                            return function () {
                                s[t].style.display = "block"
                            }
                        }(r), o[r].onmouseout = function (t) {
                            return function () {
                                s[t].style.display = "none"
                            }
                        }(r);
                        for (var l = $(".price-product"), d = $(".price-float"), u = 0; u < l.length; u++) l[u].onmouseover = function (t) {
                            return function () {
                                d[t].style.display = "block"
                            }
                        }(u), l[u].onmouseout = function (t) {
                            return function () {
                                d[t].style.display = "none"
                            }
                        }(u);
                        var p = $(".product-tips"), f = $(".product-tips-float");
                        p.mouseover(function () {
                            f.css("display", "block")
                        }), p.mouseout(function () {
                            f.css("display", "none")
                        }), $(document).delegate(".order-btn", "click", function (t) {
                            if (tjGlobal.userInfo && tjGlobal.userInfo.userId) if ("ctrip" === _("Partner_PartnerStyle")) $(".p-content").show(), setTimeout(function () {
                                $(".p-content").hide();
                                var n = $(t.target), e = n.attr("data-id"), i = null;
                                i = n.attr("data-activityInfo") ? n.attr("data-activityInfo") : null, window.location.href = L ? "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i + "&isCallCenter=true" : "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i
                            }, 2e3); else {
                                var n = $(t.target), e = n.attr("data-id"), i = null;
                                i = n.attr("data-activityInfo") ? n.attr("data-activityInfo") : null, window.location.href = L ? "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i + "&isCallCenter=true" : "/booking/orderinfo?startDate=" + M + "&endDate=" + N + "&unitId=" + H + "&bookingCount=1&productId=" + e + "&activityInfo=" + i
                            } else "ctrip" === _("Partner_PartnerStyle") ? ($(".p-content").show(), setTimeout(function () {
                                $(".p-content").hide(), window.showLoginDialog()
                            }, 2e3)) : window.showLoginDialog()
                        }), $(".code-box").powerFloat({
                            "target": $(".message-box"),
                            "eventType": "hover",
                            "reverseSharp": !0,
                            "position": "7-5"
                        }), $(".tips-back").powerFloat({
                            "target": $(".back-tips"),
                            "eventType": "hover",
                            "reverseSharp": !0,
                            "position": "7-5"
                        });
                        var m = n.products[0].finalPrice, v = n.products[0].productPrice,
                            g = n.products[0].productPriceTips, b = n.products[0].returnCashIntro,
                            y = n.products[0].returnCashSettingType;
                        O && O(m, v, g, y, b)
                    }() : ($(".product-content").html('<div class="err-message">获取信息失败了哦，请刷新重试^_^</div>'), O && O(0, 0, null, 0, null))
                }), $(document).delegate(".search-btn", "click", function () {
                    o()
                }), c()
            }, G = function (t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }, Q = function (t) {
                !x || t && t === x || x.hide()
            };
        $("body").click(function (t) {
            Q()
        });
        var V = null
    }, "371": function (t, n, e) {
        e(520);
        var i = e(447), a = function (t, n) {
            t.hotelUrl = n, $(".sidebar-house").html(i({"data": t}))
        };
        n.initRender = a
    }, "372": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "initRender", function () {
            return p
        });
        var i = e(35);
        e(521);
        var a = (e(89), e(448)), o = e(256), s = tjGlobal.host, r = null, c = e(56), l = c.grabSSRParam, d = !1,
            u = i["a"].queryString("unitId");
        u || (u = l("unitId"));
        var p = function (t) {
            $.ajax({
                "dataType": "json",
                "type": "get",
                "url": s.TRAVEL_TUJIA_HOST + "/note/goodExperience",
                "data": {"UnitID": u},
                "success": function (n) {
                    d = !(!n || !n[0] || "false" != n[0].IsLandlordStory), (r = t) && r(d);
                    var e = a({"data": n}), i = o({"data": n});
                    $("#talentExperience").html(e), $("#landlordStory").html(i)
                },
                "error": function () {
                    (r = t) && r(null)
                }
            })
        }
    }, "373": function (t, n, e) {
        e(522);
        var i = e(449), a = function (t) {
            if ($("#top-share-weibo").length) return t
        }, o = function (t) {
            var n = !1;
            $("#top-share-weibo").length && (n = !0), n && $("#top-share-weibo").attr("href", t)
        }, s = function () {
            var t = $("#tujia_page_navbar").attr("data-m-tujia-host") + document.location.pathname + document.location.search,
                n = setInterval(function () {

                }, 2e3)
        }, r = function (t, n) {
            $.ajax({
                "dataType": "jsonp",
                "url": window.tjGlobal.host.VIP_TUJIA_HOST + "/favorite/Index",
                "data": {},
                "success": function (e) {
                    var i = [];
                    e.forEach(function (t, n, e) {
                        i.push(t.UnitID)
                    }), i && i.length && i.indexOf(t) > -1 && n(!0)
                }
            })
        }, c = function (t) {
            var n = $(".add-favorite.a-btn");
            t ? (n.find(".text").text("已收藏"), n.addClass("active")) : (n.find(".text").text("收藏"), n.removeClass("active"))
        }, l = function (t) {
            t && $("#favorite").length && $("#favorite").attr("unitid", t)
        }, d = function (t) {
            var n = t.unit.unitId;
            o(a("https://passport.tujia.com/PortalSite/BeginShare?state=SinaWeiBo&unitID=" + n)), $(document.body).append($('\n<div id="weixin-share-mask" style="display: none"></div>\n')), $(document.body).append($('\n<div id="top-share-popup" style="display: none">\n  <div class="popup-header">\n    <span>分享到微信</span>\n    <a href="javascript:void(0)" title="关闭" class="close-btn"></a>\n  </div>\n  <div class="popup-cont">\n    <h2>用微信“扫一扫”</h2>\n    <h2>将心动的房屋分享给自己的好友和朋友圈吧！</h2>\n    <div class="wechat-share-qrcode">\n\n    </div>\n    <div class="popup-bottom tips">\n        打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享\n        给我的好友和朋友圈。\n    </div>\n  </div>\n</div>')), s(), $("body").on("click", ".top-share #top-share-weixin", function () {
                $("#top-share-popup").show(), $("#weixin-share-mask").show(), $(".wechat-share-qrcode img").css("display", "inline-block")
            }), $("body").on("click", "#top-share-popup .close-btn", function () {
                $("#weixin-share-mask").hide(), $("#top-share-popup").hide()
            }), l(n), r(n, c), $("body").on("click", ".add-favorite.a-btn", function () {
                var t = $(this).attr("unitid");
                tjGlobal.userInfo || window.showLoginDialog(), $(this).hasClass("active") ? $.ajax({
                    "dataType": "jsonp",
                    "url": window.tjGlobal.host.VIP_TUJIA_HOST + "/favorite/Delete",
                    "data": {"unitId": t, "enumFavoriteUnitType": 0, "platForm": 1},
                    "success": function (t) {
                        c(!1)
                    },
                    "error": function (t, n, e) {
                    }
                }) : $.ajax({
                    "dataType": "jsonp",
                    "url": window.tjGlobal.host.VIP_TUJIA_HOST + "/favorite/Add",
                    "data": {"unitId": t, "enumFavoriteUnitType": 0, "platForm": 1},
                    "success": function (t) {
                        c(!0)
                    },
                    "error": function (t, n, e) {
                    }
                })
            })
        }, u = function (t) {
            $(".top-share").html(i({"data": {"data": t}})), d(t)
        };
        n.initRender = u
    }, "374": function (t, n, e) {
        "use strict";
        e(523);
        var i = (e(70), e(439)), a = e(3).getQueryString, o = "true" === a("isCallCenter"), s = function (t) {
            if (t) {
                $("#unitcheckinneedtoknow").html(i({"data": t, "isCallCenter": o}));
                t.unit.checkInRules;
                $(".alowed li").each(function () {
                    var t = $(this).children("em"), n = $(this).children("em").text();
                    n.length > 22 && (t.attr("data-tip", n), t.hover(function () {
                        $(this).siblings(".tips-cont").show(), $(this).siblings(".tips-cont").text(n)
                    }, function () {
                        $(this).siblings(".tips-cont").hide(), $(this).siblings(".tips-cont").text("")
                    }))
                }), $(".j-no-admitOldPeple").powerFloat({
                    "eventType": "hover",
                    "reverseSharp": !1,
                    "position": "3-5"
                }), $(".j-admitOldPeple").powerFloat({
                    "eventType": "hover",
                    "reverseSharp": !1,
                    "position": "3-5"
                }), $(".j-admitChildren").powerFloat({
                    "eventType": "hover",
                    "reverseSharp": !1,
                    "position": "3-5"
                }), $(".j-no-admitChildren").powerFloat({
                    "eventType": "hover",
                    "reverseSharp": !1,
                    "position": "3-5"
                }), $(".j-depositInfo").powerFloat({"eventType": "hover", "reverseSharp": !0, "position": "7-5"})
            }
        };
        n.initRender = s
    }, "375": function (t, n, e) {
        "use strict";

        function i() {
            $(".unit-cont:first").removeClass("line-dashed")
        }

        function a() {
            var t = $("#listWrap");
            l(t, t.height(), 175, $("#facilityshowmore"), $("#facilityshowmore a")[0], $("#facilityshowmore .icon-arrow"), "查看全部", "收起");
            var n = $(".desc-info");
            l(n, n.height(), 85, $("#introshowmore"), $("#introshowmore a")[0], $("#introshowmore .icon-arrow"), "查看全部", "收起");
            var e = $(".resident-info");
            l(e, e.height(), 308, $("#residentshowmore"), $("#residentshowmore a")[0], $("#residentshowmore .icon-arrow"), "查看全部", "收起")
        }

        function o() {
            var t = $("#contentTab"), n = $(window).scrollTop();
            n >= $("#unitdetailinfo").offset().top ? t.addClass("layoutfix") : t.removeClass("layoutfix");
            var e = $("#unitdetailinfo").height() + $("#unitdetailinfo").offset().top - 100,
                i = e + $("#unitcheckinneedtoknow").height() - 100, a = i + $("#unitmap").height() - 100,
                o = a + $("#comment").height() - 100, s = o + $("#talentExperience").height() - 100,
                r = $(".house-tab li.item-first");
            n >= e && n < i ? r.next().addClass("current").siblings().removeClass("current") : n < e ? r.addClass("current").siblings().removeClass("current") : n >= i && n < a ? r.next().next().addClass("current").siblings().removeClass("current") : n >= e && n < i ? r.next().addClass("current").siblings().removeClass("current") : n >= a && n < o ? r.next().next().next().addClass("current").siblings().removeClass("current") : n >= i && n < a ? r.next().next().addClass("current").siblings().removeClass("current") : n >= o && screenTop < s ? r.next().next().next().next().addClass("current").siblings().removeClass("current") : n >= a && n < o && r.next().next().next().addClass("current").siblings().removeClass("current")
        }

        function s() {
            $(".house-tab li a").click(function (t) {
                t.preventDefault();
                var n = $(this).attr("href"), e = $(n).offset().top;
                $(this).parent().addClass("current").siblings().removeClass("current"), $("html,body").animate({"scrollTop": e - 60}, 350)
            })
        }

        function r() {
            $("a.group1").hover(function (t) {
                this.t = this.title, this.title = "";
                var n = "" != this.t ? "<br/>" + this.t : "";
                $("body").append("<div id='preview'><img src='" + this.rel + "' alt='' />" + n + "</div>");
                $(this).offset().left;
                $("#preview").css("top", t.pageY - 10 + "px").css("left", t.pageX + 30 + "px").fadeIn("fast"), t.pageX > 550 && $("#preview").css("left", t.pageX - 520 + "px")
            }, function () {
                this.title = this.t, $("#preview").remove()
            })
        }

        function c(t) {
            u = t
        }

        function l(t, n, e, i, a, o, s, r) {
            n > e ? (t.addClass("limit-height"), i.show()) : i.hide(), i.click(function () {
                t.hasClass("limit-height") ? (t.removeClass("limit-height"), a.innerText = r, o.removeClass("down").addClass("up")) : (t.addClass("limit-height"), a.innerText = s, o.addClass("down").removeClass("up"))
            })
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), e(524);
        var d = (e(70), e(440)), u = null, p = (e(3).getQueryString, e(56)), h = p.hasSSRView, f = void 0,
            m = function (t, n) {
                var e = $("#unitdetailinfo");
                if (t) {
                    var c = t.unit.promotionTip;
                    h(e) ? $("#talentExp").show() : e.html(d({
                        "data": t,
                        "talentExperience": u
                    })), a(), s(), r(), i(), $(".priceInfo").text(f), $(window).on("scroll", o), n(c)
                }
            }, v = function (t) {
                f = t
            };
        n["default"] = {"initRender": m, "setPrice": v, "setTalentExperience": c}
    }, "376": function (t, n, e) {
        "use strict";
        e(525);
        var i = (e(257), function () {
        });
        n.initRender = i
    }, "38": function (t, n, e) {
        e(47), setTimeout(function () {
            e(45), e(46)
        }, 3e3)
    }, "39": function (t, n, e) {
        function i() {
            0 == s ? ($("#sbtnGetVerifyCode").removeAttr("disabled").val("获取动态密码"), s = 60) : ($("#sbtnGetVerifyCode").attr("disabled", !0).val("重新发送(" + s + ")"), s--, setTimeout(function () {
                i()
            }, 1e3))
        }

        e(48);
        var a = $("#tujia_page_navbar"), o = a.data("passport-tujia-host");
        $("#loginSubmit").bind("click", function () {
            if (!$("#account").val() || !$("#password").val()) return void $("#loginerrormsg").html("用户名或密码不能为空！").show();
            $("#loginSubmit").hide(), $("#loginSubmitIng").show(), $.ajax({
                "url": o + "/PortalSite/AjaxLogin/",
                "data": {
                    "username": $("#account").val(),
                    "pwd": $("#password").val(),
                    "verifycode": $("#verifycode").val(),
                    "userExpiresHours": $("#userExpiresHours").val(),
                    "redirectUrl": $("#redirectUrl").val()
                },
                "type": "post",
                "dataType": "jsonp",
                "success": function (t) {
                    if (t.IsSuccess) {
                        if ($("#redirectUrl").val()) return void (window.location.href = $("#redirectUrl").val());
                        if ("3" == $("#showButton").val() || "4" == $("#showButton").val()) window.location.href.indexOf("?") > -1 ? window.location.href = window.location.href + "&show=" + $("#showButton").val() : window.location.href = window.location.href + "?show=" + $("#showButton").val(); else {
                            var n = $("div.j-logon-directorder > a").attr("href");
                            n ? window.location.href = n : window.location.reload()
                        }
                    } else $("#loginSubmit").show(), $("#loginSubmitIng").hide(), t.ErrorCount >= 5 && $("#validateArea").show(), 1 == t.ErrorCode ? ($("#loginerrormsg").html(t.Message).show(), $("#verifycodeErorr").hide()) : ($("#validateArea").show(), $("#loginerrormsg").hide(), $("#verifycodeErorr").html(t.Message).show()), $("#verifyImageLink").click()
                }
            })
        }), $("#account,#password,#verifycode").focus(function () {
            $(this).next().hide(), $("#loginerrormsg").hide(), $("#verifycodeErorr").hide()
        }).blur(function () {
            "" == $.trim($(this).val()) && $(this).next().show()
        }), $("#saveUserLongTime").click(function () {
            this.checked ? $("#userExpiresHours").val(720) : $("#userExpiresHours").val("")
        }), $("#verifyImage,#verifyImageLink").click(function () {
            var t = o + "/PortalSite/VerifyImage/?r=" + Math.random();
            return $("#verifyImage").attr("src", t), !1
        }), window.qqLogin = function () {
            window.location = o + "/PortalSite/QQLogin?srcUrl=" + encodeURIComponent(this.location.href)
        }, window.sinaLogin = function () {
            window.location = o + "/PortalSite/SinaLogin?srcUrl=" + encodeURIComponent(this.location.href)
        }, window.wechatLogin = function () {
            window.location = o + "/PortalSite/WeChatLogin?srcUrl=" + encodeURIComponent(this.location.href)
        }, $("#sloginSubmit").click(function () {
            if (!$("#smobile").val() || !$("#spassword").val()) return void $("#sloginerrormsg").html("电话或短信验证码不能为空！").show();
            $("#sloginSubmit").hide(), $("#sloginSubmitIng").show(), $.ajax({
                "url": o + "/PortalSite/SmsAjaxLogin/",
                "data": {
                    "smobile": $("#smobile").val(),
                    "spassword": $("#spassword").val(),
                    "redirectUrl": $("#redirectUrl").val()
                },
                "type": "post",
                "dataType": "jsonp",
                "success": function (t) {
                    if (t.IsSuccess) {
                        if ($("#redirectUrl").val()) return void (window.location.href = $("#redirectUrl").val());
                        var n = $("div.j-logon-directorder > a").attr("href");
                        n ? window.location.href = n : window.location.reload()
                    } else $("#sloginSubmit").show(), $("#sloginSubmitIng").hide(), $("#sloginerrormsg").html(t.Message).show()
                }
            })
        });
        var s = 60;
        $("#sbtnGetVerifyCode").click(function () {
            var t = $("#sverifycode");
            if (!$("#svalidatearea").hasClass("dn") && !t.val()) return void $("#sloginerrormsg").html("验证码不能为空！").show();
            var n = $("#smobile");
            return n.val() ? /^1\d{10}$/.test(n.val()) ? ($("#sloginerrormsg").html("正在发送验证码至你的手机，请稍等！").show(), void $.ajax({
                "url": o + "/PortalSite/SmsSendVerifyCode/",
                "data": {"smobile": n.val(), "sverifycode": t.val()},
                "type": "post",
                "dataType": "jsonp",
                "success": function (t) {
                    $("#sloginerrormsg").html(t.Message).show(), t.IsSuccess ? i() : $("#sverifyImageLink").click()
                }
            })) : void $("#sloginerrormsg").html("手机号不正确！").show() : void $("#sloginerrormsg").html("手机号不能为空！").show()
        }), $("#smobile,#spassword,#sverifycode").focus(function () {
            $(this).next().hide(), $("#sloginerrormsg").hide()
        }).blur(function () {
            "" == $.trim($(this).val()) && $(this).next().show()
        }), $("#saveUserLongTime").click(function () {
            this.checked ? $("#userExpiresHours").val(350) : $("#userExpiresHours").val("")
        }), $("#sverifyImage,#sverifyImageLink").click(function () {
            var t = o + "/PortalSite/VerifyImage/?r=" + Math.random();
            return $("#sverifyImage").attr("src", t), !1
        }), $("#loginBtn").overlay({
            "top": "center",
            "mask": {"color": "#000", "loadSpeed": 100, "opacity": .5},
            "target": "#userPop",
            "closeOnClick": !1,
            "close": ".closeSubmit,div.link-group > a",
            "fixed": !1,
            "onBeforeLoad": function () {
                $(".login-tabs").children().first().click()
            }
        }), $("#tabPwdLogin").click(function () {
            $("#tabPwdLogin").addClass("isActive"), $("#tabSmsLogin").removeClass("isActive"), $("#tabPwdLoginContent").show(), $("#tabSmsLoginContent").hide(), $("#verifyImageLink").click();
            var t = new RegExp("^1[0-9]{10}$");
            !$("#account").val() && $("#smobile").val() && t.test($("#smobile").val()) && ($("#account").val($("#smobile").val()), $("#account").next(".text-watermark").hide()), $("#account").val() ? $("#account").next(".text-watermark").hide() : $("#account").focus()
        }), $("#tabSmsLogin").click(function () {
            $("#tabSmsLogin").addClass("isActive"), $("#tabPwdLogin").removeClass("isActive"), $("#tabPwdLoginContent").hide(), $("#tabSmsLoginContent").show(), $("#sverifyImageLink").click();
            var t = new RegExp("^1[0-9]{10}$");
            !$("#smobile").val() && $("#account").val() && t.test($("#account").val()) && $("#smobile").val($("#account").val()), $("#smobile").val() ? $("#smobile").next(".text-watermark").hide() : $("#smobile").focus()
        }), $("#tabPwdLoginContent,#tabSmsLoginContent").on("keydown", "input:visible", function (t) {
            if ("13" == t.keyCode) return $(t.delegateTarget).find("input.login-btn:button:visible").click(), !1
        })
    }, "40": function (t, n, e) {
        function i(t) {
            a(t.qimoClientInfo), o(t.imConfig)
        }

        function a(t) {
            window.qimoClientId = t, window.isLogin = t && t.userId && "-544208800" != t.userId
        }

        function o(t) {
            window.apiUrl = t.apiUrl, window.customerUrl = t.vipUrl, window.imUrl = t.imUrl, window.portalUrl = t.portalUrl, window.ServerDomain = t.serverDomain, window.TUJIA_CLIENTID = t.tujiaClientId, window.vipUrl = t.vipUrl, window.ORDERNOTICE_RADIO = t.orderNoticeRadio, e.e(0).then(function (t) {
                e(43);
                console.log("jquery-ui loaded"), s(window.tjGlobal.host.PWASTATIC_TUJIA_HOST + "/static/im/pc/tujia_im_v3.js")
            }.bind(null, e)).catch(e.oe)
        }

        function s(t) {
            var n = document.createElement("script");
            n.async = 1, n.setAttribute("src", t), document.body.appendChild(n)
        }

        e(49);
        var r = $("#tujia_page_navbar");
        r.data("cnd-static");
        n.init = i, n.initQimo = a, n.initIm = o
    }, "409": function (t, n) {
    }, "41": function (t, n) {
        window.$.cookie = function (t, n, e) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || null === n || void 0 === n)) {
                if (e = $.extend({}, e, {"path": "/"}), null !== n && void 0 !== n || (e.expires = -1), "number" == typeof e.expires) {
                    var i = e.expires, a = e.expires = new Date;
                    a.setDate(a.getDate() + i)
                }
                return n = String(n), document.cookie = [encodeURIComponent(t), "=", e.raw ? n : encodeURIComponent(n), e.expires ? "; expires=" + e.expires.toUTCString() : "", e.path ? "; path=" + e.path : "", e.domain ? "; domain=" + e.domain : "", e.secure ? "; secure" : ""].join("")
            }
            e = n || {"path": "/"};
            for (var o, s = e.raw ? function (t) {
                return t
            } : decodeURIComponent, r = document.cookie.split("; "), c = 0; o = r[c] && r[c].split("="); c++) if (s(o[0]) === t) return s(o[1] || "");
            return null
        }
    }, "436": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = t.data, o = i.$escape, s = i.$each;
            t.value, t.$index;
            return n += '\x3c!--comment-summary--\x3e\n<div class="comment-summary" id="comment-summary">\n    ', null !== a.commentSummary && a.commentSummary.totalCount && (n += '\n    \n    <div class="comment-summary-header">\n      <span class="comment-summary-title">入住点评</span><span class="gray-text">(', n += o(a.commentSummary.totalCount), n += '条)</span>\n      <span class="comment-benefit" rel="j-experience-info">发点评送福利\n        <i class="iconfont icon-tips">&#xe0a2;</i>\n      </span>\n    </div>\n    <div class="comment-summary-main">\n      <div class="comment-score">\n        <div class="comment-comprehensive-score">\n          <span>综合评分</span>\n          <span class="visual-description-wrapper">\n            <span class="score" id="score"></span>\n          </span>\n          <span class="score-num" id="overallScore">', n += o(a.commentSummary.overallScore), n += '</span>\n          <span class="score-explainment">分(满分5分)</span>\n        </div>\n        <div class="comment-varied-score">\n          <span class="clean-score">\n            整洁卫生\n            <i class="score-num">\n              ', n += o(a.commentSummary.hygieneScore), n += '\n            </i>\n            分\n          </span>\n          <span class="traffic-score">\n            交通位置\n            <i class="score-num">\n              ', n += o(a.commentSummary.trafficScore), n += '\n            </i>\n            分\n          </span>\n          <span class="service-score">\n            管理服务\n            <i class="score-num">\n              ', n += o(a.commentSummary.serviceScore), n += '\n            </i>\n            分\n          </span>\n          <span class="decoration-score">\n            设施装修\n            <i class="score-num">\n              ', n += o(a.commentSummary.decorationScore), n += '\n            </i>\n            分\n          </span>\n        </div>\n      </div>\n      <div class="comment-tags">\n        ', s(a.commentSummary.commentTags, function (t, e) {
                n += '\n        <span class="label-text">', n += o(t), n += "</span>\n        "
            }), n += '\n      </div>\n    </div>\n    <div id="j-experience-info" style="display:none">\n      <div class="tips-content experience-voucher">\n          <h2>发点评送福利说明</h2>\n          <div class="tips-info">\n              <ol>\n                  <li>下单入住后60天内发表点评（字数为50字），审核通过后赠送300积分</li>\n                  <li>点评内容真实丰富（100字以上）并上传房屋相关实拍高质量图片（3张），将有机会评选为精华点评，加精点评将赠送200积分，赠送上传图片积分（每张50积分</li>\n                  <li>同一账号对同一房屋的多条内容相似点评，如符合加精规则仅一条可评选为精华点评</li>\n                  <li>自订单已入住状态起，60天内可发表点评</li>\n              </ol>\n          </div>\n      </div>\n    </div>\n    \n\n\n    '), n += "\n</div>\n", null !== a.commentSummary && a.commentSummary.totalCount && (n += '\n<div class="cont-info">\n    \x3c!--comment-filter--\x3e\n    <ul class="comment-filter" id="comment_filter">\n        <li class="current">全部<span>(', n += o(a.commentSummary.totalCount), n += ")</span></li>\n        \x3c!-- <li><p>精品点评</p><span>(", n += o(a.commentSummary.recommendedCount), n += ")</span></li> --\x3e\n        <li><p>带照片</p><span>(", n += o(a.commentSummary.pictureCommentCount), n += ')</span></li>\n    </ul>\n    \x3c!--comment-list--\x3e\n    <ul class="comment-list" id="comment_list">\n\n            <li>\n                <div class="comment-group">\n                    <div class="unit-loading"><img ', n += 'src="' + e(248) + '"', n += '></div>\n                </div>\n                <div class="pagination"></div>\n            </li>\n            <li style="display:none">\n                <div class="comment-group">\n                    <div class="unit-loading"><img ', n += 'src="' + e(248) + '"', n += '></div>\n                </div>\n                <div class="pagination"></div>\n            </li>\n            <li style="display:none">\n                <div class="comment-group">\n                    <div class="unit-loading"><img ', n += 'src="' + e(248) + '"', n += '></div>\n                </div>\n                <div class="pagination"></div>\n            </li>\n    </ul>\n</div>\n'), n += "\n"
        }
    }, "437": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = i.$each, a = (t.value, t.$index, i.$escape);
            t.picList;
            return n += "<ul>\n  ", t.comments || (n += '\n    <li class="t-layer-loading">没有可查看的评论</li>\n  '), n += "\n  ", e(t.comments, function (t, i) {
                n += '\n  <li class="list-group clearfix">\n  <div class="user-avatar">\n      <img class="CommentAvatarUrl" alt="" width="40" height="40" src="', n += a(t.customerAvatarUrl), n += '" onerror="javascript:this.src=\'https://nmstatic.tujia.com/static/images/user_default.7587872.png\'" style="display: block;" >\n  </div>\n  <div class="comment-main">\n      <div class="comment-tit">\n          <div class="comment-info">\n              <span class="name-box">', n += a(t.customerName), n += '</span>\n              <span class="booking-info">\n                  <b>', n += a(t.submitDate), n += '</b>\n              </span>\n          </div>\n      </div>\n      <div class="comment-detail"><span>', n += a(t.commentDetail), n += '</span></div>\n      <div class="comment-pic">\n          <ul>\n              ', e(t.pictureList, function (t, e) {
                    n += '\n              <li>\n                  <a href="javascript:;" rel="', n += a(t.albumUrl), n += '" class="group2 cboxelement colorboxgroup2045241" title="">\n                      <img class="DetailCommentlazy" src="', n += a(t.url), n += '" width="70" height="43" alt="" style="display: block;">\n                  </a>\n              </li>\n              '
                }), n += "\n          </ul>\n      </div>\n      ", "" != t.replyContent && (n += '\n      <div class="htl-reply">\n          <div class="htl-hd">\n              <div class="htl-avatar">\n                  <img class="avatarPic" alt=" " width=" 40" height="40">\n              </div>\n              <div class="htl-info">\n\n                  <p>回复：<span class="booking-info"><b>', n += a(t.replyDate), n += '</b></span> </p>\n              </div>\n          </div>\n          <div class="text-cont">\n              ', n += a(t.replyContent), n += '\n          </div>\n      </div>\n      <div class="btn-cont other-hotel">\n          <a href="javascript:;">收起回复</a>\n      </div>\n      '), n += "\n  </div>\n  </li>\n  "
            }), n += "\n  </ul>\n"
        }
    }, "438": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$escape, o = i.$each, s = (t.key, t.index, t.values, t.i, t.reduceArr);
            return n += '<div class="product-con">\n  ', (e.promotionTip || e.productTips) && (n += " ", e.promotionTip ? (n += '\n  <div class="product-tips">', n += a(e.promotionTip), n += "</div>\n  ") : (n += " ", 1 == e.productTips.length ? (n += '\n  <div class="product-tips">连住优惠：', n += a(e.productTips[0]), n += "</div>\n  ") : 0 == e.productTips.length ? n += '\n  <div class="product-tips"></div>\n  ' : (n += '\n  <div class="product-tips">连住优惠：', n += a(e.productTips[0]), n += '...</div>\n  <div class="product-tips-float">\n    ', o(e.productTips, function (t, e) {
                n += ' <span class="product-tips-content">', n += a(t), n += "；</span> "
            }), n += '\n    <div class="triangle-border tb-border"></div>\n    <div class="triangle-border tb-background"></div>\n  </div>\n  '), n += " "), n += " "), n += " ", o(e.products, function (t, e) {
                n += " ", 0 == t.productPackageId && (n += '\n  <div class="product-box">\n    <div class="date-change-box">\n      <div class="total-price">\n        <p class="product-name" title="', n += a(t.productName), n += '">', n += a(t.productName), n += "</p>\n      </div>\n      ", null != t.ruleIntro && (n += '\n      <p class="sure-order" title="', n += a(t.ruleIntro.introduction), n += '">', n += a(t.ruleIntro.title), n += "</p>\n      "), n += '\n      <div class="pay-all">\n        ', null !== t.prepayIntro && (n += ' <span class="pay-all-part" title="', n += a(t.prepayIntro.introduction), n += '">', n += a(t.prepayIntro.title), n += "</span> "), n += " ", null != t.cancelIntro && (n += '\n        <div class="triangle-no-refunds">\n          <div class="no-refunds">(', n += a(t.cancelIntro.title), n += ')</div>\n          <div class="message-box-different">\n            <h2 class="message-title">', n += a(t.cancelIntro.title), n += '</h2>\n            <span class="message-word"> ', n += a(t.cancelIntro.introduction), n += ' </span>\n            <div class="triangle-border tb-border"></div>\n            <div class="triangle-border tb-background"></div>\n          </div>\n        </div>\n        '), n += "\n      </div>\n      ", t.finalPrice < t.productPrice && (n += " ", 1 == t.allowBooking && (n += '\n      <div class="price">\n        <span class="symbol">￥ </span> <span class="price-count">', n += a(t.finalPrice), n += "</span>\n      </div>\n      "), n += " ", 0 == t.allowBooking && (n += '\n      <div class="price">\n        <span class="symbol symbol-no-count">￥ </span> <span class="price-no-count">', n += a(t.finalPrice), n += "</span>\n      </div>\n      "), n += " ", 1 == t.returnCashSettingType ? (n += '\x3c!--预付全额（立减）开始--\x3e\n      <div class="price price-product">\n        <span class=" price-count price-count-old">', n += a(t.productPrice), n += '</span>\n        <div class="price-float">\n          ', o(t.returnCashIntro, function (t, e) {
                    n += '\n          <span class="tips-content">\n            ', 10 == t.promoSourceType && (n += '\n            \x3c!--会员立减--\x3e\n            您是<span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >，享额外立减", n += a(t.reduceAmount), n += "元。 "), n += " ", 20 == t.promoSourceType && (n += '\n            \x3c!--促销立减--\x3e\n            <span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >立减", n += a(t.reduceAmount), n += "元。 "), n += " ", 30 == t.promoSourceType && (n += '\n            \x3c!--红包立减--\x3e\n            您有可用<span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >，享额外立减", n += a(t.reduceAmount), n += "元。 "), n += " ", 80 == t.promoSourceType && (n += '\n            \x3c!--钻石卡立减--\x3e\n            <span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >额外立减", n += a(t.reduceAmount), n += "元。 "), n += "\n          </span>\n          "
                }), n += " ", t.returnCashIntro.length > 1 && (n += " 合计立减", n += a(s[e]), n += "元 "), n += '\n          <div class="triangle-border tb-border"></div>\n          <div class="triangle-border tb-background"></div>\n        </div>\n      </div>\n      \x3c!--预付全额（立减）结束--\x3e\n      ') : 2 == t.returnCashSettingType && (n += '\n      <div class="price price-product">\n        \x3c!--0订金付款（返现）开始--\x3e\n        <span class="price-count-back">', n += a(t.productPrice), n += '</span> <span class="back-word">返</span> <span class="price-count-back">', n += a(s[e]), n += "</span> ", 1 == t.returnCashIntro.length ? (n += '\x3c!--返现数组长度为1展示返现细节开始--\x3e\n        <div class="price-float">\n          <h2>返现说明</h2>\n          ', o(t.returnCashIntro, function (t, e) {
                    n += '\n          <span class="tips-content">\n            1） ', 10 == t.promoSourceType && (n += '\n            \x3c!--会员返现--\x3e\n            您是<span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >，享额外返现", n += a(t.reduceAmount), n += "元。 "), n += " ", 20 == t.promoSourceType && (n += '\n            \x3c!--促销返现--\x3e\n            <span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >返现", n += a(t.reduceAmount), n += "元。 "), n += " ", 30 == t.promoSourceType && (n += '\n            \x3c!--红包返现--\x3e\n            您有可用<span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >，享额外返现", n += a(t.reduceAmount), n += "元。 "), n += " ", 80 == t.promoSourceType && (n += '\n            \x3c!--钻石卡返现--\x3e\n            <span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >额外返现", n += a(t.reduceAmount), n += "元。 "), n += "\n          </span>\n          "
                }), n += ' <span class="tips-info">2）入住完成并经过途家的确认后，返还的现金将在7个工作日内充值到您的途家账户中，可以提现，提现金额不得低于100元人民币，也可用于下次预订。</span>\n          <div class="line-box"></div>\n          <h2>提现说明</h2>\n          <span class="tips-info">\n            在“我的途家”的“账户余额”中可以查看到返现金额并进行提现，支持支付宝和银行卡2种方式，您设置好正确的账号信息后，就可以做提现申请。途家在收到提现申请后进行审核，审核通过后3-7个工作日将现金打入到您的提现账号里。\n          </span>\n          <div class="triangle-border-back tb-border"></div>\n          <div class="triangle-border-back tb-background"></div>\n        </div>\n        \x3c!--返现数组长度为1展示返现细节结束--\x3e\n        ') : (n += '\n        <div class="price-float">\n          \x3c!--返现数组长度展示大于1开始--\x3e\n          ', o(t.returnCashIntro, function (t, e) {
                    n += '\n          <span class="tips-content">\n            ', 10 == t.promoSourceType && (n += '\n            \x3c!--会员返现--\x3e\n            您是<span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >，享额外返现", n += a(t.reduceAmount), n += "元。 "), n += " ", 20 == t.promoSourceType && (n += '\n            \x3c!--促销返现--\x3e\n            <span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >返现", n += a(t.reduceAmount), n += "元。 "), n += " ", 30 == t.promoSourceType && (n += '\n            \x3c!--红包返现--\x3e\n            您有可用<span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >，享额外返现", n += a(t.reduceAmount), n += "元。 "), n += " ", 80 == t.promoSourceType && (n += '\n            \x3c!--钻石卡返现--\x3e\n            <span class="tips-name">', n += a(t.promoSourceTypeName), n += "</span\n            >额外返现", n += a(t.reduceAmount), n += "元。 "), n += "\n          </span>\n          "
                }), n += " ", t.returnCashIntro.length > 1 && (n += " 合计立减", n += a(s[e]), n += "元 "), n += '\n          <div class="triangle-border tb-border"></div>\n          <div class="triangle-border tb-background"></div>\n        </div>\n        \x3c!--返现数组长度大于1结束--\x3e\n        '), n += "\n      </div>\n      \x3c!--0订金付款（返现）结束--\x3e\n      "), n += " "), n += "\n\n      ", t.finalPrice >= t.productPrice && (n += " ", 1 == t.allowBooking && (n += '\n      <p class="price">\n        <span class="symbol">￥ </span> <span class="price-count">', n += a(t.finalPrice), n += "</span>\n      </p>\n\n      "), n += " ", 0 == t.allowBooking && (n += '\n      <p class="price">\n        <span class="symbol symbol-no-count">￥ </span> <span class="price-no-count">', n += a(t.finalPrice), n += "</span>\n      </p>\n      "), n += " "), n += "\n\n      ", null != t.productPriceTips && (n += ' <span class="product-price-tips">', n += a(t.productPriceTips), n += "</span> "), n += "\n\n      ", 1 == t.allowBooking && (n += ' <button class="order-btn" data-id="', n += a(t.productId), n += '" data-activityInfo="', n += a(t.activityInfo), n += '">立即预订</button> '), n += "\n\n      ", 0 == t.allowBooking && (n += '\n      <p class="no-house-box">\n        ', "订满" == t.disallowBookingReason && (n += ' <span class="order-finished">', n += a(t.disallowBookingReason), n += "</span> "), n += " ", "订满" != t.disallowBookingReason && (n += '\n        <span class="no-booking">', n += a(t.disallowBookingReason), n += "</span> "), n += " ", 1 == t.productCalendar && (n += '<a href="javascript:;" class="can-order" data-productid="', n += a(t.productId), n += '">哪天可订</a>'), n += "\n      </p>\n      "), n += "\n    </div>\n  </div>\n\n  "), n += " "
            }), n += '\n  <div class="mask"></div>\n  <div class="p-content">\n    <div class="p-text">\n      <p>您正在前往<span>途家网</span>（携程网战略合作伙伴）</p>\n      <img src="', n += a(i.STATICFILE_TUJIA_HOST), n += '/portalsite2/Images/Ctrip-images/img.png" alt="" />\n    </div>\n  </div>\n</div>\n'
        }
    }, "439": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = i.$escape, a = t.data, o = i.$each, s = (t.rules, t.$index, t.items, t.isCallCenter);
            return n += '<div class="unitIntro clearfix">\n  <h2>预订须知</h2>\n  <span>（房屋编号：', n += e(a.unit.unitId), n += ")</span>\n</div>\n\x3c!-- 入住须知 --\x3e\n", a.unit.checkInRules && (n += '\n<div class="resident-cont clearfix">\n  <div class="side-box">\n    <i class="iconfont icon-resident">&#xe0a4;</i>\n    <h3>入住须知</h3>\n  </div>\n  <div class="content-box">\n    ', o(a.unit.checkInRules, function (t, i) {
                n += "\n    \x3c!-- 横向展示 --\x3e\n    ", t.checkInRuleFloat ? (n += '\n    <div class="pre-mod fold">\n      <p>', n += e(t.title), n += "：</p>\n      ", o(t.items, function (t, i) {
                    n += " ", 1 == t.deleted ? (n += ' <span class="gray-text">', n += e(t.introduction), n += "</span> ", t.tip && (n += '\n      <i class="iconfont icon-tips j-depositInfo" rel="j-depositInfo">&#xe0a2;</i>\n      <div id="j-depositInfo" style="display:none">\n        <div class="depositInfo-content">', n += e(t.tip), n += "</div>\n      </div>\n      "), n += " ") : (n += " <span>", n += e(t.introduction), n += "</span> ", t.tip && (n += ' <i class="iconfont icon-tips j-depositInfo" rel="j-depositInfo">&#xe0a2;</i>\n      <div id="j-depositInfo" style="display:none">\n        <div class="depositInfo-content">', n += e(t.tip), n += "</div>\n      </div>\n      "), n += " ", s || null === t.link || 1 != t.link.enabled || (n += '\n      \x3c!-- <a href="', n += e(t.link.navigateUrl), n += '" class="bindnow">立即绑定</a> --\x3e\n      '), n += " "), n += " "
                }), n += "\n    </div>\n    ") : (n += "\n    \x3c!-- 非横向展示 --\x3e\n    ", "其他" == t.title ? (n += '\n    <div class="pre-mod">\n      <p>', n += e(t.title), n += "：</p>\n      ", o(t.items, function (t, i) {
                    n += '\n      <div class="desc">', n += e(t.introduction), n += "</div>\n      "
                }), n += "\n    </div>\n    ") : (n += '\n    <div class="pre-mod">\n      <p>', n += e(t.title), n += '：</p>\n      <ol class="rules-list clearfix">\n        ', o(t.items, function (t, i) {
                    n += "\n        ", 1 == t.deleted ? (n += '\n        <li class="not">\n          <i class="iconfont">&#xe0aa;</i>', n += e(t.introduction), n += " ", t.tip && (n += " ", "接待老人" == t.introduction ? (n += '\n          <i class="iconfont icon-tips j-no-admitOldPeple" rel="j-no-admitOldPeple">&#xe0a2;</i>\n          <div id="j-no-admitOldPeple" style="display:none">\n            <div class="admitpeople">', n += e(t.tip), n += "</div>\n          </div>\n          ") : "接待儿童" == t.introduction && (n += ' <i class="iconfont icon-tips j-no-admitChildren" rel="j-no-admitChildren">&#xe0a2;</i>\n          <div id="j-no-admitChildren" style="display:none">\n            <div class="admitpeople">', n += e(t.tip), n += "</div>\n          </div>\n          "), n += " "), n += "\n        </li>\n        ") : (n += '\n        <li>\n          <i class="iconfont">&#xe0e1;</i>', n += e(t.introduction), n += " ", t.tip && (n += " ", "接待老人" == t.introduction ? (n += '\n          <i class="iconfont icon-tips j-admitOldPeple" rel="j-admitOldPeple">&#xe0a2;</i>\n          <div id="j-admitOldPeple" style="display:none">\n            <div class="admitpeople">', n += e(t.tip), n += "</div>\n          </div>\n          ") : "接待儿童" == t.introduction && (n += ' <i class="iconfont icon-tips j-admitChildren" rel="j-admitChildren">&#xe0a2;</i>\n          <div id="j-admitChildren" style="display:none">\n            <div class="admitpeople">', n += e(t.tip), n += "</div>\n          </div>\n          "), n += " "), n += "\n        </li>\n        "), n += "\n        "
                }), n += "\n      </ol>\n    </div>\n    "), n += " "), n += " "
            }), n += "\n  </div>\n</div>\n"), n += "\n\x3c!-- 额外费用 --\x3e\n", a.unit.serviceRules && (n += '\n<div class="extracost-cont clearfix line-dashed">\n  <div class="side-box">\n    <i class="iconfont icon-service"></i>\n    <h3>额外费用</h3>\n  </div>\n  <div class="content-box">\n    ', o(a.unit.serviceRules, function (t, i) {
                n += "\n    \x3c!-- 横向展示 --\x3e\n    ", t.checkInRuleFloat ? (n += '\n    <div class="pre-mod fold">\n      <ol class="alowed">\n        ', o(t.items, function (t, i) {
                    n += "\n        ", 1 == t.deleted ? (n += '\n        <li class="line-through" rel="j-allowed-tip">\n          <em>', n += e(t.introduction), n += '</em>\n          <div class="tips-cont" style="display:none"></div>\n        </li>\n\n        ') : (n += '\n        <li rel="j-allowed-tip">\n          <em>', n += e(t.introduction), n += '</em>\n          <div class="tips-cont" style="display:none"></div>\n        </li>\n        '), n += "\n\n        "
                }), n += "\n      </ol>\n    </div>\n    ") : (n += '\n    <div class="pre-mod">\n      <p>其他：</p>\n      ', o(t.items, function (t, i) {
                    n += '\n      <div class="desc">', n += e(t.introduction), n += "</div>\n      "
                }), n += "\n    </div>\n    "), n += " "
            }), n += "\n  </div>\n</div>\n"), n += "\n"
        }
    }, "44": function (t, n, e) {
        "use strict";
        var i = e(5), a = e(8).TJRequestV2, o = new a, s = {"appdownloadUpdate": "/bingo/pc/trace/appdownload"},
            r = e.i(i["a"])(), c = window.tjGlobal.tujia_out_site_referrerUrl, l = {
                "appdownloadUpdate": function (t) {
                    var n = t.callback;
                    o.postRequest(s.appdownloadUpdate, {"gid": r, "refurl": c}, n)
                }
            };
        n["a"] = l
    }, "440": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$escape, o = t.talentExperience, s = i.$each;
            t.value, t.index, t.facility, t.$index, t.tags, t.surround;
            return n += '    \x3c!--吸顶--\x3e\n    <div class="house-tab-box">\n    <div class="house-tab" id="contentTab">\n        <ul class="clearfix">\n            <li class="item-first current">\n                <a href="#unitdetailinfo">房屋详情</a>\n            </li>\n            <li>\n                <a href="#unitcheckinneedtoknow">预订须知</a>\n            </li>\n            <li>\n                <a href="#unitmap">位置地图</a>\n            </li>\n            ', null !== e.commentSummary && (n += "\n            ", 0 !== e.commentSummary.totalCount && (n += '\n            <li>\n                <a href="#comment">房屋点评（<span class="comment-total">', n += a(e.commentSummary.totalCount), n += "条</span>）</a>\n            </li>\n            "), n += "\n            "), n += "\n            ", 1 == o && (n += '\n            <li>\n                <a href="#talentExperience">达人体验</a>\n            </li>\n            '), n += '\n\n            <li class="item-last">\n                <a href="#product-date" id="tabbookbtn" class="book-btn">查看房价</a>\n                <a href="#product-date" id="tabbookprice"><span class="price-value"><dfn class="f-vt">￥</dfn> <i class="priceInfo"></i></span></a>\n            </li>\n        </ul>\n    </div>\n    </div>\n\n    \x3c!--房屋亮点--\x3e\n    ', e.unit.highLight && (n += '\n    <div class="unit-cont highlight-cont line-dashed" id="unitdetailinfo">\n        <div class="side-box">\n            <i class="iconfont highlight">&#xe085;</i>\n            <h3>房屋亮点</h3>\n        </div>\n        <div class="content-box">\n            <ol class="highlight-info">\n                ', s(e.unit.highLight, function (t, e) {
                n += "\n                <li>", n += a(t), n += "</li>\n                "
            }), n += "\n            </ol>\n        </div>\n    </div>\n    "), n += "\n    \x3c!--设施服务--\x3e\n    ", e.unit.facilities && (n += '\n    <div class="unit-cont facility-cont line-dashed">\n        <div class="side-box">\n            <i class="iconfont">&#xe086;</i>\n            <h3>设施服务</h3>\n        </div>\n        <div class="content-box">\n            <div class="facility-list" id="listWrap">\n                ', s(e.unit.facilities, function (t, e) {
                n += "\n                <h5>", n += a(t.groupName), n += '</h5>\n                <ul class="clearfix">\n                    ', s(t.tags, function (t, e) {
                    n += "\n                        ", 1 == t.deleted ? (n += '\n                            <li class="i-not"><i class="iconfont">&#x', n += a(t.code), n += ";</i>", n += a(t.name), n += "</li>\n                        ") : 0 == t.deleted && (n += "\n                            <li ", "部分空调" == t.name && (n += 'title="部分卧室客厅有空调"'), n += '><i class="iconfont">&#x', n += a(t.code), n += ";</i>", n += a(t.name), n += "</li>\n                        "), n += "\n                    "
                }), n += "\n                </ul>\n                "
            }), n += '\n            </div>\n            <div class="show-all-btn" id="facilityshowmore">\n                <a href="javascript:;">查看全部</a><i class="icon-arrow down"></i>\n            </div>\n        </div>\n    </div>\n    '), n += "\n    \x3c!--房屋描述--\x3e\n    ", e.unit.introduction && (n += '\n    <div class="unit-cont intro-cont line-dashed">\n        <div class="side-box">\n            <i class="iconfont">&#xe083;</i>\n            <h3>房屋描述</h3>\n        </div>\n        <div class="content-box">\n            <div class="desc-info">', n += a(e.unit.introduction), n += "</div>\n            ", e.unit.surroundingIntroduction && (n += "\n            ", s(e.unit.surroundingIntroduction, function (t, e) {
                n += '\n            <div class="desc-info">\n                ', t.title && (n += "\n                <p>", n += a(t.title), n += "</p>\n                "), n += "\n                ", n += a(t.introduction), n += "\n            </div>\n            "
            }), n += "\n            "), n += '\n\n            <div class="show-all-btn" id="introshowmore">\n                <a href="javascript:;">查看全部</a><i class="icon-arrow down"></i>\n            </div>\n        </div>\n    </div>\n    '), n += "\n\n    \x3c!--小区概况--\x3e\n    ", e.unit.residentialQuarter && (n += '\n    <div class="unit-cont resident-cont line-dashed">\n        <div class="side-box">\n            <i class="iconfont">&#xe084;</i>\n            <h3>小区概况</h3>\n        </div>\n        <div class="content-box">\n            <div class="resident-info">\n            \x3c!--小区名称--\x3e\n            ', e.unit.residentialQuarter.name && (n += '\n                <div class="cont-info">', n += a(e.unit.residentialQuarter.name), n += "</div>\n            "), n += "\n            \x3c!--小区介绍--\x3e\n            ", e.unit.residentialQuarter.introduction && (n += '\n                <div class="cont-info">', n += a(e.unit.residentialQuarter.introduction), n += "</div>\n            "), n += "\n            \x3c!--小区设施--\x3e\n            ", e.unit.residentialQuarter.facilities && (n += '\n                <div class="cont-info">\n                    ', s(e.unit.residentialQuarter.facilities, function (t, e) {
                n += "\n                        <p>", n += a(t), n += "</p>\n                    "
            }), n += "\n                </div>\n            "), n += "\n            \x3c!--特色--\x3e\n            ", e.unit.residentialQuarter.feature && (n += '\n                <div class="cont-info">', n += a(e.unit.residentialQuarter.feature), n += "</div>\n            "), n += "\n            \x3c!--安保措施--\x3e\n            ", e.unit.residentialQuarter.security && (n += '\n                <div class="cont-info">', n += a(e.unit.residentialQuarter.security), n += "</div>\n            "), n += "\n            \x3c!--年份--\x3e\n            ", e.unit.residentialQuarter.buildYear && (n += '\n                <div class="cont-info label-text">年份-', n += a(e.unit.residentialQuarter.buildYear), n += "</div>\n            "), n += "\n            \x3c!--绿化率--\x3e\n            ", e.unit.residentialQuarter.greening && (n += '\n                <div class="cont-info label-text">绿化率-', n += a(e.unit.residentialQuarter.greening), n += "%</div>\n            "), n += "\n            \x3c!--停车费--\x3e\n            ", e.unit.residentialQuarter.parking && (n += '\n                <div class="cont-info label-text">停车费-', n += a(e.unit.residentialQuarter.parking), n += "</div>\n            "), n += "\n            \x3c!--便利店--\x3e\n            ", e.unit.residentialQuarter.accessoriesSummary && (n += "\n                <div>", n += a(e.unit.residentialQuarter.accessoriesSummary), n += "</div>\n            "), n += "\n            \x3c!--小区图片--\x3e\n            ", e.unit.residentialQuarter.housePictures && (n += '\n            <div class="cont-info">\n                <ul class="cont-pic clearfix">\n                    ', s(e.unit.residentialQuarter.housePictures, function (t, e) {
                n += '\n                    <li>\n                        <a class="group1" rel="', n += a(t), n += '">\n                            <img src="', n += a(t), n += '" width="70" height="43" >\n                        </a>\n                    </li>\n                    '
            }), n += "\n                </ul>\n            </div>\n            "), n += '\n            </div>\n            <div class="show-all-btn" id="residentshowmore">\n                <a href="javascript:;">查看全部</a><i class="icon-arrow down"></i>\n            </div>\n        </div>\n    </div>\n    '), n += "\n"
        }
    }, "441": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$each, o = (t.pic, t.index, i.$escape), s = t.unitInstanceCount;
            return n += '<div class="swiper-wrapper">\n', e && (n += "\n", a(e, function (t, e) {
                n += '\n  <div class="swiper-slide"><img src="', n += o(t), n += '" /></div>\n'
            }), n += "\n"), n += '\n</div>\n<span class="thumb-prev"></span>\n<span class="thumb-next"></span>\n<div class="shadow-box"></div>\n\x3c!-- 相同房型套数 --\x3e\n', s > 1 && (n += '\n<div class="house-num">\n  此房型有<span class="num">', n += o(s), n += "</span>套，实际入住与此可能略有不同\n</div>\n"), n += "\n"
        }
    }, "442": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = t.data, o = i.$escape, s = i.$each, r = t.tagsBit,
                c = (t.value, t.i, t.item, t.setPricePresent), l = t.prepayType, d = t.reduceArr, u = t.values,
                p = (t.key, t.index, t.productPriceTips), h = t.talentExperience;
            return n += ' <div class="hotel-info">\n    <div class="hotel-cont">\n\n      <div class="room-info">\n        <div class="house-name">\n            ', 1 == a.unit.unitLevel && (n += '<span class="icon-name"><img ', n += 'src="' + e(820) + '"', n += ' alt=""></span>'), n += "\n            ", 2 == a.unit.unitLevel && (n += '<span class="icon-name"><img ', n += 'src="' + e(818) + '"', n += ' alt=""></span>'), n += "\n            ", 3 == a.unit.unitLevel && (n += '<span class="icon-name"><img ', n += 'src="' + e(819) + '"', n += ' alt=""></span>'), n += '\n            <span class="house-room-name">', n += o(a.unit.unitName), n += "</span>\n        </div>\n          <ul class=\"room-tag\" id='tags'>\n           ", s(r, function (t, e) {
                n += "\n             ", 5 != t.unitTagType && 6 != t.unitTagType && 8 != t.unitTagType && (n += '\n                <li class="tagsLi tagsLi-style', n += o(e), n += '"><span >', n += o(r[e].text), n += '</span>\n                 <div class="introducion">\n                   <span style="color: #333">', n += o(r[e].introducion), n += '</span>\n                   <div class="triangle-border tb-border"></div>\n                   <div class="triangle-border tb-background"></div>\n                 </div>\n                </li>\n                '), n += "\n           "
            }), n += '\n          </ul>\n          <div class="district-info">\n            <i class="icon-area"></i>\n            <span>', n += o(a.unit.address), n += "</span>\n            ", null != a.unit.geoPositionName && (n += '\n              <a href="', n += o(a.unit.geoPositionUrl), n += '">[', n += o(a.unit.geoPositionName), n += "]</a>\n            "), n += '\n            <a id="map-link" href="#unitmap">查看地图</a>\n          </div>\n          ', null != a.unit.promotionLink && (n += '\n           <div class="events-cont">\n              <a href="', n += o(a.unit.promotionLink.navigateUrl), n += '" target="_blank" class="btn-link">', n += o(a.unit.promotionLink.text), n += "</a>\n           </div>\n           "), n += '\n          <div class="hotel-advan-tag">\n          <ul class="clearfix">\n            ', s(a.unit.specialAdvantage, function (t, e) {
                n += '\n                <li title="', n += o(t.iconName), n += '" class="icon-bed">\n                   <i class="icon iconfont">&#x', n += o(t.iconCode), n += "</i>\n                   ", null == t.tips && (n += '\n                   <span id="isDecoration">', n += o(t.iconName), n += "</span>\n                   "), n += "\n                   ", null != t.tips && (n += '\n                   <span id="isDecoration" style="text-decoration: underline">', n += o(t.iconName), n += "</span>\n                   "), n += "\n                   ", null != t.tips ? (n += '\n                     <div class="m-tips-wrap">\n\n                        ', s(t.tips, function (t, e) {
                    n += "\n                            <span>", n += o(t), n += "</span>\n                        "
                }), n += '\n\n                        <div class="triangle-border tb-border"></div>\n                        <div class="triangle-border tb-background"></div>\n                    </div>\n                   ') : null == t.tips && (n += '\n                   <div class="m-tips-wrap" style="border: none">\n                        <span></span>\n                    </div>\n                   '), n += "\n                </li>\n            "
            }), n += '\n          </ul>\n        </div>\n      </div>\n\n       <div class="hotel-sidebar">\n        <div class="book-info ">\n\n\n          <div class="price-info">\n            <div class="room-price">\n              <p class="room-price-box">\n                ', 0 != c && (n += '\n                <span class="staring-price" id="present-price-box"><dfn>¥</dfn><a href="#date-cont-box" class="present-price"></a></span>\n                '), n += "\n                ", 0 == c && (n += '\n                <span class="reminder-message"><span class="iconfont null-icon">&#xe0b5</span>在你选择的日期内没有可用产品</span>\n                '), n += "\n                ", 1 == l && 0 != c && (n += '\n                <del class="t-return-money-del">\n                  <b class="number-box original-price" id="original-price"></b>\n                </del>\n                '), n += "\n                ", 2 == l && 0 != c && (n += '\n                <span class="t-return-money-del">\n                  <b class="number-box original-price" id="original-price"></b><b >返', n += o(d), n += "</b>\n                </span>\n                "), n += "\n\n              ", 1 == l ? (n += '\x3c!--预付全额（立减）开始--\x3e\n              <div class="price price-old">\n                <div id="price-tips">\n                  ', null != u && (n += "\n                  ", s(u, function (t, e) {
                n += '\n                  <span class="tips-content">\n                      ', 10 == t.promoSourceType && (n += ' \x3c!--会员立减--\x3e\n                       您是<span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>，享额外立减", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 20 == t.promoSourceType && (n += ' \x3c!--促销立减--\x3e\n                       <span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>立减", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 30 == t.promoSourceType && (n += ' \x3c!--红包立减--\x3e\n                       您有可用<span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>，享额外立减", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 80 == t.promoSourceType && (n += ' \x3c!--钻石卡立减--\x3e\n                      <span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>额外立减", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                    </span>\n                  "
            }), n += "\n\n                  ", u.length > 1 && (n += "\n                  合计立减", n += o(d), n += "元\n                  "), n += "\n                  "), n += '\n                  <div class="triangle-border tb-border"></div>\n                  <div class="triangle-border tb-background"></div>\n                </div>\n              </div> \x3c!--预付全额（立减）结束--\x3e\n              ') : 2 == l && (n += '\n              <div class="price price-old">\x3c!--0订金付款（返现）开始--\x3e\n              ', null != u && (n += "\n                ", 1 == u.length ? (n += '\x3c!--返现数组长度为1展示返现细节开始--\x3e\n                <div id="price-tips">\n                  <h2>返现说明</h2>\n                  ', s(u, function (t, e) {
                n += '\n                  <span class="tips-content">\n                    1）\n                      ', 10 == t.promoSourceType && (n += ' \x3c!--会员返现--\x3e\n                       您是<span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>，享额外返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 20 == t.promoSourceType && (n += ' \x3c!--促销返现--\x3e\n                       <span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 30 == t.promoSourceType && (n += ' \x3c!--红包返现--\x3e\n                       您有可用<span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>，享额外返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 80 == t.promoSourceType && (n += ' \x3c!--钻石卡返现--\x3e\n                      <span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>额外返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                    </span>\n                  "
            }), n += '\n                  <span class="tips-info">2）入住完成并经过途家的确认后，返还的现金将在7个工作日内充值到您的途家账户中，可以提现，提现金额不得低于100元人民币，也可用于下次预订。</span>\n                  <div class="line-box"></div>\n                  <h2>提现说明</h2>\n                  <span class="tips-info">\n                    在“我的途家”的“账户余额”中可以查看到返现金额并进行提现，支持支付宝和银行卡2种方式，您设置好正确的账号信息后，就可以做提现申请。途家在收到提现申请后进行审核，审核通过后3-7个工作日将现金打入到您的提现账号里。\n                  </span>\n                </div> \x3c!--返现数组长度为1展示返现细节结束--\x3e\n                ') : (n += '\n                <div id="price-tips">\x3c!--返现数组长度展示大于1开始--\x3e\n                  ', s(u, function (t, e) {
                n += '\n                  <span class="tips-content">\n                      ', 10 == t.promoSourceType && (n += ' \x3c!--会员返现--\x3e\n                       您是<span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>，享额外返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 20 == t.promoSourceType && (n += ' \x3c!--促销返现--\x3e\n                       <span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 30 == t.promoSourceType && (n += ' \x3c!--红包返现--\x3e\n                       您有可用<span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>，享额外返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                      ", 80 == t.promoSourceType && (n += ' \x3c!--钻石卡返现--\x3e\n                      <span class="tips-name">', n += o(t.promoSourceTypeName), n += "</span>额外返现", n += o(t.reduceAmount), n += "元。\n                      "), n += "\n                    </span>\n                  "
            }), n += "\n                  ", u.length > 1 && (n += "\n                  合计立减", n += o(d), n += "元\n                  "), n += '\n                  <div class="triangle-border tb-border"></div>\n                  <div class="triangle-border tb-background"></div>\n                </div>\x3c!--返现数组长度大于1结束--\x3e\n                '), n += "\n              "), n += "\n              </div>\x3c!--0订金付款（返现）结束--\x3e\n\n              "), n += '\n\n              </p>\n\n              <ul class="pay-tag">\n\n               ', s(r, function (t, e) {
                n += "\n                 ", 5 != t.unitTagType && 6 != t.unitTagType && 8 != t.unitTagType || (n += '\n                    <li class="tagsLi tagsLi-style', n += o(e), n += '"><span>', n += o(r[e].text), n += '</span>\n                     <div class="introducion">\n                       <span style="color: #333">', n += o(r[e].introducion), n += '</span>\n                       <div class="triangle-border tb-border"></div>\n                       <div class="triangle-border tb-background"></div>\n                     </div>\n                    </li>\n                  '), n += "\n               "
            }), n += "\n                \x3c!-- tag --\x3e\n              </ul>\n            </div>\n          </div>\n          ", p && (n += '\n          <div>\n            <span class="promotion-tips">', n += o(p), n += "</span>\n          </div>\n          "), n += '\n           <div class="comment-info">\n             ', null != a.commentSummary && a.commentSummary.totalCount && (n += '\n             <div class="rating-box" style="display:inline-block">\n\n                <span class="rating-span"><b class="hotel-value">', n += o(a.commentSummary.overallScore), n += '</b>/5分</span>\n                  <div class="m-tips-wrap-comments">\n                    <div class="tips-content comments-total">\n                      <h2>房屋综合评分</h2>\n                      <div class="results-wrap">\n                        <span class="visual-description-wrapper">\n                          <span class="score" id="score"></span>\n                        </span>\n                        <div class="results-comments">\n                          <span class="hotel-value">', n += o(a.commentSummary.overallScore), n += '</span>/5分\n                        </div>\n                      </div>\n                      <div class="comments-items">\n                        <ul>\n                          <li><span class="comments-items-name">整洁卫生：</span><span class="number-box color-blue">', n += o(a.commentSummary.hygieneScore), n += '</span>分</li>\n                          <li><span class="comments-items-name">交通位置：</span><span class="number-box color-blue">', n += o(a.commentSummary.trafficScore), n += '</span>分</li>\n                          <li class="border-none"><span class="comments-items-name">管理服务：</span><span class="number-box color-blue">', n += o(a.commentSummary.serviceScore), n += '</span>分</li>\n                          <li class="border-none"><span class="comments-items-name">设施装修：</span><span class="number-box color-blue">', n += o(a.commentSummary.decorationScore), n += '</span>分</li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div class="triangle-border tb-border"></div>\n                    <div class="triangle-border tb-background"></div>\n                  </div>\n\n               </div>\n                <a class="comments-area" href="#comment" id="comments"><span class="comments-count"> ', n += o(a.commentSummary.totalCount), n += "</span>条点评</a>\n                "), n += '\n                  <span class="exp-voucher">（发点评送福利<i class="icon-desc-text"></i>）</span>\n\n\n\n                  ', 1 == h && (n += '\n                   <div class="talent-experience-tag">\n                    <a href="#travel"><span>达人体验</span></a>\n                   </div>\n\n                  '), n += '\n\n\n               \x3c!--发放点评说明--\x3e\n                <div class="tips-content-wrap">\n\n                  <div class="tips-content">\n                    <h2>发点评送福利说明</h2>\n                    <div class="tips-info">\n                      <ol>\n                        <li>下单入住后60天内发表点评（字数为50字），审核通过后赠送300积分</li>\n                        <li>点评内容真实丰富（100字以上）并上传房屋相关实拍高质量图片（3张），将有机会评选为精华点评，加精点评将赠送200积分，赠送上传图片积分（每张50积分）</li>\n                        <li>同一账号对同一房屋的多条内容相似点评，如符合加精规则仅一条可评选为精华点评</li>\n                        <li>自订单已入住状态起，60天内可发表点评</li>\n                      </ol>\n                    </div>\n\n                  </div>\n\n                </div>\n              </div>\n\n                \x3c!--发放点评说明 结束--\x3e\n           </div>\n            \x3c!-- tag --\x3e\n\n\n\n\n\n\n         </div>\n       </div>\n\n\n\n    </div>\n  </div>\n\n\n'
        }
    }, "443": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = i.$escape, a = t.data;
            return n += '<div class="m-column-box">\n  \x3c!--title--\x3e\n  <div class="sidebar-hd-new"><h2>房东信息</h2></div>\n  \x3c!--title end--\x3e\n  \x3c!--content--\x3e\n  <div class="m-listing-cont">\n    <div class="hotel-info">\n      <div class="photo-cont">\n        <a target="_blank"  href="/fangdong/', n += e(a.landlordSummary.hotelId), n += '.htm"><img src="', n += e(a.landlordSummary.logoUrl), n += '" alt="" width="100" height="100" class="photo-img"></a>\n        ', a && a.landlordSummary && a.landlordSummary.isGreat && (n += '\n        <i class="icon icon-good-landlord"></i>\n        '), n += '\n      </div>\n      <h2 class="name-box">\n        <a target="_blank" class="listing-name"  href="/fangdong/', n += e(a.landlordSummary.hotelId), n += '.htm">', n += e(a.unit.hotelName), n += " </a>\n        ", a && a.landlordSummary && 8 == a.landlordSummary.businessType && a.landlordSummary.businessTypeName && (n += '\n          <span style="background: #f90">', n += e(a.landlordSummary && a.landlordSummary.businessTypeName), n += "</span>\n        "), n += "\n        ", 4 == a.landlordSummary.businessType && (n += '\n         <span style="background: #62c4a5">个人房东</span>\n        '), n += "\n        ", 2 == a.landlordSummary.businessType && (n += '\n         <span style="background: #9999cc">商户经营</span>\n        '), n += "\n        ", 1 == a.landlordSummary.businessType && (n += '\n         <span style="background: #f90">斯维登</span>\n        '), n += '\n      </h2>\n\n        <div class="shop-tag">\n        ', null != a.landlordSummary.zmCredit && (n += '\n          <p class="lab-box"><i class="icon-credit"></i>芝麻信用认证<span>', n += e(a.landlordSummary.zmCredit), n += "</span>分</p>\n        "), n += "\n        ", 1 == a.landlordSummary.verified && (n += '\n          <p class="lab-box"><i class="icon-verified"></i>实名认证</p>\n        '), n += '\n        </div>\n\n\n      <div class="shop-rate">\n         ', 0 != a.landlordSummary.chatType && (n += '\n          <p class="link-btn-cont"  ownerId="', n += e(a.landlordSummary.chatId), n += '" chatTeamId="', n += e(a.landlordSummary.chatTeamId), n += '" sessionType="', n += e(a.landlordSummary.chatSesstionType), n += '" ownerName="', n += e(a.landlordSummary.chatName), n += '" unitId="', n += e(a.unit.unitId), n += '" hotelId="', n += e(a.unit.hotelId), n += '">\n            ', 2 == a.landlordSummary.chatType && (n += '\n            <a href="javascript:;" ownerId="', n += e(a.landlordSummary.chatId), n += '" chatTeamId="', n += e(a.landlordSummary.chatTeamId), n += '" sessionType="', n += e(a.landlordSummary.chatSesstionType), n += '" ownerName="', n += e(a.landlordSummary.chatName), n += '" unitId="', n += e(a.unit.unitId), n += '" hotelId="', n += e(a.unit.hotelId), n += '" data="2" class="chat-btn">和房东聊天</a>\n            '), n += "\n            ", 1 == a.landlordSummary.chatType && (n += '\n            <a href="javascript:;" ownerId="', n += e(a.landlordSummary.chatId), n += '" chatTeamId="', n += e(a.landlordSummary.chatTeamId), n += '" sessionType="', n += e(a.landlordSummary.chatSesstionType), n += '" ownerName="', n += e(a.landlordSummary.chatName), n += '" unitId="', n += e(a.unit.unitId), n += '" hotelId="', n += e(a.unit.hotelId), n += '" data="1" class="chat-btn">在线聊天</a>\n            '), n += "\n          </p>\n         "), n += '\n        <p class="contact-info">联系电话：\n         ', a.landlordSummary.realTimeServiceHotlinePattern && (n += '\n          <span class="tel-box tel-btn" data-hotelid="', n += e(a.unit.hotelId), n += '" data-loginid="5845113" data-defaultphone="400-606-1230 转 87335" data-unitglobalid="33d75dfe-a21d-4ed2-a0b4-b725fe3e6e6a">点击获取临时号码</span>\n          '), n += "\n          ", a.landlordSummary.realTimeServiceHotlinePattern || (n += '\n          <span class="tel-box" data-hotelid="81099" data-loginid="5845113" data-defaultphone="400-606-1230 转 87335" data-unitglobalid="33d75dfe-a21d-4ed2-a0b4-b725fe3e6e6a" style="cursor: default;">', n += e(a.landlordSummary.serviceHotlineDescription), n += "</span>\n          "), n += "\n        </p>\n      </div>\n    </div>\n  </div>\n  \x3c!--content --\x3e\n</div>\n"
        }
    }, "444": function (t, n, e) {
        e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.unit;
            return n += '<div class="map-title-box">\n  <h2 class="map-title">\n      位置地图\n    </h2>\n</div>\n\n<div class="map-main">\n\n  <div id="baidu-map"\n    ', e && 2 == e.unitSourceType && (n += '\n      class="overseas"\n    '), n += '\n  ></div>\n  <div id="map-origin">\n    <i class="icon"></i>\n    <span>房屋位置</span>\n  </div>\n</div>\n', e && 1 == e.unitSourceType && (n += '\n<div class="map-around">\n  <ul class="facility-types">\n    <li  data-index="0">交通</li>\n    <li  data-index="1">餐饮</li>\n    <li  data-index="2">景点</li>\n    <li  data-index="3">购物</li>\n    <li  data-index="4">娱乐</li>\n  </ul>\n  <div id="map-result-container">\n    <div class="search-result">\n    </div>\n    <div class="route-result">\n    </div>\n    <div class="loading">\n      途途正在努力加载中...\n    </div>\n  </div>\n</div>\n'), n += "\n"
        }
    }, "445": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$escape, o = i.$each;
            t.step, t.index;
            return n += '<div class="route">\n  \x3c!-- 关闭导航 --\x3e\n  <span class="close-route">\n    X\n  </span>\n  \x3c!-- 出行方式 --\x3e\n  <div class="route-tab">\n    ', 1 == e.activeTripMode ? n += '\n    <span class="tab-item active" data-index="1">\n      <span>公交</span>\n    </span>\n    ' : n += '\n    <span class="tab-item" data-index="1">\n      <span>公交</span>\n    </span>\n    ', n += "\n    ", 2 == e.activeTripMode ? n += '\n    <span class="tab-item active" data-index="2">\n      <span>驾车</span>\n    </span>\n    ' : n += '\n    <span class="tab-item" data-index="2">\n      <span>驾车</span>\n    </span>\n    ', n += "\n    ", 3 == e.activeTripMode ? n += '\n    <span class="tab-item active" data-index="3">\n      <span>步行</span>\n    </span>\n    ' : n += '\n    <span class="tab-item" data-index="3">\n      <span>步行</span>\n    </span>\n    ', n += '\n  </div>\n  <div class="route-address">\n    <div class="route-start">\n      <i class="icon">起</i>\n      <span class="name">', n += a(e.startPlaceName), n += '</span>\n    </div>\n    <div class="route-end">\n      <i class="icon">终</i>\n      <span class="name">', n += a(e.endPlaceName), n += '</span>\n    </div>\n    <span class="switch">\n      <i class="icon"></i>\n    </span>\n  </div>\n  <div class="route-main">\n    ', e.existRoute ? (n += '\n      <div class="route-longness">\n        <span class="route-distance">\n          约', n += a(e.distance), n += '公里\n        </span>\n        <span class="route-time">\n          ', n += a(e.duration), n += '\n        </span>\n      </div>\n      <div class="route-content">\n        <div class="route-start">\n          <i class="icon">起</i>\n          ', n += a(e.startPlaceName), n += "\n        </div>\n        ", e.descriptionHTML.length > 0 ? (n += "\n        ", n += e.descriptionHTML, n += "\n        \x3c!-- 驾车或者步行导航 --\x3e\n        ") : (n += "\n        ", o(e.walkOrDriveSteps, function (t, e) {
                n += '\n        <div class="median-point">', n += a(t), n += "</div>\n        "
            }), n += "\n        "), n += '\n        <div class="route-end">\n          <i class="icon">终</i>\n          ', n += a(e.endPlaceName), n += "\n        </div>\n      </div>\n    ") : !1 === e.existRoute && (n += '\n      <div class="center">抱歉，暂无可行方案，建议选择其他交通方式前往。</div>\n    '), n += "\n  </div>\n</div>\n"
        }
    }, "446": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$each, o = (t.airport, t.index, i.$escape);
            t.trainstation, t.coachStation, t.subWayStation, t.place, t.value;
            return n += "\x3c!-- trafficStation数组中分别为： 0 机场 1 火车站 2 长途汽车站 3 地铁站  --\x3e\n  ", e && (n += '\n  <div class="place-list">\n    \x3c!-- fix bug: trafficStation必然为数组，默认为空数组 --\x3e\n    ', e.trafficStation.length && (n += "\n    ", e.trafficStation[0].length && (n += '\n    <div class="traffic-station">\n      机场\n    </div>\n    ', a(e.trafficStation[0], function (t, i) {
                n += '\n    <div class="place" data-lat="', n += o(t.lat), n += '" data-lng="', n += o(t.lng), n += '" title="', n += o(t.title), n += '">\n      <span class="place-num">', n += o(e.trafficNum++), n += '</span>\n      <span class="place-name">', n += o(t.title), n += "</span>\n    </div>\n    "
            }), n += "\n    "), n += "\n    ", e.trafficStation[1].length && (n += '\n    <div class="traffic-station">\n      火车站\n    </div>\n    ', a(e.trafficStation[1], function (t, i) {
                n += '\n    <div class="place" data-lat="', n += o(t.lat), n += '" data-lng="', n += o(t.lng), n += '" title="', n += o(t.title), n += '">\n      <span class="place-num">', n += o(e.trafficNum++), n += '</span>\n      <span class="place-name">', n += o(t.title), n += "</span>\n    </div>\n    "
            }), n += "\n    "), n += "\n    ", e.trafficStation[2].length && (n += '\n    <div class="traffic-station">\n      长途汽车站\n    </div>\n    ', a(e.trafficStation[2], function (t, i) {
                n += '\n    <div class="place" data-lat="', n += o(t.lat), n += '" data-lng="', n += o(t.lng), n += '" title="', n += o(t.title), n += '">\n      <span class="place-num">', n += o(e.trafficNum++), n += '</span>\n      <span class="place-name">', n += o(t.title), n += "</span>\n    </div>\n    "
            }), n += "\n    "), n += "\n    ", e.trafficStation[3].length && (n += '\n    <div class="traffic-station">\n      地铁站\n    </div>\n    ', a(e.trafficStation[3], function (t, i) {
                n += '\n    <div class="place" data-lat="', n += o(t.lat), n += '" data-lng="', n += o(t.lng), n += '" title="', n += o(t.title), n += '">\n      <span class="place-num">', n += o(e.trafficNum++), n += '</span>\n      <span class="place-name">', n += o(t.title), n += "</span>\n    </div>\n    "
            }), n += "\n    "), n += "\n    "), n += "\n    ", e.otherFacility && e.otherFacility.length > 0 && (n += "\n    ", a(e.otherFacility, function (t, i) {
                n += '\n    <div class="place" data-lat="', n += o(t.lat), n += '" data-lng="', n += o(t.lng), n += '" title="', n += o(t.title), n += '">\n      <span class="place-num">', n += o(e.trafficNum++), n += '</span>\n      <span class="place-name">', n += o(t.title), n += "</span>\n    </div>\n    "
            }), n += "\n    "), n += "\n  </div>\n  ", e.pagination.length && (n += '\n  <div class="pagination">\n    \x3c!-- 页码 --\x3e\n    ', 1 != e.activePageIndex && (n += '\n    <span class="page-item prev" data-index="prev">\n      上一页\n    </span>\n    '), n += "\n    ", a(e.pagination, function (t, i) {
                n += "\n    ", e.activePageIndex == i + 1 ? (n += '\n    <span class="page-item active" data-index="', n += o(i + 1), n += '">', n += o(t), n += "</span>\n    ") : e.activePageIndex != i + 1 && (n += '\n    <span class="page-item" data-index="', n += o(i + 1), n += '">', n += o(t), n += "</span>\n    "), n += "\n    "
            }), n += "\n    ", e.activePageIndex < e.pagination.length && (n += '\n    <span class="page-item next" data-index="next">\n      下一页\n    </span>\n    '), n += "\n  "), n += "\n  </div>\n  "), n += "\n"
        }
    }, "447": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$escape, o = i.$each;
            t.house, t.index;
            return e.hotelUnitsData && e.hotelUnitsData.totalCount && (n += '\n<div class="landlord-other-house">\n  <h2 class="recommended-title">\n    房东其他房屋\n    (<span>', n += a(e.hotelUnitsData.totalCount), n += '</span>)\n  </h2>\n  <ul class="recommended-house-list">\n    ', o(e.hotelUnitsData.hotelUnits, function (t, e) {
                n += "\n    ", e < 3 && (n += '\n    <li>\n      <a href="', n += a(t.unitDetailLink), n += '" >\n        <img src="', n += a(t.pictureURL), n += '" class="house-pic">\n      </a>\n      <div class="house-desc">\n        <a class="title" href="', n += a(t.unitDetailLink), n += '" data-id="', n += a(t.unitId), n += '">', n += a(t.unitName), n += '</a>\n        <div class="house-detail">\n          <span>', n += a(t.unitBriefInfo), n += '</span>\n        </div>\n        <span class="price">\n            ', t.finalPrice > 0 ? (n += '\n            <span class="price-symbol">￥</span>\n            <span class="price-num">', n += a(t.finalPrice), n += "</span>\n            ") : t.finalPrice <= 0 && (n += '\n            <span class="no-price">暂无报价</span>\n            '), n += "\n        </span>\n      </div>\n    </li>\n    "), n += "\n    "
            }), n += "\n    ", e.hotelUnitsData.hotelUnits.length > 3 && (n += '\n      <p class="landlord-page">\n        <a href="', n += a(e.hotelUrl), n += '">查看更多>></a>\n      </p>\n    '), n += "\n  </ul>\n\n</div>\n"), n += "\n", e.similarUnitsData && (n += '\n<div class="recommended-house-around">\n  <h2 class="recommended-title">\n    周边推荐房屋\n  </h2>\n  <ul class="recommended-house-list">\n    ', o(e.similarUnitsData.similarUnits, function (t, e) {
                n += "\n    <li>\n      ", t.pictureURL && (n += '<a href="', n += a(t.unitDetailLink), n += '">'), n += '\n        <img src="', n += a(t.pictureURL), n += '" class="house-pic">\n      </a>\n      <div class="house-desc">\n        <a class="title" href="', n += a(t.unitDetailLink), n += '" data-id="', n += a(t.unitId), n += '">', n += a(t.unitName), n += '</a>\n        <div class="house-detail">\n          <span>', n += a(t.unitBriefInfo), n += '</span>\n        </div>\n        <span class="price">\n          ', t.finalPrice > 0 ? (n += '\n          <span class="price-symbol">￥</span>\n          <span class="price-num">', n += a(t.finalPrice), n += "</span>\n          ") : t.finalPrice <= 0 && (n += '\n          <span class="no-price">暂无报价</span>\n          '), n += "\n        </span>\n      </div>\n    </li>\n    "
            }), n += "\n\n  </ul>\n</div>\n"), n += '\n<div class="assured">\n  <i class="icon"></i>\n  <div class="desc">\n    <h4>\n      1000万保障金 到店无房额外赔偿\n    </h4>\n    <span>房屋描述失真、到店无房、房东加价全部退订金并补偿</span>\n  </div>\n</div>\n'
        }
    }, "448": function (t, n, e) {
        var i = e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", e = t.data, a = i.$escape;
            return e && e[0] && "false" == e[0].IsLandlordStory && (n += '\n<div class="travel-notes" id="travel">\n  <div class="photo-box">\n    <a href="', n += a(e[0].AbsoluteArticleUrl), n += '" target="_blank">\n    <img src="', n += a(e[0].AbsoluteDefaultPicture), n += '" width="220" height="145"></a>\n   </div>\n  <div class="notes-info">\n    <div class="hd-box ">\n      <img src="', n += a(e[0].AbsoluteAuthorAvatar), n += '" class="user-picture" width="60" height="60">\n      <div class="hd-info">\n        <a href="', n += a(e[0].AbsoluteArticleUrl), n += '" target="_blank">', n += a(e[0].Title), n += "</a>\n        <p><span>旅游达人：", n += a(e[0].AuthorName), n += '</span><i class="icon-travel">达人体验</i></p>\n      </div>\n    </div>\n    <div class="notes-box">\n      <span>', n += a(e[0].Summary), n += '</span>\n      <p class="link-box"><a href="', n += a(e[0].AbsoluteArticleUrl), n += '" target="_blank">查看全文</a></p>\n    </div>\n  </div>\n</div>\n'), n += "\n"
        }
    }, "449": function (t, n, e) {
        e(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="share-cont">\n  <a class="a-btn" target="_blank" id="top-share-weibo" href="javascript:void(0)">\n    <i class="icon-sina"></i>分享到微博</a>\n  <a class="a-btn" href="javascript:void(0);" id="top-share-weixin">\n    <i class="icon-wixin"></i>分享到微信</a>\n  <a class="add-favorite a-btn last-btn" id="favorite" unitid="" href="javascript:void(0);">\n    <i class="icon-chevron"></i>\n    <span class="text">收藏</span>\n  </a>\n</div>\n'
        }
    }, "45": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0});
        var i = e(44), a = e(5), o = getUTM();
        o && i["a"].appdownloadUpdate({
            "callback": function (t, n, e) {
                console.log("pc download update success", t)
            }
        }), window.getQRURL = function () {
            return o ? "https://m.tujia.com/nosearch/pr_downapp?link=sempchome&pcgid=" + e.i(a["a"])() : void 0
        }, window.createQRcodeInFooter = function () {
            var t = getQRURL();
            t && $(".u-icon-app-down").length && ($(".u-icon-app-down").html(""), QRCode.wechatQr = new QRCode(document.getElementsByClassName("u-icon-app-down")[0], {
                "width": 98,
                "height": 98
            }), QRCode.wechatQr.makeCode(t))
        }, window.createQRcodeInFooter && window.createQRcodeInFooter()
    }, "46": function (t, n) {
        function e() {
            if (window.tjGlobal) return window.tjGlobal.tujia_utm
        }

        function i() {
            if (window.tjGlobal) return window.tjGlobal.tujia_code
        }

        function a(t) {
            var n = e() ? e() : "", a = i() ? i() : "", s = o + "?utm_source=" + n + "&code=" + a + "&position=" + t;
            return console.log("baseUrl", s), s
        }

        var o = "https://pwa.tujia.com/wxfrontpage";
        $("#toolBar-qc").bind("mouseover", function () {
            console.log("#toolBar-qc mouseover"), $(".sprite_toolBar_wechat > canvas").length || (QRCode.wechatQr = new QRCode(document.getElementsByClassName("sprite_toolBar_wechat")[0], {
                "text": a("PC_FW"),
                "width": 140,
                "height": 140
            }))
        }), function (t) {
            var n = a(t);
            n && ($(".u-icon-wechat-down").css({
                "background-image": "none",
                "background-position": "0% 0%",
                "padding": "7px",
                "background-color": "#FFF"
            }), QRCode.wechatQr = new QRCode(document.getElementsByClassName("u-icon-wechat-down")[0], {
                "text": n,
                "width": 98,
                "height": 98
            }))
        }("PC_FP")
    }, "47": function (t, n) {
    }, "48": function (t, n) {
    }, "485": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0});
        var i = e(23), a = e(98), o = e(249), s = (e.n(o), e(35)), r = e(59);
        e(80);
        var c = (e(9), e(137).renderFenxiUnitDetail), l = e(56), d = l.enableSSRData, u = l.grabSSRData,
            p = l.grabSSRParam, h = e(365), f = h.setFlag, m = h.setFutureCall, v = h.FLAG_TALENT, g = h.FLAG_PRICE,
            b = e(252), y = b.isPreviewVisiting, w = b.getPreviewGUID, T = !1;
        "ctrip" === (0, e(3).getCookie)("Partner_PartnerStyle") && ($("body").attr("id", "ctrip-style"), e(409), $("body").prepend("<div id='header'></div>"), $("body").append("<div id='footer'></div>"), $("body").append("<div id='myjs'></div>"), $("#tujia_page_navbar").hide(), $(".g-footer").remove(), T = !0, window.globalConfig = {
            "BusinessType": "tujia",
            "Environment": "other",
            "LoginType": "notload",
            "NeedNav": "T"
        }, r["default"].dynamicAddScript("https://webresource.c-ctrip.com/ResCRMOnline/R1/pageheader/js/IntegratedJS.js")), e(97), e(188), e(188);
        var _ = e(89), I = e(366)["default"], S = e(367), x = e(375)["default"], C = e(374);
        e(376).initRender(), e(372).initRender(function (t) {
            f(v), t && (I.setTalentExperience(t), x.setTalentExperience(t))
        }), e(368).initRender();
        var A = (x.setPrice(), e(370));
        A.initRender(function (t, n, e, i, a, o, s) {
            x.setPrice(t, o, s), I.setPrice(t, n, e, i, a), f(g)
        });
        var j = e(363), P = e(373), D = e(369), k = e(371), O = e(364), U = (e(341), s["a"].queryString("unitId"));
        U || (U = p("unitId"));
        var R = "true" === s["a"].queryString("isCallCenter");
        R && $("body").addClass("call-center-page"), T = !(!T && 1 != R), i["a"].initPage(function (t, n, e) {
        }, !1, T, T);
        var M = function (t, n, e) {
            if (i["a"].initStatisticsFun(), t) {
                if (tjGlobal.userInfo && tjGlobal.userInfo.userId && _.saveRecentAccessUnit(tjGlobal.userInfo.userId, U), window.tjGlobal.unitTagBadges = n.unit.unitTags, $(".page-loading").hide(), n) {
                    var o = A.getDays();
                    a["default"].setUnitDetailPage(!1, n.unit.cityName, o, n.landlordSummary.businessTypeName, 2 == n.unit.unitSourceType, n.unit.houseTypeName, n.landlordSummary.ownerName ? n.landlordSummary.ownerName : ""), x.initRender(n, function (t) {
                        A.getPromotion(t)
                    }), C.initRender(n), S.initRender(n), I.initRender(n), O.initRender(n, U), j["default"].initRender(n), P.initRender(n), D["default"].initRender(n), n && n.unit && n.unit.hotelId && n.unit.unitId && _.getRecommendedHouse(n.unit.hotelId, n.unit.unitId, n.landlordSummary && n.landlordSummary.keeperId || 0, function (t, e, i) {
                        t && k.initRender(e, n.unit.hotelUrl)
                    }), c(n.unit.unitId)
                }
            } else if (e.errorNo > 0 || -1 == e.errorNo) {
                var s = {
                    "title": "提示",
                    "content": "很抱歉，该房屋已经下架暂时无法预订",
                    "cancel": "",
                    "mask": !0,
                    "callback": function (t) {
                        if (1 == t) {
                            if (R) return void (window.location.href = "/unitlist?&isCallCenter=true&ssr=off");
                            window.location.replace("/")
                        }
                    }
                };
                window.tjAlert(s)
            }
        };
        d() ? m(function () {
            var t = u();
            M(t.ret, t.data, {"errorNo": t.errcode, "errorMsg": t.errmsg})
        }) : ($(".page-loading").show(), y() ? _.getUnitPreview(w(), M) : m(function () {
            _.getUnit(U, M)
        })), e(13).initIndex(0), e(111), $(".g-footer .g-user-helper").css("display", "none")
    }, "49": function (t, n) {
    }, "50": function (t, n, e) {
        "use strict";
        var i = e(3).setCookie, a = function (t) {
            if ("undefined" == typeof localStorage) return NaN;
            var n = localStorage.getItem(t);
            return void 0 !== n && null != n ? parseInt(n) : NaN
        };
        n.storeCalendarSlop = function (t, n) {
            if ("undefined" != typeof localStorage) {
                localStorage.setItem("__search_cal_start_slop", t), localStorage.setItem("__search_cal_end_slop", n);
                var e = new Date(t).getFullYear() + "-" + (new Date(t).getMonth() + 1) + "-" + new Date(t).getDate(),
                    a = new Date(n).getFullYear() + "-" + (new Date(n).getMonth() + 1) + "-" + new Date(n).getDate();
                i("tujia.com_PortalContext_StartDate", e, 1, ".tujia.com"), i("tujia.com_PortalContext_EndDate", a, 1, ".tujia.com")
            }
        }, n.restoreCalendarSlop = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                n = a("__search_cal_start_slop"), e = a("__search_cal_end_slop");
            if (isNaN(n) || isNaN(e)) return null;
            var i = new Date, o = void 0;
            return i.setHours(0) && i.setMinutes(0) && i.setSeconds(0) && i.setMilliseconds(0), o = t ? i.getTime() : i.getTime() - 864e5, o > n || o > e ? null : [n, e]
        }
    }, "513": function (t, n) {
    }, "514": function (t, n) {
    }, "515": function (t, n) {
    }, "516": function (t, n) {
    }, "517": function (t, n) {
    }, "518": function (t, n) {
    }, "519": function (t, n) {
    }, "520": function (t, n) {
    }, "521": function (t, n) {
    }, "522": function (t, n) {
    }, "523": function (t, n) {
    }, "524": function (t, n) {
    }, "525": function (t, n) {
    }, "54": function (t, n, e) {
        "use strict";

        function i() {
            r.call(this)
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "TJRequestV2", function () {
            return i
        });
        var a = e(101), o = e.n(a), s = e(24), r = e(34)["default"];
        i.prototype = o()(r.prototype), i.prototype.callbackHandle = function (t, n, e, i) {
            t ? n.ret ? i && i(!0, n.data) : (s["a"].ipMonitor(n), i && i(!1, null, {
                "errorNo": n.errcode,
                "errorMsg": n.errmsg
            })) : i && i(t, null, e)
        }
    }, "56": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "hasSSRView", function () {
            return i
        }), e.d(n, "enableSSRData", function () {
            return a
        }), e.d(n, "grabSSRData", function () {
            return o
        }), e.d(n, "grabSSRParams", function () {
            return s
        }), e.d(n, "grabSSRParam", function () {
            return r
        }), e.d(n, "grabSSRCondFilter", function () {
            return c
        }), e.d(n, "isCommentWithAlias", function () {
            return d
        });
        var i = function (t) {
            return !!a() && $(t).find("[data-ssr]").length > 0
        }, a = function () {
            return void 0 !== window.ssr_conf && null != window.ssr_conf
        }, o = function (t) {
            return window.ssr_conf
        }, s = function () {
            return window.ssr_conf_params
        }, r = function (t, n) {
            var e = s() || {}, i = null;
            return (i = e[t]) ? i[0] : n || null
        }, c = function () {
            return window.ssr_condition_filters
        }, l = /\/comment\/[a-zA-Z]+[0-9]*(?:-([a-zA-Z]+[0-9]+)+)*\/((?:[a-zA-Z]+\/)*\d+\/)*/gi, d = function (t) {
            return l.lastIndex = 0, l.test(t)
        }
    }, "70": function (t, n, e) {
        "use strict";

        function i(t, n, e) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            f.postRequest(t + document.location.search, n, function (t, n, a) {
                t ? o(n.commonData, i) : a && 301 === a.errorNo && (window.location.href = a.errorMsg), n.commonData && (window.tujiaUserInfo = n.commonData.uInfo, window.tujiaTnsConf = n.commonData.tns, l.updateLoginInfo(t ? n.commonData.uInfo : {})), e(t, t ? n.data : null, a, function () {
                    r["a"].init()
                })
            })
        }

        function a(t, n, e) {
            v.postRequest(t + document.location.search, n, function (t, n, i) {
                window.commonConfigs = n, e(t, t ? n : null, i, function () {
                })
            })
        }

        function o(t, n) {
            setTimeout(function () {
                t.popupAdvertisement && u.initPopupAds(t.popupAdvertisement), n || u.initBottomAds();
                var e = $("#tujia_page_navbar");
                p.init({
                    "qimoClientInfo": {"nickName": t.uInfo.mobile, "userId": t.uInfo.userID || "-544208800"},
                    "imConfig": {
                        "imVersion": t.config.imVersion,
                        "serverDomain": t.config.serverDomain,
                        "orderNoticeRadio": t.config.orderNoticeRadio,
                        "tujiaClientId": t.config.tujiaClientId,
                        "portalUrl": e.data("tujia-host"),
                        "apiUrl": e.data("api-tujia-host"),
                        "vipUrl": e.data("vip-tujia-host"),
                        "imUrl": e.data("im-tujia-host"),
                        "imJsUrl": t.config.imURL
                    }
                }), s("//webchat.7moor.com/javascripts/7moorInit.js?accessId=797098a0-b29d-11e5-b3b1-49764155fe50&autoShow=false")
            }, 50)
        }

        function s(t) {
            var n = document.createElement("script");
            n.async = 1, n.setAttribute("src", t), document.body.appendChild(n)
        }

        Object.defineProperty(n, "__esModule", {"value": !0});
        var r = e(72), c = e(139);
        e(11), e(12);
        var l = e(13), d = $("#tujia_page_navbar");
        d.data("cnd-static");
        e(36), e(41), e(38), e(39);
        var u = e(37), p = e(40), h = e(143).TJPageRequest, f = new h, m = e(8).TJRequestV2, v = new m;
        e.i(c["a"])(), e.i(c["b"])(), n["default"] = {"initPage": i, "initCommonConfigs": a}
    }, "73": function (t, n, e) {
        "use strict";
        var i = function (t) {
            this.$pane = null, this._opts = t || {}, this._shown = !1
        };
        i.prototype = {
            "show": function (t) {
                this._shown || (this.$pane && this.$pane.show(), this._shown = !0, !0 !== t && (this.dispatchVisibilityChange(!0), this.onVisibilityChange(!0)))
            }, "dispatchVisibilityChange": function (t) {
            }, "isShown": function () {
                return this._shown
            }, "onVisibilityChange": function (t) {
            }, "hide": function (t) {
                this._shown && (this.$pane && this.$pane.hide(), this._shown = !1, !0 !== t && (this.dispatchVisibilityChange(!1), this.onVisibilityChange(!1)))
            }, "hideEvent": function () {
                this.$pane.click(function (t) {
                    return t.preventDefault(), t.stopPropagation(), !1
                })
            }, "align": function () {
                var t = this._opts.anchor, n = $(t).offset(), e = this._opts.parent, i = n.left;
                if (e) {
                    i -= $(e).offset().left
                }
                this.$pane.css({"left": i})
            }
        }, n.Dialog = i
    }, "8": function (t, n, e) {
        "use strict";

        function i() {
            o.call(this)
        }

        Object.defineProperty(n, "__esModule", {"value": !0}), e.d(n, "TJRequestV2", function () {
            return i
        });
        var a = e(24), o = e(34)["default"];
        i.prototype = Object(o.prototype), i.prototype.callbackHandle = function (t, n, e, i) {
            t ? n.ret ? i && i(!0, n.data) : (a["a"].ipMonitor(n), i && i(!1, null, {
                "errorNo": n.errCode,
                "errorMsg": n.errmsg
            })) : i && i(t, null, e)
        }
    }, "80": function (t, n) {
        !function (t, n, e, i) {
            var a = t(n);
            t.fn.lazyload = function (o) {
                function s() {
                    var n = 0;
                    c.each(function () {
                        var e = t(this);
                        if (!l.skip_invisible || e.is(":visible")) if (t.abovethetop(this, l) || t.leftofbegin(this, l)) ; else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
                            if (++n > l.failure_limit) return !1
                        } else e.trigger("appear"), n = 0
                    })
                }

                var r, c = this, l = {
                    "threshold": 0,
                    "failure_limit": 0,
                    "event": "scroll.lazyload",
                    "effect": "show",
                    "container": n,
                    "data_attribute": "original",
                    "skip_invisible": !0,
                    "appear": null,
                    "load": null,
                    "placeholder": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
                return o && (i !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), i !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), t.extend(l, o)), r = l.container === i || l.container === n ? a : t(l.container), 0 === l.event.indexOf("scroll") && r.bind(l.event, function () {
                    return s()
                }), this.each(function () {
                    var n = this, e = t(n);
                    n.loaded = !1, (e.attr("src") === i || !1 === e.attr("src")) && e.is("img") && e.attr("src", l.placeholder), e.one("appear", function () {
                        if (!this.loaded) {
                            if (l.appear) {
                                var i = c.length;
                                l.appear.call(n, i, l)
                            }
                            t("<img />").bind("load", function () {
                                var i = e.attr("data-" + l.data_attribute);
                                e.hide(), e.is("img") ? e.attr("src", i) : e.css("background-image", "url('" + i + "')"), e[l.effect](l.effect_speed), n.loaded = !0;
                                var a = t.grep(c, function (t) {
                                    return !t.loaded
                                });
                                if (c = t(a), l.load) {
                                    var o = c.length;
                                    l.load.call(n, o, l)
                                }
                            }).attr("src", e.attr("data-" + l.data_attribute))
                        }
                    }), 0 !== l.event.indexOf("scroll") && e.bind(l.event, function () {
                        n.loaded || e.trigger("appear")
                    })
                }), a.bind("resize", function () {
                    s()
                }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow", function (n) {
                    n.originalEvent && n.originalEvent.persisted && c.each(function () {
                        t(this).trigger("appear")
                    })
                }), t(e).ready(function () {
                    s()
                }), this
            }, t.belowthefold = function (e, o) {
                return (o.container === i || o.container === n ? (n.innerHeight ? n.innerHeight : a.height()) + a.scrollTop() : t(o.container).offset().top + t(o.container).height()) <= t(e).offset().top - o.threshold
            }, t.rightoffold = function (e, o) {
                return (o.container === i || o.container === n ? a.width() + a.scrollLeft() : t(o.container).offset().left + t(o.container).width()) <= t(e).offset().left - o.threshold
            }, t.abovethetop = function (e, o) {
                return (o.container === i || o.container === n ? a.scrollTop() : t(o.container).offset().top) >= t(e).offset().top + o.threshold + t(e).height()
            }, t.leftofbegin = function (e, o) {
                return (o.container === i || o.container === n ? a.scrollLeft() : t(o.container).offset().left) >= t(e).offset().left + o.threshold + t(e).width()
            }, t.inviewport = function (n, e) {
                return !(t.rightoffold(n, e) || t.leftofbegin(n, e) || t.belowthefold(n, e) || t.abovethetop(n, e))
            }, t.extend(t.expr[":"], {
                "below-the-fold": function (n) {
                    return t.belowthefold(n, {"threshold": 0})
                }, "above-the-top": function (n) {
                    return !t.belowthefold(n, {"threshold": 0})
                }, "right-of-screen": function (n) {
                    return t.rightoffold(n, {"threshold": 0})
                }, "left-of-screen": function (n) {
                    return !t.rightoffold(n, {"threshold": 0})
                }, "in-viewport": function (n) {
                    return t.inviewport(n, {"threshold": 0})
                }, "above-the-fold": function (n) {
                    return !t.belowthefold(n, {"threshold": 0})
                }, "right-of-fold": function (n) {
                    return t.rightoffold(n, {"threshold": 0})
                }, "left-of-fold": function (n) {
                    return !t.rightoffold(n, {"threshold": 0})
                }
            })
        }(jQuery, window, document)
    }, "81": function (t, n, e) {
        "use strict";

        function i(t) {
            if (t instanceof Date) return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
        }

        var a = e(3).parseQueryString, o = e(50).restoreCalendarSlop, s = function (t) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], e = a(), s = e["startDate"],
                r = e["endDate"], c = t.slice(0), l = o(n);
            if (null != l && (c = l), void 0 !== s && void 0 !== s) {
                var d = Date.parse(i(new Date(s))), u = Date.parse(i(new Date(r))), p = new Date, h = void 0;
                i(h), h = n ? p.getTime() : p.getTime() - 864e5, u >= d && d < h && (d = h), !isNaN(d) && !isNaN(u) && d >= h && u >= h && u > d && (c = [d, u])
            }
            return c
        }, r = function () {
            return a().cds || ""
        };
        n.resolveCalendarTimeSlop = s, n.resolveConditionType = r
    }, "818": function (t, n, e) {
        t.exports = e.p + "static/img/detail-Boutique.19c890f.png"
    }, "819": function (t, n, e) {
        t.exports = e.p + "static/img/detail-comfort.94d43ff.png"
    }, "820": function (t, n, e) {
        t.exports = e.p + "static/img/detail-luxury.86b7ac8.png"
    }, "89": function (t, n, e) {
        var i, a = e(54).TJRequestV2, o = "/internal/api/json?file=", s = (i = {
                "pageConfig": o + "pageconfig",
                "page": "/bingo/pc/unit",
                "getProducts1": "/bingo/pc/product/getProducts",
                "getProducts": o + "getProducts",
                "getProductCalendar": "/bingo/pc/product/getProductCalendar",
                "getUnitCalendar": "/bingo/pc/unit/getUnitCalendar",
                "getUnit": "/bingo/pc/unit/getUnit",
                "landlordInfo": o + "landlordInfo",
                "carousel": o + "carousel",
                "recommendedHouse": "/bingo/pc/unit/getOtherUnits",
                "comment": o + "comment",
                "searchUnitComments": "/bingo/pc/comment/searchUnitComments",
                "getUnit3": o + "getUnit_3"
            }, i["pageConfig"] = o + "pageconfig", i["page"] = "/api/pchome/homepage", i.saveRecentAccessUnit = "/bingo/pc/unit/saveRecentAccessUnit", i.preview = "/bingo/pc/unit/getUnitForPreview", i),
            r = new a;
        n.getUnitPreview = function (t, n) {
            r.postRequest(s.preview, {"unitGuid": t}, n)
        }, n.getPageConfig = function (t, n, e) {
            r.postRequest(s.pageConfig, {"userId": t, "userToken": n}, e)
        }, n.getUnit = function (t, n) {
            r.postRequest(s.getUnit, {"unitId": t}, n)
        }, n.getProducts1 = function (t, n, e, i, a, o) {
            r.postRequest(s.getProducts1, {
                "checkInDate": t,
                "checkOutDate": n,
                "unitId": e,
                "activityInfo": i,
                "callCenter": a
            }, o)
        }, n.getProducts = function (t) {
            r.postRequest(s.getProducts, null, t)
        }, n.getProductCalendar = function (t, n, e) {
            r.postRequest(s.getProductCalendar, {"productId": t, "unitId": n}, e)
        }, n.getUnitCalendar = function (t, n) {
            r.postRequest(s.getUnitCalendar, {"unitId": t}, n)
        }, n.getUnit2 = function (t, n) {
            r.postRequest(s.getUnit2, {"unitId": t}, n)
        }, n.getCarousel = function (t, n) {
            r.postRequest(s.carousel, {"unitId": t}, n)
        }, n.getRecommendedHouse = function (t, n, e, i) {
            r.postRequest(s.recommendedHouse, {"hotelId": t, "unitId": n, "keeperId": e}, i)
        }, n.getComment = function (t, n, e, i, a) {
            r.postRequest(s.comment, {"hasPic": t, "pageIndex": n, "pageSize": e, "unitId": i}, a)
        }, n.getSearchUnitComments = function (t, n) {
            r.postRequest(s.searchUnitComments, t, n)
        }, n.getUnit3 = function (t, n) {
            r.postRequest(s.getUnit3, {"unitId": t}, n)
        }, n.saveRecentAccessUnit = function (t, n) {
            r.postRequest(s.saveRecentAccessUnit, {"userId": t, "unitId": n})
        }, n.apiConfig = s
    }, "9": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0});
        var i = e(15), a = (e(16), function (t) {
            var n = $.extend(!0, {}, t);
            void 0 === t.ensure && (n.ensure = "确认"), void 0 === t.cancel ? n.cancel = "取消" : "" === t.cancel && (n.cancel = void 0), void 0 === t.title ? n.title = "提示" : "" === t.title && (n.title = void 0), $(document.body).append(i({"config": n})), n.mask && $(document.body).append($('\n<div class="base-mask" style="position: fixed; top: 0px; left: 0px;  display: block; opacity: 0.8;\n    z-index: 99; background-color: #000; width:100%; height: 100%"></div>\n')), $(".base-alert")[0].addEventListener("click", function t(e) {
                $(e.target).hasClass("ensure") && (n.mask ? ($(".base-alert").remove(), $(".base-mask").remove()) : $(".base-alert").remove(), n.callback && n.callback(1), document.body.removeEventListener("click", t))
            }), $(".base-alert")[0].addEventListener("click", function t(e) {
                $(e.target).hasClass("cancel") && (n.mask ? ($(".base-alert").remove(), $(".base-mask").remove()) : $(".base-alert").remove(), n.callback && n.callback(2), document.body.removeEventListener("click", t))
            })
        });
        n["default"] = {"alert": a}
    }, "90": function (t, n, e) {
        "use strict";
        var i = e(100)["default"], a = e(25).CalUtil, o = e(25).CalView, s = function (t) {
            this._opts = t, this._baseMonth = null, this._$pane = null, this._selectPrepare = !1, this._renderMonth = null, this._selectionRange = []
        };
        s.prototype = {
            "setSelectionRange": function (t) {
                var n = t;
                if ($.isArray(n) && n[0] instanceof Date && n[1] instanceof Date) {
                    var e = a.getNow();
                    a.copyFrom(n[0], e), a.clearMSM(e);
                    var i = a.getNow();
                    a.copyFrom(n[1], i), a.clearMSM(i), this._selectionRange[0] = Math.min(e.getTime(), i.getTime()), this._selectionRange[1] = Math.max(e.getTime(), i.getTime())
                }
            }, "show": function () {
                this._$pane && this._$pane.show(), this._selectPrepare && this._callPrepare()
            }, "_callPrepare": function () {
                var t = this._opts.onRangeSelectionPrepare;
                i.log("call prepare selection"), $.isFunction(t) && t.call(t)
            }, "hide": function () {
                if (this._$pane && this._$pane.hide(), this._selectPrepare) {
                    var t = this._opts.onRangeSelectionCancel;
                    i.log("call cancel selection"), $.isFunction(t) && t.call(t)
                }
            }, "setBaseDay": function (t) {
                t instanceof Date && (this._baseMonth = t)
            }, "clearSelectionRange": function () {
                this._selectionRange.length = 0, this._step(0)
            }, "_install": function () {
                this._baseMonth = this._opts.month;
                var t = this._opts.disableDayAfter;
                this._opts.selectionDateRange && this.setSelectionRange(this._opts.selectionDateRange), this._baseMonth || (this._baseMonth = a.getNow());
                var n = a.getNow();
                a.copyFrom(this._baseMonth, n);
                var e = new o(n, {
                    "prevCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": t,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                }), i = a.getNow();
                a.copyFrom(this._baseMonth, i), i.setDate(1), i.setMonth(n.getMonth() + 1);
                var s = new o(i, {
                    "nextCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": t,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                });
                this._renderMonth = n;
                var r = this._asPane(e, s);
                this._$pane = r, this._opts.parent ? r.appendTo(this._opts.parent) : r.appendTo("body"), this._align(), this._ctrlOn(), this._cellOn(), this._ignoreClick()
            }, "_asPane": function (t, n) {
                return $('\n        <div class="t-layer t-layer-calendar clearfix">\n          ' + t.toHtml() + "\n          " + n.toHtml() + "\n        </div>\n    ")
            }, "_ignoreClick": function () {
                this._$pane.click(function (t) {
                    return t.preventDefault(), t.stopPropagation(), !1
                })
            }, "_cellOn": function () {
                var t = this;
                this._$pane.delegate("td", "click", function (n) {
                    n.preventDefault(), n.stopPropagation();
                    var e = $(n.target);
                    if (e.hasClass("disable") || e.hasClass("ep")) return !1;
                    var i = new Date(parseInt(e.data("ts")));
                    return a.clearMSM(i), t._rangeSelection(i, e.data("date-index")), !1
                })
            }, "_rangeSelection": function (t, n) {
                var e = this._selectionRange, i = t.getTime(), a = !1;
                0 == e.length ? e[0] = e[1] = i : e[0] == e[1] ? i < e[0] ? e[0] = e[1] = i : i > e[0] && (e[1] = i, a = !0) : e[0] = e[1] = i, this._step(0), a ? this._rangeConfirm(e) : this._rangeConfirmHint()
            }, "_rangeConfirmHint": function () {
                this._selectPrepare = !0, this._callPrepare()
            }, "_rangeConfirm": function (t) {
                var n = this._opts.onRangeSelection;
                if (this._selectPrepare = !1, $.isFunction(n)) {
                    !1 !== n.apply(n, t) && this.hide()
                }
            }, "_ctrlOn": function () {
                var t = this;
                this._$pane.delegate(".t-cal-ctrl", "click", function (n) {
                    return $(n.target).hasClass("t-cal-ctrl-next") ? t._step(2) : t._step(-2), n.preventDefault(), n.stopPropagation(), !1
                })
            }, "_step": function (t) {
                var n = this._opts.disableDayAfter, e = a.getNow();
                a.copyFrom(this._renderMonth, e), e.setDate(1), e.setMonth(e.getMonth() + t);
                var i = e, s = new o(i, {
                    "prevCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": n,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                }), r = a.getNow();
                a.copyFrom(i, r), r.setDate(1), r.setMonth(i.getMonth() + 1);
                var c = new o(r, {
                    "nextCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": n,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                });
                this._$pane.html(s.toHtml() + c.toHtml()), this._renderMonth = i
            }, "_align": function () {
                var t = this._opts.anchor, n = this._$pane;
                if (t) {
                    var e = $(t).offset(), i = e.left;
                    if (this._opts.parent) {
                        i -= $(this._opts.parent).offset().left
                    }
                    n.css({"left": i})
                }
            }, "setPosition": function (t, n) {
                var e = this._$pane;
                "number" == typeof t && e.css({"left": t}), "number" == typeof n && e.css({"top": n})
            }, "install": function () {
                this._install()
            }
        }, n.CalWidget = s
    }, "92": function (t, n) {
        var e = {
            "lunarInfo": [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560],
            "solarMonth": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            "nStr1": ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
            "nStr2": ["初", "十", "廿", "卅"],
            "nStr3": ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
            "lYearDays": function (t) {
                var n, i = 348;
                for (n = 32768; n > 8; n >>= 1) i += e.lunarInfo[t - 1900] & n ? 1 : 0;
                return i + e.leapDays(t)
            },
            "leapMonth": function (t) {
                return 15 & e.lunarInfo[t - 1900]
            },
            "leapDays": function (t) {
                return e.leapMonth(t) ? 65536 & e.lunarInfo[t - 1900] ? 30 : 29 : 0
            },
            "monthDays": function (t, n) {
                return n > 12 || n < 1 ? -1 : e.lunarInfo[t - 1900] & 65536 >> n ? 30 : 29
            },
            "solarDays": function (t, n) {
                if (n > 12 || n < 1) return -1;
                var i = n - 1;
                return 1 == i ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : e.solarMonth[i]
            },
            "toChinaMonth": function (t) {
                if (t > 12 || t < 1) return -1;
                var n = e.nStr3[t - 1];
                return n += "月"
            },
            "toChinaDay": function (t) {
                var n;
                switch (t) {
                    case 10:
                        n = "初十";
                        break;
                    case 20:
                        n = "二十";
                        break;
                    case 30:
                        n = "三十";
                        break;
                    default:
                        n = e.nStr2[Math.floor(t / 10)], n += e.nStr1[t % 10]
                }
                return n
            },
            "solar2lunar": function (t, n, i) {
                if (t < 1900 || t > 2100) return -1;
                if (1900 == t && 1 == n && i < 31) return -1;
                if (t) var a = new Date(t, parseInt(n) - 1, i); else var a = new Date;
                var o, s = 0, r = 0, t = a.getFullYear(), n = a.getMonth() + 1, i = a.getDate(),
                    c = (Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
                for (o = 1900; o < 2101 && c > 0; o++) r = e.lYearDays(o), c -= r;
                c < 0 && (c += r, o--);
                var l = o, s = e.leapMonth(o), d = !1;
                for (o = 1; o < 13 && c > 0; o++) s > 0 && o == s + 1 && 0 == d ? (--o, d = !0, r = e.leapDays(l)) : r = e.monthDays(l, o), 1 == d && o == s + 1 && (d = !1), c -= r;
                0 == c && s > 0 && o == s + 1 && (d ? d = !1 : (d = !0, --o)), c < 0 && (c += r, --o);
                var u = o, p = c + 1;
                return {
                    "IMonthCn": (d ? "闰" : "") + e.toChinaMonth(u),
                    "IDayCn": e.toChinaDay(p),
                    "IMonth": u,
                    "IDay": p
                }
            }
        };
        n.Calendar = e
    }, "97": function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {"value": !0});
        var i = e(102), a = e.n(i);
        !function (t) {
            t.fn.powerFloat = function (i) {
                return t(this).each(function () {
                    var a, o = t.extend({}, e, i || {}), s = function (t, e) {
                        n.target && "none" !== n.target.css("display") && n.targetHide(), n.s = t, n.trigger = e
                    };
                    switch (o.eventType) {
                        case"hover":
                            t(this).hover(function () {
                                n.timerHold && (n.flagDisplay = !0);
                                var e = parseInt(o.showDelay, 10);
                                s(o, t(this)), e ? (a && clearTimeout(a), a = setTimeout(function () {
                                    n.targetGet.call(n)
                                }, e)) : n.targetGet()
                            }, function () {
                                a && clearTimeout(a), n.timerHold && clearTimeout(n.timerHold), n.flagDisplay = !1, n.targetHold()
                            }), o.hoverFollow && t(this).mousemove(function (t) {
                                return n.cacheData.left = t.pageX, n.cacheData.top = t.pageY, n.targetGet.call(n), !1
                            });
                            break;
                        case"click":
                            t(this).click(function (e) {
                                n.display && n.trigger && e.target === n.trigger.get(0) ? (n.flagDisplay = !1, n.displayDetect()) : (s(o, t(this)), n.targetGet(), t(document).data("mouseupBind") || t(document).bind("mouseup", function (e) {
                                    var i = !1;
                                    if (n.trigger) {
                                        var a = n.target.attr("id");
                                        a || (a = "R_" + Math.random(), n.target.attr("id", a)), t(e.target).parents().each(function () {
                                            t(this).attr("id") === a && (i = !0)
                                        }), "click" === o.eventType && n.display && e.target != n.trigger.get(0) && !i && (n.flagDisplay = !1, n.displayDetect())
                                    }
                                    return !1
                                }).data("mouseupBind", !0))
                            });
                            break;
                        case"focus":
                            t(this).focus(function () {
                                var e = t(this);
                                setTimeout(function () {
                                    s(o, e), n.targetGet()
                                }, 200)
                            }).blur(function () {
                                n.flagDisplay = !1, setTimeout(function () {
                                    n.displayDetect()
                                }, 190)
                            });
                            break;
                        default:
                            s(o, t(this)), n.targetGet(), t(document).unbind("mouseup").data("mouseupBind", !1)
                    }
                })
            };
            var n = {
                "targetGet": function () {
                    if (!this.trigger) return this;
                    var e = this.trigger.attr(this.s.targetAttr),
                        i = "function" == typeof this.s.target ? this.s.target.call(this.trigger) : this.s.target;
                    switch (this.s.targetMode) {
                        case"common":
                            if (i) {
                                var o = void 0 === i ? "undefined" : a()(i);
                                "object" === o ? i.size() && (n.target = i.eq(0)) : "string" === o && t(i).size() && (n.target = t(i).eq(0))
                            } else e && t("#" + e).size() && (n.target = t("#" + e));
                            if (!n.target) return this;
                            n.targetShow();
                            break;
                        case"ajax":
                            var s = i || e;
                            if (this.targetProtect = !1, !s) return;
                            n.cacheData[s] || n.loading();
                            var r = new Image;
                            r.onload = function () {
                                var e = r.width, i = r.height, a = t(window).width(), o = t(window).height(), c = e / i;
                                c > a / o ? e > a / 2 && (e = a / 2, i = e / c) : i > o / 2 && (i = o / 2, e = i * c);
                                var l = '<img class="float_ajax_image" src="' + s + '" width="' + e + '" height = "' + i + '" />';
                                n.cacheData[s] = !0, n.target = t(l), n.targetShow()
                            }, r.onerror = function () {
                                /(\.jpg|\.png|\.gif|\.bmp|\.jpeg)$/i.test(s) ? (n.target = t('<div class="float_ajax_error">图片加载失败。</div>'), n.targetShow()) : t.ajax({
                                    "url": s,
                                    "success": function (e) {
                                        "string" == typeof e && (n.cacheData[s] = !0, n.target = t('<div class="float_ajax_data">' + e + "</div>"), n.targetShow())
                                    },
                                    "error": function () {
                                        n.target = t('<div class="float_ajax_error">数据没有加载成功。</div>'), n.targetShow()
                                    }
                                })
                            }, r.src = s;
                            break;
                        case"list":
                            var c, l = '<ul class="float_list_ul">';
                            t.isArray(i) && (c = i.length) ? t.each(i, function (t, n) {
                                var e, i, o = "", s = "";
                                0 === t && (s = ' class="float_list_li_first"'), t === c - 1 && (s = ' class="float_list_li_last"'), "object" === (void 0 === n ? "undefined" : a()(n)) && (e = n.text.toString()) ? o = (i = n.href || "javascript:") ? '<a href="' + i + '" class="float_list_a">' + e + "</a>" : e : "string" == typeof n && n && (o = n), o && (l += "<li" + s + ">" + o + "</li>")
                            }) : l += '<li class="float_list_null">列表无数据。</li>', l += "</ul>", n.target = t(l), this.targetProtect = !1, n.targetShow();
                            break;
                        case"remind":
                            var d = i || e;
                            this.targetProtect = !1, "string" == typeof d && (n.target = t("<span>" + d + "</span>"), n.targetShow());
                            break;
                        default:
                            var u = i || e, o = void 0 === u ? "undefined" : a()(u);
                            u && ("string" === o ? (/^.[^:#\[\.,]*$/.test(u) ? t(u).size() ? (n.target = t(u).eq(0), this.targetProtect = !0) : t("#" + u).size() ? (n.target = t("#" + u).eq(0), this.targetProtect = !0) : (n.target = t("<div>" + u + "</div>"), this.targetProtect = !1) : (n.target = t("<div>" + u + "</div>"), this.targetProtect = !1), n.targetShow()) : "object" === o && !t.isArray(u) && u.size() && (n.target = u.eq(0), this.targetProtect = !0, n.targetShow()))
                    }
                    return this
                }, "container": function () {
                    var e = this.s.container, i = this.s.targetMode || "mode";
                    return this.s.sharpAngle = "ajax" === i || "remind" === i, this.s.reverseSharp && (this.s.sharpAngle = !this.s.sharpAngle), "common" !== i && (null === e && (e = "plugin"), "plugin" === e && (t("#floatBox_" + i).size() || t('<div id="floatBox_' + i + '" class="float_' + i + '_box"></div>').appendTo(t("body")).hide(), e = t("#floatBox_" + i)), e && "string" != typeof e && e.size() && (this.targetProtect && n.target.show().css("position", "static"), n.target = e.empty().append(n.target))), this
                }, "setWidth": function () {
                    var t = this.s.width;
                    return "auto" === t ? this.target.get(0).style.width && this.target.css("width", "auto") : "inherit" === t ? this.target.width(this.trigger.width()) : this.target.css("width", t), this
                }, "position": function () {
                    if (!this.trigger || !this.target) return this;
                    var e, i, a, o, s, r, c, l = 0, d = 0, u = 0, p = 0, h = this.target.data("height"),
                        f = this.target.data("width"), m = t(window).scrollTop(),
                        v = parseInt(this.s.offsets.x, 10) || 0, g = parseInt(this.s.offsets.y, 10) || 0,
                        b = this.cacheData;
                    h || (h = this.target.outerHeight(), this.s.hoverFollow && this.target.data("height", h)), f || (f = this.target.outerWidth(), this.s.hoverFollow && this.target.data("width", f)), e = this.trigger.offset(), l = this.trigger.outerHeight(), d = this.trigger.outerWidth(), i = e.left, a = e.top;
                    var y = function () {
                        i < 0 ? i = 0 : i + l > t(window).width() && (i = t(window).width() - d)
                    }, w = function () {
                        a < 0 ? a = 0 : a + l > t(document).height() && (a = t(document).height() - l)
                    };
                    this.s.hoverFollow && b.left && b.top && ("x" === this.s.hoverFollow ? (i = b.left, y()) : "y" === this.s.hoverFollow ? (a = b.top, w()) : (i = b.left, a = b.top, y(), w()));
                    var T, _ = ["4-1", "1-4", "5-7", "2-3", "2-1", "6-8", "3-4", "4-3", "8-6", "1-2", "7-5", "3-2"],
                        I = this.s.position, $ = !1;
                    t.each(_, function (t, n) {
                        if (n === I) return void ($ = !0)
                    }), $ || (I = "4-1");
                    var S = function (t) {
                        var n = "bottom";
                        switch (t) {
                            case"1-4":
                            case"5-7":
                            case"2-3":
                                n = "top";
                                break;
                            case"2-1":
                            case"6-8":
                            case"3-4":
                                n = "right";
                                break;
                            case"1-2":
                            case"8-6":
                            case"4-3":
                                n = "left";
                                break;
                            case"4-1":
                            case"7-5":
                            case"3-2":
                                n = "bottom"
                        }
                        return n
                    }, x = function (t) {
                        return "5-7" === t || "6-8" === t || "8-6" === t || "7-5" === t
                    }, C = function (e) {
                        var o = 0, s = 0, r = !(!n.s.sharpAngle || !n.corner);
                        if ("right" === e) {
                            if (s = i + d + f + v, r && (s += n.corner.width()), s > t(window).width()) return !1
                        } else if ("bottom" === e) {
                            if (o = a + l + h + g, r && (o += n.corner.height()), o > m + t(window).height()) return !1
                        } else if ("top" === e) {
                            if (o = h + g, r && (o += n.corner.height()), o > a - m) return !1
                        } else if ("left" === e && (s = f + v, r && (s += n.corner.width()), s > i)) return !1;
                        return !0
                    };
                    T = S(I), this.s.sharpAngle && this.createSharp(T), this.s.edgeAdjust && (C(T) ? function () {
                        if (!x(I)) {
                            var t, n = {
                                "top": {"right": "2-3", "left": "1-4"},
                                "right": {"top": "2-1", "bottom": "3-4"},
                                "bottom": {"right": "3-2", "left": "4-1"},
                                "left": {"top": "1-2", "bottom": "4-3"}
                            }, e = n[T];
                            if (e) for (t in e) C(t) || (I = e[t])
                        }
                    }() : function () {
                        if (x(I)) {
                            I = {"5-7": "7-5", "7-5": "5-7", "6-8": "8-6", "8-6": "6-8"}[I]
                        } else {
                            var t = {
                                "top": {"left": "3-2", "right": "4-1"},
                                "right": {"bottom": "1-2", "top": "4-3"},
                                "bottom": {"left": "2-3", "right": "1-4"},
                                "left": {"bottom": "2-1", "top": "3-4"}
                            }, n = t[T], e = [];
                            for (var i in n) e.push(i);
                            I = C(e[0]) || !C(e[1]) ? n[e[0]] : n[e[1]]
                        }
                    }());
                    var A = S(I), j = I.split("-")[0];
                    if (this.s.sharpAngle && (this.createSharp(A), u = this.corner.width(), p = this.corner.height()), this.s.hoverFollow) "x" === this.s.hoverFollow ? (o = i + v, o = "1" === j || "8" === j || "4" === j ? i - (f - d) / 2 + v : i - (f - d) + v, "1" === j || "5" === j || "2" === j ? (s = a - g - h - p, c = a - p - g - 1) : (s = a + l + g + p, c = a + l + g + 1), r = e.left - (u - d) / 2) : "y" === this.s.hoverFollow ? (s = "1" === j || "5" === j || "2" === j ? a - (h - l) / 2 + g : a - (h - l) + g, "1" === j || "8" === j || "4" === j ? (o = i - f - v - u, r = i - u - v - 1) : (o = i + d - v + u, r = i + d + v + 1), c = e.top - (p - l) / 2) : (o = i + v, s = a + g); else switch (A) {
                        case"top":
                            s = a - g - h - p, o = "1" == j ? i - v : "5" === j ? i - (f - d) / 2 - v : i - (f - d) - v, c = a - p - g - 1, r = i - (u - d) / 2;
                            break;
                        case"right":
                            o = i + d + v + u, s = "2" == j ? a + g : "6" === j ? a - (h - l) / 2 + g : a - (h - l) + g, r = i + d + v + 1, c = a - (p - l) / 2;
                            break;
                        case"bottom":
                            s = a + l + g + p, o = "4" == j ? i + v : "7" === j ? i - (f - d) / 2 + v : i - (f - d) + v, c = a + l + g + 1, r = i - (u - d) / 2;
                            break;
                        case"left":
                            o = i - f - v - u, s = "2" == j ? a - g : "6" === j ? a - (f - d) / 2 - g : a - (h - l) - g, r = o + u, c = a - (f - u) / 2
                    }
                    return p && u && this.corner && this.corner.css({
                        "left": r,
                        "top": c,
                        "zIndex": this.s.zIndex + 1
                    }), this.target.css({"position": "absolute", "left": o, "top": s, "zIndex": this.s.zIndex}), this
                }, "createSharp": function (n) {
                    var e, i, a = "", o = "", s = {"left": "right", "right": "left", "bottom": "top", "top": "bottom"},
                        r = s[n] || "top";
                    this.target && (e = this.target.css("background-color"), parseInt(this.target.css("border-" + r + "-width")) > 0 && (i = this.target.css("border-" + r + "-color")), a = i && "transparent" !== i ? 'style="color:' + i + ';"' : 'style="display:none;"', o = e && "transparent" !== e ? 'style="color:' + e + ';"' : 'style="display:none;"');
                    var c = '<div id="floatCorner_' + n + '" class="float_corner float_corner_' + n + '"><span class="corner corner_1" ' + a + '>◆</span><span class="corner corner_2" ' + o + ">◆</span></div>";
                    return t("#floatCorner_" + n).size() || t("body").append(t(c)), this.corner = t("#floatCorner_" + n), this
                }, "targetHold": function () {
                    if (this.s.hoverHold) {
                        var t = parseInt(this.s.hideDelay, 10) || 200;
                        this.target && this.target.hover(function () {
                            n.flagDisplay = !0
                        }, function () {
                            n.timerHold && clearTimeout(n.timerHold), n.flagDisplay = !1, n.targetHold()
                        }), n.timerHold = setTimeout(function () {
                            n.displayDetect.call(n)
                        }, t)
                    } else this.displayDetect();
                    return this
                }, "loading": function () {
                    return this.target = t('<div class="float_loading"></div>'), this.targetShow(), this.target.removeData("width").removeData("height"), this
                }, "displayDetect": function () {
                    return !this.flagDisplay && this.display && (this.targetHide(), this.timerHold = null), this
                }, "targetShow": function () {
                    return n.cornerClear(), this.display = !0, this.container().setWidth().position(), this.target.show(), t.isFunction(this.s.showCall) && this.s.showCall.call(this.trigger, this.target), this
                }, "targetHide": function () {
                    return this.display = !1, this.targetClear(), this.cornerClear(), t.isFunction(this.s.hideCall) && this.s.hideCall.call(this.trigger), this.target = null, this.trigger = null, this.s = {}, this.targetProtect = !1, this
                }, "targetClear": function () {
                    this.target && (this.target.data("width") && this.target.removeData("width").removeData("height"), this.targetProtect && this.target.children().hide().appendTo(t("body")), this.target.unbind().hide())
                }, "cornerClear": function () {
                    this.corner && this.corner.remove()
                }, "target": null, "trigger": null, "s": {}, "cacheData": {}, "targetProtect": !1
            };
            t.powerFloat = {}, t.powerFloat.hide = function () {
                n.targetHide()
            };
            var e = {
                "width": "auto",
                "offsets": {"x": 0, "y": 0},
                "zIndex": 999,
                "eventType": "hover",
                "showDelay": 0,
                "hideDelay": 0,
                "hoverHold": !0,
                "hoverFollow": !1,
                "targetMode": "common",
                "target": null,
                "targetAttr": "rel",
                "container": null,
                "reverseSharp": !1,
                "position": "4-1",
                "edgeAdjust": !0,
                "showCall": t.noop,
                "hideCall": t.noop
            }
        }(jQuery)
    }
}, [485]);
//# sourceMappingURL=main_unitDetail.705294ecf208057cc283.js.map