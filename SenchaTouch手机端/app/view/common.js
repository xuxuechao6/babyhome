/**
 * Created by 土豆豆 on 2016/10/31.
 */
Ext.define('babyHome.view.common', {
    extend: 'Ext.Panel',
    xtype: 'commonview',
    config: {
        id:'commonview',
        layout:'fit',
        fullscreen:true,
        items:[
            {
                xtype: "titlebar",
                id: 'myTitleBar',
                docked: "top",
                style:'background:#46C0F8;height:55px;border:none',
                title: "育儿常识",
                items: [
                    {
                        xtype: 'button',
                        id: 'main',
                        style:'background:#46C0F8;border:none',
                        text: '返回',
                        html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                    },
                ]
            },


            {
                xtype:'panel',
                id:'commonDataview',
                fullscreen:true,
                scrollable:'vertical',

            }

        ]
    }
})