// 관객 ====> 가수
// 관객 == 매니저 ==> 가수
// 관객이 가수 객체를 사용하는 것은 똑 같다.
// 매니저 (프락시)를 통해  가수 객체의 접근하게 되면
// 매니저가 제공하는 부가 기능을 이용할 수 있는 혜택이 있다.

// 메타프로그래밍이란?
// 프로그램이 자기자신을 수정하는 것이다.

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const coefficients = {
  a: 1,
  c: 3,
};

// evaluate 함수 개발자의 의도와 다르게 부족한 값을
// 파라미터로 전달하면 계신이 엉망이 된다.
// 어떻게 하면 막을 수 있을까?

const betterCoefficients = new Proxy(coefficients, {
  // Get Trap
  // 객체의 프로퍼티의 값을 가져가려 할 때 기동하는
  // 트랩(미리 사용처가 정해진 프락시 로직용 함수) 객체이다.
  get(target, key) {
    return target[key] || 0;
  },
});


let result = evaluate(5, betterCoefficients);
console.log(result); // 76




