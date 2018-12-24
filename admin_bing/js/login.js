// 当之前已经登录过，用户在进入登录页面的时候，自动跳转到user页面
$.ajax({
    type: "GET",
    url: "/employee/checkRootLogin",
    async: false,
    success: function(res) {
        console.log(res);

        if (res.success) {
            location.href = "user.html";
        }
    }
});


$(function() {
    /* 
        登录账号思路
            1、获取登录按钮，注册点击事件
            2、获取用户输入的表单信息，处不能进行验证
            3、发送请求，验证数据库
    */
    $("#loginBtn").on("click", function() {
        //    获取表单信息
        var username = $.trim($('[name = "username"]').val());
        var password = $.trim($('[name = "password"]').val());
        // 基本验证
        if (!username) {
            alert("请输入用户名");
            return;
        }
        if (!password) {
            alert("请输入密码");
            return;
        }
        // 发送请求
        $.ajax({
            type: "POST",
            url: "/employee/employeeLogin",
            data: {
                username: username,
                password: password
            },
            success: function(res) {
                if (res.success) {
                    // 登陆成功，跳转页面
                    location.href = "user.html";
                } else {
                    // 登录失败，显示提示信息
                    alert(res.message);
                }
            }
        });
    });

});