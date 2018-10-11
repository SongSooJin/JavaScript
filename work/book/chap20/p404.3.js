console.log(this === global); // false
console.log(this); // {} 빈객체 
console.log(this === exports); // true
// exports : 노드가 제공하는 예약어로 객체이다.
// 이 파일에서 다름 파일로 제공하고 싶은 자원을
// 직접 선택하여 노출하고 싶을 때 등록하는 객체이다.

// 노드는 js파일을 만들면 자동으로 iife로 만들고 exports를 준다.

console.log(1);

(function(obj) { // 개발자 A
  var a = 10;
  var x = 1000;
  console.log(2,a);
  
  // export : 제공하고 싶은 자원을 직접 선택하여 노출해야 한다.
  obj.A = { // A문자열 패키지 역할을 수행
    a 
  };
  }(this));
// iife : 격리공간을 만들겠다.
// IIFE :  함수 스코프를 사용하여 코드를 외부와 격리한다.

console.log(3);

(function(obj) { // 개발자 B
  var a = 20;
  console.log(2,a);
  
  obj.B = { // B문자열 패키지 역할을 수행 = ㅓㄴ 네임스페이스
    a 
  };
}(this));

// 개발자 C가 A의 a변수를 사용하고 싶다.
console.log(this.A.a);

// 개발자 C가 B의 a변수를 사용하고 싶다.
console.log(this.B.a);



// 1. 함수스코프를 사용하여 격리한다.
// 2. 함수 안쪽에 자원은 기본적으로 외부에서
// 접근 할 수 없으므로 외부에 제공하고 싶은
// 자원을 직접 노출시킨다. (export)
// 3. 노풀 시 프로퍼티 이름이 충돌되면 의미가
// 없어지므로 노출할 때 고유의 네임스페이스 프로퍼티를 추가한다.

