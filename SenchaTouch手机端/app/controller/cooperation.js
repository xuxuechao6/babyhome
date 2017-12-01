
Ext.define('babyHome.controller.cooperation', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            cooperationview: {                         //(7)
                selector: 'cooperationview',          //视图的ID
                xtype:'cooperationview',              //确定某个视图
                autoCreate: true,
            },
            btnSearch: '#btnSearch',
            search_UserId: '#search_UserId',
            // formview: {                             //表单界面
            //     selector: '#formviewPanel',
            //     xtype: 'formview',
            //     autoCreate: true
            // },
        },
        control:{
            btnSearch:{
                tap:'search_UserId_ontap'
            }
            // search_UserId: {
            //     change: 'search_UserId_onchange'            //查询
            // }
        },
        routes: {
            'cooperation': 'showcooperationView',    //根据此路由，调用此函数 showcooperationView  //(5)
            // 'loadUser': 'loadUser'
        },
        // before: {
        //     loadUser: ['getUser']                           //在路由的函数调用之前，执行before预加载
        // },
        // currentUser: undefined
    },
    showcooperationView:function(){
        Ext.Viewport.setActiveItem(this.getCooperationview());   //真正来显示 某个 页面cooperation.js（Panel）,激活某个视图   //(6)
    },
    //查询
    // search_UserId_onchange: function () {
    //     this.redirectTo('loadUser');
    // },
    // getUser: function (action) {
    //     var userStore = Ext.getStore('UserStore');              //执行store
    //     userStore.clearFilter();
    //     var value = this.getSearch_UserId().getValue();         //得到用户输入的
    //
    //     alert(value);
    //     var index = userStore.find('UserId',value);              //var record= userStore.getAt(index);
    //     userStore.load({
    //         callback: function (records, operation, success) {
    //             if (success) {
    //                 var controller = action.getController();
    //                 controller.setCurrentUser(this.getAt(index));   //返加这个index 所在的对象
    //                 action.resume();
    //             }
    //         }
    //     });
    // },
    // loadUser: function () {                         //before :loadUser
    //     var cooperationview= this.getCooperationview();
    //     var formview = this.getFormview();
    //     cooperationview.add(formview);
    //     formview.setRecord(this.getCurrentUser());    //formview 的name和仓库里model的属性匹配
    // }
    search_UserId_ontap: function () {
        var cooperationview = this.getCooperationview();
        var formview = this.getFormview();
        cooperationview.add(formview);                 //组装表单
        alert('search_UserId_ontap:'+this.getSearch_UserId().getValue());
        Ext.Ajax.request({
            url: 'http://localhost:3000/p/users/searchUserByUserIdJSON',
            scope: this,
            method:"get",
            params:{
                UserId:this.getSearch_UserId().getValue()   //参数
            },
            success: function (response) {
                alert(response.responseText);
                var msg = Ext.decode(response.responseText).data;
                if(msg!=undefined){
                    alert(msg.UserId);
                    Ext.Msg.alert('提示', msg.BirthDate);
                    console.log(msg.BirthDate);
                    //直接赋值
                    formview.setValues({
                        'UserId'    : msg.UserId,
                        'UserName'     : msg.UserName,
                        'UserPassword':msg.UserPassword,
                        'Gender'     : msg.Gender,
                        'BirthDate'     : new Date(msg.BirthDate)
                    });
                }
                else
                {
                    //直接赋值
                    formview.setValues({
                        'UserId'    : "",
                        'UserName'     :"",
                        'UserPassword':"",
                        'Gender'     : "",
                        'BirthDate'     : new Date()
                    });
                    Ext.Msg.alert('查询无记录~');
                }

                //var user = Ext.create('User', {
                //    'UserId': msg.UserId,
                //    'UserName': msg.UserName,
                //    'UserPassword': msg.UserPassword,
                //    'Gender': msg.Gender,
                //    'BirthDate':new Date('2015/8/28') //new Date(msg.BirthDate),  replace(- ,/)
                //});
                //formPanel.setRecord(user);


            },
            failure: function (response, options) {
                Ext.Msg.alert('提示', Ext.decode(response.responseText).data);
            }
        });
    }
});