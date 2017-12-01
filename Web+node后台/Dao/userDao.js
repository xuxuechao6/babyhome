/**
 * Created by Administrator on 2016/9/18.
 */
var $conf = require("./../conf/db");
var $sql = require('./userSqlMapping');
var mysql = require('mysql');
var path = require('path');
var uuid = require('node-uuid');
var url = require('url');
var fs = require('fs');
var pool = mysql.createPool($conf);
var crypto = require('crypto');

//===================登陆验证=======================================
var login = function (req, res, next) {
    var param = req.body;
    console.log(param)
    //=================================================
    var hash = crypto.createHash("md5");
    hash.update(param.userPassword);          //直接对"123456"字符串加密
    var encode = hash.digest('hex');
    console.log(encode)
    //===================================================
    console.log("得到输入的账号和密码:" + param.userPhone + encode);
    console.log(param.userPhone);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("error.ejs");
        }
        else {
            connection.query($sql.searchUserByPhone, [param.userPhone, encode], function (err, result) {
                if (err) {
                    res.render("error.ejs");
                    console.log("错误：" + err.message);
                    //退出query方法，后面的代码不执行了；
                }
                else {
                    console.log(JSON.stringify(result));
                    if (result.length == 0) {
                        console.log("未查询到结果");
                        res.render("login.ejs", {Msg: "帐号或密码错误！"});
                    }
                    else {
                        console.log("验证手机号密码成功跳转到主页");
                        req.session.userPhone = param.userPhone;
                        connection.query($sql.query, [req.session.userPhone], function (err, result) {
                            if (err) {
                                console.log(err.message);
                                res.render("error.ejs");
                            }
                            else {
                                console.log("userPhone" + req.session.userPhone);
                                user = JSON.stringify(result);
                                console.log(user);
                                pic = JSON.parse(user);
                                console.log(pic[0].userPic);
                                req.session.userNickName = pic[0].userNickName
                                console.log(req.session.userNickName)
                                res.render("index.ejs", {person: result});
                            }
                        });
                    }
                    console.log("断开数据库连接");
                    connection.release();
                }
            });
        }
    });
}

//=======================注销用户===================================
var logout = function (req, res, next) {
    req.session.userPhone = null;
    req.session.userPassword = null;
    res.render("index.ejs");
}

//======================分页处理显示所有人动态======================================
var showalldynamic = function (req, res, next) {
    var page = url.parse(req.url, true).query.page;
    if (undefined == page) {
        page = 1;
    }
    console.log("当前页码page:" + page);  //得到页码
    //=======================================================
    var startRow = (page - 1) * 5;    //得到每页开始行
    console.log("每页开始行startRow：" + startRow);

    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.render("error.ejs");
        }
        else {
            //查询总共有多少条数据
            connection.query($sql.getTotalCount, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("查询数据数目条结果：" + JSON.stringify(result));
                var totalCount = result;
                var _userPhone = req.session.userPhone;
                console.log("_userPhone:" + _userPhone);
                connection.query($sql.query, _userPhone, function (err0, result0) {
                    console.log("查询个人信息");
                    if (err0) {
                        console.log("错误：" + err0.message);
                        res.render("error.ejs");
                        return;
                    }
                    console.log(JSON.stringify(result0));
                    //查看所有动态

                    var str = JSON.stringify(result);
                    var obj2 = JSON.parse(str);
                    console.log(obj2[0].TotalCount)
                    if (obj2[0].TotalCount == 0) {
                        var result1 = [{
                            "dynamicId": 0,
                            "dynamicContent": "您还没有发布过动态，请点击上边的输入框进行发布动态吧！",
                            "dynamicDateTime": "2016-10-10 20:20:20",
                            "dynamicLikeNum": 98,
                            "userPhone": "15138801111",
                            "dynamicPics": "627f338b-491e-4d63-87e1-cb0bf9113128.jpg",
                            "userId": 10,
                            "userType": "家长",
                            "userNickName": "admin",
                            "userPassword": "e10adc3949ba59abbe56e057f20f883e",
                            "userSex": "男",
                            "userDate": "2016-10-26",
                            "userPic": "04d00af5-d90f-4408-bb65-0273fd8c0563.jpg"
                        }]
                        res.render("myDynamic.ejs", {
                            person: result1,
                            users: [result1],
                            page: page,
                            totalCount: totalCount,
                            pageSize: $conf.pageSize
                        });

                    }
                    else {
                        connection.query($sql.showDynamicByPage, [startRow, 5], function (err, result) {
                            console.log("查询所有动态");
                            if (err) {
                                res.render("error.ejs");
                                console.log("err:" + err.message);
                                return;
                            }
                            var arr = JSON.stringify(result);
                            console.log("result：" + arr);
                            //console.log("图片途径:"+arr[0].PICS)
                            res.render("Dynamic.ejs", {
                                person: result0,
                                users: [result],
                                comment: [result1],
                                page: page,
                                totalCount: totalCount,
                                pageSize: $conf.pageSize,
                            });
                            connection.release();
                        });
                    }
                });
            });
        }
    });
};

