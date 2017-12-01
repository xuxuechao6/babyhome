
function sessionFilter(req,res,next,view,callback) {
    console.log("req.session.userId:"+req.session.userId);
    if(req.session.userId==undefined){
        req.session.url='/'+view;          //可以用：记录你的上一个网址router
        res.redirect('/p/users/login2');  //跳转到登录界面
    }else {
        callback(req, res, next);
    }
}
exports.sessionFilter=sessionFilter;