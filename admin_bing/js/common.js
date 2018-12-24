// 登录拦截，需要页面结构加载完毕之前就要进行判断
// 所以写到入口函数外面
$.ajax({
    type: "GET",
    url: "/employee/checkRootLogin",
    async: false,
    success: function(res) {
        // console.log(res);

        if (res.error && res.error == 400) {
            location.href = "login.html";
        }
    }
});

$(function() {
    // 登出请求
    $(".login_out_bot").on("click", function() {
        if (confirm("确定要退出吗？")) {
            $.ajax({
                url: "/employee/employeeLogout",
                type: "GET",
                success: function(res) {
                    if (res.success) {
                        // 退出成功，跳转到登录页面
                        location.href = "login.html";
                    } else {
                        alert(res.message);
                    }
                }
            });
        }
    });

    // 伸缩项的处理
    var navLi = $('.navs li')

    navLi.on('click', function() {

        $(this).find('ul').slideToggle();

    });

});