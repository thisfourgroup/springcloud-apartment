package com.jk.controller;


import com.jk.pojo.UserBean;
import com.jk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RestTemplate restTemplate;

   /* @GetMapping("select")
    public String select() {
        System.out.println("11111");
        //getForObject("http://生产者实例名/请求生产者的Controller方法", 返回值类型.class);
        String result = restTemplate.getForObject("http://springcloud-goods-reg/testPro", String.class);
        return result;
    }*/

    //注册
    @RequestMapping("reg")
    @ResponseBody
    public Boolean reg(UserBean userBean){
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
    public String login1(UserBean user) {

        return userService.login1(user);
    }




}
