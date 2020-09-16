let oldIndex = 0;

$("#main li").each(function(index,item) {
    $(this).data({z:-5000*index});
});

$("#gnb li").on("click", function() {
    let sel = $(this).index();
    let newIndex = $(this).index();
    let time = Math.abs(newIndex - oldIndex);
    // Math.abs = 절대값 만드는 함수
   // console.log(sel);

    $("#main li").each(function(index,item) {
        gsap.to($(this), {
            duration:time,
            z:$(this).data("z")+sel*5000, //X,Y,Z
            ease:"power4.inOut"
        
        })

    });
    /*
    for(let i=0;i<5;i++) {
        gsap.to("#main li:nth-child("+(i+1)+")", {
            duration:2,
            z:posZ[$(this).index()][i], //X,Y,Z
            ease:"power4.inOut"
        });
    }
    */
    /*
    gsap.to($("#main li:nth-child(1)"),{
        duration:2,
        z:posZ[$(this).index()][0], //X,Y,Z
        ease:"power4.inOut"
    })
    gsap.to($("#main li:nth-child(2)"),{
        duration:2,
        z:posZ[$(this).index()][1], //X,Y,Z
        ease:"power4.inOut"
    })
    gsap.to($("#main li:nth-child(3)"),{
        duration:2,
        z:posZ[$(this).index()][2], //X,Y,Z
        ease:"power4.inOut"
    })
    gsap.to($("#main li:nth-child(4)"),{
        duration:2,
        z:posZ[$(this).index()][3], //X,Y,Z
        ease:"power4.inOut"
    })
    gsap.to($("#main li:nth-child(5)"),{
        duration:2,
        z:posZ[$(this).index()][4], //X,Y,Z
        ease:"power4.inOut"
    })
    */
    oldIndex = newIndex;
    return false;
   
});


let posZ=[];
posZ[0]=[0,-5000,-10000,-15000,-20000];
posZ[1]=[5000,0,-5000,-10000,-15000];
posZ[2]=[10000,5000,0,-5000,-10000];
posZ[3]=[15000,10000,5000,0,-5000];
posZ[4]=[20000,15000,10000,5000,0];

