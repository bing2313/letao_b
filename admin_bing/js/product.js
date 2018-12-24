$(function() {

    // 请求页面数据
    $.ajax({
        url: "/product/queryProductDetailList",
        type: "GET",
        data: {
            page: 1,
            pageSize: 6
        },
        success: function(res) {
            // console.log(res);
            var html = template("detailPro", res);
            $("#detailProBox").html(html);
        }
    });

    /*
        添加商品
            获取二级分类并展示在页面上
            实现图片上传
            实现添加
    */
    // 获取二级分类
    $.ajax({
        url: "/category/querySecondCategoryPaging",
        type: "GET",
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            var html = template("secondTpl", res);
            $("#secondBox").html(html);
        }
    });


    var upLoadImg = [];
    // 图片的上传
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            // console.log(data);
            upLoadImg.push(data.result);
            // upLoadImg.push(data.result.picAddr);
        }
    });

    // 保存数据
    $("#addProduct").on("click", function() {
        var proName = $.trim($('[name="proName"]').val());
        var proDesc = $.trim($('[name="proDesc"]').val());
        var num = $.trim($('[name="num"]').val());
        var size = $.trim($('[name="size"]').val());
        var oldPrice = $.trim($('[name="oldPrice"]').val());
        var price = $.trim($('[name="price"]').val());
        var brandId = $.trim($('[name="brandId"]').val());
        $.ajax({
            url: "/product/addProduct",
            type: "POST",
            data: {
                proName: proName,
                oldPrice: oldPrice,
                price: price,
                proDesc: proDesc,
                size: size,
                statu: 1,
                num: num,
                brandId: brandId,
                pic: upLoadImg

            },
            success: function(res) {
                if (res.success) {
                    location.reload();
                }

            }
        });
    });
});