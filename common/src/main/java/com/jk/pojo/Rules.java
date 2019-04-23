package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author Mr.Zhang
 * @title: Rules
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/18  15:14
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Rules {

    private Integer rulesId;

    private String rulesInfo;

    private Boolean checked = false;

}
