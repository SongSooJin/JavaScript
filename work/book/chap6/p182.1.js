// console.log(global);global : 이미존재하는 객체 

global.a = 'global.a';

function foo() {
  console.log(this === global, this === foo ,this.a);
}

foo.a = 'foo.a';

// #1
foo(); // true false 'global.a'

// #2
foo.call(foo); //false true 'foo.a'

// #3
var obj = {
  a: "obj.a",
  foo: function () {
    console.log(this === global, this === foo ,this.a);
  } // false false 'obj.a'
}

obj.foo();


// #4
function Car() {
  this.color = "black";
}

var car = new Car();
console.log(car);




