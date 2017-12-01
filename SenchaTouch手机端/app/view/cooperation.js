/**
 * Created by 土豆豆 on 2016/10/16.
 */
Ext.define('babyHome.view.cooperation', {
    extend:'Ext.Panel',
    xtype:'cooperationview',
    config:{
        id:'cooperationview',
        layout:'fit',
        fullscreen:true,
        items:[
            {
                xtype:'toolbar',
                id:'toolbar_cooperation',
                docked:'top',
                items:[{
                    xtype: 'button',
                    id: 'main',
                    text: '返回'
                },{
                    xtype: 'searchfield',
                    id:'search_UserId',
                    name:'search_UserId',
                    placeHolder:'请输入帐号'
                },
                    {
                        xtype: 'button',
                        id:'btnSearch',
                        name:'btnSearch',
                        text:'查询'
                    }]
            }
        ]
    }
})