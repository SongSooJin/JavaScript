console.log(Reflect.ownKeys(Function.prototype));

// [ 'length',
//   'name',
//   'arguments',
//   'caller',
//   'constructor',
//   'apply',
//   'bind',
//   'call',
//   'toString',
//   Symbol(Symbol.hasInstance) ]
  
function foo() {
  // global : 노드 컴파일러가 처리하면 사용할 수 있는 전역객체를 가리키는 예약어 
  console.log(this === global); 
  return 100;
}
console.log(foo()); // true,100
console.log(foo.call()); // true,100
// 함수 내부에서 사용하는 this를 함수 호출시 변경하고 싶다면 call 방법으로 함수를 호출한다.
console.log(foo.call({})); // false,100

