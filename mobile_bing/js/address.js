$(function() {

    // 保存地址信息
    var address = null;
    // 进来页面就去发送请求,
    $.ajax({
        type: "GET",
        url: "/address/queryAddress",
        success: function(res) {
            address = res;
            // res打印的是数组，里面包含对象
            console.log(res);
            var html = template("addressItem", { result: res });
            $("#addressInfo").html(html);
        }
    });



    // 将列表向左滑动，会出现编辑和删除按钮，
    // 点击删除按钮，弹出对话框，再点击确认，将删除所选中的数据
    // 利用时间委托的方式，给删除按钮注册事件
    $("#addressInfo").on("tap", ".delete-btn", function() {
        // 得到当前数据的id值
        var id = $(this).attr("data-id");
        // 获取当前列表(原生的写法)
        var li = this.parentNode.parentNode;
        // 点击删除按钮，弹出对话框,
        // 回调函数，参数会返回的对象，对象里面有个index属性，1表示确定，0表示取消
        mui.confirm("您确定要删除吗？", function(message) {
            if (message.index == 1) {
                // 点击了删除 将列表的id传到后台进行删除数据
                $.ajax({
                    type: "POST",
                    url: "/address/deleteAddress",
                    data: {
                        id: id
                    },
                    success: function(res) {
                        if (res.success) {
                            // 删除dom元素或者刷新页面
                            location.reload();
                        }
                    }
                });
            } else {
                // 点击取消按钮，回复列表默认样式（没有左滑动的样式）
                // mui提供的方法：关闭列表滑动效果，参数为关闭的是哪个元素
                mui.swipeoutClose(li);
            }

        });
    });


    // 点击编辑按钮，获取当前列表的信息，跳转到编辑页面进行编辑
    $("#addressInfo").on("tap", ".edit-btn", function() {
        // 获取当前列表的id值
        var id = $(this).attr("data-id");
        // 遍历地址信息数组，找到和当前点击信息的id值对应的那条信息
        for (var i = 0; i < address.length; i++) {
            if (address[i].id == id) {
                // 将这条信息存储到本地缓存： localStorage.setItem(名字， 值)
                localStorage.setItem("localAddress", JSON.stringify(address[i]));
                // 并退出循环
                break;
            }
        }
        // 跳转编辑页面，去除缓存中的数据进行编辑
        location.href = "edit.html";
    });
});