/**
 * Created by 土豆豆 on 2016/10/31.
 */
Ext.define('babyHome.controller.common', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            commonview: {                         //(7)
                selector: 'commonview',          //视图的ID
                xtype:'commonview',              //确定某个视图
                autoCreate: true
            },
        },
       
        routes: {
            'common': 'showcommonView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    showcommonView:function(){
        Ext.Viewport.setActiveItem(this.getCommonview());
        Ext.Ajax.request({
            // url: 'http://10.40.4.58:8080/userJSON/common',     //网址
            url:config.URL+ 'userJSON/common',     //网址
            scope:this,
            type: 'rest',
            method:"get",
            pageSize: 5,               //分页
            autoLoad: true,
            success:function (response) {
                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).common;
                var detailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="common_info"><a href="#commondetails/{commonId}">&nbsp;&nbsp;{commonTitle}</a><span> >> </span></div>',
                    '</tpl>'
                );
                var tplHtml=detailTpl.apply(msg);
                Ext.getCmp('commonDataview').setHtml(tplHtml);
            },

        })
    }
});