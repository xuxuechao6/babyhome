
Ext.define('babyHome.controller.service', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            serviceview: {                         //(7)
                selector: 'serviceview',          //视图的ID
                xtype:'serviceview',              //确定某个视图
                autoCreate: true
            },
            mainButton:'#mainButton'
        },
        control:{
        },
        routes: {
            'service': 'showserviceView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showserviceView:function(){
        Ext.Viewport.setActiveItem(this.getServiceview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
    }
});