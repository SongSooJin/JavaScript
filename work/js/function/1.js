/*
객체가 갖고 있는 함수는 메소드라고 부른다.
메소드가 객체의 멤버가 아니고 단독으로 취급되면 함수라고 부른다.
자바는 언제나 메소드는 객체의 멤버로 존재한다.
하지만 자바 스크립트는 함수가 단독으로 존재할수 있다.

자바스크립트는 함수,즉 메소드가 홀로 존재 할수있다.
*/

/*
파라미터로 자료현을 표시하지 않는다.
리턴자료형을 표시하지 않는다.
접근제어자가 존재하지 않는다.
static 키워드가 존재하지 않는다. 단, ES6에 추가되었다.
함수는 선언 즉시 객체한다. 따로 객체등록을 할 필요가 없다.
*/
console.log(add(2,3,4));

function add(a,b) {
  return a+b;
}

console.log(add(2,3,4));
console.log(add(3,2,4));

/*
함수의 호출은 함수명만으로 진행된다.
파라미터는 아무런 영향을 주지 않는다.
글로벌 스코프의 함수는 컴파일 전에 재 배치 한다.
*/

function add(a,b,c) {
  return a*b*c;
}
