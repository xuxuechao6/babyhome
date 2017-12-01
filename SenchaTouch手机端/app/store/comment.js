/**
 * Created by 土豆豆 on 2016/10/29.
 */
Ext.define('babyHome.store.comment', {
    extend  : 'Ext.data.Store',
    requires: ['babyHome.model.comment'],
    config: {
        model: 'babyHome.model.comment',
        autoLoad:true,
        proxy: {
            type: 'ajax',       //jsonp
            url:config.URL+'userJSON/searchcomment',
            method:'get',
            reader: {
                type: 'json',
                rootProperty: 'comment'
            },
            listeners: {
                exception: function (proxy, response) {
                    Ext.Msg.alert(Ext.decode(response.responseText).message);
                }
            }
        }
    }
});