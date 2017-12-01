/**
 * Created by 土豆豆 on 2016/10/24.
 */
Ext.define('babyHome.view.information', {
    extend: 'Ext.Panel',
    xtype: 'informationview',  //跳转需要
    config: {
        id: 'informationview',//跳转需要
        layout:'fit',
        fullscreen:true,
        items:[{
            xtype:"titlebar",
            id:'myTitleBar',
            docked:"top",
            style:'background:#46C0F8;height:55px;border:none',
            title:"个人信息",
            items:[
                {
                    xtype: 'button',
                    id: 'setting',
                    style:'background:#46C0F8;border:none',
                    text: '返回',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                },
            ]
        },
            {
                id:'formPanel',
                xtype:'formpanel',
                method:'POST',
                scrollable: 'vertical',
                multipartDetection:true,
                items: [
                    {
                        xtype: 'filefield',
                        id: 'files',
                        name: 'files',
                        fieldLabel: '选择头像',
                        style:'border-top:1px solid #d2d2d2; border-bottom: 1px solid #d2d2d2;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;',
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: '选择头像'
                    },
                    {
                        xtype: "button",
                        text: "修改头像",
                        id: 'updatePicJudge',
                        style:'background:#46C0F8;border:none;color:white'
                    },
                    {
                        xtype: 'textfield',
                        id:'userPhone',
                        name : 'userPhone',
                        label: '手机号',
                        style:'border-top:1px solid #d2d2d2;border-top-left-radius: 10px;border-top-right-radius: 10px;',
                        placeHolder:'请输入手机号',
                        required:true,
                        clearIcon: true
                    } ,
                    {
                        xtype: 'passwordfield',
                        id:'userPassword',
                        name : 'userPassword',
                        label: '密码',
                        style:'border-top:1px solid #d2d2d2',
                        placeHolder:'请输入密码',
                        required:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        id:'userNickName',
                        name : 'userNickName',
                        label: '昵称',
                        style:'border-top:1px solid #d2d2d2',
                        placeHolder:'请输入昵称',
                        required:true,
                        clearIcon: true
                    },
                    {
                        xtype:'radiofield',
                        id:'rb_sex1',
                        name : 'userSex',
                        label: '男',
                        style:'border-top:1px solid #d2d2d2',
                        value:'男',
                        checked:true,
                    },
                    {
                        xtype:'radiofield',
                        id:'rb_sex2',
                        name : 'userSex',
                        label: '女',
                        value:'女',
                        style:'border-top:1px solid #d2d2d2',
                        checked:false,
                    },
                    {
                        xtype: 'datepickerfield',
                        name:'userDate',
                        label:'出生日期',
                        style:'border-top:1px solid #d2d2d2',
                        picker:{
                            yearFrom:1980,
                            yearTo:2100
                        },
                        value:new Date(),
                        dateFormat:'Y年m月d日',
                        required:true,
                    },
                    {
                        xtype: "button",
                        text: "修改资料",
                        id: 'updateuserJudge',
                        style:'background:#46C0F8;border:none;color:white'
                    },


                ]
            },
            {
                xtype:'toolbar',
                docked:'bottom',
                style:'background:white;border:none;height:55px',
                items:[
                    {
                        xtype:'button',
                        style:'background:white;border:none',
                        id:'main',
                        html:'<img style="width: 100%;height: 100%" src="images/index.png">'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none',
                        id:'inform',
                        html:'<img style="width: 50px;height: 50px" src="images/inform.png">'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none',
                        id:'service',
                        html:'<img style="width: 100%;height: 100%" src="images/help.png">'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none',
                        id:'information',
                        html:'<img style="width: 100%;height: 100%" src="images/my.png">'
                    }
                ]

            }
        ]
    }
});