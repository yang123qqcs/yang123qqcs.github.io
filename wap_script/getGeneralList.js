
//测试的借口地址：获取列表页的内容 /info/phoneInterface.jsp?action_type=news_list&cat_id=10001&page=1&size=20&site_id=CMSxxxq

console.log("获取到的cat_id是",cat_id);
// 默认加载第一页
var page = 1;
//一次加载10条数据
var size = 10;
//var host="113.200.163.105";
var site_id="CMSxxxq";
var action_type="news_list";
var default_url="";
default_url = "/info/phoneInterface.jsp?site_id="+site_id+"&action_type="+action_type+"&cat_id=" + cat_id + "&size=" + size + "&page=" + page;
//测试打印的数据
console.log("url是", default_url);
$(function () {
    //初始化的时候先进行一次加载
    $.ajax({
        type: "GET",
        url: default_url,
        async: false,
        dataType: "json",
        success: function (data) {
            console.log("获取到的数据是", data);
            //渲染json数据
            renderJson(data);
        }
        //不能得到数据的时候的操作:callback
        //{}
    });

});

(function($){
    $(".mui-scroll-wrapper").scroll({
        bounce: false,//滚动条是否有弹力默认是true
        indicators: false, //是否显示滚动条,默认是true
        scrollY: true

    });

})(mui);



mui.init({
    //mui初始化的时候加载方法
    pullRefresh: {
        container: '#refresh',
        up: {
            contentrefresh: '正在加载...',
            callback: loadList
        }
    }
});

function loadList() {
    console.log("正在加载...");
    page++; //page 自增
    default_url = "/info/phoneInterface.jsp?site_id="+site_id+"&action_type="+action_type+"&cat_id=" + cat_id + "&size=" + size + "&page=" + page;
    console.log("此时的page",page);
    console.log("此时的URl为【刷新后的】",default_url);
    $.ajax({
        type: "GET",
        url: default_url,
        dataType: "json",
        success: function (data) {
            console.log("刷新返回的数据是",data);
            var that=this;
            //渲染json数据
            if(data.length==0){
                mui('#refresh').pullRefresh().endPullupToRefresh(true);
                mui.alert("没有更多数据了！","提示");
            }
            else {
                renderJson(data);
                mui('#refresh').pullRefresh().endPullupToRefresh(false);

            }
        }
    });
}
//解析json数据
function renderJson(_data) {
    for(var i=0;i<_data.length;i++){
        var link="/info/iList.jsp?&tm_id=77&info_id="+_data[i].info_id;
        if(_data[i].model_id==11){
            //文章
            link="/info/iList.jsp?&tm_id=77&info_id="+_data[i].info_id;
        }
        if(_data[i].model_id==10){
            //组图的获
            link="/info/iList.jsp?&tm_id=75&id="+_data[i].info_id;
        }
        if(_data[i].model_id==12){
            //链接
            link=_data[i].content_url
        }
        if(_data[i].model_id==13){
            //链接
            link="/info/iList.jsp?tm_id=81&id="+_data[i].info_id;
        }

        var source=_data[i].source;
        if(source==null||source==""){
            source="无";
        }
        // 处理时间
        var beforeTime=_data[i].released_dtime;
        var afterTime="";
        // 时间的长度大于10==>截取时间
        if(beforeTime.length>=10){
            afterTime=beforeTime.substr(0,10);
        }
        else {
            afterTime=beforeTime;
        }

        var _str="<li class=\"mui-table-view-cell\">\n" +
            "                    <a href=\""+link+"\">"+_data[i].title+"</a>\n" +
            "                    <p><span>"+afterTime+"</span><span class=\"m-v-line\">&nbsp;|&nbsp;</span><span class=\"yw\">来源：</span><span class=\"yw\">"+source+"</span></p>\n" +
            "                </li>";

        $("#list_box").append(_str);

        //让页面所有的a具有跳转功能
        mui('body').on('tap','a',function(){document.location.href=this.href;});

    }

}
