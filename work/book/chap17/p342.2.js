function log(data) {
  console.log(data);
}

log("hello Wolrd".replace('wolrd',"javascript"));
// hellp javascript

// replace 함수는 1개만 바꿔준다.
log("Blue has a blue house and blue car".replace("blue","red"));
// Blue has a red house and blue car


// /blue/g : 줄 끝까지 (한줄) blue 단어를 바꿔준다.
log("Blue has a blue house and blue car".replace(/blue/g,"red"));
// Blue has a red house and red car


// /blue/gi : 한줄 끝까지 blue 단어를 대소문자 구분없이 바꿔준다.
log("Blue has a blue house and blue car".replace(/blue/gi,"red"));
// red has a red house and red car

// or조건 
// 대상을 찾아서 함수의 파라미터 x에 전달하고 함수가 리턴하는 값을
// 바꿔치기용으로 사용하라.
log("Blue has a blue house and blue car".replace(/blue|house|car/gi, function myFunction(x) {
  return x.toUpperCase();// 대문자로 바꿔라
}));
// BLUE has a BLUE HOUSE and BLUE CAR


log("hello".replace(/h/,"b"));
// bello

// /h../ : 찾을 땐 h로 찾고 .. 은 h로 부터 2글자 더 (.은 글자수 의미)
log("hello".replace(/h../,"bbb"));
// bbblo


