package com.jk.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.jk.dao.FacDao;
import com.jk.pojo.Facility;
import com.jk.service.FacService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author Mr.Zhang
 * @title: FacServiceImpl
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  19:41
 */
@Service
public class FacServiceImpl implements FacService {

    @Autowired
    private FacDao facDao;

    @Override
    public  List<Facility> queryFacilitys(Integer houseId) {

        Date date = new Date();


        List<Facility> list = facDao.queryFacTypes();
        for (Facility facility : list) {
            List<Facility> result = facDao.queryFacilityByType(facility.getFacCode());
            List<Facility> data = facDao.queryFacilitys(facility.getFacCode(),houseId);
            for (Facility fac : result) {
                for (Facility datum : data) {
                    if (fac.getFacId().equals(datum.getFacId())){
                        fac.setChecked(true);
                        break;
                    }
                }
            }
            facility.setChildren(result);
        }
        return list;
    }
}
