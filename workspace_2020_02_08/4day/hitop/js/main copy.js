//페이지 중간엔서 새로고침 눌렀을때에도 다시 원점으로 돌아가게 하는 메소드
// $(function(){
//     $("html, body").animate({ scrollTop: 0 }, "slow"); 
//     });
    

// popup

$("#popup .btnClose").on("click", function() {
    //$("#popup").hide(); // 디스플레이 논이랑 같은 효과
    //$("#popup").remove(); // 아예 삭제
    $("#popup").fadeOut(); // 디스플레이 논이랑 같은 효과 + 효과

});


$("#popup .btnOneday").on("click", function() {
    $("#popup").hide();
    Cookies.set("oneday", "one", { expires: 1 })

});

let myCookie =  Cookies.get("oneday")
//console.log(myCookie);
if(myCookie !== "one") {
    $("#popup").show();
}

//Cookies.remove("oneday"); // 설정눌러서 쿠키 지우기 싫다 


$(window).on("scroll", function() {
    let st = $("html,body").scrollTop();
    //console.log(st);
    if(st>0) {
        if(!$("#header").hasClass("on")) {
            $("#header").addClass("on");

        }
        if(!$(".btnTop").hasClass("on")) {
            $(".btnTop").addClass("on");

        }
    } else {
        if($("#header").hasClass("on")) {
            $("#header").removeClass("on");
        }
        if(!$(".btnTop").hasClass("on")) {
            $(".btnTop").addClass("on");

        }
    }
});

$(".btnTop").on("click",function() {
    gsap.to("html,body", {
        scrollTop:0,
        ease:"power3",
        duration:1
    })
    return false; // a태그 일때에 리턴 flase값을 준다. button일경우 안써도됌
});



//layout.css 실행시 아래 코드는 주석해제 
// $("#gnb .list > li").on("mouseenter", function() {
//     $(this).find(".depth02").stop().slideDown();


// }); //stop() 기존 스택에 쌓여있는것을 지워라 

// $("#gnb .list > li").on("mouseleave", function() {
//     $(this).find(".depth02").stop().slideUp();
    

// }); 


let mainVisual = new Swiper("#mainVisual .mask", {
    observeParents:true, //멈추고 난뒤 다시 스와이퍼를 실행해야하는 경우
    loop: true,
    speed:1000,
    // effect:"coverflow", "cube"
    effect:"fade",
    // direction: "vertical" 안쓰면 수평 "horizontal"
    navigation: {
        nextEl: '#mainVisual .btnNext',
        prevEl: '#mainVisual .btnPrev',
        },
    autoplay: {
        delay: 4000,
        disableOnInteraction : false,
        },
    pagination: {
        el: '#mainVisual .pager .btns',
        // type: 'bullets', 안써도 적용
        clickable: true, 
        },
    on: {
        slideChange: function () {
            txtMotion.slideTo(this.realIndex);
            },
        },             
});

$("#mainVisual .pager .btnPause").on("click", function() {
    mainVisual.autoplay.stop();
    $(this).hide();
    $(this).siblings().show();
    return false;

});

$("#mainVisual .pager .btnAuto").on("click", function() {
    mainVisual.autoplay.start();
    $(this).hide();
    $(this).siblings().show();
    return false;
});


let newsSlider = new Swiper("#news .mask", {
    slidesPerView:"auto",
    centeredSlides: true,
    spaceBetween:20,
    slidesPerGroup:1,
    speed:400,
    loop:true,
    navigation: {
        prevEl:"#news .btnPrev",
        nextEl:"#news .btnNext",
    }
});

let txtMotion = new Swiper("#mainVisual .txtMotion", {
   
    effect:"fade",
    speed:1000,
    fadeEffect: {
        crossFade: true
      },

});




// $(".btnPrev").on("click", function (e) { 
//     e.preventDefault(); // 이미지 현재의 위치

//     var btnPrev = $(".btnPrev").find(".on").index(); // 이미지 총 개수 
//     var btnNext = $(".btnNext").length; 
//     console.log(imgOn) // imgBox안의 img 중 imgOn 번째의 on 클래스 삭제 

//     $(".btnPrev").eq(btnPrev).removeClass("on"); // imgBox안의 img 중 imgOn 번째 숨기기 
//     $(".btnNext").eq(btnPrev).css("opacity", 0); // 이전의 위치로 돌아가야함으로 

//     btnPrev = btnPrev -1; if( btnPrev < 0 ){ // 돌아가 위치가 -1일 경우 // 이미지의 마지막으로 돌아간다 
//         $(".imgBox .img").eq(imgLen -1).css("opacity", 1); 
//         $(".imgBox .img").eq(imgLen -1).addClass("on"); 
//     }else{ // 돌아갈 위치가 -1이 아닌 경우 
//         $(".imgBox .img").eq(imgOn).css("opacity", 1);
//         $(".imgBox .img").eq(imgOn).addClass("on"); } });

//         $(".next").on("click", function (e) { e.preventDefault(); // 위에 동일 
//             var imgOn = $(".imgBox").find(".on").index(); 
//             var imgLen = $(".imgBox .img").length; // 위에 동일 
//             $(".imgBox .img").eq(imgOn).removeClass("on"); 
//             $(".imgBox .img").eq(imgOn).css("opacity", 0); // 다음의 위치로 알아야 되기 때문에 
//             imgOn = imgOn + 1; if( imgOn === imgLen ){ // 다음의 위치가 총 개수보다 클 경우 // 처음의 위치로 돌아간다 
//                 $(".imgBox .img").eq(0).css("opacity", 1); 
//                 $(".imgBox .img").eq(0).addClass("on"); 
//             }else{ // 다음 위치가 있는 경우 
//                 $(".imgBox .img").eq(imgOn).css("opacity", 1); 
//                 $(".imgBox .img").eq(imgOn).addClass("on"); 
//             } 
//             });



