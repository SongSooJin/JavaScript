var a = 10;
b = 20; // Bad!  global에 추가된다. var생랙하지마 

console.log(a);
console.log(b);

// 노드 컴파일러가 컴파일 하면 전역객체 global 존재.
console.log(global.b);

const PI = 3.141592; // 상수로 확정 짓는 const 재할당 금지  / scope 룰은 let과 동일 

// PI = 3.14; //TypeError: Assignment to constant variable.

