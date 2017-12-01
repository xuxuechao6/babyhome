var admin = {
    insertAdmin:'INSERT INTO admin(adminPhone ,adminName,adminPassword) VALUES(?,?,?)',
    insertUser:'INSERT INTO user(userPhone , userPassword,userNickName,userSex,userDate,userType,userPic) VALUES(?,?,?,?,?,?,?)',
    queryByPhoneAndPwd: 'select * from admin where adminPhone=? and adminPassword=?',
    queryAlluser: 'select * from user',
    queryAlladmin: 'select * from admin',
    queryadmin: 'select * from admin where adminPhone=?',
    queryUserByPhone:'select * from user where userPhone=?',
    queryAdminByPhone:'select * from admin where adminPhone=?',
    updateUserInfo:'UPDATE USER SET userType=?,userNickName=?,userSex=?,userPassword=?,userDate=? WHERE userPhone=?',
    updateAdminInfo:'UPDATE admin SET adminPhone=?,adminName=?,adminPassword=? WHERE adminId=?',
    getTotalCount:'select count(*) TotalCount from dynamic',//查询总共有多少条数据
    showDynamicByPage: 'SELECT A.*,B.dynamicPics,C.* FROM  DYNAMIC A LEFT JOIN(SELECT dynamicId,GROUP_CONCAT(CONCAT(dynamicpic)) AS dynamicPics FROM dynamicpic B  GROUP BY dynamicId) B ON A.dynamicId=B.dynamicId JOIN USER C ON A.userPhone=C.userPhone ORDER BY dynamicDateTime DESC  LIMIT ?,?' ,
    deleteUserinfo:'delete  from user where userPhone=?',
    searchUser: 'select * from user where userType=?',
    searchuserPhone: 'select * from user where userPhone=?',

    deletedynamic:'delete  from dynamic where dynamicId=?',
    insertnews:'INSERT INTO news(newsDateTime,newsTitle , newsContent,newsPic1,adminPhone) VALUES(?,?,?,?,?)',
    getTotalCountnews:'select count(*) TotalCount from news',//查询总共有多少条数据
    shownewsByPage: 'SELECT A.*,B.* FROM  news a LEFT JOIN admin B ON A.adminPhone=B.adminPhone ORDER BY newsDateTime DESC  LIMIT ?,?' ,
    deletenews:'delete  from news where newsId=?',
    insertcommon:'INSERT INTO common(commonTitle ,commonContent,adminPhone) VALUES(?,?,?)',
    getTotalCountcommon:'select count(*) TotalCount from common',//查询总共有多少条数据
    showcommonByPage: 'SELECT * FROM  common   LIMIT ?,?' ,
    deletecommon:'delete from common where commonId=?',
};
module.exports = admin;
