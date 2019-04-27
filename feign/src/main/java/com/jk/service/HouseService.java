package com.jk.service;

import com.jk.pojo.HouseBean;
import com.jk.pojo.TitleBean;
import com.jk.pojo.TreeBean;
import com.jk.pojo.UserBean;
import com.jk.utils.EasyuiPage;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@FeignClient("springcloud-goods-reg") //指定生产者的实例名称
public interface HouseService {
//树
@RequestMapping("findTree")
List<TreeBean> findTree();


    //根据大标头查询
    @RequestMapping("findHouse")
    List<HouseBean> findHouse(@RequestParam Integer titleid);

    //根据市查询
    @RequestMapping("findHouse2")
    List<HouseBean> findHouse2(@RequestParam Integer cityid);

    //分页
    @RequestMapping("findHousePage")
    EasyuiPage findHousePage(@RequestParam Integer page, @RequestParam Integer rows,@RequestBody HouseBean houseBean);

    //t_title表查询
    @RequestMapping("findTitlePage")
    List<TitleBean> findTitlePage();

    //t_title表删除
    @RequestMapping("deleteTitle")
    Boolean deleteTitle(@RequestParam String id);
    //t_title表新增
    @RequestMapping("saveTitle")
    Boolean saveTitle(@RequestBody TitleBean titleBean);
//t_title表 回显
     @RequestMapping("findNewsInfoById")
    TitleBean findNewsInfoById(@RequestParam Integer id);
}
