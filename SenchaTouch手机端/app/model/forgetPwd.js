Ext.define('babyHome.model.forgetPwd', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['userPhone',
            'userPassword',
        ],
        validations:[
            { type:'presence',field:'userPhone',message:'手机号不能为空'},
            { type:'presence',field:'userPassword',message:'请输入新密码'},
        ]
    }
});
