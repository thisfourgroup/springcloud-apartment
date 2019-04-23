package com.jk.service;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.*;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
import java.util.List;

/**
 * @author Mr.Zhang
 * @title:
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  19:41
 */
@FeignClient("zyk-provider")
public interface HouseService {

    @RequestMapping("fac/queryFacilitys")
    List<Facility> queryFacilitys(@RequestParam(value = "houseId") Integer houseId);

    @RequestMapping("house/queryHouseAll")
    JSONObject queryHosueAll(House house);

    @RequestMapping("house/queryRulesByHouseId")
    List<Rules> queryRulesByHouseId(@RequestParam(value = "rulesId") Integer rulesId);

    @RequestMapping("house/saveRules")
    Boolean saveRules(@RequestParam(value = "rulesIds") String rulesIds,@RequestParam(value = "houseId") Integer houseId);

    @RequestMapping("house/saveFacility")
    Boolean saveFacility(@RequestParam(value = "houseId") Integer houseId,@RequestParam(value = "facIds") String facIds);

    @RequestMapping("house/deleteHouseById")
    Boolean deleteHouseById(@RequestParam(value = "ids") String ids);

    @RequestMapping("house/queryHosueImage")
    List<Image> queryHosueImage(@RequestParam(value = "houseId") Integer houseId);

    @RequestMapping("house/queryHouseDescribe")
    Describe queryHouseDescribe(@RequestParam(value = "houseId") Integer houseId);

    @RequestMapping("house/queryUserByHouseId")
    User queryUserByHouseId(@RequestParam(value = "houseId") Integer houseId);

    @RequestMapping("house/queryHouseById")
    House queryHouseById(@RequestParam(value = "houseId") Integer houseId);

    @GetMapping("house/reserveMehted")
    Boolean reserveMehted(@RequestParam(value = "i") Integer i);

    @RequestMapping("house/queryTime")
    long queryTime(@RequestParam(value = "minTime") String minTime, @RequestParam(value = "maxTime") String maxTime, @RequestParam(value = "housePrice") Integer housePrice);

    @RequestMapping("house/queryUserByName")
    User queryUserByName(@RequestParam(value = "userName") String userName);
}
