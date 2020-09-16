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
        delay:0.1*idx,
        onComplete:function(){
            //console.log(idx);
            if(idx===total-1) {
                gsap.fromTo($("body"),{backgroundPositionX:"200%"},{
                    duration:1,
                    backgroundPositionX:"50%",
                    ease:"power4"
                })
                $("body").css({backgroundImage:"url(images/30.jpg)"});
            }
        }
        
    });

    $(this).on("click", function() {
        _this = $(this);
        gsap.to( $(this), {
            duration:0.3,
            x:700,
            rotation:30,
            ease:"power4.out",
            onComplete:function(item) {
                //$(this).css({transform:"translateY(0)"})
                console.log(item.index());
                gsap.to(item,{
                    duration:0.3,
                    x:0,
                    rotation:Math.random()*10-5,
                    ease:"power4.in"
                }); // set은 시간이 없어 =css와 같음 / duration:0; 과같음
 
                $("#avengers").prepend(item);
            },
            onCompleteParams:[_this]
        });

        let imgSrc = _this.prev().find("img").attr("src");
        gsap.to(_this.prev(),{
            rotation:0,
        });
        gsap.fromTo($("body"),{backgroundPositionX:"200%"}, {
            duration:1,
            backgroundPositionX:"50%",
        })
        $("body").css({backgroundImage:`url(${imgSrc})`});
    });
});