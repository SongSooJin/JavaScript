function add(a,b) {
  return a + b;
}

function multiply(a,b)  {
  return a*b;
}

var a = 10;
var b = 20;

console.log(add(a,b));


var nums = [a,b];

console.log(add(nums[0],nums[1]));

// Spread Operator : 배열의 요소를 낱개로 쪼깨서 처리한다.
console.log(add(...nums));

// Rest Parameter(나머지 파라미터)
// 할당하지 않고 남은 나머지 파라미터 값들을 모두 모아서 
// 배열에 담고 그 배열을 변수 args에 할당한다.
function calculator(flag, ...args) {
  switch (flag) {
    case "+":
      return add(...args); // Spread Operator 
    case "*":
      return multiply(...args); // Spread Operator 
      break;
      
    default:
      return " 잘못된 연산";
  }
}

console.log(calculator("+",2,3,4)); // 5
console.log(calculator("*",2,3,4)); // 6 
console.log(calculator("-",2,3,4)); // 잘못된 연산

