let obj = {a:10};
console.log(obj);
// { a: 10 }

console.log(obj.b); // undefined
obj.b =20;
console.log(obj.b);  // 20
console.log(obj);
// { a: 10, b: 20 }


Object.defineProperty(obj,"c", {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: true
});

log = console.log;

console.log(obj);
// { a: 10, b: 20, c: 30 }

// 해당 객체의 프로퍼티 상태를 조회한다.
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// { value: 10,
//   writable: true,   // 값 수정 가능 
//   enumerable: true, // console.Log, for-in 처리가능 
//   configurable: true } // 프로퍼티 삭제가능 


console.log(Object.getOwnPropertyDescriptor(obj, "b"));
// { value: 20,
//   writable: true,
//   enumerable: true,
//   configurable: true }
  

console.log(Object.getOwnPropertyDescriptor(obj, "c"));
// { value: 30,
//   writable: true,
//   enumerable: true,
//   configurable: true }




