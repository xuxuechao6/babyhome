var $conf = require("./../conf/db");
var $sql = require('./userJSONSqlMapping');
var mysql = require('mysql');
var path = require('path');
var uuid = require('node-uuid');
var fs = require('fs');
var url = require('url');
var pwdHelper = require('./../myutil/pwdHelper');
//调用utility的dbHelpler
var DBPool = require('./../myutil/dbHelper');
var db = require('./../myutil/mysql.js');
//创建连接池
var pool = mysql.createPool($conf);
//更改日期格式
var moment = require('moment');
//=========================登陆======================================
//login
var login = function (req, res, next) {
    var param = req.body;
    console.log(param.userPhone);
    console.log(param.userPassword);
    var pwd = param.userPassword;          //直接对"123456"字符串加密
    var encode = pwdHelper.encrypwd(pwd);
    console.log("pwd:" + encode);
    pool.getConnection(function (err, connection) {
        // if (err) {
        //     res.render("error.html");  //错误界面
        // }
        // else {
        connection.query($sql.userLogin, [param.userPhone, encode], function (err, result) {
            if (err) {
                // res.render("error.html");  //错误界面
                console.log("错误：" + err.message);
                res.json({"failure": false});//退出query方法，后面的代码不执行了；
            }
            else {
                console.log(JSON.stringify(result));
                if (result.length == 0) {
                    res.json({"failure": false});
                    // res.render("user/login.ejs", {Msg: "帐号或密码错误！"});
                }
                else {
                    // 直接跳转到页面：
                    //res.render("user/showAllUsers.ejs", {users: result});
                    // 直接跳转到路由，有session判断
                    // console.log(JSON.stringify(result[0].userPhone));
                    // req.session.userId = result[0].UserId;
                    res.json({"success": true});
                    // res.redirect("/p/users/QueryAll");
                }
                connection.release();

            }
        });
        // }
    });
}
//=============================注册==============================================
var register= function (req, res) {
    var param = req.body;

//================insert==========================
//     console.log(" userPhone :" + param.userPhone);
//     console.log(" userNickName :" + param.userNickName);
//     console.log(" userPassword :" + param.userPassword);
//     console.log(" userSex :" + param. userSex);
//     console.log(" userType :" + param. userType);
//     console.log(" userDate :" + param.userDate);
    var birthDate=moment(param.userDate).format('YYYY-MM-DD');
    // console.log(" birthDate :" + birthDate);
    /*-------------string md5------------------*/
    var pwd = param.userPassword;          //直接对"123456"字符串加密
    var encode = pwdHelper.encrypwd(pwd);
    // console.log("pwd:" + encode);

    pool.getConnection(function (err, connection) {
        connection.query($sql.userRegister, [param.userPhone, encode, param.userNickName, param.userSex, birthDate,param.userType], function (err, result) {
            if (err) {
                console.log(err.message);
                res.json({"success":false});

            }
            else {
                // console.log("result.affectedRow"+result.affectedRow)
                // 使用页面进行跳转提示
                if (result.affectedRows > 0) {
                    res.json({"success":true});

                } else {
                    res.json({"failure":false});
                }
                connection.release();
            }

        });
    });
};

//================================修改密码=======================================
var forgetPwd = function (req, res, next) {
    var _userPhone = req.query.userPhone;
    /*-------------string md5------------------*/
    var pwd = req.query.userPassword;         //直接对"123456"字符串加密
    var encode = pwdHelper.encrypwd(pwd);
    console.log("_userPhone:"+_userPhone);
    console.log("_UserPassword："+pwd);
    console.log(encode)
    pool.getConnection(function (err, connection) {
        if (err) {
            res.json({"success": false});
        }
        else {
            connection.query($sql.updatePwd1,[encode,_userPhone], function (err, result) {
                if (err) {
                    res.json({"success": false});
                }
                else {
                    if (result.length == 0) {
                        console.log("修改密码失败");
                        res.json({"success": false});
                    }
                    else {
                        // console.log(JSON.stringify(result));
                        console.log("修改密码成功");
                        res.json({"success": true});
                    }
                    connection.release();

                }
            });
        }
    });
}
//===============================查看个人信息=====================================
var showuserinfo = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.json({"failure": false});
        }
        else {
            var _userPhone = req.query.userPhone;
            console.log("_userPhone:" + _userPhone);
            connection.query($sql.queryuserByuserPhone, _userPhone, function (err, result) {
                console.log("查询个人信息");
                if (err) {
                    console.log(err.message);
                    console.log("failure: false");
                }
                else {
                    res.send({success: true, userinfo: result});
                }
                connection.release();
            });
        }
    });
}
//========================查看详细动态==========================
var showdynamicDetail = function (req, res, next) {
    var pic="";
    var dynamicId = req.query.dynamicId;
    console.log("dynamicId:" + dynamicId);
    pool.getConnection(function (err, connection) {
        connection.query($sql.showdynamicPic, function (err, result) {
                if (err) {
                    console.log("err:" + err.message);
                    res.json({code: 500});
                }
                pic = result;
            }
        );
            connection.query($sql.showdynamicDetail, dynamicId, function (err, result) {
                console.log("查看详细动态");
                if (err) {
                    console.log(err.message);
                    console.log("failure: false");
                }else {
                    for (var i = 0; i < result.length; i++) {
                        result[i].senchapic = new Array();
                        for (var j = 0; j < pic.length; j++) {
                            if (pic[j].dynamicId == result[i].dynamicId) {
                                result[i].senchapic.push(pic[j].dynamicPic)
                            }
                        }
                    }
                }
                    res.send({success: true, userinfo: result});
                    connection.release();
            });
    });
}
                    
