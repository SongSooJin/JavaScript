
$("#main li").each(function(index,item) {
    $(this).data({z:-5000*index});
});

let amount = 0;
$(window).on("mousewheel", function(e) {
    //console.log(e);
    if(e.originalEvent.deltaY<0) {
        console.log("up");
        amount-=1000;
        if(amount<0){
            amount=0;
        }
    }
    else{
        console.log("down");
        amount+=1000;
        if(amount>20000){
            amount=20000;
        }
    }
    $("#main li").each(function(index,item) {
        gsap.to($(this), {
            duration:1,
            z:$(this).data("z")+amount, //X,Y,Z
            ease:"power4.out"
        
        })
       
    });
   
});

let oldIndex = 0;

$("#gnb li").on("click", function() {
    let sel = $(this).index();
    let newIndex = $(this).index();
    let time = Math.abs(newIndex - oldIndex);
    amount = sel*5000;
    // Math.abs = 절대값 만드는 함수
   // console.log(sel);

    $("#main li").each(function(index,item) {
        gsap.to($(this), {
            duration:time,
            z:$(this).data("z")+sel*5000, //X,Y,Z
            ease:"power4.inOut"
        
        })
    });
    oldIndex = newIndex;
    return false;
   
});
