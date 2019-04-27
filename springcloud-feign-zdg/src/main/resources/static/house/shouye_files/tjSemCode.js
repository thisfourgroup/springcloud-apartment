/**
 * 初始化页面级别的 UTM/CODE
 * 需要放在页面加载前面就执行完成
 * 对外抛出全局变量:
 *  window.tjGlobal.tujia_utm
 *  window.tjGlobal.tujia_code
 *  window.tjGlobal.tujia_code_site
 *  window.tjGlobal.tujia_out_site_landingUrl
 *  window.tjGlobal.tujia_out_site_referrerUrl
 */
(function initUtmCode(){
  var refUrl = decodeURIComponent(queryString('refurl') || '') || document.referrer
  var isTjSiteRefStr = queryString('istjsite')
  var code = queryString('tujia_code') || queryString('code')
  var utm = queryString('utm_source')
  // 如果url中不存在istjsite这个参数且有refUrl 情况下 需要对isTjSiteRefStr进行冲设定
  if(!isTjSiteRefStr&&refUrl){
    isTjSiteRefStr =  /^http(s?):\/\/[a-zA-Z1-9]*([1-9]?.fvt)?.tujia.com/.test(refUrl)?'true':'false'
  }

  function queryString(key) {
      return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
  }

  function setCookie(name, value, expires, path, domain, secure) {
      var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
      if (expires) {
          cookie += '; expires=' + expires.toGMTString();
      }
      if (path) {
          cookie += '; path=' + path;
      }
      if (domain) {
          cookie += '; domain=' + domain;
      }
      if (secure) {
          cookie += '; secure=' + secure;
      }
      document.cookie = cookie;
  }

  function getCookie() {
      var cookie = {};
      var all = document.cookie;
      if (all === '')
          return cookie;
      var list = all.split('; ');
      for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var p = item.indexOf('=');
          var name = item.substring(0, p);
          name = decodeURIComponent(name);
          var value = item.substring(p + 1);
          try {
            value = decodeURIComponent(value);
          } catch (e) {
            console.log('value decodeURIComponent error value='+value)
          } finally {
          }
          cookie[name] = value;
      }
      return cookie;
  }

  function setCookieByDays(key,value,days){
    setCookie(key, value, new Date(new Date().setHours(new Date().getHours() + days*24)),'/','tujia.com');
  }

  function initSemCode(){
    if(isTjSiteRefStr == 'false'){
      var cookieDays = 7
      if(code){
        cookieDays = 30
      }
      setCookieByDays('tujia_out_site_landingUrl',window.location.href,cookieDays)
      setCookieByDays('tujia_out_site_referrerUrl',refUrl,cookieDays)
      if(code){
        setCookieByDays('tujia_code',code,30)
      }
      else{
        setCookieByDays('tujia_code','',0)
      }
      if(utm){
        setCookieByDays('tujia_utm',utm,7)
      }
      else{
        setCookieByDays('tujia_utm','',0)
      }
      console.log('-----tujia_out_site_landingUrl',window.location.href)
      console.log('-----tujia_out_site_referrerUrl',refUrl)
    }
    else{
      if(code){
         setCookieByDays('tujia_code_site',code,0.1)
      }
    }
  }

  initSemCode()
  var cookies = getCookie()
  window.tjGlobal = window.tjGlobal || {}
  window.tjGlobal.tujia_utm = cookies.tujia_utm
  window.tjGlobal.tujia_code = cookies.tujia_code
  window.tjGlobal.tujia_code_site = cookies.tujia_code_site
  window.tjGlobal.tujia_out_site_landingUrl = cookies.tujia_out_site_landingUrl
  window.tjGlobal.tujia_out_site_referrerUrl = cookies.tujia_out_site_referrerUrl
})();
