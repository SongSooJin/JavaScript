// 자바의 경우
// List<Integer> list = new ArrayList<Integer>();
// list.add(1);
// list.add(new Integer(2));
// list.add("hi"); // <Object>로 바꿔야 출력이됌

// js의 경우
var ary = [];
ary[0] = 1;
ary[1] = "null";
ary[3] = 1;

console.log(ary);

ary.push(2); // 맨끝에 추가한다.
console.log(ary);

ary.push("Hi"); // 맨끝에 추가한다.
console.log(ary); // [ 1, 'null', <1 empty item>, 1, 2, 'Hi' ]

ary = [
  1,
  2,
  3,
];

ary = [1,2,3,];
console.log(ary);

var obj = {a:1,b:2};
console.log(obj);


