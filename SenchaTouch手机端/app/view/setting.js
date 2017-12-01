Ext.define('babyHome.view.setting', {
    extend: 'Ext.Panel',
    xtype: 'settingview',
    config: {
        xtype:'panel',
        id: 'settingview',
        fullscreen:true,
        scrollable:true,
        layout:'fit',
        items:[
            {
                xtype:"titlebar",
                id:'myTitleBar',
                docked:"top",
                style:'background:#46C0F8;height:55px;border:none',
                title:"个人中心",
                items:[
                    {
                        xtype: 'button',
                        id: 'main',
                        style:'background:#46C0F8;border:none',
                        text: '返回',
                        html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                    },
                ]
            },
            {
                xtype:'panel',
                iconCls:'settings',
                html:['<div class="write-info"> <span><img style="border-radius: 50px" src="images/logintx.ico"> </span> </div>'+

                '<div class="userinformation">' +
                '<span style="margin-left: 20px">' +
                '<a href="#information">个人信息<span style="float: right;margin-right: 20px"> >> </span></a>' +
                '</span>' +
                '</div>'+
                '<div class="userinformation">'+
                '<span style="margin-left: 20px"><a id="changepwd" href="#forgetPwd">修改密码<span style="float: right;margin-right: 20px"> >> </span></a></span></div>'+
                '<div class="outlogin">'+
                '<span><a href="#login">退出登录</a></span></div>']
            },
            {
                xtype:'toolbar',
                docked:'bottom',
                style:'background:white;border:none;height:55px',
                items:[
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'main',
                        html:'<img style="width:50%;height: 40%" src="images/首页_首页.png"></br><div style="margin-top: -9px;color: #47c0f8">首页</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'inform',
                        html:'<img style="width:50%;height: 40%" src="images/通知.png"><br><div style="margin-top: -9px;color: #47c0f8">通知</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'service',
                        html:'<img style="width:45%;height: 35%" src="images/咨询.png"><br><div style="margin-top: -6px;color: #47c0f8">咨询帮助</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'setting',
                        html:'<img style="width:45%;height: 35%" src="images/个人中心.png"><br><div style="margin-top: -6px;color: #47c0f8">个人设置 </div>'
                    }
                ]

            }
        ]
    }
})