
/*
Hoisting : 글로벌 스코프의 함수 선언식은 컴파일 전에 재 배치 한다.
*/
function add(a,b) {   //뒤에서 덮어쓰므로 데드코드
  return a+b;
}

function add(a,b) {
  console.log(a);   // undefined: 초기값이 할당되지 않았다.
  console.log(b);
  return a*b;   // undefined * undefined
}

// console.log(add(2,3,4));
// console.log(add(2,3,4));
// console.log(add(3,2,4));

console.log(add());   // NaN : Not a Number
