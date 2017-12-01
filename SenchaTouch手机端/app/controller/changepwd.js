/**
 * Created by 土豆豆 on 2016/10/24.
 */
Ext.define('babyHome.controller.changepwd', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            changepwdview: {                         //(7)
                selector: 'changepwdview',          //视图的ID
                xtype:'changepwdview',              //确定某个视图
                autoCreate: true
            },
        },
        control:{

        },
        routes: {
            'changepwd': 'showchangepwdView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showchangepwdView:function(){
        Ext.Viewport.setActiveItem(this.getChangepwdview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
    }
});