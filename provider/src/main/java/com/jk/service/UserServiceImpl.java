package com.jk.service;

import com.jk.mapper.UserMapper;
import com.jk.pojo.UserBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserMapper userMapper;

//注册
    @Override
    public Boolean saveReg(UserBean userBean) {
        int count=userMapper.findCount(userBean.getPhonenumber());
        if(count>0){
           return false;
        }else{
            userBean.setPassword(userBean.getPassword());
            userMapper.saveReg(userBean);
            return true;
        }

    }

//登录
    @Override
    public String login1(UserBean user, HttpSession session) {
        UserBean queryUser =  userMapper.login1(user);
        if (queryUser == null){
            return "1";
        }else if(!queryUser.getPassword().equals(user.getPassword())){
            return "2";
        }else{
            session.setAttribute("phonenumber",queryUser.getPhonenumber());
            session.setAttribute("user",queryUser );
            return "0";
        }

    }
}
