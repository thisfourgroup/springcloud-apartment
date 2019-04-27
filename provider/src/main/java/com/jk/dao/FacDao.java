package com.jk.dao;

import com.jk.pojo.Facility;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: FacDao
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  19:42
 */
public interface FacDao {

    @Select("SELECT f.fac_id as facId,f.fac_name as facName,f.fac_code as facCode,f.fac_type_code as facTypeCode from t_facility f WHERE f.fac_type_code IS NULL ")
    List<Facility> queryFacTypes();


    @Select("SELECT\n" +
            "\tf.fac_id AS facId,\n" +
            "\tf.fac_name AS facName\n" +
            "FROM\n" +
            "\tt_facility f LEFT JOIN t_house_facility hf\n" +
            "ON hf.facility_id = f.fac_id LEFT JOIN t_house h\n" +
            "ON hf.house_id = h.id\n" +
            "WHERE h.id = #{houseId} AND f.fac_type_code = #{facCode} \n")
    List<Facility> queryFacilitys(@Param("facCode") Integer facCode,@Param("houseId") Integer houseId);

    @Select(" SELECT f.fac_id as facId,f.fac_name as facName,f.fac_code as facCode,f.fac_type_code as facTypeCode from t_facility f where f.fac_type_code is null ")
    List<Facility> queryAllFacility();

    @Select(" SELECT f.fac_id as facId,f.fac_name as facName from t_facility f where f.fac_type_code = #{facCode} ")
    List<Facility> queryFacilityByType(Integer facCode);
}
