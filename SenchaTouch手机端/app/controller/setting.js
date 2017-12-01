Ext.define('babyHome.controller.setting',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            settingview: {                         //(7)
                selector: '#settingview',       //视图的ID
                xtype:'settingview',              //确定某个视图
                autoCreate: true
            },
        },
        routes: {
            'setting': 'showSettingView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showSettingView:function () {
        Ext.Viewport.setActiveItem(this.getSettingview())

    }
});