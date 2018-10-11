// function Function() { ... }
// function Object() { ... }


// var x = 11; x는 혼자놀고 
// var y = 'Tom';
//
// prototype : 상속할때 쓰는 객체 
// 프로퍼티 : 객체의 멤버(변수) 
// var obj = { obj는 객체 (변수)
//   a : 10, // 키 : 값(value) a는 프로퍼티  객체를 정의할때는 : / a는 객체로 그룹핑해서 놀아 
//   print : function () { // 객체의 멤버인 함수를 메소드라고 부른다.
//     console.log("a = " + this.a);
//   }
// };
// console.log(obj.a);
// obj.print();

/*
함수를 선언하면 객체 2개가 만들어 진다.
1. 함수객체 Foo 
2. Foo.prototype 히든 프로퍼티가 가리키는 객체

기능적으로 보면, 함수 === 객체 + 로직 
*/

function Foo() {

}
console.log(Foo);
console.log(Foo.prototype);
console.log(Foo.prototype.constructor === Foo); // true / constructor : 생성자



