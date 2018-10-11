console.log("START");

// ReferenceError: i is not defined
// var fn = function () {  
//   console.log(i);
// };

// var 는 클로져 생성이 안됌

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  },2000);
} // var 조건문의 범위연산자에 못미침 

// console.log("i = " + i);
console.log("END");


// START
// END
// 1
// 2
// 3