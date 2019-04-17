package com.jk.dao;

import com.jk.pojo.Title;
import org.apache.ibatis.annotations.Param;import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: TitleDao
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  17:16
 */
public interface TitleDao {

    /**
     *
     * 查询主页标题数量
     * @return
     */
    @Select("select count(*) from t_title")
    Long queryTitleCount();

    /**
     * 查询主页标题 及 分页
     * @param page
     * @param rows
     * @return
     */
    @Select("SELECT t.tile_id as titleId,t.title_one_name as titleOneName,t.title_two_name as titleTwoName from t_title t limit #{page} , #{rows} ")
    List<Title> queryTitles(@Param("page")Integer page, @Param("rows")Integer rows);
}
