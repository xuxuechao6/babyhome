/**
 * Created by 土豆豆 on 2016/10/26.
 */
Ext.define('babyHome.store.dynamicDetail', {
    extend  : 'Ext.data.Store',
    requires: ['babyHome.model.dynamicDetail'],
    config: {
        model: 'babyHome.model.dynamicDetail',
        autoLoad:true,
        proxy: {
            type: 'ajax',       //jsonp
            url: config.URL+'userJSON/dynamicDetail',
            method:'get',
            reader: {
                type: 'json',
                // rootProperty: 'userinfo'
            },
            listeners: {
                exception: function (proxy, response) {
                    Ext.Msg.alert(Ext.decode(response.responseText).message);
                }
            }
        }
    }
});