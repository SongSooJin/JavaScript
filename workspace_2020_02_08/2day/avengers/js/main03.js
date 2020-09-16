//cross browsing
//ajax
//axios - vue


let list = $("#avengers li");
let list02 = document.querySelectorAll("#avengers li");
let total = list.length;
// console.log(list, "===",list02);
let depth = 0;
let selectedItem = null;

let big= function(el) {
    gsap.to(el, {
        duration:0.5,
        scale:1,
        rotation:0,
        x:0,
        y:0,
        ease:"power4.out"
    });
    el.addClass("big");
}

let small = function(el) {
    gsap.to(el,{
        duration:0.5,
        x:Math.random()*1600-800,  
        y:Math.random()*600-300,
        rotation:Math.random()*360-180,
        scale:Math.random()*0.1+0.1,
        ease:"power4.out"
    });
    el.removeClass("big");
}


list.each(function(idx) {
    gsap.fromTo($(this),{scale:0},{
        x:Math.random()*1200-800,  // 0-600<x <1200-600
        y:Math.random()*600-300,
        rotation:Math.random()*360-180,
        scale:Math.random()*0.1+0.1,
        ease:"power4.out",
        duration:1,
        delay:0.1*idx

    });

    $(this).on("click",function() {
        depth += 1;  //= depth++; 1일때 한에서만 ++이 가능
        //$(this).css({zIndex:depth}); 아래의 문장과 같음
        gsap.set($(this),{zIndex:depth});
        if( !$(this).hasClass("big")){
            //커지는 거 위에 big함수 정의  따라서 위의 코드는 필요없어짐
            // $(this).addClass("big");
            // gsap.to( $(this),{
            //     duration:0.5,
            //     scale:1,
            //     rotation:0,
            //     x:0,
            //     y:0,
            //     ease:"power4.out"
            // });
            big($(this));
        } else {
            // 작아지는거 위에 small함수 정의  따라서 위의 코드는 필요없어짐
            // $(this).removeClass("big");
            // gsap.to( $(this),{
            //     duration:0.5,
            //     x:Math.random()*1600-800,  
            //     y:Math.random()*600-300,
            //     rotation:Math.random()*360-180,
            //     scale:Math.random()*0.1+0.1,
            //     ease:"power4.out"
            // })
            small($(this));
        }
        
        if(selectedItem !== null) {
            if(!$(this).is(selectedItem)) {
                if(selectedItem.hasClass("big")) {
                    // gsap.to (selectedItem, { 
                    //     duration:0.5,
                    //     x:Math.random()*1600-800,  
                    //     y:Math.random()*600-300,
                    //     rotation:Math.random()*360-180,
                    //     scale:Math.random()*0.1+0.1,
                    //     ease:"power4.out"
                    // });
                    // selectedItem.removeClass("big");
                    small(selectedItem); // 작아지는거 위에 small함수 정의 / 따라서 위의 코드는 필요없어짐
                } 
            } 
        }
        selectedItem=$(this);
        
    })

});

   