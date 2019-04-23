package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Region
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  10:10
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Region {

    private Integer regionId;

    private String regionName;

    private Integer regionPid;

}
