/*
모든 함수가 가져야할 공통 자원은 
Function.prototype이 가리키는 객체에 배치하는것이 좋다
*/

function Foo(name) {
}

var f1 = new Foo();
console.log(f1);

console.log(Object.__proto__ === Function.prototype);

console.log(Foo.__proto__ === Function.prototype);

Function.prototype.say = function () {
  console.log("Hi Wolrd");
};

Foo.say();
Object.say();


