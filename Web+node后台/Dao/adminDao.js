var $conf = require("./../conf/db");
var $sql = require('./adminSqlMapping');
var mysql = require('mysql');
var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var url = require('url');
var pool = mysql.createPool($conf);
var uuid = require('node-uuid');

//=============管理员注册===================================
var addAdmin = function (req, res, next) {
    var param = req.body;
    console.log(param);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("404Error.ejs");
        }
        console.log("2222222")

        connection.query($sql.insertAdmin, [param.adminPhone, param.adminName, param.adminPassword,], function (err, result) {
            if (err) {
                console.log(err.message);
                res.render("backstage/adminregister.ejs",{Msg:"用户名已存在"});
            }
            else {
                console.log(result);
                res.render("backstage/adminregister.ejs",{Msg:"注册成功，点击下边按钮跳转登陆页面"});
            }
            connection.release();
        });
    });
};
//=============用户注册===============================
var addUser = function (req, res) {
    var param = req.body;
    //================upload==========================
    var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
    /*-------------filename------------------*/
    var v = uuid.v4();
    var suffix = filename.substr(filename.lastIndexOf("."));
    var _myFileName = v + suffix;

    console.log("_myFileName:" + _myFileName);
    /*-------------filename------------------*/
    var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
    console.log("targetPath:" + targetPath);
    //copy file
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
    if (param.userPhone == null || param.userPassword == null) {
        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
        return;
    }
    /*-------------密码加密------------------*/
    var hash = crypto.createHash("md5");
    hash.update(param.userPassword);          //直接对"123456"字符串加密
    var encode = hash.digest('hex');
    console.log(encode)
    //=======================连接数据库插入内容==========================================
    pool.getConnection(function (err, connection) {
        connection.query($sql.insertUser, [param.userPhone, encode, param.userNickName, param.userSex, param.userDate, param.userType, _myFileName], function (err, result) {
            if (err) {
                console.log(err.message),
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                res.render("backstage/usersregister.ejs");
            }
            else {
                if (result.affectedRows > 0) {
                    console.log("输出结果")
                    res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});

                } else {
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    res.render('fail', {result: result});
                }
            }
        });
    });
};
//=============添加新闻===============================
var addnews = function (req, res) {
    var param = req.body;
    console.log(param);
    //================upload==========================
    var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
    /*-------------filename------------------*/
    var v = uuid.v4();
    var suffix = filename.substr(filename.lastIndexOf("."));
    var _myFileName = v + suffix;
    console.log("_myFileName:" + _myFileName);
    /*-------------filename------------------*/
    var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
    console.log("targetPath:" + targetPath);
    //copy file
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));

    //=======================连接数据库插入内容==========================================
    var nowDate = new Date();
    var time = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
    console.log(time);
    pool.getConnection(function (err, connection) {
        connection.query($sql.insertnews, [time, param.newsTitle, param.newsContent, _myFileName, req.session.adminPhone], function (err, result) {
            if (err) {
                console.log(err.message)
                res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                res.render("backstage/news.ejs");
            }
            else {
                console.log(1111)
                if (result.affectedRows > 0) {
                    console.log("输出结果")
                    res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});

                }
                else {
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    res.render('fail', {result: result});
                }
            }
        });
    });
};
//=============添加育儿详情===============================
var addcommon = function (req, res) {
    var param = req.body;
    console.log(param)
    pool.getConnection(function (err, connection) {
        console.log(111)
        connection.query($sql.insertcommon, [param.commonTitle, param.commonContent, req.session.adminPhone], function (err, result) {
            if (err) {
                console.log(err.message)
                res.render("backstage/commonpublish.ejs");
            }
            else {
                console.log(1111)
                console.log(result);
                res.render("backstage/commonpublish.ejs", {Msg: "发布成功！"});
            }
            connection.release();
        });
    });
};

//=============登陆验证========================
var login = function (req, res, next) {
    var param = req.body;
    // console.log(param.adminPhone);
    // console.log(param.adminPassword);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("404Error.ejs");
        }
        else {
            connection.query($sql.queryByPhoneAndPwd, [param.adminPhone, param.adminPassword], function (err, result) {
                if (err) {
                    res.render("404Error.ejs");
                    console.log("错误：" + err.message);
                    return;
                }
                else {
                    console.log(JSON.stringify(result));
                    if (result.length == 0) {
                        res.render("backstage/login.ejs", {Msg: "帐号或密码错误！"});
                    }
                    else {
                        connection.query($sql.queryAlladmin, function (err, result) {
                            if (err) {
                                console.log("错误：" + err.message);
                                return;
                            }
                            console.log(JSON.stringify(result));
                            req.session.adminPhone = result[0].adminPhone;
                            req.session.adminName = result[0].adminName;
                            req.session.adminId = result[0].adminId;
                            console.log(001)
                            console.log(req.session.adminPhone)
                            console.log(req.session.adminName)
                            res.render("backstage/index.ejs", {admin: result});
                        })
                    }
                    connection.release();
                }
            });
        }
    });
}
//注销
var logout = function (req, res, next) {
    req.session.adminPhone = null;
    req.session.adminPassword = null;
    res.render("backstage/login.ejs", {Msg: " "});
}

