package com.jk.controller;

import com.jk.pojo.Region;
import com.jk.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: RegionController
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  10:13
 */
@RestController
@RequestMapping("region")
public class RegionController {

    @Autowired
    private RegionService regionService;

    /**
     * 查询地区 二级联动
     * @param regionId
     * @return
     */
    @RequestMapping("queryRegion")
    public List<Region> queryRegion(@RequestParam(value = "regionId") Integer regionId){
        return regionService.queryRegion(regionId);
    }

}
