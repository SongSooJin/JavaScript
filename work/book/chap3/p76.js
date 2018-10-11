var a = 10;
var a = 10;
console.log(a); // 10

let b = 10;
// let b = 10; SyntaxError: Identifier 'b' has already been declared
console.log(b); // 10

// scope : 범위 연산자를 기분으로 해당 자원을 어느 위치에서 접근하여 사용할 수 잇는가를 판단하는 기준 

// {} : 범위 연산자 
var x = 100;

if (true) {
  console.log(x); // 100
var y = 200;
let yy = 200;  
}
console.log(y); // 200  자바에선 안돼
console.log(yy); // ReferenceError: yy is not defined 바깥범위에서 안쪽범위에 접근 안돼 

// 100명의 고객중 한명이 안되면 안됌  all or nothing!





