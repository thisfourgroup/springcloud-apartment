package com.jk.mapper;

import com.jk.pojo.UserBean;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    //注册
    @Select("select count(1) from t_user where phonenumber=#{value}")
    int findCount(String phoneNumber);
@Insert("insert into t_user(phonenumber,password) values(#{phonenumber},#{password})")
    void saveReg(UserBean userBean);


//登录
    @Select("select phonenumber,password from t_user where phonenumber=#{phonenumber}")
    UserBean login1(UserBean user);
}
