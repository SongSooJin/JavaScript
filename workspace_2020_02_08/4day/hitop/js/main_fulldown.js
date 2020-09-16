// console.log("hello world");
/*
var header = document.getElementById("header");
var gnb = document.getElementById("gnb");
var gnbList = gnb.getElementsByClassName("list");
gnbList[0].addEventListener("mouseenter",function(){
    header.classList.add("on");
});
gnbList[0].addEventListener("mouseleave",function(){
    header.classList.remove("on");
});
*/

// fulldown 메뉴
var header = $("#header");
var gnb = $("#gnb");
var gnbList = $("#gnb .list");
gnbList.on("mouseenter",function(){
    header.addClass("on");
});
gnbList.on("mouseleave",function(){
    header.removeClass("on");
});

