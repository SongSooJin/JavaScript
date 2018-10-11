let obj = {a:10};

obj.b =20;

Object.defineProperty(obj,"c", {
  value: 30,
  writable: true,
  enumerable: true, 
  configurable: false // 삭제가능 => 불가능
});
console.log(obj);
// { a: 10, b: 20, c: 30}




console.log(Object.getOwnPropertyDescriptor(obj, "c"));

delete obj.c;
console.log(obj);
// { a: 10, b: 20, c: 30 }
// configurable: false 이므로 삭제되지 않는다.