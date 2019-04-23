package com.jk.dao;

import com.alibaba.fastjson.JSONObject;
import com.jk.pojo.House;
import com.jk.pojo.Image;
import com.jk.pojo.Rules;
import com.jk.pojo.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: HouseDao
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  8:58
 */
public interface HouseDao {

    /**
     * 查询房屋信息
     * @param house
     * @return
     */
    @Select("SELECT h.id as id,h.name AS name,h.price AS price,c.cityname as cityName ,tp.provincename as provinceName,h.discount as minPrice,ts.bed_count as bedCount,ts.house_size AS houseSize,ts.house_type AS houseType,ts.bathroom_type as bathroomType,ts.people_count AS peopleCount FROM t_house h LEFT JOIN  t_city c ON h.cityid = c.cityid LEFT JOIN (SELECT tc.pid FROM t_house th LEFT JOIN t_city tc ON th.cityid = tc.cityid WHERE th.id = #{houseId}) cp ON c.pid = cp.pid LEFT JOIN t_province tp ON cp.pid = tp.provinceid LEFT JOIN t_specification ts ON h.specificetion_id = ts.spe_id WHERE h.id = #{houseId} ")
    House queryHouseInfo(House house);

    /**
     * 查询房屋图片
     * @param houseId
     * @return
     */
    @Select("SELECT i.img_id AS imgId,i.img_url AS imgUrl, i.house_id AS houseId from t_image i WHERE i.house_id = #{houseId}")
    List<Image> queryHouseImage(Integer houseId);

    /**
     * 查询房屋信息 分页
     * @param house
     * @return
     */
    @SelectProvider(type = HouseClass.class,method = "queryHosueAll")
    List<House> queryHouseAll(House house);

    /**
     * 查询房屋总个数
     * @param house
     * @return
     */
    @SelectProvider(type = HouseClass.class,method = "queryHouseCount")
    Long queryHouseCount(House house);

    /**
     * 查询所有守则
     * @return
     */
    @Select("SELECT tr.rules_id AS rulesId, tr.rules_info AS rulesInfo FROM t_rules tr")
    List<Rules> queryHouseRules();

    /**
     * 根据houseId查询守则
     * @param rules
     * @return
     */
    @Select("SELECT tr.rules_id AS rulesId, tr.rules_info AS rulesInfo FROM t_rules tr LEFT JOIN t_hosue_rules thr ON tr.rules_id = thr.rules_id WHERE thr.house_id = #{rules}")
    List<Rules> queryRulesByHouseId(Integer rules);

    /**
     * 保存房屋守则
     *  @param split
     * @param houseId
     */
    @InsertProvider(type = HouseClass.class, method = "saveRules")
    void saveRules(String split, Integer houseId);

    /**
     * 删除中间表的数据
     * @param houseId
     */
    @Delete("DELETE FROM t_hosue_rules WHERE house_id = #{houseId}")
    void delRulesByHouseId(@Param("houseId")Integer houseId);

    @Delete("DELETE FROM t_house_facility WHERE house_id = #{houseId}")
    void delFacByHouseId(@Param("houseId")Integer houseId);

    @InsertProvider(type = HouseClass.class,method = "saveFacility")
    void saveFacility(Integer houseId, String facIds);

    @Delete("delete from t_house where id in (#{_parameter})")
    int deleteHouseById(String ids);

    @Select("select ti.img_id as imgId,ti.img_url as imgUrl,ti.house_id as houseId from t_image ti where ti.house_id = #{houseId}")
    List<Image> queryHosueImage(@Param("houseId")Integer houseId);

    /**
     * 根据房屋查询户主
     * @param houseId
     * @return
     */
    @Select("select u.id as id,u.name as name,u.image as image from t_user u left join t_house_user thu ON thu.user_id = u.id WHERE thu.house_id = #{houseId} ")
    User queryUserByHouseId(@Param("houseId")Integer houseId);

    @Select("SELECT\n" +
            "\th.id AS id,\n" +
            "\th. NAME AS NAME,\n" +
            "\th.price AS price,\n" +
            "\tc.cityname AS cityName,\n" +
            "\ttp.provincename AS provinceName,\n" +
            "\th.discount AS minPrice,\n"+
            "h.discribe AS houseDescribe," +
            "h.discount as discount,"+
            "\ttu. NAME AS landlordName\n" +
            "FROM\n" +
            "\tt_house h\n" +
            "LEFT JOIN t_city c ON h.cityid = c.cityid\n" +
            "LEFT JOIN (\n" +
            "\tSELECT tc.pid\n" +
            "\tFROM\n" +
            "\t\tt_house th\n" +
            "\tLEFT JOIN t_city tc ON th.cityid = tc.cityid\n" +
            ") cp ON c.pid = cp.pid\n" +
            "LEFT JOIN t_province tp ON cp.pid = tp.provinceid\n" +
            "LEFT JOIN t_user tu ON h.landlord_id = tu.id\n" +
            "WHERE h.id = #{houseId} GROUP BY h.id\n")
    House queryHouseById(@Param("houseId")Integer houseId);

    @Select("select u.id as id, u.name as userName,u.password as password from t_user u where u.name = #{userName}")
    User queryUserByName(@Param("userName")String userName);
}
