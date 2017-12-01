Ext.define('babyHome.controller.register',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            registerview: {
                xtype:'registerview', //(7)        //确定某个视图
                selector: '#registerview',       //视图的ID
                autoCreate: true
            },
        },
        control:{
        },
        routes: {
            'register': 'showRegisterPage'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showRegisterPage:function () {
        Ext.Viewport.setActiveItem(this.getRegisterview())

    }
});