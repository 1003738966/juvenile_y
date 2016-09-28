function rem(size){
    var clientW=$(window).width();
    //alert(clientW)
    var bili=clientW/size;
    var fontSize=bili*100;
    $("html").css({fontSize:fontSize});
}
rem(800);

$(function(){
    /*初始化容器*/
    var menuW=$(".menu a").width()*$(".menu a").length;
    $(".menu").css({width:menuW});
    var clientW=$(window).width();
    var clientH=$(window).height();
    var initLeft;
    touch.on(".menu","dragstart",function(){
        var left=parseInt($(".menu").css("marginLeft"));
        initLeft=left?left:0;
    });

    touch.on(".menu","drag",function(e){
        if(e.direction=="left"){
            var left=initLeft+e.x;
            if(left<clientW-menuW){
                left=clientW-menuW
            }
            $(".menu").css({marginLeft:left});
        }else if(e.direction=="right"){
            var left=initLeft+e.x;
            if(left>0){
                left=0;
            }
            $(".menu").css({marginLeft:left});
        }

    });
});


