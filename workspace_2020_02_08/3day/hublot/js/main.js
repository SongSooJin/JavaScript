let isEnd = true;

let hublot = new fullpage("#main", {
    scrollBar: true,
    onLeave:function(origin, destnation, dir) {
      pageNum = destnation.index+1;
    },
    afterLoad:function() {
      isEnd=true;
    }
});

// 1. btnUp/btnDown을 누르면
let pageNum = 1;  
$(".btns .btnDown").on("click", function() {
    if(pageNum < 6) {
      if(isEnd) {
      pageNum+=1; // 1증가 한에서 같은 표현 : pageNum1++; / pageNum = pageNum+1;
      fullpage_api.moveTo(pageNum);

      isEnd = false;
    } 
  }
  return false; //원래 a태그가 가지고 있는 새로고침 기능을 없앰
}); //제이쿼리 기법
// document.querySelector(".btns .btnDown").addEventListener("click"); // 자바 스크립트 기법

$(".btns .btnUp").on("click", function() {
    if(pageNum > 1) {
      if(isEnd) {
      pageNum-=1;
      fullpage_api.moveTo(pageNum);

      isEnd = false;
    }
  }
  return false; 
});


// $('.btns .btnUp').on("click",function () {
 
//   fullpage_api.moveSectionUp();
//   if(isEnd) {
//     isEnd = false;
//   }
  
//   return false;
// });

// $('.btns .btnDown').on("click",function () {
  
//   fullpage_api.moveSectionDown();
//   if(isEnd) {
//     isEnd = false;
//   }
//   return false;
// });


  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("bg", '../js/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });
//ajax 로컬에서 안돌아감
//

  particlesJS("bg",{
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

