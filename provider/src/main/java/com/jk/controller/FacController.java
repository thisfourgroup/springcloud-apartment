package com.jk.controller;

import com.jk.pojo.Facility;
import com.jk.service.FacService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Mr.Zhang
 * @title: FacController
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/17  19:40
 */
@RestController
@RequestMapping("fac")
public class FacController {

    @Autowired
    private FacService facService;

    @RequestMapping("queryFacilitys")
    public List<Facility> queryFacilitys(@RequestParam(value = "houseId") Integer houseId){
        return facService.queryFacilitys(houseId);
    }

}
