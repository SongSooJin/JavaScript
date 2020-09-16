let shadow="";
let total=50;
for(let i=1; i<total;i++) {
  if(i !=total-1) {
  shadow = shadow + `${i}px ${i}px 0px rgba(255, 255, 255, 1),`
  } else {
    shadow = shadow + `${i}px ${i}px 0px rgba(255, 255, 255, 1)`
  }
  //1px 1px 0px rgba(0, 0, 0, 1),
  //2px 1px 0px rgba(0, 0, 0, 1),
}

//h1.style.display = "none"
$(".myself .txt").css("text-shadow", shadow);
console.log(shadow);

var typed = new Typed(".txt #me", {
  strings: [
            "Web Publlisher", 
            "UI/UX Designer", 
            "Interaction Designer",
            "FrontEnd Developer"
          ],
  typeSpeed: 40,
  backSpeed: 10,
  loop:true,
  cursorChar:"_",
});

let myPortfolio = new fullpage("#main", {
  scrollerBar:true,
});