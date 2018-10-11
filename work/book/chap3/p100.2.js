// 관습적으로 처리하는 방식을 컴파일러가 받아들였다.
// number >> 0 : false
// string >> "": false
// null,undefined >> false
// Object(객체) >> true

var n1 ={};

if (n1) { 
  console.log("true");
} else {
  console.log("false");
} 
 