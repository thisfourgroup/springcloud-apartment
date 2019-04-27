package com.jk.zdg.controller;

import com.alibaba.fastjson.JSONObject;
import com.jk.zdg.pojo.CommentBean;
import com.jk.zdg.pojo.ForumBean;
import com.jk.zdg.pojo.ForumlableBean;
import com.jk.zdg.service.ForumService;
import com.jk.zdg.utils.OSSClientUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

@Controller
public class ForumController {
    @Autowired
    private ForumService forumService;



    /**
     上传图片
     */
    @RequestMapping("upload")
    @ResponseBody
    public String uploadImg(@RequestParam MultipartFile img)throws IOException {
        if (img == null || img.getSize() <= 0) {
            throw new IOException("file不能为空");
        }
        OSSClientUtil ossClient=new OSSClientUtil();
        String name = ossClient.uploadImg2Oss(img);
        String imgUrl = ossClient.getImgUrl(name);
        String string = JSONObject.toJSONString(imgUrl);
        return string;
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
    public  HashMap<String,Object> selectForum(Integer page, Integer rows, ForumBean forumBean){

        return forumService.selectForum(page,rows,forumBean);
    }

     //新增
    @RequestMapping("addForum")
    @ResponseBody
    private  void  addForum( ForumBean forumBean){

        forumService.addForum(forumBean);
    }
    //删除
    @RequestMapping("deleteForum")
    @ResponseBody
    public void  deleteForum( Integer ids){
        forumService.deleteForum(ids);
    }
    //回显
    @RequestMapping("queryForumid")
    @ResponseBody
    private ForumBean queryForumid(  Integer forumid){
        return forumService.queryForumid(forumid);
    }

    //----------------分割线------------------Comment评论------------------------------------------------------------------
     //查询 分页 Forum
    @RequestMapping("selectComment")
    @ResponseBody
    public HashMap<String,Object> selectComment( Integer page, Integer rows, CommentBean commentBean){

        return forumService.selectComment(page,rows,commentBean);
    }
    //新增
    @RequestMapping("addComment")
    @ResponseBody
    private  void  addComment(CommentBean commentBean){
         forumService.addComment(commentBean);
    }
    //删除
    @RequestMapping("deleteComment")
    @ResponseBody
    public void  deleteComment( Integer ids){
        forumService.deleteComment(ids);
    }
    //回显
    @RequestMapping("queryCommentid")
    @ResponseBody
    private CommentBean queryCommentid(Integer commentid){
        return forumService.queryCommentid(commentid);
    }

    //----------------分割线------------------Comment评论------------------------------------------------------------------
    //按时间查询queryForum
    @RequestMapping("queryForumshijian")
    @ResponseBody
    public HashMap<String,Object> queryForumshijian(Integer page,Integer rows,ForumBean forumBean){

        return forumService.queryForumshijian(page,rows,forumBean);
    }

    //按浏览两查询queryForum

    @RequestMapping("queryForumliulan")
    @ResponseBody
    public HashMap<String,Object> queryForumliulan(Integer page,Integer rows,ForumBean forumBean){

        return forumService.queryForumliulan(page,rows,forumBean);
    }



}

