
function JqValidate()
{
    return $( '#frmUploadFile' ).validate({
        rules:{
            userPhone:{
                required:true,
                minlength : 11,
                maxlength:11,
                digits:true,//整数
            },
            userPassword:{
                required:true,
                minlength:3,
                maxlength:32,
            },
            userNickName:{
                required:true,
                minlength:2,
            },
            userDate:{
                required:true,
                date:true,
            },
        },
        messages:{
            userPhone:{
                required:"请输入手机号码",
                phone_number:"请输入正确的手机号码",
                minlength : "请输入正确的手机号码",
                digits:"请输入正确的手机号码",
            },
            userPassword:{
                required:"必须填写密码",
                minlength:"密码至少为3个字符",
                maxlength:"密码至多为32个字符",
            },
            userNickName:{
                required:"必须填写密码",
                minlength:"密码至少为2个字符",
                maxlength:"密码至多为32个字符",
            },
            userDate:{
                required:"必须填写出生日期",
                date: "请输入有效的日期",
            },

        },
    });
}
function uploadFile()
{
    if( JqValidate() ){
        $( '#frmUploadFile' ).submit();
    }
}