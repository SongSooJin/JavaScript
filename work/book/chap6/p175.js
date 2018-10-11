
// 파라미터 자리에 할당연산자를 사용하면
// 조건적으로 할당이 작동한다. 해당 파라미터를
// 받지 못하는 경우에만 작동하는 코드입니다.
function f(a, b = "default", c = 3) {
 return `${a} - ${b} - ${c}`;
}


console.log(f(5, 6, 7)); // "5 - 6 - 7"
console.log(f(5, 6)); // "5 - 6 - 3"
console.log(f(5)); // "5 - default - 3"
console.log(f()); // "undefined - default - 3"