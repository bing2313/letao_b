$(function() {


    // 存储库存的数量
    var proNum = null;

    // 产品的数量
    var num = 1;

    // 产品的尺码
    var size = null;

    // 拿到用户传递的id，发送后台请求数据，成功之后渲染页面
    var id = getParamsByUrl(location.href, 'id');
    console.log(id);
    // 发送数据到后台，查询信息
    $.ajax({
        url: "/product/queryProductDetail",
        type: "GET",
        data: {
            id: id
        },
        success: function(res) {
            if (res) {
                // 将库存的数量保存到全局变量中，方便下面使用
                proNum = res.num;
                // res本身就是个对象
                // console.log(res);
                // 如果有数据，渲染页面
                var html = template("productDetai", res);
                // console.log(html);
                $("#productDetailBox").html(html);
                var repertoryHTML = template("repertory", res);
                $("#proRepertory").html(repertoryHTML);
            }
        }
    });

    // 选择尺码事件,点击高亮显示
    $("#productDetailBox").on("tap", ".product-size span", function() {
        $(this).addClass("active").siblings("span").removeClass("active");
        size = $(this).text();
    });

    // 数量的增加事件，点击+就增加，点击-就减去，
    // 并且文本框的值也会随之改变
    $("#add").on("tap", function() {
        num = $("#productNum").val();
        num++;
        num = num > proNum ? proNum : num;
        $("#productNum").val(num);
    });
    // 点击减少按钮
    $("#reduce").on("tap", function() {
        num = $("#productNum").val();
        num--;
        num = num < 1 ? 1 : num;
        $("#productNum").val(num);
    });


    /* 
        加入购物车思路
            获取产品id，尺码，产品数量，发送后台请求
            判断是否选择了产品尺码
    */

    // 发送加入购物车请求
    $("#addCart").on("tap", function() {
        if (!size) {
            mui.toast("请选择尺码！");
            return;
        }

        $.ajax({
            type: "POST",
            url: "/cart/addCart",
            data: {
                productid: id,
                num: num,
                size: size
            },
            success: function(res) {
                console.log(res);
                // confirm对话框，点击确认index属性返回1
                mui.confirm("加入成功，是否查看？", function(message) {
                    if (message.index) {
                        // 点击了确定，跳转购物车页面
                        location.href = "cart.html";
                    }
                });
            }
        });
    });
});



// 获取地址栏中的参数，由于后面还会用到很多，所以在此将此功能封装成函数
function getParamsByUrl(url, name) {
    // 获取问号后面的参数,但不能有问号
    var params = url.split("?");
    var param = params[1].split("&");
    // return param;
    for (var i = 0; i < param.length; i++) {
        var current = param[i].split("=");
        if (current[0] == name) {
            return current[1];
        }
    }
    return null;
}