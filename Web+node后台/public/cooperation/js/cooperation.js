window.onload = function () {
    var title = document.querySelector("#banner .text"); //顶部文字进入特效
    var m = document.querySelector("#join");
    var xLine = document.querySelector(".xLine");   //下部文字进入特效
    var yLine = document.querySelector(".yLine");//下部文字进入特效
    var dls = document.querySelectorAll("#join dl");//下部文字进入特效
    var html = document.querySelector("html");   //获取页面
    var a = document.documentElement.scrollTop || document.body.scrollTop;
    var c = document.querySelectorAll(".line");
    //顶部文字和页面抖动
    if (a < 300) {
        title.style.transition = "0.2s all ease-in";
        title.style.width = "800px";
        title.style.opacity = "1";
        title.num = 0;
        title.addEventListener("transitionend", function () {
            title.num++;
            if (title.num <= 1) {
                var html = document.querySelector("html");
                html.style.animation = "0.3s shake"
            }
        })
    } else {
        title.style.width = "800px";
        title.style.opacity = "1"
    }

    r(a);
    function r(H) {
        for (var G = 0; G < c.length; G++) {
            if (H > c[G].offsetTop - 300) {
                c[G].style.transform = "scaleX(1)"
            }
        }
    }

    var x = 0;
    d(a);
    function d(H) {
        if (H > m.offsetTop - 150) {
            x++;
            if (x > 1) {
                return
            }
            xLine.style.transform = "scale(1)";
            yLine.style.transform = "scale(1)";
            for (var i = 0; i < dls.length; i++) {
                dls[i].style.transform = "scale(1)"
            }
        }
    }
    window.onscroll = function () {
        var j = document.documentElement.scrollTop || document.body.scrollTop;
        r(j);
        d(j);
    };
}