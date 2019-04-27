package com.jk.controller;

import com.jk.pojo.UserBean;
import com.jk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@Controller
public class UserController {

    @Autowired
    private UserService userService;
    @Value("${server.port}")
    String port;

    @GetMapping("testPro")
    @ResponseBody
    public String testPro() {
        System.out.println("ribbon调用生产者成功。。。。。。。。。");
        return "success--" + port;
    }


 //注册
    @RequestMapping("reg")
    @ResponseBody
    public Boolean reg(@RequestBody UserBean userBean){
        try {
            return userService.saveReg(userBean);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

//登录
    @ResponseBody
    @RequestMapping("login1")
    public String login1(@RequestBody UserBean user, HttpSession session) {

        return userService.login1(user,session);
    }
}
