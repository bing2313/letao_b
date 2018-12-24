$(function() {

    // 初始化三级联动,有一个参数为对象，表示显示的列数
    var picker = new mui.PopPicker({ layer: 3 });

    // 给picker添加数据，就是选择的数据，数据是一个数组
    picker.setData(cityData);

    // 给文本框添加readonly属性，将其变成只读、
    // 给文本框添加轻敲事件
    $("#selectCity").on("tap", function() {
        // 当点击文本框，显示三级联动菜单，参数是一个回调函数
        // 回调函数有一个参数，是各列的值
        // selectItems[0].text就是第一列里面的text属性
        picker.show(function(selectItems) {
            $("#selectCity").val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        });
    });

    // 点击确认按钮，获取表单值，保存到数据库
    $("#addAddress").on("tap", function() {
        var username = $.trim($('[name = "username"]').val());
        var postCode = $.trim($('[name = "postCode"]').val());
        var provinces = $.trim($('[name = "provinces"]').val());
        var detail = $.trim($('[name = "detail"]').val());
        // 判断是否为空
        if (!username) {
            mui.toast("请输入收货人");
            return;
        }
        if (!postCode) {
            mui.toast("请输入邮政编码");
            return;
        }
        if (!provinces) {
            mui.toast("请选择省市区");
            return;
        }
        if (!detail) {
            mui.toast("请输入详细地址");
            return;
        }
        // 发送请求，保存到数据库中，跳转到地址页面
        $.ajax({
            type: "POST",
            url: "/address/addAddress",
            data: {
                address: provinces,
                addressDetail: detail,
                recipients: username,
                postcode: postCode
            },
            success: function(res) {
                if (res.success) {
                    // 如果返回success，说明成功，跳转到地址页面
                    mui.toast("添加地址成功");
                    location.href = "address.html";
                }
            }
        });
    });


});