package com.jk.dao;

import com.jk.pojo.Story;
import com.jk.pojo.Type;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: StoryDao
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  19:15
 */
public interface StoryDao {

    /**
     * 查询故事数量
     * @param story
     * @return
     */
    @SelectProvider(type = StoryDaoClass.class , method = "queryStoryCount")
    Long queryStoryCount(Story story);

    /**
     * 查询故事数据 以及 条查 分页
     * @param story
     * @return
     */
    @SelectProvider(type = StoryDaoClass.class , method = "queryStorys")
    List<Story> queryStorys(Story story);

    /**
     * 新增数据
     * @param story
     * @return
     */
    @Insert("INSERT INTO t_story(name,jieshao,img,typeId,zan) VALUES(#{name},#{jieshao},#{img},#{typeId},#{zan})")
    Long saveStory(Story story);

    /**
     * 修改数据
     * @param story
     * @return
     */
    @Update("UPDATE t_story SET name = #{name},jieshao = #{jieshao},img = #{img},typeId = #{typeId},zan = #{zan} WHERE id = #{id}")
    Long updateStory(Story story);

    /**
     * 根据id查询数据
     * @param storyId
     * @return
     */
    @Select("select * from t_story where id = #{id}")
    Story queryStoryById(Integer storyId);

    /**
     * 根据id删除数据 及 批删
     * @param ids
     * @return
     */
    @Delete("delete FROM t_story where id in (${_parameter})")
    Long deleteStorysById(String ids);

    /**
     * 查询故事类型
     * @return
     */
    @Select("select * from t_type")
    List<Type> queryType();
}
