/**
 * Created by 土豆豆 on 2016/10/28.
 */
Ext.define('babyHome.controller.inform', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            informview: {                         //(7)
                selector: 'informview',          //视图的ID
                xtype:'informview',              //确定某个视图
                autoCreate: true
            },
        },
        control:{

        },
        routes: {
            'inform': 'showinformView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showinformView:function(){
        Ext.Viewport.setActiveItem(this.getInformview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
    }
});