//==============================修改个人信息============================
var changeinformation = function (req, res,next) {
    var param=req.body;
    var _userPhone = req.query.userPhone;
    // console.log(_userPhone);
    // console.log(param.userNickName);
    // console.log(param.userSex);
    // console.log(param.userDate);
    var birthDate = moment(param.userDate).format('YYYY-MM-DD');
    console.log(birthDate);
    pool.getConnection(function (err, connection) {
        connection.query($sql.updateinfo, [param.userNickName, param.userSex, birthDate,_userPhone], function (err, result) {
            if (err) {
                res.json({"success": false});
            }
            else {
                if (result.length == 0) {
                    console.log("修改个人信息失败");
                    res.json({"success": false});
                }
                else {
                    // console.log(JSON.stringify(result));
                    console.log("修改个人信息成功");
                    res.json({"success": true});
                }
            }
            connection.release();
        });
    });
};

//==============================修改个人头像信息============================
var changeinformationPic = function (req, res,next) {
    var param=req.body;
    var _userPhone = req.query.userPhone;
    // console.log(_userPhone);
    var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
    var v = uuid.v4();
    var suffix = filename.substr(filename.lastIndexOf("."));
    var _myFileName = v + suffix;
    console.log("_myFileName:" + _myFileName);
    var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
    // console.log("targetPath:" + targetPath);
    // console.log("req.files.files.path:" + req.files.files.length);
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
    console.log("Pic:" + filename);

    pool.getConnection(function (err, connection) {
        //var userPhone = req.session.userPhone;
        connection.query($sql.updatePic, [_myFileName,_userPhone], function (err, result) {
            if (err) {
                res.json({"success": false});
            }
            else {
                if (result.length == 0) {
                    console.log("修改头像失败");
                    res.json({"success": false});
                }
                else {
                    console.log(JSON.stringify(result));
                    console.log("修改头像成功");
                    console.log('true');
                    res.json({"success": true});
                }
            }
            connection.release();
        });
    });
};
//==========================上传动态====================================
var dynamicUpload = function (req, res,next) {
    var sqlUserPic = "insert into dynamicPic(dynamicId,dynamicPic) values";
    var param = req.body;
    if (req.files.files.length == undefined) {
        var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
        var v = uuid.v4();
        var suffix = filename.substr(filename.lastIndexOf("."));
        var _myFileName = v + suffix;
        console.log("_myFileName:" + _myFileName);
        /*-------------filename------------------*/
        var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
        fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
        //======================不一样的=================================
        sqlUserPic += "((SELECT @@identity),'" + _myFileName + "'),"
    }
    else {
        //多图：
        for (var i = 0; i < req.files.files.length; i++) {
            //================upload==========================
            // console.log(req.files);
            // console.log("req.files.files.originalFilename:" + req.files.files[i].originalFilename);
            // console.log("req.files.files.path:" + req.files.files[i].path);
            var fileName = req.files.files[i].originalFilename || path.basename(req.files.files[i].path);
            // console.log("filename:" + fileName);
            // console.log("dirname:" + path.dirname(__filename));
            // console.log("  path.resolve(__dirname, '../'):" + path.resolve(__dirname, '../'));
            //copy file to a public directory
            /*-------------filename------------------*/
            var v = uuid.v4();
            var suffix = fileName.substr(fileName.lastIndexOf("."));
            var _myFileName = v + suffix;
            console.log("_myFileName:" + _myFileName);
            /*-------------filename------------------*/
            var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
            // console.log("targetPath:" + targetPath);
            // console.log("req.files.files.path:" + req.files.files[i].length);
            //copy file
            fs.createReadStream(req.files.files[i].path).pipe(fs.createWriteStream(targetPath));
            sqlUserPic += "((SELECT @@identity),'" + _myFileName + "'),"
        }
    }
    sqlUserPic = sqlUserPic.substr(0, sqlUserPic.length - 1);
    console.log(" sqlUserPic :" + sqlUserPic);

    //================insert==========================
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            if (param.text1.length == 0) {
                console.log("发布失败！");
                console.log("ggggg"+param.text1);
                return;
            }
            var _userPhone=req.query.userPhone
            var nowDate = new Date();
            var time = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
            console.log(time);
            connection.query($sql.addDynamic1, [time,param.text1,_userPhone], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                console.log('插入成功！');
                console.log(result);
            });
            if (_myFileName.length == 40) {
                connection.query(sqlUserPic, function (err, result) {
                    if (err) {
                        console.log(err.message);
                        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    }
                    else {
                        if (result.affectedRows > 0) {
                            res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                        } else {
                            res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                        }
                        connection.release();
                    }
                });
            }
            else {
                res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});
            }
        }
    });
};
//=============================分页处理显示所有人动态============================================
var queryalldynamic = function (req, res, next) {
    var start = req.query.start; //从第几条数据开始的
    var limit = req.query.limit;// 每页显示几条数据
    var type = req.query.type; //  用户类型
    // console.log("start: "+start );
    // console.log("limit: "+limit );
    // console.log("type: "+type );
    var sql="";
    var pic="";
    if(start==undefined){
        sql=$sql.searchdynamic; //没有查询到从第几条数据开始就显示所有的
    }
    else {
            sql = $sql.searchdynamic+" LIMIT " + start + "," + limit;           //2分页
    }
    console.log(sql );
    //根据不同的条件进行查询
    pool.getConnection(function(err, connection) {
        connection.query($sql.showdynamicPic, function (err, result) {
                if (err) {
                    console.log("err:" + err.message);
                    res.json({code: 500});
                }
                pic = result;
            }
        );
        connection.query(sql, function (err, result) {
            if (err) {
                console.log("err:" + err.message);
                res.json({code: 500});
            }
            else {
                //输出 获取到的结果
                var arr = JSON.stringify(result);
                console.log("result：" + arr);
                for (var i = 0; i < result.length; i++) {
                    result[i].senchapic = new Array();
                    for (var j = 0; j < pic.length; j++) {
                        if (pic[j].dynamicId == result[i].dynamicId) {
                            result[i].senchapic.push(pic[j].dynamicPic)
                        }
                    }
                }
                //查询总共有多少条动态 ，想页面发送 length 结果
                connection.query($sql.searchdynamic, function (err2, result2) {
                    if (err2) {
                        console.log("err:" + err.message);
                        res.json({code: 500});
                    }
                    else {
                        console.log(result2.length)
                        res.send({success: true, alldynamic:result, dunamicCount: result2.length,});
                    }
                    connection.release();
                });
            }
        }
        );

    });
};
//================================分页显示个人动态============================================
var showdynamic = function (req, res, next) {
    var _userPhone = req.query.userPhone;
    var start = req.query.start; //从第几条数据开始的
    var limit = req.query.limit;// 每页显示几条数据
    console.log(" _userPhone: "+ _userPhone );
    console.log("start: "+start );
    console.log("limit: "+limit );
    var sql="";
    var pic="";
    if(start==undefined){
        sql=$sql.searchdynamicByUserPhone2; //没有查询到从第几条数据开始就显示所有的
    }
    else {
        sql = $sql.searchdynamicByUserPhone2 + " LIMIT " + start + "," + limit;
    }
    console.log(sql );
    pool.getConnection(function(err, connection) {
        connection.query($sql.showdynamicPic, function (err, result) {
                if (err) {
                    console.log("err:" + err.message);
                    res.json({code: 500});
                }
                pic = result;
                console.log("pic.length:"+pic.length)
            }
        );
        connection.query(sql,_userPhone, function (err, result) {
            if (err) {
                console.log("err:" + err.message);
                res.json({code: 500});
            }
            else {
                //输出 获取到的结果
                var arr = JSON.stringify(result);
                console.log("result0000：" + arr);
                //输出 获取到的结果
                var arr = JSON.stringify(result);
                console.log("result：" + arr);
                for (var i = 0; i < result.length; i++) {
                    result[i].senchapic = new Array();
                    for (var j = 0; j < pic.length; j++) {
                        if (pic[j].dynamicId == result[i].dynamicId) {
                            result[i].senchapic.push(pic[j].dynamicPic)
                        }
                    }
                }
                //查询总共有多少条动态 ，想页面发送 length 结果
                connection.query($sql.searchdynamicByUserPhone2,_userPhone,function (err2, result2) {
                    if (err2) {
                        console.log("failure: false");
                        res.json({"failure": false});
                    }
                    else {
                        console.log(result2.length)
                        res.send({success: true, mydynamic1:result, dunamicCount: result2.length,});
                    }
                    connection.release();
                });
            }
        });
    });
};

