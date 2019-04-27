package com.jk.mapper;

import com.jk.pojo.*;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.HashMap;
import java.util.List;

public interface HouseMapper {
//树
    @Select("select id,text,url as href,pid from t_tree where pid=#{value}")
List<TreeBean> findTreeNodeByPid(Integer id);
    //根据大标头查询
    @Select("select h.`name`,h.price,tc.cityname,hx.`name` as huxingName,h.discount,t.`name` as titleName\n" +
            "      from t_house h \n" +
            "\n" +
            "    LEFT JOIN t_title t on h.titleid=t.id\n" +
            "    LEFT JOIN t_huxing hx on h.huxingid=hx.id\n" +
            "    LEFT JOIN t_city tc on h.cityid=tc.cityid where h.titleid=#{titleid} and tc.headid=h.titleid")
    List<HouseBean> findHouse(Integer titleid);


    //根据地区查询
    @Select("select h.`name`,h.price,tc.cityname as cityName,hx.`name` as huxingName,h.discount,t.`name` as titleName,h.image\n" +
            "      from t_house h \n" +
            "\n" +
            "    LEFT JOIN t_title t on h.titleid=t.id\n" +
            "    LEFT JOIN t_huxing hx on h.huxingid=hx.id\n" +
            "    LEFT JOIN t_city tc on h.cityid=tc.cityid  \n" +
            "   where h.cityid=#{cityid}")
    List<HouseBean> findHouse2(Integer cityid);




 //分页
    int findHouseCount(HashMap<String, Object> params);

    List<HouseBean> findHouseList(HashMap<String, Object> params);


 //t_title 表查询

    @Select("select * from t_title")
    List<TitleBean> findTitlePage();

    //t_title 表删除
    @Delete("delete from t_title where id in (${_parameter})")
    Boolean deleteTitle(String id);

    //t_title 表 新增
    @Insert("insert into t_title(name)  values(#{name})")
    int saveTitle(TitleBean titleBean);

    //t_title 表 回显

    @Select("select * from t_title where id = #{id}")
    TitleBean findNewsInfoById(Integer id);
    //t_title 表 修改
    @Update("update t_title set name=#{name} where id=#{id}")
    Boolean updateTitle(TitleBean titleBean);


    //t_city 表  查询
    int findCityCount(HashMap<String, Object> params);

    List<CityBean> findCityList(HashMap<String, Object> params);



    @Update("update t_house t set discount=price * discountsign where id=#{id}")
    Boolean dazhe(HouseBean houseBean);
}
