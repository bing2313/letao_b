$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // 发送请求请求数据
    $.ajax({
        type: "GET",
        url: "/category/queryTopCategory",
        success: function(res) {
            // console.log(res);
            var html = template("category-first", res);
            $('#links').html(html);
            // 如果一级分类有数据的话
            if (res.rows.length) {
                $("#links").find("a").eq(0).addClass('active');
                var id = res.rows[0].id;
                getSecondCategory(id);
            }
        }
    });

    // 打开页面，模拟点击了第一个

    // 点击a连接，获取到相应的数据
    $("#links").on("click", "a", function() {
        var id = $(this).attr("data-id");
        // 改变被点击的链接的样式
        $(this).addClass("active").siblings().removeClass("active");
        // 通过id去查询数据库的数据
        getSecondCategory(id);
    });
});


function getSecondCategory(id) {
    $.ajax({
        type: "GET",
        url: "/category/querySecondCategory",
        data: {
            id: id
        },
        success: function(res) {
            // 创建模板引擎
            var html = template("category-second", res);
            $('.brand-list').html(html);
        }
    });
}