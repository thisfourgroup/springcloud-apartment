//编码
function lz_encode(str) {
    var e = "", i = 0;

    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 255) {
            e = e + escape(str.charAt(i));
        }
        else {
            e = e + str.charAt(i);
        }
    }

    return e;
}

//返回当前浏览器的语言。
function lz_get_language() {
    var l = "";
    var n = navigator;

    if (n.language) {
        l = n.language.toLowerCase();
    }
    else
        if (n.browserLanguage) {
            l = n.browserLanguage.toLowerCase();
        }

    return l;
}

//返回由客户机发送服务器的 user-agent 头部的值
function lz_get_agent() {
    var a = "";
    var n = navigator;

    if (n.userAgent) {
        a = n.userAgent;
    }

    return a;
}
//获取浏览器名称
function lz_get_app() {
    var a = "";
    var n = navigator;

    if (n.appName) {
        a = n.appName;
    }
    return a;
}


function lz_c_ctry_top_domain(str) {
    var pattern = "/^aero$|^cat$|^coop$|^int$|^museum$|^pro$|^travel$|^xxx$|^com$|^net$|^gov$|^org$|^mil$|^edu$|^biz$|^info$|^name$|^ac$|^mil$|^co$|^ed$|^gv$|^nt$|^bj$|^hz$|^sh$|^tj$|^cq$|^he$|^nm$|^ln$|^jl$|^hl$|^js$|^zj$|^ah$|^hb$|^hn$|^gd$|^gx$|^hi$|^sc$|^gz$|^yn$|^xz$|^sn$|^gs$|^qh$|^nx$|^xj$|^tw$|^hk$|^mo$|^fj$|^ha$|^jx$|^sd$|^sx$/i";

    if (str.match(pattern)) { return 1; }

    return 0;
}

function lz_c_ctry_domain(str) {
    var pattern = "/^ac$|^ad$|^ae$|^af$|^ag$|^ai$|^al$|^am$|^an$|^ao$|^aq$|^ar$|^as$|^at$|^au$|^aw$|^az$|^ba$|^bb$|^bd$|^be$|^bf$|^bg$|^bh$|^bi$|^bj$|^bm$|^bo$|^br$|^bs$|^bt$|^bv$|^bw$|^by$|^bz$|^ca$|^cc$|^cd$|^cf$|^cg$|^ch$|^ci$|^ck$|^cl$|^cm$|^cn$|^co$|^cr$|^cs$|^cu$|^cv$|^cx$|^cy$|^cz$|^de$|^dj$|^dk$|^dm$|^do$|^dz$|^ec$|^ee$|^eg$|^eh$|^er$|^es$|^et$|^eu$|^fi$|^fj$|^fk$|^fm$|^fo$|^fr$|^ly$|^hk$|^hm$|^hn$|^hr$|^ht$|^hu$|^id$|^ie$|^il$|^im$|^in$|^io$|^ir$|^is$|^it$|^je$|^jm$|^jo$|^jp$|^ke$|^kg$|^kh$|^ki$|^km$|^kn$|^kp$|^kr$|^kw$|^ky$|^kz$|^la$|^lb$|^lc$|^li$|^lk$|^lr$|^ls$|^lt$|^lu$|^lv$|^ly$|^ga$|^gb$|^gd$|^ge$|^gf$|^gg$|^gh$|^gi$|^gl$|^gm$|^gn$|^gp$|^gq$|^gr$|^gs$|^gt$|^gu$|^gw$|^gy$|^ma$|^mc$|^md$|^mg$|^mh$|^mk$|^ml$|^mm$|^mn$|^mo$|^mp$|^mq$|^mr$|^ms$|^mt$|^mu$|^mv$|^mw$|^mx$|^my$|^mz$|^na$|^nc$|^ne$|^nf$|^ng$|^ni$|^nl$|^no$|^np$|^nr$|^nu$|^nz$|^om$|^re$|^ro$|^ru$|^rw$|^pa$|^pe$|^pf$|^pg$|^ph$|^pk$|^pl$|^pm$|^pr$|^ps$|^pt$|^pw$|^py$|^qa$|^wf$|^ws$|^sa$|^sb$|^sc$|^sd$|^se$|^sg$|^sh$|^si$|^sj$|^sk$|^sl$|^sm$|^sn$|^so$|^sr$|^st$|^su$|^sv$|^sy$|^sz$|^tc$|^td$|^tf$|^th$|^tg$|^tj$|^tk$|^tm$|^tn$|^to$|^tp$|^tr$|^tt$|^tv$|^tw$|^tz$|^ua$|^ug$|^uk$|^um$|^us$|^uy$|^uz$|^va$|^vc$|^ve$|^vg$|^vi$|^vn$|^vu$|^ye$|^yt$|^yu$|^za$|^zm$|^zr$|^zw$/i";

    if (str.match(pattern)) { return 1; }

    return 0;
}

//获取域
function lz_get_domain(host) {
    var d = host.replace(/^www\./, "");

    var ss = d.split(".");
    var l = ss.length;

    if (l == 3) {
        if (lz_c_ctry_top_domain(ss[1]) && lz_c_ctry_domain(ss[2])) {
        }
        else {
            d = ss[1] + "." + ss[2];
        }
    }
    else if (l >= 3) {

        var ip_pat = "^[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*$";

        if (host.match(ip_pat)) {
            return d;
        }

        if (lz_c_ctry_top_domain(ss[l - 2]) && lz_c_ctry_domain(ss[l - 1])) {
            d = ss[l - 3] + "." + ss[l - 2] + "." + ss[l - 1];
        }
        else {
            d = ss[l - 2] + "." + ss[l - 1];
        }
    }

    return d;
}

