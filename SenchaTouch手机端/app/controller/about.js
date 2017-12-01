
Ext.define('babyHome.controller.about', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            aboutview: {                         //(7)
                selector: 'aboutview',          //视图的ID
                xtype:'aboutview',              //确定某个视图
                autoCreate: true,
                mydynamic:'mydynamic',
            },
           
        },
        routes: {
            'about': 'showAboutView',    //根据此路由，调用此函数 showAboutView  //(5)
            'deleteinfo/:value':'deleteinfo'
        },
    },
    deleteinfo:function(value){
        Ext.Ajax.request({
            url:config.URL+'userJSON/deletedynamic',
            scope: this,
            method:"get",
            params:{
                dynamicId:value   //参数
            }
        })
        this.redirectTo('about')
        Ext.Msg.alert('删除成功');
    },
    showAboutView: function () {
        Ext.Viewport.setActiveItem(this.getAboutview());  //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
        Ext.Ajax.request({
            url: config.URL+ 'userJSON/showdynamic?userPhone='+sessionStorage.getItem("session_userPhone"),
            scope: this,
            method: "get",
            success: function (response) {
                var msg = Ext.decode(response.responseText).mydynamic1;
                    var mydynamicTemplate = new Ext.XTemplate(
                        '<tpl for=".">',
                                '<div class="haha">',
                                '<div class="personal"><img src="'+config.URL+'upload/{userPic}"/></div>',
                                '<div class="personal_info">',
                                '<h2>{userNickName}</h2><h3>{dynamicDateTime}</h3>',
                                '<div class="delete"><a href="#deleteinfo/{dynamicId}"><img style="width: 15px;height: 15px" src="images/删除.png"></a></div>',
                                '<p>{dynamicContent}</p><br>',
                                '<tpl for="senchapic">',
                                '<div class="personalImg"><img src="'+config.URL+'upload/{.}"/></div>',
                                '</tpl>',
                                '</div>',
                                '</div>',
                                '</tpl>'
                    );
                    var mydynamicHtml = mydynamicTemplate.apply(msg);
                    Ext.getCmp('mydynamic').setHtml(mydynamicHtml);
            }
        });
    }
    // showAboutView:function(){
    //     $('.haha').remove();
    //     // $('.personal').remove();
    //     // $('.personal_info').remove();
    //     Ext.Viewport.setActiveItem(this.getAboutview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
    //     var store = Ext.create('Ext.data.Store', {
    //             model: 'babyHome.model.userdynamic',
    //             autoLoad: true,
    //             autoDestroy: true,
    //             proxy: {
    //                 type: 'ajax',
    //                 scope: this,
    //                 url:config.URL+ 'userJSON/showdynamic?userPhone='+sessionStorage.getItem("session_userPhone"),
    //                 reader: {
    //                     type: 'json'
    //                 },
    //             }
    //         }
    //     );
    //     store.clearFilter();
    //     store.load(function (records, operation, success) {
    //         //alert(operation.getResponse().responseText);
    //         if (success) {
    //             console.log("records:");
    //             console.log(records);
    //             var data = JSON.parse(operation.getResponse().responseText);
    //             Ext.getCmp('mydynamic').setData(data. mydynamic);
    //         }
    //     });
    // },
});