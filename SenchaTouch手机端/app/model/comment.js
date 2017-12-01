/**
 * Created by 土豆豆 on 2016/10/29.
 */
Ext.define('babyHome.model.comment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'dynamicId',
            'commentContent',
            'userPhone',
            'userNickName',
            'commentTime',
            'commentId',
            'userPic'
        ]
    }
});