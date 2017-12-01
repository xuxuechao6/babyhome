Ext.define('babyHome.view.dynamic', {
    extend: 'Ext.Panel',
    xtype: 'dynamicview',
    config: {
        id:'dynamicview',
        layout:'fit',
        fullscreen:true,
        items:[{
            xtype:"titlebar",
            id:'myTitleBar',
            style:'background:#46C0F8;height:55px;border:none',
            docked:"top",
            title:"动态",
            items:[
                {
                    xtype: 'button',
                    style:'background:#46C0F8;border:none',
                    id: 'main',
                    text: '返回',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                },
                {
                    xtype: 'button',
                    id:'addDynamic',
                    iconCls:'add',
                    align:'right',
                    style:'background:#46C0F8;border:none',
                }
            ]
        },
            {
                xtype: "list", //list
                store: "dynamicStore",
                style:'width:100%;height:auto;background:white',
                //分页插件：
                plugins: [
                    {

                        xclass: 'Ext.plugin.PullRefresh',

                        pullRefreshText: '下拉可以更新',

                        releaseRefreshText: '松开开始更新',

                        loading: '正在刷新……',

                        refreshFn: function (loaded, arguments) {

                            loaded.getList().getStore().getProxy().setExtraParam('q', '参数'); //设置proxy参数

                            loaded.getList().getStore().loadPage(1, {

                                callback: function (record, operation, success) { Ext.Viewport.unmask(); }, scope: this });

                        }
                    },{

                        xclass: 'Ext.plugin.ListPaging',
                        loadMoreText: '更多……',
                        noMoreRecordsText: '没有更多条记录了',
                        autoPaging: true //设置为TRUE将自动触发

                    }],
                selectedCls:'selected',
                emptyText: '没有数据',
                itemTpl:[
                    '<tpl for=".">' ,
                    '<a href="#dynamicDetail/{dynamicId}"><div class="user_img"><img src="'+config.URL+'upload/{userPic}"/></div>',
                    '<div class="user_info">',
                    '<h2>{userNickName}</h2>' +
                    '<p>{dynamicDateTime}</p><br>',
                    '<h4>{dynamicContent:ellipsis(40)}</h4><br>',
                    '<tpl for="senchapic[0]">',
                    '<div class="dynamicimg"><img src="'+config.URL+'upload/{.}"/></div>',
                    '</tpl>',
                    '</div></a>',
                    '<div><a href="#comment/{dynamicId}"><img src="images/comment.png"><h4 style="margin-left: 40px;margin-top: -33px">评论</h4></a></div>',
                    '',
                    '</tpl>'
                ]
            }
        ]
    }
})