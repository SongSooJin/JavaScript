// some 함수 내 로직을 고정 시키는 대신 일부 로직을 
// 외부에서 받아서 사용하면 some함수 내 일부 로직은 고정적이고
// 일부 로직은 다이나믹하게 변경될 수 있어서 some함수의 
// 활용범위를 증가시킬 수 있다.

function some(fn) {
  let a = 10;
  return function (b) {
    let c = fn(b)
    return a + c;
  };
}


let fn = function (x) {
    return Math.pow(x,2); // x^2 = x의 2승
};

let fn2 = function (x) {
    return Math.pow(x,3); // x^3 = x의 3승
};

let another = some(fn);
let result = another(2); 
console.log(result);

let another2 = some(fn2);
let result2 = another2(2); 
console.log(result2);


