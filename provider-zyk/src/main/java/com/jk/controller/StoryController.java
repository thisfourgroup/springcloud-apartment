package com.jk.controller;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.Story;
import com.jk.pojo.Type;
import com.jk.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: StoryController
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  19:13
 */
@RestController
@RequestMapping("story")
public class StoryController {

    @Autowired
    private StoryService storyService;

    /**
     * 查询故事数据 以及 条查 分页
     * @param story
     * @return
     */
    @RequestMapping("queryStorys")
    public JSONObject queryStorys(Story story){
        return storyService.queryStorys(story);
    }

    /**
     * 故事新增及修改
     * @param story
     * @return
     */
    @RequestMapping("saveOrUpdateStory")
    public Boolean saveOrUpdateStory(Story story){
        return storyService.saveOrUpdateStory(story);
    }

    /**
     * 修改故事 根据id回显
     * @param storyId
     * @return
     */
    @RequestMapping("queryStoryById")
    public Story queryStoryById(Integer storyId){
        return storyService.queryStoryById(storyId);
    }

    /**
     * 根据id 删除数据 及批删
     * @param ids
     * @return
     */
    @RequestMapping("deleteStorysById")
    public Boolean deleteStorysById(String ids){
        return storyService.deleteStorysById(ids);
    }

    /**
     * 查询故事类型
     * @return
     */
    @RequestMapping("queryType")
    public List<Type> queryType(){
        return storyService.queryType();
    }

}
