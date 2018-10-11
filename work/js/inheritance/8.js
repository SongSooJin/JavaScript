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
Car.prototype.__proto__ = Vehicle.prototype; 

var car = new Car();
console.log(car);
car.move(); //  할아버지 Vehicle.prototype의 자원을 사용한다.

// // Bus is a vehicle
// function Bus() {
//   this.doors = 2;
//   this.color - "blue";
// }
// 
// // 자바의 extends에 해당 
// Bus.prototype = new Vehicle(); 
// Bus.prototype = Object.create(Vehicle.prototype); 


// 자바의 경우 상속은 아래와 같이 쓴다.
// class Car extends vehicle {}