/*
* TJPFloating: 浮层
*/
;
!function () {
    var utility = {
        html2dom: function (html) {
            var dom = document.createDocumentFragment();
            var domWrapper = document.createElement("div");
            domWrapper.innerHTML = html;
            for (var a = domWrapper.children; a.length > 0;)
                dom.appendChild(a[0]);
            return dom;
        },
        contains: function (e, t) {
            return (e.contains ? e != t && e.contains(t) : !!(16 & e.compareDocumentPosition(t)))
        },
        checkHover: function (e, t) {
            try {
                if (utility.getEvent(e).type == "mouseover") {

                    return !(utility.contains(t, utility.getEvent(e).relatedTarget || utility.getEvent(e).fromElement) || (utility.getEvent(e).relatedTarget || utility.getEvent(e).fromElement) === t);
                }
                else {
                    return !(utility.contains(t, utility.getEvent(e).relatedTarget || utility.getEvent(e).toElement) || (utility.getEvent(e).relatedTarget || utility.getEvent(e).toElement) === t);
                }
            } catch (e) { }
        },
        getEvent: function (e) {
            return e || window.event
        },
        createScript: function (url, isAsync) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = isAsync;
            script.src = url;
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(script)
        },
        createStyleTag: function (cssContent) {
            var head = document.getElementsByTagName("head")[0];
            var style = document.createElement("style");
            style.type = "text/css";
            style.styleSheet ? style.styleSheet.cssText = cssContent : style.appendChild(document.createTextNode(cssContent));
            head.appendChild(style)
        },
        /* 设置cookie */
        setCookie: function (settings, t, expires) {
            var domain = utility.getCookieDomain();
            o = [];
            for (var setting in settings) {
                var settingValue = (null === settings[setting] ? "" : settings[setting]);
                o.push(setting + "=" + settingValue);
            }
            var expireDate = new Date;
            expireDate.setDate(expireDate.getDate() + expires);
            document.cookie = ("" == t ? o.join("&") + "; expires=" + expireDate.toGMTString() + "; domain=" + domain + ";path=/;" : o.join("&") + "; domain=" + domain + ";path=/;");
        },
        /* 获取cookie的值() */
        getCookie: function (name) {
            if (document.cookie.length > 0) {
                var index = document.cookie.indexOf(name + "=");
                if (-1 != index) {
                    index = index + name.length + 1;
                    var endIndex = document.cookie.indexOf(";", index);
                    if (endIndex == -1) {
                        endIndex = document.cookie.length
                    }

                    return document.cookie.substring(index, endIndex);
                }
            }
            return ""
        },
        /* 获取一个cookie中保存多个值的的值(以&分割) */
        getCookie2: function (name, item) {
            name = name.toLowerCase();
            item = item.toLowerCase();
            var cookieLowercase = document.cookie.toLowerCase();
            var value = "";
            if (cookieLowercase.length > 0) {
                var index = cookieLowercase.indexOf(name + "=");
                if (-1 != index) {
                    index = index + name.length + 1;
                    var endIndex = cookieLowercase.indexOf(";", index);
                    -1 == endIndex && (endIndex = cookieLowercase.length);
                    value = cookieLowercase.substring(index, endIndex)
                }
            }
            if (value.length > 0) {
                var index = value.indexOf(item + "=");
                if (-1 != index) {
                    index = index + item.length + 1;
                    var endIndex = value.indexOf("&", index);
                    -1 == endIndex && (endIndex = value.length);
                    return value.substring(index, endIndex)
                }
            }
            return ""
        },
        /* 获取域名 */
        getCookieDomain: function () {
            var url = document.URL;
            url = url.toLowerCase();
            var domain = "";

            if (url.indexOf("localhost") >= 0 || url.indexOf("127.0.0.1") >= 0) {
                domain = "localhost";
            }
            else {
                if (url.indexOf("fvt") > -1) {
                    domain = "fvt.tujia.com";
                } else if (url.indexOf("bvt") > -1) {
                    domain = "bvt.tujia.com";

                } else {
                    domain = "tujia.com";
                }
            }

            return domain;
        },

        hasClass: function (e, t) {
            var n = e.className, a = n.split((/\s+/));
            for (var o in a)
                if (a[o] === t)
                    return !0;
            return !1
        },
        addClass: function (e, t) {
            this.hasClass(e, t) || (e.className += " " + t)
        },
        removeClass: function (e, t) {
            if (this.hasClass(e, t)) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ")
            }
        },
        toggleClass: function (e, t) {
            (this.hasClass(e, t) ? this.removeClass(e, t) : this.addClass(e, t))
        },
        addEventHandler: function (el, event, handler) {
            if (el.attachEvent) {
                el.attachEvent("on" + event, handler);
            } else {
                if (el.addEventListener) {
                    el.addEventListener(event, handler, false);
                }
                else {
                    el["on" + event] = handler;
                }
            }
        },
        getHostName: function (url) {
            var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)");
            var n = t.exec(url);
            return (n ? n[1] : url);
        },
        getSoaUrl: function () {
            var url = utility.getHostName(window.location.href);
            url = url.toLowerCase();
            var protocol = "https:" == document.location.protocol ? "https://" : "http://";
            if (url.indexOf("localhost") > -1) {
                return protocol + "localhost:2000";
            } else if (url.indexOf('fvt') > -1) {
                var indexOfFvt = url.indexOf('fvt') - 2; // 1 2 其他
                if(url[indexOfFvt] == '1') {
                  return protocol + 'www1.fvt.tujia.com';
                } else if(url[indexOfFvt] == '2') {
                  return protocol + 'www2.fvt.tujia.com';
                } else {
                  return protocol + 'www.fvt.tujia.com';
                }
                return protocol + "www.bvt.tujia.com";
            } else if (url.indexOf("dev") > -1) {
                return protocol + "www.dev.tujia.com";
            } else {
                return protocol + "www.tujia.com";
            }
        },
        getStaticUrl: function () {
            var host = utility.getHostName(window.location.href);

            host = host.toLowerCase();
            var protocol = "https:" == document.location.protocol ? "https://" : "http://";

            if (host.indexOf("localhost") > -1) {
                return protocol + "localhost:2006";
            } else if (host.indexOf("bvt") > -1) {
                return protocol + "staticfile.bvt.tujia.com";
            } else if (host.indexOf("fvt") > -1) {
                return protocol + "staticfile.fvt.tujia.com";
            } else {
                return protocol + "staticfile.tujia.com";
            }
        }

    };
    var l = function () {
        e && (e = e);
        var e = function (t, n) {
            if (window == this) return new e(t, n);
            this.length = 0; var a = this.find(t, n); return [].push.apply(this, a), this
        };
        return e.inArray = function (e, t, n) {
            for (var a = -1, o = 0; o < e.length; o++)
                if (e[o] === t) {
                    a = o; break
                }
            if ("undefined" == typeof n)
                return !!~a;
            var i = e.slice();
            return 0 == n && -1 == a && i.push(t), 1 == n && -1 != a && i.splice(a, 1), i
        }, e.ready = function () {
            function e() {
                if (!t) {
                    for (var e = 0; e < n.length; e++)
                        n[e].call(document);
                    t = !0, n = null
                }
            }
            var t = !1, n = [];
            return (document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent("onload", e)), function (e) {
                (t ? e.call(document) : n.push(e))
            }
        }(),
            function () {
                e.animateArr = [];
                e.getElementsByClassName = (document.getElementsByClassName ? function (e, t) {
                    t = t || document; var n = t.getElementsByClassName(e);
                    return [].slice.call(n)
                } : function (e, t) {
                    t = t || document;
                    var n = new Array, a = t.getElementsByTagName("*"), o = a.length, r = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    for (i = 0; o > i; i++) r.test(a[i].className) && n.push(a[i]); return n
                }),
                    e.addHandler = (document.addEventListener ? function (e, t, n) { e.addEventListener(t, n, !1) } : function (e, t, n) {
                        e.attachEvent("on" + t, n)
                    }),
                    e.removeHandler = (document.removeEventListener ? function (e, t, n) { e.removeEventListener(t, n, !1) } : function (e, t, n) { e.detachEvent("on" + t, n) }),
                    e.camelCase = function (e) { return e.replace((/-([\da-z])/gi), function (e, t) { return t.toUpperCase() }) },
                    e.getStyle = (window.getComputedStyle ? function (t, n) {
                        return n = e.camelCase(n), t.style[n] || window.getComputedStyle(t)[n]
                    } : function (t, n) { return n = e.camelCase(n), t.currentStyle[n] })
            }(),
            e.prototype = {
                find: function (t, n) {
                    if ("string" == typeof t) {
                        if ("#" == t.substr(0, 1)) return t = t.substr(1), [document.getElementById(t)]; if ("." == t.substr(0, 1)) {
                            t = t.substr(1); var a = document; return "undefined" != typeof n && (a = document.getElementById(n.substr(1))), e.getElementsByClassName(t, a)
                        } return []
                    } return (t.constructor == Array ? t : [t])
                },
                each: function (e) { var t, n = this.length; for (t = 0; n > t; t++) e.call(this[t]); return this },
                eq: function (t) { return e([].slice.call(this, t, t + 1)) },
                parent: function () { var t = []; return this.each(function () { !e.inArray(t, this.parentNode) && t.push(this.parentNode) }), e(t) },
                children: function () {
                    var t = this, n = [];
                    return this.each(function () { t.each.call(this.childNodes, function () { 1 == this.nodeType && n.push(this) }) }), e(n)
                },
                css: function (t, n) { var a = this; if ("undefined" == typeof n) { if ("object" == typeof t) return a.each(function () { a.css(t, this) }); var o = ""; return a.each(function () { "" == o && (o = a.css(t, this)) }), o } if ("object" != typeof t) return e.getStyle(n, t); for (var i in t) n.style[i] = t[i] },
                show: function () { return this.css({ display: "block" }) },
                hide: function () { return this.css({ display: "none" }) },
                addClass: function (t) {
                    return this.each(function () {
                        for (var n = t.split((/\s+/)), a = 0; a < n.length; a++) this.className = e.inArray(this.className.split((/\s+/)), n[a], 0).join(" ")
                    })
                },
                removeClass: function (t) {
                    return this.each(function () {
                        for (var n = t.split((/\s+/)), a = 0; a < n.length; a++) this.className = e.inArray(this.className.split((/\s+/)), n[a], 1).join(" ")
                    })
                },
                html: function (e, t) { var n = this; if ("undefined" == typeof t) { if ("undefined" != typeof e) return n.each(function () { n.html(e, this) }); var a = ""; return n.each(function () { "" == a && (a = n.html(e, this)) }), a } return ("undefined" == typeof e ? t.innerHTML : void (t.innerHTML = e)) },
                attr: function (e, t, n) {
                    var a = this; if ("undefined" == typeof n) {
                        if ("undefined" != typeof t) return a.each(function () {
                            a.attr(e, t, this)
                        }); var o = ""; return a.each(function () { "" == o && (o = a.attr(e, t, this)) }), o
                    } return ("undefined" == typeof t ? ("value" == e ? n.value : n.getAttribute(e)) : void (("value" == e ? n.value = t : n.setAttribute(e, t))))
                },
                val: function (e) { return this.attr("value", e) },
                on: function (t, n, a) {
                    var o = this; if ("undefined" == typeof a) return o.each(function () {
                        o.on(t, n, this)
                    }), o; var i = t.split((/\s+/)); for (var r in i) e.addHandler(a, i[r], n)
                },
                off: function (t, n, a) { var o = this; if ("undefined" == typeof a) return o.each(function () { o.off(t, n, this) }), o; var i = t.split((/\s+/)); for (var r in i) e.removeHandler(a, i[r], n) },
                one: function (e, t, n) {
                    var a = this; if ("undefined" == typeof n) return a.each(function () {
                        a.one(e, t, this)
                    }), a; var o = function () { t.call(n), a.off(e, o, n) }; a.on(e, o, n)
                },
                animate: function (t, n, a, o) {
                    return this.each(function () {
                        var i = this; if (o = o || function () { }, !e.inArray(e.animateArr, i)) {
                            e.animateArr.push(i); var r, s, c = [], l = []; switch (a) {
                                case "linear": s = function (e, t, n, a) { return n * e / a + t }; break; case "ease": s = function (e, t, n, a) {
                                    return ((e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t)
                                }; break; case "ease-in": s = function (e, t, n, a) { return n * (e /= a) * e + t }; break; case "ease-out": s = function (e, t, n, a) { return -n * (e /= a) * (e - 2) + t }
                            } ("linear" == a ? s = function (e, t, n, a) { return n * e / a + t } : ("ease" == a ? s = function (e, t, n, a) { return ((e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t) } : ("ease-in" == a ? s = function (e, t, n, a) {
                                return n * (e /= a) * e + t
                            } : "ease-out" == a && (s = function (e, t, n, a) { return -n * (e /= a) * (e - 2) + t })))); for (var d in t) {
                                var u = 0; "" != i.style[d] && "undefined" != typeof i.style[d] && (u = parseFloat(e.getStyle(i, d).match((/^(-?\d+(\.\d+)?)/))[0])); var p = parseFloat(t[d].match((/^(-?\d+(\.\d+)?)/))[0]), f = t[d].match((/[^\-\.0-9]+$/)); unt = (f ? f[0] : ""), c.push([d, u, unt]), l.push([d, p, unt])
                            } var m = (new Date).getTime(), g = function (e, t) { for (var n = 0; n < l.length; n++) { var a = s(e, c[n][1], l[n][1] - c[n][1], t), o = l[n][0], r = a + l[n][2]; i.style[o] = r } }, h = function () { g(n, n), e.animateArr = e.inArray(e.animateArr, i, 1), o.call(i) }, _ = function () { var e = (new Date).getTime() - m; (n > e ? g(e, n) : (window.clearInterval(r), h())) };
                            r = window.setInterval(function () { _() }, 1)
                        }
                    })
                }
            },
            e
    }();

    var TJPFloatEvent = {
        running: false,
        d_wrap: l("#appd_wrap_default"),
        expand: function () {
            var self = this;
            if (!self.running) {
                self.running = true;
                l("#appd_wrap_open_cnt").animate(
                    { left: "-100%" },
                    300,
                    "ease-out",
                    function () {
                        l(this).parent().hide();
                        l("#fl_pop_wrap_cntr").animate(
                            { left: "0%" },
                            800,
                            "ease-out",
                            function () { self.running = 0 }
                        ).parent().show()
                    }
                )
            }
        },
        collapse: function () {
            var self = this;
            if (!self.running) {
                self.running = true;
                l("#fl_pop_wrap_cntr").animate(
                    { left: "-100%" },
                    800,
                    "ease-out",
                    function () {

                    }
                )
            }
        },
        open: function () {

        },
        close: function () {

        },
        allClose: function () {

        },
        addTrack: function () {


        },
        changeDowloadErweima: function () {

    };

    window.TJPFloating = {

        },
        getPopHTML: function () {
            TJPFloating.buildStyleTag();
            var d = utility.getSoaUrl() + "/UI/Float?callback=TJPFloating.BuildHTML&PlatformType=pc";
            utility.createScript(d, true);
        },
        buildStyleTag: function () {
            var e = document.createElement("link");
            e.type = "text/css";
            e.rel = "stylesheet";
            e.href = utility.getStaticUrl() + "/PortalSite2/Styles/UI/float_pc.css";
            document.head ? document.head.appendChild(e) : document.getElementsByTagName("head")[0].appendChild(e);
        }

    }
}();
