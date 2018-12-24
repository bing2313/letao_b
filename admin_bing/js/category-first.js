$(function() {
    // 当前页数
    var page = 1;

    // 一页显示多少条数据
    var pageSize = 5;

    // 页面的最大页数=总数据/一页显示多少条，然后向上取整
    var totalPage = 0;




    // 加载页面之后的初级渲染
    getData();


    // 点击下一页按钮，进行下一页的展示
    $("#next").on("click", function() {
        page++;
        // page = page > totalPage ? totalPage : page;
        if (page > totalPage) {
            page = totalPage;
            alert("已经是最后一页啦！");
            return;
        }
        getData();
    });

    // 点击上一页按钮，进行上一页的展示
    $("#prev").on("click", function() {
        page--;
        if (page < 1) {
            page = 1;
            alert("已经是第一页啦！");
            return;
        }
        getData();
    });

    // 获取页面信息的请求函数
    function getData() {
        // 页面加载进来，请求数据，渲染页面
        $.ajax({
            type: "GET",
            url: "/category/queryTopCategoryPaging",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res) {
                totalPage = Math.ceil(res.total / pageSize);
                // console.log(totalPage);
                console.log(res);
                var html = template("firstBox", res);
                $("#firstInfoBox").html(html);
            }
        });
    }

    /*
        添加一级分类
            1、找到保存按钮，注册事件
            2、获取用户输入的分类名称，进性初步检验
            3、发送请求
            4、刷新页面
    */
    $("#save").on("click", function() {
        var categoryName = $.trim($("#classify").val());
        // 基本判断
        if (!categoryName) {
            alert("分类名称不能为空");
            return;
        }
        // 发送请求
        $.ajax({
            url: "/category/addTopCategory",
            type: "POST",
            data: {
                categoryName: categoryName
            },
            success: function(res) {
                if (res.success) {
                    location.reload();
                }
            }
        });

    });
});