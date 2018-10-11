
// 클래스는 호이스팅이 안된다.
// 클래스는 재정의도 허용하지 않는다.
class Car {
  constructor(color) {
    this.color = color || "Red";
  }
  // Car.prototype에 해당 
  print() {
    console.log("this.color = " + this.color);
  }
}

// Sedan is-a Car
class Sedan extends Car {
   constructor(Kolor, doors=4) {
    super(Kolor); // this가 부모에게 전달된다. 
    this.doors = doors;
   }
   // @Override 부모의 객체를 재정의 하겠다.
   print() {
     super.print(); // class Car의 print 함수 호출 
     console.log("this.color = " + this.color); // // @Override 부모의 객체를 재정의 하겠다.
   }
}


var sedan = new Sedan("Black");
console.log(sedan); // Sedan { color: 'Black' , doors: 4 }
sedan.print();


