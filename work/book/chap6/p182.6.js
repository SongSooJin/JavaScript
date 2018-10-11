

function foo() {
console.log(this === foo);

// fnBind 함수 내에 this는 foo로 고정된 상태이다.
  setTimeout((function() {
    console.log(this.a);
  }).bind(this), 100);

}



foo.a = "foo.a";

// foo();
foo.call(foo);