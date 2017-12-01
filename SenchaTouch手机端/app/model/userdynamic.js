/**
 * Created by 土豆豆 on 2016/10/25.
 */
Ext.define('babyHome.model.userdynamic', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'userPhone',
            'userPic', 'userNickName', 'dynamicDateTime',
            'dynamicContent', 'dynamicPic','dynamicId','PicId','senchapic'
        ]
    }
});