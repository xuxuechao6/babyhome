
Ext.define('babyHome.controller.download', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            downloadview: {                         //(7)
                selector: 'downloadview',          //视图的ID
                xtype:'downloadview',
                autoCreate: true//确定某个视图
            },
            genre: '#genre',
        },
        control:{
            genre: {
                change: 'genre_onchange'
            }
        },
        routes: {
            'download': 'showdownloadView',    //根据此路由，调用此函数 showAboutView  //(5)
            'setHtml/:value': 'setHtmlByValue'
        },
    },
    showdownloadView:function(){
        Ext.Viewport.setActiveItem(this.getDownloadview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
    },
    genre_onchange: function () {
        var value = this.getGenre().getValue();
        if (value != "") {
            this.redirectTo('setHtml/' + value);
        }
    },
    setHtmlByValue: function (value) {
        var valueArray = ["", "哈哈哈哈", "一一一一呀呀呀呀", "嘿嘿嘿嘿嘿"];
        this.getDownloadview().setHtml(valueArray[value]); //在当前界面显示不同的内容
    }
});