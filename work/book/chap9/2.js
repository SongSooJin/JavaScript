// ES5 이전에 사용하던 모습 
function Car() {
  let count = 4;
  // 새로 생성되는 객체의 기본 프로퍼티를 추가하는 작업
  this.color = "red";
  this.doors = count;
}

// 부모가 자식객체에게 제공하는 자원
Car.prototype.show = function () {
  console.log("this.color = " + this.color);
};

// 상속과 무관, Car 함수 객체가 직접 갖고 있으면서 누구에게나 제공하고 싶은 
// 자원을 배치
Car.info = function (obj) {
  console.log("obj.color = " + obj.color);
}; // 자바에선 static 자원과 비슷 


// System.out.println()  : out자원은 static 자원으로 static자원은 소유클래스,스테틱 자원 방식으로 접근한다.

// console.log(Number.parseInt("3.14"));


let car = new Car(); // car가 가르키는 것은 Car.prototype
console.log(car); // Car { color: 'red', doors: 4 }
console.log(car.color); // 직접소유한 자원을 사용 
car.show(); // 자식만 사용가능, 부모의 자원을 사용 
Car.info(car); // 상속과 무관, 누구라도 사용 가능

Car.info({color : "black"}); // obj.color = black