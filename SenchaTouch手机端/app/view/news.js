Ext.define('babyHome.view.news', {
    extend: 'Ext.Panel',
    xtype: 'newsview',
    config: {
        id:'newsview',
        layout:'fit',
        fullscreen:true,
        items:[
            {
                xtype:"titlebar",
                id:'myTitleBar',
                docked:"top",
                style:'background:#46C0F8;height:55px;border:none',
                title:"新闻中心",
                items:[
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
                xtype: 'panel',
                id:'newsDataview',
                fullscreen:true,
                scrollable:'vertical',

            }
        ]
    }
})