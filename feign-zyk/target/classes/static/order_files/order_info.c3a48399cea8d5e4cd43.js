webpackJsonp([4], {
    "1": function (t, e, n) {
        "use strict";
        var a = n(55), o = n(22);
        t.exports = o("prod", a)
    }, "11": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {"value": !0});
        var a = n(70), o = (n.n(a), n(72));
        n.n(o), n(26);
        n(29), n(27), n(28), n(30), window.tjGlobal = window.tjGlobal || {}, window.tjGlobal.host = n.i({
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
        }), window.tjAlert = n(9)["default"].alert
    }, "12": function (t, e, n) {
        "use strict";
        Function.prototype.bind || (Function.prototype.bind = function (t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1), n = this, a = function () {
            }, o = function () {
                return n.apply(this instanceof a ? this : t, e.concat(Array.prototype.slice.call(arguments)))
            };
            return this.prototype && (a.prototype = this.prototype), o.prototype = new a, o
        })
    }, "125": function (t, e, n) {
        "use strict";

        function a(t) {
            return 0 == t ? 1 : t
        }

        function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = {},
                a = {"1": "身份证", "2": "军官证", "3": "护照"};
            if (e) {
                for (var o in a) 2 != o && (n[o] = a[o]);
                return n
            }
            if (!t) {
                for (var i in a) 3 != i && (n[i] = a[i]);
                return n
            }
            return a
        }

        function i(t) {
            var e = {};
            return t instanceof Array ? t.map(function (t) {
                return i(t)
            }) : t instanceof Date ? new Date(t) : t instanceof RegExp ? new RegExp(t) : t instanceof Function ? t : t instanceof Object ? (v()(t).forEach(function (n) {
                e[n] = i(t[n])
            }), e) : [void 0, null].indexOf(t) > -1 ? t : "Symbol" === t.constructor.name ? f()(t.toString().replace(/^Symbol\(/, "").slice(0, -1)) : t.__proto__.constructor(t)
        }

        function s(t) {
            if (!t) return 0;
            for (var e = t.offsetLeft, n = t.offsetParent; null !== n;) e += n.offsetLeft, n = n.offsetParent;
            return e
        }

        function r(t) {
            if (!t) return 0;
            for (var e = t.offsetTop, n = t.offsetParent; null !== n;) e += n.offsetTop, n = n.offsetParent;
            return e
        }

        function c(t) {
            return r(t) + l(t)
        }

        function l(t) {
            return t.clientHeight
        }

        function d(t) {
            return t.filter(function (t, e, n) {
                if (3 != t.EnumContactCardType) return t
            })
        }

        function u(t) {
            return t.filter(function (t, e, n) {
                if (2 != t.EnumContactCardType) return t
            })
        }

        function p(t, e) {
            var n = Date.now(), a = void 0;
            return function () {
                var o = this, i = arguments, s = Date.now();
                s < n + e ? (clearTimeout(a), a = setTimeout(function () {
                    n = s, t.apply(o, i)
                }, e)) : (n = s, t.apply(o, i))
            }
        }

        function h(t, e) {
            if (document.addEventListener && 9 != document.documentMode) t.addEventListener("input", e); else {
                var n = ["keyup", "paste", "cut", "change"];
                removeFn = function (t) {
                    var n = t.keyCode;
                    if (91 === n || 15 < n && n < 19 || 37 <= n && n <= 40) return e()
                }, n.forEach(function (e) {
                    t.attachEventZ("on" + e, removeFn)
                })
            }
        }

        e["i"] = a, e["a"] = o, e["d"] = i, e["e"] = s, e["c"] = r, e["h"] = c, e["f"] = l, e["j"] = d, e["g"] = u, e["b"] = p, e["k"] = h;
        var m = n(268), f = n.n(m), g = n(126), v = n.n(g), y = n(55);
        y.returnFloat = function (t) {
            return parseFloat(t).toFixed(2)
        }, y.returnInteger = function (t) {
            return Math.floor(t)
        }
    }, "13": function (t, e) {
        function n(t) {
            for (var e = $(".t-navbar ul.t-fl li a"), n = 0; n < e.length; n++) {
                var a = $(e[n]);
                n === t ? a.addClass("t-nav-cata-on") : a.removeClass("t-nav-cata-on")
            }
        }

        function a(t) {
            t && t.userID || t && t.userId ? ($(".g-login .m-unlogin").remove(), t.enumCustomerAccountFlag && (t.enumCustomerAccountFlag.toLowerCase().indexOf("mercant") > -1 || t.enumCustomerAccountFlag.toLowerCase().indexOf("fangdong") > -1 || t.enumCustomerAccountFlag.toLowerCase().indexOf("pms") > -1 || t.enumCustomerAccountFlag.toLowerCase().indexOf("owner") > -1) ? (-1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("mercant") && -1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("fangdong") && -1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("pms") ? $(".g-login .m-tujing-merchant-system").remove() : $(".g-login .m-tujing-merchant-send").remove(), -1 === t.enumCustomerAccountFlag.toLowerCase().indexOf("owner") && $(".m-yezhu-nav").remove()) : ($(".g-login .m-tujing-merchant-system").remove(), $(".m-yezhu-nav").remove())) : ($(".g-login .m-login").remove(), $(".m-yezhu-nav").remove(), $(".m-tujing-merchant-system").remove()), $(".g-login").removeClass("z-hidden")
        }

        var o = $(".m-tujing-merchant-send");
        o.on("mouseover", function () {
            $(this).find(".pop-box").show()
        }), o.on("mouseout", function () {
            $(this).find(".pop-box").hide()
        }), e.initIndex = n, e.updateLoginInfo = a
    }, "135": function (t, e, n) {
        "use strict";
        var a = n(471), o = n(470), i = {
            "getOrderForm": "/bingo/pc/order/orderform/v3",
            "getProducts": "/bingo/pc/product/getProducts",
            "getCalulateorderprice": "/bingo/pc/order/calulateorderprice",
            "getTyingGoodsForm": "/bingo/pc/order/gettyinggoodsform",
            "getTyingGoodsInfo": "/bingo/pc/tyinggoods/gettyinggoods",
            "createOrder": "/bingo/pc/order/createorder/v3",
            "getCommonContact": (window.tjGlobal && window.tjGlobal.host && window.tjGlobal.host.BOOKING_TUJIA_HOST || "https://booking.tujia.com") + "/Order/GetCommonContact",
            "getProductCalendar": "/bingo/pc/product/getProductCalendar",
            "getUnitCalendar": "/bingo/pc/unit/getUnitCalendar",
            "sendVoiceValidateCode": "/bingo/pc/order/sendvoicevalidatecode",
            "getInvoiceCheckForBooking": "/bingo/pc/invoice/invoicecheckforbooking"
        }, s = {
            "getOrderForm": function (t) {
                t.bookingInfo, t.callCenter, t.houseProductInfo, t.tyingGoodsBookingItems;
                return a["a"].post(i.getOrderForm, {"data": arguments[0]})
            }, "getCalulateorderprice": function (t) {
                t.callCenter, t.bookingInfo, t.deposit, t.productInfo, t.promotion, t.tyingGoodsBookingItems;
                return a["a"].post(i.getCalulateorderprice, {"data": arguments[0]})
            }, "getTyingGoodsForm": function (t) {
                t.bookingCount, t.checkInDate, t.checkOutDate, t.peopleCount, t.unitId;
                return a["a"].post(i.getTyingGoodsForm, {"data": arguments[0]})
            }, "getProductCanCelRule": function (t) {
                t.houseId, t.productId, t.checkInDate, t.checkOutDate;
                return a["a"].post(i.getProductCanCelRule, {"data": arguments[0]})
            }, "createOrder": function (t) {
                t.callCenter, t.cookieRecord, t.bookingInfo, t.guests, t.houseProductInfo, t.insurances, t.promotion, t.securityCheck, t.tyingGoodsBookingItems;
                return a["a"].post(i.createOrder, {"data": arguments[0]})
            }, "getUnitSimple": function (t) {
                t.fromSource, t.unitId;
                return a["a"].post(i.getUnitSimple, {"data": arguments[0]})
            }, "getCommonContact": function () {
                return o["a"].post(i.getCommonContact, {"data": null, "withCredentials": !0})
            }, "getProductCalendar": function (t) {
                t.callCenter, t.productId, t.unitId;
                return a["a"].post(i.getProductCalendar, {"data": arguments[0]})
            }, "getUnitCalendar": function (t) {
                t.unitId;
                return a["a"].post(i.getUnitCalendar, {"data": arguments[0]})
            }, "getTyingGoodsInfo": function (t) {
                t.tyingGoodsId;
                return a["a"].post(i.getTyingGoodsInfo, {"data": arguments[0]})
            }, "sendVoiceValidateCode": function (t) {
                return a["a"].post(i.sendVoiceValidateCode, {"data": {"currentMobile": t}})
            }, "getInvoiceCheckForBooking": function (t) {
                t.activityInfo, t.productId, t.unitId;
                return a["a"].post(i.getInvoiceCheckForBooking, {"data": arguments[0]})
            }, "getProducts": function (t) {
                t.checkInDate, t.checkOutDate, t.unitId, t.activityInfo, t.callCenter;
                return a["a"].post(i.getProducts, {"data": arguments[0]})
            }
        };
        e["a"] = s
    }, "136": function (t, e, n) {
        "use strict";

        function a(t) {
            console.log("360分析unitId" + t), function (e, n) {
                e[n] = "function" == typeof e[n] ? e[n] : function () {
                    (e[n].c = e[n].c || []).push(arguments)
                }, _qha("send", {"et": 30, "id": t, "vendorId": ""})
            }(window, "_qha")
        }

        function o(t, e, n) {
            console.log("360分析数据：unitId=" + t + "，总间夜=" + e + "，总价格=" + n), function (a, o) {
                a[o] = "function" == typeof a[o] ? a[o] : function () {
                    (a[o].c = a[o].c || []).push(arguments)
                }, _qha("send", {"et": 32, "goods": [{"id": t, "vendorId": "", "name": "", "price": n, "quantity": e}]})
            }(window, "_qha")
        }

        Object.defineProperty(e, "__esModule", {"value": !0}), e["renderFenxiUnitDetail"] = a, e["renderFenxiOrderFill"] = o
    }, "14": function (t, e, n) {
        function a(t) {
            return n(o(t))
        }

        function o(t) {
            var e = i[t];
            if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
            return e
        }

        var i = {
            "./deploy_dev.json": 17,
            "./deploy_fvt.json": 18,
            "./deploy_prod.json": 19,
            "./deploy_t1.json": 20,
            "./deploy_t2.json": 21
        };
        a.keys = function () {
            return Object.keys(i)
        }, a.resolve = o, t.exports = a, a.id = 14
    }, "15": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.config, o = a.$escape;
            return e += '<div class="base-alert">\n  <div class="alert-header">\n    ', n.title && (e += '\n    <span class="title">', e += o(n.title), e += "</span>\n    "), e += '\n  </div>\n  <div class="alert-cont">\n    <h2>', e += o(n.content), e += '</h2>\n  </div>\n  <div class="alert-footer">\n    <span class="ensure btn">', e += o(n.ensure), e += "</span>\n    ", n.cancel && (e += '\n    <span class="cancel btn">', e += o(n.cancel), e += "</span>\n    "), e += "\n  </div>\n</div>\n"
        }
    }, "156": function (t, e, n) {
        "use strict";

        function a(t) {
            function e() {
                window.location.href = "/unitlist?&isCallCenter=true&ssr=off"
            }

            function n(t) {
                window.location.href = "/detail/" + t + ".html?isCallCenter=true&ssr=off"
            }

            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = {"content": t.errorMsg, "cancel": "", "mask": !0};
            switch (t.errorNo) {
                case 56e3:
                    window.tjAlert(i);
                    break;
                case 56001:
                    break;
                case 56002:
                    window.tjAlert(i);
                    break;
                case 56003:
                    i.callback = function () {
                        window.location.reload(!0)
                    }, window.tjAlert(i);
                    break;
                case 55004:
                    i.callback = function () {
                        window.showLoginDialog()
                    }, window.tjAlert(i);
                    break;
                case 55006:
                    i.callback = function () {
                        s ? e() : window.location.href = "/"
                    }, window.tjAlert(i);
                    break;
                case 55002:
                case 55021:
                case 55026:
                case 55030:
                case 55031:
                case 55032:
                    i.callback = function () {
                        window.location.href = "/detail/" + a + ".htm" + (s ? "?isCallCenter=true&ssr=off" : "")
                    }, window.tjAlert(i);
                    break;
                case 55023:
                case 55025:
                case 55022:
                    if (o) {
                        i.callback = function () {
                            window.location.href = "/detail/" + a + ".htm" + (s ? "?isCallCenter=true&ssr=off" : "")
                        }, window.tjAlert(i);
                        break
                    }
                    i = {
                        "content": t.errorMsg,
                        "ensure": "修改日期",
                        "cancel": "查看其他价格",
                        "mask": !0,
                        "callback": function (t) {
                            1 == t ? $("#check-date").trigger("click") : 2 == t && (s ? n(a) : window.location.href = "/unitdetail?unitId=" + a)
                        }
                    }, window.tjAlert(i);
                    break;
                default:
                    t && t.errorNo ? window.tjAlert(i) : (window.tjAlert({
                        "ensure": "确定",
                        "cancel": "",
                        "mask": !0,
                        "content": t.errorMsg || "系统错误"
                    }), console.log("系统错误" + t.stack))
            }
        }

        e["a"] = a;
        var o = n(34), i = o["a"].queryStrings(), s = "true" === i.isCallCenter
    }, "16": function (t, e) {
    }, "17": function (t, e) {
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
    }, "18": function (t, e) {
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
    }, "19": function (t, e) {
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
    }, "20": function (t, e) {
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
    }, "21": function (t, e) {
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
    }, "22": function (t, e, n) {
        var a = n(57), o = function (t, e) {
            console.log("bind in mode %s", t);
            var o = n(14)("./deploy_" + t + ".json");
            return Object.keys(o).forEach(function (t, n) {
                e[t] = o[t]
            }), "local" == a.env.NODE_DEPLOYLOCAL && (e["NO_VERSION_STATIC_CDN_PREFIX"] = ""), e
        };
        t.exports = o
    }, "23": function (t, e, n) {
        "use strict";

        function a(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            e || s["a"].init(), p.postRequest("/bingo/pc/Config/getCommonConfigs", null, function (e, i, s) {
                window.tjGlobal.userInfo = i.userInfo, window.tujiaTnsConf = i.tns, r.updateLoginInfo(e ? i.userInfo || {} : {}), t(e, i, s), e && o(i, n, a)
            })
        }

        function o(t, e, n) {
            setTimeout(function () {
                t.popupAdvertisement && !n && l.initPopupAds(t.popupAdvertisement), e || l.initBottomAds();
                var a = $("#tujia_page_navbar");
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
                        "portalUrl": a.data("tujia-host"),
                        "apiUrl": a.data("api-tujia-host"),
                        "vipUrl": a.data("vip-tujia-host"),
                        "imUrl": a.data("im-tujia-host"),
                        "imJsUrl": t.config.imURL
                    }
                }), i["default"].dynamicAddScript("//webchat.7moor.com/javascripts/7moorInit.js?accessId=797098a0-b29d-11e5-b3b1-49764155fe50&autoShow=false")
            }, 50)
        }

        var i = n(58), s = n(78);
        n(11), n(12);
        var r = n(13), c = $("#tujia_page_navbar");
        c.data("cnd-static");
        n(36), n(41), n(38), n(39);
        var l = n(37), d = n(40), u = n(8).TJRequestV2, p = new u, h = function () {
            s["a"].init()
        };
        e["a"] = {"initPage": a, "initStatisticsFun": h}
    }, "24": function (t, e, n) {
        "use strict";
        var a = n(92).Calendar, o = function (t, e) {
            this._date = t, this._opts = e || {}
        };
        o.rngCache = null, o.prototype._rngCls = function (t, e) {
            var n = o.rngCache;
            return n || (n = o.rngCache = i.getNow()), n.setTime(t.getTime()), i.clearMSM(n), e[0] == n.getTime() || e[1] == n.getTime() ? "range-edge" : n.getTime() < e[1] && n.getTime() > e[0] ? "range-span" : void 0
        }, o.prototype.toHtml = function () {
            var t = [], e = i.toYYYYMM(this._date), n = i.getNow(), a = "";
            if (!0 === this._opts.nextCtrl) a = "t-cal-ctrl t-cal-ctrl-next"; else if (!0 === this._opts.prevCtrl) {
                var o = i.compareDate(i.MONTH, n, this._date);
                a = o < 0 ? "t-cal-ctrl t-cal-ctrl-prev" : "t-cal-ctrl t-cal-ctrl-prev hide"
            } else a = "t-cal-ctrl hide";
            var s = this._opts.onSingleDay, r = "function" == typeof s;
            t.push('\n      <div class="t-calendar t-bx">\n        <div class="t-bx-head"><a href="javascript:;" class="' + a + '"></a>' + e + '</div>\n        <div class="t-bx-body">\n          <table>\n            <thead>\n              <tr>\n                <th class="weekend">日</th>\n                <th>一</th>\n                <th>二</th>\n                <th>三</th>\n                <th>四</th>\n                <th>五</th>\n                <th class="weekend">六</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n  ');
            var l = new Date(this._date.getTime());
            l.setDate(1);
            var d = l.getDate(), u = l.getDay(), p = this._opts.selectionRange, h = 2 == p.length;
            i.copyFrom(this._date, l), l.setDate(1), l.setMonth(l.getMonth() + 1), l.setDate(1), l.setDate(l.getDate() - 1);
            for (var m = l.getDate(), f = l.getDay(), g = 0; g < u; g++) t.push('\n      <td class="ep"></td>\n    ');
            i.copyFrom(this._date, l);
            var v = void 0 !== this._opts.disableDayBefore && this._opts.disableDayBefore instanceof Date, y = null,
                _ = 0;
            v && (y = i.getNow(), i.copyFrom(this._opts.disableDayBefore, y), i.clearMSM(y), _ = y.getTime());
            var b = void 0 !== this._opts.disableDayAfter && this._opts.disableDayAfter instanceof Date, T = null,
                C = 0;
            b && (T = i.getNow(), i.copyFrom(this._opts.disableDayAfter, T), i.clearMSM(T), C = T.getTime());
            for (var g = d; g <= m; g++) {
                l.setDate(g);
                var I = l.getDay(), w = l.getTime();
                I % 7 == 0 && t.push("\n              </tr>\n              <tr>\n      ");
                var D = "day";
                if (v && l.getTime() < _ ? D = "disable" : b && l.getTime() > C && (D = "disable"), h) {
                    var $ = this._rngCls(l, p);
                    $ && (D += " " + $)
                }
                if (r) {
                    var k = s.call(this, g, w, l);
                    "string" == typeof k && (D += " " + k)
                }
                if (i.sameDay(n, l)) t.push('\n        <td class="' + D + '" data-ts="' + w + '" data-date-index="' + g + '">今天</td>\n      '); else {
                    var O = c(l, g);
                    t.push('\n        <td class="' + D + '" data-ts="' + w + '" data-date-index="' + g + '">' + O + "</td>\n      ")
                }
            }
            for (var S = f + 1; S < 7; S++) t.push('\n        <td class="ep"></td>\n      ');
            return t.push("\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  "), t.join("")
        }, e.CalView = o;
        var i = {
            "toYYYYMM": function (t) {
                return t.getFullYear() + "年" + (t.getMonth() + 1) + "月"
            }, "makeDisableDateEnd": function () {
                var t = i.getNow();
                return i.clearMSM(t), t.setMonth(t.getMonth() + 6), t.setDate(t.getDate() - 2), t
            }, "toConYYMMDD": function (t) {
                var e = new Date(t), n = e.getMonth() + 1, a = e.getDate();
                return e.getFullYear() + "-" + (n < 10 ? "0" + n : n) + "-" + (a < 10 ? "0" + a : a)
            }, "padZero": function (t, e) {
                return (t < 10 ? "0" + t : t) + "" + (e < 10 ? "0" + e : e)
            }, "makeDefaultRange": function () {
                var t = i.getNow();
                i.clearMSM(t);
                var e = t.getTime();
                return t.setDate(t.getDate() + 1), [e, t.getTime()]
            }, "formatRange": function (t, e) {
                var n = i.getNow();
                n.setTime(t);
                var a = this.formatDate(n);
                return n.setTime(e), a + " 至 " + this.formatDate(n)
            }, "formatDate": function (t) {
                return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
            }, "clearMSM": function (t) {
                t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0)
            }, "copyFrom": function (t, e) {
                e.setTime(t.getTime())
            }, "getNow": function () {
                return new Date
            }, "compareDate": function (t, e, n) {
                switch (t) {
                    case i.YEAR:
                        return e.getFullYear() - n.getFullYear();
                    case i.MONTH:
                        return e.getFullYear() != n.getFullYear() ? e.getFullYear() - n.getFullYear() : e.getMonth() - n.getMonth();
                    case i.DATE:
                        return e.getTime() - n.getTime();
                    default:
                        return 0
                }
            }, "sameDay": function (t, e) {
                return t.getFullYear() == e.getFullYear() && t.getMonth() == e.getMonth() && t.getDate() == e.getDate()
            }
        };
        i.YEAR = 1, i.MONTH = 2, i.DATE = 3, i.GREG = 1, i.TRID = 2, i.FORE = 3, e.CalUtil = i;
        var s = {}, r = function () {
        }, c = function (t, e) {
            var n = s[i.GREG], o = i.padZero(t.getMonth(), t.getDate()), r = n[o];
            if (r) return r;
            var c = a.solar2lunar(t.getFullYear(), t.getMonth() + 1, t.getDate()), l = i.padZero(c.IMonth, c.IDay),
                d = s[i.TRID], u = d[l];
            if (u) return u;
            var p = s[i.FORE], h = p[o];
            return h || (void 0 !== e ? e : t.getDate())
        };
        e.registerFest = r, e.getFest = c;
        !function () {
            s[i.GREG] = {"0001": "元旦", "0401": "五一", "0901": "国庆"}, s[i.TRID] = {
                "0505": "端午",
                "0815": "中秋",
                "0101": "春节",
                "0102": "初二",
                "0103": "初三"
            }, s[i.FORE] = {"1124": "圣诞"}
        }()
    }, "249": function (t, e, n) {
        "use strict";

        function a(t) {
            var e = {
                "11": "北京",
                "12": "天津",
                "13": "河北",
                "14": "山西",
                "15": "内蒙古",
                "21": "辽宁",
                "22": "吉林",
                "23": "黑龙江 ",
                "31": "上海",
                "32": "江苏",
                "33": "浙江",
                "34": "安徽",
                "35": "福建",
                "36": "江西",
                "37": "山东",
                "41": "河南",
                "42": "湖北 ",
                "43": "湖南",
                "44": "广东",
                "45": "广西",
                "46": "海南",
                "50": "重庆",
                "51": "四川",
                "52": "贵州",
                "53": "云南",
                "54": "西藏 ",
                "61": "陕西",
                "62": "甘肃",
                "63": "青海",
                "64": "宁夏",
                "65": "新疆",
                "71": "台湾",
                "81": "香港",
                "82": "澳门",
                "91": "国外 "
            }, n = !0;
            if (t && /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t)) if (e[t.substr(0, 2)]) {
                if (18 == t.length) {
                    t = t.split("");
                    for (var a = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], o = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2], i = 0, s = 0, r = 0, c = 0; c < 17; c++) s = t[c], r = a[c], i += s * r;
                    o[i % 11] != t[17] && ("校验位错误", n = !1)
                }
            } else "地址编码错误", n = !1; else "身份证号格式错误", n = !1;
            return n
        }

        n.d(e, "a", function () {
            return r
        }), e["b"] = a;
        var o = n(64), i = n.n(o), s = n(125), r = function () {
            function t(e) {
                i()(this, t), this.validateRules = [];
                this.domContext = e
            }

            return t.prototype.addValidate = function (t) {
                "[object Array]" == Object.prototype.toString.call(t) ? this.validateRules = this.validateRules.concat(t) : this.validateRules.push(t)
            }, t.prototype.validateForm = function (t) {
                this.errs = [];
                for (var e = 0, n = this.validateRules.length; e < n; e++) for (var a = this.validateRules[e], o = a.selector, i = a.rules, s = a.errMsgSelector, r = 0, c = i.length; r < c; r++) this.validate(i[r], o, s);
                return this.displayErrs(this.errs), "function" == typeof t && t(this.errs), 0 == this.errs.length
            }, t.prototype.displayErrs = function (t) {
                $(this.domContext + " .form-content").find('input[type="text"]').removeClass("input-unvalid"), $(this.domContext + " .form-content").find(".err-message").remove(), $(this.domContext + " .form-content").removeClass("unvalid");
                for (var e = 0, a = 0, o = t.length; a < o; a++) {
                    var i = t[a], r = i.errMsgSelector.split(":")[0], c = r.replace(".", "");
                    if (i.errMsgSelector.indexOf(":") > -1) {
                        e = i.errMsgSelector.split(":")[1], $(this.domContext + " " + i.selector).eq(e).addClass("input-unvalid");
                        var l = $(this.domContext + " " + i.selector).eq(e).parents(".form-content")[0];
                        if ($(l).addClass("unvalid"), 0 === $(l).find(".err-message" + r).length) {
                            l.appendChild($('\n          <div class="err-message ' + c + '">\n            ' + i.errMsg + "\n          </div>\n        ")[0]);
                            var d = n.i(s["e"])($(l).find(i.selector)[0]) - n.i(s["e"])(l),
                                u = n.i(s["f"])($(l).find(i.selector)[0]);
                            $(l).find(".err-message" + r).css({
                                "position": "absolute",
                                "left": d,
                                "top": u,
                                "min-width": "180px"
                            })
                        }
                    } else {
                        $(this.domContext + " " + i.selector).addClass("input-unvalid");
                        var p = $(this.domContext + " " + i.selector).parents(".form-content")[0];
                        if ($(p).addClass("unvalid"), 0 === $(p).find(".err-message" + r).length) {
                            p.appendChild($('\n          <div class="err-message ' + c + '">\n            ' + i.errMsg + "\n          </div>\n          ")[0]);
                            var h = n.i(s["e"])($(p).find(i.selector)[0]) - n.i(s["e"])(p),
                                m = n.i(s["f"])($(p).find(i.selector)[0]);
                            $(p).find(".err-message" + r).css({
                                "position": "absolute",
                                "left": h,
                                "top": m,
                                "min-width": "180px"
                            })
                        }
                    }
                }
            }, t.prototype.validate = function (e, n, a) {
                var o = e.rule, i = this;
                if ($(this.domContext + " " + n).length > 1) $(this.domContext + " " + n).each(function (s) {
                    if (null !== $(this)[0].offsetParent) {
                        var r = $(this).val(), c = !1;
                        if (t.strategy[o] instanceof RegExp) c = t.strategy[o].test(r); else if ("string" == typeof o && o.indexOf("length")) {
                            var l = o.split(":")[0], d = o.split(":")[1];
                            switch (l) {
                                case"minlength":
                                    c = r.length >= d;
                                    break;
                                case"maxlength":
                                    c = r.length <= d
                            }
                        } else "function" == typeof o && (c = o(this));
                        c ? $(i.domContext + " " + a).eq(s).text("") : i.errs.push({
                            "selector": n,
                            "rule": e.rule,
                            "errMsg": e.errMsg,
                            "errMsgSelector": a + ":" + s
                        })
                    }
                }); else if ($(this.domContext + " " + n).length > 0 && null !== $(this.domContext + " " + n)[0].offsetParent) {
                    var s = $(this.domContext + " " + n).val(), r = !1;
                    if (t.strategy[o] instanceof RegExp) r = t.strategy[o].test(s); else if ("string" == typeof o && o.indexOf("length")) {
                        var c = o.split(":")[0], l = o.split(":")[1];
                        switch (c) {
                            case"minlength":
                                r = s.length >= l;
                                break;
                            case"maxlength":
                                r = s.length <= l
                        }
                    } else "function" == typeof o && (r = o(this.domContext + " " + n));
                    r ? $(this.domContext + " " + a).text("") : this.errs.push({
                        "selector": n,
                        "rule": e.rule,
                        "errMsg": e.errMsg,
                        "errMsgSelector": a
                    })
                }
            }, t
        }();
        r.strategy = {
            "email": /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
            "tel": /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[013678]|18[0-9]|14[579]|19[89])[0-9]{8}$/,
            "pinyin": /^[a-zA-Z]{1,20}$/
        }
    }, "26": function (t, e, n) {
        "use strict";
        var a = n(5);
        n.i(a["b"])({"userId": tjGlobal.userInfo && tjGlobal.userInfo.userId})
    }, "27": function (t, e) {
    }, "28": function (t, e) {
    }, "29": function (t, e) {
    }, "3": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {"value": !0}), n.d(e, "getQueryString", function () {
            return a
        }), n.d(e, "parseQueryString", function () {
            return o
        }), n.d(e, "getCookie", function () {
            return i
        }), n.d(e, "setCookie", function () {
            return s
        }), n.d(e, "deleteCookie", function () {
            return r
        }), n.d(e, "modifyCookie", function () {
            return c
        });
        var a = function (t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), n = location.search.substr(1).match(e);
            return null !== n ? decodeURIComponent(n[2]) : null
        }, o = function () {
            var t = /([^?&=]+)=([^&#]*)/g, e = {};
            return location.search.replace(t, function (t, n, a) {
                var o = decodeURIComponent(n), i = decodeURIComponent(a);
                return e[o] = i, t
            }), e
        }, i = function (t) {
            if (document.cookie.length > 0) {
                var e = document.cookie.indexOf(t + "=");
                if (-1 != e) {
                    e = e + t.length + 1;
                    var n = document.cookie.indexOf(";", e);
                    return -1 == n && (n = document.cookie.length), unescape(document.cookie.substring(e, n))
                }
            }
            return ""
        }, s = function (t, e, n, a) {
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                var i = "; expires=" + o.toGMTString()
            } else var i = "";
            document.cookie = t + "=" + e + i + "; path=/" + (a ? ";domain=" + a : "")
        }, r = function (t) {
            var e = new Date;
            e.setTime(e.getTime() - 1), document.cookie = t + "=; expires=" + e.toGMTString() + ";path=/"
        }, c = function (t, e, n) {
            r(t), s(t, e, n)
        }
    }, "30": function (t, e) {
    }, "320": function (t, e, n) {
        n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.fastBooking;
            return e += '<div class="m-step-no1">\n  <div class="m-step">\n    ', e += n ? '\n    <ul class="cols3">\n      <li class="step1">\n        <span class="s-num">1</span>\n        <span class="s-text">提交订单</span>\n      </li>\n      <li class="step3">\n        <span class="s-num">2</span>\n        <span class="s-text">支付订金</span>\n      </li>\n      <li class="step5">\n        <span class="s-num">3</span>\n        <span class="s-text">预订成功</span>\n      </li>\n    </ul>\n    ' : '\n    <ul class="cols4">\n      <li class="step1">\n        <span class="s-num">1</span>\n        <span class="s-text">提交订单</span>\n      </li>\n      <li class="step3">\n        <span class="s-num">2</span>\n        <span class="s-text">支付订金</span>\n      </li>\n      <li class="step5">\n        <span class="s-num">3</span>\n        <span class="s-text">等待房东确认</span>\n      </li>\n      <li class="step7">\n        <span class="s-num">4</span>\n        <span class="s-text">预订成功</span>\n      </li>\n    </ul>\n    ', e += "\n  </div>\n</div>\n"
        }
    }, "352": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return m
        });
        var a = n(64), o = n.n(a), i = n(502), s = (n.n(i), n(420)), r = n.n(s), c = n(417), l = n.n(c), d = n(34),
            u = n(96), p = n(125), h = "true" === d["a"].queryStrings().isCallCenter, m = function () {
                function t(e, n) {
                    o()(this, t), this._parent = n, this.data = this.handlePageDataToViewData(e), this.mount(this.data), this.bindEvent()
                }

                return t.prototype.mount = function () {
                    $(t.contClassName).html(r()(this.data)), h || $(".insurance-detail-hook").powerFloat({
                        "offsets": {
                            "x": 0,
                            "y": -20
                        }, "eventType": "hover", "reverseSharp": !0, "position": "7-5"
                    })
                }, t.prototype.handlePageDataToViewData = function (t) {
                    var e = t.orderData, a = t.createOrderData, o = t.guests, i = void 0 === o ? [] : o;
                    return {
                        "allowForeign": e.houseInfo.allowForeign,
                        "contactMen": e.houseInfo.allowForeign ? i : n.i(p["j"])(i),
                        "bookingCount": a.bookingInfo.bookingCount || 1,
                        "insurances": [],
                        "certTypeData": n.i(p["a"])(e.houseInfo.allowForeign) || {},
                        "checkBoxInputMap": [],
                        "sexTypeData": {"1": "男", "2": "女"}
                    }
                }, t.prototype.bindEvent = function () {
                    var e = this;
                    $(t.contClassName).on("click", ".show-more", function (t) {
                        $(t.currentTarget).hasClass("spread") ? ($(t.currentTarget).removeClass("spread"), $(t.currentTarget).children(".text").html("更多"), $(t.currentTarget).children(".vert-arrow").removeClass("active")) : ($(t.currentTarget).addClass("spread"), $(t.currentTarget).children(".text").html("收起"), $(t.currentTarget).children(".vert-arrow").addClass("active")), $(this).siblings(".insured-opts-more").toggleClass("show")
                    }), $(t.contClassName).on("click", "input:checkbox", function () {
                        var n = $(this).prop("checked"), a = $(this).parent("label").attr("data-contact-id");
                        if (e.data.insurances.length < e.data.bookingCount && n) {
                            var o = e.data.contactMen.find(function (t, e) {
                                return t.ID == a
                            }), i = e.data.contactMen.findIndex(function (t, e) {
                                return t.ID == a
                            });
                            e.data.insurances.push(e.parseContactManToInsurance(o)), e.data.insurances.length >= e.data.bookingCount && $(t.contClassName + " .create-insured-btn").addClass("hide"), e.data.checkBoxInputMap.push([i, a]), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances), e.updateListView()
                        } else if (e.data.insurances.length < e.data.bookingCount && !n) {
                            var s = e.data.insurances.findIndex(function (t, e, n) {
                                return t.id == a
                            });
                            e.data.insurances.splice(s, 1);
                            var r = e.data.checkBoxInputMap.findIndex(function (t) {
                                return t[0] == s
                            });
                            e.data.checkBoxInputMap.splice(r, 1), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances), e.updateListView()
                        } else if (e.data.insurances.length >= e.data.bookingCount && n) $(this).prop("checked", !1), window.tjAlert({
                            "ensure": "确定",
                            "cancel": "",
                            "mask": !0,
                            "content": "保险人最多与房屋预订套数相同"
                        }); else if (e.data.insurances.length >= e.data.bookingCount && !n) {
                            var c = e.data.insurances.findIndex(function (t, e, n) {
                                return t.id == a
                            });
                            e.data.insurances.splice(c, 1);
                            var l = e.data.checkBoxInputMap.findIndex(function (t) {
                                return t[0] == c
                            });
                            e.data.checkBoxInputMap.splice(l, 1), e.data.insurances.length < e.data.bookingCount && $(t.contClassName + " .create-insured-btn").removeClass("hide"), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances), e.updateListView()
                        }
                    }), $(t.contClassName).on("click", ".insured .delete", function (n) {
                        var a = $(n.target).parents(".insured").attr("data-contact-id"), o = -1, i = -1;
                        if (a) {
                            var s = $(t.contClassName).find("label").filter(function (t) {
                                return $(this).attr("data-contact-id") == a
                            })[0];
                            o = $(t.contClassName).find("label").index(s), i = e.data.insurances.findIndex(function (t, e) {
                                return t.id == a
                            })
                        } else i = $(t.contClassName).find(".insured").index($(n.target).parents(".insured"));
                        if (o > -1) {
                            $(t.contClassName + " input[type=checkbox]").eq(o).prop("checked", !1);
                            var r = e.data.checkBoxInputMap.findIndex(function (t) {
                                return t[0] == i
                            });
                            e.data.checkBoxInputMap.splice(r, 1)
                        }
                        e.data.insurances.splice(i, 1), e.data.insurances.length < e.data.bookingCount && $(t.contClassName + " .create-insured-btn").removeClass("hide"), e.updateListView()
                    }), n.i(p["k"])($(t.contClassName)[0], function (n) {
                        var a = $(n.target).parents(".insured").attr("data-contact-id"),
                            o = $(t.contClassName + " .insured-list .insured").index($(n.target).parents(".insured"));
                        if ($(n.target).is('input[name="insured-name"]')) {
                            e.data.insurances[o].userName = $(n.target).val(), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances);
                            var i = $(t.contClassName).find("label").filter(function (t) {
                                return $(this).attr("data-contact-id") == a
                            })[0];
                            if (i) {
                                $(i).find('input[type="checkbox"]').attr("checked", !1);
                                var s = e.data.checkBoxInputMap.findIndex(function (t) {
                                    return t[0] == o
                                });
                                e.data.checkBoxInputMap.splice(s, 1)
                            }
                        } else $(n.target).is('input[name="cert-number"]') ? (e.data.insurances[o].insuredCertiNo = $(n.target).val(), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances)) : $(n.target).is('input[name="insured-birth"]') && (e.data.insurances[o].birthDay = $(n.target).val(), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances))
                    }), $(t.contClassName).on("click", ".create-insured-btn", function (n) {
                        e.data.insurances.length >= e.data.bookingCount || (e.data.insurances.push({
                            "birthDay": "",
                            "gender": 1,
                            "insuredCertiNo": "",
                            "insuredCertiType": "1",
                            "insurenceName": "众安保险",
                            "userName": "",
                            "id": ""
                        }), e.data.insurances.length >= e.data.bookingCount && $(t.contClassName + " .create-insured-btn").addClass("hide"), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances), e.updateListView())
                    }), $(t.contClassName).on("change", "select", function (n) {
                        var a = $(t.contClassName).find(".insured").index($(n.target).parents(".insured"));
                        $(n.target).is('select[name="cert-type"]') ? (e.data.insurances[a].insuredCertiType = $(n.target).val(), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances), e.updateListView()) : $(n.target).is('select[name="sex"]') && (e.data.insurances[a].gender = $(n.target).val(), u["a"].trigger("insurances", e._parent._createOrderData, e.data.insurances), e.updateListView())
                    })
                }, t.prototype.parseContactManToInsurance = function (t) {
                    return {
                        "birthDay": t.Birthday,
                        "gender": t.EnumSex || 1,
                        "insuredCertiNo": t.ContactCardNumber,
                        "insuredCertiType": n.i(p["i"])(t.EnumContactCardType),
                        "insurenceName": "众安保险",
                        "userName": t.ContactName,
                        "id": t.ID || ""
                    }
                }, t.prototype.updateForContact = function (e) {
                    var n = e.orderData, a = e.createOrderData, o = e.guests;
                    this.data = this.handlePageDataToViewData({
                        "orderData": n,
                        "createOrderData": a,
                        "guests": o
                    }), this.mount(), $(t.insuredListCont + " select").niceSelect()
                }, t.prototype.updateListView = function () {
                    $(t.insuredListCont).html(l()({
                        "insurances": this.data.insurances,
                        "certTypeData": this.data.certTypeData,
                        "sexTypeData": this.data.sexTypeData,
                        "allowForeign": this.data.allowForeign
                    })), $(t.insuredListCont + " select").niceSelect()
                }, t
            }();
        m.contClassName = ".insurance-info", m.insuredListCont = ".insurance-info .insured-list"
    }, "353": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var a = n(64), o = n.n(a), i = n(421), s = n.n(i), r = (n(34), function () {
            function t(e, n) {
                o()(this, t), this.parent = n, n.invoiceInfoCom = this, this.mount({"text": e.tip})
            }

            return t.prototype.mount = function (e) {
                var n = e.text;
                $(t.contClassName).html(s()({"text": n}))
            }, t
        }());
        r.contClassName = ".invoice-service-cont"
    }, "354": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return I
        });
        var a = n(64), o = n.n(a), i = n(422), s = n.n(i), r = n(503), c = (n.n(r), n(500)), l = (n.n(c), n(34)),
            d = n(90), u = (n.n(d), n(24)), p = (n.n(u), n(135)), h = n(96), m = n(156), f = l["a"].queryStrings(),
            g = (f.isCallCenter, n(136).renderFenxiOrderFill), v = (p["a"].getProductCalendar, p["a"].getUnitCalendar),
            y = p["a"].getOrderForm, _ = p["a"].getProducts, b = {
                "addBookingCountOpts": function () {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = $("#room-num"), n = "", a = 1; a <= t; a++) n += '<option value="' + a + '">' + a + "套</option>";
                    e.append(n)
                }, "addPeopleOpts": function () {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = $("#customer-num"), a = "", o = 1; o <= t + e; o++) a += '<option value="' + o + '">' + o + "人</option>";
                    n.append(a)
                }, "initNumArr": function (t, e) {
                    for (var n = []; t <= e;) n.push(t++);
                    return n
                }
            }, T = {
                "anchor": ".check-date-main #check-date",
                "parent": ".canlendar-cont",
                "cacheTxt": "",
                "instance": null,
                "isRunYear": function (t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                },
                "eachMonthDays": function (t) {
                    var e = {}, n = new Date, a = n.getFullYear(), o = n.getMonth(),
                        i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], s = 0;
                    this.isRunYear(a) && (i[1] = 29);
                    for (var r = 0; 0 == t[s] || 1 == t[s];) {
                        var c = new Date, l = (c.getMonth() + 1 + r) % 13;
                        c.getMonth() + 1 + r > 12 && (l = (c.getMonth() + 1 + r) % 13 + 1), e[l] = {};
                        for (var d = i[(o + r) % 12], u = 0; u < d && s < t.length; u++) e[l][u] = t[s++];
                        r++
                    }
                    return e
                },
                "rangeTrigger": function (t, e) {
                    if ($(T.anchor).val(u["CalUtil"].formatRange.apply(u["CalUtil"], t)), e instanceof Date) {
                        if (null == T) return void (C = e);
                        T.setBaseDay(e), T.clearSelectionRange()
                    }
                },
                "getDays": function (t, e) {
                    var n = new Date(e).getTime() - new Date(t).getTime();
                    return parseInt(n / 864e5)
                }
            }, C = null, I = function () {
                function t(e, n) {
                    o()(this, t), this._parent = n, this.data = this.handlePageDataToViewData(e), this.mount(), this.bindEvent()
                }

                return t.prototype.mount = function () {
                    $(t.contClassName).html(s()(this.data)), $(t.contClassName + " select").niceSelect()
                }, t.prototype.update = function (t) {
                    this.data = this.handlePageDataToViewData(t), this.mount()
                }, t.prototype.handlePageDataToViewData = function (t) {
                    var e = t.orderData, n = t.createOrderData;
                    t.guests;
                    return {
                        "checkInDate": n.bookingInfo.checkInDate,
                        "checkOutDate": n.bookingInfo.checkOutDate,
                        "checkInReceptionTime": e.houseInfo.checkInReceptionTime,
                        "days": T.getDays(n.bookingInfo.checkInDate, n.bookingInfo.checkOutDate),
                        "bookingCount": parseInt(n.bookingInfo.bookingCount) || 1,
                        "totalDepositAmount": (e.houseInfo.deposit && e.houseInfo.deposit.depositAmount) * n.bookingInfo.bookingCount || 0,
                        "stock": e.productInfo.stock,
                        "depositFree": e.houseInfo.deposit.supportCredit,
                        "peopleCount": n.bookingInfo.bookingCount || 1,
                        "peopleCountRange": b.initNumArr(n.bookingInfo.bookingCount, e.houseInfo.recommendedGuests * n.bookingInfo.bookingCount),
                        "bookingCountRange": b.initNumArr(1, e.productInfo.stock),
                        "faseBooking": e.houseInfo.fastBooking,
                        "onlineDeposit": e.houseInfo.deposit.onlineDeposit,
                        "noPayDeposit": e.houseInfo.deposit.supportCredit
                    }
                }, t.prototype.bindEvent = function () {
                    var e = this;
                    $("" + t.contClassName).on("click", "" + T.anchor, function (t) {
                        v({"unitId": f.unitId}).then(function (t) {
                            var n = T.eachMonthDays(t.checkIn);
                            if (!T.instance) {
                                T.instance = new d["CalWidget"]({
                                    "parent": $(T.parent),
                                    "anchor": $(T.anchor),
                                    "disableDayAfter": u["CalUtil"].makeDisableDateEnd(),
                                    "onSingleDay": function (t, e, a) {
                                        var o = a.getMonth() + 1, i = void 0;
                                        return i = 12 * (a.getFullYear() - new Date(Date.now()).getFullYear()) + a.getMonth() - new Date(Date.now()).getMonth() < 12 ? n[o] && n[o][t - 1] || null : null, i ? null : "t-cal-single-day"
                                    },
                                    "onRangeSelectionPrepare": function () {
                                        var t = $(T.anchor).val();
                                        "选择入离店日期" != t && (T.cacheTxt = $(T.anchor).val(), $(T.anchor).val("选择入离店日期"))
                                    },
                                    "onRangeSelectionCancel": function () {
                                        $(T.anchor).val(T.cacheTxt)
                                    },
                                    "onRangeSelection": function (t, n) {
                                        $(T.anchor).val(u["CalUtil"].formatRange(t, n)), e.data.checkInDate = u["CalUtil"].toConYYMMDD(t), e.data.checkOutDate = u["CalUtil"].toConYYMMDD(n), h["a"].trigger("bookingInfo", e._parent._createOrderData, {
                                            "checkInDate": e.data.checkInDate,
                                            "checkOutDate": e.data.checkOutDate
                                        }), _({
                                            "checkInDate": e._parent._createOrderData.bookingInfo.checkInDate,
                                            "checkOutDate": e._parent._createOrderData.bookingInfo.checkOutDate,
                                            "unitId": e._parent._createOrderData.houseProductInfo.houseId,
                                            "activityInfo": e._parent._createOrderData.houseProductInfo.activityInfo || "null" == e._parent._createOrderData.houseProductInfo.activityInfo ? null : e._parent._createOrderData.houseProductInfo.activityInfo && e._parent._createOrderData.houseProductInfo.activityInfo.split("-")[0],
                                            "callCenter": e._parent._createOrderData.callCenter
                                        }).then(function (t) {
                                            if (t && t.products && t.products.length > 0) {
                                                var n = t.products[0];
                                                n.productId != e._parent._createOrderData.houseProductInfo.productId ? (e._parent._createOrderData.houseProductInfo.productId = n.productId, e._parent._createOrderData.houseProductInfo.activityInfo = n.activityInfo, window.tjAlert({
                                                    "content": "请注意，每晚房价可能发生变化",
                                                    "cancel": "",
                                                    "mask": !0,
                                                    "callback": function () {
                                                        e.updateOrderFormWithCheckDate(e._parent)
                                                    }
                                                })) : e.updateOrderFormWithCheckDate(e._parent)
                                            }
                                        })
                                    }
                                }), T.instance.install(), C && (T.instance.setBaseDay(C), T.instance.clearSelectionRange(), C = null)
                            }
                            T.instance.show()
                        })["catch"](function (t) {
                            alert("日历加载错误")
                        })
                    }), $(t.contClassName).on("change", "select", function () {
                        switch ($(this)[0].name) {
                            case"room-num":
                                h["a"].trigger("bookingInfo", e._parent._createOrderData, {"bookingCount": $(this).val()});
                                var t = e._parent._orderData.houseInfo.recommendedGuests * e._parent._createOrderData.bookingInfo.bookingCount;
                                Math.min(e.data.peopleCount, t) == t && (e.data.peopleCount = t, h["a"].trigger("bookingInfo", e._parent._createOrderData, {"peopleCount": e.data.peopleCount})), e.udpateOrderFormWithBookingCout(e._parent);
                                break;
                            case"customer-num":
                                e.data.peopleCount = $(this).val(), h["a"].trigger("bookingInfo", e._parent._createOrderData, {"peopleCount": e.data.peopleCount});
                                break;
                            default:
                                alert("系统错误")
                        }
                    })
                }, t.prototype.updateOrderFormWithCheckDate = function (t) {
                    var e = this;
                    t._createOrderData.tyingGoodsBookingItems = [], y(t._createOrderData).then(function (n) {
                        t._orderData = n, h["a"].trigger("totalAmount", e._parent._createOrderData, t._orderData.priceDetail.totalAmount), t.orderInfoCom.update({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData
                        }), 1 == t.cityTerritoryType && t.tyingGoodsCom.update({
                            "bookingCount": e._parent._createOrderData.bookingInfo.bookingCount,
                            "checkInDate": e._parent._createOrderData.bookingInfo.checkInDate,
                            "checkOutDate": e._parent._createOrderData.bookingInfo.checkOutDate,
                            "peopleCount": e._parent._createOrderData.bookingInfo.peopleCount,
                            "unitId": e._parent._orderData.houseInfo.houseId
                        }), t.virtualPayCom.update(t._orderData), t.unsubscribeRuleCom.update(t._orderData), t.sideBarCom.update({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData,
                            "virtualPayData": t.virtualPayCom.data
                        }), g(t._orderData.houseInfo.houseId, e._parent._createOrderData.bookingInfo.bookingCount * e.data.days, t._orderData.priceDetail.totalAmount)
                    })["catch"](function (t) {
                        n.i(m["a"])(t, f.unitId, !1)
                    })
                }, t.prototype.udpateOrderFormWithBookingCout = function (t) {
                    var e = this;
                    y(t._createOrderData).then(function (n) {
                        t._orderData = n, h["a"].trigger("totalAmount", e._parent._createOrderData, t._orderData.priceDetail.totalAmount), t.orderInfoCom.update({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData
                        }), 1 == t.cityTerritoryType && t.insuranceCom.updateForContact({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData,
                            "guests": t._contactMen
                        }), t.virtualPayCom.update(t._orderData), t.sideBarCom.update({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData,
                            "virtualPayData": t.virtualPayCom.data
                        }), g(t._orderData.houseInfo.houseId, e._parent._createOrderData.bookingInfo.bookingCount * e.data.days, t._orderData.priceDetail.totalAmount)
                    })["catch"](function (t) {
                        n.i(m["a"])(t, f.unitId, !1)
                    })
                }, t
            }();
        I.contClassName = ".orderinfo-cont"
    }, "355": function (t, e, n) {
        "use strict";

        function a(t) {
            return $(".verify-popup").on("click", ".code-verify-btn", function () {
                var t = void 0;
                l(window.tjGlobal.userInfo.mobile).then(function () {
                    var e = 120;
                    $(".verify-popup .code-verify-btn").hide(), $(".code-verify-btn2").html("120s后重新获取"), $(".verify-popup .code-verify-btn2").show(), t = setInterval(function () {
                        e > 0 ? $(".verify-popup .code-verify-btn2").html(e-- + "s后重新获取") : (clearInterval(t), $(".verify-popup .code-verify-btn").show(), $(".verify-popup .code-verify-btn2").hide())
                    }, 1e3)
                })["catch"](function () {
                })
            }), $(".verify-popup").on("click", ".code-close-style", function (t) {
                $(t.target).html(""), window.location.reload(!0)
            }), $(".verify-popup").on("click", ".code-submit-btn", function (e) {
                var n = $(e.delegateTarget).find(".code-input-box").val();
                n.trim().length && (r["a"].trigger("code", t._createOrderData, n), t.doSubmit())
            }), {
                "show": function () {
                    $(".verify-popup").html(s()({"userMobile": window.tjGlobal.userInfo.mobile.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")}))
                }, "hide": function () {
                    $(".verify-popup").html("")
                }
            }
        }

        e["a"] = a;
        var o = n(504), i = (n.n(o), n(423)), s = n.n(i), r = n(96), c = n(135), l = c["a"].sendVoiceValidateCode
    }, "356": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return p
        });
        var a = n(64), o = n.n(a), i = n(425), s = n.n(i), r = n(424), c = n.n(r), l = n(505), d = (n.n(l), n(96)),
            u = n(125), p = function () {
                function t(e, n) {
                    o()(this, t), this._parent = n, this.data = this.handlePageDataToViewData(e), this.mount(), this.bindEvent()
                }

                return t.prototype.mount = function () {
                    $(t.contClassName).html(s()(this.data)), $(t.contClassName + " select").niceSelect(), $(".msg-unit-prompt").powerFloat({
                        "offsets": {
                            "x": -90,
                            "y": -10
                        }, "position": "7", "edgeAdjust": !1
                    }), 3 == $(t.contClassName).find("select").val() ? $(t.contClassName + " .msg-unit-prompt").show() : $(t.contClassName + " .msg-unit-prompt").hide()
                }, t.prototype.handlePageDataToViewData = function (t) {
                    var e = t.orderData, a = (t.createOrderData, t.guests), o = void 0 === a ? [] : a, i = {
                        "allowForeign": !!e.houseInfo.allowForeign,
                        "selectedIndex": -1,
                        "guest": {},
                        "contactMen": e.houseInfo.allowForeign ? o : n.i(u["j"])(o),
                        "certTypeData": n.i(u["a"])(e.houseInfo.allowForeign) || {},
                        "cityTerritoryType": e.houseInfo.cityTerritoryType
                    };
                    return i.contactMen && i.contactMen.length && 1 == e.houseInfo.cityTerritoryType ? (i.guest = {
                        "cardNo": i.contactMen[0].ContactCardNumber,
                        "mobile": i.contactMen[0].ContactMobile,
                        "name": i.contactMen[0].ContactName,
                        "countryCode": i.contactMen[0].CountryCode,
                        "certType": i.contactMen[0].EnumContactCardType || 1,
                        "email": ""
                    }, i.selectedIndex = 0, d["a"].trigger("guests", this._parent._createOrderData, {
                        "cardNo": i.contactMen[0].ContactCardNumber,
                        "certType": i.contactMen[0].EnumContactCardType || 1,
                        "countryCode": i.contactMen[0].CountryCode,
                        "email": "",
                        "mobile": i.contactMen[0].ContactMobile,
                        "name": i.contactMen[0].ContactName
                    })) : (i.guest = {
                        "cardNo": "",
                        "certType": e.houseInfo.cityTerritoryType > 1 ? 3 : 1,
                        "countryCode": "86",
                        "email": "",
                        "mobile": "",
                        "name": ""
                    }, d["a"].trigger("guests", this._parent._createOrderData, i.guest)), i
                }, t.prototype.bindEvent = function () {
                    var e = this;
                    $(t.contClassName).on("click", ".show-more", function (t) {
                        $(t.currentTarget).hasClass("spread") ? ($(t.currentTarget).removeClass("spread"), $(t.currentTarget).children(".text").html("更多"), $(t.currentTarget).children(".vert-arrow").removeClass("active")) : ($(t.currentTarget).addClass("spread"), $(t.currentTarget).children(".text").html("收起"), $(t.currentTarget).children(".vert-arrow").addClass("active")), $(this).siblings(".passenger-opts-more").toggleClass("show")
                    }), $(t.contClassName).on("click", "input:checkbox", function (a) {
                        if ($(this).prop("checked")) {
                            $(t.contClassName).find("input:checkbox").not($(a.target)).prop("checked", ""), e.data.selectedIndex = $(t.contClassName + " input:checkbox").index($(this));
                            var o = e.data.contactMen[e.data.selectedIndex];
                            e.data.guest = {
                                "cardNo": o.ContactCardNumber,
                                "mobile": o.ContactMobile,
                                "name": o.ContactName,
                                "countryCode": o.CountryCode,
                                "certType": n.i(u["i"])(o.EnumContactCardType),
                                "email": ""
                            }, $(t.passengerCont).html(c()({
                                "guest": e.data.guest,
                                "certTypeData": e.data.certTypeData,
                                "selectedIndex": e.data.selectedIndex,
                                "contactMen": e.data.contactMen
                            })), 3 == $(t.contClassName).find("select").val() ? $(t.contClassName + " .msg-unit-prompt").show() : $(t.contClassName + " .msg-unit-prompt").hide(), $(t.contClassName + " select").niceSelect(), d["a"].trigger("guests", e._parent._createOrderData, {
                                "cardNo": o.ContactCardNumber,
                                "certType": n.i(u["i"])(o.EnumContactCardType),
                                "countryCode": "86",
                                "email": "",
                                "mobile": o.ContactMobile,
                                "name": o.ContactName
                            })
                        } else {
                            e.data.selectedIndex = "-1";
                            var i = e.data.guest = {
                                "cardNo": "",
                                "mobile": "",
                                "name": "",
                                "countryCode": 86,
                                "certType": e.data.cityTerritoryType > 1 ? 3 : 1,
                                "email": ""
                            };
                            $(t.passengerCont).html(c()({
                                "guest": e.data.guest,
                                "certTypeData": e.data.certTypeData,
                                "selectedIndex": e.data.selectedIndex,
                                "contactMen": e.data.contactMen
                            })), $(t.contClassName + " select").niceSelect(), d["a"].trigger("guests", e._parent._createOrderData, {
                                "cardNo": i.cardNo,
                                "certType": i.certType || 1,
                                "countryCode": "86",
                                "email": "",
                                "mobile": i.mobile,
                                "name": i.name
                            })
                        }
                    }), n.i(u["k"])($(t.contClassName)[0], function (n) {
                        var a = e.data.guest;
                        $(n.target).hasClass("passenger-name") ? (e.data.guest.name = $(n.target).val(), -1 != e.data.selectedIndex && ($(t.contClassName + " input:checkbox").eq(e.data.selectedIndex).attr("checked", !1), e.data.selectedIndex = -1), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": "",
                            "mobile": a.mobile,
                            "name": a.name
                        })) : $(n.target).hasClass("passenger-tel") ? (e.data.guest.mobile = $(n.target).val(), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": "",
                            "mobile": a.mobile,
                            "name": a.name
                        })) : $(n.target).hasClass("passenger-cert") ? (e.data.guest.cardNo = $(n.target).val(), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": "",
                            "mobile": a.mobile,
                            "name": a.name
                        })) : $(n.target).hasClass("passenger-first-name") ? (e.data.guest.name = $(n.target).val() + " " + (e.data.guest.name.split(" ")[1] || ""), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": a.email,
                            "mobile": a.mobile,
                            "name": a.name
                        })) : $(n.target).hasClass("passenger-last-name") ? (e.data.guest.name = e.data.guest.name.split(" ")[0] + " " + $(n.target).val(), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": a.email,
                            "mobile": a.mobile,
                            "name": a.name
                        })) : $(n.target).hasClass("passenger-email") && (e.data.guest.email = $(n.target).val(), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": a.email,
                            "mobile": a.mobile,
                            "name": a.name
                        }))
                    }), $(t.contClassName).on("change", function (t) {
                        var n = $(t.target), a = e.data.guest;
                        n.hasClass("passenger-first-name") ? (n[0].value = n.val().toUpperCase(), e.data.guest.name = n.val().toUpperCase() + " " + e.data.guest.name.split(" ")[1] || "", d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": a.email,
                            "mobile": a.mobile,
                            "name": a.name
                        })) : n.hasClass("passenger-last-name") && (n[0].value = n.val().toUpperCase(), e.data.guest.name = e.data.guest.name.split(" ")[0] + " " + n.val().toUpperCase(), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": a.cardNo,
                            "certType": a.certType || 1,
                            "countryCode": "86",
                            "email": a.email,
                            "mobile": a.mobile,
                            "name": a.name
                        }))
                    }), $(t.contClassName).on("change", '[name="cert-type"]', function () {
                        switch ($(this).val()) {
                            case"1":
                            case"2":
                                $(t.contClassName + " .msg-unit-prompt").hide();
                                break;
                            case"3":
                                $(t.contClassName + " .msg-unit-prompt").show()
                        }
                        var n = e.data.guest;
                        n.certType = $(this).val(), d["a"].trigger("guests", e._parent._createOrderData, {
                            "cardNo": n.cardNo,
                            "certType": n.certType,
                            "countryCode": "86",
                            "email": "",
                            "mobile": n.mobile,
                            "name": n.name
                        })
                    })
                }, t.prototype.updateForContact = function (t) {
                    var e = t.orderData, n = t.createOrderData, a = t.guests;
                    this.data = this.handlePageDataToViewData({
                        "orderData": e,
                        "createOrderData": n,
                        "guests": a
                    }), this.mount()
                }, t
            }();
        p.contClassName = ".passenger-info", p.passengerCont = ".create-passenger"
    }, "357": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return d
        });
        var a = n(64), o = n.n(a), i = n(426), s = n.n(i), r = n(506), c = (n.n(r), n(125), n(96), n(34)),
            l = "true" === c["a"].queryStrings().isCallCenter, d = function () {
                function t(e, n) {
                    o()(this, t), this._parent = n, this.data = this.handlePageDataToViewData(e), this.mount(), this.bindEvent()
                }

                return t.prototype.update = function (t) {
                    this.data = this.handlePageDataToViewData(t), this.mount()
                }, t.prototype.mount = function () {
                    $(t.contClassName).html(s()(this.data)), $(".icon-house-fee-tips").powerFloat({
                        "offsets": {
                            "x": 10,
                            "y": -5
                        }, "eventType": "hover", "reverseSharp": !0, "position": "7-5"
                    }), $(".icon-deposit-free-tips").powerFloat({
                        "offsets": {"x": 0, "y": -5},
                        "eventType": "hover",
                        "reverseSharp": !0,
                        "position": "7-5"
                    })
                }, t.prototype.handlePageDataToViewData = function (t) {
                    function e(t, e) {
                        return t + "-" + (e < 10 ? "0" + e : e)
                    }

                    var n = t.orderData, a = t.createOrderData, o = t.virtualPayData, i = {
                            "houseInfoData": {
                                "houseName": n.houseInfo.houseName,
                                "defaultPictureURL": n.houseInfo.defaultPictureURL,
                                "url": window.tjGlobal.host.TUJIA_HOST + "/unitdetail?unitId=" + n.houseInfo.houseId,
                                "houseResource": n.houseInfo.houseSummary.split("|")[0],
                                "houseSummary": n.houseInfo.houseSummary.slice(n.houseInfo.houseSummary.indexOf("|") + 1),
                                "recommendedGuests": n.houseInfo.recommendedGuests,
                                "isCallCenter": l
                            },
                            "orderInfoData": {
                                "onlineDeposit": n.houseInfo.deposit.onlineDeposit || !1,
                                "supportCredit": n.houseInfo.deposit.supportCredit || !1,
                                "depositAmount": n.houseInfo.deposit.depositAmount || 0,
                                "merchantSubsidy": n.promotion && n.promotion.merchantSubsidy,
                                "virtualPays": o || {},
                                "totalFee": n.priceDetail.needPayAmount,
                                "amount": n.priceDetail.totalAmount || 0,
                                "tyingGoodsBookingItems": a.tyingGoodsBookingItems,
                                "bookingCount": a.bookingInfo.bookingCount
                            }
                        }, s = Date.parse(a.bookingInfo.checkInDate), r = Date.parse(a.bookingInfo.checkOutDate),
                        c = function (t) {
                            var e = {};
                            return t.forEach(function (t, n) {
                                1 === t.costSummaryType && (e = t)
                            }), e
                        }(n.priceDetail.items);
                    return i.orderInfoData.amount = c.totalAmount, i.orderInfoData.dailyPrices = function (t, n, a) {
                        for (var o = [], i = {
                            "0": "星期日",
                            "1": "星期一",
                            "2": "星期二",
                            "3": "星期三",
                            "4": "星期四",
                            "5": "星期五",
                            "6": "星期六"
                        }, s = 0, r = a.length; s < r; s++) {
                            var c = new Date(t + 864e5 * s);
                            o.push({"date": e(c.getMonth() + 1, c.getDate()), "day": i[c.getDay()], "price": a[s]})
                        }
                        return o
                    }(s, r, n.productInfo.dailyPrices), i
                }, t.prototype.bindEvent = function () {
                }, t
            }();
        d.contClassName = ".order-aside"
    }, "358": function (t, e, n) {
        "use strict";

        function a(t, e, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, i = J.getDailyPrice(t, a),
                s = J.getSelectedNum(t.minCount, o, i.inventory), r = J.filterUnavailableDailyPrices(t),
                c = Math.min(Math.min(i.inventory, t.maxCount), 9), l = J.initNumArr(t.minCount, c), d = function (t) {
                    var e = [];
                    return t.find(".customer-info").each(function (t, n) {
                        e.push({
                            "name": $(n).find('input[name="name"]').val(),
                            "certType": $(n).find('select[name="cert"]').val(),
                            "certNo": $(n).find('input[name="cert-number"]').val()
                        })
                    }), e
                }(n);
            return {
                "selectedNum": s,
                "selectedNumArr": J.initNumArr(1, s),
                "userInput": d,
                "numArr": l,
                "selectedDailyPrice": i,
                "availableDailyPrices": r,
                "certTypeData": e
            }
        }

        function o(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = t.dailyPrice[0],
                a = Math.min(Math.min(n.inventory, t.maxCount), 9), o = J.initNumArr(t.minCount, a);
            return {"selectedNum": J.getSelectedNum(t.minCount, e, n.inventory), "numArr": o, "price": n.amount}
        }

        function i(t, e) {
            var a = t.find(".item-edit"), o = t.attr("data-productId"), i = a.find('select[name="ticket-num"]').val(),
                s = a.find('select[name="date"]').val(), r = e.dailyPrice.find(function (t, e) {
                    return t.day == s
                }).amount, c = e.name, l = e.type, d = [];
            return a.find(".customer-info").each(function () {
                d.push({
                    "name": $(this).find('input[name="name"]').val(),
                    "idType": n.i(m["i"])($(this).find('select[name="cert-type"]').val()),
                    "idNumber": $(this).find('input[name="cert-number"]').val()
                })
            }), {"tyingGoodsId": o, "count": i, "date": s, "amount": r, "contactList": d, "name": c, "type": l}
        }

        function s(t, e) {
            var n = t.find(".item-edit"), a = t.attr("data-productId"), o = e.dailyPrice[0], i = n.find(".count").val(),
                s = n.find('input[name="addressee"]').val(), r = n.find('input[name="tel"]').val(),
                c = n.find('input[name="city"]').val(), l = n.find('input[name="address"]').val(), d = e.name,
                u = e.type;
            return {
                "amount": o.amount,
                "count": i,
                "customerInvoices": {"address": l, "city": c, "mobile": r, "receiver": s},
                "tyingGoodsId": a,
                "name": d,
                "type": u
            }
        }

        function r(t) {
            function e() {
                return arguments.length > 2 ? e(arguments[0], e(Array.prototype.slice.call(arguments, 1))) : arguments[0].concat(arguments[1])
            }

            return e(t.addedTicketDetailList, t.addedGiftDetailList)
        }

        n.d(e, "a", function () {
            return E
        });
        var c = n(64), l = n.n(c), d = n(135), u = n(34), p = n(96), h = n(249), m = n(125), f = n(156), g = n(508),
            v = (n.n(g), n(507)), y = (n.n(v), n(501)), _ = (n.n(y), n(432)), b = n.n(_), T = n(429), C = n.n(T),
            I = n(430), w = n.n(I), D = n(418), k = n.n(D), O = n(419), S = n.n(O), x = n(431), A = n.n(x), j = n(428),
            M = n.n(j), N = n(427), U = n.n(N), P = d["a"].getTyingGoodsForm, H = d["a"].getOrderForm,
            F = d["a"].getTyingGoodsInfo, R = u["a"].queryStrings(), E = function () {
                function t(e, a) {
                    var o = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], s = arguments[3];
                    l()(this, t), this._parent = e, this.taskQueue = [];
                    var r = u["a"].queryStrings(), c = this;
                    P({
                        "bookingCount": r.bookingCount || 1,
                        "checkInDate": r.startDate,
                        "checkOutDate": r.endDate,
                        "peopleCount": r.peopleCount || 1,
                        "unitId": r.unitId
                    }).then(function (e) {
                        c.tyingGoodsInterData = e, c.data = c.handlePageDataToViewData(e, n.i(m["a"])(null, !0), i, s), c.taskQueue.forEach(function (t) {
                            t.call(c)
                        }), c.mount(), c.bindEvent(), c.addValidators(), $(t.contClassName).append(M()({"contactMen": o.data.contactMen}))
                    })["catch"](function (t) {
                    })
                }

                return t.prototype.subscribe = function (t) {
                    switch (t) {
                        case"update":
                            this.taskQueue.push(function () {
                                this.updateForContact(this.tyingGoodsInterData, this.data.certTypeData, this.contactMen)
                            })
                    }
                }, t.prototype.update = function (e) {
                    var a = this, o = e.bookingCount, i = e.checkInDate, s = e.checkOutDate, r = e.peopleCount,
                        c = e.unitId;
                    P({
                        "bookingCount": o,
                        "checkInDate": i,
                        "checkOutDate": s,
                        "peopleCount": r,
                        "unitId": c
                    }).then(function (e) {
                        a.tyingGoodsInterData = e, a.data = a.handlePageDataToViewData(e, n.i(m["a"])(null, !0), a.data.contactMen, a.data.allowForeign), a.mount(), a.addValidators(), $(".ticket-user-popup").length || $(t.contClassName).append(M()({"contactMen": a.data.contactMen}))
                    })["catch"](function (t) {
                    })
                }, t.prototype.handlePageDataToViewData = function (t, e) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return {
                        "allowForeign": arguments[3],
                        "giftDetailList": t.tyingGoodsForms.giftDetailList || [],
                        "ticketDetailList": t.tyingGoodsForms.ticketDetailList || [],
                        "addedGiftDetailList": [],
                        "addedTicketDetailList": [],
                        "certTypeData": n.i(m["a"])(null, !0),
                        "contactMen": n.i(m["g"])(a)
                    }
                }, t.prototype.mount = function () {
                    $(t.contClassName).html(b()(this.data))
                }, t.prototype.bindEvent = function () {
                    var e = this;
                    $(t.contClassName).on("click", ".ticket-service-cont", function (t) {
                        var o = $(t.target), s = $(t.currentTarget);
                        if (o.hasClass("submit")) {
                            if (e.ticketValidators.filter(function (t) {
                                return t.domContext.match(/[1-9]\d{1,}/g) == $(s).attr("data-productid")
                            })[0].validateForm()) {
                                var c = i(s, e.data.ticketDetailList[s.attr("data-index")]);
                                e.data.addedTicketDetailList.push(c), $(s).children(".item-view-cont").append(w()(c)), p["a"].trigger("updateTyingGoods", e._parent._createOrderData, r(e.data)), $(s).children(".item-edit-cont").html(""), e.updateOrderFee(e._parent), $(s).removeClass("edit-ing"), $(s).find(".item-spread").hide()
                            }
                        } else if (o.hasClass("cancel")) o.parents(".tyinggoods-item").removeClass("edit-ing"), $(s).find(".item-spread").hide(), $(s).children(".item-edit-cont").html(""), $(s).find(".add-item-btn").show(); else if (o.hasClass("add-item-btn")) o.parents(".tyinggoods-item").hasClass("edit-ing") || (o.parents(".tyinggoods-item").addClass("edit-ing"), $(s).children(".item-edit-cont").html(C()(a(e.data.ticketDetailList[$(this).attr("data-index")], n.i(m["a"])(null, !0), o))), $(s).find("select").niceSelect(), $(o).hide()); else if (o.hasClass("delete")) {
                            var l = -1;
                            e.data.addedTicketDetailList.forEach(function (t, e) {
                                s.attr("data-productid") == t.tyingGoodsId && (l = e)
                            }), e.data.addedTicketDetailList.splice(l, 1), p["a"].trigger("updateTyingGoods", e._parent._createOrderData, r(e.data)), $(s).children(".item-view-cont").html(""), e.updateOrderFee(e._parent), $(s).find(".add-item-btn").show()
                        }
                    }), $(t.contClassName).on("change", ".ticket-service-cont", function (t) {
                        var o = $(t.target), i = $(t.currentTarget), s = o.val(),
                            r = o.parents("label.date").siblings("label.num").children("select").val();
                        switch (o.prop("name")) {
                            case"date":
                                var c = o.parents(".tyinggoods-item").attr("data-productid"),
                                    l = e.data.ticketDetailList.filter(function (t, e) {
                                        return t.productId == c
                                    })[0];
                                $(i).children(".item-edit-cont").html(C()(a(l, n.i(m["a"])(null, !0), i, s, r))), $(i).find("select").niceSelect();
                                break;
                            case"cert":
                            case"ticket-num":
                                var d = o.val(), u = o.parents(".ticket-info").siblings(".customer-info-list"),
                                    p = u.children(".customer-info").length;
                                if (d > p) {
                                    for (var h = 0; h < d - p; h++) u.append(U()({"certTypeData": n.i(m["a"])(null, !0)}));
                                    u.find("select").niceSelect()
                                } else if (d < p) for (var f = p - 1; f >= d; f--) u.find(".customer-info").eq(f).remove(), u.find(".validate-err-cont").eq(f).remove()
                        }
                    });
                    var c = -1, l = "";
                    $(t.contClassName).on("click", 'input[name="name"]', function (e) {
                        $(".ticket-user-popup").css({
                            "top": n.i(m["h"])($(e.target)[0]) - n.i(m["c"])($(t.contClassName)[0]),
                            "left": n.i(m["e"])($(e.target)[0]) - n.i(m["e"])($(t.contClassName)[0])
                        }), $(".ticket-user-popup").show(), c = $(e.target).parents(".ticket-service-cont").find(".customer-info").index($(e.srcElement).parents(".customer-info")), l = $(e.target).parents(".ticket-service-cont").attr("data-productid"), e.stopPropagation()
                    }), $(t.contClassName).on("click", ".ticket-user-popup li", function (n) {
                        var a = $(n.target).attr("data-id"), o = e.data.contactMen.filter(function (t, e, n) {
                            return t.ID == a
                        })[0];
                        o && function (t, e, n) {
                            var a = $('.ticket-service-cont[data-productid="' + e + '"] .customer-info').eq(t);
                            a.find('input[name="name"]').val(n.ContactName), a.find('input[name="cert-number"]').val(n.ContactCardNumber), a.find('select[name="cert-type"]').val(n.EnumContactCardType || 1), a.find('select[name="cert-type"]').niceSelect("update")
                        }(c, l, o), $(t.contClassName).find(".ticket-user-popup").hide()
                    }), $(t.contClassName).on("click", ".gift-service-cont", function (t) {
                        var n = $(t.target), a = $(t.currentTarget);
                        if (n.hasClass("submit")) {
                            if (e.giftValidators.filter(function (t) {
                                return t.domContext.match(/[1-9]\d{1,}/g) == $(a).attr("data-productid")
                            })[0].validateForm()) {
                                var i = s(a, e.data.giftDetailList[a.attr("data-index")]);
                                e.data.addedGiftDetailList.push(i), $(a).children(".item-view-cont").append(S()(i)), p["a"].trigger("updateTyingGoods", e._parent._createOrderData, r(e.data)), $(a).children(".item-edit-cont").html(""), e.updateOrderFee(e._parent), $(a).removeClass("edit-ing"), $(a).find(".item-spread").hide()
                            }
                        } else if (n.hasClass("cancel")) n.parents(".tyinggoods-item").removeClass("edit-ing"), $(a).find(".item-spread").hide(), $(a).children(".item-edit-cont").html(""), $(a).find(".add-item-btn").show(); else if (n.hasClass("add-item-btn")) n.parents(".tyinggoods-item").hasClass("edit-ing") || (n.parents(".tyinggoods-item").addClass("edit-ing"), $(a).children(".item-edit-cont").html(k()(o(e.data.giftDetailList[$(this).attr("data-index")]))), $(".edit-ing select").niceSelect(), $(a).find(".add-item-btn").hide()); else if (n.hasClass("delete")) {
                            var c = -1;
                            e.data.addedGiftDetailList.forEach(function (t, e) {
                                a.attr("data-productid") == t.tyingGoodsId && (c = e)
                            }), e.data.addedGiftDetailList.splice(c, 1), p["a"].trigger("updateTyingGoods", e._parent._createOrderData, r(e.data)), $(a).children(".item-view-cont").html(""), e.updateOrderFee(e._parent), $(a).find(".add-item-btn").show()
                        }
                    }), $(t.contClassName).on("click", ".tyinggoods-item", function (t) {
                        var e = $(t.target), a = $(t.currentTarget);
                        if (e.hasClass("show-detail")) {
                            var o = a.attr("data-productid");
                            o && F({"tyingGoodsId": o}).then(function (t) {
                                $("body").append(A()(t))
                            })["catch"](function (t) {
                                n.i(f["a"])(t, R.unitId)
                            })
                        }
                    }), $(document).on("click", ".tyinggood-detail-popup .close-btn", function (t) {
                        $(".tyinggood-detail-popup").remove(), $(".tyinggood-detail-mask").remove()
                    }), $(document).on("click", function (t) {
                        $(".t-layer-calendar ").hide(), $(".ticket-user-popup").hide(), $(".t-layer-calendar").hide()
                    })
                }, t.prototype.addValidators = function () {
                    var t = this, e = [{
                        "selector": 'input[name="name"]',
                        "rules": [{"rule": "minlength:1", "errMsg": "请输入1—20个字符的姓名"}, {
                            "rule": "maxlength:20",
                            "errMsg": "请输入1—20个字符的姓名"
                        }],
                        "errMsgSelector": ".name-err",
                        "posiContext": ".customer-info-list"
                    }, {
                        "selector": 'input[name="cert-number"]', "rules": [{
                            "rule": function (t) {
                                var e = $(t).val();
                                switch ($(t).siblings('select[name="cert-type"]').val()) {
                                    case"1":
                                        return n.i(h["b"])(e);
                                    case"2":
                                    case"3":
                                        return e.trim().length > 0
                                }
                            }, "errMsg": "请输入正确的证件号码"
                        }], "errMsgSelector": ".cert-err"
                    }];
                    this.ticketValidators = [], $(".ticket-service-cont").each(function (n) {
                        var a = $(this).attr("data-productid"),
                            o = new h["a"]('.ticket-service-cont[data-productid="' + a + '"]');
                        o.addValidate(e), t.ticketValidators.push(o)
                    });
                    var a = [{
                        "selector": 'input[name="addressee"]',
                        "rules": [{"rule": "minlength:1", "errMsg": "请输入1—20个字符的姓名"}, {
                            "rule": "maxlength:20",
                            "errMsg": "请输入1—20个字符的姓名"
                        }],
                        "errMsgSelector": ".name-err"
                    }, {
                        "selector": 'input[name="tel"]',
                        "rules": [{"rule": "tel", "errMsg": "请输入正确格式电话号码"}],
                        "errMsgSelector": ".cert-err"
                    }, {
                        "selector": 'input[name="city"]',
                        "rules": [{"rule": "minlength:2", "errMsg": "请输入2-20个字符的省市区信息"}, {
                            "rule": "maxlength:20",
                            "errMsg": "请输入2-20个字符的省市区信息"
                        }],
                        "errMsgSelector": ".city-err"
                    }, {
                        "selector": 'input[name="address"]',
                        "rules": [{"rule": "minlength:6", "errMsg": "请输入6-200个字符的详细地址"}, {
                            "rule": "maxlength:200",
                            "errMsg": "请输入6-200个字符的详细地址"
                        }],
                        "errMsgSelector": ".address-err"
                    }];
                    this.giftValidators = [], $(".gift-service-cont").each(function (e) {
                        var n = $(this).attr("data-productid"),
                            o = new h["a"]('.gift-service-cont[data-productid="' + n + '"]');
                        o.addValidate(a), t.giftValidators.push(o)
                    })
                }, t.prototype.updateOrderFee = function (t) {
                    var e = this;
                    H(t._createOrderData).then(function (n) {
                        t._orderData = n, p["a"].trigger("totalAmount", e._parent._createOrderData, t._orderData.priceDetail.totalAmount), p["a"].trigger("promotion", e._parent._createOrderData, t._orderData.promotion), t.virtualPayCom.update(t._orderData), t.sideBarCom.update({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData,
                            "virtualPayData": t.virtualPayCom.data
                        })
                    })["catch"](function (t) {
                        n.i(f["a"])(t, R.unitId, !1)
                    })
                }, t.prototype.updateForContact = function (t, e, n) {
                    this.data = this.handlePageDataToViewData(t, e, n), this.mount()
                }, t
            }();
        E.contClassName = ".tyinggoods-info";
        var J = {
            "getDailyPrice": function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return e ? t.dailyPrice.find(function (t, n) {
                    return t.day == e
                }) : t.dailyPrice.find(function (t, e) {
                    return t.inventory > 0
                })
            }, "getSelectedNum": function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = arguments[2];
                return e || Math.min(t, n)
            }, "filterUnavailableDailyPrices": function (t) {
                return t.dailyPrice.filter(function (t, e) {
                    return t.inventory > 0
                })
            }, "initNumArr": function (t, e) {
                for (var n = []; t <= e;) n.push(t++);
                return n
            }
        }
    }, "359": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var a = n(64), o = n.n(a), i = n(433), s = n.n(i), r = n(509), c = (n.n(r), function () {
            function t(e, n) {
                o()(this, t), n.unsubscribeRuleCom = this, this.data = this.handlePageDataToViewData(e), this.mount()
            }

            return t.prototype.mount = function () {
                this.data.rule, $(t.contClassName).html(s()(this.data))
            }, t.prototype.update = function (t) {
                this.data = this.handlePageDataToViewData(t), this.mount()
            }, t.prototype.handlePageDataToViewData = function (t) {
                var e = t.bookingRule;
                if (e && e.cancelRules) {
                    var n = {"2": 2, "3": 3};
                    e.status = n["" + e.cancelRules.length]
                } else e.status = 1;
                return console.log(t.houseInfo.fastBooking), e.fastBooking = t.houseInfo.fastBooking, e
            }, t
        }());
        c.contClassName = ".unsubscribe-rule-cont"
    }, "36": function (t, e, n) {
        !function () {
            $.ajaxSetup({
                "dataFilter": function (t) {
                    return t && (t.indexOf("wafcode") > -1 || t.indexOf("monitorcode") > -1) && (t = JSON.parse(t), 999 !== t.wafcode && 998 !== t.wafcode || t.data && t.data.redirectURL && (window.location.href = t.data.redirectURL), 999 === t.monitorcode && (window.location.href = "https://m.tujia.com/pwa/verify_code?returnurl=" + encodeURIComponent(window.location.href) + "&host=" + t.host)), t
                }
            }), $.ajax()
        }()
    }, "360": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return m
        });
        var a = n(64), o = n.n(a), i = n(434), s = n.n(i), r = n(510), c = (n.n(r), n(135)), l = n(156), d = n(96),
            u = n(34), p = c["a"].getCalulateorderprice, h = u["a"].queryStrings(), m = function () {
                function t(e, n) {
                    o()(this, t), this._parent = n, this.data = this.handlePageDataToViewData(e), this.mount(), $(t.contClassName + " select").niceSelect(), this.bindEvent()
                }

                return t.prototype.update = function (t) {
                    this.data = this.handlePageDataToViewData(t), this.mount()
                }, t.prototype.mount = function () {
                    $(t.contClassName).html(s()(this.data)), $(t.contClassName + " select").niceSelect()
                }, t.prototype.handlePageDataToViewData = function (t) {
                    var e = t.promotion;
                    return e.totalFee = t.priceDetail.totalAmount || 0, t.promotion && t.promotion.items && (e.hasPromotion = !0, e.totalPromotion = this._utilCalCulateTotalPromotion(t.promotion.items)), e
                }, t.prototype.bindEvent = function () {
                    var e = this;
                    $(t.contClassName).on("click", ".virtual-pay-item label", function (t) {
                        var n = $(this).parents(".virtual-pay-item").data("group"),
                            a = $(this).parents(".virtual-pay-item").data("type"),
                            o = $(this).children('input[type="checkbox"]').prop("checked"), i = $(this).attr("data-id");
                        i ? e._utilToggleSelected(e._parent, n, a, i, o) : e._utilToggleSelected(e._parent, n, a, null, o), $(t.target).is("input") && e.getPromotionForOrderForm(e._parent)
                    }), $(t.contClassName).on("change", 'select[name="red-packet"]', function () {
                        var t = $(this).val();
                        !t && e.data.selectedRedPacketKey ? e._utilToggleSelected(e._parent, 1, 30, e.data.selectedRedPacketKey, !1) : e._utilToggleSelected(e._parent, 1, 30, t, !0), e.getPromotionForOrderForm(e._parent)
                    })
                }, t.prototype._utilCalCulateTotalPromotion = function (t) {
                    for (var e = 0, n = t.length, a = 0; a < n; a++) t[a].select && (e += t[a].amount);
                    return e
                }, t.prototype._utilToggleSelected = function (t, e, n, a, o) {
                    t._orderData.promotion.items.forEach(function (t) {
                        var i = !1;
                        t.promoSourceType == n && 1 == e ? t.subItems ? (t.select = o, t.subItems.forEach(function (t) {
                            t.key == a ? t.select = o : t.key != a && t.select && (t.select = !1)
                        })) : t.select = o : 1 == e && o && 1 == t.group && (t.select = !1, t.subItems && t.subItems.forEach(function (t) {
                            t.select = !1
                        })), t.promoSourceType == n && 2 == e && (t.subItems && t.subItems.forEach(function (t) {
                            t.key == a ? t.select = o : t.key != a && t.select && (i = !0)
                        }), t.select = i || o)
                    })
                }, t.prototype.getPromotionForOrderForm = function (t) {
                    p({
                        "callCenter": t._createOrderData.callCenter,
                        "bookingInfo": t._createOrderData.bookingInfo,
                        "deposit": t._orderData.houseInfo.deposit,
                        "productInfo": t._orderData.productInfo,
                        "promotion": t._orderData.promotion,
                        "tyingGoodsBookingItems": t._createOrderData.tyingGoodsBookingItems
                    }).then(function (e) {
                        t._orderData.priceDetail = e.priceDetail, t._orderData.promotion = e.promotion, d["a"].trigger("promotion", t._createOrderData, t._orderData.promotion), t.virtualPayCom.update(t._orderData), t.sideBarCom.update({
                            "orderData": t._orderData,
                            "createOrderData": t._createOrderData,
                            "virtualPayData": t.virtualPayCom.data
                        })
                    })["catch"](function (t) {
                        n.i(l["a"])(t, h.unitId)
                    })
                }, t
            }();
        m.contClassName = ".benefit-info"
    }, "361": function (t, e, n) {
        "use strict";
        var a = n(126);
        n.n(a)
    }, "37": function (t, e) {
        function n(t) {
            if (t && !$.cookie("activitypopup")) {
                var e = t.htmlContent;
                $(e).appendTo($("body")), function () {
                    function t() {
                        if (console.log("cooooooookide,", $.cookie("activitypopup")), $("#j_tjdcpopup").length > 0 && !$.cookie("activitypopup")) {
                            var t = null;
                            window.ServerDomain && (t = window.ServerDomain), $.cookie("activitypopup", "1", {"domain": t});
                            var e, n, a, o;
                            if (e = $("#j_tjdcpopup"), 0 == e.length) return;
                            e.show(), n = '<div id="j_tjdc_mask"></div>', $("body").append(n), $("#j_tjdc_mask").css({
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
                            }), a = function () {
                                return $("#j_tjdcpopup").fadeOut("500", function () {
                                    return o()
                                }), $("#j_tjdc_mask").fadeOut()
                            }, o = function () {
                                return $("#j_tjdcpopup").remove(), $("#j_tjdc_mask").remove()
                            }, $("#j-tjdc-close").click(function () {
                                return a()
                            })
                        }
                    }

                    setTimeout(t, 1e3)
                }()
            }
        }

        function a(t) {
            if (t) {
                var e = '\n    <div id="J-ad-top" class="event-ad-fluid " style="height=48px">\n        <a href="' + t.titleLink + '" target="_blank" title="' + t.title + '" style="display:block;height:48px;background:url(' + t.pictureUrl + ') no-repeat top center">\n        </a>\n    </div>\n  ';
                $(e).insertBefore($(".g-page"))
            }
        }

        function o() {
            function t() {
                var t = setInterval(function () {
                    try {
                        if ("undefined" == typeof TJPFloating) return
                    } catch (t) {
                    }
                    TJPFloating.getPopHTML(n, e(document.referrer)), clearInterval(t)
                }, 100)
            }

            function e(t) {
                var e = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"), n = e.exec(t);
                return n ? n[1] : t
            }

            !function (t) {
                var e = document.createElement("script");
                e.type = "text/javascript", e.src = t, document.getElementsByTagName("head")[0].appendChild(e)
            }(function () {
                return window.tjGlobal.host.STATICFILE_TUJIA_HOST
            }() + "/PortalSite2/Scripts/UI/tjpfloating.js?" + function () {
                var t, e, n;
                return t = new Date, e = t.getMonth() + 1, n = t.getDate(), 10 > e && (e = "0" + e), 10 > n && (n = "0" + n), t.getFullYear().toString() + e + n
            }());
            var n = "";
            setTimeout(function () {
                t()
            }, 3e3)
        }

        e.initPopupAds = n, e.initTopAds = a, e.initBottomAds = o
    }, "38": function (t, e, n) {
        n(47), setTimeout(function () {
            n(45), n(46)
        }, 3e3)
    }, "39": function (t, e, n) {
        function a() {
            0 == s ? ($("#sbtnGetVerifyCode").removeAttr("disabled").val("获取动态密码"), s = 60) : ($("#sbtnGetVerifyCode").attr("disabled", !0).val("重新发送(" + s + ")"), s--, setTimeout(function () {
                a()
            }, 1e3))
        }

        n(48);
        var o = $("#tujia_page_navbar"), i = o.data("passport-tujia-host");
        $("#loginSubmit").bind("click", function () {
            if (!$("#account").val() || !$("#password").val()) return void $("#loginerrormsg").html("用户名或密码不能为空！").show();
            $("#loginSubmit").hide(), $("#loginSubmitIng").show(), $.ajax({
                "url": i + "/PortalSite/AjaxLogin/",
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
                            var e = $("div.j-logon-directorder > a").attr("href");
                            e ? window.location.href = e : window.location.reload()
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
            var t = i + "/PortalSite/VerifyImage/?r=" + Math.random();
            return $("#verifyImage").attr("src", t), !1
        }), window.qqLogin = function () {
            window.location = i + "/PortalSite/QQLogin?srcUrl=" + encodeURIComponent(this.location.href)
        }, window.sinaLogin = function () {
            window.location = i + "/PortalSite/SinaLogin?srcUrl=" + encodeURIComponent(this.location.href)
        }, window.wechatLogin = function () {
            window.location = i + "/PortalSite/WeChatLogin?srcUrl=" + encodeURIComponent(this.location.href)
        }, $("#sloginSubmit").click(function () {
            if (!$("#smobile").val() || !$("#spassword").val()) return void $("#sloginerrormsg").html("电话或短信验证码不能为空！").show();
            $("#sloginSubmit").hide(), $("#sloginSubmitIng").show(), $.ajax({
                "url": i + "/PortalSite/SmsAjaxLogin/",
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
                        var e = $("div.j-logon-directorder > a").attr("href");
                        e ? window.location.href = e : window.location.reload()
                    } else $("#sloginSubmit").show(), $("#sloginSubmitIng").hide(), $("#sloginerrormsg").html(t.Message).show()
                }
            })
        });
        var s = 60;
        $("#sbtnGetVerifyCode").click(function () {
            var t = $("#sverifycode");
            if (!$("#svalidatearea").hasClass("dn") && !t.val()) return void $("#sloginerrormsg").html("验证码不能为空！").show();
            var e = $("#smobile");
            return e.val() ? /^1\d{10}$/.test(e.val()) ? ($("#sloginerrormsg").html("正在发送验证码至你的手机，请稍等！").show(), void $.ajax({
                "url": i + "/PortalSite/SmsSendVerifyCode/",
                "data": {"smobile": e.val(), "sverifycode": t.val()},
                "type": "post",
                "dataType": "jsonp",
                "success": function (t) {
                    $("#sloginerrormsg").html(t.Message).show(), t.IsSuccess ? a() : $("#sverifyImageLink").click()
                }
            })) : void $("#sloginerrormsg").html("手机号不正确！").show() : void $("#sloginerrormsg").html("手机号不能为空！").show()
        }), $("#smobile,#spassword,#sverifycode").focus(function () {
            $(this).next().hide(), $("#sloginerrormsg").hide()
        }).blur(function () {
            "" == $.trim($(this).val()) && $(this).next().show()
        }), $("#saveUserLongTime").click(function () {
            this.checked ? $("#userExpiresHours").val(350) : $("#userExpiresHours").val("")
        }), $("#sverifyImage,#sverifyImageLink").click(function () {
            var t = i + "/PortalSite/VerifyImage/?r=" + Math.random();
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
    }, "391": function (t, e, n) {
        "use strict";
        var a = n(541);
        n.n(a);
        !function (t) {
            t.fn.niceSelect = function (e) {
                function n(e) {
                    e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                    var n = e.next(), a = e.find("option"), o = e.find("option:selected");
                    n.find(".current").html(o.data("display") || o.text()), a.each(function (e) {
                        var a = t(this), o = a.data("display");
                        n.find("ul").append(t("<li></li>").attr("data-value", a.val()).attr("data-display", o || null).addClass("option" + (a.is(":selected") ? " selected" : "") + (a.is(":disabled") ? " disabled" : "")).html(a.text()))
                    })
                }

                if ("string" == typeof e) return "update" == e ? this.each(function () {
                    var e = t(this), a = t(this).next(".nice-select"), o = a.hasClass("open");
                    a.length && (a.remove(), n(e), o && e.next().trigger("click"))
                }) : "destroy" == e ? (this.each(function () {
                    var e = t(this), n = t(this).next(".nice-select");
                    n.length && (n.remove(), e.css("display", ""))
                }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
                this.hide(), this.each(function () {
                    var e = t(this);
                    e.next().hasClass("nice-select") || n(e)
                }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function (e) {
                    var n = t(this);
                    t(".nice-select").not(n).removeClass("open"), n.toggleClass("open"), n.hasClass("open") ? (n.find(".option"), n.find(".focus").removeClass("focus"), n.find(".selected").addClass("focus")) : n.focus()
                }), t(document).on("click.nice_select", function (e) {
                    t(e.target).is("select") || 0 !== t(e.target).closest(".nice-select").length || t(".nice-select").removeClass("open").find(".option")
                }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (e) {
                    var n = t(this), a = n.closest(".nice-select");
                    a.find(".selected").removeClass("selected"), n.addClass("selected");
                    var o = n.data("display") || n.text();
                    a.find(".current").text(o), a.prev("select").val(n.data("value")).trigger("change")
                }), t(document).on("keydown.nice_select", ".nice-select", function (e) {
                    var n = t(this), a = t(n.find(".focus") || n.find(".list .option.selected"));
                    if (32 == e.keyCode || 13 == e.keyCode) return n.hasClass("open") ? a.trigger("click") : n.trigger("click"), !1;
                    if (40 == e.keyCode) {
                        if (n.hasClass("open")) {
                            var o = a.nextAll(".option:not(.disabled)").first();
                            o.length > 0 && (n.find(".focus").removeClass("focus"), o.addClass("focus"))
                        } else n.trigger("click");
                        return !1
                    }
                    if (38 == e.keyCode) {
                        if (n.hasClass("open")) {
                            var i = a.prevAll(".option:not(.disabled)").first();
                            i.length > 0 && (n.find(".focus").removeClass("focus"), i.addClass("focus"))
                        } else n.trigger("click");
                        return !1
                    }
                    if (27 == e.keyCode) n.hasClass("open") && n.trigger("click"); else if (9 == e.keyCode && n.hasClass("open")) return !1
                });
                var a = document.createElement("a").style;
                return a.cssText = "pointer-events:auto", "auto" !== a.pointerEvents && t("html").addClass("no-csspointerevents"), this
            }
        }(jQuery)
    }, "397": function (t, e) {
    }, "398": function (t, e) {
    }, "399": function (t, e) {
    }, "40": function (t, e, n) {
        function a(t) {
            o(t.qimoClientInfo), i(t.imConfig)
        }

        function o(t) {
            window.qimoClientId = t, window.isLogin = t && t.userId && "-544208800" != t.userId
        }

        function i(t) {
            window.apiUrl = t.apiUrl, window.customerUrl = t.vipUrl, window.imUrl = t.imUrl, window.portalUrl = t.portalUrl, window.ServerDomain = t.serverDomain, window.TUJIA_CLIENTID = t.tujiaClientId, window.vipUrl = t.vipUrl, window.ORDERNOTICE_RADIO = t.orderNoticeRadio, n.e(0).then(function (t) {
                n(43);
                console.log("jquery-ui loaded"), s(window.tjGlobal.host.PWASTATIC_TUJIA_HOST + "/static/im/pc/tujia_im_v3.js")
            }.bind(null, n)).catch(n.oe)
        }

        function s(t) {
            var e = document.createElement("script");
            e.async = 1, e.setAttribute("src", t), document.body.appendChild(e)
        }

        n(49);
        var r = $("#tujia_page_navbar");
        r.data("cnd-static");
        e.init = a, e.initQimo = o, e.initIm = i
    }, "400": function (t, e) {
    }, "401": function (t, e) {
    }, "41": function (t, e) {
        window.$.cookie = function (t, e, n) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(e)) || null === e || void 0 === e)) {
                if (n = $.extend({}, n, {"path": "/"}), null !== e && void 0 !== e || (n.expires = -1), "number" == typeof n.expires) {
                    var a = n.expires, o = n.expires = new Date;
                    o.setDate(o.getDate() + a)
                }
                return e = String(e), document.cookie = [encodeURIComponent(t), "=", n.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
            }
            n = e || {"path": "/"};
            for (var i, s = n.raw ? function (t) {
                return t
            } : decodeURIComponent, r = document.cookie.split("; "), c = 0; i = r[c] && r[c].split("="); c++) if (s(i[0]) === t) return s(i[1] || "");
            return null
        }
    }, "417": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$each, o = t.insurances, i = (t.insurance, t.index, a.$escape), s = t.certTypeData,
                r = (t.value, t.key, t.allowForeign), c = t.sexTypeData;
            return n(o, function (t, a) {
                e += '\n<div class="insured form-content" data-contact-id="', e += i(t.id), e += '">\n  <span class="line-title">\n    被保险人：\n  </span>\n  <label class="name-cont ">\n    \x3c!-- form-content  --\x3e\n    <span>姓名：</span>\n    <input type="text" name="insured-name" value="', e += i(t.userName), e += '">\n  </label>\n  <label class="cert-cont  clear content-box">\n    \x3c!-- form-content  --\x3e\n    <span>证件：</span>\n    <select name="cert-type">\n      ', n(s, function (n, a) {
                    e += " ", (r || 3 != a) && (e += '\n      <option value="', e += i(a), e += '" ', t.insuredCertiType == a && (e += ' selected="selected" '), e += ">", e += i(n), e += "</option>\n      "), e += " "
                }), e += '\n    </select>\n    <input type="text" name="cert-number" value="', e += i(t.insuredCertiNo), e += '">\n  </label>\n  <label class="sex-cont clear" ', 1 == t.insuredCertiType && (e += ' style="display: none" '), e += '>\n    <span>性别：</span>\n    <select name="sex">\n      ', n(c, function (n, a) {
                    e += '\n      <option value="', e += i(a), e += '" ', t.gender == a && (e += ' selected="selected" '), e += ">", e += i(n), e += "</option>\n      "
                }), e += '\n    </select>\n  </label>\n  <label class="birth-cont " ', 1 == t.insuredCertiType && (e += ' style="display: none" '), e += '>\n    \x3c!-- form-content  --\x3e\n    <span>生日：</span>\n    <input name="insured-birth" type="text" value="', e += i(t.birthDay), e += '" placeholder="YYYY-MM-DD">\n  </label>\n  <span class="delete">删除</span>\n</div>\n'
            }), e += "\n"
        }
    }, "418": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$each, o = t.numArr, i = (t.num, t.index, a.$escape), s = t.selectedNum;
            return e += '<div class="item-edit gift-service">\n  <div class="gift-info clearfix">\n    <label class="num">\n      <span class="input-type-name">份数：</span>\n      <select class="count">\n        ', n(o, function (t, n) {
                e += '\n        <option value="', e += i(t), e += '" ', s == t && (e += ' selected="selected" '), e += ">", e += i(t), e += "份\n        </option>\n        "
            }), e += '\n      </select>\n    </label>\n  </div>\n  <div class="addressee">\n    <div class="group group-1">\n      <label class="name-cont form-content">\n        <span class="input-type-name">\n          收件人：\n        </span>\n        <input type="text" name="addressee" autocomplete="off">\n      </label>\n      <label class="tel-cont form-content">\n        <span class="input-type-name">\n          手机：\n        </span>\n        <input type="text" name="tel">\n      </label>\n    </div>\n    <div class="group group-2">\n      <label class="city-cont form-content">\n        <span class="input-type-name">\n          省/市：\n        </span>\n        <input type="text" name="city">\n      </label>\n      <label class="address-cont form-content">\n        <span class="input-type-name">\n          详细地址：\n        </span>\n        <input type="text" name="address">\n      </label>\n    </div>\n    <div class="operation">\n      <span class="cancel">取消</span>\n      <span class="submit">确认</span>\n    </div>\n  </div>\n</div>\n'
        }
    }, "419": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.count, i = t.amount, s = t.customerInvoices;
            return e += '<div class="item-view gift-service">\n  <div class="gift-info">\n    <dt class="num">份数：</dt>\n    <dd>', e += n(o), e += '份</dd>\n    <dt class="fee">费用</dt>\n    <dd>￥', e += n(i * o), e += '</dd>\n  </div>\n  <div class="addressee">\n    <dt class="msgs">收件人信息：</dt>\n    <dd>', e += n(s.receiver), e += " &nbsp;&nbsp;  ", e += n(s.mobile), e += " &nbsp;&nbsp; ", e += n(s.city), e += " &nbsp;&nbsp; ", e += n(s.address), e += '</dd>\n  </div>\n  <span class="delete">\n    删除\n  </span>\n</div>\n'
        }
    }, "420": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.bookingCount, i = t.contactMen, s = a.$each;
            t.contactMan, t.index;
            return e += '<div class="col-header">\n  <span class="col-title">保险</span>\n  <span class="col-summary">\n    <span class="free">免费赠送</span>中国平安财产保险股份有限公司 <span class="insurance-detail-hook" rel="insurance-detail-popup">《住宿意外险》</span> ', e += n(o), e += '份，每份最高赔付21万</span\n  >\n</div>\n<div class="insurance-info-main">\n  ', i && i.length && (e += '\n  <div class="insured-check-cont">\n    <div class="legend">选择入住人</div>\n    ', i && i.length > 5 && (e += '\n    <div class="show-more"><span class="text">更多</span> <span class="vert-arrow"></span></div>\n    '), e += " ", i && i.length && (e += '\n    <div class="insured-opts">\n      ', s(i, function (t, a) {
                e += " ", a < 5 && (e += '\n      <label data-contact-id="', e += n(t.ID), e += '">\n        <input type="checkbox" name="insured" /> <span> ', e += n(t.ContactName), e += " </span>\n      </label>\n      "), e += " "
            }), e += "\n    </div>\n    "), e += " ", i && i.length > 5 && (e += '\n    <div class="insured-opts-more">\n      ', s(i, function (t, a) {
                e += " ", a >= 5 && (e += '\n      <label data-contact-id="', e += n(t.ID), e += '">\n        <input type="checkbox" name="insured" /> <span> ', e += n(t.ContactName), e += " </span>\n      </label>\n      "), e += " "
            }), e += "\n    </div>\n    "), e += "\n  </div>\n  "), e += '\n  <div class="insured-list-cont">\n    <div class="insured-list"></div>\n    <div class="create-insured">\n      <span class="create-insured-btn"> <span class="icon-add">+</span> 新增被保险人 </span>\n    </div>\n  </div>\n</div>\n<div id="insurance-detail-popup" class="m-tips-wrap" style="display: none">\n  <div class="tips-content text-description">\n    <h2>住宿意外险说明</h2>\n    <div class="tips-info">\n      途家网与中国平安财产保险股份有限公司北京分公司合作，提供“租客意外保障计划”，保障您在住宿期间的人身安全。 1.保险针对您在途家平台租住房屋内发生的保险事故承担保险责任。\n      2.保险会在入住日12:00点自动生效，若用户为入住日12:00点后下单，下单后若保险投保成功则立刻生效。 3.保险有效截止日期为离店日12:00；若您提前离店，则立即截止。 4.您可通过订单详情页随时查看保险状态。\n      5.如果您需要出险理赔或对保险有任何问题，可拨打平安24小时客服理赔报案电话95511。\n      <a href="', e += n(a.CONTENT_TUJIA_HOST), e += '/Clause/PassengerCasualty.htm" style="display: block; text-align: right; color: #5d91cd;" target="_blank">查看详情</a>\n    </div>\n  </div>\n  <div class="triangle-border tb-border"></div>\n  <div class="triangle-border tb-background"></div>\n</div>\n'
        }
    }, "421": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.text;
            return e += '<div class="col-header">\n  <span class="col-title">发票</span>\n</div>\n<p class="invoice-service">', e += n(o), e += "</p>\n"
        }
    }, "422": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.faseBooking, o = a.$escape, i = t.checkInDate, s = t.checkOutDate, r = t.days,
                c = t.checkInReceptionTime, l = a.$each, d = t.bookingCountRange,
                u = (t.bookingCountOpt, t.index, t.bookingCount), p = t.totalDepositAmount, h = t.depositFree,
                m = t.noPayDeposit, f = t.onlineDeposit, g = t.peopleCountRange, v = (t.peopleCountOpt, t.peopleCount);
            return e += '<div class="col-header">\n  <span class="col-title">预订信息</span>\n  <span class="col-summary">\n    ', e += n ? " 下单即有房，无需等待房东确认 " : " 下单后需房东确认是否接单 ", e += '\n  </span>\n</div>\n<div class="orderinfo-main">\n  <fieldset>\n    <div class="check-date-cont clear">\n      <div class="check-date-main">\n        <label>\n          <div class="select-desc">入住时段：</div>\n          <input type="text" id="check-date" value="', e += o(i), e += " 至 ", e += o(s), e += '">\n        </label>\n      </div>\n      <div class="check-date-tips">\n        <span class="night-num">\n          共 ', e += o(r), e += ' 晚\n        </span>\n        <span class="checkin-time">\n          ', e += o(c), e += ' 以后办理入住 , 早到可能需要等待\n        </span>\n      </div>\n    </div>\n    <div class="room-num-cont clear">\n      <div class="room-num-main">\n        <div class="select-desc">预订数量：</div>\n        <select name="room-num">\n          ', l(d, function (t, n) {
                e += '\n          <option value="', e += o(t), e += '" ', u == t && (e += ' selected="selected" '), e += ">", e += o(t), e += " 套\n          </option>\n          "
            }), e += '\n        </select>\n      </div>\n      <div class="room-num-tips ', p > 0 && h && m && (e += " free "), e += '">\n        ', p > 0 && (e += " \n        ", e += f ? "押金" : "到店支付押金", e += '\n        <span class="amount">￥', e += o(p), e += "</span>\n        ", h && m && (e += '\n        <span class="deposit-tip">（信用认证已达标，免押金，无需支付）</span>\n        '), e += " "), e += '\n      </div>\n    </div>\n    <div class="customer-num-cont clear">\n      <div class="customer-num-main">\n        <div class="select-desc">入住人数：</div>\n        <select name="customer-num">\n          ', l(g, function (t, n) {
                e += '\n          <option value="', e += o(t), e += '" ', v == t && (e += ' selected="selected" '), e += ">", e += o(t), e += " 人</option>\n          "
            }), e += "\n        </select>\n      </div>\n    </div>\n  </fieldset>\n</div>\n"
        }
    }, "423": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.userMobile;
            return e += '<div class="code-pop-mask"></div>\n<div class="verify-list">\n  <div class="block-title f-border-bottom-line-gray">\n    语音验证码\n    <span class="code-close-style">×</span>\n  </div>\n  <div class="block-content">\n    <ul>\n      <li>\n        您的手机号：', e += n(o), e += '\n      </li>\n      <li>\n        <p>验证码</p>\n        <div class="verify-box">\n          <input class="code-input-box" type="text" v-model="verifyCode" placeholder="请输入验证码">\n          <button class="code-verify-btn">获取语音验证码</button>\n          <button class="code-verify-btn2 dn">验证码发送中...</button>\n        </div>\n      </li>\n    </ul>\n    <button class="code-submit-btn">提交</button>\n  </div>\n</div>\n'
        }
    }, "424": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.guest, i = a.$each, s = t.certTypeData, r = (t.value, t.key, t.contactMen),
                c = t.selectedIndex;
            return e += '<div class="msg-unit-cont">\n  <label class="form-content">\n    <span>\n      姓名：\n    </span>\n    <input type="text" class="passenger-name" value="', e += n(o.name), e += '">\n  </label>\n</div>\n<div class="msg-unit-cont">\n  <label class="form-content">\n    <span>手机：</span>\n    <input type="text" class="passenger-tel" value="', e += n(o.mobile), e += '">\n  </label>\n</div>\n\n<div class="msg-unit-cont paper clear">\n  <div class="msg-unit clear cert-cont form-content">\n    <span class="msg-title">证件：</span>\n    <div class="form-unit-cont">\n      <select name="cert-type">\n        ', i(s, function (t, a) {
                e += '\n        <option value="', e += n(a), e += '" ', ((!r || -1 == c) && 1 == a || r && r.length > 0 && c > -1 && o.certType == a) && (e += ' selected="selected" '), e += " > ", e += n(t), e += "\n        </option>\n        "
            }), e += '\n      </select>\n      <input type="text" class="passenger-cert" name="cert-number" value="', e += n(o.cardNo), e += '">\n    </div>\n    </span>\n  </div>\n  \x3c!-- 护照提示 --\x3e\n  <div class="msg-unit-prompt" rel="checkinContent" style="display: none">\n    <i class="iconfont icon-tips"></i>\n    <span class="prompt-text">住宿登记须知</span>\n  </div>\n  <div class="checkin-tips-wrap" id="checkinContent">\n    <div>\n      <ul>\n        <li>\n          <span>·</span> 根据我国法律规定，外国人、港澳台居民应当在抵达住宿地后24小时内办理住宿登记。</li>\n        <li>\n          <span>·</span> 住宿宾馆的，请在宾馆内办理。住宿宾馆以外地区的，请前往居住地派出所办理。未依法办理住宿登记将承担相应法律责任。</li>\n        <li>\n          <span>·</span> 请随身携带您的出入境证件以备公安机关查验。</li>\n        <li>\n          <span>·</span> According to the Chinese laws,foreign nationals and residents from Hong Kong,Macao and Taiwan should register\n          their accommodation within 24 hours of arrival.</li>\n        <li>\n          <span>·</span> The hotel residents can complete it in the hotel.Those who stay elsewhere should go to the local police\n          station for registration.Failure to comply with the regulations will result in legal liability.</li>\n        <li>\n          <span>·</span> Please carry your travel document with you for possible examination by the police.</li>\n      </ul>\n    </div>\n    <div class="triangle-border tb-border"></div>\n    <div class="triangle-border tb-background"></div>\n  </div>\n</div>\n'
        }
    }, "425": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.cityTerritoryType, o = t.allowForeign, i = t.contactMen, s = a.$each,
                r = (t.contactMan, t.index, t.selectedIndex), c = a.$escape, l = t.guest, d = t.certTypeData;
            t.value, t.key;
            return e += '<div class="col-header">\n  <span class="col-title">入住人信息</span>\n  ', 1 != n || o || (e += '\n  <span class="col-summary">暂不接待港澳台和外籍客人</span>\n  '), e += '\n</div>\n<div class="passenger-info-main">\n  ', i && i.length && (e += '\n  <div class="passenger-check-cont">\n    <div class="legend">选择入住人</div>\n    ', i.length > 5 && (e += '\n    <div class="show-more passenger">\n      <span class="text">更多</span>\n      <span class="vert-arrow"></span>\n    </div>\n    '), e += " ", i.length && (e += '\n    <div class="passenger-opts">\n      \x3c!-- 根据selectedIndex设置选中状态 --\x3e\n      ', s(i, function (t, n) {
                e += " ", n < 5 && (e += ' <label>\n        <input type="checkbox" name="passenger" ', r > -1 && r == n && (e += ' checked="checked" '), e += ">\n        <span>", e += c(t.ContactName), e += "</span>\n        </label>\n        "), e += " "
            }), e += "\n    </div>\n    "), e += " ", i.length > 5 && (e += '\n    <div class="passenger-opts-more">\n      ', s(i, function (t, n) {
                e += " ", n >= 5 && (e += '\n      <label>\n        <input type="checkbox" name="passenger" ', r > -1 && r == n && (e += ' checked="checked" '), e += ">\n        <span>", e += c(t.ContactName), e += "</span>\n      </label>\n      "), e += " "
            }), e += "\n    </div>\n    "), e += "\n  </div>\n  "), e += '\n\n  <div class="create-passenger">\n    ', 1 == n ? (e += '\n    <div class="msg-unit-cont">\n      <label class="form-content">\n        <span>\n          姓名：\n        </span>\n        <label style="display:none;"><span></span><input type="text" name="hidden1" ></label>\n        <label style="display:none;"><span></span><input type="password" name="hidden2" ></label>\n        <input type="text" class="passenger-name" value="', e += c(l.name), e += '" autocomplete="nope">\n      </label>\n    </div>\n    ') : e += '\n    <div class="msg-unit-cont overseas">\n      <div class="control-lab">\n        姓名：\n      </div>\n      <div class="first-name-cont form-content">\n        <input type="text" class="passenger-first-name" placeholder="姓（护照拼音，如 ZHANG）" maxlength="20">\n      </div>\n      <div class="last-name-cont form-content">\n        <input type="text" class="passenger-last-name" placeholder="名（护照拼音，如 SAN）" maxlength="20">\n      </div>\n    </div>\n    ', e += '\n\n    <div class="msg-unit-cont">\n      <label class="form-content">\n        <span>手机：</span>\n        <label style="display:none;"><span></span><input type="text" name="hidden1" ></label>\n        <label style="display:none;"><span></span><input type="password" name="hidden2" ></label>\n        <input type="text" class="passenger-tel" value="', e += c(l.mobile), e += '">\n      </label>\n    </div>\n\n    ', 1 == n ? (e += '\n    <div class="msg-unit-cont paper clear">\n      <div class="msg-unit clear cert-cont form-content">\n        <span class="msg-title">证件：</span>\n        <div class="form-unit-cont">\n          <select name="cert-type">\n            ', s(d, function (t, n) {
                e += '\n            <option value="', e += c(n), e += '" ', ((!i || -1 == r) && 1 == n || i && i.length > 0 && r > -1 && l.certType == n) && (e += ' selected="selected" '), e += " > ", e += c(t), e += "\n            </option>\n            "
            }), e += '\n          </select>\n          <label style="display:none;"><span></span><input type="text" name="hidden1" ></label>\n          <label style="display:none;"><span></span><input type="password" name="hidden2" ></label>\n          <input type="text" class="passenger-cert" name="cert-number" ', l && l.cardNo && (e += ' value="', e += c(l.cardNo), e += '" '), e += '>\n        </div>\n        </span>\n      </div>\n      \x3c!-- 护照 --\x3e\n      <div class="msg-unit-prompt" rel="checkinContent" style="display: none">\n        <i class="iconfont icon-tips"></i>\n        <span class="prompt-text">住宿登记须知</span>\n      </div>\n      <div class="checkin-tips-wrap" id="checkinContent">\n        <div>\n          <ul>\n            <li>\n              <span>·</span> 根据我国法律规定，外国人、港澳台居民应当在抵达住宿地后24小时内办理住宿登记。</li>\n            <li>\n              <span>·</span> 住宿宾馆的，请在宾馆内办理。住宿宾馆以外地区的，请前往居住地派出所办理。未依法办理住宿登记将承担相应法律责任。</li>\n            <li>\n              <span>·</span> 请随身携带您的出入境证件以备公安机关查验。</li>\n            <li>\n              <span>·</span> According to the Chinese laws,foreign nationals and residents from Hong Kong,Macao and Taiwan should\n              register their accommodation within 24 hours of arrival.</li>\n            <li>\n              <span>·</span> The hotel residents can complete it in the hotel.Those who stay elsewhere should go to the local police\n              station for registration.Failure to comply with the regulations will result in legal liability.</li>\n            <li>\n              <span>·</span> Please carry your travel document with you for possible examination by the police.</li>\n          </ul>\n        </div>\n        <div class="triangle-border tb-border"></div>\n        <div class="triangle-border tb-background"></div>\n      </div>\n    </div>\n    ') : e += '\n    <div class="msg-unit-cont">\n      <label class="form-content">\n        <span>邮箱：</span>\n        <input type="text" class="passenger-email">\n      </label>\n    </div>\n    ', e += "\n  </div>\n</div>\n"
        }
    }, "426": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.houseInfoData, o = a.$escape, i = a.$each, s = t.orderInfoData,
                r = (t.dailyPrice, t.index, t.promoTip);
            t.tyingGoodsBookingItem, t.item;
            return n && (e += '\n<div class="house-info-cont">\n  <div class="house-img">\n    <a ', n.isCallCenter || (e += ' href="', e += o(n.url), e += '" '), e += ' target="_blank">\n      <img src="', e += o(n.defaultPictureURL), e += '">\n    </a>\n  </div>\n  <h2 class="house-title">\n    <a ', n.isCallCenter || (e += ' href="', e += o(n.url), e += '" '), e += ' target="_blank">\n      ', e += o(n.houseName), e += '\n    </a>\n  </h2>\n  <h4 class="house-type">\n    ', e += o(n.houseResource), e += '\n  </h4>\n  <div class="house-info">\n    \x3c!-- <span class="label-text">', e += o(n.roomCount), e += '室</span> |\n    <span class="label-text">', e += o(n.bedCount), e += '张床</span> |\n    <span class="label-text">宜住', e += o(n.recommendedGuests), e += '人</span> --\x3e\n    <span class="label-text">', e += o(n.houseSummary), e += "</span>\n  </div>\n</div>\n"), e += '\n<div class="payment-detail">\n  \x3c!-- 房费明细弹框 --\x3e\n  <div class="m-tips-wrap" id="house-fee-con" style="display: none">\n    <div class="tips-content m-price-cont">\n      <div class="tips-info">\n        <div class="m-price-cont">\n          <h2>房价明细</h2>\n          <div class="price-list">\n            <ul>\n              ', i(s.dailyPrices, function (t, n) {
                e += '\n              <li>\n                <span class="date-box">', e += o(t.date), e += '\n                  <b class="grey-text">', e += o(t.day), e += '</b>\n                </span>\n                <span class="price-box">\n                  <dfn>¥</dfn>\n                  <b class="price-value">', e += o(t.price), e += "</b>\n                </span>\n              </li>\n              "
            }), e += '\n            </ul>\n          </div>\n          <div class="total-price">\n            总价：¥', e += o(s.amount / s.bookingCount), e += ' X\n            <span class="room-number">', e += o(s.bookingCount), e += '</span>套 =\n            <span class="price-box">\n              <dfn>¥</dfn>\n              <b>', e += o(s.amount), e += " </b>\n            </span>\n            <br> ", r && (e += '\n            <span id="totalPromoTip" style="color: #999;">', e += o(r), e += " </span>\n            "), e += '\n          </div>\n        </div>\n      </div>\n      <div class="triangle-border tb-border"></div>\n      <div class="triangle-border tb-background"></div>\n    </div>\n  </div>\n\n  \x3c!-- 押金说明弹框 --\x3e\n  <div class="m-tips-wrap" id="deposit-detail-layer" style="display: none">\n    <div class="tips-content text-description">\n      <div class="tips-info">\n        到店无需再支付押金，如果取消订单或无人入住，押金部分不扣款，将以原支付方式退还。\n      </div>\n      <div class="triangle-border tb-border"></div>\n      <div class="triangle-border tb-background"></div>\n    </div>\n  </div>\n  \x3c!-- 全额预付(线下可能需要支付押金) --\x3e\n  <div class="order-fee payment-group">\n    <span class="title order-fee">线上支付</span>\n    <span class="price">\n      <dfn>￥</dfn>\n      ', e += o(a.returnFloat(s.totalFee)), e += '\n    </span>\n  </div>\n  <div class="house-fee payment-group">\n    <span class="title">\n      全部房费\n      <i class="iconfont icon-house-fee-tips icon-tips" rel="house-fee-con" style="display:none;"></i>\n    </span>\n    <span class="price">\n      <dfn>¥</dfn>', e += o(a.returnFloat(s.amount)), e += "</span>\n  </div>\n  ", s.tyingGoodsBookingItems && s.tyingGoodsBookingItems.length > 0 && (e += '\n  <div class="tying-goods payment-group">\n    ', i(s.tyingGoodsBookingItems, function (t, n) {
                e += '\n    <div>\n      <span class="title">', e += o(t.name), e += " x ", e += o(t.count), e += '</span>\n      <span class="price">\n        <dfn>¥</dfn>', e += o(a.returnFloat(t.amount * t.count)), e += "</span>\n    </div>\n    "
            }), e += "\n  </div>\n  "), e += "\n  ", s.merchantSubsidy && (e += '\n  \x3c!-- 商户补贴 --\x3e\n  <div class="merchant-subsidy payment-group">\n    <span class="title">\n      ', e += o(s.merchantSubsidy.name), e += '\n    </span>\n    <span class="price">\n      <dfn>-¥</dfn>\n      ', e += o(a.returnFloat(s.merchantSubsidy.amount)), e += "\n    </span>\n  </div>\n  "), e += "\n  ", s.virtualPays && (e += '\n  <div class="virtal-pay-list payment-group">\n    ', i(s.virtualPays.items, function (t, n) {
                e += "\n    ", t && t.select && (e += '\n    <div>\n      <span class="title"> ', e += o(t.promoSourceTypeName), e += ' </span>\n      <span class="price">-\n        <dfn>¥</dfn>', e += o(a.returnFloat(t.amount)), e += "</span>\n    </div>\n    "), e += "\n    "
            }), e += "\n\n  </div>\n  "), e += "\n  ", s.depositAmount > 0 && (e += "\n  ", s.onlineDeposit && s.supportCredit ? e += '\n  <div class="deposit payment-group">\n    <span class="title">\n      押金（信用达标已免）\n      <i class="iconfont icon-tips icon-deposit-free-tips" rel="deposit-detail-layer"></i>\n    </span>\n    <span class="price">\n      <dfn>¥</dfn>0.00</span>\n  </div>\n  ' : s.onlineDeposit && (e += '\n  <div class="deposit payment-group">\n    <span class="title">押金</span>\n    <span class="price">\n      <dfn>¥</dfn>', e += o(a.returnFloat(s.bookingCount * s.depositAmount)), e += "</span>\n  </div>\n  "), e += "\n  "), e += "\n</div>"
        }
    }, "427": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$each, o = t.certTypeData, i = (t.value, t.key, a.$escape);
            return e += '<div class="customer-info clear form-content">\n  <label class="name form-content">\n    <span class="input-type-name">姓名：</span>\n    <input type="text" name="name" autocomplete="off">\n  </label>\n  <label class="cert form-content">\n    <span class="input-type-name">证件：</span>\n    <select name="cert-type">\n      ', n(o, function (t, n) {
                e += '\n      <option value="', e += i(n), e += '">', e += i(t), e += "</option>\n      "
            }), e += '\n    </select>\n    <input type="text" name="cert-number">\n  </label>\n</div>\n'
        }
    }, "428": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.contactMen, o = a.$each, i = (t.contactMan, t.index, a.$escape);
            return n && n.length && (e += '\n<div class="ticket-user-popup" style="display: none">\n  <div class="popup-header">\n    选择购票人：\n  </div>\n  <ul class="popup-content contact-men-list">\n    ', o(n, function (t, n) {
                e += '\n    <li data-id="', e += i(t.ID), e += '">', e += i(t.ContactName), e += "</li>\n    "
            }), e += "\n  </ul>\n</div>\n"), e += "\n"
        }
    }, "429": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$each, o = t.numArr, i = (t.num, t.index, a.$escape), s = t.selectedNum,
                r = t.availableDailyPrices, c = (t.availableDailyPrice, t.selectedDailyPrice), l = t.selectedNumArr,
                d = t.userInput, u = t.certTypeData;
            t.value, t.key;
            return e += '<div class="item-edit ticket-service">\n  <div class="ticket-info">\n    <label class="num">\n      <span class="input-type-name">张数：</span>\n      <select name="ticket-num">\n        ', n(o, function (t, n) {
                e += '\n        <option value="', e += i(t), e += '" ', s == t && (e += ' selected="selected" '), e += ">", e += i(t), e += "张\n        </option>\n        "
            }), e += '\n      </select>\n    </label>\n    <label class="date">\n      <span class="input-type-name">游玩日期：</span>\n      <select name="date">\n        ', n(r, function (t, n) {
                e += '\n        <option value="', e += i(t.day), e += '" ', t.day == c.day && (e += ' selected="selected" '), e += ">", e += i(t.day), e += "</option>\n        "
            }), e += '\n      </select>\n    </label>\n  </div>\n  <div class="customer-info-list">\n    ', n(l, function (t, a) {
                e += '\n    <div class="customer-info clear">\n      <label class="name form-content">\n        <span class="input-type-name">姓名：</span>\n        <input type="text" name="name" ', d[a] && d[a].name && (e += ' value="', e += i(d[a].name), e += '" '), e += '\n          autocomplete="off" value="">\n      </label>\n      <label class="cert form-content">\n        <span class="input-type-name">证件：</span>\n        <select name="cert-type">\n          ', n(u, function (t, n) {
                    e += '\n          <option value="', e += i(n), e += '" ', d[a] && d[a].certType && d[a].certType == n && (e += ' selected="selected"\n            '), e += ">\n            ", e += i(t), e += "\n          </option>\n          "
                }), e += '\n        </select>\n        <input type="text" name="cert-number" ', d[a] && d[a].certNo && (e += ' value="', e += i(d[a].certNo), e += '"\n          '), e += ">\n      </label>\n    </div>\n    "
            }), e += '\n  </div>\n  <div class="operation">\n    <span class="cancel">取消</span>\n    <span class="submit">确认</span>\n  </div>\n</div>\n'
        }
    }, "430": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.count, i = t.date, s = t.amount, r = a.$each, c = t.contactList;
            t.contact, t.index;
            return e += '<div class="item-view ticket-service">\n  <div class="ticket-info">\n    <dt class="num">张数：</dt>\n    <dd>', e += n(o), e += '张</dd>\n    <dt class="date">游玩日期：</dt>\n    <dd>', e += n(i), e += '</dd>\n    <dt class="fee">费用：</dt>\n    <dd>￥', e += n(s * o), e += '</dd>\n  </div>\n  <div class="customer-info-list">\n    ', r(c, function (t, a) {
                e += '\n    <div class="customer-info">\n      <dt class="name">姓名：</dt>\n      <dd>', e += n(t.name), e += '</dd>\n      <dt class="identification">\n        ', 1 == t.idType ? e += " 身份证： " : 2 == t.idType ? e += " 军官证： " : 3 == t.idType && (e += " 护照： "), e += "\n      </dt>\n      <dd>", e += n(t.idNumber), e += "</dd>\n    </div>\n    "
            }), e += '\n  </div>\n  <span class="delete">\n    删除\n  </span>\n</div>\n'
        }
    }, "431": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$escape, o = t.tyingProductTypeName, i = t.shortDesc, s = a.$each, r = t.productImages,
                c = (t.productImage, t.index, t.detailDesc), l = t.useDesc, d = t.cancelRule;
            return e += '<div class="tyinggood-detail-popup">\n  <header>\n    <p>', e += n(o), e += '</p>\n    <span class="close-btn">&times;</span>\n  </header>\n  <main>\n    <div class="item-brief item-column">\n      \x3c!-- <i class="icon-tyinggood icon-tyinggood-1">\n      </i> --\x3e\n      <h1 class="tyinggood-name">\n        ', e += n(o), e += "\n      </h1>\n      <p>\n        ", e += n(i), e += '\n      </p>\n      <div class="img-intro">\n        ', s(r, function (t, a) {
                e += '\n          <img src="', e += n(t), e += '">\n        '
            }), e += '\n      </div>\n    </div>\n    <div class="item-detail-cont item-column">\n      <div class="col-header">\n        <span class="col-title">产品详情</span>\n      </div>\n      <div class="item-detail">\n        ', e += c, e += '\n      </div>\n\n    </div>\n\n    <div class="use-desc item-column">\n      <div class="col-header">\n        <span class="col-title">使用规则</span>\n      </div>\n      <p>', e += n(l), e += '</p>\n    </div>\n\n    <div class="cancel-desc item-column">\n      <div class="col-header">\n        <span class="col-title">取消规则</span>\n      </div>\n      <p>', e += n(d), e += '</p>\n    </div>\n  </main>\n</div>\n<div class="tyinggood-detail-mask">\n\n</div>\n'
        }
    }, "432": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = a.$each, o = t.ticketDetailList, i = (t.ticketDetail, t.index, a.$escape),
                s = t.giftDetailList;
            t.giftDetail;
            return e += '<div class="col-header">\n  <span class="col-title">超值套餐</span>\n  <span class="col-summary"></span>\n</div>\n<div class="tyinggoods-info-main">\n  \x3c!-- 门票服务 --\x3e\n  ', n(o, function (t, n) {
                e += '\n  <div class="ticket-service-cont tyinggoods-item" data-productId="', e += i(t.productId), e += '" data-type="', e += i(t.type), e += '"\n    data-index="', e += i(n), e += '">\n    <div class="item-header">\n      <div class="item-title-cont">\n        <i class="icon"></i>\n        <span class="item-title">门票</span>\n      </div>\n      <div class="item-tips-cont">\n        <span class="item-tips-text">\n          ', e += i(t.name), e += '\n        </span>\n        <span class="show-detail">\n          详情\n        </span>\n        <span class="item-spread" style="display: none">\n          增值服务未提交\n        </span>\n      </div>\n      <span class="add-item-btn">\n        添加\n      </span>\n    </div>\n    <div class="item-view-cont">\n      \x3c!-- 添加后的增值服务项展示容器 --\x3e\n    </div>\n    <div class="item-edit-cont">\n    </div>\n  </div>\n  '
            }), e += "\n\n  \x3c!-- 礼品服务 --\x3e\n  ", n(s, function (t, n) {
                e += '\n  <div class="gift-service-cont tyinggoods-item" data-productId="', e += i(t.productId), e += '" data-type="', e += i(t.type), e += '"\n    data-index="', e += i(n), e += '">\n    <div class="item-header">\n      <div class="item-title-cont">\n        <i class="icon"></i>\n        <span class="item-title">礼品</span>\n      </div>\n      <div class="item-tips-cont">\n        <span class="item-tips-text">\n          ', e += i(t.name), e += '\n        </span>\n        <span class="show-detail">\n          详情\n        </span>\n        <span class="item-spread" style="display: none">\n          增值服务未提交\n        </span>\n      </div>\n      <span class="add-item-btn">\n        添加\n      </span>\n    </div>\n    <div class="item-view-cont">\n    </div>\n    <div class="item-edit-cont">\n    </div>\n  </div>\n  '
            }), e += "\n</div>"
        }
    }, "433": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.status, o = t.cancelRules, i = a.$escape, s = t.rule, r = t.fastBooking;
            return e += '<div class="unsubscribe-rule">\n  <div class="col-header">\n    <span class="col-title">退订规则</span>\n    <span class="col-summary"></span>\n  </div>\n  <div class="condition-cont ', n && (e += " graph "), e += '">\n    ', 3 == n ? (e += '\n    <div class="step-3">\n      <div class="step first">\n        <div class="time-point">\n          <span class="icon icon-success"></span>\n          <br>\n          <span class="desc">\n            预订成功\n          </span>\n        </div>\n      </div>\n      <div class="step ', o[0].isDeleted && (e += " delete "), e += '">\n        <div class="process-desc">\n          <span class="text">\n            ', e += i(o[0].tip), e += '\n          </span>\n        </div>\n        <div class="time-point">\n          <span class="rounded-rect">', e += i(o[0].strDate), e += '</span>\n          <br>\n          <span class="desc">\n            <span>', e += i(o[0].introduction), e += "</span>\n            <span>", e += i(o[0].strTime), e += '</span>\n          </span>\n        </div>\n      </div>\n      <div class="step ', o[1].isDeleted && (e += " delete "), e += '">\n        <div class="process-desc">\n          <span class="text">\n            ', e += i(o[1].tip), e += '\n          </span>\n        </div>\n        <div class="time-point">\n          <span class="rounded-rect">', e += i(o[1].strDate), e += '</span>\n          <br>\n          <span class="desc">\n            <span>', e += i(o[1].introduction), e += "</span>\n            <span>", e += i(o[1].strTime), e += '</span>\n          </span>\n        </div>\n      </div>\n      <div class="step last ', o[2].isDeleted && (e += " delete "), e += '">\n        <div class="process-desc">\n          <span class="text">\n            ', e += i(o[2].tip), e += '\n          </span>\n        </div>\n        <div class="time-point">\n          <span class="rounded-rect">', e += i(o[2].strDate), e += '</span>\n          <br>\n          <span class="desc">\n            ', e += i(o[2].introduction), e += '\n          </span>\n        </div>\n      </div>\n      <div class="over-line"></div>\n    </div>\n    ') : 2 == n ? (e += '\n    <div class="step-2">\n      <div class="step first">\n        <div class="time-point">\n          <span class="icon icon-success"></span>\n          <br>\n          <span class="desc">\n            预订成功\n          </span>\n        </div>\n      </div>\n      <div class="step ', o[0].isDeleted && (e += " delete "), e += '">\n        <div class="process-desc">\n          <span class="text">\n            ', e += i(o[0].tip), e += '\n          </span>\n        </div>\n        <div class="time-point">\n          <span class="rounded-rect">', e += i(o[0].strDate), e += '</span>\n          <br>\n          <span class="desc">\n            <span>', e += i(o[0].introduction), e += "</span>\n            <span>", e += i(o[0].strTime), e += '</span>\n          </span>\n        </div>\n      </div>\n      <div class="step last ', o[0].isDeleted && (e += " delete "), e += '">\n        <div class="process-desc">\n          <span class="text">\n            ', e += i(o[1].tip), e += '\n          </span>\n        </div>\n        <div class="time-point">\n          <span class="rounded-rect">', e += i(o[1].strDate), e += '</span>\n          <br>\n          <span class="desc">\n            ', e += i(o[1].introduction), e += '\n          </span>\n        </div>\n      </div>\n      <div class="over-line"></div>\n    </div>\n    ') : (e += "\n    <p>\n      ", e += i(s), e += "\n    </p>\n    "), e += '\n  </div>\n  <div class="text-supplement">\n    <p>全额预付：需预付全额房费</p>\n    ', r && (e += "\n    <p>\n      无需确认：预定无需等待，订单闪电确认\n    </p>\n    "), e += "\n  </div>\n</div>"
        }
    }, "434": function (t, e, n) {
        var a = n(1);
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var e = "", n = t.hasPromotion, o = a.$escape, i = t.totalPromotion, s = t.topIntroduction, r = t.items,
                c = a.$each, l = (t.item, t.index, t.redPacket, t.key, t.redPacketDisabled);
            t.cashCard;
            return n && (e += '\n<div class="col-header">\n  <span class="col-title">优惠使用</span>\n  <span class="col-summary">默认选择最佳优惠，当前优惠总额为¥ ', e += o(a.returnFloat(i)), e += "</span>\n</div>\n", s && (e += '\n<div class="benefit-tip-banner">', e += o(s), e += "</div>\n"), e += '\n<div class="benefit-info-main">\n  ', r && r.length && (e += '\n  <div class="group group-1">\n    ', c(r, function (t, n) {
                e += "\n    ", 1 == t.group && t.subItems && t.subItems.length ? (e += '\n    <div class="virtual-pay-item clear" data-group="', e += o(t.group), e += '" data-type="', e += o(t.promoSourceType), e += '">\n      <label>\n        ', e += o(t.promoSourceTypeName), e += '\n      </label>\n      <span class="amount">\n        ', c(t.subItems, function (t, n) {
                    e += "\n        ", t.select && (e += " -￥", e += o(a.returnFloat(t.amount)), e += " "), e += "\n        "
                }), e += '\n      </span>\n      <span class="detail">\n        \x3c!-- ', l && (e += ' disabled="true"'), e += ' --\x3e\n        <select name="red-packet">\n          <option value="" ', t.select || (e += ' selected="selected" '), e += ">\n            不使用红包\n          </option>\n          ", c(t.subItems, function (t, n) {
                    e += '\n          <option value="', e += o(t.key), e += '" ', t.select && (e += ' selected="selected" '), e += ">", e += o(t.promoSourceTypeName), e += "</option>\n          "
                }), e += "\n        </select>\n      </span>\n    </div>\n    ") : 1 == t.group && (e += '\n    <div class="virtual-pay-item clear" data-group="', e += o(t.group), e += '" data-type="', e += o(t.promoSourceType), e += '">\n      <label>\n        <input type="checkbox" ', t.select && (e += ' checked="checked" '), e += ">\n        ", e += o(t.promoSourceTypeName), e += '\n      </label>\n      <span class="amount">\n        ', t.select && (e += " -￥", e += o(a.returnFloat(t.amount)), e += " "), e += '\n      </span>\n      <span class="detail">\n        ', e += o(t.introduction), e += "\n      </span>\n    </div>\n    "), e += "\n    "
            }), e += '\n  </div>\n  <div class="group group-2">\n    ', c(r, function (t, n) {
                e += "\n    ", 2 == t.group && t.subItems && t.subItems.length ? (e += '\n    <div class=" virtual-pay-item clear" data-group="', e += o(t.group), e += '" data-type="', e += o(t.promoSourceType), e += '">\n      <label>\n        ', e += o(t.promoSourceTypeName), e += '\n      </label>\n      <span class="amount">\n        ', t.select && (e += '\n        <span class="sub-amount">\n          -￥', e += o(a.returnFloat(t.amount)), e += "\n        </span>\n        "), e += '\n      </span>\n      <span class="detail">\n        ', c(t.subItems, function (t, n) {
                    e += "\n        ", t && (e += '\n        <label data-id="', e += o(t.key), e += '">\n          <input type="checkbox" ', t.select && (e += ' checked="checked" '), e += ">\n          \x3c!-- ", e += o(a.returnFloat(t.totalAmount)), e += "元途游卡 --\x3e\n          ", e += o(t.promoSourceTypeName), e += "\n          \x3c!-- ：", e += o(t.key), e += " --\x3e\n          ", t.select && t.introduction && (e += '\n          <span class="gray">\n            \x3c!-- (卡内金额￥', e += o(a.returnFloat(t.totalAmount)), e += ",\n              本次使用￥", e += o(a.returnFloat(t.amount)), e += ", 剩余￥", e += o(a.returnFloat(t.totalAmount - t.amount)), e += ") --\x3e\n            (", e += o(t.introduction), e += ")\n          </span>\n          "), e += "\n        </label>\n        "), e += "\n        "
                }), e += "\n      </span>\n    </div>\n    ") : 2 == t.group && (e += '\n    <div class="virtual-pay-item clear" data-group="', e += o(t.group), e += '" data-type="', e += o(t.promoSourceType), e += '">\n      <label>\n        <input type="checkbox" ', t.select && (e += ' checked="checked" '), e += ">\n        ", e += o(t.promoSourceTypeName), e += '\n      </label>\n      <span class="amount">\n        ', t.select && (e += " -￥", e += o(a.returnFloat(t.amount)), e += " "), e += '\n      </span>\n      <span class="detail">\n        ', e += o(t.introduction), e += "\n        \x3c!-- ", "积分" == t.promoSourceTypeName ? (e += "\n        可用积分", e += o(t.totalAmount), e += "\n        ") : (e += "\n        可用 ￥", e += o(a.returnFloat(t.totalAmount)), e += "\n        "), e += ' \n        <span class="entra">\n          ', t.select && (e += "\n          (", e += o(t.introduction), e += ")\n          "), e += "\n        </span>--\x3e\n      </span>\n    </div>\n    "), e += "\n\n    "
            }), e += "\n  </div>\n  "), e += "\n</div>\n"), e
        }
    }, "44": function (t, e, n) {
        "use strict";
        var a = n(5), o = n(8).TJRequestV2, i = new o, s = {"appdownloadUpdate": "/bingo/pc/trace/appdownload"},
            r = n.i(a["a"])(), c = window.tjGlobal.tujia_out_site_referrerUrl, l = {
                "appdownloadUpdate": function (t) {
                    var e = t.callback;
                    i.postRequest(s.appdownloadUpdate, {"gid": r, "refurl": c}, e)
                }
            };
        e["a"] = l
    }, "45": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {"value": !0});
        var a = n(44), o = n(5), i = getUTM();
        i && a["a"].appdownloadUpdate({
            "callback": function (t, e, n) {
                console.log("pc download update success", t)
            }
        }), window.getQRURL = function () {
            return i ? "https://m.tujia.com/nosearch/pr_downapp?link=sempchome&pcgid=" + n.i(o["a"])() : void 0
        }, window.createQRcodeInFooter = function () {
            var t = getQRURL();
            t && $(".u-icon-app-down").length && ($(".u-icon-app-down").html(""), QRCode.wechatQr = new QRCode(document.getElementsByClassName("u-icon-app-down")[0], {
                "width": 98,
                "height": 98
            }), QRCode.wechatQr.makeCode(t))
        }, window.createQRcodeInFooter && window.createQRcodeInFooter()
    }, "46": function (t, e) {
        function n() {
            if (window.tjGlobal) return window.tjGlobal.tujia_utm
        }

        function a() {
            if (window.tjGlobal) return window.tjGlobal.tujia_code
        }

        function o(t) {
            var e = n() ? n() : "", o = a() ? a() : "", s = i + "?utm_source=" + e + "&code=" + o + "&position=" + t;
            return console.log("baseUrl", s), s
        }

        var i = "https://pwa.tujia.com/wxfrontpage";
        $("#toolBar-qc").bind("mouseover", function () {
            console.log("#toolBar-qc mouseover"), $(".sprite_toolBar_wechat > canvas").length || (QRCode.wechatQr = new QRCode(document.getElementsByClassName("sprite_toolBar_wechat")[0], {
                "text": o("PC_FW"),
                "width": 140,
                "height": 140
            }))
        }), function (t) {
            var e = o(t);
            e && ($(".u-icon-wechat-down").css({
                "background-image": "none",
                "background-position": "0% 0%",
                "padding": "7px",
                "background-color": "#FFF"
            }), QRCode.wechatQr = new QRCode(document.getElementsByClassName("u-icon-wechat-down")[0], {
                "text": e,
                "width": 98,
                "height": 98
            }))
        }("PC_FP")
    }, "47": function (t, e) {
    }, "470": function (t, e, n) {
        "use strict";
        var a = n(127), o = n.n(a), i = n(257), s = n(25);
        e["a"] = new i["a"]({
            "resHandle": function (t) {
                return t && (t.length || t.keys().length) ? o.a.resolve(t.data || t) : (s["a"].ipMonitor(t), o.a.reject({
                    "errorNo": t.errcode || "-11",
                    "errorMsg": t.errmsg || "系统错误"
                }))
            }
        })
    }, "471": function (t, e, n) {
        "use strict";
        var a = n(127), o = n.n(a), i = n(257), s = n(25);
        e["a"] = new i["a"]({
            "resHandle": function (t) {
                return t.ret ? o.a.resolve(t.data) : (s["a"].ipMonitor(t), o.a.reject({
                    "errorNo": t.errcode,
                    "errorMsg": t.errmsg
                }))
            }
        })
    }, "477": function (t, e, n) {
        "use strict";

        function a() {
            return new c.a(function (t, e) {
                u["a"].initPage(function (n, a, o) {
                    n ? t(a) : e(o)
                })
            })
        }

        function o(t) {
            var e = void 0;
            if (e = {
                "tujia_code": window.tjGlobal.tujia_code ? window.tjGlobal.tujia_code : "",
                "tujia_code_site": window.tjGlobal.tujia_code_site ? window.tjGlobal.tujia_code_site : "",
                "tujia_out_site_landingUrl": window.tjGlobal.tujia_out_site_landingUrl ? window.tjGlobal.tujia_out_site_landingUrl : "",
                "tujia_out_site_referrerUrl": window.tjGlobal.tujia_out_site_referrerUrl ? window.tjGlobal.tujia_out_site_referrerUrl : "",
                "tujia_utm": window.tjGlobal.tujia_utm ? window.tjGlobal.tujia_utm : ""
            }, G) {
                var a = n.i(m["getCookie"])(window.tjGlobal.host.SERVER_DOMAIN + "_MWebHttpContext_CustomerSourceChannelInfo");
                a && (e.tujia_code = a)
            }
            return {
                "callCenter": G,
                "cookieRecord": s()(e),
                "bookingInfo": {
                    "bookingCount": J.bookingCount || 1,
                    "checkInDate": J.startDate,
                    "checkOutDate": J.endDate,
                    "peopleCount": 1
                },
                "guests": [{"cardNo": "", "certType": 0, "countryCode": "86", "email": "", "mobile": "", "name": ""}],
                "houseProductInfo": {
                    "activityInfo": J.activityInfo || "",
                    "houseId": J.unitId,
                    "productId": J.productId,
                    "totalAmount": t.priceDetail.totalAmount
                },
                "insurances": [],
                "promotion": t.promotion || [],
                "securityCheck": {
                    "cacheKey": t.productInfo.cacheKey,
                    "code": "",
                    "currentMobile": window.tjGlobal && window.tjGlobal.userInfo && window.tjGlobal.userInfo.mobile || ""
                },
                "tyingGoodsBookingItems": []
            }
        }

        Object.defineProperty(e, "__esModule", {"value": !0});
        var i = n(110), s = n.n(i), r = n(127), c = n.n(r), l = n(64), d = n.n(l), u = n(23), p = n(125), h = n(355),
            m = (n(361), n(3)), f = n(34), g = n(135), v = (n(391), n(97), n(249)), y = n(156), _ = (n(96), n(5)),
            b = n(400), T = (n.n(b), n(397)), C = (n.n(T), n(398)), I = (n.n(C), n(399)), w = (n.n(I), n(401)),
            D = (n.n(w), n(354)), k = n(352), O = n(356), S = n(357), x = n(360), A = n(359), j = n(353), M = n(358),
            N = n(320), U = n.n(N), P = g["a"].getOrderForm, H = (g["a"].getTyingGoodsForm, g["a"].createOrder),
            F = g["a"].getCommonContact, R = g["a"].getInvoiceCheckForBooking, E = n(136).renderFenxiOrderFill;
        _["c"]("pc", "" + window.tjGlobal.host.FELOG_TUJIA_HOST);
        var J = f["a"].queryStrings(), G = "true" === J.isCallCenter;
        G && ($("body").addClass("call-center-page"), document.querySelector(".rule-name").setAttribute("href", "javascript:void(0)"));
        var L = function () {
            function t() {
                d()(this, t), this.status = "beforeCreate", this.loading(!0), this.initPage(this)
            }

            return null, t.prototype.mount = function (t) {
                var e = t.orderData, a = t.contactMen;
                if (this.cityTerritoryType = e.houseInfo.cityTerritoryType, this._contactMen = a || [], this._orderData = e, this._createOrderData = o(e), this.status = "created", this.orderInfoCom = new D["a"]({
                    "orderData": e,
                    "createOrderData": this._createOrderData,
                    "guests": this.__contactMen
                }, this), this.passengerCom = new O["a"]({
                    "orderData": e,
                    "createOrderData": this._createOrderData,
                    "guests": 1 == e.houseInfo.cityTerritoryType ? this._contactMen : []
                }, this), 1 == e.houseInfo.cityTerritoryType && (this.insuranceCom = new k["a"]({
                    "orderData": e,
                    "createOrderData": this._createOrderData,
                    "guests": this._contactMen
                }, this), this.tyingGoodsCom = new M["a"](this, n.i(p["a"])(null, !0), this._contactMen)), this.virtualPayCom = new x["a"](e, this), this.unsubscribeRuleCom = new A["a"](e, this), this.sideBarCom = new S["a"]({
                    "orderData": e,
                    "createOrderData": this._createOrderData,
                    "virtualPayData": this.virtualPayCom.data
                }, this), $(".step-cont").html(U()({"fastBooking": e.houseInfo.fastBooking})), G) {
                    $(".callcenter-insert").html("\n      <iframe src='" + window.tjGlobal.host.TUJIA_HOST + "/unitdetail?unitId=" + J.unitId + '&isCallCenter=true&ssr=off\' id="checkInTipsFrame"\n      frameborder=0 name="checkInTipsFrame" scrolling="no" sandbox="allow-same-origin allow-scripts allow-same-origin allow-top-navigation"\n      >\n      </iframe>\n      ');
                    document.getElementsByTagName("iframe")[0].onload = function () {
                        var t = window.checkInTipsFrame.document, e = setInterval(function () {
                            if (window.checkInTipsFrame.document.querySelector(".unitCheckinTips .unitIntro")) {
                                var n = $(window.checkInTipsFrame.document.getElementsByClassName("unitCheckinTips")[0]).height();
                                $(document.getElementsByTagName("iframe")[0]).height(n);
                                var a = t.getElementsByClassName("unitCheckinTips")[0].getBoundingClientRect().top;
                                t.documentElement.scrollTop = a, t.body.scrollTop = a, document.documentElement.scrollTop = 0, t.getElementsByClassName("house-tab-box")[0].style.display = "none", clearInterval(e)
                            }
                        }, 500)
                    }
                }
                this.status = "mounted", this.loading(!1)
            }, t.prototype.initPage = function (t) {
                var e = this;
                c.a.all([a(), P({
                    "bookingInfo": {
                        "bookingCount": J.bookingCount || 1,
                        "checkInDate": J.startDate,
                        "checkOutDate": J.endDate,
                        "peopleCount": 1
                    },
                    "callCenter": G,
                    "houseProductInfo": {
                        "activityInfo": J.activityInfo || "",
                        "houseId": J.unitId,
                        "productId": J.productId,
                        "totalAmount": 0
                    },
                    "tyingGoodsBookingItems": []
                })]).then(function (n) {
                    var a = (n[0], n[1]);
                    console.log(a), t.mount({
                        "orderData": a,
                        "contactMen": t._contactMen
                    }), t.bindEvent(), t.addValidator(), R({
                        "activityInfo": t._createOrderData.houseProductInfo.activityInfo,
                        "productId": J.productId,
                        "unitId": J.unitId
                    }).then(function (n) {
                        t.invoiceCom = new j["a"](n, e)
                    })["catch"](function (t) {
                        console.log(t)
                    }), E(a.houseInfo.houseId, e._createOrderData.bookingInfo.bookingCount * e.orderInfoCom.data.days, a.priceDetail.totalAmount)
                })["catch"](function (t) {
                    n.i(y["a"])(t, J.unitId)
                }), F().then(function (e) {
                    t._contactMen = e, "mounted" == t.status && (t.passengerCom.updateForContact({
                        "orderData": t._orderData,
                        "createOrderData": t._createOrderData,
                        "guests": 1 == t.cityTerritoryType ? t._contactMen : []
                    }), t.insuranceCom.updateForContact({
                        "orderData": t._orderData,
                        "createOrderData": t._createOrderData,
                        "guests": t._contactMen
                    }), t.tyingGoodsCom.tyingGoodsInterData ? t.tyingGoodsCom.updateForContact(t.tyingGoodsCom.tyingGoodsInterData, n.i(p["a"])(null, !0), t._contactMen) : (t.tyingGoodsCom.contactMen = e, t.tyingGoodsCom.subscribe("update")))
                })["catch"](function (e) {
                    t._contactMen = []
                })
            }, t.prototype.bindEvent = function () {
                var t = this;
                $(".submit-order-cont").on("click", ".submit-order-btn", n.i(p["b"])(function () {
                    $(".tyinggoods-item").each(function () {
                        $(this).hasClass("edit-ing") ? $(this).find(".item-spread").show() : $(this).find(".item-spread").hide()
                    }), $(".tyinggoods-item.edit-ing")[0] && $(document).scrollTop(n.i(p["c"])($(".tyinggoods-item.edit-ing")[0]));
                    var e = t.passengerValidator.validateForm(function (t) {
                    }), a = t.insuranceValidator.validateForm(function (t) {
                    });
                    if (!e || !a) {
                        var o = e ? t.insuranceValidator.domContext : t.passengerValidator.domContext;
                        return void t.anchorPosi(t.passengerValidator.errs[0] || t.insuranceValidator.errs[0], o)
                    }
                    if (document.querySelectorAll(".tyinggoods-item.edit-ing").length > 0) {
                        var i = document.querySelector(".tyinggoods-item.edit-ing");
                        return void $(document).scrollTop(n.i(p["c"])(i))
                    }
                    var s = $('input[name="agree-rule"]').attr("checked");
                    if (!s) {
                        var r = {"content": "请同意隐私和条款", "cancel": "", "mask": !0};
                        window.tjAlert(r)
                    }
                    s && t.doSubmit()
                }, 1e3))
            }, t.prototype.doSubmit = function () {
                var t = n.i(p["d"])(this._createOrderData);
                $(".submit-order-cont").off("click", ".submit-order-btn"), H(t).then(function (t) {
                    var e = (window.tjGlobal.userInfo, window.tjGlobal.host["BOOKING_TUJIA_HOST"]);
                    if (G) return void (window.top.location.href = window.tjGlobal.host.ORDER_TUJIA_HOST + "/Order/GetUnitOrderInfoTNS?orderNo=" + t.orderNo);
                    1 == t.orderStatus ? window.location.href = "/booking/orderpay?orderNo=" + t.orderNo + "&token=" + t.token + "&unitId=" + J.unitId : 11 == t.orderStatus ? window.location.href = e + "/Order/PSuccess?orderNo=" + t.orderNo + "&userId=" + J.unitId : 2 == t.orderStatus && (window.location.href = e + "/Order/PConfirm?orderNo=" + t.orderNo + "&userId=" + J.unitId)
                })["catch"](function (t) {
                    V.bindEvent(), "56001" == t.errorNo ? V.verifyPop.show() : (_["d"]({
                        "p": "orderFill",
                        "m": "order",
                        "f": "createOrder"
                    }, s()(t)), n.i(y["a"])(t, J.unitId))
                })
            }, t.prototype.anchorPosi = function (t, e) {
                var a = -1, o = void 0;
                t.errMsgSelector.indexOf(":") > -1 ? (a = t.errMsgSelector.split(":")[1], o = $(e + " " + t.selector).eq(a)[0]) : o = $(e + " " + t.selector)[0], $(document).scrollTop(n.i(p["c"])(o))
            }, t.prototype.addValidator = function () {
                this.passengerValidator = new v["a"](".create-passenger");
                var t = [{
                    "selector": ".passenger-name",
                    "rules": [{"rule": "minlength:1", "errMsg": "请输入1—20个字符的姓名"}, {
                        "rule": "maxlength:20",
                        "errMsg": "请输入1—20个字符的姓名"
                    }],
                    "errMsgSelector": ".passenger-name-err-msg"
                }, {
                    "selector": ".passenger-first-name",
                    "rules": [{"rule": "minlength:1", "errMsg": " 请填写入住人姓氏拼音"}, {
                        "rule": "pinyin",
                        "errMsg": "请输入正确的拼音"
                    }],
                    "errMsgSelector": ".passenger-first-name-err-msg"
                }, {
                    "selector": ".passenger-last-name",
                    "rules": [{"rule": "minlength:1", "errMsg": "请填写入住人名字拼音"}, {
                        "rule": "pinyin",
                        "errMsg": "请输入正确的拼音"
                    }],
                    "errMsgSelector": ".passenger-last-name-err-msg"
                }, {
                    "selector": ".passenger-tel",
                    "rules": [{"rule": "minlength:1", "errMsg": "请输入正确格式电话号码"}, {
                        "rule": "tel",
                        "errMsg": "请输入正确格式电话号码"
                    }],
                    "errMsgSelector": ".passenger-tel-err-msg"
                }, {
                    "selector": ".passenger-cert", "rules": [{
                        "rule": function (t) {
                            var e = $(t).val();
                            switch ($(t).siblings('select[name="cert-type"]').val()) {
                                case"1":
                                    return n.i(v["b"])(e);
                                case"2":
                                case"3":
                                    return e.trim().length > 0
                            }
                        }, "errMsg": "请输入正确的证件号码"
                    }], "errMsgSelector": ".passenger-cert-err-msg"
                }, {
                    "selector": ".passenger-email",
                    "rules": [{"rule": "minlength:1", "errMsg": "请填写邮箱"}, {
                        "rule": "minlength:7",
                        "errMsg": "须大于7个字符"
                    }, {"rule": "maxlength:100", "errMsg": "须小于100个字符"}, {"rule": "email", "errMsg": "邮箱格式不正确"}],
                    "errMsgSelector": ".passenger-email-err-msg"
                }];
                this.passengerValidator.addValidate(t);
                var e = [{
                    "selector": 'input[name="insured-name"]',
                    "rules": [{"rule": "minlength:1", "errMsg": "请输入1—20个字符的姓名"}, {
                        "rule": "maxlength:20",
                        "errMsg": "请输入1—20个字符的姓名"
                    }],
                    "errMsgSelector": ".name-err-msg"
                }, {
                    "selector": 'input[name="cert-number"]', "rules": [{
                        "rule": function (t) {
                            var e = $(t).val();
                            switch ($(t).siblings('select[name="cert-type"]').eq(0).val()) {
                                case"1":
                                    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e);
                                case"2":
                                case"3":
                                    return e.trim().length > 0
                            }
                        }, "errMsg": "请输入正确的证件号码"
                    }], "errMsgSelector": ".cert-number-err-msg"
                }, {
                    "selector": 'input[name="insured-birth"]', "rules": [{
                        "rule": function (t) {
                            var e = $(t).val(), n = e.match(/\d+/g), a = ["getFullYear", "getMonth", "getDate"];
                            if (null == n || 3 != n.length) return !1;
                            var o = new Date(e.replace(/-/g, "/")), i = 3;
                            if (o > new Date) return !1;
                            for (n[1]--; i--;) if (1 * n[i] != o[a[i]]()) return !1;
                            return !0
                        }, "errMsg": "生日格式不正确，请修改"
                    }], "errMsgSelector": ".birth-err-msg"
                }];
                this.insuranceValidator = new v["a"](".insured-list-cont"), this.insuranceValidator.addValidate(e)
            }, t
        }(), V = new L;
        V.verifyPop = n.i(h["a"])(V)
    }, "48": function (t, e) {
    }, "49": function (t, e) {
    }, "500": function (t, e) {
    }, "501": function (t, e) {
    }, "502": function (t, e) {
    }, "503": function (t, e) {
    }, "504": function (t, e) {
    }, "505": function (t, e) {
    }, "506": function (t, e) {
    }, "507": function (t, e) {
    }, "508": function (t, e) {
    }, "509": function (t, e) {
    }, "510": function (t, e) {
    }, "541": function (t, e) {
    }, "8": function (t, e, n) {
        "use strict";

        function a() {
            i.call(this)
        }

        Object.defineProperty(e, "__esModule", {"value": !0}), n.d(e, "TJRequestV2", function () {
            return a
        });
        var o = n(25), i = n(35)["default"];
        a.prototype = Object(i.prototype), a.prototype.callbackHandle = function (t, e, n, a) {
            t ? e.ret ? a && a(!0, e.data) : (o["a"].ipMonitor(e), a && a(!1, null, {
                "errorNo": e.errCode,
                "errorMsg": e.errmsg
            })) : a && a(t, null, n)
        }
    }, "9": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {"value": !0});
        var a = n(15), o = (n(16), function (t) {
            var e = $.extend(!0, {}, t);
            void 0 === t.ensure && (e.ensure = "确认"), void 0 === t.cancel ? e.cancel = "取消" : "" === t.cancel && (e.cancel = void 0), void 0 === t.title ? e.title = "提示" : "" === t.title && (e.title = void 0), $(document.body).append(a({"config": e})), e.mask && $(document.body).append($('\n<div class="base-mask" style="position: fixed; top: 0px; left: 0px;  display: block; opacity: 0.8;\n    z-index: 99; background-color: #000; width:100%; height: 100%"></div>\n')), $(".base-alert")[0].addEventListener("click", function t(n) {
                $(n.target).hasClass("ensure") && (e.mask ? ($(".base-alert").remove(), $(".base-mask").remove()) : $(".base-alert").remove(), e.callback && e.callback(1), document.body.removeEventListener("click", t))
            }), $(".base-alert")[0].addEventListener("click", function t(n) {
                $(n.target).hasClass("cancel") && (e.mask ? ($(".base-alert").remove(), $(".base-mask").remove()) : $(".base-alert").remove(), e.callback && e.callback(2), document.body.removeEventListener("click", t))
            })
        });
        e["default"] = {"alert": o}
    }, "90": function (t, e, n) {
        "use strict";
        var a = n(100)["default"], o = n(24).CalUtil, i = n(24).CalView, s = function (t) {
            this._opts = t, this._baseMonth = null, this._$pane = null, this._selectPrepare = !1, this._renderMonth = null, this._selectionRange = []
        };
        s.prototype = {
            "setSelectionRange": function (t) {
                var e = t;
                if ($.isArray(e) && e[0] instanceof Date && e[1] instanceof Date) {
                    var n = o.getNow();
                    o.copyFrom(e[0], n), o.clearMSM(n);
                    var a = o.getNow();
                    o.copyFrom(e[1], a), o.clearMSM(a), this._selectionRange[0] = Math.min(n.getTime(), a.getTime()), this._selectionRange[1] = Math.max(n.getTime(), a.getTime())
                }
            }, "show": function () {
                this._$pane && this._$pane.show(), this._selectPrepare && this._callPrepare()
            }, "_callPrepare": function () {
                var t = this._opts.onRangeSelectionPrepare;
                a.log("call prepare selection"), $.isFunction(t) && t.call(t)
            }, "hide": function () {
                if (this._$pane && this._$pane.hide(), this._selectPrepare) {
                    var t = this._opts.onRangeSelectionCancel;
                    a.log("call cancel selection"), $.isFunction(t) && t.call(t)
                }
            }, "setBaseDay": function (t) {
                t instanceof Date && (this._baseMonth = t)
            }, "clearSelectionRange": function () {
                this._selectionRange.length = 0, this._step(0)
            }, "_install": function () {
                this._baseMonth = this._opts.month;
                var t = this._opts.disableDayAfter;
                this._opts.selectionDateRange && this.setSelectionRange(this._opts.selectionDateRange), this._baseMonth || (this._baseMonth = o.getNow());
                var e = o.getNow();
                o.copyFrom(this._baseMonth, e);
                var n = new i(e, {
                    "prevCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": t,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                }), a = o.getNow();
                o.copyFrom(this._baseMonth, a), a.setDate(1), a.setMonth(e.getMonth() + 1);
                var s = new i(a, {
                    "nextCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": t,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                });
                this._renderMonth = e;
                var r = this._asPane(n, s);
                this._$pane = r, this._opts.parent ? r.appendTo(this._opts.parent) : r.appendTo("body"), this._align(), this._ctrlOn(), this._cellOn(), this._ignoreClick()
            }, "_asPane": function (t, e) {
                return $('\n        <div class="t-layer t-layer-calendar clearfix">\n          ' + t.toHtml() + "\n          " + e.toHtml() + "\n        </div>\n    ")
            }, "_ignoreClick": function () {
                this._$pane.click(function (t) {
                    return t.preventDefault(), t.stopPropagation(), !1
                })
            }, "_cellOn": function () {
                var t = this;
                this._$pane.delegate("td", "click", function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = $(e.target);
                    if (n.hasClass("disable") || n.hasClass("ep")) return !1;
                    var a = new Date(parseInt(n.data("ts")));
                    return o.clearMSM(a), t._rangeSelection(a, n.data("date-index")), !1
                })
            }, "_rangeSelection": function (t, e) {
                var n = this._selectionRange, a = t.getTime(), o = !1;
                0 == n.length ? n[0] = n[1] = a : n[0] == n[1] ? a < n[0] ? n[0] = n[1] = a : a > n[0] && (n[1] = a, o = !0) : n[0] = n[1] = a, this._step(0), o ? this._rangeConfirm(n) : this._rangeConfirmHint()
            }, "_rangeConfirmHint": function () {
                this._selectPrepare = !0, this._callPrepare()
            }, "_rangeConfirm": function (t) {
                var e = this._opts.onRangeSelection;
                if (this._selectPrepare = !1, $.isFunction(e)) {
                    !1 !== e.apply(e, t) && this.hide()
                }
            }, "_ctrlOn": function () {
                var t = this;
                this._$pane.delegate(".t-cal-ctrl", "click", function (e) {
                    return $(e.target).hasClass("t-cal-ctrl-next") ? t._step(2) : t._step(-2), e.preventDefault(), e.stopPropagation(), !1
                })
            }, "_step": function (t) {
                var e = this._opts.disableDayAfter, n = o.getNow();
                o.copyFrom(this._renderMonth, n), n.setDate(1), n.setMonth(n.getMonth() + t);
                var a = n, s = new i(a, {
                    "prevCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": e,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                }), r = o.getNow();
                o.copyFrom(a, r), r.setDate(1), r.setMonth(a.getMonth() + 1);
                var c = new i(r, {
                    "nextCtrl": !0,
                    "disableDayBefore": this._baseMonth,
                    "disableDayAfter": e,
                    "selectionRange": this._selectionRange,
                    "onSingleDay": this._opts.onSingleDay
                });
                this._$pane.html(s.toHtml() + c.toHtml()), this._renderMonth = a
            }, "_align": function () {
                var t = this._opts.anchor, e = this._$pane;
                if (t) {
                    var n = $(t).offset(), a = n.left;
                    if (this._opts.parent) {
                        a -= $(this._opts.parent).offset().left
                    }
                    e.css({"left": a})
                }
            }, "setPosition": function (t, e) {
                var n = this._$pane;
                "number" == typeof t && n.css({"left": t}), "number" == typeof e && n.css({"top": e})
            }, "install": function () {
                this._install()
            }
        }, e.CalWidget = s
    }, "92": function (t, e) {
        var n = {
            "lunarInfo": [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560],
            "solarMonth": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            "nStr1": ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
            "nStr2": ["初", "十", "廿", "卅"],
            "nStr3": ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
            "lYearDays": function (t) {
                var e, a = 348;
                for (e = 32768; e > 8; e >>= 1) a += n.lunarInfo[t - 1900] & e ? 1 : 0;
                return a + n.leapDays(t)
            },
            "leapMonth": function (t) {
                return 15 & n.lunarInfo[t - 1900]
            },
            "leapDays": function (t) {
                return n.leapMonth(t) ? 65536 & n.lunarInfo[t - 1900] ? 30 : 29 : 0
            },
            "monthDays": function (t, e) {
                return e > 12 || e < 1 ? -1 : n.lunarInfo[t - 1900] & 65536 >> e ? 30 : 29
            },
            "solarDays": function (t, e) {
                if (e > 12 || e < 1) return -1;
                var a = e - 1;
                return 1 == a ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : n.solarMonth[a]
            },
            "toChinaMonth": function (t) {
                if (t > 12 || t < 1) return -1;
                var e = n.nStr3[t - 1];
                return e += "月"
            },
            "toChinaDay": function (t) {
                var e;
                switch (t) {
                    case 10:
                        e = "初十";
                        break;
                    case 20:
                        e = "二十";
                        break;
                    case 30:
                        e = "三十";
                        break;
                    default:
                        e = n.nStr2[Math.floor(t / 10)], e += n.nStr1[t % 10]
                }
                return e
            },
            "solar2lunar": function (t, e, a) {
                if (t < 1900 || t > 2100) return -1;
                if (1900 == t && 1 == e && a < 31) return -1;
                if (t) var o = new Date(t, parseInt(e) - 1, a); else var o = new Date;
                var i, s = 0, r = 0, t = o.getFullYear(), e = o.getMonth() + 1, a = o.getDate(),
                    c = (Date.UTC(o.getFullYear(), o.getMonth(), o.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
                for (i = 1900; i < 2101 && c > 0; i++) r = n.lYearDays(i), c -= r;
                c < 0 && (c += r, i--);
                var l = i, s = n.leapMonth(i), d = !1;
                for (i = 1; i < 13 && c > 0; i++) s > 0 && i == s + 1 && 0 == d ? (--i, d = !0, r = n.leapDays(l)) : r = n.monthDays(l, i), 1 == d && i == s + 1 && (d = !1), c -= r;
                0 == c && s > 0 && i == s + 1 && (d ? d = !1 : (d = !0, --i)), c < 0 && (c += r, --i);
                var u = i, p = c + 1;
                return {
                    "IMonthCn": (d ? "闰" : "") + n.toChinaMonth(u),
                    "IDayCn": n.toChinaDay(p),
                    "IMonth": u,
                    "IDay": p
                }
            }
        };
        e.Calendar = n
    }, "96": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        });
        var a = n(252), o = n.n(a), i = {
            "subscriber": [], "listen": function (t, e) {
                this.subscriber[t] || (this.subscriber[t] = []), this.subscriber[t].push(e)
            }, "trigger": function () {
                var t = Array.prototype.shift.call(arguments), e = this.subscriber[t];
                if (!e || 0 === e.length) throw"subscribers should be a function array";
                for (var n = 0, a = e.length; n < a; n++) e[n].apply(this, arguments)
            }
        };
        i.listen("bookingInfo", function (t, e) {
            o()(t.bookingInfo, e)
        }), i.listen("guests", function (t, e) {
            t.guests[0] = e
        }), i.listen("insurances", function (t, e) {
            t.insurances = e
        }), i.listen("promotion", function (t, e) {
            t.promotion = e
        }), i.listen("updateTyingGoods", function (t, e) {
            t.tyingGoodsBookingItems = e
        }), i.listen("totalAmount", function (t, e) {
            t.houseProductInfo.totalAmount = e
        }), i.listen("code", function (t, e) {
            t.securityCheck.code = e
        })
    }, "97": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {"value": !0});
        var a = n(102), o = n.n(a);
        !function (t) {
            t.fn.powerFloat = function (a) {
                return t(this).each(function () {
                    var o, i = t.extend({}, n, a || {}), s = function (t, n) {
                        e.target && "none" !== e.target.css("display") && e.targetHide(), e.s = t, e.trigger = n
                    };
                    switch (i.eventType) {
                        case"hover":
                            t(this).hover(function () {
                                e.timerHold && (e.flagDisplay = !0);
                                var n = parseInt(i.showDelay, 10);
                                s(i, t(this)), n ? (o && clearTimeout(o), o = setTimeout(function () {
                                    e.targetGet.call(e)
                                }, n)) : e.targetGet()
                            }, function () {
                                o && clearTimeout(o), e.timerHold && clearTimeout(e.timerHold), e.flagDisplay = !1, e.targetHold()
                            }), i.hoverFollow && t(this).mousemove(function (t) {
                                return e.cacheData.left = t.pageX, e.cacheData.top = t.pageY, e.targetGet.call(e), !1
                            });
                            break;
                        case"click":
                            t(this).click(function (n) {
                                e.display && e.trigger && n.target === e.trigger.get(0) ? (e.flagDisplay = !1, e.displayDetect()) : (s(i, t(this)), e.targetGet(), t(document).data("mouseupBind") || t(document).bind("mouseup", function (n) {
                                    var a = !1;
                                    if (e.trigger) {
                                        var o = e.target.attr("id");
                                        o || (o = "R_" + Math.random(), e.target.attr("id", o)), t(n.target).parents().each(function () {
                                            t(this).attr("id") === o && (a = !0)
                                        }), "click" === i.eventType && e.display && n.target != e.trigger.get(0) && !a && (e.flagDisplay = !1, e.displayDetect())
                                    }
                                    return !1
                                }).data("mouseupBind", !0))
                            });
                            break;
                        case"focus":
                            t(this).focus(function () {
                                var n = t(this);
                                setTimeout(function () {
                                    s(i, n), e.targetGet()
                                }, 200)
                            }).blur(function () {
                                e.flagDisplay = !1, setTimeout(function () {
                                    e.displayDetect()
                                }, 190)
                            });
                            break;
                        default:
                            s(i, t(this)), e.targetGet(), t(document).unbind("mouseup").data("mouseupBind", !1)
                    }
                })
            };
            var e = {
                "targetGet": function () {
                    if (!this.trigger) return this;
                    var n = this.trigger.attr(this.s.targetAttr),
                        a = "function" == typeof this.s.target ? this.s.target.call(this.trigger) : this.s.target;
                    switch (this.s.targetMode) {
                        case"common":
                            if (a) {
                                var i = void 0 === a ? "undefined" : o()(a);
                                "object" === i ? a.size() && (e.target = a.eq(0)) : "string" === i && t(a).size() && (e.target = t(a).eq(0))
                            } else n && t("#" + n).size() && (e.target = t("#" + n));
                            if (!e.target) return this;
                            e.targetShow();
                            break;
                        case"ajax":
                            var s = a || n;
                            if (this.targetProtect = !1, !s) return;
                            e.cacheData[s] || e.loading();
                            var r = new Image;
                            r.onload = function () {
                                var n = r.width, a = r.height, o = t(window).width(), i = t(window).height(), c = n / a;
                                c > o / i ? n > o / 2 && (n = o / 2, a = n / c) : a > i / 2 && (a = i / 2, n = a * c);
                                var l = '<img class="float_ajax_image" src="' + s + '" width="' + n + '" height = "' + a + '" />';
                                e.cacheData[s] = !0, e.target = t(l), e.targetShow()
                            }, r.onerror = function () {
                                /(\.jpg|\.png|\.gif|\.bmp|\.jpeg)$/i.test(s) ? (e.target = t('<div class="float_ajax_error">图片加载失败。</div>'), e.targetShow()) : t.ajax({
                                    "url": s,
                                    "success": function (n) {
                                        "string" == typeof n && (e.cacheData[s] = !0, e.target = t('<div class="float_ajax_data">' + n + "</div>"), e.targetShow())
                                    },
                                    "error": function () {
                                        e.target = t('<div class="float_ajax_error">数据没有加载成功。</div>'), e.targetShow()
                                    }
                                })
                            }, r.src = s;
                            break;
                        case"list":
                            var c, l = '<ul class="float_list_ul">';
                            t.isArray(a) && (c = a.length) ? t.each(a, function (t, e) {
                                var n, a, i = "", s = "";
                                0 === t && (s = ' class="float_list_li_first"'), t === c - 1 && (s = ' class="float_list_li_last"'), "object" === (void 0 === e ? "undefined" : o()(e)) && (n = e.text.toString()) ? i = (a = e.href || "javascript:") ? '<a href="' + a + '" class="float_list_a">' + n + "</a>" : n : "string" == typeof e && e && (i = e), i && (l += "<li" + s + ">" + i + "</li>")
                            }) : l += '<li class="float_list_null">列表无数据。</li>', l += "</ul>", e.target = t(l), this.targetProtect = !1, e.targetShow();
                            break;
                        case"remind":
                            var d = a || n;
                            this.targetProtect = !1, "string" == typeof d && (e.target = t("<span>" + d + "</span>"), e.targetShow());
                            break;
                        default:
                            var u = a || n, i = void 0 === u ? "undefined" : o()(u);
                            u && ("string" === i ? (/^.[^:#\[\.,]*$/.test(u) ? t(u).size() ? (e.target = t(u).eq(0), this.targetProtect = !0) : t("#" + u).size() ? (e.target = t("#" + u).eq(0), this.targetProtect = !0) : (e.target = t("<div>" + u + "</div>"), this.targetProtect = !1) : (e.target = t("<div>" + u + "</div>"), this.targetProtect = !1), e.targetShow()) : "object" === i && !t.isArray(u) && u.size() && (e.target = u.eq(0), this.targetProtect = !0, e.targetShow()))
                    }
                    return this
                }, "container": function () {
                    var n = this.s.container, a = this.s.targetMode || "mode";
                    return this.s.sharpAngle = "ajax" === a || "remind" === a, this.s.reverseSharp && (this.s.sharpAngle = !this.s.sharpAngle), "common" !== a && (null === n && (n = "plugin"), "plugin" === n && (t("#floatBox_" + a).size() || t('<div id="floatBox_' + a + '" class="float_' + a + '_box"></div>').appendTo(t("body")).hide(), n = t("#floatBox_" + a)), n && "string" != typeof n && n.size() && (this.targetProtect && e.target.show().css("position", "static"), e.target = n.empty().append(e.target))), this
                }, "setWidth": function () {
                    var t = this.s.width;
                    return "auto" === t ? this.target.get(0).style.width && this.target.css("width", "auto") : "inherit" === t ? this.target.width(this.trigger.width()) : this.target.css("width", t), this
                }, "position": function () {
                    if (!this.trigger || !this.target) return this;
                    var n, a, o, i, s, r, c, l = 0, d = 0, u = 0, p = 0, h = this.target.data("height"),
                        m = this.target.data("width"), f = t(window).scrollTop(),
                        g = parseInt(this.s.offsets.x, 10) || 0, v = parseInt(this.s.offsets.y, 10) || 0,
                        y = this.cacheData;
                    h || (h = this.target.outerHeight(), this.s.hoverFollow && this.target.data("height", h)), m || (m = this.target.outerWidth(), this.s.hoverFollow && this.target.data("width", m)), n = this.trigger.offset(), l = this.trigger.outerHeight(), d = this.trigger.outerWidth(), a = n.left, o = n.top;
                    var _ = function () {
                        a < 0 ? a = 0 : a + l > t(window).width() && (a = t(window).width() - d)
                    }, b = function () {
                        o < 0 ? o = 0 : o + l > t(document).height() && (o = t(document).height() - l)
                    };
                    this.s.hoverFollow && y.left && y.top && ("x" === this.s.hoverFollow ? (a = y.left, _()) : "y" === this.s.hoverFollow ? (o = y.top, b()) : (a = y.left, o = y.top, _(), b()));
                    var T, C = ["4-1", "1-4", "5-7", "2-3", "2-1", "6-8", "3-4", "4-3", "8-6", "1-2", "7-5", "3-2"],
                        I = this.s.position, w = !1;
                    t.each(C, function (t, e) {
                        if (e === I) return void (w = !0)
                    }), w || (I = "4-1");
                    var D = function (t) {
                        var e = "bottom";
                        switch (t) {
                            case"1-4":
                            case"5-7":
                            case"2-3":
                                e = "top";
                                break;
                            case"2-1":
                            case"6-8":
                            case"3-4":
                                e = "right";
                                break;
                            case"1-2":
                            case"8-6":
                            case"4-3":
                                e = "left";
                                break;
                            case"4-1":
                            case"7-5":
                            case"3-2":
                                e = "bottom"
                        }
                        return e
                    }, $ = function (t) {
                        return "5-7" === t || "6-8" === t || "8-6" === t || "7-5" === t
                    }, k = function (n) {
                        var i = 0, s = 0, r = !(!e.s.sharpAngle || !e.corner);
                        if ("right" === n) {
                            if (s = a + d + m + g, r && (s += e.corner.width()), s > t(window).width()) return !1
                        } else if ("bottom" === n) {
                            if (i = o + l + h + v, r && (i += e.corner.height()), i > f + t(window).height()) return !1
                        } else if ("top" === n) {
                            if (i = h + v, r && (i += e.corner.height()), i > o - f) return !1
                        } else if ("left" === n && (s = m + g, r && (s += e.corner.width()), s > a)) return !1;
                        return !0
                    };
                    T = D(I), this.s.sharpAngle && this.createSharp(T), this.s.edgeAdjust && (k(T) ? function () {
                        if (!$(I)) {
                            var t, e = {
                                "top": {"right": "2-3", "left": "1-4"},
                                "right": {"top": "2-1", "bottom": "3-4"},
                                "bottom": {"right": "3-2", "left": "4-1"},
                                "left": {"top": "1-2", "bottom": "4-3"}
                            }, n = e[T];
                            if (n) for (t in n) k(t) || (I = n[t])
                        }
                    }() : function () {
                        if ($(I)) {
                            I = {"5-7": "7-5", "7-5": "5-7", "6-8": "8-6", "8-6": "6-8"}[I]
                        } else {
                            var t = {
                                "top": {"left": "3-2", "right": "4-1"},
                                "right": {"bottom": "1-2", "top": "4-3"},
                                "bottom": {"left": "2-3", "right": "1-4"},
                                "left": {"bottom": "2-1", "top": "3-4"}
                            }, e = t[T], n = [];
                            for (var a in e) n.push(a);
                            I = k(n[0]) || !k(n[1]) ? e[n[0]] : e[n[1]]
                        }
                    }());
                    var O = D(I), S = I.split("-")[0];
                    if (this.s.sharpAngle && (this.createSharp(O), u = this.corner.width(), p = this.corner.height()), this.s.hoverFollow) "x" === this.s.hoverFollow ? (i = a + g, i = "1" === S || "8" === S || "4" === S ? a - (m - d) / 2 + g : a - (m - d) + g, "1" === S || "5" === S || "2" === S ? (s = o - v - h - p, c = o - p - v - 1) : (s = o + l + v + p, c = o + l + v + 1), r = n.left - (u - d) / 2) : "y" === this.s.hoverFollow ? (s = "1" === S || "5" === S || "2" === S ? o - (h - l) / 2 + v : o - (h - l) + v, "1" === S || "8" === S || "4" === S ? (i = a - m - g - u, r = a - u - g - 1) : (i = a + d - g + u, r = a + d + g + 1), c = n.top - (p - l) / 2) : (i = a + g, s = o + v); else switch (O) {
                        case"top":
                            s = o - v - h - p, i = "1" == S ? a - g : "5" === S ? a - (m - d) / 2 - g : a - (m - d) - g, c = o - p - v - 1, r = a - (u - d) / 2;
                            break;
                        case"right":
                            i = a + d + g + u, s = "2" == S ? o + v : "6" === S ? o - (h - l) / 2 + v : o - (h - l) + v, r = a + d + g + 1, c = o - (p - l) / 2;
                            break;
                        case"bottom":
                            s = o + l + v + p, i = "4" == S ? a + g : "7" === S ? a - (m - d) / 2 + g : a - (m - d) + g, c = o + l + v + 1, r = a - (u - d) / 2;
                            break;
                        case"left":
                            i = a - m - g - u, s = "2" == S ? o - v : "6" === S ? o - (m - d) / 2 - v : o - (h - l) - v, r = i + u, c = o - (m - u) / 2
                    }
                    return p && u && this.corner && this.corner.css({
                        "left": r,
                        "top": c,
                        "zIndex": this.s.zIndex + 1
                    }), this.target.css({"position": "absolute", "left": i, "top": s, "zIndex": this.s.zIndex}), this
                }, "createSharp": function (e) {
                    var n, a, o = "", i = "", s = {"left": "right", "right": "left", "bottom": "top", "top": "bottom"},
                        r = s[e] || "top";
                    this.target && (n = this.target.css("background-color"), parseInt(this.target.css("border-" + r + "-width")) > 0 && (a = this.target.css("border-" + r + "-color")), o = a && "transparent" !== a ? 'style="color:' + a + ';"' : 'style="display:none;"', i = n && "transparent" !== n ? 'style="color:' + n + ';"' : 'style="display:none;"');
                    var c = '<div id="floatCorner_' + e + '" class="float_corner float_corner_' + e + '"><span class="corner corner_1" ' + o + '>◆</span><span class="corner corner_2" ' + i + ">◆</span></div>";
                    return t("#floatCorner_" + e).size() || t("body").append(t(c)), this.corner = t("#floatCorner_" + e), this
                }, "targetHold": function () {
                    if (this.s.hoverHold) {
                        var t = parseInt(this.s.hideDelay, 10) || 200;
                        this.target && this.target.hover(function () {
                            e.flagDisplay = !0
                        }, function () {
                            e.timerHold && clearTimeout(e.timerHold), e.flagDisplay = !1, e.targetHold()
                        }), e.timerHold = setTimeout(function () {
                            e.displayDetect.call(e)
                        }, t)
                    } else this.displayDetect();
                    return this
                }, "loading": function () {
                    return this.target = t('<div class="float_loading"></div>'), this.targetShow(), this.target.removeData("width").removeData("height"), this
                }, "displayDetect": function () {
                    return !this.flagDisplay && this.display && (this.targetHide(), this.timerHold = null), this
                }, "targetShow": function () {
                    return e.cornerClear(), this.display = !0, this.container().setWidth().position(), this.target.show(), t.isFunction(this.s.showCall) && this.s.showCall.call(this.trigger, this.target), this
                }, "targetHide": function () {
                    return this.display = !1, this.targetClear(), this.cornerClear(), t.isFunction(this.s.hideCall) && this.s.hideCall.call(this.trigger), this.target = null, this.trigger = null, this.s = {}, this.targetProtect = !1, this
                }, "targetClear": function () {
                    this.target && (this.target.data("width") && this.target.removeData("width").removeData("height"), this.targetProtect && this.target.children().hide().appendTo(t("body")), this.target.unbind().hide())
                }, "cornerClear": function () {
                    this.corner && this.corner.remove()
                }, "target": null, "trigger": null, "s": {}, "cacheData": {}, "targetProtect": !1
            };
            t.powerFloat = {}, t.powerFloat.hide = function () {
                e.targetHide()
            };
            var n = {
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
}, [477]);
//# sourceMappingURL=order_info.c3a48399cea8d5e4cd43.js.map