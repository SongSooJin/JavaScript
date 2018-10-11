var obj = {
  "key":"value", // 왼쪾은 문자열 
  "key2":11,
  key3:[],
  "this is key4":{},
}; 

console.log(obj);
console.log(obj.key);
console.log(obj.key2);
console.log(obj.key3);
console.log(obj["this is key4"]);


var what = [1,2,3];
console.log(what[0]); // 배열

var some = {"0":10};
console.log(some["0"]); // 객체 

console.log("----------------");

var object = {
  a:10,
  b:20,
  print : function () {
    console.log(this.a + this.b);
  }
};

// 객체를 대상으로 객체의 프로퍼티 개수만큼 반복하면서 하나씩 꺼내어 처리할때 사용한다.
for (var variable in object) {
  console.log(typeof variable,variable);
  // if (object.hasOwnProperty(variable)) {
  
  if (typeof object[variable] !== "function") { //변수면 출력하고 
    console.log(object[variable]);
  } else { // 함수면 호출하자
    object[variable]();
      // 위의 코드는아래와 같이 생각해라 
      // object["print"]();
      // print(); 
  }


  // }
}