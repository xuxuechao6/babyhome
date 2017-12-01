/**
 * Created by Administrator on 2016/10/29.
 */

Ext.define('babyHome.controller.newsdetails', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            newsdetailsview: {                         //(7)
                selector: 'newsdetailsview',          //视图的ID
                xtype:'newsdetailsview',              //确定某个视图
                autoCreate: true
            },
        },
        routes: {'newsdetails/:value': 'shownewsdetailsView'},
    },

    shownewsdetailsView:function(value){
        Ext.Ajax.request({
            url:config.URL+ 'userJSON/newsdetails',
            scope:this,
            method:"get",
            params:{newsId:value},
            success:function (response) {
                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).newsdetails;
                var detailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="newsdetails_info">' +
                    '<div class="title">{newsTitle}</div>' +
                    '<div class="newsimg"><img src="'+config.URL+'upload/{newsPic1}"  alt="">' +
                    '<img class="img2" src="'+config.URL+'upload/{newsPic2}" ></div>' +
                    '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{newsContent}</p></div>' +
                    '</tpl>'
                );
                var tplHtml=detailTpl.apply(msg);
                Ext.getCmp('newsdetails').setHtml(tplHtml);
            },
        })
        Ext.Viewport.setActiveItem(this.getNewsdetailsview());
    }
});