var express = require('express');
var adminDao = require('./../dao/adminDao');
var router = express.Router();
var url = require('url');
var multipart = require('connect-multiparty');


/* GET admin listing. */
router.get('/', function(req, res, next) {
  res.render("backstage/login.ejs",{Msg:""});//加载登录界面
});
router.post('/LoginJudge', function(req, res, next) {
  console.log('登陆验证');
  adminDao.login(req, res, next);
});
//session
router.get('/Session', function (req, res) {
  console.log('Login');
  console.log('req.session.adminPhone:'+req.session.adminPhone);
  res.writeHead(200,{'Content-Type':'text/html'});
  //设置显示字符编码
  res.write(req.session.adminName);
  res.end();
});
//注销
router.get('/logout', function(req, res, next) {
  console.log('注销');
  adminDao.logout(req,res,next);
});
router.get('/index',function (req,res,next) {
  console.log("首页")
  res.render("backstage/index.ejs")
});
//显示
router.get('/userinfo', function(req, res, next) {
  console.log('显示所有用户');
  adminDao.showuserinfo(req, res, next);
});
router.get('/admininfo', function(req, res, next) {
  console.log('显示所有用户');
  adminDao.showadmininfo(req, res, next);
});
router.get('/searchUser', function(req, res, next) {
  console.log('搜索所有用户');
  adminDao.searchUser(req, res, next);
});
router.get('/dynamic',multipart(),  function(req, res, next) {
  console.log('显示动态');
  adminDao.showalldynamic(req,res,next);
});
router.get('/news',multipart(),  function(req, res, next) {
  console.log('显示新闻动态');
  adminDao.showallnews(req,res,next);
});
router.get('/common',multipart(),  function(req, res, next) {
  console.log('显示育儿常识');
  adminDao.showallcommon(req,res,next);
});


router.get('/publish', function(req, res, next) {
  console.log('发布消息');
  res.render("backstage/publish.html");
});
router.get('/record', function(req, res) {
  console.log('登录记录');
  res.render("backstage/record.html");
});
router.get('/adminregister', function(req, res, next) {
  console.log("管理员注册")
  res.render("backstage/adminregister.ejs",{Msg:""})
});
router.post('/adminregisterJudge', function(req, res, next) {
  console.log('注册管理员验证');
  adminDao.addAdmin(req, res, next);
});
router.get('/usersregister', function(req, res, next) {
  console.log('注册用户');
  res.render("backstage/usersregister.ejs");
});
router.post('/usersregister',multipart(), function(req, res, next) {
  console.log('注册用户验证');
  adminDao.addUser(req, res, next);
});
router.get('/newspublish', function(req, res, next) {
  console.log('发布新闻资讯');
  res.render("backstage/newspublish.ejs");
});
router.post('/newsJudge',multipart(), function(req, res, next) {
  console.log('发布新闻资讯验证');
  adminDao.addnews(req, res, next);
});
router.get('/commonpublish', function(req, res, next) {
  console.log('发布育儿资讯');
  res.render("backstage/commonpublish.ejs",{Msg:" "});
});
router.post('/commonJudge', function(req, res, next) {
  console.log('发布育儿资讯验证');
  adminDao.addcommon(req, res, next);
});
/*******************修改*****************/
router.get('/updateUserinfo', function(req, res, next) {
  console.log('获取需要修改的用户信息');
  adminDao.updateUserinfo(req, res, next);
});
router.post('/updateUser', function(req, res, next) {
  console.log('修改用户信息');
  adminDao.updateUser(req, res, next);
});
router.get('/updateAdmininfo', function(req, res, next) {
  console.log('修改界面');
  adminDao.updateAdmininfo(req, res, next);
});
router.post('/updateAdmin', function(req, res, next) {
  console.log('修改用户信息');
  adminDao.updateAdmin(req, res, next);
});
/*****************删除************************/
router.get('/deleteUserinfo', function(req, res, next) {
  console.log('删除用户信息');
  adminDao.deleteUserinfo(req, res, next);
});
router.get('/deleteuserdynamic', function(req, res, next) {
  console.log('删除用户动态');
  adminDao.deleteuserdynamic(req, res, next);
});
router.get('/deletenews', function(req, res, next) {
  console.log('删除新闻资讯动态');
  adminDao.deletenews(req, res, next);
});
router.get('/deletecommon', function(req, res, next) {
  console.log('删除育儿常识');
  adminDao.deletecommon(req, res, next);
});

module.exports = router;

