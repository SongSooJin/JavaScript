let obj = {a:10};

obj.b =20;

Object.defineProperty(obj,"c", {
  value: 30,
  writable: true,
  enumerable: true, 
  configurable: true 
});
console.log(obj);
// { a: 10, b: 20, c: 30}




console.log(Object.getOwnPropertyDescriptor(obj, "c"));
// { value: 30,
//   writable: true,
//   enumerable: true,
//   configurable: true }


Object.freeze(obj); 
// 객체안의 모든 프로퍼티가 writable: false / configurable: false 로 변경된다.

console.log(Object.getOwnPropertyDescriptor(obj, "c"));
// { value: 30,
//   writable: false,
//   enumerable: true,
//   configurable: false }

console.log(Object.isFrozen(obj)); // true
