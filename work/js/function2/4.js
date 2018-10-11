console.log(add(2,3));

function add (a,b) {
  return a+b;
} // 데드코드 : 오버로딩 개념이 없음
console.log(add(2,3));

function add(a,b,c) {
  return a*b;
}

console.log(add(2,3));
// console.log(add(2,3));
// console.log(add(2,3));
// console.log(add(2,3));

///////////////////////////////
function add (a,b) {
  return a+b;
} // 데드코드 : 오버로딩 개념이 없음


function add(a,b,c) {
  return a*b;
}

console.log(add(2,3));
console.log(add(2,3));
console.log(add(2,3));

///////////////////////////////

function Car() {
  this.color = "black";
}

var obj = new Car();
c.color = "blue";

console.log(c);

function Car() {
  this.window = 4;
}
