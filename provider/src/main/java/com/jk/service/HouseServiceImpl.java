package com.jk.service;

import com.jk.mapper.HouseMapper;
import com.jk.pojo.*;
import com.jk.utils.EasyuiPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;

@Service
public class HouseServiceImpl implements HouseService{

    @Autowired
    private HouseMapper houseMapper;
//树
    @Override
    public List<TreeBean> findTree() {
        Integer id=0;
        return queryTree(id);
    }

    private List<TreeBean> queryTree(Integer id) {
        List<TreeBean> trees=houseMapper.findTreeNodeByPid(id);
        for (TreeBean treeBean : trees) {
            List<TreeBean> queryTree = queryTree(treeBean.getId());
            if(queryTree != null && queryTree.size() > 0) {
                treeBean.setNodes(queryTree);
                treeBean.setSelectable(false);
            }else {
                treeBean.setSelectable(true);
            }
        }
        return trees;
    }

    //根据大标头查询
    @Override
    public List<HouseBean> findHouse(Integer titleid) {
        return houseMapper.findHouse(titleid);
    }
//根据市查询
    @Override
    public List<HouseBean> findHouse2(Integer cityid) {
        List<HouseBean> house2 = houseMapper.findHouse2(cityid);
        return house2;
    }
//查询
    @Override
    public EasyuiPage findHousePage(Integer page, Integer rows, HouseBean houseBean) {
        EasyuiPage easyuiPage = new EasyuiPage();
        HashMap<String, Object> params = new HashMap<>();
        params.put("houseBean", houseBean);
        int count = houseMapper.findHouseCount(params);
        easyuiPage.setTotal(count);
        //分页
        params.put("startIndex", (page-1)*rows);
        params.put("endIndex",rows);
        List<HouseBean> books = houseMapper.findHouseList(params);
        easyuiPage.setRows(books);
        return easyuiPage;
    }



//t_title表查询
@Override
public List<TitleBean> findTitlePage() {
    return houseMapper.findTitlePage();
}


    //t_title 表删除
    @Override
    public Boolean deleteTitle(String id) {
        return houseMapper.deleteTitle(id);
    }
    //t_title 修改
    @Override
    public Boolean updateTitle(TitleBean titleBean) {
        return houseMapper.updateTitle(titleBean);
    }

    //t_title 新增
    @Override
    public Boolean saveTitle(TitleBean titleBean) {
        int count =houseMapper.saveTitle(titleBean);
        if(count != 1) {
            return false;
        }else {
            return true;
        }
    }
    //t_title回显
    @Override
    public TitleBean findNewsInfoById(Integer id) {
        return houseMapper.findNewsInfoById(id);
    }

    //t_city 表  查询
    @Override
    public EasyuiPage findCityPage(Integer page, Integer rows, CityBean cityBean) {
        EasyuiPage easyuiPage = new EasyuiPage();
        HashMap<String, Object> params = new HashMap<>();
        params.put("cityBean", cityBean);
        int count = houseMapper.findCityCount(params);
        easyuiPage.setTotal(count);
        //分页
        params.put("startIndex", (page-1)*rows);
        params.put("endIndex",rows);
        List<CityBean> books = houseMapper.findCityList(params);
        easyuiPage.setRows(books);
        return easyuiPage;
    }



    @Override
    public Boolean dazhe(HouseBean houseBean) {


        return houseMapper.dazhe(houseBean);
    }

}
