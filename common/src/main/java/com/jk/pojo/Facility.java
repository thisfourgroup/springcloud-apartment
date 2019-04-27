package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: Facility
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  18:57
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Facility {

    private Integer facId;

    private String facName;

    private Integer facTypeCode;

    private Integer facCode;

    private List<Facility> children;

    private Boolean checked = false;

}
