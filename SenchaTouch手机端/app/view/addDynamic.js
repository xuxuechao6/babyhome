/**
 * Created by 土豆豆 on 2016/10/25.
 */

Ext.define('babyHome.view.addDynamic', {
    extend: 'Ext.Panel',
    xtype: 'addDynamicview',
    config: {
        id:'addDynamicview',
        layout:'fit',
        fullscreen:true,
        items:[{
            xtype:"titlebar",
            id:'myTitleBar',
            docked:"top",
            style:'background:#46C0F8;height:55px;border:none',
            title:"添加动态",
            items:[
                {
                    xtype: 'button',
                    id: 'Dynamic',
                    text: '返回动态',
                    style:'background:#46C0F8;border:none',
                    html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                }
            ]
        },
            {
                xtype:'panel',
                html:'<div class="banner">' +
                '<img style="width: 100%;height:180px" src="images/dy.jpg"> ' +
                '</div><div class="contain"  style="padding-top:3%;">' +
                '<form method="post" action="javascript:;" role="form" id="frmUploadFile" > ' +
                '<div class="reason"> ' +
                '<textarea class="text1" name="text1" id="text1"  placeholder="说点什么吧~~"></textarea> ' +
                '</div>' +
                '<div class="inseartDynamic" id="inseartDynamic"> ' +
                '<input type="file" name="files" id="myfile" class="file0" multiple="multiple"/> ' +
                '<br> ' +
                    '<input class="button" id="dynamicBtn" type="button" value="发布动态" onClick="uploadFile()">'+
                '<div class="help-inline" id="spanMessage"></div> ' +
                '</div>' +
                ' </form>'
            },
        ]
    }
})