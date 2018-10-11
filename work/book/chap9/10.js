
// 클래스는 호이스팅이 안된다.
// 클래스는 재정의도 허용하지 않는다.
class Car {
  constructor(color) {
    this.color = color || "Red";
  }
}

// Sedan is-a Car
class Sedan extends Car {
  // constructor 함수를 생략하면 넣어준다.
   // + 부모 함수에게 파라미터도 전달한다.
   
   // ReferenceError: 
   // Must call super constructor in derived class before 
   // accessing 'this' or returning from derived constructor
   constructor() {
    super(); // 해결 
   }
}

var sedan = new Sedan("Black");
console.log(sedan); // Sedan { color: 'Black' }
