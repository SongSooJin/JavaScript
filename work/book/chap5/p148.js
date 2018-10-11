console.log(0.1 + 0.1);
console.log(0.1 + 0.2);// 0.30000000000000004
console.log(0.1 + 0.3);

console.log("---------------------");

const x = 0.2, y = 0.3, z = 0.1;
let result = x - y - z;
console.log('result = ', result);
let equal = (Math.abs(result) < Number.EPSILON);

// Math.abs 절대값을 반환
console.log("---------------------");

let n = 0;
console.log(Number.EPSILON);
while(true) {
 n += 0.1;
 if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);



// let n = 0;
// 
// while(true) {
//  n += 0.1;
// 
//  if(n === 0.3) break; // 0.3이 정확히 되지 않아 무한루프~~~
// }
// console.log(`Stopped at ${n}`);