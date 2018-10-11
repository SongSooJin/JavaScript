/*
f1 객체의 부모는 Foo.prototype이 가리키는 객체입니다.
f1 객체의 부모의 부모는 Object.prototype 이 가리키는 객체입니다.
*/

function Foo(name) {
}

var f1 = new Foo();

console.log(f1);
console.log(f1.__proto__ === Foo.prototype); // 존재하는데 안보여  : 히든 프로퍼티  = Foo.prototype

console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(f1.__proto__.__proto__ === Object.prototype);
// 자바의 슈퍼클래스의 오브젝트에 해당
// Object.prototype 객체의 부모는 존재하지 않으므로
// 이 객체가 js에서 모든 객체의 부모 객체가 된다.
console.log(Object.prototype.__proto__);
console.log(Object.prototype.__proto__ === null);


// 만약에 내가 모든객체가 공통으로 가져야할 변수,메소드가 있다면 이런 자원은
// Object.prototype이 가리키는 객체에 추가하면 된다.
// 그러면 자식 객체들은 부모의 자원을 상속으로 사용할 수 있으므로 
// Object.prototype이 가리키는 객체에 존재하는 자원을 이용 할 수있다.


