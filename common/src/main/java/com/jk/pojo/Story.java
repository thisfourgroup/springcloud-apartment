package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Story
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  19:09
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Story {

    private Integer id;

    private String name;

    private String jieshao;

    private String img;

    private Integer typeId;

    private String typeName;

    private String pingjiaInfo;

    private Integer zan;

    private Integer page;

    private Integer rows;

}
