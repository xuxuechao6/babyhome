/**
 * Created by 土豆豆 on 2016/10/22.
 */
Ext.define('babyHome.view.comment', {
    extend: 'Ext.Panel',
    xtype: 'commentview',
    config: {
        id: 'commentview',
        scrollable: 'vertical',
        style:'background:white',
        // layout: 'fit',
        // html:'我是分类界面<br>',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title:"所有评论",
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
                style: 'width:100%;height:300px',
                id: 'comments',
                // store: 'MenuDetailsStore',
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        id: 'commentText',
                        placeHolder: "说点什么吧~"
                    },
                    {
                        xtype: 'button',
                        id: 'commentBtn',
                        html: '<div>评论</div>'
                    }
                ]
            }
        ]
    }
});
