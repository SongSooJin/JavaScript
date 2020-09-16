$("#main li").on("click",function() {
    let ty = 0;
    $(this).toggleClass("reverse");
    if($(this).hasClass("reverse")) {
        ty = 180;
    }else {
        ty = 0;
    }
    gsap.to($(this).find("a"), {
        duration:1.2,
        rotationY:ty,
        ease:"back.out"
    });
    return false;
});


// $("#main li").on("mouseenter",function() {
//     gsap.to($(this).find("a"), {
//         duration:1.2,
//         rotationY:180,
//         ease:"back.inOut"
//     });
//     return false;
// });
// $("#main li").on("mouseleave",function() {
//     gsap.to($(this).find("a"), {
//         duration:1.2,
//         rotationY:0,
//         ease:"back.inOut"
//     });
//     return false;
// });