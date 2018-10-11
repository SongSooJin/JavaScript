
// js 설계도 없이 객체를 만들수 있다.
var obj = {a:10}; // js 권장 방법
console.log(obj);

var obj2 = new Object();  // js 권장하지 않음
console.log(obj2);

// js 필요하면 언제든지 객체의 프로퍼티를 조작할 수 있다.
obj.b = 20;
console.log(obj);

delete obj.a;
console.log(obj);

function Vehicle() {
  // this == function context
  // 자바의 this는 고정이지만, js this는 함수를 호출하는 맥락에 따라 변경되므로 주의 필요
this.color = "black"; // java - this : 객체로 존재하는 자기자신
// 위 코드에서 동적으로 this가 가리키는 새객체 프로퍼티 color를 추가하고
// 초기값으로 "black" 문자열을 할당한다.
}

var v = new Vehicle();
// new 연산자로 생성자를 호출할 때 벌어지는 일
// 1. 새 객체를 생성
//  {}
// 2. 객체가 필료한 히든 프로퍼티를 추가한다.
// {-proto-: vehicle.prototype}
// 3. 생성자 함수를 호출한다. 이 때, function context(this)는 새 객체이다.
// { __proto__ : vehicle.prototype, color : "black"}
// 4. 생성자가 끝난 후 그 결과인 새 객체를 참조하는 값을 변수 v에 할당한다.

console.log(v.__proto__ === Vehicle.prototype);
// __proto__ : 이 히든 프로퍼티는 부모를 가리키는 용도의 프로퍼티로써 객체 생성시 자동으로 추가된다.
// 새 객체는 생성자 함수 vehecle을 사용하여 만들어 졌으므로
// 새 객체의 부모는 vehicle 함수가 가진 prototype 객체가 된다.

// prototype : 이 프로퍼티가 가리키는 객체는 자식객체에게
// 제공하고자 하는 프로퍼티를 부모입장에서 제공하기 위해
// 존재하는 객체로써 모든 일반 함수는 자동으로 이 속성을 가진다.
