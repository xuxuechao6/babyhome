
Ext.define('babyHome.view.service', {
    extend: 'Ext.Panel',
    xtype: 'serviceview',
    config: {
        id:'serviceview',
        layout:'fit',
        fullscreen:true,
        items:[
            {
                xtype:"titlebar",
                id:'myTitleBar',
                docked:"top",
                style:'background:#46C0F8;height:55px;border:none',
                title:"服务帮助",
                items:[
                    {
                        xtype: 'button',
                        id: 'main',
                        style:'background:#46C0F8;border:none',
                        text: '返回',
                        html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                    }
                ]
            },
            {
                xtype:'panel',
                scrollable:true,
                html:  '<img style="width: 100%;height: 100px" src="images/self-report.png">'+
                '<div class="answer_content"> ' +
                '<h3>帐号及密码如何获取?</h3> ' +
                '<p>家长账户使用手机号码或老师提供的用户ID登陆，默认的初始密码是123456.家长的手机号码必须在宝贝家园后台录入，方可成功登陆。</p></div> '+
                '<div class="answer_content"> ' +
                '<h3>忘记登录密码怎么办?</h3> ' +
                '<p>忘记登录密码请联络园所老师，老师可以帮助用户重新设置密码，也可以通过添加QQ群228015688联系工作人员进行重置。</p></div> '+
                '<div class="answer_content"> ' +
                '<h3>如何查看宝贝课程表?</h3> ' +
                '<p>在幼儿园中点击课程表图标，进入课程表页面。此页面显示最近一周的课程情况。点击相应的星期日期，下方会显示详细的课程信息。</p></div> '+
                '<div class="answer_content"> ' +
                '<h3>家长登录APP提示用户或密码错误？</h3> ' +
                '<p>首先先确定下载的掌心宝贝是否是家长版的版本；确认无误后还出现该提示；可以选择忘记密码；通过手机验证修改密码；然后进行登录。</p></div> '
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