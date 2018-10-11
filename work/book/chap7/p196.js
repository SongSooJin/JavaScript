let globalFunc; // undefined global function
{
  let some = "Hi";
  let blockVar = 'a'; // block-scoped variable

  globalFunc = function() {
    console.log(blockVar);
  }
}
globalFunc(); // logs "a"

console.log("-------------------------------");

let f; // undefined function
{
  let o = {
    note: 'Safe'
  }; // o 는객체 / 객체를 만들떄 {}범위연산자가 아님 

  f = function() { // 함수 
    return o;
  }
}
let oRef = f(); // f(); 함수를 실행하자. oRef는 o
oRef.note = "Not so safe after all!";
console.log(oRef.note);




