/*
모든 객체는 히든 프로퍼티 __proto__를 갖는다.
__proto__ 프로퍼티로 부모 객체를 참조한다.
__proto__ : 부모를 가르키는 참조 
*/

function Foo(name) {
  this.name = name || 'anony';
}

var f1 = new Foo('f1');
var f2 = new Foo();

console.log(f1);
console.log(f2);
console.log(f1.__proto__ === Foo.prototype); // 존재하는데 안보여  : 히든 프로퍼티  = Foo.prototype
console.log(f2.__proto__);
console.log(Foo.__proto__);
console.log(Foo.prototype);
console.log(Foo.prototype.constructor === Foo);

// var obj = {a:100};
// 
// console.log(obj.a);
// console.log(obj.b);


