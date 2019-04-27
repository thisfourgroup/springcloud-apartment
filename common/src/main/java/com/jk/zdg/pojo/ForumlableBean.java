package com.jk.zdg.pojo;

public class ForumlableBean {



            private  Integer  id	;        //int	32	0	True		标签
            private  String   forumlabel;	    //varchar	255	0	标签名

    @Override
    public String toString() {
        return "ForumlableBean{" +
                "id=" + id +
                ", forumlabel='" + forumlabel + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getForumlabel() {
        return forumlabel;
    }

    public void setForumlabel(String forumlabel) {
        this.forumlabel = forumlabel;
    }
}
