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
    let _scale = Math.random()*0.1+0.1;
    gsap.to(el,{
        duration:0.5,
        x:Math.random()*1600-800,  
        y:Math.random()*600-300,
        rotation:Math.random()*360-180,
        scale:_scale,
        ease:"power4.out",
        onComplete:function() {
            el.removeClass("big");
        }
    });
    el.data("scale",_scale);
   
}


list.each(function(idx) {
    let _scale = Math.random()*0.1+0.1;
    $(this).data("scale",_scale);

    gsap.fromTo($(this),{scale:0},{
        x:Math.random()*1200-800,  // 0-600<x <1200-600
        y:Math.random()*600-300,
        rotation:Math.random()*360-180,
        scale:_scale,
        ease:"power4.out",
        duration:1,
        delay:0.1*idx
    });

    $(this).on("mouseenter", function() {
        //console.log( $(this).css("transform") );
        if(!$(this).hasClass("big")){
            gsap.to($(this),{
                duration:0.5,
                scale:$(this).data("scale")+0.05,
                ease:"back.out"
            });
        }
    });

    $(this).on("mouseleave", function() {
        if(!$(this).hasClass("big")){
            gsap.to($(this),{
                duration:0.5,
                scale:$(this).data("scale"),
                ease:"back.out"
            });
        }
    });

    $(this).on("click",function() {
        depth += 1; 
        let _this = $(this);
      
        gsap.set(_this,{zIndex:depth});
        if( !_this.hasClass("big")){
            big(_this);
        } else {
            small(_this);
        }
        
        if(selectedItem !== null) {
            if(!_this.is(selectedItem)) {
                if(selectedItem.hasClass("big")) {  
                    small(selectedItem); // 작아지는거 위에 small함수 정의 / 따라서 위의 코드는 필요없어짐
                } 
            } 
        }
        selectedItem = _this;
        
    })

});

   