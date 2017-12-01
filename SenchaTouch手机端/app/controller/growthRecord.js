Ext.define('babyHome.controller.growthRecord',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            growthRecordview: {                         //(7)
                selector: '#growthRecordview',       //视图的ID
                xtype:'growthRecordview',              //确定某个视图
                autoCreate: true
            },
        },
        control:{
        },
        routes: {
            'growthRecord': 'showGrowthRecordPage'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showGrowthRecordPage:function () {
        Ext.Viewport.setActiveItem(this.getGrowthRecordview())  //（6）

    }
});