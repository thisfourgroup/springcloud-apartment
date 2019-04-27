package com.jk.service;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.Facility;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: FacService
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  19:41
 */
public interface FacService {
    List<Facility> queryFacilitys(Integer houseId);
}
