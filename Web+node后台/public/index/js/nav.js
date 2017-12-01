$(document).ready(function(){
    $.get("/users/Session",function(data,status){
        console.log("数据: " + data + "\n状态: " + status);
        $("#Info").html(data);
    });
});
