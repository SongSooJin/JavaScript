// 숫자, 문자열은 immutable
var pi = 3.14;

var str = "Hello";
var str2 = "Hello";
var str3 = new String ("Hello");

console.log(str);
console.log(str2);
console.log(str3);
console.log(str3.toString());

// == : 동등 비교 연산자, 취급하는 값이 같나요?
// === : 동일 비교 연산자, 메모리가 같은 곳인가요?

console.log(str == str2); // true
console.log(str === str2); // true

console.log(str == str3); // true
console.log(str === str3);// false

var txt = "";

for (var i = 0; i < 10; i++) {
  txt += i;
} // Bad!

console.log(txt); // hip메모리에 덮어쓰기가 안됌 (immutable)


// 원시타입은 크기가 고정  객체는 반대 

// StringBuffer가 없어?