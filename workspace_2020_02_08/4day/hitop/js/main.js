var item = $("#gnb .list > li");
item.on("mouseenter",function(){
    $(this).find(".depth02").stop().slideDown(200);
});
item.on("mouseleave",function(){
    $(this).find(".depth02").stop().slideUp(200);
});
var mvRolling = new Swiper("#mainVisual .mask",{
        speed:1000,
        effect:"slide",//fade,cube,coverflow,flip
        loop:true,
        simulateTouch:false,
        navigation: {
            nextEl:"#mainVisual .btnNext",
            prevEl:"#mainVisual .btnPrev",
        },
        pagination: {
            el:"#mainVisual .pager",
            clickable:true,
        },
        autoplay:{
            delay:3000
        }
});
$(window).on("scroll",function(){
    //console.log(  $(window).scrollTop() );
    if( $(window).scrollTop() > 100  ){
        $("#header").addClass("on");
    }else {
        $("#header").removeClass("on");
    }
    if( $(window).scrollTop() > 1000  ){
        $(".btnTop").fadeIn();
    }else {
        $(".btnTop").fadeOut();
    }
});
$(".btnTop").on("click",function(){
    $("html,body").stop().animate({scrollTop:0},1000);
    return false;
})
$(window).trigger("scroll");


// var jjang = {height:180,weight:75};
// var yejin = {height:175,weight:50};
// var dahye = {height:170,weight:55};
// var objectName = {key:IDBCursorWithValue,key:value}