//===================修改用户信息界面==========================================
var updateUserinfo = function (req, res, next) {
    var d = url.parse(req.url, true).query.userPhone;
    console.log(d)
    /* var _userPhone=req.body.userPhone;
     console.log(_userPhone);*/
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            connection.query($sql.queryUserByPhone, d, function (err, result) {
                if (err) {
                    res.render("backstage/404Error.ejs");
                    console.log("错误：" + err.message);
                    return;
                }
                else {
                    console.log(JSON.stringify(result));
                    res.render("backstage/updateUserinfo.ejs", {users: result});
                    connection.release();
                }
            });
        }
    });
}
//=================修改用户信息跳转================================
var updateUser = function (req, res, next) {
    var param = req.body;
    console.log(param)
    if (param.userPhone == null || param.userPassword == null) {
        return
    }
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            var userPhone = param.userPhone;
            console.log(userPhone)
            connection.query($sql.updateUserInfo, [param.userType, param.userNickName, param.userSex, param.userPassword, param.userDate, userPhone], function (err, result) {
                console.log(result);
                if (err) {
                    console.log(err.message);
                    res.render('fail', {result: result});
                }
                else {
                    console.log(result);
                    pool.getConnection(function (err, connection) {
                        if (err) {
                            console.log(err.message);
                            return;
                        }
                        else {
                            connection.query($sql.queryAlluser, function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;
                                }
                                console.log(JSON.stringify(result));
                                res.render("backstage/userinfo.ejs", {users: result});
                                connection.release();
                            });
                        }
                    });
                }
                connection.release();
            });
        }
    });
}
//===================修改用户信息界面==========================================
var updateAdmininfo = function (req, res, next) {
    var d = url.parse(req.url, true).query.adminPhone;
    console.log(d)
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            connection.query($sql.queryAdminByPhone, d, function (err, result) {
                if (err) {
                    res.render("backstage/404Error.ejs");
                    console.log("错误：" + err.message);
                    return;
                }
                else {
                    console.log(JSON.stringify(result));
                    res.render("backstage/updateAdmininfo.ejs", {admin: result});
                    connection.release();
                }
            });
        }
    });
}
//=================修改用户信息跳转================================
var updateAdmin = function (req, res, next) {
    var param = req.body;
    console.log(param);
    var adminPhone = param.adminPhone;
    console.log(adminPhone)
    var d = req.session.adminId;
    console.log(d)
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            connection.query($sql.updateAdminInfo, [adminPhone, param.adminName, , param.adminPassword, d], function (err, result) {
                console.log(result);
                if (err) {
                    console.log(err.message);
                    res.render('fail', {admin: result});
                }
                else {
                    console.log(result);
                    pool.getConnection(function (err, connection) {
                        if (err) {
                            console.log(err.message);
                            return;
                        }
                        else {
                            connection.query($sql.queryadmin, adminPhone, function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;
                                }
                                console.log(JSON.stringify(result));
                                res.render("backstage/admininfo.ejs", {admin: result});
                                connection.release();
                            });
                        }
                    });
                }
                connection.release();
            });
        }
    });
}

