$(function() {
    /* 
        业务逻辑：
            1、给所搜按钮注册点击事件
            2、获取搜索框用户输入的内容，将其转为参数带到搜索结果页面
            3、将用户输入的内容存储到本地缓存
            4、从本地缓存中拿到数据，渲染到页面上
    */
    // 声明数组，存储用户所搜索的信息

    $("#search-btn").on("click", function() {
        // 点击按钮获取value值
        var keyword = $(this).siblings("input").val();
        // 如果有值，跳转页面，如果没有值，阻止跳转，显示提示信息
        if (keyword) {
            // 并且将参数存储到数组中
            keyArr.push(keyword);
            // 将关键字存储到本地存储
            localStorage.setItem("keyArr", JSON.stringify(keyArr));
            // 跳转页面，并将参数带过去
            location.href = "search-result.html?keyword=" + keyword;
        } else {
            alert("请输入您想要搜索的关键字");
        }
    });

    // 声明数组，来存储用户输入的关键词
    var keyArr = [];
    if (localStorage.getItem("keyArr")) {
        keyArr = JSON.parse(localStorage.getItem("keyArr"));
        var html = template('historyTpl', { result: keyArr })
        $('#history-box').html(html);
    }

    // 点击清空记录，删除页面上的信息，也删除缓存里面的数据
    $("#clearBtn").on("click", function() {
        $('#history-box').html("");
        keyArr = [];
        localStorage.removeItem("keyArr");
    });
});