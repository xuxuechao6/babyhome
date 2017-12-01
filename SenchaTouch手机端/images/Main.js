/**
 * Created by 土豆豆 on 2016/10/15.
 */
Ext.define('MyApp.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainview',
    config: {
        xtype:'tabpanel',
        id: 'mainview',
        fullscreen:true,
        ui:'dark',
        tabBarPosition:'bottom',
        items:[
            {
                title:"主页",
                iconCls:'home',
                scrollable: 'vertical',
                items: [{
                    xtype: 'toolbar',
                    id: 'toolbar_main',
                    docked: 'top',
                    items: [
                        { iconCls: 'user',
                            id: 'loginButton'},
                        {
                            xtype: 'button',
                            id: 'aboutButton',
                            text: '个人中心',
                        },
                        {
                            xtype: 'button',
                            id: 'downloadButton',
                            text:'下载'
                        },
                        {
                            xtype: 'button',
                            id: 'cooperationButton',
                            text: '合作'
                        },
                        {
                            xtype: 'button',
                            id: 'dynamicButton',
                            text: '班级动态'
                        },
                        {
                            xtype: 'button',
                            id: 'registerButton',
                            text: '注册'
                        }
                    ]
                },{
                    xtype:'panel',
                    items:[{
                        xtype:'carousel',
                        layout:{
                            type:'vbox',
                            align:'stretch'
                        },
                        id:"carousel1",
                        height:222,
                        items:[
                            {
                                xtype: 'panel',
                                html:"<img src='images/top1.jpg' style='width: 100%;height: 222px'>",
                                style:"background-color:pink"
                            },
                            {
                                xtype: 'panel',
                                html:"<img src='images/top2.jpg' style='width: 100%;height: 222px'>",
                                style:"background-color:red"
                            },
                            {
                                xtype: 'panel',
                                html:"<img src='images/top3.jpg' style='width: 100%;height: 222px'>",
                                style:"background-color:yellow"
                            }
                        ]
                    },{
                        id:'subpanel1',
                        xtype:'panel',
                        html:'<div class="menu">'+
                        '<ul class="clearfix">'+
                        '<li>'+
                        '<a id="aboutButton" href="self-report.html">'+
                        '<img src="images/icon8.png">'+
                        '<p class="menu-txt">个人中心</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a id="dynamicButton" href="green.html">'+
                        '<img src="images/icon6.png">'+
                        '<p class="menu-txt">班级动态</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a href="arrive.html">'+
                        '<img id="schedule" src="images/icon5.png">'+
                        '<p class="menu-txt">日程安排</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a id="service" href="delay.html">'+
                        '<img src="images/icon3.png">'+
                        '<p class="menu-txt">服务帮助</p>'+
                        '</a>'+
                        '</li>'+
                        '</ul>'+
                        '<ul class="clearfix">'+
                        '<li>'+
                        '<a id="downloadButton", href="must-know.html">'+
                        '<img src="images/icon7.png">'+
                        '<p class="menu-txt">下载流程</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a id="cooperationButton" , href="notice.html">'+
                        '<img src="images/icon2.png">'+
                        '<p class="menu-txt">加盟合作</p>'+
                        '</li>'+
                        '</a>'+
                        '<li>'+
                        '<a id="news" href="data.html">'+
                        '<img src="images/icon1.png">'+
                        '<p class="menu-txt">新闻中心</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a id="common" href="ask.html">'+
                        '<img src="images/icon4.png">'+
                        '<p class="menu-txt">育儿常识</p>'+
                        '</a>'+
                        '</li>'+
                        '</ul>'+
                        '</div>'+
                            '<div class="brief"> ' +
                        '<h3 class="brief-tit">校园简介</h3> ' +
                        '<div class="brirf-content clearfix"<div class="bc-left fl"> ' +
                        '<img src="images/pic1.png"> </div> ' +
                        '<div class="bc-right fr">合肥学院(Hefei University)简称合院， 是国家首批61所"卓越工程师教育培养计划"和首批52所"服务国家特殊需求人才培养项目"培养硕士专业学位研究生试点工 ' +
                        '</div> </div> </div> ' +
                        '<dl class="news"> ' +
                        '<dt class="news-tit">校园资讯</dt> ' +
                        '<dd class="news-content clearfix"> ' +
                        '<div class="nc-left fl"> <img src="images/pic1.png"> </div> ' +
                        '<div class="nc-right fr"> ' +
                        '<a class="ncr-top">李克强与默克尔共同考察合肥学院宣布 建立中德教育合作示范基地合作基金 </a> ' +
                        '<span class="nc-time">07-26 17:00</span> </div> </dd> ' +
                        '<dd class="news-content clearfix"> ' +
                        '<div class="nc-left fl"> <img src="images/pic1.png"> </div> ' +
                        '<div class="nc-right fr"> ' +
                        '<a class="ncr-top">李克强与默克尔共同考察合肥学院宣布 建立中德教育合作示范基地合作基金 </a> ' +
                        '<span class="nc-time">07-26 17:00</span> </div> </dd> </dl>'
                    },{
                        xtype: 'toolbar',
                        id: 'toolbar_main',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'button',
                                id: 'schedule',
                                text: '计划'
                            },
                            {
                                xtype: 'button',
                                id: 'service',
                                text: '帮助'
                            },
                            {
                                xtype: 'button',
                                id: 'news',
                                text: '新闻'
                            },
                            {
                                xtype: 'button',
                                id: 'common',
                                text: '常识'
                            }
                        ]
                    }]
                }
                ]
            },
            {
                title:"通知",
                iconCls:'user',
                html:"这是班级通知",
            },
            {
                title:"设置",
                iconCls:'settings',
                html:"这是设置页面"
            },
        ]
    },
});
setInterval(function () {
    var car1=Ext.getCmp('carousel1');
    car1.next();
    if(car1.getActiveIndex()==car1.getMaxItemIndex()) {  //比较当前的显示的索引 和最大个数
        car1.setActiveItem(0);
    }
},2000);
