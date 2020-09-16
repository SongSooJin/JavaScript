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
$(".myself").css("text-shadow", shadow);
console.log(shadow);