/**
 * Created by 土豆豆 on 2016/10/26.
 */
var flag = true;
var test = document.getElementById('myfile');
test.addEventListener('change', function() {
    var t_files = this.files;
    var str = '<table style="border: 1px solid blue;width:500px">';
    for (var i = 0, len = t_files.length; i < len; i++) {
        console.log(t_files[i]);

        //========================大小和类型判断========================
        var extStart = t_files[i].name.lastIndexOf(".");
        var ext = t_files[i].name.substring(extStart, t_files[i].name.length).toUpperCase();
        if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
            //alert("图片限于bmp,png,gif,jpeg,jpg格式");
            $("#fileSize").html("图片限于bmp,png,gif,jpeg,jpg格式！");
            $("#spanMessage").html("");
            flag = false;
            return;
        } else {
            $("#fileSize").html("");
            $("#spanMessage").html("");
            flag = true;
        }
        var file_size = 0;
        file_size = t_files[i].size;
        var size = file_size / 1024;
        if (size > 1024) {
            //alert("上传的图片大小不能超过1M！");
            $("#fileSize").html("上传的图片大小不能超过1M！");
            $("#spanMessage").html("");
            flag = false;
            return;
        } else {
            var num01 = file_size / 1024;
            num02 = num01.toFixed(2);
            //$("#fileSize").text(num02 + " KB");
            $("#fileSize").html("");
            $("#spanMessage").html("");
            flag = true;
        }
        //===============================================================
        str += '<tr style="color:#000">';
        str += '<td><a href="javascript:void(0)" style="color:#000">' + t_files[i].name + '</a></td>';
        str += '<td>' + t_files[i].size + '</td>';
        str += '<td>' + t_files[i].type + '</td>';
        str += '</tr>';

    };
    str += '</table>';
    document.getElementById('spanMessage').innerHTML = str;

}, false);


function uploadFile() {
    //判断文件是否符合，是否有文件？？？
    var x1 = $("#text1").val();
    var len = x1.length;
    if (len == 0){
        $("#spanMessage").html("内容不能为空~~");
    }
    else if (flag){
        var formData = new FormData($("#frmUploadFile")[0]);
        $.ajax({
            url:config.URL+ 'userJSON/dynamicUpload?userPhone='+sessionStorage.getItem("session_userPhone"),
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function () {
                    $("#spanMessage").html("上传成功！");
            },
            failure: function () {
                $("#spanMessage").html("与服务器通信发生错误");
            }
        });
    }
    else {
        $("#spanMessage").html("请选择正确的图片!");
    }
}
