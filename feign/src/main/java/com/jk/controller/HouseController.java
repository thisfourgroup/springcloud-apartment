package com.jk.controller;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.*;
import com.jk.service.HouseService;
import com.jk.utils.GetLatAndLngByBaidu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * @author Mr.Zhang
 * @title:
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  19:40
 */
@RestController
@RequestMapping("house")
public class HouseController {

    @Autowired
    private HouseService hosueService;

    @RequestMapping("queryFacilitys")
    public List<Facility> queryFacilitys(Integer houseId){
        return hosueService.queryFacilitys(houseId);
    }

    @RequestMapping("queryHosueAll")
    public JSONObject queryHosueAll(House house){
        return hosueService.queryHosueAll(house);
    }

    @RequestMapping("queryHouseById")
    public House queryHouseById(Integer houseId){
        return hosueService.queryHouseById(houseId);
    }

    @RequestMapping("queryRulesByHouseId")
    public List<Rules> queryRulesByHouseId(Integer houseId){
        return hosueService.queryRulesByHouseId(houseId);
    }

    @RequestMapping("saveRules")
    public Boolean saveRules(String rulesIds,Integer houseId){
        return hosueService.saveRules(rulesIds,houseId);
    }

    @RequestMapping("saveFacility")
    public Boolean saveFacility(Integer houseId,String facIds){
        return hosueService.saveFacility(houseId,facIds);
    }

    @RequestMapping("deleteHouseById")
    public Boolean deleteHouseById(String ids){
        return hosueService.deleteHouseById(ids);
    }

    @RequestMapping("queryHosueImage")
    public List<Image> queryHosueImage(Integer houseId){
        return hosueService.queryHosueImage(houseId);
    }

    @RequestMapping("queryHouseDescribe")
    public Describe queryHouseDescribe(Integer houseId){
        return hosueService.queryHouseDescribe(houseId);
    }

    @RequestMapping("queryUserByHouseId")
    public User queryUserByHouseId(Integer houseId){
        return hosueService.queryUserByHouseId(houseId);
    }

    @GetMapping("reserveMehted" )
    public Boolean reserveMehted(){
        return hosueService.reserveMehted(1);
    }

    @RequestMapping("queryTime")
    public long queryTime(String minTime,String maxTime,Integer housePrice){
        return hosueService.queryTime(minTime,maxTime,housePrice);
    }

    @RequestMapping("getLatAndLng")
    public Object[] getLatAndLng(String addr) throws IOException {
        return GetLatAndLngByBaidu.getCoordinate(addr);
    }

}
