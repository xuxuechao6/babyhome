Ext.define('babyHome.controller.news',{ //配置让VIEW获取
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            newsView: {
                xtype:'newsview', //(7)        //确定某个视图
                selector: '#newsview',       //视图的ID
                autoCreate: true
            },
        },
        control:{
        },
        routes: {
            'news': 'shownewsView'    //根据此路由，调用此函数 showAboutView  //(5)
        },
    },
    shownewsView:function () {
        // alert(11);
        Ext.Ajax.request({
            // url: 'http://10.40.4.58:8080/userJSON/common',     //网址
            url:config.URL+ 'userJSON/news',     //网址
            scope:this,
            method:"get",
            pageSize: 5,               //分页
            autoLoad: true,
            /*      success:function (response) {
             var data=Ext.decode(response.responseText);   //解析
             console.log(data);
             Ext.getCmp('newsDataview').setData(data.news);  //对象
             },*/
            success:function (response) {
                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).news;
                var detailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="news_info">' +
                    '<a href="#newsdetails/{newsId}">' +
                    '<div><img src="'+config.URL+'upload/{newsPic1}"/></div><div class="hr"></div>' +
                    '<h2 >{newsTitle}</h2>' +
                    '</a></div> ',
                    '</tpl>'
                );
                var tplHtml=detailTpl.apply(msg);
                Ext.getCmp('newsDataview').setHtml(tplHtml);     },



        }),
            Ext.Viewport.setActiveItem(this.getNewsView())

    }
});