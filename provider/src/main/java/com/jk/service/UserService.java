package com.jk.service;

import com.jk.pojo.UserBean;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

public interface UserService {
    //注册
    Boolean saveReg(UserBean userBean);

//登录
    String login1(UserBean user, HttpSession session);
}
