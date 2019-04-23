package com.jk.shiro;

import com.jk.pojo.House;
import com.jk.pojo.User;
import com.jk.service.HouseService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * @author
 */
public class MyRealm extends AuthorizingRealm {

    @Autowired
    private HouseService houseService;
    /**
     *  认证方法
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        //获取到输入框输入的用户名
        String userName = (String)token.getPrincipal();
        User user = houseService.queryUserByName(userName);
        if(user == null){
            //如果用户对象为空 抛出用户名错误异常
            throw new UnknownAccountException();
        }
        //认证器 第一个参数为用户名或用户对象会存入session 第二个参数为密码 第三个参数为当前real名称
        SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(user,user.getPassword(),this.getName());
        return simpleAuthenticationInfo;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }
}
