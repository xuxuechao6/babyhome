Ext.define('babyHome.controller.forgetPwd',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            forgetPwdview: {
                xtype:'forgetPwdview', //(7)        //确定某个视图
                selector: '#forgetPwdview',       //视图的ID
                autoCreate: true
            },
            newPwd:'#newPwd',
        },
        control:{
            newPwd:{
                tap:'newPwdJudge',
            }
        },
        routes: {
            'forgetPwd': 'showForgetPwdPage'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },

    newPwdJudge:function() {
        console.log(1111111111)
        var newPwdPanel=this.getForgetPwdview();
        //要submit()提前之前要先验证是否输入了？
        console.log(1111111111)
        var model = Ext.create('babyHome.model.forgetPwd',newPwdPanel.getValues());
        // console.log(model)
        var valResult = model.validate();
        if(valResult.isValid())
        //提交
            newPwdPanel.submit({
                url:config.URL+'userJSON/forgetPwd',
                scope:this,
                method: "get",
                //actionMethods:'POST',
                success: function() {
                    Ext.Msg.alert('密码修改成功');
                    Ext.Viewport.setActiveItem('loginview')
                },
                failure: function() {
                    Ext.Msg.alert('密码修改失败');
                }
            })
        else {
            var message = "";
            Ext.each(valResult.items,function(rec){
                message += rec.getMessage()+"<br>";
            });
            Ext.Msg.alert("密码修改失败", message);
        }
    },
    
    showForgetPwdPage:function () {
        Ext.Viewport.setActiveItem(this.getForgetPwdview())

    }
});