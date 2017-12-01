Ext.define('babyHome.controller.main',{
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            mainview: {                         //(7)
                selector: '#mainview',          //视图的ID
                xtype:'mainview',              //确定某个视图
                autoCreate: true
            },
        },
        control:{
        },
        routes: {
            'main': 'showmainView' ,   //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showmainView:function () {
        Ext.Viewport.setActiveItem(this.getMainview())

    }
});