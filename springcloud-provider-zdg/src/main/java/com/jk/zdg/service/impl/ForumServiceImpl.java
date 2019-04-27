package com.jk.zdg.service.impl;

import com.jk.zdg.dao.ForumDao;
import com.jk.zdg.pojo.CommentBean;
import com.jk.zdg.pojo.ForumBean;
import com.jk.zdg.pojo.ForumlableBean;
import com.jk.zdg.service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
@Service
public class ForumServiceImpl implements ForumService {
    @Autowired
    private ForumDao forumDao;

    @Override
    public List<ForumBean> queryForum() {
        return forumDao.queryForum();
    }
    //----------------分割线------------------ForumBean论坛------------------------------------------------------------------

    @Override
    public HashMap<String, Object> selectForum(Integer page, Integer rows,ForumBean forumBean) {
        HashMap<String, Object> hashMap = new HashMap<>();
        long sum = forumDao.queryCount();
        int start = (page-1)*rows;
        List<ForumBean> list =  forumDao.selectForum(start,rows,forumBean);
        hashMap.put("total", sum);
        hashMap.put("rows", list);
        return hashMap;
    }

    @Override
    public void addForum(ForumBean forumBean) {
         Integer id = forumBean.getForumid();
        if(id==null){
            //新增
            forumDao.addForum(forumBean);
        }else{
            //修改
            forumDao.updateForum(forumBean);
        }
    }

    @Override
    public void deleteForum(Integer ids) {
        forumDao.deleteForum(ids);
    }

    @Override
    public ForumBean queryForumid(Integer id) {
        return forumDao.queryForumid(id);
    }



    //----------------分割线------------------Comment评论------------------------------------------------------------------
    @Override
    public HashMap<String, Object> selectComment(Integer page, Integer rows, CommentBean commentBean) {
        HashMap<String, Object> hashMap = new HashMap<>();
        long sum = forumDao.queryCountComment();
        int start = (page-1)*rows;
        List<CommentBean> list =  forumDao.selectComment(start,rows,commentBean);
        hashMap.put("total", sum);
        hashMap.put("rows", list);
        return hashMap;
    }

    @Override
    public void addComment(CommentBean commentBean) {
        //forumDao.addComment(commentBean);
        Integer id = commentBean.getCommentid();
        if(id==null){
            //新增
            forumDao.addComment(commentBean);
        }else{
            //修改
            forumDao.updateComment(commentBean);
        }
    }

    @Override
    public void deleteComment(Integer ids) {
        forumDao.deleteComment(ids);
    }

    @Override
    public CommentBean queryCommentid(Integer id) {
        return forumDao.queryCommentid(id);
    }

    @Override
    public List<ForumlableBean> queryForumlable() {
        return forumDao.queryForumlable();
    }

    @Override
    public HashMap<String, Object> queryForumshijian(Integer page, Integer rows, ForumBean forumBean) {
        HashMap<String, Object> hashMap = new HashMap<>();
        long sum = forumDao.queryCount();
        int start = (page-1)*rows;
        List<ForumBean> list =  forumDao.queryForumshijian(start,rows,forumBean);
        hashMap.put("total", sum);
        hashMap.put("rows", list);
        return hashMap;
    }

    @Override
    public HashMap<String, Object> queryForumliulan(Integer page, Integer rows, ForumBean forumBean) {
        HashMap<String, Object> hashMap = new HashMap<>();
        long sum = forumDao.queryCount();
        int start = (page-1)*rows;
        List<ForumBean> list =  forumDao.queryForumliulan(start,rows,forumBean);
        hashMap.put("total", sum);
        hashMap.put("rows", list);
        return hashMap;
    }

}
