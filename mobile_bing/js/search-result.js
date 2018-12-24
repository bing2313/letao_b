// 第一步，获取用户输入的关键字
var keyword = getParamsByUrl(location.href, 'keyword');

// 加载的当前页,默认第一页
var page = 1;

// 用来存储之前添加的网页元素
var html = "";

// 排序升序和降序，默认为1 升序
var priceSort = 1;

// 设置this的指向
var This = null;
$(function() {
    /* 
        根据用户输入的信息来进行搜索
            1、获取地址栏中用户输入的关键字（传递的参数）
            2、用关键字去调取搜索借口
            3、将搜索结果展示在页面
    */

    // 实现上拉加载更多的功能
    mui.init({
        pullRefresh: {
            container: "#refreshContainer", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50, //可选.默认50.触发上拉加载拖动距离
                auto: true, //可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });


    /*
      价格排序思路
        1、对价格按钮注册轻敲事件
        2、将价格排序规则传递给接口中
        3、对之前的各种配置进行初始化
            清空页面中的数据
            将当前页改为第一页
            重新开启上拉加载的功能
        4、将排序后的结果重新显示在页面上
     */
    // 点击价格实现排序的功能
    // 因为点击事件会有300毫秒的延迟，所以在此用mui框架里面的轻敲tap
    $("#priceSort").on("tap", function() {
        // 将价格排序规则传递给接口
        // 当点击按钮的时候，对排序进行判断
        priceSort = priceSort == 1 ? 2 : 1;
        // 对之前的配置进行初始化
        html = '';
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        // 将排序后的结果重新显示在页面上
        getData();

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

function getData() {
    if (!This) {
        This = this;
    }

    // 第二步，根据关键字请求接口
    $.ajax({
        type: "GET",
        url: "/product/queryProduct",
        data: {
            page: page++,
            pageSize: 2,
            proName: keyword,
            price: priceSort
        },
        success: function(res) {
            // 判断data里面是否还有数据，有就加载，没有就显示没有数据了
            if (res.data.length > 0) {
                // 成功之后将数据分页显示给用户-利用模板引擎
                html += template("search-result", res);
                // console.log(html);
                $("#searchResult").html(html);
                This.endPullupToRefresh(false);
            } else {
                This.endPullupToRefresh(true);
            }
        }
    });
}