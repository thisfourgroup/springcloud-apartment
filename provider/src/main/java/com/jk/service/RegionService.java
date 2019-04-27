package com.jk.service;

import com.jk.pojo.Region;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: RegionService
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  10:21
 */
public interface RegionService {

    /**
     * 查询地区 二级联动
     * @param regionId
     * @return
     */
    List<Region> queryRegion(Integer regionId);
}
