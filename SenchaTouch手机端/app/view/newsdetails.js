/**
 * Created by Administrator on 2016/10/26.
 */
/**
 * Created by 土豆豆 on 2016/10/22.
 */
Ext.define('babyHome.view.newsdetails', {
    extend: 'Ext.Panel',
    xtype: 'newsdetailsview',
    config: {
        id:'newsdetailsview',
        layout:'fit',
        scrollable:'vertical',
        fullscreen:true,
        items:[
            {
                xtype: "titlebar",
                id: 'myTitleBar',
                title:"新闻详情",
                docked: "top",
                style:'background:#46C0F8;height:55px;border:none',
                // title: "{commonTitle}",
                // html:'nihao !',
                items: [{xtype: 'button',
                    id: 'news',
                    style:'background:#46C0F8;border:none',
                    text: '返回',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                },
                ],
            },
            {
                xtype:'panel',
                style:'background:white',
                id:'newsdetails',
                fullscreen:true,
                scrollable:'vertical',
              
            },
        ]
    }
})