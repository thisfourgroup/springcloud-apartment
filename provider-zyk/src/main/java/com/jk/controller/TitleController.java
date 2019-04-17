package com.jk.controller;

import com.alibaba.fastjson.JSONObject;
import com.jk.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Mr.Zhang
 * @title: TitleController
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  17:13
 */
@RestController
@RequestMapping("title")
public class TitleController {

    @Autowired
    private TitleService titleService;

    /**
     * 查询主页标题 及 分页
     * @param page
     * @param rows
     * @return
     */
    @RequestMapping("queryTitles")
    public JSONObject queryTitles(Integer page,Integer rows){

        return titleService.queryTitles(page,rows);

    }

}
