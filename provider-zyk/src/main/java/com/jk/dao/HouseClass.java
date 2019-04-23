package com.jk.dao;

import com.jk.pojo.House;
import org.apache.commons.lang.StringUtils;

/**
 * @author Mr.Zhang
 * @title: HouseClass
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  13:35
 */
public class HouseClass {

    public String queryHosueAll(House house){
        String sql = "SELECT\n" +
                "\th.id AS id,\n" +
                "\th. NAME AS NAME,\n" +
                "\th.price AS price,\n" +
                "\tc.cityname AS cityName,\n" +
                "\ttp.provincename AS provinceName,\n" +
                "\th.discount AS minPrice,\n" +
                "\ttu. NAME AS landlordName\n" +
                "FROM\n" +
                "\tt_house h\n" +
                "LEFT JOIN t_city c ON h.cityid = c.cityid\n" +
                "LEFT JOIN (\n" +
                "\tSELECT\n" +
                "\t\ttc.pid\n" +
                "\tFROM\n" +
                "\t\tt_house th\n" +
                "\tLEFT JOIN t_city tc ON th.cityid = tc.cityid\n" +
                ") cp ON c.pid = cp.pid\n" +
                "LEFT JOIN t_province tp ON cp.pid = tp.provinceid\n" +
                "LEFT JOIN t_user tu ON h.landlord_id = tu.id where 1 = 1";
        if (house.getCityId()!=null){
            sql += " and h.cityid = "+house.getCityId();
        }
        if (house.getLandlordId()!=null){
            sql += " and h.landlord_id = "+house.getLandlordId();
        }
        if (StringUtils.isNotEmpty(house.getName())){
            sql += " and h.name like '%"+house.getName()+"%' ";
        }
        if (house.getId()!=null){
            sql += " and h.id = "+house.getId();
        }
            sql += " GROUP BY h.id  ";
        if (house.getPage()!=null&&house.getRows()!=null){
            sql += " limit "+(house.getPage()-1)*house.getRows()+","+house.getRows();
        }
        return sql;
    }

    public String queryHouseCount(House house){
        String sql = " select count(h.id) from t_house h LEFT JOIN t_user u ON h.landlord_id = u.id where 1 = 1 ";
        if (house.getCityId()!=null){
            sql += " and h.cityid = "+house.getCityId();
        }
        if (house.getLandlordId()!=null){
            sql += " and h.landlord_id = "+house.getLandlordId();
        }
        if (StringUtils.isNotEmpty(house.getName())){
            sql += " and h.name like '%"+house.getName()+"%' ";
        }
        if (house.getId()!=null){
            sql += " and h.id = "+house.getId();
        }
        return sql;
    }

    public String saveRules(String split, Integer houseId){
        String[] split1 = split.split(",");
        String sql = "INSERT INTO t_hosue_rules(rules_id,house_id) VALUES";
        for (String integer : split1) {
            int rules = Integer.parseInt(integer);
            if (sql.equals("INSERT INTO t_hosue_rules(rules_id,house_id) VALUES")){
                sql +=  "("+rules+","+houseId+")";
            }else {
                sql += ",("+rules+","+houseId+")";
            }
        }
        return sql;
    }

    public String saveFacility(Integer houseId, String facIds){
        String[] split = facIds.split(",");
        String sql = "INSERT INTO t_house_facility (house_id,facility_id) VALUES";
        for (String integer : split) {
            int facId = Integer.parseInt(integer);
            if (sql.equals("INSERT INTO t_house_facility (house_id,facility_id) VALUES")){
                sql +=  "("+houseId+","+facId+")";
            }else {
                sql += ",("+houseId+","+facId+")";
            }
        }
        return sql;
    }

}
