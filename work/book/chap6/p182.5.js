

function foo() {
console.log(this === foo);

var fn = function() {
  console.log(this.a);
};

// fnBind 함수 내에 this는 foo로 고정된 상태이다.
var fnBind = fn.bind(this);

  setTimeout(fnBind, 100);

}



foo.a = "foo.a";

// foo();
foo.call(foo);