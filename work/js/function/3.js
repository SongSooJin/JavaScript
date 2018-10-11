/*
js 자료현은 몇개 인가요?
*/
var a = 10;

console.log(typeof a); // number

var c = 0.2;

console.log(typeof c); // number

console.log(typeof 10); //number

// console.log(10.toFixed(4));

var aa = 10;

console.log(aa.toFixed(4));

var b = "Hi";

console.log(typeof b); // string

console.log(typeof "Hello"); // string

console.log("Hello".length); // 5 문자열은 편의상 객체로 인정함

/*
js 제대로 아는 개발자가 없다.
*/

var d = true;

console.log(typeof d); // boolean

var e = {}; // 객체 생성
// new 연산자가 없으므로 설계도 없이 객체를 생성할수 있다.

console.log(typeof e); // object

console.log(typeof {x:10,y:20}); // object

var dd = new Object();
// 원한다면 new 연산자로 함수를 생성자로 사용하여 새 객체를 만들수 있다.
console.log(typeof dd);

var f = null;

console.log(typeof f); // object
// typeof 연산자로 null체크를 하면 안된다.

var g;

console.log(typeof g); // undefined

var fn = function() {

}; // 함수 단독으로 객체

console.log(typeof fn); // function = object
// function은 자요형이 아님
// 개발자의 편의를 위해 function으로 문자열을 리턴한다.

var h = []; // 배열 생성

console.log(typeof h); // object


var i = Symbol();
//객체의 프로퍼티 키로 유일성을 회복하기 위한 새로운 기술.
console.log(typeof s); // undefined


// numer string boolean null object undefined symbol 7개 자료형 
