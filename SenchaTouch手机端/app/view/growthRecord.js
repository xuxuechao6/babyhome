Ext.define('babyHome.view.growthRecord', {
    extend:'Ext.Container',
    xtype:'growthRecordview',       //跳转需要
    config:{
        id:'growthRecordview',  //跳转需要
        layout:'fit',
        fullscreen:true,
        html:"我是成长记录<br>",

        items:[{
            xtype:'toolbar',
            id:'myToolbar',
            docked:'top',
            items:[
                {
                    xtype: 'button',
                    id: 'main',
                    text: '返回'
                },
            ]
        }]
    }
});