//===========================删除个人动态================================
var deletedynamic=function (req, res, next) {
    var _dynamicId=req.query.dynamicId;
    console.log("_dynamicId:"+_dynamicId)
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log("错误："+err.message);
            res.send({"failure": false});
        }
        else {
            connection.query($sql.querydelete22,_dynamicId,function (err, result) {
                if (err) {
                    console.log("错误："+err.message);
                    res.send({"failure": false});
                }
                console.log("删除成功")
                res.send({"success": true});
                connection.release();
            })
        }
    })
}
//==================================上传评论================================
var comment = function (req, res,next) {
    var _dynamicId=req.query.dynamicId;
    var _userPhone=req.query.userPhone;
    var _commentText=req.query.commentText;
    // var param = req.body;
    // console.log(_dynamicId)
    // console.log(_userPhone)
    // console.log(_commentText)
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            // if (param.text2.length == 0) {
            //     console.log("发布失败！");
            //     console.log("ggggg"+param.text2);
            //     return;
            // }
            var nowDate = new Date();
            var time1 = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
            console.log(time1);
            connection.query($sql.insertcomment2, [time1,_commentText,_userPhone,_dynamicId], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.send({"failure": false});
                    return;
                }
                console.log('插入成功！');
                // console.log(JSON.stringify(result));
                res.send({"success": true});
                connection.release();
            });
        }
    });
}
//==================================查看评论==================================
var searchcomment= function (req, res, next) {
    // var dynamicId = req.query.dynamicId;
    var dynamicId=req.query.dynamicId;;
    console.log("dynamicId:" + dynamicId);
    pool.getConnection(function (err, connection) {
        connection.query($sql.searchcomment, dynamicId, function (err,comment) {
            console.log("查看评论 ");
            if (err) {
                console.log(err.message);
                console.log("failure: false");
            }
            res.send({success: true,comment: comment});
            // console.log(JSON.stringify(comment));
            connection.release();
        });
    });
}
//===========================新闻中心===============================
var news = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.json({"success": false});
        }
        else {
            connection.query($sql.searchnews, function (err, result) {
                console.log("新闻中心查询");
                if (err) {
                    console.log("failure:"+ false);
                    res.json({"failure": false});
                }
                else {
                    res.send({success: true, news: result});
                }
                connection.release();
            });
        }
    });
}
//========================育儿常识=========================================
var common = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.json({"success": false});
        }
        else {
            connection.query($sql.searchcommon, function (err, result) {
                console.log("查询育儿常识");
                if (err) {
                    console.log("success: false");
                    res.json({"success": false});
                }
                else {
                    res.send({success: true, common: result});
                }
                connection.release();
            });
        }
    });
}
//========================育儿常识详情=====================================
var commondetails=function (req, res, next) {
    var _commonId = req.query.commonId;
    console.log("_commonId:"+_commonId);
    pool.getConnection(function (err,connection) {
        if (err){
            console.log(err.message);
            res.send({"success": false});
        }
        else {
            connection.query($sql.searchcommonDetail,_commonId,function (err, result) {
                if (err){
                    console.log("err:"+err.message);
                    res.send({"success": false});
                }
                // console.log(JSON.stringify(result));
                res.send({"success": true,commondetails:result});
                connection.release();
            });
        }
    });
}
//========================新闻中心详情=====================================
var newsdetails=function (req, res, next) {
    var _newsId = req.query.newsId;
    console.log("_newsId:"+_newsId);
    pool.getConnection(function (err,connection) {
        if (err){
            console.log(err.message);
            res.send({"success": false});
        }
        else {
            connection.query($sql.searchnewsDetail,_newsId,function (err, result) {
                if (err){
                    console.log("err:"+err.message);
                    res.send({"success": false});
                }
                // console.log(JSON.stringify(result));
                res.send({"success": true,newsdetails:result});
                connection.release();
            });
        }
    });
}


exports.login = login;   //登录
exports.register = register; //注册
exports.forgetPwd = forgetPwd; //修改密码
exports.changeinformation = changeinformation; //修改个人信息
exports.dynamicUpload = dynamicUpload;//上传动态
exports.queryalldynamic = queryalldynamic;//分页处理显示所有人动态
exports.showdynamic = showdynamic;  //删除个人动态
exports.deletedynamic = deletedynamic;  //删除个人动态
exports.comment = comment;  //上传评论
exports.searchcomment = searchcomment;  //查看评论
exports.showuserinfo = showuserinfo;  //查看个人信息
exports.changeinformation = changeinformation;  //修改个人信息
exports.changeinformationPic = changeinformationPic;  //修改个人信息
exports.showdynamicDetail = showdynamicDetail;
exports.news = news;  //查询新闻
exports.newsdetails = newsdetails;  //查询新闻
exports.common = common;  //查询育儿常识
exports.commondetails = commondetails;  //查询育儿常识详情


