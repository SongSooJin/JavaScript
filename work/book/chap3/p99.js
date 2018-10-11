const now = new Date();

console.log(now); // 2018-09-06T07:07:36.125Z
console.log(now.getFullYear()); // 2018
console.log(now.getMonth()); // 8 (0-base) == 9월
console.log(now.getDate()); // 6일
console.log(now.getHours()); // 16시
console.log(now.getMinutes()); //10분
console.log(now.getSeconds()); // 15초
// 요일,월은 0이 시작

// 2018-12-25일은 무슨요일 일까요?
const xmas = new Date(2018, 11, 25);

console.log(xmas.getDay()); // 2 /0은 일요일

function functionName() {
  
}


const email = /@/gi;

/*
/정규표현식/옵션
정규표현식 선언법으로 작성하면 바로 객체로 취급한다.
*/

console.log(email.__proto__ === RegExp.prototype);

;console.log(email.test("abc.com")); // false
;console.log(email.test("abc@dsf.com")); // true


