/**
 * Created by 土豆豆 on 2016/10/21.
 */
Ext.define('babyHome.store.dynamicStore', {
    extend  : 'Ext.data.Store',
    requires: ['babyHome.model.dynamicInfo'],
    config: {
        model: 'babyHome.model.dynamicInfo',
        autoLoad:true,
        pageSize:5,
        proxy: {
            type: 'ajax',       //jsonp
            url: config.URL+'userJSON/showalldynamic',
            reader: {
                type: 'json',
                rootProperty: 'alldynamic'
            },
            listeners: {
                exception: function (proxy, response) {
                    Ext.Msg.alert(Ext.decode(response.responseText).message);
                }
            }
        }
    }
});