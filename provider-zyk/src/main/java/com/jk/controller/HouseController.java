package com.jk.controller;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.*;
import com.jk.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * @author Mr.Zhang
 * @title: HouseController
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  8:56
 */
@RestController
@RequestMapping("house")
public class HouseController {

    @Autowired
    private HouseService houseService;

    @RequestMapping("queryHouseAll")
    public JSONObject queryHouseAll(@RequestBody House house){
        return houseService.queryHouseAll(house);
    }

    /**
     * 查询单个房屋信息
     * @param house
     * @return
     */
    @RequestMapping("queryHouseInfo")
    public House queryHouseInfo(House house){
        return houseService.queryHouseInfo(house);
    }

    /**
     * 查询房屋图片
     * @param houseId
     * @return
     */
    @RequestMapping("queryHouseImage")
    public List<Image> queryHouseImage(Integer houseId){
        return houseService.queryHouseImage(houseId);
    }

    /**
     * 查询房屋守则
     * @param rulesId
     * @return
     */
    @RequestMapping("queryRulesByHouseId")
    public List<Rules> queryRulesByHouseId(@RequestParam(value = "rulesId") Integer rulesId){
        return houseService.queryRulesByHouseId(rulesId);
    }

    /**
     * 保存房屋守则
     * @param rulesIds
     * @return
     */
    @RequestMapping("saveRules")
    public Boolean saveRules(@RequestParam(value = "rulesIds") String rulesIds,@RequestParam(value = "houseId") Integer houseId){
        return houseService.saveRules(rulesIds,houseId);
    }

    /**
     * 保存房屋设施
     * @param houseId
     * @param facIds
     * @return
     */
    @RequestMapping("saveFacility")
    public Boolean saveFacility(@RequestParam(value = "houseId") Integer houseId,@RequestParam(value = "facIds") String facIds){
        return houseService.saveFacility(houseId,facIds);
    }

    /**
     * 删除房屋信息根据房子编号
     * @param ids
     * @return
     */
    @RequestMapping("deleteHouseById")
    public Boolean deleteHouseById(@RequestParam(value = "ids") String ids){
        return houseService.deleteHouseById(ids);
    }

    /**
     * 查询房屋图片
     * @param houseId
     * @return
     */
    @RequestMapping("queryHosueImage")
    public List<Image> queryHosueImage(@RequestParam(value = "houseId") Integer houseId){
        return houseService.queryHosueImage(houseId);
    }

    @RequestMapping("queryHouseDescribe")
    public Describe queryHouseDescribe(@RequestParam(value = "houseId") Integer houseId){
        return houseService.queryHouseDescribe(houseId);
    }

    /**
     * 根据房屋查询户主
     * @param houseId
     * @return
     */
    @RequestMapping("queryUserByHouseId")
    User queryUserByHouseId(@RequestParam(value = "houseId") Integer houseId){
        return houseService.queryUserByHouseId(houseId);
    }

    @RequestMapping("queryHouseById")
    House queryHouseById(@RequestParam(value = "houseId") Integer houseId){
        return houseService.queryHouseById(houseId);
    }

    @GetMapping("reserveMehted")
    public Boolean reserveMehted(@RequestParam(value = "i") Integer i){
        return houseService.reserveMehted();
    }

    @RequestMapping("queryTime")
    public long queryTime(@RequestParam(value = "minTime") String minTime,@RequestParam(value = "maxTime") String maxTime,@RequestParam(value = "housePrice")Integer housePrice){
        return houseService.queryTime(minTime,maxTime,housePrice);
    }

    @RequestMapping("queryUserByName")
    User queryUserByName(@RequestParam(value = "userName") String userName){
        return houseService.queryUserByName(userName);
    }

}
