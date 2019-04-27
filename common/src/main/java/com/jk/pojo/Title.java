package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Title
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/16  18:40
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Title {

    private Integer titleId;

    private String titleOneName;

    private String titleTwoName;

}
