function check_name() {
    var yonghuming = document.getElementById("yonghuming").value.trim();
    var len = yonghuming.length;
    if (len < 6) {
        document.getElementById("text1").innerText = "用户名不得少于6个字";
        document.getElementById("text1").style.color = "red";
    }
    else {
        var isRight = true;
        for (var i = 0; i < len; i++) {
            ch = yonghuming.substr(i, 1);
            if (ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch == '_') {
                continue;
            }
            else {
                isRight = false;
            }
        }
        if (isRight == true) {
            document.getElementById("text1").innerHTML = "可用!";
            document.getElementById("text1").style.color = "green";
        }
        else {
            document.getElementById("text1").innerHTML = "含有非法字符!";
            document.getElementById("text1").style.color = "red";

        }
    }
}

function  check_pwd() {
    var pwd = document.getElementById("pwd").value.trim();
    var len = pwd.length;
    if (len < 6) {
        document.getElementById("text2").innerText = "密码不得少于6位";
        document.getElementById("text2").style.color = "red";
    }
    else {
        var isRight = true;
        for (var i = 0; i < len; i++) {
            ch = pwd.substr(i, 1);
            if (ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch == '_') {
                continue;
            }
            else {
                isRight = false;
            }
        }
        if (isRight == true) {
            document.getElementById("text2").innerHTML = "可用!";
            document.getElementById("text2").style.color = "green";
        }
        else {
            document.getElementById("text2").innerHTML = "含有非法字符!";
            document.getElementById("text2").style.color = "red";

        }
    }
}
function check_pwd2() {
    var pwd=document.getElementById("pwd");
    var pwd2=document.getElementById("pwd2");
    if(pwd.value!=pwd2.value){
        document.getElementById("pwd2").style.outline="solid 1px red";
        document.getElementById("text3").innerHTML="两次密码输入不一致";
        document.getElementById("text3").style.color="red";}
}
function check_email(){
    var em=document.getElementById("email");

    if(em.value.indexOf("@")==-1){
//                alert("请输入包含“@”的正确邮箱");

        document.getElementById("email").style.outline="solid 1px red";
        document.getElementById("text4").innerHTML="请输入包含“@”的正确邮箱";
        document.getElementById("text4").style.color="red";
    }
    else
    {var isRight=true;
        if (isRight == true) {
            document.getElementById("text4").innerHTML = "可用!";
            document.getElementById("text4").style.color = "green";
        }
    }
}
function check_num() {
    var num=document.getElementById("num");
    if(num.value.length!=11){
        document.getElementById("num").style.outline="solid 1px red";
        document.getElementById("text5").innerHTML="请输入正确的手机号";
        document.getElementById("text5").style.color="red";
    }
    else
    {var isRight=true;
        if (isRight == true) {
            document.getElementById("text5").innerHTML = "可用!";
            document.getElementById("text5").style.color = "green";
        }
    }
}
