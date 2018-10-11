/*
일반함수 vs 화살표 함수
- this 처리방식이 다르다.
- arguments 지원여부
- new 함수 문법 가능여부
- 상속관련 prototype 객체 보유 여부
*/

// 노드에서 전역 스코프의 this가 자동으로 처리되는
// exports 객체를 가리킨다.
console.log(this === exports);

var obj = {
  a:"abj.a",
  show : function () {
    console.log(this === obj);
    console.log(typeof arguments, arguments); // arguments : 받은 파라미터들을 보관하는 객체 
    console.log(this.a);
  },
  print: () => {
    console.log(this === exports);
    console.log(typeof arguments, arguments);
    console.log(this.a);
  }
};

obj.print(10,20);