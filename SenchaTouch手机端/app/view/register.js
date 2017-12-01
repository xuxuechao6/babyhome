Ext.define('babyHome.view.register', {
    extend: 'Ext.form.Panel',
    xtype: 'registerview',  //跳转需要
    config: {
        id: 'registerview',//跳转需要
        layout: 'fit',
        fullscreen: true,
        items: [{
            xtype: 'toolbar',
            style:'background:#46C0F8;height:55px;border:none',
            title:'注册',
            id: 'myToolbar',
            docked: 'top',
            items: [
                {
                    xtype: "button",
                    style:'background:#46C0F8;border:none',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">',
                    text: "返回",
                    id: 'login',
                },

            ]
        },
            {
                xtype:'formpanel',
                id:'formPanel',
                url: 'http://localhost:8000/userJSON/register',
                multipartDetection:true,
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'textfield',
                        id:'userPhone',
                        name : 'userPhone',
                        label: '手机号',
                        placeHolder:'请输入手机号',
                        required:true,
                        clearIcon: true
                    } ,
                    {
                        xtype: 'passwordfield',
                        id:'userPassword',
                        name : 'userPassword',
                        label: '密码',
                        placeHolder:'请输入密码',
                        required:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        id:'userNickName',
                        name : 'userNickName',
                        label: '昵称',
                        placeHolder:'请输入昵称',
                        required:true,
                        clearIcon: true
                    },
                    {
                        xtype:'radiofield',
                        id:'rb_sex1',
                        name : 'userSex',
                        label: '男',
                        value:'男',
                        checked:true,
                    },
                    {
                        xtype:'radiofield',
                        id:'rb_sex2',
                        name : 'userSex',
                        label: '女',
                        value:'女',
                        checked:false,
                    },
                    {
                        xtype: 'datepickerfield',
                        name:'userDate',
                        label:'出生日期',
                        picker:{
                            yearFrom:1980,
                            yearTo:2100
                        },
                        value:new Date(),
                        dateFormat:'Y年m月d日',
                        required:true,
                    },
                    {
                        xtype:'radiofield',
                        id:'rb_type1',
                        name : 'userType',
                        label: '家长',
                        value:'家长',
                        checked:true,
                    },
                    {
                        xtype:'radiofield',
                        id:'rb_type2',
                        name : 'userType',
                        label: '老师',
                        value:'老师',
                        checked:false,
                    },
                    {
                        xtype: "button",
                        text: "立即注册",
                        style:'background:#46C0F8;height:35px;border:none;margin:auto;margin-top:15px',
                        ui: 'action',
                        width: 100,
                        handler:function(){
                            var formPanel=Ext.getCmp('formPanel');
                            //要submit()提前之前要先验证是否输入了？
                            var model = Ext.create('babyHome.model.register',formPanel.getValues());  //varform=Ext.getCmp('userlogin').getValues();
                            var valResult = model.validate();
                            if(valResult.isValid())
                                formPanel.submit({
                                    success:function(){
                                        Ext.Msg.alert('成功','注册成功！');
                                    },
                                    failure:function(form,result){
                                        var message="";
                                        Ext.each(result.errors,function(rec,i){
                                            message += rec.message+"<br>";
                                        });
                                        Ext.Msg.alert("注册失败！", message);
                                    }
                                });
                            else {
                                var message = "";
                                Ext.each(valResult.items,function(rec){
                                    message += rec.getMessage()+"<br>";
                                });
                                Ext.Msg.alert("注册失败", message);
                            }
                        }
                    },

                ]
            }
        ]
    },
});