package com.jk.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.jk.dao.TitleDao;
import com.jk.pojo.Title;
import com.jk.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: TitleServiceImpl
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  17:16
 */
@Service
public class TitleServiceImpl implements TitleService {

    @Autowired
    private TitleDao titleDao;

    /**
     * 查询主页标题 及 分页
     * @param page
     * @param rows
     * @return
     */
    @Override
    public JSONObject queryTitles(Integer page, Integer rows) {
        Long total = titleDao.queryTitleCount();
        List<Title> list = titleDao.queryTitles((page-1)*rows,rows);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("total",total);
        jsonObject.put("rows",list);
        return jsonObject;
    }
}
