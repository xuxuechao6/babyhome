
Ext.define('babyHome.view.about', {
    extend: 'Ext.Panel',
    xtype: 'aboutview',
    config: {
        id:'aboutview',
        layout:'fit',
        fullscreen:true,
        items:[
            {
            xtype:"titlebar",
            id:'myTitleBar',
            docked:"top",
            style:'background:#46C0F8;height:55px;border:none',
            title:"个人中心",
            items:[
                {
                    xtype: 'button',
                    style:'background:#46C0F8;border:none',
                    id: 'main',
                    text: '返回',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                },
            ]
        },
            {
                xtype: 'dataview',
                style:'background:white',
                height:'100%',
                id: 'mydynamic',
                width:'100%',
                scrollable: 'vertical',
            }
            // {
            //     xtype: "dataview", //list
            //     style:'background:white',
            //     id:'mydynamic',
            //     selectedCls:'selected',
            //     emptyText: '没有数据',
            //     itemTpl:['<tpl for=".">',
            //         '<div class="haha">',
            //         '<div class="personal"><img src="'+config.URL+'upload/{userPic}"/></div>',
            //         '<div class="personal_info">',
            //         '<h2>{userNickName}</h2><h3>{dynamicDateTime}</h3>',
            //         '<div class="delete"><a href="#deleteinfo/{dynamicId}"><img style="width: 15px;height: 15px" src="images/删除.png"></a></div>',
            //         '<p>{dynamicContent}</p><br>',
            //         '<tpl for="senchapic">',
            //         '<div class="personalImg"><img src="'+config.URL+'upload/{.}"/></div>',
            //         '</tpl>',
            //         '</div>',
            //         '</div>',
            //         '</tpl>']
            // },
            
        ]
    }
})