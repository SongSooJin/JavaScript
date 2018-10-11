
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
  
  // 자바의 경우 명시해야함  생략 안된다.
   // constructor(Kolor) {
   //  super(Kolor); // this가 부모에게 전달된다. 
   // }
}

// new Sedan("Black")의 "Black"은 constructor(Kolor)의 Kolor에 들어가 super(Kolor)의 Kolor에서 받아서 다시 위에 
// class Car의 constructor(color)의 color에 들어가 this가 받아서 호출된다.

var sedan = new Sedan("Black");
console.log(sedan); // Sedan { color: 'Black' }