function lz_get_cookie(name) {
    var mn = name + "=";
    var b, e;
    var co = document.cookie;

    if (mn == "=") {
        return co;
    }

    b = co.indexOf(mn);

    if (b < 0) {
        return "";
    }

    e = co.indexOf(";", b + name.length);

    if (e < 0) {
        return co.substring(b + name.length + 1);
    }
    else {
        return co.substring(b + name.length + 1, e);
    }
}

function lz_set_cookie(name, val, cotp) {
    var date = new Date;
    var year = date.getFullYear();
    var hour = date.getHours();

    var cookie = "";

    if (cotp == 0) {
        cookie = name + "=" + val + ";";
    }
    else if (cotp == 1) {
        year = year + 10;
        date.setYear(year);
        cookie = name + "=" + val + ";expires=" + date.toGMTString() + ";";
    }
    else if (cotp == 2) {
        hour = hour + 1;
        date.setHours(hour);
        cookie = name + "=" + val + ";expires=" + date.toGMTString() + ";";
    }

    var d = lz_get_domain(document.domain);
    if (d != "") {
        cookie += "domain=" + d + ";";
    }
    cookie += "path=" + "/;";

    document.cookie = cookie;
}

function str_reverse(str) {
    var ln = str.length;
    var i = 0;
    var temp = "";
    for (i = ln - 1; i > -1; i--) {
        if (str.charAt(i) == ".")
            temp += "#";
        else
            temp += str.charAt(i);
    }

    return temp;
}


function lz_main() {
    var unit_id = "";
    var i;
    var expire_time = 1800;

    var host = document.location.host;
    var domain = lz_get_domain(host.toLocaleLowerCase());
    var hashval = 0;
    for (i = 0; i < domain.length; i++) {
        hashval += domain.charCodeAt(i);
    }
    //uv 
    var uv_str = lz_get_cookie("lzstat_uv");
    var uv_id = "";
    var uv_new = 0;
    if (uv_str == "") {
        uv_new = 1;
        var rand1 = parseInt(Math.random() * 4000000000);
        var rand2 = parseInt(Math.random() * 4000000000);
        uv_id = String(rand1) + String(rand2);

        var value = uv_id + "|" + unit_id;

        lz_set_cookie("lzstat_uv", value, 1);
    }
    else {
        var arr = uv_str.split("|");
        uv_id = arr[0];
        var uids_str = arr[1];
        var uids = uids_str.split("@");
        var uid_num = uids.length;

        var bingo = 0;
        for (var pos = 0, max = uids.length; pos < max; pos++) {
            var uid = uids[pos];
            if (uid == unit_id) {
                bingo = 1;
                break;
            }
        }

        if (bingo == 0) {
            uv_new = 1;

            if (uid_num >= 100) {
                var value = uv_id + "|" + unit_id;
            }
            else {
                var value = uv_str + "@" + unit_id;
            }

            lz_set_cookie("lzstat_uv", value, 1);
        }
    }


    var ref = document.referrer;
    ref = lz_encode(String(ref));

    var url = document.URL;
    url = lz_encode(String(url));

    var title = document.title;
    title = escape(String(title));

    var charset = document.charset;
    charset = lz_encode(String(charset));

    var app = lz_get_app();
    app = lz_encode(String(app));

    var agent = lz_get_agent();
    agent = lz_encode(String(agent));


    var filtered = 0;
    var domain_filters = new Array();
    var ip_filters = new Array();

    //domain_filters[0] = "gro#tra763";
    //domain_filters[1] = "moc#olzd";
    //domain_filters[2] = "moc#tra763";
    //domain_filters[3] = "moc#df571";
    //domain_filters[4] = "ten#oog1";
    //domain_filters[5] = "nc#ppk1";
    //domain_filters[6] = "nc#osnaknak";
    //domain_filters[7] = "nc#emocwww";
    //domain_filters[8] = "nc#psalla";
    //domain_filters[9] = "moc#oesii";
    //domain_filters[10] = "moc#kh0083";
    //domain_filters[11] = "nc#kpwww";
    //domain_filters[12] = "nc#moc#zw001";
    //domain_filters[13] = "nc#kpemoc";
    //domain_filters[14] = "moc#eyiq063";
    //domain_filters[15] = "moc#qqa4";
    //domain_filters[16] = "ten#aboakoak";
    //domain_filters[17] = "moc#ecilliw";
    //domain_filters[18] = "nc#moc#ibeea";
    //domain_filters[19] = "moc#ibeea";
    //domain_filters[20] = "nc#tra763";
    //domain_filters[21] = "moc#025sns";
    //domain_filters[22] = "moc#og321oah";
    //domain_filters[23] = "moc#9zznc";
    //domain_filters[24] = "nc#9zznc";
    //domain_filters[25] = "moc#d135";
    //domain_filters[26] = "moc#ridzoog";
    //domain_filters[27] = "ten#rqrq";
    //domain_filters[28] = "moc#195nak";
    //domain_filters[29] = "moc#uynijtn";
    //domain_filters[30] = "moc#falwen";
    //domain_filters[31] = "nc#moc#njyhxj";

    var escape_domain = str_reverse(domain);
    for (i in domain_filters) {
        if (domain_filters[i] == escape_domain)
            filtered = 1;
    }


    for (i in ip_filters) {
        if (ip_filters.hasOwnProperty(i) && ip_filters[i] == client_ip) {
            filtered = 1;
            break;
        }
    }
    document.write('<scr' + 'ipt src=\'' + portalUrl + '/statkeyword.ashx?ref=' + ref + '&url=' + url + '&title=' + title + '&charset=' + charset + '&domain=' + domain + '&hashval=' + hashval + '&filtered=' + filtered + '&app=' + app + '&agent=' + agent + '\'></scr' + 'ipt>');
}

lz_main();
