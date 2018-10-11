var obj = {};

const SIZE = Symbol();

console.log(SIZE); // Symbol()
console.log(SIZE.toString()); // Symbol()
console.log(typeof SIZE); // Symbol

obj.x = 10; // x 문자열 "x"로 취급한다.

obj[SIZE] = 8; // 유니크한 심볼을 프로퍼티 키로 사용하는 방법

console.log(obj[SIZE]);

// Symbol은 new객체가 안됌, 메소드 호출할때만 사용  