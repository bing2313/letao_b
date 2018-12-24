$(function() {

    var page = 1;
    var pageSize = 3;
    var totalPage = 0;

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

    /*
        二级分类
            发送请求获取数据
    */
    function getData() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "GET",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res) {
                totalPage = Math.ceil(res.total / pageSize);
                var html = template("secondBox", res);
                $("#proSecondBox").html(html);
            }
        });
    }



    // 添加二级分类时候，渲染一级分类
    $.ajax({
        url: "/category/queryTopCategoryPaging",
        type: "GET",
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            // console.log(res);
            var html = template("categoryFirstTpl", res);
            // console.log(html);
            $("#categoryFirstBox").html(html);
        }
    });


    // logo的地址
    var previewImg = "";
    // 上传并预览图片
    $('#fileUpLoad').fileupload({
        dataType: 'json',
        done: function(e, data) {
            // console.log(data);
            // 拿到对象中data.result.picAddr(图片的地址)
            $("#uploadImgBox").attr("src", data.result.picAddr);
            previewImg = data.result.picAddr;
        }
    });

    // 二级分类的添加
    $("#save").on("click", function() {
        // 获取用户输入的数据，并进行基本的验证
        var categoryId = $.trim($('[name="categoryId"]').val());
        var brandName = $.trim($('[name="brandName"]').val());
        // 发起请求
        $.ajax({
            url: "/category/addSecondCategory",
            type: "POST",
            data: {
                brandName: brandName,
                categoryId: categoryId,
                brandLogo: previewImg,
                hot: 0
            },
            success: function(res) {
                // console.log(res);
                if (res.success) {
                    location.reload();
                }
            }
        });
    });
});