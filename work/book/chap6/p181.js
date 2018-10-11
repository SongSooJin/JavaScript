// => : 뚱뚱한 화살표 연산자 (자바는 ->를 사용)

// const f1 = function() {
//   return "hello!";
// }
// OR 위의 코드를 줄여씀
const f1 = () => "hello!";

// const f2 = function(name) {
//   return `Hello, ${name}!`;
// }
// OR 위의 코드를 줄여씀
const f2 = name => `Hello, ${name}!`;


const f3 = function(a, b) {
  var sum = a + b;
  return sum;
}
// 위의 코드를 줄여씀
const f3 = (a,b) => {
  var sum = a+b;
  return sum;
};

const f3 = function(a, b) {
  return a + b;
}


// OR
const f3 = (a, b) => a + b;