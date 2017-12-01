/**
 * Created by 土豆豆 on 2016/10/26.
 */
Ext.define('babyHome.controller.dynamicDetail', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            dynamicDetailview: {
                id:'dynamicDetailview',              //(7)
                selector: 'dynamicDetailview',          //视图的ID
                xtype:'dynamicDetailview',              //确定某个视图
                autoCreate: true
            },
            Dynamic:'#Dynamic',
            commmon:'#commmon'
        },
        control:{
            Dynamic:{
                tap:'showdynamicView'
            }
        },
        routes: {
            'dynamicDetail/:value': 'showdynamicDetailView'    //根据此路由，调用此函数 showAboutView  //(5)
        }
    },
    showdynamicView: function() {
        this.redirectTo('dynamic');
    },
    showdynamicDetailView:function(value){
        Ext.Ajax.request({
            url:config.URL+'userJSON/dynamicDetail',
            scope: this,
            method:"get",
            params:{
                dynamicId:value   //参数
            },
            success: function (response){
                var msg = Ext.decode(response.responseText).userinfo;
                var dynamicDetail = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="dynamicDetail"><img src="'+config.URL+'upload/{userPic}"/><br/></div>' +
                    '<div class="detail_info">',
                    '<h3 >{userNickName}</h3>',
                    '<h2>{dynamicDateTime}</h2>',
                    '<h4>{dynamicContent}</h4>',
                    '<tpl for="senchapic">',
                    '<div class="detailImg"><img style="width: 100px;height: 100px" src="'+config.URL+'upload/{.}"/></div>',
                    '</tpl>',
                    '</div>',
                    '</tpl>'
                );
                var tplHtml=dynamicDetail.apply(msg);
                Ext.getCmp('dynamicDetail').setHtml(tplHtml);
            }
        });

        Ext.Viewport.setActiveItem(this.getDynamicDetailview());
    }
});