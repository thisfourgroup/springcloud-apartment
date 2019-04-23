package com.jk.shiro;

import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class MyFormAuthziction extends FormAuthenticationFilter {
    /**
     * 重写登录成功方法
     * @param token
     * @param subject
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @Override
    protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request, ServletResponse response) throws Exception {
        //清空原有路径 跳转到下一个路径
        SavedRequest savedRequest = WebUtils.getAndClearSavedRequest(request);
        if(savedRequest!=null) {
            String requestUrl = savedRequest.getRequestUrl();
            System.out.println(requestUrl);
            //如果上一次请求路径为空 则跳转到登录成功页面
            if ("/".equals(requestUrl)) {
                WebUtils.redirectToSavedRequest(request, response, "/GoToHouse");
            } else {
                //如果上一次请求正常 则直接重定向到上一次请求
                WebUtils.redirectToSavedRequest(request, response, requestUrl);
            }
        }else {
            WebUtils.redirectToSavedRequest(request, response, "/GoToHouse");
        }
        return false;
    }
}
