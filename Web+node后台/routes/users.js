var express = require('express');
var userDao=require('./../dao/userDao');
var router = express.Router();
var session=require('express-session');//gyb
var multipart = require('connect-multiparty');
//=============================/* GET users listing. */===========
router.get('/', function(req, res, next) {
  res.send('index.ejs');
});
//============================================
router.get('/Dynamic', function(req, res, next) {
  console.log('动态');
  if(req.session.userPhone==null){
    console.log('未登录获取动态失败转到登陆');
    res.render("login.ejs",{Msg:""});
    return
  }
  console.log(req.session.userPhone)
  userDao.showalldynamic(req,res,next);
});
//============================================
router.get('/myDynamic', function(req, res, next) {
  console.log('我的动态');
  if(req.session.userPhone==null){
    console.log('登陆失效');
    res.render("login.ejs",{Msg:""});
    return
  }
  console.log(req.session.userPhone)
  userDao.showmyDynamic(req,res,next);
});
//============================================
router.get('/teacherDynamic', function(req, res, next) {
  console.log('老师动态');
  if(req.session.userPhone==null){
    console.log('登陆失效');
    res.render("login.ejs",{Msg:""});
    return
  }
  console.log(req.session.userPhone)
  userDao.showteacherDynamic(req,res,next);
});

//===============================
router.get('/appIntroduce', function(req, res, next) {
  console.log('APP产品介绍');
  res.render("appIntroduce.html");
});
//===========================
router.get('/Cooperation', function(req, res, next) {
  console.log('加盟合作');
  res.render("Cooperation.html");
});
//===========================================
router.get('/userInformation', function(req, res, next) {
  console.log('显示用户个人信息');
  userDao.showuserinformation(req,res,next);
});
//============================
router.get('/ServiceHelp', function(req, res, next) {
  console.log('服务帮助');
  res.render("ServiceHelp.html");
});
//===================
router.get('/login', function(req, res, next) {
  console.log('登陆');
  res.render("login.ejs",{Msg:""});
});
router.post('/login', function(req, res, next) {
  console.log('登陆验证');
  userDao.login(req,res,next);
});
router.get('/logout', function(req, res, next) {
  console.log('注销');
  userDao.logout(req,res,next);
});

router.get('/insertdynamic', function(req, res, next) {
  console.log('添加动态');
  if(req.session.userPhone==null){
    console.log('未登录获取动态失败转到登陆');
    res.render("login.ejs",{Msg:""});
    return
  }
  res.render("InsertDynamic.ejs");
});

router.get('/userInformation', function(req, res, next) {
  console.log('用户个人信息');
  userDao.showuserinformation(req,res,next);
});

router.post('/dynamicUpload',  multipart(),function(req, res, next) {
  console.log('上传动态');
  userDao.dynamicUpload(req, res);
});
//========================忘记密码=================================
router.get('/forgetPwd',function(req, res, next) {
  console.log('忘记密码');
  console.log('forgetPwd');
  res.render("forgetPwd1.ejs",{Msg:" "});
});
router.post('/forgetPwd1',function(req, res, next) {
  console.log('forgetPwd1');
  console.log('忘记密码1');
  userDao.forgetpwd(req, res);
});
router.post('/forgetPwd2',function(req, res, next) {
  console.log('忘记密码2');
  userDao.forgetpwd1(req, res);
});
router.post('/forgetPwd3',function(req, res, next) {
  console.log('忘记密码3');
  userDao.forgetpwd2(req, res);
});
router.post('/forgetPwd4',function(req, res, next) {
  console.log('忘记密码4');
  userDao.dynamicUpload(req, res);
});

router.get('/Session', multipart(), function (req, res) {
  console.log('Login');
  var info="";
  console.log('req.session.userPhone:'+req.session.userPhone);
  if(req.session.userPhone==undefined) {
    info = "<a href='/users/login'>登陆</a>";
  }
  else
  {
    info ="<a href='/users/logout' onclick='return confirm(请确定要删除此动态吗)'>注销</a>";
  }
  res.writeHead(200,{'Content-Type':'text/html'});
  //设置显示字符编码
  res.write(info);
  res.end();
});

router.get('/deletedynamic', function(req, res, next) {
  console.log('删除用户动态');
  userDao.deletedynamic(req,res,next);
});
//用户修改信息，表单发送
router.post('/changeinformation', multipart(),function(req, res, next) {
  console.log("/changeinformation")
  userDao.changeinformation(req, res, next);
});
//========================评论=============================
router.post('/comment2',function(req, res, next) {
  console.log('查看评论');
  userDao.searchcomment(req, res);
});
router.post('/comment',function(req, res, next) {
  console.log('上传评论');
  userDao.comment(req, res);
});
//====================点赞===============================
router.post('/praise', function(req, res, next) {
  console.log('点赞');
  if(req.session.userPhone==null){
    console.log('点赞，登陆失效');
    res.render("login.ejs",{Msg:""});
    return
  }
  console.log(req.session.userPhone)
  userDao.praise(req,res,next);
});
//====================加盟合作=====================
router.post('/Usercooperation', function(req, res, next) {
  console.log('Usercooperation');
  userDao.join(req,res,next);
});
module.exports = router;
//==============路由控制页面跳转=======================