Ext.define('babyHome.view.login', {
    extend: 'Ext.Panel',
    xtype: 'loginview',  //跳转需要
    config: {
        id: 'loginview',//跳转需要
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                style:'background:#46C0F8;height:55px;border:none',
                id: 'myToolbar',
                title:'登陆'
            },
            {
                xtype:'formpanel',
                url:config.URL+'userJSON/login',
                id: 'loginpage',
                // html:'<div style="width: 100%;height: 10px;">' +
                // '<img src="images/绚丽多彩背景.png" style="margin-top: -520px;width: 100%;height: 800px"></div>',
                items: [
                    {
                        xtype:'panel',
                        html:'<img style="width: 70px;height: 70px;margin-left: 42%;margin-top: 30%;border-radius: 50px" src="images/logintx.ico">'
                    },
                    {
                        xtype: 'textfield',
                        id: 'userPhone',
                        cls:'text',
                        name: 'userPhone',
                        placeHolder: '用户名/已验证手机',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        id: "userPassword",
                        name: "userPassword",
                        cls:'text',
                        placeHolder: '请输入密码',
                        required: true,
                    },
                    {
                        xtype: "button",
                        text: "登陆",
                        id: 'loginJudge',
                        // width: 100,
                    },
                    {
                        xtype:'panel',
                        id: 'register',
                        html:'<div class="color1"><a href="#register">注 册</a></div>'
                    },{
                        xtype:'panel',
                        id: 'forgetPwd',
                        html:'<div class="color1"><a href="#forgetPwd">忘记密码</a></div>'
                    }
                ]
            }]
    },
});
