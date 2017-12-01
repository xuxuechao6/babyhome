Ext.define('babyHome.store.userStore', {
    extend  : 'Ext.data.Store',
    requires: ['babyHome.model.user'],
    config: {
        // model: 'babyHome.model.User',
        // autoLoad:true,
        // remoteFilter:true,
        // proxy: {
        //     params:{
        //         UserId: formPanel.getComponent("UserId").getValue(),
        //         UserPassword: formPanel.getComponent("UserPassword").getValue()
        //     },
        //     type: 'ajax',
        //     url: 'http://localhost:3000/p/users/login',
        //     actionMethods:'POST',
        //     reader: {
        //         type: 'json',
        //         //rootProperty: 'data',
        //
        //     },
        //     listeners:{
        //         submit: function(form,result){
        //             console.log('success');
        //         },
        //         exception: function(form,result){
        //             console.log('failure');
        //         },
        //
        //     },
        // }
    }
});
