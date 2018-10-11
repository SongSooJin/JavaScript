let obj = {
  a:10, b:20,
  cc : function () {
    console.log("Hello");
  }
};


let keys = Object.keys(obj);
console.log(typeof keys); // 배열도 객체
console.log(Array.isArray(keys)); // 배열 체크
console.log(keys);
console.log("--------------------------");

Object.keys(obj) //[ 'a', 'b', 'cc' ]
.filter(prop => prop.length < 2 ) // 프로퍼티 키가 2글자 이상이면 제외  [ 'a', 'b']
.forEach(prop => console.log(`${prop} : ${obj[prop]}`));