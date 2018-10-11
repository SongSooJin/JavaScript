

function foo() {
console.log(this === foo);

// fnBind 함수 내에 this는 foo로 고정된 상태이다.
  // setTimeout((function() {
  //   console.log(this.a);
  // }).bind(this), 100);
  
  var fn = (function() {
    console.log(this.a);
  }).bind(this);

// var fn = function() {
//   console.log(this.a);
// };

// 화살표 함수 = 일반함수.bind(가장 가까운 this);

// 화살표 함수는 this가 lexical Scope(코드 위치)를 기준으로
// 가장 가까운 this에 자동으로 bind되고 고정된다,
// var fn = () => {
//   console.log(this.a);
// };

 setTimeout(fn, 100);
}



foo.a = "foo.a";

// foo();
foo.call(foo);