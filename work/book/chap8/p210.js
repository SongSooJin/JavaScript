var arr = new Array(5).fill(1); // arr initialized to [1, 1, 1, 1, 1]
console.log(arr);

arr.fill("a"); // arr is now ["a", "a", "a", "a", "a"]
console.log(arr);

arr.fill("b", 1); // arr is now ["a", "b", "b", "b", "b"]
arr.fill("c", 2, 4); // arr is now ["a", "b", "c", "c", "b"]
arr.fill(5.5, -4); // arr is now ["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); // arr is now ["a", 5.5, 0, 0, 5.5]

var ary = [];
ary.length = 5;
ary.fill(1);
console.log(ary);

console.log("-------------------------");

var arr = [1, 2, 3, 4, 5];
arr.reverse(); // arr is now [5, 4, 3, 2, 1]
console.log(arr);

console.log("--------------------------");

var arr = [5, 3, 2, 4, 1]; // 기존적으로 오름차순 정렬이 적용된다.
arr.sort(); // arr is now [1, 2, 3, 4, 5]
console.log(arr);

console.log("---------------------------");

var arr = [5, 30, 2, 400, 11]; // 기존적으로 오름차순 정렬이 적용된다.
arr.sort(function (item1, item2) {
  return item1 > item2
}); 
// 정렬시 개발자가 전달해 준 익명함수 컴페레이터 로직으로 사용하여
// 어떻게 큰지 판단한다.
console.log(arr); // [ 11, 2, 30, 400, 5 ]


console.log("------------------------------");

var arr = [
  { name: "Suzanne" }, 
  { name: "Jim" },
  { name: "Trevor" },
  { name: "Amanda" }
];
arr.sort(); // arr unchanged
console.log(arr);

arr.sort((a, b) => a.name > b.name); 
console.log(arr);
// arr sorted alphabetically
// by name property
 
arr.sort((a, b) => a.name[1] < b.name[1]); 
console.log(arr);
// arr sorted reverse alphabetically
// by second letter of name property

