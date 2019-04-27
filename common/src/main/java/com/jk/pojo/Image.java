package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Image
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  10:19
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Image {

    private Integer imgId;

    private String imgUrl;

    private Integer houseId;

}
