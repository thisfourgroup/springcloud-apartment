package com.jk.zdg.pojo;

public class ForumBean {



            private  Integer  forumid	;        //int	32	0	True		论坛主键
            private  String   forumimg;	    //varchar	255	0	False		图片
            private  String  forumupdate	;    //date	0	0	False		上传时间
            private  Integer  forumbrowse;	    //int	255	0	False		浏览
            private  Integer  forumcollect;	 //int	255	0	False		收藏
            private  Integer  forumlike;	     //int	255	0	False		点赞
            private  Integer  forumcommentid;	  //int	255	0	False		评论id
            private  String  foruminfo;	      //blob	0	0	False		简介内容
            private  String  forumuser;	       //varchar	255	0	False		论坛人
            private  Integer forumlabelid;	        //varchar	255	0	False		标签
            private  String forumname;	        //varchar	255	0	False		论坛名
            private  String url;	        //varchar	255	0	False		路径
             //业务字段
             private  Integer  commentid	;        //int	32	0	True		评论主键
             private  String   commentinfo;	    //varchar	255	0	False		评论内容
             private  String  commenttime	;    //date	0	0	False		评论时间forumlabel
             private  String  forumlabel	;    //论坛标签
             private  String  image	;    //用户头像
             private  String  provinceAndcityname	;    //省市名


              //条查
              private  String  name	;    // 房东姓名
              private  String  provincename	;    // 省
              private  String  cityname	;    // 市
              private  Integer  cityid	;    // 市
              private  Integer  pid	;    // 市

    public Integer getForumid() {
        return forumid;
    }

    public void setForumid(Integer forumid) {
        this.forumid = forumid;
    }

    public String getForumimg() {
        return forumimg;
    }

    public void setForumimg(String forumimg) {
        this.forumimg = forumimg;
    }

    public String getForumupdate() {
        return forumupdate;
    }

    public void setForumupdate(String forumupdate) {
        this.forumupdate = forumupdate;
    }

    public Integer getForumbrowse() {
        return forumbrowse;
    }

    public void setForumbrowse(Integer forumbrowse) {
        this.forumbrowse = forumbrowse;
    }

    public Integer getForumcollect() {
        return forumcollect;
    }

    public void setForumcollect(Integer forumcollect) {
        this.forumcollect = forumcollect;
    }

    public Integer getForumlike() {
        return forumlike;
    }

    public void setForumlike(Integer forumlike) {
        this.forumlike = forumlike;
    }

    public Integer getForumcommentid() {
        return forumcommentid;
    }

    public void setForumcommentid(Integer forumcommentid) {
        this.forumcommentid = forumcommentid;
    }

    public String getForuminfo() {
        return foruminfo;
    }

    public void setForuminfo(String foruminfo) {
        this.foruminfo = foruminfo;
    }

    public String getForumuser() {
        return forumuser;
    }

    public void setForumuser(String forumuser) {
        this.forumuser = forumuser;
    }

    public Integer getForumlabelid() {
        return forumlabelid;
    }

    public void setForumlabelid(Integer forumlabelid) {
        this.forumlabelid = forumlabelid;
    }

    public String getForumname() {
        return forumname;
    }

    public void setForumname(String forumname) {
        this.forumname = forumname;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getCommentid() {
        return commentid;
    }

    public void setCommentid(Integer commentid) {
        this.commentid = commentid;
    }

    public String getCommentinfo() {
        return commentinfo;
    }

    public void setCommentinfo(String commentinfo) {
        this.commentinfo = commentinfo;
    }

    public String getCommenttime() {
        return commenttime;
    }

    public void setCommenttime(String commenttime) {
        this.commenttime = commenttime;
    }

    public String getForumlabel() {
        return forumlabel;
    }

    public void setForumlabel(String forumlabel) {
        this.forumlabel = forumlabel;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getProvinceAndcityname() {
        return provinceAndcityname;
    }

    public void setProvinceAndcityname(String provinceAndcityname) {
        this.provinceAndcityname = provinceAndcityname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvincename() {
        return provincename;
    }

    public void setProvincename(String provincename) {
        this.provincename = provincename;
    }

    public String getCityname() {
        return cityname;
    }

    public void setCityname(String cityname) {
        this.cityname = cityname;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    @Override
    public String toString() {
        return "ForumBean{" +
                "forumid=" + forumid +
                ", forumimg='" + forumimg + '\'' +
                ", forumupdate='" + forumupdate + '\'' +
                ", forumbrowse=" + forumbrowse +
                ", forumcollect=" + forumcollect +
                ", forumlike=" + forumlike +
                ", forumcommentid=" + forumcommentid +
                ", foruminfo='" + foruminfo + '\'' +
                ", forumuser='" + forumuser + '\'' +
                ", forumlabelid=" + forumlabelid +
                ", forumname='" + forumname + '\'' +
                ", url='" + url + '\'' +
                ", commentid=" + commentid +
                ", commentinfo='" + commentinfo + '\'' +
                ", commenttime='" + commenttime + '\'' +
                ", forumlabel='" + forumlabel + '\'' +
                ", image='" + image + '\'' +
                ", provinceAndcityname='" + provinceAndcityname + '\'' +
                ", name='" + name + '\'' +
                ", provincename='" + provincename + '\'' +
                ", cityname='" + cityname + '\'' +
                ", cityid=" + cityid +
                ", pid=" + pid +
                '}';
    }
}
