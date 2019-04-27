package com.jk.service;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.Story;
import com.jk.pojo.Type;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: StoryService
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  19:14
 */
public interface StoryService {
    /**
     * 查询故事数据 以及 条查 分页
     * @param story
     * @return
     */
    JSONObject queryStorys(Story story);

    /**
     * 根据id 删除数据 及批删
     * @param ids
     * @return
     */
    Boolean deleteStorysById(String ids);

    /**
     * 修改故事 根据id回显
     * @param storyId
     * @return
     */
    Story queryStoryById(Integer storyId);

    /**
     * 故事新增及修改
     * @param story
     * @return
     */
    Boolean saveOrUpdateStory(Story story);

    /**
     * 查询故事类型
     * @return
     */
    List<Type> queryType();
}
