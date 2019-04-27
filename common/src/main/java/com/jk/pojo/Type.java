package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Type
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  21:13
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Type {

    private Integer id;

    private String name;
}
