/**
 * Created by 土豆豆 on 2016/10/24.
 */
Ext.define('babyHome.view.changepwd', {
    extend: 'Ext.Panel',
    xtype: 'changepwdview',
    config: {
        id:'changepwdview',
        layout:'fit',
        fullscreen:true,
        items:[{
            xtype:"titlebar",
            id:'myTitleBar',
            docked:"top",
            title:"修改密码",
            items:[
                {
                    xtype: 'button',
                    id: 'main',
                    text: '返回'
                },
            ]
        }
        ]
    }
})