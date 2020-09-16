Splitting();
let intro = gsap.timeline();
intro.from("#happen .titleBox h2 .char", {
    x:100,
    opacity:0, 
    duration:1,
    ease:"power4",
    stagger: {
        each:0.1
    }
})

.from("#happen .titleBox p .char", {
    x:100,
    duration:1,
    opacity:0, 
    ease:"power4",
    stagger: {
        each:0.1

    }
});

let business = gsap.timeline({paused:true});
business.from("#business .titleBox h2 .char", {
    opacity:0,
    x:0,
    ease:"back",
    stagger: {
        each:0.1
    }
})

.from("#business .titleBox p .char", {
    opacity:0,
    x:0,
    ease:"back",
    stagger: {
        each:0.1
    }
})

.from("#business .iconList li", {
    opacity:0,
    x:150,
    ease:"back",
    stagger: {
        each:0.1
    }
});


let portfolio = gsap.timeline({paused:true});
portfolio.from("#portfolio .titleBox h2 .char", {
    opacity:0,
    x:0,
    ease:"back",
    stagger: {
        each:0.1
    }
})

.from("#portfolio .titleBox p .char", {
    opacity:0,
    x:0,
    ease:"back",
    stagger: {
        each:0.1
    }
})

.from("#portfolio .portfolioList li", {
    opacity:0,
    x:150,
    ease:"back",
    stagger: {
        each:0.1
    }
});

let community = gsap.timeline({paused:true});
community.from("#community .titleBox h2 .char", {
    opacity:0,
    x:0,
    ease:"back",
    stagger: {
        each:0.1
    }
})

.from("#community .titleBox p .char", {
    opacity:0,
    x:0,
    ease:"back",
    stagger: {
        each:0.1
    }
})

.from("#community .anchorList li", {
    opacity:0,
    x:150,
    ease:"back",
    stagger: {
        each:0.1
    }
});

let timelineArray = [intro, business, portfolio, community];
$.each(timelineArray, function(idx,el) {
    console.log(idx);
});

let businessY = $("#business").offset().top;
let portfolioY = $("#portfolio").offset().top;
let communityY = $("#community").offset().top;

$(window).on("scroll", function(){
    let st = $("html,body").scrollTop();
    $(".section").each(function(idx) {
        if (st > $(this).offset().top-200) {
            timelineArray[idx].play();
        }
    });
    // if(st > businessY -200) {
    //     business.play();
    // }
    // if(st > portfolioY -200) {
    //     portfolio.play();
    // }
    // if(st > communityY -200) {
    //     community.play();
    // }
});

// let body = document.querySelector("body");
// window.addEventListener("scroll", function(e) {
//     console.log(e.scrollY);
// });

let main = new fullpage("#main", {
    navigation:true, 
    navigationTooltips:["introduce", "business","portfolio","community"],
    showActiveTooltips: true,
    onLeave:function(origin, destnation, dir) {
            let idx = destnation.index;
            if(idx === 0) {
                intro.restart();
            } else if(idx === 1) {
                business.restart();
            } else if(idx === 2) {
                portfolio.restart();
            }else if (idx === 3) {
                community.restart();
            }

            if(idx !== 0){
                $(".btnTop").addClass("on");
            } else {
                $(".btnTop").removeClass("on");
            }

            if(idx !== 4) {
                $("body").removeClass("last");
            }else {
                $("body").addClass("last");
            }
    },
}); //옵션없이 풀페이지가 잡힘, 높이 생성

$(".gnbList > li").on( "mouseenter", function() {
    $("#header").addClass("on");
}); 

$(".gnbList > li").on( "mouseout", function() {
    $("#header").removeClass("on");
});

//자바스크림트 라이브러리 

$(".btnTop").on("click", function () {
    fullpage_api.moveTo(1);
    return false;

})