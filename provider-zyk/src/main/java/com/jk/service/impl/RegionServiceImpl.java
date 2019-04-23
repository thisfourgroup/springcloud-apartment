package com.jk.service.impl;

import com.jk.dao.RegionDao;
import com.jk.pojo.Region;
import com.jk.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: RegionServiceImpl
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  10:21
 */
@Service
public class RegionServiceImpl implements RegionService {

    @Autowired
    private RegionDao regionDao;

    /**
     * 查询地区 二级联动
     * @param regionId
     * @return
     */
    @Override
    public List<Region> queryRegion(Integer regionId) {
        return regionDao.queryRegion(regionId);
    }
}
