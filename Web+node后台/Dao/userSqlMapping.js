/**
 * Created by Administrator on 2016/9/18.
 */
var user={
    searchdynamic:'SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone order by dynamicDateTime desc' ,
    searchUserByPhone:'select * from user where userPhone=?and userPassword=?',
    insertUserMsg:'INSERT INTO user(userNickName,userDate,userPic) VALUES(?,?,?,?,?)',
    queryuserByuserPhone:'select * from user where userPhone=?',
    deletedynamic:'delete * from dynamic where dynamicId=?',
    searchuserId:'SELECT userId FROM USER WHERE userPhone=?',
    addDynamic:'insert into dynamic(dynamicDateTime,dynamicContent,userPhone) VALUES(?,?,?)',
    querydelete:"delete from dynamicpic where dynamicId=?",//删除动态图片
    querydelete1:"delete from dynamic where dynamicId=?",//删除动态内容
    update:'update user set userPic=?,userNickName=?,userSex=?,userDate=? where userPhone=?',
    updatePwd:'update user set userPassword=? where userPhone=?',
    query:'select * from user where userPhone=?',
    insertcomment:'insert into comment(commentTime,commentContent,userPhone,dynamicId) values(?,?,?,?)',
    searchcomment:'SELECT user.*,comment.* FROM USER,COMMENT WHERE user.`userPhone`=comment.`userPhone` AND dynamicId=?' ,
    getTotalCount:'select count(*) TotalCount from dynamic',//查询总共有多少条数据
    getTotalCount2:'select count(*) TotalCount from dynamic where userPhone=?',//查询总共有多少条数据
    searchdynamicByUserPhone:'SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,' +
    'GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON ' +
    'A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone where A.userPhone=? order by dynamicDateTime desc LIMIT ?,?' ,
    getTotalCount3:"select count(*) TotalCount from dynamic,user where user.`userPhone`=dynamic.`userPhone` AND userType='老师'",//查询总共有多少条数据
    userDynamic:"SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone WHERE A.`dynamicId`=? ",
    searchdynamicBytype:"SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId," +
    "GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON " +
    "A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone where C.userType='老师' order by dynamicDateTime desc LIMIT ?,?" ,
    showDynamicByPage: 'SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone ORDER BY dynamicDateTime DESC  LIMIT ?,?' ,
    cooperation:'insert into cooperation(username,phone,company,email,province,city) values(?,?,?,?,?,?)'
}
module.exports = user;