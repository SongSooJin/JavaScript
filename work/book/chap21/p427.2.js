let obj = {a:10};

obj.b =20;

Object.defineProperty(obj,"c", {
  value: 30,
  writable: false, // 값 수정 가능 => fasle :불가능 
  enumerable: true,
  configurable: true
});

console.log(obj);
// { a: 10, b: 20, c: 30 }

// 해당 객체의 프로퍼티 상태를 조회한다.
console.log(Object.getOwnPropertyDescriptor(obj, "c"));

obj.c = 40; // writable : false이므로 바뀌지 않는다.
console.log(obj); // { a: 10, b: 20, c: 30 } 바뀌지 않음





