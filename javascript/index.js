function setScreenshotHeight(){
    var $ = layui.$;
    var screenDiv = $("#screenShot");
    var screenHeight = $(window).height();
    screenDiv.css("height",screenHeight * 0.7);
}

layui.use(['element','layer','form'],function(){
    var $ = layui.$;
    var layer = layui.layer;


    setScreenshotHeight();
});