     $(document).ready(function () {

     $("#butn").click(function(){
         var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
         if(IsBy){
             $("#text").html("输入正确")

             $("#loginForm").validate({
                 rules: {
                     adminPhone: {
                         required: true,//必填
                         minlength: 11, //最少6个字符
                         maxlength: 11,//最多20个字符
                     },
                 },
                 messages: {
                     adminPhone: {
                         required: "请输入手机号",
                         minlength: "手机号至少为11个字符",
                         maxlength: "手机号至多为11个字符",
                     },
                 },
             })
             jQuery.validator.addMethod("phone_number", function(value, element) {
                 var length = value.length;
                 var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/
                 return this.optional(element) || (length == 11 && phone_number.test(value));
             }, "手机号码格式错误");
         }else {
             $("#text").html("输入错误")
         }
     })

});
