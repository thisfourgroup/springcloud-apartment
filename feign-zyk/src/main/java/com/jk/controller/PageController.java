package com.jk.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Mr.Zhang
 * @title: PageController
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  9:31
 */
@Controller
public class PageController {

    @RequestMapping("GoToStoryshow")
    public String storyshow(){
        return "/storyshow";
    }
    @RequestMapping("GoTOAddHtml")
    public String GoTOAddHtml(){
        return "/addstory";
    }
    @RequestMapping("GoToTitleshow")
    public String GoToTitleshow(){
        return "/titleshow";
    }
    @RequestMapping("GoToFacshow")
    public String GoToFacshow(){
        return "/facshow";
    }

    @RequestMapping("GoToHouse")
    public String GoToHouse(){
        return "houseshow";
    }

    @RequestMapping("GoToQueryNotice")
    public String GoToQueryNotice(){
        return "facshow";
    }

    @RequestMapping("GoToQueryRules")
    public String GoToQueryRules(){
        return "ruleshow";
    }

    @RequestMapping("GoToQueryImage")
    public String GoToQueryImage(){
        return "imageshow";
    }

    @RequestMapping("GoToHouseHtml")
    public String GoToHouseHtml(){
        return "househtml";
    }

    @RequestMapping("toMap")
    public String toMap(){
        return "/Map";
    }

    @RequestMapping("toLogin")
    public String login(){
        return "login";
    }

    @RequestMapping("registry")
    public String registry(){
        return "registry";
    }

    @RequestMapping("login")
    public String login(HttpServletRequest request, String username, String password, ModelMap map){
        UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(username, password);

        try {
            SecurityUtils.getSubject().login(usernamePasswordToken);
        } catch (UnknownAccountException e) {
            System.out.println("request = [ 用户名异常]");
            map.put("message","用户名错误");
            return "redirect:toLogin";
        }catch (AuthenticationException e){

            System.out.println("request = [密码异常]");
            map.put("message","密码错误");
            return "redirect:toLogin";
        }
        return "redirect:GoToHouse";
    }

    @RequestMapping("GoToOrder")
    public String GoToOrder(){
        return "order";
    }

    @RequestMapping("GoToAlipay")
    public String GoToAlipay(){
        return "alipay";
    }

    @RequestMapping("GoToAlipay1")
    public String GoToAlipay1(){
        return "alipay1";
    }

}
