// array literals
const arr1 = [1, 2, 3]; // array of numbers 숫자로 구성된 배열
const arr2 = ["one", 2, "three"]; // nonhomogeneous array 비균질적 배열
const arr3 = [[1, 2, 3], ["one", 2, "three"]]; // array containing arrays 배열을 포함한 배열
const arr4 = 
[ // nonhomogeneous array 비균질적 배열
   { name: "Fred", type: "object", luckyNumbers : [5, 7, 13] },
   [
   { name: "Susan", type: "object" },
   { name: "Anthony", type: "object" },
],
 1,

 function() { return "arrays can contain functions too"; },
 "three",
];


// 배열 요소에 접근하기
// accessing elements
// arr1[0]; // 1
// arr1[2]; // 3
// arr3[1]; // ["one", 2, "three"]
// arr4[1][0]; // { name: "Susan", type: "object" }

// 배열 길이
// array length
// arr1.length; // 3
// arr4.length; // 5
// arr4[1].length; // 2

// 배열 길이 늘리기 
// increasing array size
arr1[4] = 5;
arr1; // [1, 2, 3, undefined, 5]
arr1.length; // 5

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로
// accessing (not assigning) an index larger than the array
// 배열의 길이가 늘어나지 않습니다.
// does *not* change the size of the array
arr2[10]; // undefined
// arr2.length; // 3

// Array constructor (rarely used) Array 생성자 (거의 사용하지 않는다.)
// Bad!
const arr5 = new Array(); // empty array
const arr6 = new Array(1, 2, 3); // [1, 2, 3]
const arr7 = new Array(2); // array of length 2 (all elements undefined)
const arr8 = new Array("2"); // ["2"]
