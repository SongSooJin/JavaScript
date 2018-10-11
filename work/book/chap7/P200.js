if (x !== 3) {
  console.log(y); // undefindss
  
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);// var 자원은 조건문의 범위연산잘 격리 할수 있따.
}
if (x === 3) {
  console.log(y);
}