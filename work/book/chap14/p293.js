console.log("1.Before timeout: " + new Date());

function f() {
  console.log("2.After timeout: " + new Date());
}

// callback 함수 :
// 로직을 갖고 있는 함수의 작성은 개발자가 하지만 함수의 실행은 직접하지 않고
// 함수를 전달받은 측에서 때가 되면 실행하는 방식에서 사용하는
// 함수를 콜백함수라고 부른다.
setTimeout(f, 6 * 1000); // one minute.

console.log("3.I happen after setTimeout!");
console.log("4.Me too!");