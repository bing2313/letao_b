$(function() {
    // 判断缓存中是否有数据，若有就渲染页面
    if (localStorage.getItem("localAddress")) {
        // 获取缓存中的数据
        var address = JSON.parse(localStorage.getItem("localAddress"));
        console.log(address);
        var id = address.id;
        console.log(id);

        // 创建模板，渲染数据。
        var html = template("editAddress", { address: address });
        console.log(html);
        $("#locAddress").html(html);
    }

    $("#editAddress").on("tap", function() {
        // 渲染到页面之后，更改信息，点击确认保存到数据库
        var username = $.trim($('[name="username"]').val());
        var postCode = $.trim($('[name="postCode"]').val());
        var provinces = $.trim($('[name="provinces"]').val());
        var detail = $.trim($('[name="detail"]').val());
        if (!username) {
            mui.toast("收货人不能为空");
            return;
        }
        if (!postCode) {
            mui.toast("邮编不能为空");
            return;
        }
        if (!provinces) {
            mui.toast("省市区不能为空");
            return;
        }
        if (!detail) {
            mui.toast("详细地址不能为空");
            return;
        }
        $.ajax({
            type: "POST",
            url: "/address/updateAddress",
            data: {
                id: id,
                address: provinces,
                addressDetail: detail,
                recipients: username,
                postcode: postCode
            },
            success: function(res) {
                // 如果成功，跳转到地址页面
                if (res.success) {
                    location.href = "address.html";
                }
            }
        });
    });


});