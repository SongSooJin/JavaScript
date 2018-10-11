const x = 5;
console.log(-x); // -5
console.log(3- -5); // 8
console.log(3-(-5)); // 8 / 3+5
const y = 3 - - x; // Bad! 
console.log(y); // 8

console.log("-----------");

var a = 10;
var b = 10;

console.log(a == b); // 값만 비교  == 동등비교 
console.log(a === b); // 값 비교 + 자료형 비교  === 일치

var str1 = '10';
var str2 = "10";
var str3 = new String("10");

console.log(str1 == str2); // true
console.log(str1 === str2); // true

console.log(str1 == str3); // true
console.log(str1 === str3); // false

console.log(10 == "10"); // true
console.log(10 === "10"); // false

