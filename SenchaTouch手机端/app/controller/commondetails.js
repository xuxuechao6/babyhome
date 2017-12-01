
Ext.define('babyHome.controller.commondetails', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            commondetailsview: {                         //(7)
                selector: 'commondetailsview',          //视图的ID
                xtype:'commondetailsview',              //确定某个视图
                autoCreate: true
            },
        },
        routes: {'commondetails/:value': 'showcommondetailsView'},
    },
    showcommondetailsView:function(value){
        Ext.Ajax.request({
            url: config.URL+'userJSON/commondetails',
            scope:this,
            method:"get",
            params:{commonId:value},
            success:function (response) {
                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).commondetails;
                var detailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="commondetails_info"><h2>{commonTitle}</h2><p>&nbsp;&nbsp;&nbsp;&nbsp;{commonContent}</p></div>',
                    '</tpl>'
                );
                var tplHtml=detailTpl.apply(msg);
                Ext.getCmp('commondetails').setHtml(tplHtml);

               /* alert(response.responseText);
                var data=Ext.decode(response.responseText);
                console.log(data);
                Ext.getCmp('commondetails').setData(data.commondetails);*/
            },
           
        })
        Ext.Viewport.setActiveItem(this.getCommondetailsview());
    }
});