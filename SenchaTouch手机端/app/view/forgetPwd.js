Ext.define('babyHome.view.forgetPwd',{
    extend:'Ext.form.Panel',
    xtype:'forgetPwdview',  //跳转需要
    config:{
        id:'forgetPwdview',//跳转需要
        layout:'fit',
        fullscreen:true,
        items:[{
            xtype:'toolbar',
            style:'background:#46C0F8;height:55px;border:none',
            id:'myToolbar',
            docked:'top',
            items:[
                {
                    xtype: 'button',
                    style:'background:#46C0F8;border:none',
                    id: 'login',
                    text: '返回',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                }
            ]
        },
            {
                xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        id: 'userPhone',
                        name: 'userPhone',
                        label: '用户名',
                        placeHolder: '用户名/邮箱/已验证手机',
                        required: true
                    },
                    {
                        xtype: "button",
                        text: "发送验证码",
                        id: 'sendMSG',
                        style:'background:#46C0F8;border:none',
                    },
                    {
                        xtype: "textfield",
                        id: "Judge",
                        name: "Judge",
                        placeHolder: "请输入手机收到的验证码",
                        label: '请输入验证码',
                        required: true,
                    },
                    {
                        xtype: 'passwordfield',
                        id: "userPassword",
                        name: "userPassword",
                        placeHolder: '请输入新密码',
                        label: '密码',
                        required: true,
                    },
                    {
                        xtype: "button",
                        text: "确认修改",
                        id: 'newPwd',
                        style:'background:#46C0F8;border:none',
                    },
                    {
                        xtype:'panel',
                        id: 'register',
                        html:'<div class="color1"><a href="#register">注 册</a></div>'
                    },{
                        xtype:'panel',
                        id: 'forgetPwd',
                        html:'<div class="color1"><a href="#login">返回登录</a></div>'
                    }
                ]
            }
        ]
    }
});