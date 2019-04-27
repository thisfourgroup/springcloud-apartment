package com.jk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class PageController {

    @RequestMapping("toMain")
    public String toMain(){
        return "main";
    }
//调到登录页面
    @RequestMapping("toLogin")
    public String toLogin(){
        return "login";
    }

    //调到注册页面
    @RequestMapping("toReg")
    public String toReg(){
        return "reg";
    }


//跳转到树
    @RequestMapping("toTree")
    public String toTree(){
        return "treelist";
    }
  //跳转到房子信息页面
    @RequestMapping("toHouse")
    public String toHouse(){
        return "houselist";
    }

    @RequestMapping("toHouse2")
    public String toHouse2(){
        return "houselist2";
    }

    @RequestMapping("toHouse3")
    public String toHouse3(){
        return "houselistPage";
    }


 //跳转到t_title大标头页面
 @RequestMapping("toTitle")
 public String toTitle(){
     return "titlelist";
 }

    //跳转到t_title 新增页面
    @RequestMapping("toAddTitle")
    public String toAddTitle(){
        return "addTitle";
    }

    //跳转到t_title 修改页面
    @RequestMapping("toEditTitle")
    public String toEditTitle(){
        return "updateTitle";
    }

    //5.1大促销
    @RequestMapping("toHuoDong")
    public String toHuoDong(){
        return "dacuxiao";
    }
//大上海
    @RequestMapping("toShangHai")
    public String toShangHai(){
        return "daShangHai";
    }
}
