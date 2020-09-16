Splitting();


gsap.registerPlugin(CSSRulePlugin);
let section01Line = CSSRulePlugin.getRule(".tsa .section01 .txt01:after");
let section05Line = CSSRulePlugin.getRule(".tsa .section05 li:after");

let time01 = gsap.timeline();
time01.from(".section01 .txt01 .char" , {
    duration:1,
    x:100, // translateX:(100)
    opacity:0,
    ease:"back.out",
    stagger: {
        each:0.1
    }
})
.from(section01Line , {
   duration:1,
   cssRule:{
        scale:0
    },
},"-=0.8")
.from(".section01 .txt02 .char", {
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger: {
        each:0.1
    }
},"-=0.5")
.from(".section01 .txt03 .txt0301", {
    duration:1,
    x:300,
    opacity:0,
    ease:"back.out",
},"-=1")
.from(".section01 .txt03 .txt0302", {
    duration:1,
    x:-300,
    opacity:0,
    ease:"back.out",   
},"-=0.5")
.from(".section01 .txt03 .txt0303", {
    duration:1,
    x:300,
    opacity:0,
    ease:"back.out",   
},"-=0.5")
.from(".section01 .txt04", {
    duration:1,
    scale:3,
    opacity:0,
    ease:"back.out",      
},"-=0.5")


let controller = new ScrollMagic.Controller();
let scene01 = new ScrollMagic.Scene({
    triggerElement:".section01",
    duration:700,
    triggerHook:0,
    reverse:false,
    offset:0, //triggerElement의시작 지점을 옮길 수 있다. 
}); 
// scene01.addIndicators({
//     name:"section01",
//     colorTrigger:"#fff",
//     colorStart:"#f00",
//     colorEnd:"#f00"
// });
scene01.addTo(controller);
scene01.setTween(time01);
scene01.setPin(".section01");


let time02 = gsap.timeline();
time02.from(".section02 .title .char" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section02 .mainTxt .mainTxt01" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section02 .mainTxt .mainTxt02" ,{
    duration:1,
    x:-100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section02 .mainTxt .mainTxt03" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section02 .circleList li" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section01 .cduBox", {
    duration:1,
    scale:3,
    opacity:0,
    ease:"back.out",      
});

let scene02 = new ScrollMagic.Scene({
    triggerElement:".section02",
    duration:"300%",
    triggerHook:0,
    offset:0
});

scene02.addTo(controller);
scene02.setTween(time02);
scene02.addIndicators({
    name:"section02",
    colorTigger:"#fff",
    colotStart:"#495",
    colorEnd:"#495"
})
scene02.setPin(".section02");



let time03 = gsap.timeline();
time03.from(".section03 .title .char" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section03 .mainTxt span" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section03 .list li" ,{
    duration:1,
    x:-100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.to(".section03 .airplane" ,{
    duration:1,
    opacity:1,
    
})


let scene03 = new ScrollMagic.Scene({
    triggerElement:".section03",
    duration:"100%",
    triggerHook:0,
    offset:0
});

scene03.addTo(controller);
scene03.setTween(time03);
scene03.addIndicators({
    name:"section03",
    colorTigger:"#fff",
    colotStart:"#495",
    colorEnd:"#495"
})
scene03.setPin(".section03")


let time04 = gsap.timeline();
time04.from(".section04 .title .char" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
}).from(".section04 .mainTxt" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section04 .list li" ,{
    duration:1,
    x:-100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})



let scene04= new ScrollMagic.Scene({
    triggerElement:".section04",
    duration:"300%",
    triggerHook:0,
    offset:0
});

scene04.addTo(controller);
scene04.setTween(time04);
scene04.addIndicators({
    name:"section04",
    colorTigger:"#fff",
    colotStart:"#495",
    colorEnd:"#495"
})
scene04.setPin(".section04")


let time05 = gsap.timeline();
time05.from(".section05 .title .char" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
 .from(".section05 .mainTxt .mainTxt01" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section05 .mainTxt .mainTxt02" ,{
    duration:1,
    x:-100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section05 .mainTxt .mainTxt03" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(".section05 .list li" ,{
    duration:1,
    x:100,
    opacity:0,
    ease:"back.out",
    stagger:{
        each:0.1
    }
})
.from(section05Line , {
    duration:1,
    cssRule:{
         opacity:0.5
     },
},"-=0.3")



let scene05= new ScrollMagic.Scene({
    triggerElement:".section05",
    duration:"300%",
    triggerHook:0,
    offset:0
});

scene05.addTo(controller);
scene05.setTween(time05);
scene05.addIndicators({
    name:"section05",
    colorTigger:"#fff",
    colotStart:"#495",
    colorEnd:"#495"
})
scene05.setPin(".section05")
