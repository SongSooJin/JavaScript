/*
상속을 설정하기 extends 키워드가 없다. ES5버전 이하 기준
현재 사용하는 대부분의 브라우저는 ES5버전을 지원한다.

함수객체끼리 상속을 연결하는 것이 아니고 함수가 가진 프로토타입 객체끼리 상속이 연결되는 것이다.
prototype Chaining : 프로토타입 객체끼리 __proto__ 프로퍼티로 부모-자식 관계가 연결된다.
*/
// 함수가 가진 prototype객체가 상속을 가진다.
function Vehicle() {
  this.run = function() {
    console.log('vehicle is running.');
  };
}

Vehicle.prototype.move = function() {
  console.log('vehicle is moving.');
};  
// Car is a vehicle
function Car() {
  this.door = 4;
}

// 자바의 extends에 해당 
// 이 지점에서 Car.prototype 객체의 부모는 누구? => Object.prototype
// 하지만 = Vehicle.prototype 해서 Vehicle.prototype 상속
Car.prototype.__proto__ = Vehicle.prototype; 
console.log('#1 >>',Car.prototype); // { __proto__: Vehicle.prototype}

Car.prototype.__proto__ = new Vehicle(); 
console.log('#2 >>',Car.prototype); // { run: function,__proto__: Vehicle.prototype}
Car.prototype.run();

console.log('-------------------');

var car = new Car(); 
console.log(car); // { door : 4, __proto__ : Car.Car.prototype}
console.log(car.door);
car.move(); //  할아버지 Vehicle.prototype의 자원을 사용한다.
car.run();

/*
move 자원을 사용하기 위해서 처리된 과정
1. car가 가리키는 객체에 해당 자원이 있는지 찾아본다. ==> 실패  this.door = 4; => { door : 4}
2. car.__proto__ 가 가리키는 부모객체 Car.prototype에 해당 자원이 있는지 찾아본다. ==> 실패  Car.prototype
3. Car.prototype.__proto__ 가 가리키는 부모객체 Vehicle.prototype 객체에 해당 자원이 있는지 찾아본다 => 성공

만약, 여기 Vehicle.prototype객체에서도 찾지 못하면 Vehicle.prototype.__proto__ === Object.prototype이므로   
한단계 위로 올라가서 Object.prototype이 가리키는 객체에서 해당 자원이 있는지 찾아본다.
부모 객체로 거슬러 올라가는 반복작업은 Object.prototype.__proto__ === null을 만날때까지 수행된다.
null을 만났다는 것은 더이상 위로 부모가 없다는 뜻이다.
*/
