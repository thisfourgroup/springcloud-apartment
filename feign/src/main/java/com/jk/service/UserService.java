package com.jk.service;

import com.jk.pojo.UserBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@FeignClient("springcloud-goods-reg") //指定生产者的实例名称
public interface UserService {

//注册
    @RequestMapping("reg")
    Boolean saveReg(@RequestBody UserBean userBean);


//登录1
    @RequestMapping("login1")
    String login1(@RequestBody UserBean user);
}
