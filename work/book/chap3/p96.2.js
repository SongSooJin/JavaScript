/*
JSON(JavaScript Obect Notation) :
자바스크립트 객체의 상태를 문자열로 표기하는 방법으로써
객체 상태를 파일로 저장하거나 네트워크를 통해 주고 받을때 사용하는 포맷이다.
*/

var obj = {
  a:10,
  b:20,
  print:function () {
    console.log(this.a + this.b);
  }
};

var json = JSON.stringify(obj);

console.log(typeof json);  // string
console.log(json); //  {"a":20, "b":20}
// 주의 : JSON 포맷일 때 프로퍼티를 감싸는 "" 기호가 필요함


var object = JSON.parse(json);

console.log(typeof object); //object
console.log(object); // { a: 10, b: 20 }


var ary = [10,20,30];
// wt라는 문자열  객체는 {} 배열은 []
obj.wt = ary;

console.log(JSON.stringify(obj)); // {"a":10,"b":20,"ary":[10,20,30]}






