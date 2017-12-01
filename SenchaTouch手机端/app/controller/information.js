
Ext.define('babyHome.controller.information', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {     //找到要操作组件的Id
            informationview: {                         //(7)
                selector: 'informationview',          //视图的ID
                xtype:'informationview',              //确定某个视图
                autoCreate: true
            },
            updateuserJudge:'#updateuserJudge',
            updatePicJudge:'#updatePicJudge',
            information:'#information'
        },
        control:{
            updateuserJudge:{
                tap:'updateUserinfo'
            },
            updatePicJudge:{
                tap:'updatePicinfo'
                
            },
            information:{
                tap:'information'
            },
        },
        routes: {
            'information': 'showinformationView'     //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    updateUserinfo:function() {
        console.log(1111111111)
        var informationPanel=Ext.getCmp('formPanel');
        //要submit()提前之前要先验证是否输入了？
        var model = Ext.create('babyHome.model.information',informationPanel.getValues());
        console.log(informationPanel.getValues().userPhone);
        var userInfo=informationPanel.getValues();
        console.log('userInfo:'+userInfo.userPhone)
        var valResult = model.validate();
        console.log(valResult.isValid())
        if(valResult.isValid())
        //提交
        {
            Ext.Ajax.request({
                url: config.URL + 'userJSON/changeinformation?userPhone='+sessionStorage.getItem("session_userPhone"),
                params: {
                    userPhone: sessionStorage.getItem("session_userPhone"),
                    userNickName: userInfo.userNickName,
                    userSex: userInfo.userSex,
                    userDate: userInfo.userDate,
                },
                success: function () {
                    Ext.Msg.alert('修改成功');
                },
                failure: function () {
                    Ext.Msg.alert('修改失败');
                }
            })
        }
        else {
            var message = "";
            Ext.each(valResult.items,function(rec){
                message += rec.getMessage()+"<br>";
            });
            Ext.Msg.alert("修改失败", message);
        }
    },
    updatePicinfo:function() {
        console.log(1111111111)
        var informationPanel=Ext.getCmp('formPanel');
        //要submit()提前之前要先验证是否输入了？
        var model = Ext.create('babyHome.model.information',informationPanel.getValues());
        var valResult = model.validate();
        console.log(valResult.isValid())
        if(valResult.isValid())
        //提交
        {
            var formData = new FormData($("#formPanel")[0]);
            $.ajax({
                url: config.URL + 'userJSON/changeinformationPic?userPhone='+sessionStorage.getItem("session_userPhone"),
                type: 'POST',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function () {
                    Ext.Msg.alert('头像修改成功');
                },
                failure: function () {
                    Ext.Msg.alert('头像修改失败');
                }
            })
        }
        else {
            var message = "";
            Ext.each(valResult.items,function(rec){
                message += rec.getMessage()+"<br>";
            });
            Ext.Msg.alert("头像修改失败", message);
        }
    },
    showinformationView:function(){
        Ext.Viewport.setActiveItem(this.getInformationview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
        var formPanel=Ext.getCmp('formPanel');
        Ext.Ajax.request({
            url:config.URL+ 'userJSON/showuserinfo?userPhone='+sessionStorage.getItem("session_userPhone"),
            scope: this,
            success: function (response) {
                var msg = Ext.decode(response.responseText).userinfo[0];
                console.log(msg.userNickName);
                //直接赋值
                formPanel.setValues({
                    'userPhone'    : msg.userPhone,
                    'userNickName': msg.userNickName,
                    'userPassword':msg.userPassword,
                    'userSex'     : msg.userSex,
                    'userDate'     : new Date(msg.userDate),
                });
            },
            failure: function (response, options) {
                Ext.Msg.alert('提示', Ext.decode(response.responseText).userinfo[0]);
            }
        });
       
    }
});