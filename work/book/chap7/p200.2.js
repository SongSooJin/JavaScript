var x;
var y;
var x;
console.log(x); // undefined

x = 3;
console.log(x); // 3

if (x !== 3) {
  console.log(y);
  y = 5; // var 자원은 조건문의 범위연산자로 격리할 수 없다.
  if (y === 5) {
    x =3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y); // undefined
}