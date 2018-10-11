// ES6 문법으로 만들자 
// class Car { // 작성은 class 지만 이해는 생성자 
//   constructor() {
//     let count = 4;
//      // 새로 생성되는 객체의 기본 프로퍼티를 추가하는 작업
//      this.color = "red";
//      this.doors = count;
//   }
// show() {
//     console.log("this.color = " + this.color);
//   }
//   static info(obj) { // static 전역자원 
//     console.log("obj.color = " + obj.color);
//   }
// }

// 실습 : ES6 코드를 ES5 코드로 바꾸자.

function Car() {
  let count = 4;
       this.color = "red";
       this.doors = count;
}

Car.prototype.show = function () {
  console.log("this.color = " + this.color); 
};

Car.info = function (obj) {
  obj.color = "black";
  console.log("obj.color = " + obj.color);
}


let car = new Car(); // car가 가르키는 것은 Car.prototype
console.log(car); // Car { color: 'red', doors: 4 }
console.log(car.color); // 직접소유한 자원을 사용 
car.show(); // 자식만 사용가능, 부모의 자원을 사용 
Car.info(car); // 상속과 무관, 누구라도 사용 가능

