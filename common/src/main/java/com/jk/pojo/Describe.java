package com.jk.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Mr.Zhang
 * @title: Describe
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/19  13:59
 */
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Describe")
public class Describe {

    private Integer id;

    private String houseInfo;

    private Integer houseId;

}
