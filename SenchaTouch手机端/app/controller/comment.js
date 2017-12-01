
Ext.define('babyHome.controller.comment', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            commentview: {//(7)
                id:'commentview',
                selector: 'commentview',          //视图的ID
                xtype: 'commentview',              //确定某个视图
                autoCreate: true
            },
            Dynamic:'#Dynamic',
            commentBtn:'#commentBtn',
            commentText:'#commentText'
        },
        control:{
            Dynamic:{
                tap:'showdynamicView'
            },
            commentBtn:{
                tap:'comment'
            }

        },
         routes: {
                'comment/:value': 'showcommentView'    //根据此路由，调用此函数 showAboutView  //(5)
            }
    },
    comment: function () {
        var commentText = this.getCommentText().getValue();
        if (commentText == "") {
            Ext.Msg.alert("提示", "评论内容不能为空。");
            return;
        }
        else
            Ext.Ajax.request({
                url:config.URL+'userJSON/comment',
                method: "get",
                scope: this,
                params: {
                    commentText: this.getCommentText().getValue(),
                    userPhone:sessionStorage.getItem("session_userPhone"),
                    dynamicId: sessionStorage.getItem("session_dynamicId"),
                },
                success: function () {
                    this.redirectTo('comment');
                    Ext.Msg.alert("评论成功");
                },
                failure: function () {
                    Ext.Msg.alert("评论失败。");
                }
            });
    },

        showdynamicView: function() {
            this.redirectTo('dynamic');
        },
        showcommentView: function (value) {
            Ext.Ajax.request({
                url:config.URL+'userJSON/searchcomment',
                scope: this,
                method:"get",
                params:{
                    dynamicId:value   //参数
                },
                success: function (response){
                    sessionStorage.setItem('session_dynamicId', value);
                    var msg = Ext.decode(response.responseText).comment;
                    var comment = new Ext.XTemplate(
                        '<div style="margin-top: 70px">',
                        '<tpl for=".">',
                        '<div class="spanMessage"> ' +
                        '<img class="comment_img" src="'+config.URL+'upload/{userPic}"/>',
                        '<h3 >{userNickName}</h3>',
                        '<h2>{commentTime}</h2>',
                        '<p>{commentContent}</p>' +
                        '<div class="line"></div>' +
                        '</div>' +
                        '</tpl>'+
                            '</div>'
                    );
                    var tplHtml=comment.apply(msg);
                    Ext.getCmp('comments').setHtml(tplHtml);
                }
            });
            Ext.Viewport.setActiveItem(this.getCommentview());   //真正来显示 某个 页面About.js（Panel）,激活某个视图   //(6)
        }
    
});