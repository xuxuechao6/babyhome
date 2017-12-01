Ext.define('babyHome.view.schedule',{
    // extend:'Ext.Container',
    extend: 'Ext.tab.Panel',//  table
    xtype:'scheduleview',       //跳转需要
    config:{
        id:'scheduleview',  //跳转需要
        fullscreen:true,
        tabBarPosition:'top',
        ui:'formal',
        items: [
            {
                xtype:'titlebar',
                id:'myTitlebar',
                style:'background:#46C0F8;height:55px;border:none',
                docked:'top',
                title:'日程安排',
                /*  html:' <div id="currentDate"><script language="JavaScript" src="date.js" type="text/javascript"></script></div>',*/
                //导航
                items:[
                    {
                        xtype:'button',
                        id:'main',
                        style:'background:#46C0F8;border:none',
                        text: '返回',
                        html:'<img style="width: 100%;height: 100%" src="images/button.png">'
                    },

                ]
            },
            //列表
            {
                title: '周一',
                cls:'day',
                style:'background:white',
                // html: 'Home Screen'
                html:  '<img style="width: 70px;height: 70px" src="images/break.gif">'+
                '<img style="width:60%;height: 60px" src="images/today.png">'+
                '<br><div class="th">星期一</div>'+
                ' <table class="table table-hover"  >' +
                '<tr id="div1"> ' +
                '<td >第一节课</td> ' +
                '<td class="td-content">美术：小房子 ' +
                '</td> </tr>' +
                '<tr id="div2">' +
                '<td>第二节课 </td>' +
                '<td class="td-content">英语：abc</td> </tr>' +
                '<tr id="div3"> ' +
                '<td >第三节课 </td>' +
                '<td class="td-content">手工：折纸鹤</td></tr>' +
                '<tr id="div4"> ' +
                '<td>第四节课 </td>' +
                '<td class="td-content">数学：加法</td></tr>' +
                '</table>'
            },
            {
                title: '周二',
                cls:'day',
                style:'background:white',
                html:
                '<img style="width: 70px;height: 70px" src="images/break.gif">'+
                '<img style="width:60%;height: 60px" src="images/today.png">'+
                '<br><div class="th">星期二</div>'+
                ' <table class="table table-hover"  >' +
                '<tr id="div1"> ' +
                '<td >第一节课</td> ' +
                '<td class="td-content">语文：古诗 ' +
                '</td> </tr>' +
                '<tr id="div2">' +
                '<td>第二节课 </td>' +
                '<td class="td-content">音乐：儿歌</td> </tr>' +
                '<tr id="div3"> ' +
                '<td >第三节课 </td>' +
                '<td class="td-content">课外活动：玩游戏</td></tr>' +
                '<tr id="div4"> ' +
                '<td>第四节课 </td>' +
                '<td class="td-content">文艺：诗朗诵</td></tr>' +
                '</table>'
            },
            {
                title: '周三',  cls:'day',
                style:'background:white',
                html:
                '<img style="width: 70px;height: 70px" src="images/break.gif">'+
                '<img style="width:60%;height: 60px" src="images/today.png">'+
                '<br><div class="th">星期三</div>'+
                ' <table class="table table-hover"  >' +
                '<tr id="div1"> ' +
                '<td >第一节课</td> ' +
                '<td class="td-content">故事：安徒生童话 ' +
                '</td> </tr>' +
                '<tr id="div2">' +
                '<td>第二节课 </td>' +
                '<td class="td-content">游戏：识字游戏</td> </tr>' +
                '<tr id="div3"> ' +
                '<td >第三节课 </td>' +
                '<td class="td-content">体育：健康操</td></tr>' +
                '<tr id="div4"> ' +
                '<td>第四节课 </td>' +
                '<td class="td-content">生活活动：种花</td></tr>' +
                '</table>'
            },
            {
                title: '周四',  cls:'day',
                style:'background:white',
                html:
                '<img style="width: 70px;height: 70px" src="images/break.gif">'+
                '<img style="width:60%;height: 60px" src="images/today.png">'+
                '<br><div class="th">星期四</div>'+
                ' <table class="table table-hover"  >' +
                '<tr id="div1"> ' +
                '<td >第一节课</td> ' +
                '<td class="td-content">美术：蜡笔画 ' +
                '</td> </tr>' +
                '<tr id="div2">' +
                '<td>第二节课 </td>' +
                '<td class="td-content">英语：自我介绍</td> </tr>' +
                '<tr id="div3"> ' +
                '<td >第三节课 </td>' +
                '<td class="td-content">数学：减法</td></tr>' +
                '<tr id="div4"> ' +
                '<td>第四节课 </td>' +
                '<td class="td-content">手工：插花</td></tr>' +
                '</table>'
            },
            {
                title: '周五',  cls:'day',
                style:'background:white',
                html:
                '<img style="width: 70px;height: 70px" src="images/break.gif">'+
                '<img style="width:60%;height: 60px" src="images/today.png">'+
                '<br><div class="th">星期五</div>'+
                ' <table class="table table-hover"  >' +
                '<tr id="div1"> ' +
                '<td >第一节课</td> ' +
                '<td class="td-content">语文：课文 ' +
                '</td> </tr>' +
                '<tr id="div2">' +
                '<td>第二节课 </td>' +
                '<td class="td-content">数学：乘法</td> </tr>' +
                '<tr id="div3"> ' +
                '<td >第三节课 </td>' +
                '<td class="td-content">阅读：小红帽</td></tr>' +
                '<tr id="div4"> ' +
                '<td>第四节课 </td>' +
                '<td class="td-content">音乐：合唱</td></tr>' +
                '</table>'
            },
        ]


    }
});

