/*

*/

function Foo(name) {
}

var f1 = new Foo();
console.log(f1);

var o1 = new Object();
console.log(o1);

console.log(o1.__proto__ === Object.prototype);

// js 동적으로 객체를 조작가능 
Object.prototype.show = function () {
  console.log("Hello World");
};

o1.show(); // 아버지 객체의 자원을 사용 
f1.show(); // 할아버지의 객체의 자원을 사용 


