
// function Car() {
// 
// }

// 타 언어의 클래스 문법에 고착된 사고방식을 갖고 있는 개발자들이 
// js생성자 함수 개념을 어려워 하므로 타 언어에서 지원하는 문법과 
// 비슷한 문법을 지원하기 시작했다. 더불어, 생성자 함수임에도 메소드처럼
// 사용하는 것을 막지 못했던 부분을 class 키워드로 생성자 함수를 만들면
// 막을수 있다.
class Car {
  
}

// TypeError: Class constructor Car cannot be invoked without 'new'
// console.log(Car()); // 오용 

let car = new Car();
console.log(car);