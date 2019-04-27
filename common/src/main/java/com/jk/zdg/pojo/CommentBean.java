package com.jk.zdg.pojo;

public class CommentBean {


    private  Integer  commentid	;        //int	32	0	True		评论主键
    private  String   commentinfo;	    //varchar	255	0	False		评论内容
    private  String  commenttime	;    //date	0	0	False		评论时间

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

    @Override
    public String toString() {
        return "CommentBean{" +
                "commentid=" + commentid +
                ", commentinfo='" + commentinfo + '\'' +
                ", commenttime='" + commenttime + '\'' +
                '}';
    }
}
