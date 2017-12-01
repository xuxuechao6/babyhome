
$(document).ready(function () {
    //提交
    $("#search").click(function () {
        //发送数据f
        // ajax() 方法通过 HTTP 请求加载远程数据。
        $.ajax({
            type: "GET",
            url: "comment",
            data: {dynamicId: $("#dynamicId").val()},
            dataType: "text",
            success: getData    //回调函数
        });
    });
});
function getData(result) {
//          $("#tbUser").html(result);
//           return;
    var comment = JSON.parse(result);  //字符串转 json对象；
    console.log(comment.length)
    //循环插入的JQ代码：
    var $table = $("#userComment");
    $table.html("");
    for (var i = 0; i < comment.length; i++) {
        $table.append("<tr>");
        $table.append("<td style='width: 90px'>" + comment[i].commentTime + "</td>");
        $table.append("<td style='width: 90px'>" + comment[i].userNickName + "</td>");
        $table.append("<td style='width: 400px'>" + comment[i].commentContent + "</td>");
        $table.append("</tr>");
    }
}