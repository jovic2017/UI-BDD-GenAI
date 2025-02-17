function setScreenshotHeight(){
    var $ = layui.$;
    var screenDiv = $("#screenShot");
    var screenHeight = $(window).height();
    screenDiv.css("height",screenHeight * 0.7);
}

function getPageSource(){
    var $ = layui.$;
    $.get("/api/getPageSource?type=M",{},function(result){

    });
}

function debug(){
    var layer = layui.layer;
    $.post(url,{"oldPwd":oldPwd,"newPwd":newPwd,"id":logonId},function(result){
        if(result.code=='success'){
            layer.msg("密码修改成功");
            layer.close(idx);
        }else{
            layer.msg(result.message);
        }

    });
}


layui.use(['element','layer','form'],function(){
    var $ = layui.$;
    var layer = layui.layer;


    setScreenshotHeight();
});