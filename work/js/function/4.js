/*
조건문
*/

var isOk = true;

if (isOk) {
console.log("isOk = " + isOk);
}

console.log("---------------------------");

var val1 = 10, val2 = 9;

if (val1 > val2) {
console.log("10은 9보다 큽니다.");
}

console.log("---------------------------");

function add(a,b) {
  return a+b;
}

if (add(3,2) >= 5) {
  console.log("true");
} else {
console.log("false");
}
console.log(add(3,2) >= 5 ? "true" : "false");

console.log("---------------------------");

var array = [10, 20, 30];

for (var i = 0; i < array.length; i++) {
  console.log("array["+ i + "] = " + array[i]);
}

console.log("---------------------------");

var object = {x:10, y:20};

// for in : 객체의 프로퍼티(속성, 자바의 멤버변수) 개수만큼 하나씩 꺼내면서 자동으로 회전하여 수행됩니다.
// js의 문법 / 자바의 문법에는 없다.
for (var prop in object) {
//  if (object.hasOwnProperty(prop)) {
  console.log("object[" + prop + "] = "+object[prop]);
//  }
}

console.log("---------------------------");

var iterable = array;

// for of : iterable 객체를 대상으로 사용한다.
// 배열은 이미 iterable 객체이다.
for (item of iterable) {
console.log("item = " + item);
}

console.log("---------------------------");


var k = 0;
while (k < 3) {
console.log("k = " + k);
k++;
}

console.log("---------------------------");

for (var k = 0; k < 3; k++) {
  console.log("k = " + k);
}

console.log("");

var k = 0;
for (; k < 3 ;) {
  console.log("k = " + k);
   k++;
}

console.log("---------------------------");

k = 10;
do { // 로직을 무조건 한번 이상은 수행햐야 한다고 판단될 때
console.log("k = " + k);
k++;
}while (k < 3) {

}

console.log("---------------------------");

var rank = "Silver";

if (rank == "Gold") {
console.log("골드 등급");
} else if (rank == "Silver") {
console.log("실버 등급");
} else  {
console.log("브론즈 등급");
}

console.log("---------------------------");

// rank = "Bronze";
rank = "Gold";
// switch문은 break 문을 만나면 빠져나옴 / 순서는 아래로 내려감
switch (rank) {
  case "Gold":
    console.log("골드 등급");
    coupon();
  //  break;
  case "Silver":
    console.log("실버 등급");
    coupon();
//  break;
  default:
    console.log("브론즈 등급");
    coupon();
}

function coupon() {
  console.log("쿠폰이 한장 발급");
}
