const obj = { b: 2, c: 3, d: 4 };
let a, b, c;

// this produces an error:
// {a, b, c} = obj;
// this works:

console.log(a,b,c);

({a, b, c} = obj);


console.log(a,b,c);

// a normal array
const arr = [1, 2, 3];
// array destructuring assignment

let [x, y] = arr;
// x; // 1
// y; // 2
// z; // error: z hasn't been defined

console.log(x,y);

// ...rest : 나머지 파라미터 
// 나머지 값들을 모아서 배열을 할당한다.
const arr2 = [1, 2, 3, 4, 5];
let [x2, y2, ...rest2] = arr2;

// x; // 1
// y; // 2
// rest; // [3, 4, 5]

console.log(x2);
console.log(y2);
console.log(rest2);
console.log(Array.isArray(rest2));



let a3 = 5, b3 = 10;

[a, b] = [b, a];
// a; // 10
// b; // 5

console.log(a3);
console.log(b3);