//删除
/***************************删除用户信息*******************/
var deleteUserinfo = function (req, res, next) {
    var d = url.parse(req.url, true).query.userPhone;
    console.log(d)
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            console.log(111);
            connection.query($sql.deleteUserinfo, [d], function (err, result) {
                console.log(result);
                console.log(22);
                if (err) {

                    console.log(err.message);
                    res.render('fail', {result: result});
                }
                else {
                    console.log(result);
                    pool.getConnection(function (err, connection) {
                        if (err) {
                            console.log(err.message);
                            return;
                        }
                        else {
                            connection.query($sql.queryAlluser, function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;
                                }
                                console.log(JSON.stringify(result));
                                res.render("backstage/userinfo.ejs", {users: result});
                                connection.release();
                            });
                        }
                    });
                }
                connection.release();
            });
        }
    });
}
/***************************删除用户动态*******************/
var deleteuserdynamic = function (req, res, next) {
    var d = url.parse(req.url, true).query.dynamicId;
    console.log(d)
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            console.log(111);
            connection.query($sql.deletedynamic, [d], function (err, result) {
                console.log(result);
                console.log(22);
                if (err) {
                    console.log(err.message);
                    res.render('fail', {result: result});
                }
                else {
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
                            return;
                        }
                        else {
                            //查询总共有多少条数据
                            connection.query($sql.getTotalCount, function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;  //退出query方法，后面的代码不执行了；
                                }
                                console.log("查询数据数目条结果：" + JSON.stringify(result));
                                var totalCount = result;
                                //查看所有动态
                                connection.query($sql.showDynamicByPage, [startRow, 5], function (err, result) {
                                    console.log("查询所有动态");
                                    if (err) {
                                        console.log("err:" + err.message);
                                        return;
                                    }
                                    var arr = JSON.stringify(result);
                                    console.log(arr);
                                    console.log("result：" + arr);
                                    var arr = JSON.stringify(result);
                                    console.log(arr);
                                    console.log("result：" + arr);
                                    res.render("backstage/dynamic.ejs", {
                                        users: [result],
                                        page: page,
                                        totalCount: totalCount,
                                        pageSize: $conf.pageSize
                                    });
                                    connection.release();
                                });
                            });
                        }
                    });
                }
                connection.release();
            });
        }
    });
}
/***************************删除新闻资讯*******************/
var deletenews = function (req, res, next) {
    var d = url.parse(req.url, true).query.newsId;
    console.log(d)
    pool.getConnection(function (err, connection) {
        if (err) {
            res.render("backstage/404Error.ejs");
        }
        else {
            console.log(111);
            connection.query($sql.deletenews, [d], function (err, result) {
                console.log(result);
                console.log(22);
                if (err) {
                    console.log(err.message);
                    res.render('fail', {result: result});
                }
                else {
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
                            return;
                        }
                        else {
                            //查询总共有多少条数据
                            connection.query($sql.getTotalCountnews, function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;  //退出query方法，后面的代码不执行了；
                                }
                                console.log("查询数据数目条结果：" + JSON.stringify(result));
                                var totalCount = result;
                                //查看所有动态
                                connection.query($sql.shownewsByPage, [startRow, 5], function (err, result) {
                                    console.log("查询所有动态");
                                    if (err) {
                                        console.log("err:" + err.message);
                                        return;
                                    }
                                    var arr = JSON.stringify(result);
                                    console.log(arr);
                                    console.log("result：" + arr);
                                    var arr = JSON.stringify(result);
                                    console.log(arr);
                                    console.log("result：" + arr);
                                    res.render("backstage/news.ejs", {
                                        news: [result],
                                        page: page,
                                        totalCount: totalCount,
                                        pageSize: $conf.pageSize
                                    });
                                    connection.release();
                                });
                            });
                        }
                    });
                }
                connection.release();
            });
        }
    });
}
/***************************删除育儿常识*******************/
var deletecommon = function (req, res, next) {
    var d = url.parse(req.url, true).query.commonId;
    console.log(d)
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("错误：" + err.message);
            res.render("error.ejs");
        }
        else {
            connection.query($sql.deletecommon, [d], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    res.render("error.ejs");
                    return;
                }
                console.log("删除成功")
                showallcommon(req, res, next);
            })
        }
    })
}

//查询
var searchUser = function (req, res, next) {
    //var id = +req.query.UserId; // 为了拼凑正确的sql语句，这里要转下整数
    var _search = req.query.search;
    console.log("_search:" + _search);
    pool.getConnection(function (err, connection) {
        connection.query($sql.searchuserPhone, _search, function (err, result1) {
            if (err) {
                console.log("错误：" + err.message);
                return;
            }
            else {
                if (result1.length == 0) {
                    console.log(1)
                    connection.query($sql.searchUser, _search, function (err, result2) {
                        if (err) {
                            console.log("错误：" + err.message);
                            return;
                        }
                        else {
                            if (result2.length == 0) {
                                console.log(3)
                                var result3 = [{
                                    "userId": 01,
                                    "userType": "没有结果",
                                    "userNickName": "没有结果",
                                    "userPhone": "没有结果",
                                    "userPassword": "没有结果",
                                    "userSex": "没有结果",
                                    "userDate": "没有结果",
                                    "userPic": "7bb019ef-fa33-4b1c-95bb-04d9cd1a8341.jpg"
                                }]
                                var result = result3
                                res.send(result);
                                connection.release();
                            }
                            else {
                                console.log(2)
                                console.log("result2:" + JSON.stringify(result2));
                                var result = result2
                                res.send(result);
                                connection.release();
                            }
                        }
                    })
                }
                else {
                    console.log("result1:" + JSON.stringify(result1));
                    var result = result1
                    res.send(result);
                    connection.release();
                }

            }
        });
    });
};

