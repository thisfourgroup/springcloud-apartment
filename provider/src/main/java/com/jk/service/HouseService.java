package com.jk.service;

import com.jk.pojo.*;
import com.jk.utils.EasyuiPage;

import java.util.List;

public interface HouseService {
//树
    List<TreeBean> findTree();
 //根据大标头查询
    List<HouseBean> findHouse(Integer titleid);
//根据市查询
    List<HouseBean> findHouse2(Integer cityid);
//分页
    EasyuiPage findHousePage(Integer page, Integer rows, HouseBean houseBean);



//t_title 表查询
List<TitleBean> findTitlePage();

    //t_title 表删除
    Boolean deleteTitle(String id);


    //t_title 修改
    Boolean updateTitle(TitleBean titleBean);
    //t_title新增
    Boolean saveTitle(TitleBean titleBean);
    //t_title回显
    TitleBean findNewsInfoById(Integer id);
    //t_city 表  查询
    EasyuiPage findCityPage(Integer page, Integer rows, CityBean cityBean);


    Boolean dazhe(HouseBean houseBean);
}
