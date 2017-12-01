/**
 * Created by Administrator on 2016/10/26.
 */
/**
 * Created by 土豆豆 on 2016/10/22.
 */
Ext.define('babyHome.view.commondetails', {
    extend: 'Ext.Panel',
    xtype: 'commondetailsview',
    config: {
        id:'commondetailsview',
        layout:'fit',
        fullscreen:true,
        items:[
            {
                xtype: "titlebar",
                id: 'myTitleBar',
                docked: "top",
                style:'background:#46C0F8;height:55px;border:none',
                title:"育儿常识详情",
                items: [
                    {
                        xtype: 'button',
                        style:'background:#46C0F8;border:none',
                        id: 'common',
                        text: '返回',
                        html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                    },
                ]
            },
            {
                xtype:'panel',
                style:'background:white',
                id:'commondetails',
                fullscreen:true,
                scrollable:'vertical',//上下滚动
            },
   
        ]
    }
})