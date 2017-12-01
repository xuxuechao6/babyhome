/**
 * Created by 土豆豆 on 2016/10/26.
 */
Ext.define('babyHome.view.dynamicDetail', {
    extend: 'Ext.Panel',
    xtype: 'dynamicDetailview',
    config: {
        id:'dynamicDetailview',
        layout: 'fit',
        // html:'我是分类界面<br>',
        items:[
            {
                xtype: 'toolbar',
                docked: 'top',
                title:"动态详情",
                style:'background:#46C0F8;height:55px;border:none',
                items: [
                    {
                        xtype: 'button',
                        id: 'Dynamic',
                        style:'background:#46C0F8;border:none',
                        text: '返回',
                        html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                    }
                ]
            },
            {
                xtype: 'panel',
                style:'width:100%;height:100%;background:white',
                id:'dynamicDetail'
                // store: 'MenuDetailsStore',
            }
        ]
    }
});
