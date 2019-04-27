package com.jk.controller;

import com.jk.pojo.HouseBean;
import com.jk.pojo.TitleBean;
import com.jk.pojo.TreeBean;
import com.jk.pojo.UserBean;
import com.jk.service.HouseService;
import com.jk.utils.EasyuiPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HouseController {

    @Autowired
    private HouseService houseService;


   //树
   @RequestMapping("findTree")
   @ResponseBody
   public List<TreeBean> findTree() {

       return houseService.findTree();
   }



    //根据大标头查询
    @RequestMapping("findHouse")
    @ResponseBody
    public List<HouseBean> findHouse(Integer titleid)
    {
        return  houseService.findHouse(titleid);
    }

    //根据市查询
    @RequestMapping("findHouse2")
    @ResponseBody
    public List<HouseBean> findHouse2(Integer cityid){

       return  houseService.findHouse2(cityid);
    }

    //分页

    @RequestMapping("findHousePage")
    @ResponseBody
    public EasyuiPage findHousePage(Integer page,Integer rows,HouseBean houseBean){
        return houseService.findHousePage(page,rows,houseBean);
    }

    //t_title表查询
    @RequestMapping("findTitlePage")
    @ResponseBody
    public List<TitleBean> findTitlePage(){
        return houseService.findTitlePage();
    }
    //t_title表删除
    @RequestMapping("deleteTitle")
    @ResponseBody
    public Boolean deleteTitle(String id) {
        return houseService.deleteTitle(id);

    }
    //t_title表 新增

    @RequestMapping("saveTitle")
    @ResponseBody
    public Boolean saveTitle(TitleBean titleBean) {

        return houseService.saveTitle(titleBean);//新增
    }


    //回显
    @RequestMapping("findNewsInfoById")
    @ResponseBody
    public TitleBean findNewsInfoById(Integer id) {
        return houseService.findNewsInfoById(id);

    }
}
