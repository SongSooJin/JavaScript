/*
js 함수는 2가지 역할을 수행한다.
1.자바의 생성자 : 새 객체를 얻는다
2. 자바의 메소드 :  파라미터를 주고 메소드 내 로직이 처리한 후 결과를 리턴받는다.
*/


function add (a,b) {
  return a + b;
}

var result = add(2,3);
  console.log(result); // 5 2번의 기능 

var obj = new add(2,3);
console.log(obj); // add {}  1번의 기능
