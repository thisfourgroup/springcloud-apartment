package com.jk.zdg.service;

 
import com.jk.zdg.pojo.CommentBean;
import com.jk.zdg.pojo.ForumBean;
import com.jk.zdg.pojo.ForumlableBean;

import java.util.HashMap;
import java.util.List;

public interface ForumService {

    List<ForumBean> queryForum();
    //----------------分割线------------------ForumBean论坛------------------------------------------------------------------

    HashMap<String, Object> selectForum(Integer page, Integer rows ,ForumBean forumBean);

    void addForum(ForumBean photoBean);

    void deleteForum(Integer ids);

    ForumBean queryForumid(Integer id);



    //----------------分割线------------------Comment评论------------------------------------------------------------------
    HashMap<String, Object> selectComment(Integer page, Integer rows, CommentBean commentBean);

    void addComment(CommentBean commentBean);

    void deleteComment(Integer ids);

    CommentBean queryCommentid(Integer id);

    List<ForumlableBean> queryForumlable();

    
    //----------------分割线------------------ 排序------------------------------------------------------------------
    HashMap<String, Object> queryForumshijian(Integer page, Integer rows, ForumBean forumBean);

    HashMap<String, Object> queryForumliulan(Integer page, Integer rows, ForumBean forumBean);
}
