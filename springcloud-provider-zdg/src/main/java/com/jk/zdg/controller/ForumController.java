package com.jk.zdg.controller;

 import com.jk.zdg.pojo.CommentBean;
import com.jk.zdg.pojo.ForumBean;
 import com.jk.zdg.pojo.ForumlableBean;
 import com.jk.zdg.service.ForumService;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Controller
 public class ForumController {

    @Autowired
    private ForumService forumService;

    //查询queryForum                   !!!!!!! 测试
    @RequestMapping("queryForumtest")
    @ResponseBody
     public List<ForumBean> queryForum() {
        return forumService.queryForum();
    }

     //标签
    @RequestMapping("queryForumlable")
    @ResponseBody
    public List<ForumlableBean> queryForumlable() {
        return forumService.queryForumlable();
    }
    //----------------分割线------------------ForumBean论坛------------------------------------------------------------------
    //查询 分页 Forum
        @RequestMapping("selectForum")
        @ResponseBody
        public HashMap<String,Object> selectForum(@RequestParam Integer page,@RequestParam Integer rows,@RequestBody ForumBean forumBean){

            return forumService.selectForum(page,rows,forumBean);
        }

    //新增
    @RequestMapping("addForum")
    @ResponseBody
    private  void  addForum(@RequestBody ForumBean forumBean){

        forumService.addForum(forumBean);
    }
    //删除
    @RequestMapping("deleteForum")
    @ResponseBody
    public void  deleteForum(@RequestBody Integer ids){
        forumService.deleteForum(ids);
    }
    //回显
    @RequestMapping("queryForumid")
    @ResponseBody
    private ForumBean queryForumid(@RequestBody Integer id){
        return forumService.queryForumid(id);
    }

    //----------------分割线------------------Comment评论------------------------------------------------------------------
    //查询 分页 Forum
    @RequestMapping("selectComment")
    @ResponseBody
    public HashMap<String,Object> selectComment(@RequestParam Integer page,@RequestParam Integer rows,@RequestBody CommentBean commentBean){

        return forumService.selectComment(page,rows,commentBean);
    }
    //新增
    @RequestMapping("addComment")
    @ResponseBody
    private  void  addComment(@RequestBody CommentBean commentBean){
        forumService.addComment(commentBean);
    }
    //删除
    @RequestMapping("deleteComment")
    @ResponseBody
    public void  deleteComment(@RequestBody Integer ids){
        forumService.deleteComment(ids);
    }
    //回显
    @RequestMapping("queryCommentid")
    @ResponseBody
    private CommentBean queryCommentid(@RequestBody Integer id){
        return forumService.queryCommentid(id);
    }

    //----------------分割线------------------Comment评论------------------------------------------------------------------
    //按时间查询queryForum
    @RequestMapping("queryForumshijian")
    @ResponseBody
    public HashMap<String,Object> queryForumshijian(@RequestParam Integer page,@RequestParam Integer rows,@RequestBody ForumBean forumBean){

        return forumService.queryForumshijian(page,rows,forumBean);
    }

    //按浏览两查询queryForum

    @RequestMapping("queryForumliulan")
    @ResponseBody
    public HashMap<String,Object> queryForumliulan(@RequestParam Integer page,@RequestParam Integer rows,@RequestBody ForumBean forumBean){

        return forumService.queryForumliulan(page,rows,forumBean);
    }






}








