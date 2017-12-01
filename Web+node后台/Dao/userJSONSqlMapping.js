/**
 * Created by Administrator on 2016/9/18.
 */
var user={
   /*注册用户 */ userRegister:'INSERT INTO user(userPhone , userPassword,userNickName,userSex,userDate,userType) VALUES(?,?,?,?,?,?)',
   /*用户登录 */ userLogin:'select * from user where userPhone=?and userPassword=?',
   /*修改密码 */ updatePwd1:'update user set userPassword=? where userPhone=?',
    /*添加动态 */ addDynamic1:'insert into dynamic(dynamicDateTime,dynamicContent,userPhone) VALUES(?,?,?)',
    /*分页查看动态 */ showDynamicByPage: 'SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone ORDER BY dynamicDateTime DESC  LIMIT ?,?' ,
    /*查看动态图片*/showdynamicPic:'select * from dynamicpic',
    /* 查看动态*/ searchdynamic:'SELECT * FROM USER,DYNAMIC WHERE user.`userPhone`=dynamic.`userPhone` order by dynamicDateTime desc' ,
   /* 查看个人动态*/ searchdynamicByUserPhone2:'SELECT * FROM USER,DYNAMIC WHERE user.`userPhone`=dynamic.`userPhone` AND user.`userPhone`=? order by dynamicDateTime desc',
    /* 根据类型查看动态*/ searchdynamicByUserType:'SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,' +
    /* */ 'GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON ' +
    /* */ 'A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone where A.userType=' ,

    /*评论 */ insertcomment2:'insert into comment(commentTime,commentContent,userPhone,dynamicId) values(?,?,?,?)',
   /* 查看评论*/ searchcomment:'SELECT user.*,comment.* FROM USER,COMMENT WHERE user.`userPhone`=comment.`userPhone` AND dynamicId=? order by commentTime desc' ,
    getTotalCount:'select count(*) TotalCount from dynamic',//查询总共有多少条数据
  /* 修改信息*/ updateinfo:'update user set userNickName=?,userSex=?,userDate=? where userPhone=?',
    /* 修改信息*/ updatePic:'update user set userPic=? where userPhone=?',
  /* 查看个人信息*/queryuserByuserPhone:'select * from user where userPhone=?',
    /*查看详细动态*/showdynamicDetail:'SELECT * FROM USER,DYNAMIC WHERE user.`userPhone`=dynamic.`userPhone` AND dynamicId=?', 
    /*删除动态*/querydelete22:"delete from dynamic where dynamicId=?",//删除动态内容
    /*查看新闻动态*/searchnews:'select * from news ',
    /*查看新闻详情*/searchnewsDetail:'select * from news where newsId=?',
    /*查看育儿知识*/searchcommon:'select * from common',
    /*查看育儿知识详情*/searchcommonDetail:'select * from common where commonId=?',
}
module.exports = user;