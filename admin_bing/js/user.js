$(function() {

    /*
        页面加载就请求数据，渲染页面
            1、发送请求
            2、渲染页面
    */
    $.ajax({
        url: "/user/queryUser",
        type: "GET",
        data: {
            page: 1,
            pageSize: 10
        },
        success: function(res) {
            // console.log(res);
            var html = template("userItem", res);
            // console.log(html);
            $("#userBox").html(html);
        }
    });



    /*
        用户状态的管理
            1、获取禁用按钮
            2、判断当前的状态是禁用还是启用
            3、发送请求，更改用户的状态
            4、让页面做出响应
    */
    $("#userBox").on("click", ".edit-btn", function() {
        // console.log(typeof $(this).attr("data-isdelete"))
        var isdelete = Number($(this).attr("data-isdelete"));
        // 获取自定义属性的另一种方法
        var id = $(this).data("id");

        $.ajax({
            url: "/user/updateUser",
            type: "POST",
            data: {
                id: id,
                isDelete: isdelete ? 0 : 1
            },
            success: function(res) {
                console.log(res);
                if (res.success) {
                    location.reload();
                    // console.log(123);
                }
            }
        });
    });
});