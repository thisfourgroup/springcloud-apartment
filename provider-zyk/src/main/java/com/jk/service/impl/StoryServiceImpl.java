package com.jk.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.jk.dao.StoryDao;
import com.jk.pojo.Story;
import com.jk.pojo.Type;
import com.jk.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: StoryServiceImpl
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  19:14
 */
@Service
public class StoryServiceImpl implements StoryService {

    @Autowired
    private StoryDao storyDao;

    /**
     * 查询故事数据 以及 条查 分页
     * @param story
     * @return
     */
    @Override
    public JSONObject queryStorys(Story story) {
        Long total = storyDao.queryStoryCount(story);
        List<Story> list = storyDao.queryStorys(story);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("total",total);
        jsonObject.put("rows",list);
        return jsonObject;
    }

    /**
     * 根据id 删除数据 及批删
     * @param ids
     * @return
     */
    @Override
    public Boolean deleteStorysById(String ids) {
        Long count = storyDao.deleteStorysById(ids);
        return count > 0 ? true : false;
    }

    /**
     * 修改故事 根据id回显
     * @param storyId
     * @return
     */
    @Override
    public Story queryStoryById(Integer storyId) {
        return storyDao.queryStoryById(storyId);
    }

    /**
     * 故事新增及修改
     * @param story
     * @return
     */
    @Override
    public Boolean saveOrUpdateStory(Story story) {
        Long count = null;
        if (story.getId()==null){
            story.setZan(0);
            count = storyDao.saveStory(story);
        }else {
            count = storyDao.updateStory(story);
        }
        return count ==1 ? true : false;
    }

    /**
     * 查询故事类型
     * @return
     */
    @Override
    public List<Type> queryType() {
        return storyDao.queryType();
    }


}
