const numStr = "33.33";

// const num = Number(numStr);
// const num = parseInt(numStr); // 소수점 상관x
// const num = parseFloat(numStr); // 소수점 상관
const num = Number.parseFloat(numStr); // 소수점 상관 Number생략가능

console.log(typeof num);

console.log(numStr + 10); // 33.3310
console.log(num + 10); // 43.33

/*
0,1 : 2진법
0,1,2,3,4,5,6,7,8,9 : 10진법
0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f : 16진법
*/

const d = new Date();
const ts = d.valueOf();
console.log(ts); // 1536219072852 < 1536219092106
// 시간차 갭으로 구함
console.log("-------------");

const n = 33.5;
// const s = n.toString();
const s = ""+n;
console.log(typeof s);
 
console.log("-------------");
 
const n1 = 0; // 관습적으로 0:false 1:true
console.log(typeof !n1); // boolean
 
const b1 = !!n1; 
// 2번째 !는 원값이 1 일때 true가 되야 하므로
//부정연산자를 2번 사용아여 원값의 의미를 보존한다.
const b2 = Boolean(n1);
console.log(typeof b2);

if (!!n1) {
  console.log("true");
} else {
  console.log("false");
} 

console.log("-------------");

// 관습적으로 처리하는 방식을 컴파일러가 받아들였다.
// number >> 0 : false
// string >> "": false
// null,undefined >> false
// Object(객체) >> true
if (n1) {
  console.log("true");
} else {
  console.log("false");
} 
 
 
 



