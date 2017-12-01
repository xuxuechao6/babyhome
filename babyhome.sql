/*
SQLyog Professional v12.08 (64 bit)
MySQL - 5.0.45-community-nt : Database - babyhome
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`babyhome` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `babyhome`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `adminId` int(10) NOT NULL auto_increment,
  `adminPhone` varchar(20) NOT NULL,
  `adminPassword` varchar(30) NOT NULL default '',
  `adminName` varchar(30) NOT NULL default '',
  PRIMARY KEY  (`adminPhone`),
  KEY `adminId` (`adminId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `admin` */

insert  into `admin`(`adminId`,`adminPhone`,`adminPassword`,`adminName`) values (9,'13813479864','123456','赵璐露'),(8,'15138800000','123456','1234567890');

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `userPhone` varchar(20) default NULL,
  `commentId` int(20) NOT NULL auto_increment,
  `commentContent` varchar(200) default NULL,
  `commentTime` varchar(30) default NULL,
  `dynamicId` int(11) NOT NULL,
  PRIMARY KEY  (`commentId`),
  KEY `comment_ibfk_1` (`dynamicId`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`dynamicId`) REFERENCES `dynamic` (`dynamicId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

/*Data for the table `comment` */

insert  into `comment`(`userPhone`,`commentId`,`commentContent`,`commentTime`,`dynamicId`) values ('13813479864',87,'翠翠害怕地痛哭让他觉得莫名其妙，他给孙女讲母亲的故事，更让孙女感触不已。','2016-11-06 20:47:52',9),('13813479864',88,'你好','2016-11-06 20:48:07',9),('15138801111',89,'哈喽','2016-11-06 20:48:43',9),('13813479864',90,'今天天气真好','2016-11-06 20:52:31',9);

/*Table structure for table `common` */

DROP TABLE IF EXISTS `common`;

CREATE TABLE `common` (
  `commonId` int(11) default NULL,
  `commonTitle` text,
  `commonContent` text,
  `adminPhone` varchar(300) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `common` */

insert  into `common`(`commonId`,`commonTitle`,`commonContent`,`adminPhone`) values (1,'缺乏耐性的孩子很少有幸福的感觉','孩子正在堆砌积木，他的计划是砌一间好看的房子，如果这时候正好要开饭了，一些家长可能觉得按时吃饭非常重要，就会毫不留情地吩咐孩子放弃手中的活计，先吃饭。这样的事情很常见，孩子的情绪也许不会有太大的波动，可能大家都不会在意，但是如果发生的多了，会给孩子内心留下太多不能完整做完的事情，正所谓习惯成自然，以后孩子做事情就更容易被外物影响，不能耐心地处理。因此，身为父母要理清楚想要向孩子表达什么，然后有条理清楚地跟孩子说明，并观察他的反应及倾听他的想法，把事情“商量”好，比较重要的事情，要看着他的眼睛跟他说。是的，也许你很忙，但是跟孩子沟通的时候，自己一定要保持有耐心，就好像你正在与客户沟通一样。','15865656565'),(2,'了解孩子让爱更加有意义','幼儿从1岁到6岁的成长过程，就像心电图一样，起起落落。作为家长我们须了解这个过程，在孩子不同的成长阶段，给予帮助和关心。我们都讨厌那些不在自己控制范围的事情，所以在孩子成长这个问题上，我们要做到心中有数，这样我们就可以平心静气的来对待。 1岁到2岁的幼儿喜欢：“不”字当头、打滚撒赖、一意孤行、占有欲强、自私霸道。','15865656565'),(3,'孩子受不批评怎么办','孩子出现这种行为的原因是由于孩子过于好强，受挫折能力差的原因。孩子适度的好胜心可以给孩子提供发展的动力，但是，如果过于好胜，就可能导致人际关系差、受挫能力弱等问题。您的孩子能接受别人的批评，甚至因此攻击别人的人，这种行为非常不利于孩子形成乐观、开朗、豁达的性格。对孩子的问题，我们要通过有意识的引导来帮助孩子向好的方向发展。','15865656565'),(4,'孩子是父母的镜子','俗话说：言传身教，身教重于言教。家庭是孩子的第一所学校，家长是孩子的首任教师，是孩子模仿的榜样。家长的思想观念、文化素质和举止言行，无时无刻都在影响着孩子，可以说家长是孩子的镜子，孩子是家长的影子。','15865656565'),(5,'孩子是否拥有人格','要教女孩成为女人、男孩成为男人，得教一辈子。父母忘了教、懒得教、厌倦了教，孩子们也会照样一天天长大。父母在教育孩子中有许多捷径可走，有许多逃避的理由，但孩子为入的现实，总有父母教育成功和失败的痕迹，让父母为之骄傲或为之汗颜。','15865656565'),(6,'培养孩子的习惯','习惯，是一种长期形成的思维方式、处世态度，习惯有一种韧性，不管是好习惯还是坏习惯，都将陪伴着孩子一生，影响他们的一生。可见，习惯的重要性。教育，就是要养成一个好习惯。从小养成好习惯，优良素质便犹如天性一样坚不可摧。','15865656565'),(7,'家长为什么“不合格”','优秀家长具备5颗心：1对孩子有极大的耐心。2有原则的爱心。3坚持不懈的恒心。4细致的关心。5保持童心。','15865656565'),(8,'提高跟孩子相处的质量','　如果你只有有限的时间和孩子在一起，当然质量越高越好。但是不能把这个概念绝对化，因为你不可能把太少的时间规划得很好，比如你只有一小时的时间，而孩子正在睡觉或者正是看动画片的时间，你又怎么来提高质量呢?所以质量时间也不是万能的。','15833332222'),(9,'家庭亲子阅读的8个好处','　1.增进感情\r\n　　孩子自从懂事以来，最先接触的人，就是父母，双方经由书籍的阅读，必能分享彼此的感动，在无形中增进了感情。\r\n　　2.增强语言能力\r\n　　喜爱阅读的孩子的语言能力特强，在听、说、读、写方面，远较不爱阅读的孩子高，孩子从书中领悟复杂的意念，欣赏语言的美妙。\r\n　　3.学习协调沟通能力\r\n　　自小培养与同侪或亲长间的协调沟通能力，对于孩子而言，是一项极为重要的事情，除了在日常生活中点滴学习外，透过书本的阅览，从其中获得启示，也是一种很好的方式。\r\n　　4.增加知识\r\n　　阅读可以使孩子涉猎多方面的知识，例如：文学、历史、地理、科学、政治等，增广见闻，对学习大有裨益。\r\n　　5.提升写作能力\r\n　　喜欢阅读的中小学生掌握了语言文字的能力，往往超越同级同学，不必背诵、强记课文而能取得好成绩，在校外考试也能取得佳积，因为阅读提升了写作的能力。\r\n　　6.经验传承交流\r\n　　亲子间共读以彼此的生活经验做分享、交流及共同讨论，从中获得想法与心得，同时相互解决问题与困惑。','15833332222'),(10,'请不要忽视孩子的提问','正视孩子的提问','15833332222'),(11,'九个建议让您更加亲近孩子','1、倾听你孩子喜欢学校哪些方面','15833332222'),(13,'提高跟孩子相处的质量','　如果你只有有限的时间和孩子在一起，当然质量越高越好。但是不能把这个概念绝对化，因为你不可能把太少的时间规划得很好，比如你只有一小时的时间，而孩子正在睡觉或者正是看动画片的时间，你又怎么来提高质量呢?所以质量时间也不是万能的。','15833332222'),(14,'孩子是否拥有人格','要教女孩成为女人、男孩成为男人，得教一辈子。父母忘了教、懒得教、厌倦了教，孩子们也会照样一天天长大。父母在教育孩子中有许多捷径可走，有许多逃避的理由，但孩子为入的现实，总有父母教育成功和失败的痕迹，让父母为之骄傲或为之汗颜。','15833332222'),(NULL,'hah ','haha',NULL);

/*Table structure for table `cooperation` */

DROP TABLE IF EXISTS `cooperation`;

CREATE TABLE `cooperation` (
  `username` varchar(30) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `company` varchar(100) default NULL,
  `email` varchar(100) default NULL,
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `cooperation` */

insert  into `cooperation`(`username`,`phone`,`company`,`email`,`province`,`city`) values ('赵璐露','13813479864','阳光学前教育机构','2285277810@qq.com','北京','东城'),('大苹果','15062191022','阳光学前教育机构','2502316814@qq.com','广东','广州'),('孙文','18796258525','阳光学前教育机构','2286152@qq.com','江苏','无锡'),('习倩','15062191022','阳光学前教育机构','2286152@qq.com','江西','赣州'),('大屏','13913479864','阳光学前教育机构','2286152@qq.com','黑龙江','大庆'),('大大','32112412414','阳光学前教育机构','2286152@qq.com','内蒙古','赤峰'),('大大','32112412414','阳光学前教育机构','2286152@qq.com','内蒙古','赤峰'),('哈哈','17823762183','阳光学前教育机构','2286152@qq.com','重庆','涪陵'),('哈哈','41412412412','阳光学前教育机构','2286152@qq.com','请选择省份名','请选择城市名'),('大的','13521312312','阳光学前教育机构','2286152@qq.com','北京','朝阳'),('卡卡','13813479864','阳光学前教育机构','2286152@qq.com','天津','西青'),('卡卡','13813479864','阳光学前教育机构','2286152@qq.com','天津','西青'),('发生','12321414124','阳光学前教育机构','2286152@qq.com','上海','黄浦'),('发生','12321414124','阳光学前教育机构','2286152@qq.com','上海','黄浦'),('发生','12321414124','阳光学前教育机构','2286152@qq.com','上海','黄浦'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('鱼鱼','13812781738','阳光学前教育机构','2286152@qq.com','北京','东城'),('哈哈','13551515151','阳光学前教育机构','2286152@qq.com','北京','东城'),('哈哈','13551515151','阳光学前教育机构','2286152@qq.com','北京','东城'),('发发','14411511141','阳光学前教育机构','2286152@qq.com','吉林','辽源'),('发发','14411511141','阳光学前教育机构','2286152@qq.com','吉林','辽源'),('发发','14411511141','阳光学前教育机构','2286152@qq.com','吉林','辽源'),('发发','14411511141','阳光学前教育机构','2286152@qq.com','吉林','辽源'),('赵璐露','15062191022','阳光学前教育机构','2286152@qq.com','请选择省份名','请选择城市名'),('赵璐露','13813479864','阳光学前教育机构','2286152@qq.com','天津','和平');

/*Table structure for table `dynamic` */

DROP TABLE IF EXISTS `dynamic`;

CREATE TABLE `dynamic` (
  `dynamicId` int(10) NOT NULL auto_increment,
  `dynamicContent` text,
  `dynamicDateTime` varchar(50) default NULL,
  `dynamicLikeNum` int(10) default '0',
  `userPhone` varchar(20) NOT NULL,
  PRIMARY KEY  (`dynamicId`),
  KEY `dynamic_ibfk_1` (`userPhone`),
  CONSTRAINT `dynamic_ibfk_1` FOREIGN KEY (`userPhone`) REFERENCES `user` (`userPhone`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `dynamic` */

insert  into `dynamic`(`dynamicId`,`dynamicContent`,`dynamicDateTime`,`dynamicLikeNum`,`userPhone`) values (1,'翠翠是一个天真善良、温柔清纯、聪明乖巧的少女。自幼父母双亡的她和外公相依为命，对外公关心备至。','2016-11-06 20:32:01',0,'13813479864'),(2,'因为外公不理解她的心事，虽然有外公无微不至照顾自己，但是并不能真正理解她作为一个青春少女的情怀，内心无比孤独。','2016-11-06 20:34:42',0,'13813479864'),(3,'她情窦初开，爱上了傩送，感情纯洁真挚。但少女的羞涩又使她难以明确表达。面对爷爷的委婉引导，旁敲侧击的询问，虽心知肚明，却又闪烁其辞地表明态度。','2016-11-06 20:35:22',0,'15138801111'),(4,'但是并不能真正理解她作为一个青春少女的情怀，内心无比孤独。她情窦初开，爱上了傩送，感情纯洁真挚。','2016-11-06 20:36:58',0,'15138801111'),(5,'但少女的羞涩又使她难以明确表达。面对爷爷的委婉引导，旁敲侧击的询问，虽心知肚明，却又闪烁其辞地表明态度。','2016-11-06 20:37:58',0,'15062191022'),(6,'总之，翠翠是一个善良聪慧温婉多情的少女，外表的温婉羞涩与内心的炽热多情融为一体，是一个成功而又独特的人物形象。','2016-11-06 20:38:24',0,'15062191022'),(7,'爷爷是中国传统美德的典范。他善良纯朴、热心好客、甘守清贫、尽职尽责。对孙女无比疼爱。为翠翠的亲事操心担忧，尽力促成翠翠爱情的实现。','2016-11-06 20:44:18',0,'15138802222'),(9,'在感情上尽力体谅翠翠的心思，翠翠忧伤寂寞时为她讲故事、说笑活、唱歌。外公因为女儿和女婿的悲剧，在他心里留下不可磨灭的伤痕。','2016-11-06 20:45:48',0,'13813479864'),(13,'天保个性豪爽、慷慨。他是船总的大儿子，却爱上了贫苦摆渡人的孙女。','2016-11-06 20:56:25',0,'13813479864');

/*Table structure for table `dynamicpic` */

DROP TABLE IF EXISTS `dynamicpic`;

CREATE TABLE `dynamicpic` (
  `PicId` int(10) NOT NULL auto_increment,
  `dynamicId` int(10) default NULL,
  `dynamicPic` varchar(2000) default NULL,
  PRIMARY KEY  (`PicId`),
  KEY `dynamicpic_ibfk_1` (`dynamicId`),
  CONSTRAINT `dynamicpic_ibfk_1` FOREIGN KEY (`dynamicId`) REFERENCES `dynamic` (`dynamicId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

/*Data for the table `dynamicpic` */

insert  into `dynamicpic`(`PicId`,`dynamicId`,`dynamicPic`) values (1,1,'c05a2393-088d-4da7-babd-5fae34702c4f.jpg'),(2,1,'a9023510-e320-4769-be44-843f55d54e9b.jpg'),(3,1,'ae4d507c-17c7-4e90-8065-ebdbffe723b7.jpg'),(4,2,'88ffa96a-22ab-4cf3-a00d-854b6ec35e60.jpg'),(5,2,'06928bcd-e91f-46fc-bcf0-642f1380e4c6.jpg'),(6,3,'c40d7abd-491a-43b6-bf50-2c48dd005a73.jpg'),(7,3,'fc38e54e-c3a9-400d-a146-243cf284b67e.jpg'),(8,4,'c1d988de-c727-4383-ae7e-1c43fcfaf92a.jpg'),(9,4,'b6cd20d4-c851-49b1-9791-7db32e0382d6.jpg'),(10,5,'843a9dbc-297c-48d4-b2be-10489010438d.jpg'),(11,5,'735b0ff0-d841-43ba-a295-762a89c2d5b5.jpg'),(12,6,'e140327e-6996-4206-9976-3153b07f120d.jpg'),(13,6,'a97aef74-db5c-4dfc-b833-3616ea20007d.jpg'),(14,7,'b6cf0b52-2104-4e44-bb9c-dfc6c5aa0842.jpg'),(15,7,'c62883a2-466b-4e0b-bf03-e8295b4aa441.jpg'),(17,9,'3acc24f1-1003-427c-b0b2-4e202acda5e0.jpg'),(18,9,'a4fffe73-848f-4cac-8ea9-c1c214c668f2.jpg'),(24,13,'c02fe05d-1da6-4387-8b55-54a50d76dbcd.jpg'),(25,13,'23317437-19f6-44fc-8d5a-5e43218fa53b.jpg');

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `newsId` int(10) default NULL,
  `newsTitle` text,
  `newsPic1` varchar(40) default NULL,
  `newsPic2` varchar(40) default NULL,
  `newsContent` text,
  `adminPhone` varchar(30) default NULL,
  `newsDateTime` varchar(30) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `news` */

insert  into `news`(`newsId`,`newsTitle`,`newsPic1`,`newsPic2`,`newsContent`,`adminPhone`,`newsDateTime`) values (1,'中秋节，月儿圆，人团圆：上海幼儿园中班中秋报道','news001-1.jpg','news001-2.jpg',' 一年一度的中秋节是中华民族的传统佳节，中秋节不仅月儿圆圆，更是合家团圆的时刻，值此佳节来临之际，上海幼儿园全体中班的孩子举行以“高高兴兴过中秋”为主题的迎中秋主题活动。','15865656565','2016-9-27    21:43'),(2,'长桥二幼中班幼儿语言发展：“故事大王”讲故事','news001-2.jpg','news001-1.jpg','  近日，长桥第二幼儿园中三班的小朋友们在班中举行了“故事大王”讲故事的班级活动，受到了小朋友的热烈欢迎。\r\n\r\n    4~5幼儿期是孩子语言发展的关键期。《纲要》在语言领域中强调“发展幼儿语言关键是创设一个能使他们想说、敢说、喜欢说、有机会说的环境。”为此，中三班的老师们策划了“故事大王讲故事”的活动，旨在为幼儿营造一个学说话、敢说话、会说话、勇于表达的语言氛围，为幼儿提供一个展现自我的舞台，提高幼儿的语言表达能力。在活动中，幼儿将自己阅读过的书籍、故事绘声绘色的向班中其他幼儿进行介绍、朗读。虽然在过程中有些许的紧张，但对于刚升入中班的幼儿而言，乐于上台展示自己就是跨出了成功的第一步。\r\n\r\n    园方表示：中班幼儿的语言发展旨在让孩子有想说、敢说、喜欢说的氛围和环境，我园的老师们愿意为孩子们提供、创造这样一个舞台。让孩子尽情的表现表达自己，相信孩子们的语言发展在这良好的环境下，会越来越好！','15865656565','2016-9-27    21:43'),(3,'长桥二幼中班幼儿语言发展：“故事大王”讲故事','news001-2.jpg','news001-1.jpg','  近日，长桥第二幼儿园中三班的小朋友们在班中举行了“故事大王”讲故事的班级活动，受到了小朋友的热烈欢迎。\r\n\r\n    4~5幼儿期是孩子语言发展的关键期。《纲要》在语言领域中强调“发展幼儿语言关键是创设一个能使他们想说、敢说、喜欢说、有机会说的环境。”为此，中三班的老师们策划了“故事大王讲故事”的活动，旨在为幼儿营造一个学说话、敢说话、会说话、勇于表达的语言氛围，为幼儿提供一个展现自我的舞台，提高幼儿的语言表达能力。在活动中，幼儿将自己阅读过的书籍、故事绘声绘色的向班中其他幼儿进行介绍、朗读。虽然在过程中有些许的紧张，但对于刚升入中班的幼儿而言，乐于上台展示自己就是跨出了成功的第一步。\r\n\r\n    园方表示：中班幼儿的语言发展旨在让孩子有想说、敢说、喜欢说的氛围和环境，我园的老师们愿意为孩子们提供、创造这样一个舞台。让孩子尽情的表现表达自己，相信孩子们的语言发展在这良好的环境下，会越来越好！','15865656565','2016-9-27    21:43'),(4,'长桥二幼中班幼儿语言发展：“故事大王”讲故事','news001-2.jpg','news001-1.jpg','  近日，长桥第二幼儿园中三班的小朋友们在班中举行了“故事大王”讲故事的班级活动，受到了小朋友的热烈欢迎。\r\n\r\n    4~5幼儿期是孩子语言发展的关键期。《纲要》在语言领域中强调“发展幼儿语言关键是创设一个能使他们想说、敢说、喜欢说、有机会说的环境。”为此，中三班的老师们策划了“故事大王讲故事”的活动，旨在为幼儿营造一个学说话、敢说话、会说话、勇于表达的语言氛围，为幼儿提供一个展现自我的舞台，提高幼儿的语言表达能力。在活动中，幼儿将自己阅读过的书籍、故事绘声绘色的向班中其他幼儿进行介绍、朗读。虽然在过程中有些许的紧张，但对于刚升入中班的幼儿而言，乐于上台展示自己就是跨出了成功的第一步。\r\n\r\n    园方表示：中班幼儿的语言发展旨在让孩子有想说、敢说、喜欢说的氛围和环境，我园的老师们愿意为孩子们提供、创造这样一个舞台。让孩子尽情的表现表达自己，相信孩子们的语言发展在这良好的环境下，会越来越好！','15865656565','2016-9-27    21:43'),(9,'中秋节，月儿圆，人团圆：上海幼儿园中班中秋报道','news001-1.jpg','news001-1.jpg',' 一年一度的中秋节是中华民族的传统佳节，中秋节不仅月儿圆圆，更是合家团圆的时刻，值此佳节来临之际，上海幼儿园全体中班的孩子举行以“高高兴兴过中秋”为主题的迎中秋主题活动。','15865656565','2016-9-27    21:43'),(NULL,'haha ','183ba459-8f6d-442d-a4ff-8f827f56f7d9.jpg',NULL,'haha','13813479864','2016-11-06 22:25:49');

/*Table structure for table `praise` */

DROP TABLE IF EXISTS `praise`;

CREATE TABLE `praise` (
  `praiseId` int(11) NOT NULL auto_increment,
  `dynamicId` int(11) NOT NULL,
  `userPhone` varchar(20) NOT NULL,
  PRIMARY KEY  (`praiseId`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;

/*Data for the table `praise` */

insert  into `praise`(`praiseId`,`dynamicId`,`userPhone`) values (116,219,'13813479864'),(118,219,'15062191022'),(119,218,'13813479864'),(120,9,'13813479864'),(121,12,'13813479864');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userId` int(10) NOT NULL auto_increment,
  `userType` varchar(20) default NULL,
  `userNickName` varchar(20) default NULL,
  `userPhone` varchar(20) NOT NULL,
  `userPassword` varchar(40) NOT NULL,
  `userSex` varchar(10) default NULL,
  `userDate` varchar(20) default NULL,
  `userPic` varchar(2000) default NULL,
  PRIMARY KEY  (`userPhone`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`userId`,`userType`,`userNickName`,`userPhone`,`userPassword`,`userSex`,`userDate`,`userPic`) values (16,'家长','赵璐露','13813479864','e10adc3949ba59abbe56e057f20f883e','女','1994-10-10','0509ba65-c40b-4ef1-ba7b-f3bcf000e556.jpg'),(17,'老师','习倩','15062191022','e10adc3949ba59abbe56e057f20f883e','女','1994-10-10','38eaf0f7-bb03-4903-ad1a-aa884cd44d07.jpg'),(10,'家长','大苹果','15138801111','e10adc3949ba59abbe56e057f20f883e','男','1993-11-26','3be026e4-ca5d-47dc-bd45-66d76c70d4fe.jpg'),(11,'家长','小明妈妈','15138801112','e10adc3949ba59abbe56e057f20f883e','女','1989-07-19','807ac000-32bb-453f-b37f-afd0a97fcdae.jpg'),(12,'家长','芷希妈妈','15138801122','e10adc3949ba59abbe56e057f20f883e','女','1989-08-18','54600f36-ec83-411e-be69-823b8435b8db.jpg'),(13,'老师','乔芸老师','15138802222','e10adc3949ba59abbe56e057f20f883e','女','1989-08-21','3202f920-105b-4590-9274-e2584ec7fd49.gif'),(14,'老师','孙静老师','15138803333','e10adc3949ba59abbe56e057f20f883e','女','1992-06-21','959562cc-f467-47af-82bd-9b7a3d3cce6e.jpg'),(15,'家长','赵晓晴爸爸','15138805555','e10adc3949ba59abbe56e057f20f883e','男','1988-05-14','c0e3bd60-15e0-4b82-85a3-70e7c7af255f.jpg'),(19,'老师','孙文','18796258525','e10adc3949ba59abbe56e057f20f883e','女','2016-11-03','d78fd90b-0acf-44a2-b83d-dafa6c633de4.jpg'),(18,'家长','孟丽','18796258537','e10adc3949ba59abbe56e057f20f883e','女','2016-11-03',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
