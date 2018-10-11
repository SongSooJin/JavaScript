
const x = 19.51;
const log = console.log;

log(x.toFixed(3)); // "19.510"
console.log(x.toFixed(2)); // "19.51"
x.toFixed(1); // "19.5"
x.toFixed(0); // "20"

console.log(Object.keys(Number.prototype));
console.log(Reflect.ownKeys(Number.prototype));

console.log(Math.min(7,3,11,5));
console.log(Math.max(7,3,11,5));

let arr = [7,3,11,5];
console.log(Math.max(...arr));
