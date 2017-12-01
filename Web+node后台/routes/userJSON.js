var express = require('express');
var userJSONDao = require('./../dao/userJSONDao');
var multipart = require('connect-multiparty');
var url = require('url');
var sessionFilter = require('./../myutil/sessionFilter');
var router = express.Router();

router.post('/login', function (req, res, next) {
    console.log('sencha登陆');
    userJSONDao.login(req, res, next);
});
router.post('/register', function (req, res, next) {
    console.log('sencha注册');
    userJSONDao.register(req, res, next);
});
router.get('/forgetPwd', function (req, res, next) {
    console.log('sencha修改密码');
    userJSONDao.forgetPwd(req, res, next);
});
router.post('/changeinformation',function (req, res, next) {
    console.log('sencha修改信息');
    userJSONDao.changeinformation(req, res, next);
});
router.post('/changeinformationPic', multipart(),function (req, res, next) {
    console.log('sencha修改头像信息');
    userJSONDao.changeinformationPic(req, res, next);
});

router.post('/dynamicUpload', multipart(), function (req, res, next) {
    console.log('sencha上传动态');
    userJSONDao.dynamicUpload(req, res, next);
});
router.get('/showalldynamic', function (req, res, next) {
    console.log('sencha分页处理显示所有人动态');
    userJSONDao.queryalldynamic(req, res, next);
});
  
router.get('/showdynamic', function (req, res, next) {
    console.log('sencha显示个人动态');
    userJSONDao.showdynamic(req, res, next);
});

router.get('/deletedynamic', function (req, res, next) {
    console.log('sencha删除个人动态');
    userJSONDao.deletedynamic(req, res, next);
});

router.get('/comment', function (req, res, next) {
    console.log('sencha上传评论');
    userJSONDao.comment(req, res, next);
});

router.get('/searchcomment', function (req, res, next) {
    console.log('sencha查看评论');
    userJSONDao.searchcomment(req, res, next);
});
router.get('/deletecomment', function (req, res, next) {
    console.log('sencha删除评论');
    userJSONDao.deletecomment(req, res, next);
});
router.get('/showuserinfo', function (req, res, next) {
    console.log('sencha查看个人信息');
    userJSONDao.showuserinfo(req, res, next);
});
router.get('/dynamicDetail', function (req, res, next) {
    console.log('sencha查看详细动态');
    userJSONDao.showdynamicDetail(req, res, next);
});
router.get('/common', function (req, res, next) {
    console.log('sencha查看育儿常识');
    userJSONDao.common(req, res, next);
});
router.get('/commondetails', function (req, res, next) {
    console.log('sencha查看育儿详情');
    userJSONDao.commondetails(req, res, next);
});
router.get('/news', function (req, res, next) {
    console.log('新闻中心');
    userJSONDao.news(req, res, next);
});
router.get('/newsdetails', function (req, res, next) {
    console.log('新闻详情');
    userJSONDao.newsdetails(req, res, next);
});
module.exports = router;
