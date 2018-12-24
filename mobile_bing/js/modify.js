$(function() {
    /*
        保存用户输入的密码，并将新的密码更新到数据库中，
        确认密码之后，跳转到登录页面进行重新登录
    */
    //    当点击确认修改密码的时候，才会去保存用户所输入的内容，发送请求
    $("#sure-btn").on("tap", function() {
        // 保存用户输入的密码、
        var oldPassword = $.trim($('[name="orginPassword"]').val());
        var newPassword = $.trim($('[name="newPassword"]').val());
        var confirmNewPassword = $.trim($('[name="confirmNewPassword"]').val());
        var vCode = $.trim($('[name="vCode"]').val());
        // 验证用户输入的密码
        if (!oldPassword) {
            mui.toast("请输入原密码");
            return;
        }
        if (!newPassword) {
            mui.toast("请输入新密码");
            return;
        }
        if (newPassword != confirmNewPassword) {
            mui.toast("新密码与确认密码不一致，请重新输入");
            return;
        }
        // 当验证通过，发送异步请求
        $.ajax({
            type: "POST",
            url: "/user/updatePassword",
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword,
                vCode: vCode
            },
            success: function(res) {
                console.log(res);
                setTimeout(function() {
                    location.href = "login.html";
                }, 2000);
            }
        });
    });


    // 获取验证码
    var label = true;
    $("#getCode").on("tap", function() {
        // 当点击的时候，判断是否已经点击过了
        if (label) {
            // 若没有点击过，那么这次点击就记录下
            label = false;
            $("#getCode").text("正在请求...");
            // 3秒钟后解锁
            setTimeout(function() {
                label = true;
                $("#getCode").text("获取验证码");
            }, 3000);
        } else {
            // 如果点击过了，就让按钮处于不能点击的状态
            // 直接退出
            return;
        }
        $.ajax({
            type: "GET",
            url: "/user/vCodeForUpdatePassword",
            success: function(res) {
                console.log(res.vCode);
            }
        });
    });

});