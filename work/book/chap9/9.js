
// 클래스는 호이스팅이 안된다.
// 클래스는 재정의도 허용하지 않는다.
class Car {
  constructor(color) {
    this.color = color || "Red";
  }
}

// Sedan is-a Car
class Sedan extends Car {
  
}

var car1 = new Car();
console.log(car1);

var car2 = new Car("Black");
console.log(car2);
