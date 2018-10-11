let obj = {a:10};

obj.b =20;

Object.defineProperty(obj,"c", {
  value: 30,
  writable: true,
  enumerable: false, // console.Log, for-in 처리가능 => 불가능 
  configurable: true
});

console.log(obj);
// { a: 10, b: 20}
// enumerable: false 이므로 로그에 출력되지 않는다.

for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) {
    console.log(obj[variable]);
  }
};
// 10
// 20

console.log(obj.c);
// 따로 출력할 경우 존재 
console.log(Object.getOwnPropertyDescriptor(obj, "c"));


