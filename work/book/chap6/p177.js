var b = 20;

var obj = {
  a: 10,
  // bb: b
  b,
  // speak: function xx() {
  //   console.log("SPEAK!");
  // }
  // 위의 코드를 줄여씀
  speak() { // speak라는 프로퍼티 키로 익명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 함수 호출한다.  
    console.log("SPEAK!");
  }
};

console.log(obj);
obj.speak(); // 프로퍼티 키로 접근한다.

//   const o = {
//     name: 'Wallace',
//     speak() {
//       return `My name is ${this.name}!`;
//     },
//   }
// o.speak(); 
// 
// const speak = o.speak;
// console.log(speak === o.speak); // true; both variables refer to the same function
// console.log(speak()); // "My name is undefined!" : undefined 노드 컴파일러 / 글로벌 => 함수 그대로 호출
