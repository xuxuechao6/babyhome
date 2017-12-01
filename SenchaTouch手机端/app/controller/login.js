Ext.define('babyHome.controller.login',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            loginView: {
                xtype:'loginview', //(7)        //确定某个视图
                selector: '#loginview',       //视图的ID
                autoCreate: true
            },
            loginJudge:'#loginJudge',
        },
        control:{
            loginJudge:{
                tap:'loginJudgeUser'
            }
        },
        routes: {
            'login': 'showLoginPage'    //根据此路由，调用此函数 showAboutView  //(5)
        }
    },
    loginJudgeUser:function() {
       var formpanel=Ext.getCmp('loginpage');
        var info=formpanel.getValues();
        var userPhone = info.userPhone;
        var userPassword = info.userPassword;
        if ( userPhone == "") {
            Ext.Msg.alert("提示", "用户名不许为空！");
            return;
        };
        if (userPassword == "") {
            Ext.Msg.alert("提示", "密码不许为空！");
            return;
        };
        formpanel.submit({
            scope:this,
            success:function () {
                console.log('电话：'+userPhone);
                console.log('密码：'+userPassword);
                Ext.Msg.alert("登陆成功");
                sessionStorage.setItem('session_userPhone', userPhone);
                console.log('电话：'+userPhone);
                this.redirectTo("main")
            },
            failure:function(){
                Ext.Msg.alert("登陆失败");
            }
        })
    
    },
    showLoginPage:function () {
        Ext.Viewport.setActiveItem(this.getLoginView())

    }
});