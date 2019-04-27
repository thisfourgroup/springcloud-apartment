package com.jk.zdg.service;

import com.jk.zdg.pojo.CommentBean;
import com.jk.zdg.pojo.ForumBean;
import com.jk.zdg.pojo.ForumlableBean;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;

@FeignClient("springcloud-provider-zdg")
public interface ForumService {

    @RequestMapping("selectForum")
    HashMap<String, Object> selectForum(@RequestParam Integer page, @RequestParam Integer rows, @RequestBody ForumBean forumBean);
    @RequestMapping("addForum")
    void addForum(ForumBean forumBean);
    @RequestMapping("deleteForum")
    void deleteForum(Integer ids);
    @RequestMapping("queryForumid")
    ForumBean queryForumid(Integer id);

    //----------------分割线------------------Comment评论------------------------------------------------------------------
    @RequestMapping("selectComment")
    HashMap<String, Object> selectComment(@RequestParam Integer page,@RequestParam Integer rows,@RequestBody CommentBean commentBean);
    @RequestMapping("addComment")
    void addComment(CommentBean commentBean);
    @RequestMapping("deleteComment")
    void deleteComment(Integer ids);
    @RequestMapping("queryCommentid")
    CommentBean queryCommentid(Integer id);
    @RequestMapping("queryForumlable")
    List<ForumlableBean> queryForumlable();


//
    @RequestMapping("queryForumshijian")
    HashMap<String, Object> queryForumshijian(@RequestParam Integer page,@RequestParam Integer rows, @RequestBody ForumBean forumBean);
    @RequestMapping("queryForumliulan")
    HashMap<String, Object> queryForumliulan(@RequestParam Integer page,@RequestParam Integer rows, @RequestBody ForumBean forumBean);
}


