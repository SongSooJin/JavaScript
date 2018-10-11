/*
모든 함수의 부모는 Function.prototype이 가리키는 프로토타입 객체입니다.
*/

function Foo() {

}

// 이렇게 사용하지 않음
// var x = new Function();
// console.log(x);

console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Foo.__proto__ === Function.prototype);
console.log(function () {}.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);