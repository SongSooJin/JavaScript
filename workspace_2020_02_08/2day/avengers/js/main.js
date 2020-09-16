//cross browsing
//ajax
//axios - vue


let list = $("#avengers li");
let list02 = document.querySelectorAll("#avengers li");
let total = list.length;
// console.log(list, "===",list02);
let _this;

list.each(function(idx) {
    //console.log(idx);
    gsap.fromTo($(this),{y:-600,opacity:0}, {
        duration:1,
        y:0,
        opacity:1,
        rotation:function() {
            if(idx !== total-1) {
                return Math.random()*10-5;
            } else {
                return 0;
            }
        }, //  0-5 < x <10 -5
        ease:"back",
        delay:0.1*idx
        
    });

    $(this).on("click", function() {
        _this = $(this); // _this :$(this)을 클릭하고 있는 자기 자신을 _this에 담아둠 
        gsap.to( $(this), {
            duration:1,
            y:1000,
            rotation:Math.random()*360-180,
            ease:"power4.in",
            onComplete:function(item) {
                //$(this).css({transform:"translateY(0)"})
                console.log(item.index());
                gsap.set(item,{
                    y:0,
                    rotation:Math.random()*10-5
                }); // set은 시간이 없어 =css와 같음 / duration:0; 과같음

                
                $("#avengers").prepend(item);
            },
            onCompleteParams:[_this]
        });

        let imgSrc = _this.prev().find("img").attr("src"); //prev() : 이전 요소
        gsap.to(_this.prev(),{
            rotation:0,
        });
        gsap.from($("body"), {
            duration:1,
            backgroundPositionX:"200%",
            ease:"power4" 
        })
        $("body").css({backgroundImage:`url(${imgSrc})`});
    });
});
