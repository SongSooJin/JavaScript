// 프로퍼티의 두가지 종류
// 1. data descriptor : 데이터 프로퍼티
// 2. accessor descriptors : 접근제어 프로퍼티 

// 1. 데이터 프로퍼티
let obj = {
  a: 10
};

Object.defineProperty(obj, "b", { // 접근제어 프로퍼티 
  get: function() {
    // 여기에 값을 가공하는 비지니스 로직을 배치 
    return this.a * 10;
  },
  set: function(a) {
    this.a = a / 10;
  },
  enumerable: true,
  configurable: true
});

console.log(obj); // { a: 10, b: [Getter/Setter] }

console.log(Object.getOwnPropertyDescriptor(obj, "b"));
// { get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true }

console.log(obj.a); // 10
console.log(obj.b); // 100

obj.b = 200;
console.log(obj); // { a: 20, b: [Getter/Setter] }

console.log("-----------------------------------------------");

class Square {
  constructor(length = 10) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(area) {
    this.length = Math.sqrt(area, 2);
  }
}

let s = new Square();
console.log(s);  // Square { length: 10 }
console.log(s.area); // 100 
s.area = 400;
console.log(s); // Square { length: 20 }

console.log(Object.getOwnPropertyDescriptor(Square.prototype,"area"));
// { get: [Function: get area],
//   set: [Function: set area],
//   enumerable: false,
//   configurable: true }

