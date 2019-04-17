package com.jk.dao;

import com.jk.pojo.Story;
import org.apache.commons.lang.StringUtils;

/**
 * @author Mr.Zhang
 * @title: StoryDaoClass
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  19:22
 */
public class StoryDaoClass {

    /**
     * 查询故事数量 + 条查
     * @param story
     * @return
     */
    public String queryStoryCount(Story story){
        String sql = "select count(*) from t_story s where 1 = 1 ";
        if(StringUtils.isNotEmpty(story.getJieshao())){
            sql += " and s.jieshao like '%"+story.getJieshao()+"%' ";
        }
        if (story.getTypeId()!=null){
            sql += " and s.typeId = "+story.getTypeId();
        }
        return sql;
    }

  public String queryStorys(Story story){
        String sql = "select * from t_story s where 1 = 1 ";
        if(StringUtils.isNotEmpty(story.getJieshao())){
            sql += " and s.jieshao like '%"+story.getJieshao()+"%' ";
        }
        if (story.getTypeId()!=null){
            sql += " and s.typeId = "+story.getTypeId();
        }
        if (story.getPage()!=null && story.getRows()!=null){
        sql += " limit "+(story.getPage()-1)*story.getRows()+" , "+story.getRows();
        }
        return sql;
    }

}
