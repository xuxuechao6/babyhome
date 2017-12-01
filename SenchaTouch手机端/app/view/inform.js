/**
 * Created by 土豆豆 on 2016/10/28.
 */
Ext.define('babyHome.view.inform', {
    extend: 'Ext.Panel',
    xtype: 'informview',
    config: {
        xtype:'panel',
        id: 'informview',
        fullscreen:true,
        scrollable:true,
        layout:'fit',
        items:[
            {
                xtype:"titlebar",
                id:'myTitleBar',
                docked:"top",
                style:'background:#46C0F8;height:55px;border:none',
                title:"通知",
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
                    {xtype: "list",
                        baseCls:'inform',
                        store: "inform",
                        //分页插件：
                        plugins: [
                            {
                                xclass: 'Ext.plugin.ListPaging',
                                autoPaging: true,
                                loadMoreText:'正在加载...'
                            }],
                        selectedCls:'selected',
                        emptyText: '没有数据',
                        itemTpl:[
                            '<tpl for=".">'+
                            '<div class="inform-info"><h3>{date}</h3>',
                            '<p>{content:ellipsis(40)}</p></div>',
                            '</tpl>'],
                    },
            {
                xtype:'toolbar',
                docked:'bottom',
                style:'background:white;border:none;height:55px',
                items:[
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'main',
                        html:'<img style="width:50%;height: 40%" src="images/首页_首页.png"></br><div style="margin-top: -9px;color: #47c0f8">首页</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'inform',
                        html:'<img style="width:50%;height: 40%" src="images/通知.png"><br><div style="margin-top: -9px;color: #47c0f8">通知</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'service',
                        html:'<img style="width:45%;height: 35%" src="images/咨询.png"><br><div style="margin-top: -6px;color: #47c0f8">咨询帮助</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'setting',
                        html:'<img style="width:45%;height: 35%" src="images/个人中心.png"><br><div style="margin-top: -6px;color: #47c0f8">个人设置 </div>'
                    }
                ]

            }
        ]
    }
})