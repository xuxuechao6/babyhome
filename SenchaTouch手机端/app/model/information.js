/**
 * Created by 土豆豆 on 2016/10/24.
 */
Ext.define('babyHome.model.information', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'userPhone',
            'userPassword',
            'userNickName',
            {name:'userSex',type:'String'},
            'userDate',
            'files'
        ],
        validations: [
            {type: 'presence',field:'userPhone',message:'帐号必须输入'},
            {type: 'presence',field:'userPassword',message:'密码必须输入'},
            {type:'length',field:'userPassword',min:6,message: '密码长度至少6位'},
            {type: 'presence',field:'userNickName',message:'昵称必须输入'},
            {type: 'exclusion',field:'userNickName',list:['admin','administrator','管理员'], message:'不能使用这个姓名'},
            {type:'inclusion',field:'userSex',list:['男','女'],message: '必须选择性别'},
        ]
    }
});
