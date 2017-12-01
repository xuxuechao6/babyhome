/**
 * Created by 土豆豆 on 2016/10/25.
 */
Ext.define('babyHome.store.inform', {
    extend  : 'Ext.data.Store',
    requires: ['babyHome.model.inform'],
    config: {
        model: 'babyHome.model.inform',
        autoLoad: true,
        pageSize: 5,
        proxy: {
            type: 'ajax',
            url: 'app/json/inform.json',
            reader: {
                type: 'json',
                rootProperty: 'inform'
            }
        }
    }
});