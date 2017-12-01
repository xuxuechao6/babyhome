var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');  //文件缓存
var logger = require('morgan');
var cookieParser = require('cookie-parser');  //本地txt（包含seesion的值 ）
var bodyParser = require('body-parser');
var session=require('express-session');//  是否登录
//========================2加载所有的路由文件========================
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');
var userJSON = require('./routes/userJSON');  //用户操作
var app = express();

// 设置跨域访问，方便开发
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //*代表可访问的地址，可以设置指定域名
  res.header('Access-Control-Allow-Methods:POST,GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.set('views', path.join(__dirname, 'views'));
var engines = require('consolidate');
app.engine('jade', engines.jade);
app.engine('html', engines.ejs);
app.set('view engine', 'jade');
app.use(bodyParser({ keepExtensions: true, uploadDir: './public/upload'}));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));   //1 静态文件处理；
app.use(session({ secret: 'jack', key: 'jack_key',cookie: {maxAge: 30000000 }}));//sesssion
//========================3所有的URL 决定 了路由========================

app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);
app.use('/userJSON', userJSON);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.ejs', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
