class Square {
  constructor(length = 10) {
    this.length = length;
    // this.area = length * length;
  }
  // Square.prototype에 객체에 해당 
  show() {
    console.log("this.length = " + this.length);
  }
  get area() {
    return  this.length * this.length;
  }
  set area(area) {
    this.length = Math.sqrt(area); // 400을 받아서 루트를 씌움 해서 length = 20이 들어감 
  }
}

let s = new Square(); // length = 10에 올라가 this.length가 가지고 있다가 s로 받아
console.log(s); //  s로 호출 length = 10 출력 
console.log(s.length);
console.log(s.area); // ()괄호  사용하지 않는다. 그렇지 않으면 get호출 
s.area = 400; // ()사용하지 않는다. 할당연산자는 set 호출 
console.log(s.length);
console.log(s.area);


