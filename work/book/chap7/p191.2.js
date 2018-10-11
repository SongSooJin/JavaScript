var a = 10;
let b = 20;
const c = 30;

// var로 선언한 자원은 조건문, 블로문의 범위 연산자가 
// 스코프를 제한한지 못한다.
{
  console.log(a);
  console.log(b);
  console.log(c);
  
  var aa = 100;
  let bb = 200;
  const cc = 300;
  
  console.log(aa);
  console.log(bb);
  console.log(cc);

}
// 
// console.log(a);
// console.log(b);
// console.log(c);

console.log(aa); //ReferenceError
console.log(bb);
console.log(cc);

