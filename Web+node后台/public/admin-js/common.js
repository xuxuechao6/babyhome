﻿//打开字滑入效果
window.onload = function(){
	$(".connect p").eq(0).animate({"left":"0%"}, 600);
	$(".connect p").eq(1).animate({"left":"0%"}, 400);
};
//jquery.validate表单验证
$(document).ready(function(){
	//登陆表单验证
	$("#loginForm").validate({
		rules:{
			adminPhone:{
				required:true,//必填
				minlength:11, //最少6个字符
				maxlength:11,//最多20个字符
			},
			adminPassword:{
				required:true,
				minlength:3, 
				maxlength:32,
			},
		},
		//错误信息提示
		messages:{
			adminPhone:{
				required:"请输入手机号",
				minlength:"手机号至少为11个字符",
				maxlength:"手机号至多为11个字符",
			},
			adminPassword:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
		},

	});
	//注册表单验证
	$("#registerForm").validate({
		rules:{

			adminPhone:{
					required:true,
					phone_number:true,//自定义的规则
					digits:true,//整数
				},
			adminName:{
				required:true,
				maxlength:10,
			},
			adminPassword:{
					required:true,
					minlength:3,
					maxlength:32,
				},
			readminPassword:{
					required:true,
					minlength:3,
					equalTo:'.adminPassword'
				}
		
		},
		//错误信息提示
		messages:{
			adminPassword:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
			adminName:{
				required: "请输入姓名",
				maxlength:"请输入正确的姓名",
			},
			readminPassword:{
				required: "请再次输入密码",
				minlength: "确认密码不能少于3个字符",
				maxlength:"密码至多为32个字符",
				equalTo: "两次输入密码不一致",//与另一个元素相同
			},
			adminPhone:{
				required:"请输入手机号码",
				digits:"请输入正确的手机号码",
			},
			
		},
	});
	//添加自定义验证规则
	jQuery.validator.addMethod("phone_number", function(value, element) {
		var length = value.length; 
		var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/
		return this.optional(element) || (length == 11 && phone_number.test(value));
	}, "手机号码格式错误"); 
});
