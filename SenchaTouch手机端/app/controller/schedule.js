Ext.define('babyHome.controller.schedule',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            scheduleview: {
                xtype:'scheduleview', //(7)        //确定某个视图
                selector: '#scheduleview',       //视图的ID
                autoCreate: true
            },
        },
        control:{
        },
        routes: {
            'schedule': 'showSchedulePage'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showSchedulePage:function () {
        Ext.Viewport.setActiveItem(this.getScheduleview())

    }
});