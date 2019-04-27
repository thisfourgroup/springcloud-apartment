package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Specification
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  8:53
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Specification {

    private Integer speId;

    private String houseType;

    private String houseSize;

    private String bdeCount;

    private String peopleCount;

    private String bathroomType;

}
