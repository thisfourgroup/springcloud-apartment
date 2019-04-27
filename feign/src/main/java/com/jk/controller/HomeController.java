package com.jk.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jk.ConstantConf;
import com.jk.pojo.HomeTitleBean;
import com.jk.pojo.HomeTypeBean;
import com.jk.pojo.TreeBean;
import com.jk.pojo.UserBean;
import com.jk.service.TestService;
import com.jk.utils.HttpClientUtil;
import com.jk.utils.Md5Util;
import com.jk.utils.OSSClientUtil;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Controller
public class TestController {
    @Autowired
    TestService testService;

    @Autowired
    RedisTemplate redisTemplate;


    //树
    @RequestMapping("findTree")
    @ResponseBody
    public List<TreeBean> findTree(){
        return testService.findTree();

    }

    @RequestMapping("queryHomeTitle")
    @ResponseBody
    public List<HomeTitleBean> queryHomeTitle(){

        return testService.queryHomeTitle();
    }

    @RequestMapping("saveOrUpdateTitle")
    @ResponseBody
    public Boolean saveOrUpdateTitle(HomeTitleBean titleBean){

        return testService.saveOrUpdateTitle(titleBean);
    }

    @RequestMapping("queryTitleById")
    @ResponseBody
    public HomeTitleBean queryTitleById(Integer titleId){

        return testService.queryTitleById(titleId);
    }

    @RequestMapping("deleteTitleById")
    @ResponseBody
    public Boolean deleteTitleById(String ids){

        return testService.deleteTitleById(ids);
    }

    /**
     * 查询玩转民宿公寓 当季热门 安心住保障 根据code不同进行不同查询
     */
    @RequestMapping("queryTypeByCode")
    @ResponseBody
    public List<HomeTypeBean> queryTypeByCode(Integer code){

        return testService.queryTypeByCode(code);
    }


}
