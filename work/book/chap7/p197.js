/*
iife(Immediately Invoked Function Expression)
*/

// (function functionName() {
//   console.log("Hi");
// }) ();

// 'use strict';
// 개발자가 스스로 컴파일러에게 엄격한 방식으로 코드를 검증하라고 요청한다.

var a = 19;
b = 20; // Bad!

console.log(global.a);
console.log(global.b);

// 
// class A {
//   int x =100;
// }
// 
// class B {
//   int x = 100;
// }

{
  var x = 100;
}

{
  var x = 200;
}
(function() {
  var x = 100;  
}());

(function() {
  var x = 200;  
}());


(function() {
  'use strict';
  // 변수, 함수를 외부와 격리하여 사용하고 싶을떄 iife 식을 사용합니다.
}());


const message = (function() {
 const secret = "I'm a secret!";
 return `The secret is ${secret.length} characters long.`;
})(); // 즉시실행
console.log(message);


const f = (function() {
 let count = 0;
 return function() {
 return `I have been called ${++count} time(s).`;
 }
})();

// console.log(count);
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
//...







