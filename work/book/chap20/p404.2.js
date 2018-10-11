// Hoisting
var add;
var add;
 
//TypeError: add is not a function 
console.log(add); // undefined

 add = function () {
  return 10;
};

console.log(add()); // 10


// 자바의 패키지와 가깝다 노드의 모듈은 

// 위는 개발자 A 

// -----------------------

// 아래는 개발자 B 

add = function () {
  return 20;
};

console.log(add()); // 20

// -----------------------

// 아래는 개발자 C
// A개발자는 10을 리턴한다고 주장하고 B개발자는 20을 리턴한다고 주장한다.
// C개발자는 A개발자가 만든 함수를 사용하고자 한다.
// 어떻게 가능할까?
// 



console.log(add()); //20