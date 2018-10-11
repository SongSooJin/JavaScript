


z = 1000;
console.log(z);
console.log(global.z);

(function() {
  var x;
  var x;
  let y;
  
console.log(x);

   x = 10;
   x = 20;

console.log(x);

// console.log(y); // TDZ : let, const 자원의 초기화 전 사용할 수 없디.

  y = 100;
  
console.log(y);

z = 2000;
console.log(z);
console.log(global.z);


}());