package com.jk.service;

import com.alibaba.fastjson.JSONObject;

/**
 * @author Mr.Zhang
 * @title: TitleService
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  17:15
 */
public interface TitleService {

    /**
     * 查询主页标题 及 分页
     * @param page
     * @param rows
     * @return
     */
    JSONObject queryTitles(Integer page, Integer rows);
}
