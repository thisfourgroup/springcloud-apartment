package com.jk.pojo;

import java.math.BigDecimal;

public class HouseBean {
    private Integer id;
    private String name;   //
    private BigDecimal price;//原价

    private Integer cityid;  //
    private String cityName;

    private Integer landlordid;

    private Integer huxingid;  //
    private String huxingName;

    private BigDecimal discount;//优惠后价格
    private Integer discountsign;//折扣
    private Integer people;

    private Integer titleid;
    private String titleName;

     private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getHuxingName() {
        return huxingName;
    }

    public void setHuxingName(String huxingName) {
        this.huxingName = huxingName;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public Integer getLandlordid() {
        return landlordid;
    }

    public void setLandlordid(Integer landlordid) {
        this.landlordid = landlordid;
    }

    public Integer getHuxingid() {
        return huxingid;
    }

    public void setHuxingid(Integer huxingid) {
        this.huxingid = huxingid;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public Integer getDiscountsign() {
        return discountsign;
    }

    public void setDiscountsign(Integer discountsign) {
        this.discountsign = discountsign;
    }

    public Integer getPeople() {
        return people;
    }

    public void setPeople(Integer people) {
        this.people = people;
    }

    public Integer getTitleid() {
        return titleid;
    }

    public void setTitleid(Integer titleid) {
        this.titleid = titleid;
    }


}


