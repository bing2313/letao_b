// 存储用户信息
var userInfo = null;
// 登录成功之后，将用户的信息渲染到页面上
// ,但是如果没有登录就需要跳转到登录强制让用户登录
// 所以在页面加载之前，就要验证用户是否登录，
// 若没有登录，就跳转页面让用户登录
$.ajax({
    type: "GET",
    url: "/user/queryUserMessage",
    async: false,
    success: function(res) {
        console.log(res);
        if (res.error && res.error == 400) {
            // 如果没有登录，跳转页面
            location.href = "login.html";
        }
        // 如果登录，就保存用户信息，渲染到页面上
        userInfo = res; // res 打印的是对象
    }
});


$(function() {

    // 退出登录
    $("#logout-btn").on("click", function() {
        $.ajax({
            type: "GET",
            url: "/user/logout",
            success: function(res) {
                console.log(res);

                // 退出成功，跳转到注册页面
                setTimeout(function() {
                    location.href = "index.html";
                }, 2000);
            },
            error: function() {
                mui.toast("退出登录失败");
            }
        });
    });
    var html = template("userItem", userInfo);
    $("#userInfo").html(html);
});