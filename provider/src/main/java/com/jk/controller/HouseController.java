package com.jk.controller;

import com.jk.pojo.*;
import com.jk.service.HouseService;
import com.jk.utils.EasyuiPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.util.List;

@Controller
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
    public List<HouseBean> findHouse(@RequestParam Integer titleid){
    return  houseService.findHouse(titleid);
 }

//根据市查询
    @RequestMapping("findHouse2")
    @ResponseBody
    public List<HouseBean> findHouse2(@RequestParam Integer cityid){
     return houseService.findHouse2(cityid);
       /* List<HouseBean> house2 = houseService.findHouse2(cityid);*/
       /*for (int i=0;i<house2.size();i++){

           if (house2.get(i).getDiscount() - house2.get(i).getPrice()<0){
               house2.get(i).set
           }
       }*/

       /* return  house2;*/
    }


 // 分页查询
    @RequestMapping("findHousePage")
    @ResponseBody
    public EasyuiPage findHousePage(@RequestParam Integer page, @RequestParam Integer rows, @RequestBody HouseBean houseBean){
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
    public Boolean deleteTitle(@RequestParam String id) {
        return houseService.deleteTitle(id);

    }
    //t_title表新增  修改
    @RequestMapping("saveTitle")
    @ResponseBody
    public Boolean saveNews(@RequestBody TitleBean titleBean) {
        if(titleBean.getId() != null) {

            return houseService.updateTitle(titleBean);//修改
        }else {
            return houseService.saveTitle(titleBean);//新增
        }
    }

    // t_title表 回显
    @RequestMapping("findNewsInfoById")
    @ResponseBody
    public TitleBean findNewsInfoById(@RequestParam Integer id) {
        return houseService.findNewsInfoById(id);

    }



//t_city 表  查询
@RequestMapping("findCityPage")
@ResponseBody
public EasyuiPage findCityPage(@RequestParam Integer page, @RequestParam Integer rows, @RequestBody CityBean cityBean){
    return houseService.findCityPage(page,rows,cityBean);
}




//
  @RequestMapping("dazhe")
  @ResponseBody
    public Boolean dazhe(@RequestBody HouseBean houseBean){



      return houseService.dazhe(houseBean);
  }






}
