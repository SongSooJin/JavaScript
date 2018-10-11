// 관객 ====> 가수
// 관객 == 매니저 ==> 가수
// 관객이 가수 객체를 사용하는 것은 똑 같다.
// 매니저 (프락시)를 통해  가수 객체의 접근하게 되면
// 매니저가 제공하는 부가 기능을 이용할 수 있는 혜택이 있다.

// 메타프로그래밍이란?
// 프로그램이 자기자신을 수정하는 것이다.

const coefficients = {
 a: 1,
 b: 2,
 c: 5,
};

function evaluate(x, c) {
 return c.a + c.b * x + c.c * Math.pow(x, 2);
}
let result1 = evaluate(5, coefficients);
console.log(result1); // 136

const coefficients2 = {
 a: 1,
 c: 3,
};

// evaluate 함수 개발자의 의도와 다르게 부족한 값을
// 파라미터로 전달하면 계신이 엉망이 된다.
// 어떻게 하면 막을 수 있을까?
let result2 = evaluate(5, coefficients2);
console.log(result2); // NaN