//======================分页处理显示老师动态======================================
var showteacherDynamic = function (req, res, next) {
    var page = url.parse(req.url, true).query.page;
    if (undefined == page) {
        page = 1;
    }
    console.log("当前页码page:" + page);  //得到页码
    //=======================================================
    var startRow = (page - 1) * 5;    //得到每页开始行
    console.log("每页开始行startRow：" + startRow);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.render("error.ejs");
        }
        else {
            var _userPhone1 = req.session.userPhone;
            console.log("_userPhone1:" + _userPhone1);
            //查询总共有多少条数据
            connection.query($sql.getTotalCount3, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("查询数据数目条结果：" + JSON.stringify(result));
                var totalCount = result;
                var str = JSON.stringify(result);
                var obj2 = JSON.parse(str);
                console.log(obj2[0].TotalCount)
                if (obj2[0].TotalCount == 0) {
                    var result1 = [{
                        "dynamicId": 0,
                        "dynamicContent": "您还没有发布过动态，请点击上边的输入框进行发布动态吧！",
                        "dynamicDateTime": "2016-10-10 20:20:20",
                        "dynamicLikeNum": 98,
                        "userPhone": "15138801111",
                        "dynamicPics": "627f338b-491e-4d63-87e1-cb0bf9113128.jpg",
                        "userId": 10,
                        "userType": "家长",
                        "userNickName": "admin",
                        "userPassword": "e10adc3949ba59abbe56e057f20f883e",
                        "userSex": "男",
                        "userDate": "2016-10-26",
                        "userPic": "04d00af5-d90f-4408-bb65-0273fd8c0563.jpg"
                    }]
                    res.render("myDynamic.ejs", {
                        person: result1,
                        users: [result1],
                        page: page,
                        totalCount: totalCount,
                        pageSize: $conf.pageSize
                    });

                }
                else {

                    connection.query($sql.searchdynamicBytype, [startRow, 5], function (err, result) {
                        console.log("查询老师信息");
                        if (err) {
                            console.log("错误：" + err.message);
                            res.render("error.ejs");
                            return;
                        }
                        var arr = JSON.stringify(result);
                        console.log(arr);
                        console.log("result：" + arr);
                        var _userPhone = req.session.userPhone;
                        console.log("_userPhone:" + _userPhone);
                        connection.query($sql.query, _userPhone, function (err0, result0) {
                            console.log("查询个人信息");
                            if (err0) {
                                console.log("错误：" + err0.message);
                                res.render("error.ejs");
                                return;
                            }
                            console.log(JSON.stringify(result0));
                            res.render("teacherDynamic.ejs", {
                                person: result0,
                                users: [result],
                                page: page,
                                totalCount: totalCount,
                                pageSize: $conf.pageSize
                            });
                            connection.release();
                        });
                    })
                }
            });
        }
    });
};
//======================分页处理显示个人动态======================================
var showmyDynamic = function (req, res, next) {
    var page = url.parse(req.url, true).query.page;
    if (undefined == page) {
        page = 1;
    }
    console.log("当前页码page:" + page);  //得到页码
    //=======================================================
    var startRow = (page - 1) * 5;    //得到每页开始行
    console.log("每页开始行startRow：" + startRow);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.render("error.ejs");
            return;
        }
        else {
            var _userPhone1 = req.session.userPhone;
            console.log("_userPhone1:" + _userPhone1);
            //查询总共有多少条数据
            connection.query($sql.getTotalCount2, _userPhone1, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("查询数据数目条结果：" + JSON.stringify(result));
                var totalCount = result;

                var str = JSON.stringify(result);
                var obj2 = JSON.parse(str);
                console.log(obj2[0].TotalCount)
                if (obj2[0].TotalCount == 0) {
                    var result1 = [{
                        "dynamicId": 0,
                        "dynamicContent": "您还没有发布过动态，请点击上边的输入框进行发布动态吧！",
                        "dynamicDateTime": "2016-10-10 20:20:20",
                        "dynamicLikeNum": 98,
                        "userPhone": "15138801111",
                        "dynamicPics": "627f338b-491e-4d63-87e1-cb0bf9113128.jpg",
                        "userId": 10,
                        "userType": "家长",
                        "userNickName": "admin",
                        "userPassword": "e10adc3949ba59abbe56e057f20f883e",
                        "userSex": "男",
                        "userDate": "2016-10-26",
                        "userPic": "04d00af5-d90f-4408-bb65-0273fd8c0563.jpg"
                    }]
                    res.render("myDynamic.ejs", {
                        person: result1,
                        users: [result1],
                        page: page,
                        totalCount: totalCount,
                        pageSize: $conf.pageSize
                    });

                }
                else {
                    connection.query($sql.searchdynamicByUserPhone, [_userPhone1, startRow, 5], function (err, result) {
                        console.log("查询个人信息");
                        if (err) {
                            console.log("错误：" + err.message);
                            res.render("error.ejs");
                            return;
                        }

                        var arr = JSON.stringify(result);
                        console.log("result:" + result)
                        console.log(arr);
                        console.log("result：" + arr);
                        res.render("myDynamic.ejs", {
                            person: result,
                            users: [result],
                            page: page,
                            totalCount: totalCount,
                            pageSize: $conf.pageSize
                        });
                        connection.release();
                    });
                }
            })
        }
        ;
    });
};

