$(function() {
    //点击注册按钮之后，获取用户输入的信息
    $("#register-btn").on("click", function() {
        // 获取用户输入的信息
        var username = $('[name = "username"]').val();
        var mobile = $('[name = "mobile"]').val();
        var password = $('[name = "password"]').val();
        var againPass = $('[name = "againPass"]').val();
        var vCode = $('[name = "vCode"]').val();
        // 验证输入的信息是否符合规定
        if (!username) {
            mui.toast("用户名不能为空");
            return;
        }
        if (mobile.length < 11) {
            mui.toast("请输入合法的手机号");
            return;
        }
        if (!password) {
            mui.toast("密码不能为空");
            return;
        }
        if (password != againPass) {
            mui.toast("密码不一致，请重新输入");
            return;
        }
        if (!vCode) {
            mui.toast("验证码不能为空");
            return;
        }



        // 点击注册按钮，实现注册功能
        $.ajax({
            type: "POST",
            url: "/user/register",
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            success: function(res) {
                mui.toast("注册成功");
                setTimeout(function() {
                    // location.href = "login.html";
                }, 2000);
            }
        });

    });

    // 点击获取验证码，向后台发送请求，获取验证码
    var vlock = true;

    $("#getCode").on("click", function() {

        // 测试代码
        // 点击了发送请求，就让按钮处于不能点击状态，并进行倒计时
        // var num = 5;
        // var timerId = setInterval(function() {
        //     num--;
        //     $(this).text(num + "秒后重试");
        // }, 1000);
        if (vlock) {
            vlock = false;
            $("#getCode").text("正在请求...");
            setTimeout(function() {
                vlock = true;
                $("#getCode").text("获取验证码");
            }, 3000)
        } else {
            return;
        }

        // 发送请求
        $.ajax({
            type: "GET",
            url: "/user/vCode",
            success: function(res) {
                console.log(res.vCode);
            }
        });
    });
});