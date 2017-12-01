
Ext.define('babyHome.view.download', {
    extend:'Ext.Panel',
    xtype:'downloadview',
    config:{
        id:'downloadview',
        fullscreen:true,
        items:[
            {
                xtype:'toolbar',
                id:'toolbar_download',
                docked:'top',
                items:[{
                    xtype: 'button',
                    id: 'main',
                    text: '返回'
                },
                    {
                        xtype: 'selectfield',
                        id:'genre',
                        options:[
                            {
                                text:'选择',
                                value:''
                            },
                            {
                                text:'喜剧',
                                value:1
                            },
                            {
                                text:'文艺',
                                value:2
                            },
                            {
                                text:'动作',
                                value:3
                            }]
                    }]
            }
        ]
    }
})