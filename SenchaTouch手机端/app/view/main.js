Ext.define('babyHome.view.main', {
    extend: 'Ext.Panel',
    xtype: 'mainview',
    config: {
        xtype:'panel',
        height:'auto',
        id: 'mainview',
        scrollable:true,
        items:[
            {
                xtype:'titlebar',
                style:'background:#46C0F8;height:55px;border:none',
                docked:'top',
                title:'<span style="color: white">宝贝家园</span>'

            },
            {
                        xtype:'carousel',
                        id:"carousel1",
                        height:222,
                        direction:'horizontal',
                        items:[
                            {
                                html:"<img src='images/top1.jpg' style='width: 100%;height: 222px '>",
                            },
                            {
                                html:"<img src='images/top2.jpg' style='width: 100%;height: 222px'>",
                            },
                            {
                                html:"<img src='images/top3.jpg' style='width: 100%;height: 222px'>",
                            }
                        ]
            },
            {
                        id:'subpanel1',
                        xtype:'panel',
                        html:'<div class="menu">'+
                        '<ul class="clearfix">'+
                        '<li>'+
                        '<a href="#about">'+
                        '<img src="images/icon8.png">'+
                        '<p class="menu-txt">个人动态</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a href="#dynamic">'+
                        '<img src="images/icon6.png">'+
                        '<p class="menu-txt">班级动态</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a href="#schedule">'+
                        '<img src="images/icon5.png">'+
                        '<p class="menu-txt">日程安排</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a href="#service">'+
                        '<img src="images/icon3.png">'+
                        '<p class="menu-txt">服务帮助</p>'+
                        '</a>'+
                        '</li>'+
                        '</ul>'+
                        '<ul class="clearfix">'+
                        '<li>'+
                        '<a href="#">'+
                        '<img src="images/icon7.png">'+
                        '<p class="menu-txt">成长记录</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a href="#">'+
                        '<img src="images/icon2.png">'+
                        '<p class="menu-txt">加盟合作</p>'+
                        '</li>'+
                        '</a>'+
                        '<li>'+
                        '<a href="#news">'+
                        '<img src="images/icon1.png">'+
                        '<p class="menu-txt">新闻中心</p>'+
                        '</a>'+
                        '</li>'+
                        '<li>'+
                        '<a href="#common">'+
                        '<img src="images/icon4.png">'+
                        '<p class="menu-txt">育儿常识</p>'+
                        '</a>'+
                        '</li>'+
                        '</ul>'+
                        '</div>'+
                            '<div style="background-color: white;height:60px;line-height: 60px;width: 100%;text-align: center"> ' +
                        '<div style="color: #d06921">☆今天吃什么？☆</div> ' +
                        '</div>'+
                            '<img style="width: 100%;height: 150px" src="images/2.jpg">'+
                        '<div style="background-color: white;height:60px;line-height: 60px;width: 100%;text-align: center"> ' +
                        '<div style="color: #d06921">☆宝贝玩什么？☆</div> ' +
                        '</div>'+
                        '<img style="width: 32%;height: 120px;" src="images/7.1.jpg"><img style="width: 32%;height: 120px;margin-left:1.5%" src="images/7.2.jpg">' +
                        '<img style="width: 32%;height: 120px;margin-left:1.5%" src="images/7.3.jpg">'+
                        '<div class="brief"> ' +
                        '<h3 class="brief-tit">校园简介</h3> ' +
                        '<div class="brirf-content clearfix"><div class="bc-left fl"> ' +
                        '<img src="images/pic2.jpg"> </div> ' +
                        '<div class="bc-right fr">宝贝家园（BabyHome）， 是国家首批61所"卓越工程师教育培养计划"和首批52所"服务国家特殊需求人才培养项目"培养硕士专业学位研究生试点工 ' +
                        '</div> </div> </div> '+
                        '<div class="news"> ' +
                        '<div class="news-tit">校园资讯</div> '+
                        '<div class="news-content clearfix"> ' +
                        '<div class="nc-left fl"> <img src="images/pic4.jpg"> </div> ' +
                        '<div class="nc-right fr"> ' +
                        '<a class="ncr-top">李克强与默克尔共同考察宝贝家园宣布 建立中德教育合作示范基地合作基金 </a> ' +
                        '<span class="nc-time">07-26 17:00</span> </div> </div> ' +
                        '<div class="news-content clearfix"> ' +
                        '<div class="nc-left fl"> <img src="images/pic1.png"> </div> ' +
                        '<div class="nc-right fr"> ' +
                        '<a class="ncr-top">李克强与默克尔共同考察宝贝家园宣布 建立中德教育合作示范基地合作基金 </a> ' +
                        '<span class="nc-time">07-26 17:00</span> </div> </div> </div>'
             },
            {
                xtype:'toolbar',
                docked:'bottom',
                style:'background:white;border:none;height:55px',
                items:[
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'main',
                        html:'<img style="width:50%;height: 40%" src="images/首页_首页.png"></br><div style="margin-top: -9px;color: #47c0f8">首页</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'inform',
                        html:'<img style="width:50%;height: 40%" src="images/通知.png"><br><div style="margin-top: -9px;color: #47c0f8">通知</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'service',
                        html:'<img style="width:45%;height: 35%" src="images/咨询.png"><br><div style="margin-top: -6px;color: #47c0f8">咨询帮助</div>'
                    },
                    {
                        xtype:'button',
                        style:'background:white;border:none;width: 23%',
                        id:'setting',
                        html:'<img style="width:45%;height: 35%" src="images/个人中心.png"><br><div style="margin-top: -6px;color: #47c0f8">个人设置 </div>'
                    }
                ]

            }
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