//======================分页处理显示个人内容======================================
var showuserinformation = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.render("error.ejs");
        }
        else {
            var _userPhone1 = req.session.userPhone;
            console.log("_userPhone1:" + _userPhone1);
            //查询总共有多少条数据
            connection.query($sql.queryuserByuserPhone, [_userPhone1], function (err, result) {
                console.log("查询个人信息");
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;
                }
                console.log(result)
                res.render("userInformation.ejs", {person: result});
                connection.release();
            });
        }
    })
};

//========================修改个人信息===================================
var changeinformation = function (req, res) {
    var param = req.body;
    var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
    var v = uuid.v4();
    var suffix = filename.substr(filename.lastIndexOf("."));
    var _myFileName = v + suffix;
    console.log("_myFileName:" + _myFileName);
    var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
    console.log("targetPath:" + targetPath);
    console.log("req.files.files.path:" + req.files.files.length);
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
    console.log("Pic:" + filename);
    pool.getConnection(function (err, connection) {
        var userPhone = req.session.userPhone;
        connection.query($sql.update, [_myFileName, param.nickname, param.sex, param.birthday, userPhone], function (err, result) {
            if (err) {
                console.log(err.message);
                res.render("error.ejs");
                res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
            }
            else {
                if (result.affectedRows > 0) {
                    res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                } else {
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    res.render('fail', {
                        result: result
                    });
                }
            }
            connection.release();
        });
    });
};
//===========================删除个人动态=============================================
var deletedynamic = function (req, res, next) {
    var d = url.parse(req.url, true).query.dynamicId;
    console.log(d)
    if (req.session.userPhone == null) {
        res.render("login.ejs", {Msg: ""})
    }
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("错误：" + err.message);
            res.render("error.ejs");
        }
        else {
            connection.query($sql.querydelete, [d], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                }

                // console.log("删除成功")
            })
            connection.query($sql.querydelete1, [d], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;
                }
                console.log("删除成功")
                showmyDynamic(req, res, next);
            })
        }
    })
}
//==========================上传动态===================================
var dynamicUpload = function (req, res, next) {
    var sqlUserPic = "insert into dynamicPic(dynamicId,dynamicPic) values";
    var param = req.body;
    if (req.files.files.length == undefined) {
        var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
        /*-------------filename------------------*/
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
            console.log(req.files);
            console.log("req.files.files.originalFilename:" + req.files.files[i].originalFilename);
            console.log("req.files.files.path:" + req.files.files[i].path);
            var fileName = req.files.files[i].originalFilename || path.basename(req.files.files[i].path);
            console.log("filename:" + fileName);
            console.log("dirname:" + path.dirname(__filename));
            console.log("  path.resolve(__dirname, '../'):" + path.resolve(__dirname, '../'));
            //copy file to a public directory
            /*-------------filename------------------*/
            var v = uuid.v4();
            var suffix = fileName.substr(fileName.lastIndexOf("."));
            var _myFileName = v + suffix;
            console.log("_myFileName:" + _myFileName);
            /*-------------filename------------------*/
            var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
            console.log("targetPath:" + targetPath);
            console.log("req.files.files.path:" + req.files.files[i].length);
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
            res.render("error.ejs");
        }
        else {
            if (param.text1.length == 0) {
                console.log("发布失败！");
                console.log("ggggg" + param.text1);
                return;
            }
            if (req.session.userPhone == null || req.session.userPhone == undefined) {
                res.render("login.ejs", {Msg: ""})
                return;
            }
            // var dateDom = new Date();
            // //获取本地时间，年月日时分
            // var year = dateDom.getFullYear();
            // var month = dateDom.getMonth()+1;
            // var day = dateDom.getDate();
            // var hour = dateDom.getHours();
            // var min = dateDom.getMinutes();
            // var time=year+"-"+ month+"-"+ day+"    "+hour+":"+min
            var nowDate = new Date();
            var time = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
            console.log(time);
            connection.query($sql.addDynamic, [time, param.text1, req.session.userPhone], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;
                }
                console.log('插入成功！');
                console.log(result);
            });
            connection.query(sqlUserPic, function (err, result) {
                if (err) {
                    console.log(err.message);
                    res.render("error.ejs");
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                }
                else {
                    // 使用页面进行跳转提示
                    if (result.affectedRows > 0) {
                        res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    } else {
                        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    }
                    connection.release();
                }
            });
        }
    });
};
//============================修改密码=================================
var forgetpwd = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("error.ejs");
        }
        else {
            var param = req.body;
            console.log(param.userPhone)
            req.session.userPhone = param.userPhone;
            _userPhone = param.userPhone;
            console.log("_userPhone: " + _userPhone);
            console.log("req.session.userPhone: " + req.session.userPhone);
            connection.query($sql.queryuserByuserPhone, [_userPhone], function (err, result) {
                if (err) {
                    res.render("forgetpwd1.ejs", {Msg: "该手机号未注册"});
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                else {
                    console.log(JSON.stringify(result));
                    if (result.length == 0) {
                        console.log("未查询到结果");
                        res.render("forgetpwd1.ejs", {Msg: "该手机号未注册"});
                    }
                    else {
                        console.log("验证手机号成功");
                        res.render("forgetpwd2.ejs", [_userPhone]);
                    }
                    connection.release();
                }
            });
        }
    });
}
//==============================================
var forgetpwd1 = function (req, res, next) {
    var _userPhone = req.session.userPhone;
    res.render("forgetpwd3.ejs", {_userPhone: _userPhone, Msg: ""});
}
//=================================================
var forgetpwd2 = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("error.ejs");
        }
        else {
            var param = req.body;
            console.log(param.userPhone);
            console.log(param.userPassword);
            _userPhone = param.userPhone;
            //=======================密码加密=======================
            var hash = crypto.createHash("md5");
            hash.update(param.userPassword);          //直接对"123456"字符串加密
            var encode = hash.digest('hex');
            console.log(encode)
            //===============================================================
            connection.query($sql.updatePwd, [encode, _userPhone], function (err, result) {
                console.log(result)
                if (err) {
                    console.log(err.message);
                    res.render("forgetpwd3.ejs", {Msg: "新密码不能与之前的密码相同"});
                }
                else {
                    if (result.affectedRows > 0) {
                        console.log(result.affectedRows)
                        res.render("forgetpwd4.ejs")
                    } else {
                        res.json(result);
                        res.render("forgetpwd3.ejs", {Msg: "新密码不能与之前的密码相同"});
                    }
                }

            });
        }
        ;
    });
};
//==================================评论页面================================
var searchcomment = function (req, res, next) {
    var _dynamicId = req.body.dynamicId;
    console.log("_dynamicId:" + _dynamicId);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.render("error.ejs");
        }
        else {
            //显示本条动态部分
            connection.query($sql.userDynamic, _dynamicId, function (err, result0) {
                if (err) {
                    console.log("err:" + err.message);
                    res.render("error.ejs");
                }
                else {
                    //显示本条动态的点赞情况
                    connection.query("select * from praise where dynamicId=? and userPhone=?", [_dynamicId, req.session.userPhone], function (err, result1) {
                        if (err) {
                            console.log("err:" + err.message);
                            res.render("error.ejs");
                        }
                        else {
                            console.log("result1.length:" + result1.length)
                            if (result1.length == 0) {
                                var praiseImg = 'off';
                                console.log("praiseImg1:" + praiseImg)
                            }
                            else {
                                var praiseImg = 'on'
                                console.log("praiseImg2:" + praiseImg)
                            }
                            console.log("praiseImg" + praiseImg)
                            connection.query("select * from praise where dynamicId=?", [_dynamicId], function (err, result2) {
                                if (err) {
                                    console.log("err:" + err.message);
                                    res.render("error.ejs");
                                }
                                else {
                                    console.log(result2.length)
                                    //显示本条动态的评论内容部分
                                    connection.query($sql.searchcomment, _dynamicId, function (err, result) {
                                        if (err) {
                                            console.log("err:" + err.message);
                                            res.render("error.ejs");
                                            return;
                                        }
                                        console.log(JSON.stringify(result));
                                        res.render("comment.ejs", {
                                            praiseNum: result2.length,
                                            praiseImg: praiseImg,
                                            _dynamicId: _dynamicId,
                                            thisDynamic: result0,
                                            comments: result
                                        });
                                        connection.release();
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
//==================================发表评论2================================
var comment = function (req, res, next) {
    var _dynamicId = req.body.dynamicId
    var param = req.body;
    console.log(_dynamicId)
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            res.render("error.ejs");
            return;
        }
        else {
            if (param.xx.length == 0) {
                console.log("发布失败！");
                console.log("ggggg" + param.xx);
                res.render("error.ejs");
                return;
            }
            var nowDate = new Date();
            var time1 = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
            console.log(time1);
            connection.query($sql.insertcomment, [time1, param.xx, req.session.userPhone, _dynamicId], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;
                }
                console.log('插入成功！');
                console.log(result);
                searchcomment(req, res, next);
            });
        }
        connection.release();
    });
}
//===========================点赞================================
var praise = function (req, res, next) {
    var _dynamicId = req.body.dynamicId;
    console.log(_dynamicId);
    console.log(req.session.userPhone);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("error.ejs");
        }
        else {
            connection.query("select * from praise where dynamicId=? and userPhone=?", [_dynamicId, req.session.userPhone], function (err, result) {
                if (err) {
                    console.log("err:" + err.message)
                    res.render("error.ejs");
                    //退出query方法，后面的代码不执行了；
                }
                else {
                    if (result.length == 0) {
                        connection.query("insert into praise(dynamicId,userPhone) values(?,?)", [_dynamicId, req.session.userPhone], function (err, result1) {
                            if (err) {
                                console.log()
                                res.render("error.ejs");
                            }
                            else {

                                console.log(result1);
                                console.log('点赞记录成功！');
                                res.json(true);
                            }
                        });
                    }
                    else {
                        connection.query('delete FROM praise WHERE dynamicId=? AND userPhone=?', [_dynamicId, req.session.userPhone], function (err, result2) {
                            if (err) {
                                res.render("error.ejs");
                            }
                            else {
                                console.log('删除点赞记录成功！');
                                res.json(false);
                            }
                        });
                    }
                    connection.release();
                }
            });
        }
    });
};
//=================加盟合作===================
var join = function (req, res, next) {
    var param = req.body;
    pool.getConnection(function (err, connection) {
        connection.query($sql.cooperation, [param.contacts, param.mobile, param.compname, param.email, param.province, param.city], function (err, result) {
            if (err) {
                console.log("错误：" + err.message);
                res.render("error.ejs");
                return;
            }
            console.log('插入成功！');
            console.log(result);
            res.render("Cooperation.html");
        });
        connection.release();
    });

};

//==================刷新评论============================
exports.login = login;
exports.dynamicUpload = dynamicUpload;
exports.login = login;
exports.logout = logout;
exports.forgetpwd = forgetpwd;
exports.forgetpwd1 = forgetpwd1;
exports.forgetpwd2 = forgetpwd2;
exports.showalldynamic = showalldynamic;
exports.showmyDynamic = showmyDynamic;
exports.showteacherDynamic = showteacherDynamic;
exports.showuserinformation = showuserinformation;
exports.deletedynamic = deletedynamic;
exports.changeinformation = changeinformation;
exports.comment = comment;
exports.searchcomment = searchcomment;
exports.join = join;
exports.praise = praise;
