package com.jk.zdg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class PageController {

    //----------------------------------forum----------------------------------------------------

    @RequestMapping("toMain")
    public String toMain(){
        return "ht/forum";
    }

    @RequestMapping("toAdd")
    public String photoadd(){
        return "ht/addforum";
    }


    //----------------------------------Comment----------------------------------------------------
    @RequestMapping("toAdd1")
    public String toAdd1(){
        return "ht/addcomment";
    }

    @RequestMapping("toComment")
    public String show(){
        return "ht/comment";
    }


    @RequestMapping("test")
    public String test(){
        return "ht/test";
    }

    @RequestMapping("test2")
    public String test2(){
        return "ht/test2";
    }

    @RequestMapping("test3")
    public String test3(){
        return "ht/examples/html-editor";
    }


    //----------------------------------前台----------------------------------------------------

    //首页
    @RequestMapping("toshouye1")
    public String toshouye1(){
        return "shouye";
    }
    //首页
    @RequestMapping("toshouye")
    public String toshouye(){
        return "qt/shouye";
    }

    //故事
    @RequestMapping("togushi")
    public String togushi(){
        return "qt/gushi";
    }

    //福利社
    @RequestMapping("tofulishe")
    public String tofulishe(){
        return "qt/fulishe";
    }


    //论坛
    @RequestMapping("toluntan")
    public String toluntan(){
        return "qt/luntan";
    }





}
