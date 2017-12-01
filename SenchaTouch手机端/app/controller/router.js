Ext.define('babyHome.controller.router',{
    extend:'Ext.app.Controller',
    config:{  //为控制器作配置，增加装备
        refs:{      //找到要操作组件的Id
            about:'#about',         //(1)在主界面里找到 “关于的”Button
            Cooperation:'#cooperation',
            Download:'#download',
            Dynamic:'#dynamic',
            Forgetpwd:'#forgetpwd',
            GrowthRecord:'#growthRecord',
            Login:'#login',
            main:'#main',
            News:'#news',
            Register:'#register',
            Schedule:'#schedule',
            Service:'#service',
            Setting:'#setting',
            changepwd:'#changepwd',
            addDynamic:'#addDynamic',
            inform:'#inform',
            common:'#common'
        },

        control:{
            about:{
                tap:'showAboutView'   //(2)单击，调用函数showAboutView(),先跳转，再显示 XX界面
            },
            CooperationButton:{
                tap:'showcooperationView'
            },
            Download:{
                tap:'showdownloadView'
            },
            Dynamic:{
                tap:'showdynamicView'
            },
            Forgetpwd:{
                tap:'showforgetpwdView'
            },
            GrowthRecord:{
                tap:'showgrowthRecordView'
            },
            Login:{
                tap:'showloginView'
            },
            main:{
                tap:'showmainView'
            },
            News:{
                tap:'shownewsView'
            },
            Register:{
                tap:'showregisterView'
            },
            Schedule:{
                tap:'showscheduleView'
            },
            Service:{
                tap:'showserviceView'
            },
            Setting:{
                tap:'showsettingView'
            },
            changepwd:{
                tap:'showchangepwdView'
            },
            addDynamic:{
                tap:'showaddDynamicView'
            },
            inform:{
                tap:'showinformView'
            },
            common:{
                tap:'showcommonView'
            }


        }
    },
    // showAboutView: function() {
        // this.redirectTo('about');
    // },
    showcooperationView: function() {
        this.redirectTo('cooperation');
    },
    showdownloadView: function() {
        this.redirectTo('download');
    },
    showdynamicView: function() {
        this.redirectTo('dynamic');
    },
    showforgetpwdView: function() {
        this.redirectTo('forgetpwd');
    },
    showgrowthRecordView: function() {
        this.redirectTo('growthRecord');
    },
    showloginView: function() {
        this.redirectTo('login');
    },
    showmainView: function() {
        // $('.personal').remove();
        // $('.personal_info').remove();
        this.redirectTo('main');
    },
    shownewsView: function() {
        this.redirectTo('news');
    },
    showregisterView: function() {
        this.redirectTo('register');
    },
    showscheduleView: function() {
        this.redirectTo('schedule');
    },
    showserviceView: function() {
        this.redirectTo('service');
    },
    showsettingView:function () {
        this.redirectTo('setting')
    },
    showchangepwdView:function () {
        this.redirectTo('changepwd')
    },
    showaddDynamicView:function () {
        this.redirectTo('addDynamic')
    },
    showinformView:function () {
        this.redirectTo('inform')
    },
    showcommonView:function () {
        this.redirectTo('common')
    }
});