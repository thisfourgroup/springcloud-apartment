package com.jk.zdg.dao;


import com.jk.zdg.pojo.CommentBean;
import com.jk.zdg.pojo.ForumBean;
import com.jk.zdg.pojo.ForumlableBean;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ForumDao {

    @Select("select id,code from t_photo_lunzhuan")
    List<ForumBean> queryForum();

    //----------------分割线------------------ForumBean论坛------------------------------------------------------------------

    // 查询总条数
     @Select("select count(1) " +
             "FROM t_forum a  left join t_comment_user_house b on a.forumcommentid=b.commentid\n" +
             "LEFT JOIN t_comment c on  b.commentid=c.commentid ")
    long queryCount();
    // 查询  分页
   /* @Select("SELECT \n" +
            "a.forumlabelid,a.forumbrowse,a.forumcollect,a.forumcommentid,a.forumid,a.forumimg,a.foruminfo,a.forumlike,a.forumupdate,a.forumuser,a.forumname,\n" +
            "\n" +
            "b.commentid,b.houseid,b.id,b.userid,\n" +
            "\n" +
            "c.commentid,c.commentinfo as commentinfo,c.commenttime as commenttime\n" +
            "FROM t_forum a  left join t_comment_user_house b on a.forumcommentid=b.commentid\n" +
            "LEFT JOIN t_comment c on  b.commentid=c.commentid  " +
            "limit #{start},#{rows}")*/
    List<ForumBean> selectForum(@Param("start") int start,@Param("rows") Integer rows,@Param("forumBean") ForumBean forumBean);
    //新增

    @Select(" insert into t_forum values(#{forumid},#{forumimg},#{forumupdate},0,0,0,#{forumcommentid},#{foruminfo},#{forumuser},#{forumlabelid},#{forumname},#{url})")
    void addForum(ForumBean forumBean);
    //删除
    @Select("delete from t_forum where forumid = #{ids}")
    void deleteForum(Integer ids);
    //回显
    @Select("select" +
            " a.forumlabelid,a.forumbrowse,a.forumcollect,a.forumcommentid,a.forumid,a.forumimg,a.foruminfo,a.forumlike,a.forumupdate,a.forumuser,a.forumname,a.url" +
             " from t_forum a where forumid = #{forumid} ")//id
    ForumBean queryForumid(Integer id);
    //修改
    @Select(" update t_forum set  " +
            "forumlabelid=#{forumlabelid},/*forumbrowse=#{forumbrowse},forumcollect=#{forumcollect},*/forumcommentid=#{forumcommentid},forumimg=#{forumimg},foruminfo=#{foruminfo},/*forumlike=#{forumlike},forumupdate=#{forumupdate},*/forumuser=#{forumuser},forumname=#{forumname},url=#{url}" +
            "   where forumid=#{forumid}")
    void updateForum(ForumBean forumBean);


    //----------------分割线------------------Comment评论------------------------------------------------------------------
    @Select("SELECT count(1) from t_comment")
    long queryCountComment();
    @Select("SELECT a.commentid,a.commentinfo,a.commenttime from t_comment a limit #{start},#{rows}")
    List<CommentBean> selectComment(int start, Integer rows, CommentBean commentBean);
    @Select("insert into t_comment(commentinfo) values(#{commentinfo})")
    void addComment(CommentBean commentBean);
    @Select("update t_comment set commentinfo=#{commentinfo},commenttime=#{commenttime} where commentid=#{commentid}")
    void updateComment(CommentBean commentBean);
    @Select("delete from t_comment where commentid = #{ids}")
    void deleteComment(Integer ids);
    @Select("SELECT commentid,commentinfo,commenttime from t_comment  where commentid = #{id} ")
    CommentBean queryCommentid(Integer id);
    @Select("SELECT * from t_forumlabel")
    List<ForumlableBean> queryForumlable();


     List<ForumBean> queryForumshijian(int start, Integer rows, ForumBean forumBean);
     List<ForumBean> queryForumliulan(int start, Integer rows, ForumBean forumBean);
}
