package com.jk.service;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.*;

import java.text.ParseException;
import java.util.List;

/**
 * @author Mr.Zhang
 * @title: HouseService
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  8:57
 */
public interface HouseService {
    /**
     * 根据id查询房屋信息
     * @param house
     * @return
     */
    House queryHouseInfo(House house);

    /**
     * 查询房屋图片
     * @param houseId
     * @return
     */
    List<Image> queryHouseImage(Integer houseId);

    /**
     * 查询所有房屋信息
     * @return
     * @param page
     * @param rows
     */
    JSONObject queryHouseAll(House house);


    List<Rules> queryRulesByHouseId(Integer rules);

    Boolean saveRules(String rulesIds, Integer houseId);

    Boolean saveFacility(Integer houseId, String facIds);

    Boolean deleteHouseById(String ids);

    List<Image> queryHosueImage(Integer houseId);

    Describe queryHouseDescribe(Integer houseId);

    User queryUserByHouseId(Integer houseId);

    House queryHouseById(Integer houseId);

    Boolean reserveMehted();

    long queryTime(String minTime, String maxTime, Integer housePrice);

    User queryUserByName(String userName);
}
