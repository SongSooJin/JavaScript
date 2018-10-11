function hello() {
  return "Hello World!";
};

function add(a,b) {
  return a + b;
};

console.log(hello());
console.log(add(2,3));

// exports 키워드는 module.exports 를 가르키는 별칭이다.
console.log(exports === module.exports);

// module.exports는 이미 빈 객체인 상태이다.
// 이미 할당된 빈 객체를 버리고 새로운 객체를 할당하려면
// module.exports = 새객체 형태로 사용해야 한다.
// 별칭인 exports에 할당하면 exports가 가리키던 참조값(module.exports)을
// 버리고 새 객체를 할당하는 것이 되고 , 문제는 외부에 제공하는 객체는
// exports가 아니라 module.exports이므로 이렇게 사용할 수 있다.

module.exports = {
  "id":10,
  hello,
  add
};


