/**
 * Created by 土豆豆 on 2016/10/25.
 */

Ext.define('babyHome.controller.addDynamic', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            addDynamicview: {                         //(7)
                selector: 'addDynamicview',          //视图的ID
                xtype:'addDynamicview',              //确定某个视图
                autoCreate: true
            },
        },
        control:{

        },
        routes: {
            'addDynamic': 'showaddDynamicView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showaddDynamicView:function(){
        Ext.Viewport.setActiveItem(this.getAddDynamicview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
    }
});