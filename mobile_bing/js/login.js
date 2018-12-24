$(function() {
    $("#login-btn").on("click", function() {
        var username = $('[name="username"]').val();
        var password = $('[name="password"]').val();

        if (!username) {
            mui.toast("请输入用户名");
            return;
        }
        if (!password) {
            mui.toast("请输入密码");
            return;
        }

        $.ajax({
            type: "POST",
            url: "/user/login",
            data: {
                username: username,
                password: password
            },
            success: function(res) {
                console.log(res);
                // 判断是否登录成功
                if (res.error && res.error == 403) {
                    mui.toast(res.message);
                    return;
                } else {
                    mui.toast("登陆成功");
                    $("#login-btn").text("正在登陆...");
                    setTimeout(function() {
                        location.href = "user.html";
                    }, 2000);
                }
            }
        });
    });
});