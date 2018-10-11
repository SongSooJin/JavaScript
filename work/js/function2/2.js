function gildong() {
// return undefined;
}

/*
처음보는 함수가 있다.
이 함수는 메소드로 사용해야 하나? 생성자로 사용하나?
암묵적인 룰: 생성자 용 함수는 대문자로 시작하자.
*/

var result = gildong();
console.log(result); //  return이 없으면 undefined

function Car() {

}

// var c = Car();
var c = new Car();
console.log(typeof c); //생성자형 호출 객체 / object
console.log(c);  // Car {}  
