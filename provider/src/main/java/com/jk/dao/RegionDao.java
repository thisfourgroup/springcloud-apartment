package com.jk.dao;

import com.jk.pojo.Region;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: RegionDao
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  10:22
 */
public interface RegionDao {

    @Select("select r.region_id as regionId,r.region_name as regionName,r.region_pid as regionPid from t_region r where r.region_pid = #{regionId}")
    List<Region> queryRegion(Integer regionId);
}
