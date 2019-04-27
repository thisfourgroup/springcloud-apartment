package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

/**
 * @author Mr.Zhang
 * @title: House
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  8:46
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class House {

    private Integer id;

    private Integer landlordId;

    private String landlordName;

    private String houseDescribe;

    private String name;

    private BigDecimal price;

    private Integer cityId;

    private BigDecimal discount;

    private String image;

    private Integer specId;

    private Specification specification;

    private String cityName;

    private String provinceName;

    private String houseType;

    private String houseSize;

    private String bdeCount;

    private String peopleCount;

    private String bathroomType;

    private Integer page;

    private Integer rows;

}