//=============显示用户信息===========================
var showuserinfo = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query($sql.queryAlluser, function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;
                    }
                    console.log(JSON.stringify(result));
                    res.render("backstage/userinfo.ejs", {users: result});
                    connection.release();
                }
            );
        }
    });
};
var showadmininfo = function (req, res, next) {
    var d = req.session.adminPhone;
    console.log(req.session.adminPhone)
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query($sql.queryadmin, d, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                console.log(JSON.stringify(result));
                res.render("backstage/admininfo.ejs", {admin: result});
                connection.release();
            });
        }
    });
};
/************显示用户动态***********/
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
            return;
        }
        else {
            //查询总共有多少条数据
            connection.query($sql.getTotalCount, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("查询数据数目条结果：" + JSON.stringify(result));
                var totalCount = result;
                //查看所有动态
                connection.query($sql.showDynamicByPage, [startRow, 5], function (err, result) {
                    console.log("查询所有动态");
                    if (err) {
                        console.log("err:" + err.message);
                        return;
                    }
                    var arr = JSON.stringify(result);
                    console.log(arr);
                    console.log("result：" + arr);
                    var arr = JSON.stringify(result);
                    console.log(arr);
                    console.log("result：" + arr);
                    res.render("backstage/dynamic.ejs", {
                        users: [result],
                        page: page,
                        totalCount: totalCount,
                        pageSize: $conf.pageSize
                    });
                    connection.release();
                });
            });
        }
    });
};
/************显示新闻中心***********/
var showallnews = function (req, res, next) {
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
            return;
        }
        else {
            //查询总共有多少条数据
            console.log(1111);

            connection.query($sql.getTotalCountnews, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("查询数据数目条结果：" + JSON.stringify(result));
                var totalCount = result;
                //查看所有动态
                connection.query($sql.shownewsByPage, [startRow, 5], function (err, result) {
                    console.log("查询所有动态");
                    if (err) {
                        console.log("err:" + err.message);
                        return;
                    }
                    var arr = JSON.stringify(result);
                    console.log(arr);
                    console.log("result：" + arr);
                    var arr = JSON.stringify(result);
                    console.log(arr);
                    console.log("result：" + arr);
                    res.render("backstage/news.ejs", {
                        news: [result],
                        page: page,
                        totalCount: totalCount,
                        pageSize: $conf.pageSize
                    });
                    connection.release();
                });
            });
        }
    });
};
/************显示育儿常识***********/
var showallcommon = function (req, res, next) {
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
            return;
        }
        else {
            //查询总共有多少条数据
            console.log(1111);

            connection.query($sql.getTotalCountcommon, function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("查询数据数目条结果：" + JSON.stringify(result));
                var totalCount = result;
                //查看所有动态
                connection.query($sql.showcommonByPage, [startRow, 5], function (err, result) {
                    console.log("查询所有动态");
                    if (err) {
                        console.log("err:" + err.message);
                        return;
                    }
                    var arr = JSON.stringify(result);
                    console.log(arr);
                    console.log("result：" + arr);
                    var arr = JSON.stringify(result);
                    console.log(arr);
                    console.log("result：" + arr);
                    res.render("backstage/common.ejs", {
                        common: [result],
                        page: page,
                        totalCount: totalCount,
                        pageSize: $conf.pageSize
                    });
                    connection.release();
                });
            });
        }
    });
};

exports.showalldynamic = showalldynamic;
exports.updateUserinfo = updateUserinfo;
exports.updateUser = updateUser;
exports.updateAdmininfo = updateAdmininfo;
exports.updateAdmin = updateAdmin;
exports.addUser = addUser;
exports.showuserinfo = showuserinfo;
exports.showadmininfo = showadmininfo;
exports.login = login;
exports.addAdmin = addAdmin;
exports.deleteUserinfo = deleteUserinfo;
exports.deleteuserdynamic = deleteuserdynamic;
exports.addnews = addnews;
exports.showallnews = showallnews;
exports.deletenews = deletenews;
exports.addcommon = addcommon;
exports.showallcommon = showallcommon;
exports.deletecommon = deletecommon;
exports.logout = logout;
exports.searchUser = searchUser;
