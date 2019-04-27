package com.jk.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.jk.dao.HouseDao;
import com.jk.pojo.*;
import com.jk.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * @author Mr.Zhang
 * @title: HouseServiceImpl
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  8:57
 */
@Service
public class HouseServiceImpl implements HouseService {

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private HouseDao houseDao;

    @Override
    public House queryHouseInfo(House house) {
        return houseDao.queryHouseInfo(house);
    }

    @Override
    public List<Image> queryHouseImage(Integer houseId) {
        return houseDao.queryHouseImage(houseId);
    }

    @Override
    public JSONObject queryHouseAll(House house) {
        Long total = houseDao.queryHouseCount(house);
        List<House> list = houseDao.queryHouseAll(house);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("total",total);
        jsonObject.put("rows",list);
        return jsonObject;
    }

    @Override
    public List<Rules> queryRulesByHouseId(Integer rules) {
        List<Rules> list = houseDao.queryHouseRules();
        List<Rules> checkList = houseDao.queryRulesByHouseId(rules);
        for (Rules rules1 : list) {
            for (Rules rules2 : checkList) {
                if (rules1.getRulesId()==rules2.getRulesId()){
                    rules1.setChecked(true);
                    break;
                }
            }
        }
        return list;
    }

    @Override
    public Boolean saveRules(String rulesIds, Integer houseId) {
        try {
            houseDao.delRulesByHouseId(houseId);
            houseDao.saveRules(rulesIds,houseId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        return false;
        }
    }

    @Override
    public Boolean saveFacility(Integer houseId, String facIds) {
        try {
            houseDao.delFacByHouseId(houseId);
            houseDao.saveFacility(houseId,facIds);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Boolean deleteHouseById(String ids) {
        int count = houseDao.deleteHouseById(ids);
        return count > 0 ? true : false;
    }

    @Override
    public List<Image> queryHosueImage(Integer houseId) {
        return houseDao.queryHosueImage(houseId);
    }

    @Override
    public Describe queryHouseDescribe(Integer houseId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("Integer").is(houseId));
        List<Describe> describes = mongoTemplate.find(query, Describe.class);
        return describes.size() == 0 ? null : describes.get(0);
    }

    @Override
    public User queryUserByHouseId(Integer houseId) {
        return houseDao.queryUserByHouseId(houseId);
    }

    @Override
    public House queryHouseById(Integer houseId) {
        return houseDao.queryHouseById(houseId);
    }

    @Override
    public Boolean reserveMehted() {
        String user = "user";
        Boolean hasKey = redisTemplate.hasKey(user);
        if (hasKey){
            return true;
        }else {
            redisTemplate.opsForValue().set(user,"1111");
            return false;
        }
    }

    @Override
    public long queryTime(String minTime, String maxTime, Integer housePrice) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        long min = 0;
        long max = 0;
        try {
            min = format.parse(minTime).getTime();
            max = format.parse(maxTime).getTime();
            System.out.println(min+"------------"+max);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        long finalTime = (max - min) / 24 / 60 / 60 / 1000;
        long finalPrice = finalTime * housePrice;
        System.out.println(finalTime+"------===========------"+finalPrice);
        return finalPrice;
    }

    @Override
    public User queryUserByName(String userName) {
        return houseDao.queryUserByName(userName);
    }
}
