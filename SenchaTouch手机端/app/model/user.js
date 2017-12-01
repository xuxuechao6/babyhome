Ext.define('babyHome.model.user', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['userPhone',
            'userPassword',
        ],
        validations:[
            { type:'presence',field:'userPhone',message:'手机号不能为空'},
            { type:'presence',field:'userPassword',message:'密码不能为空'},
        ]
    }
});
