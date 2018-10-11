var arr = [1, 5, 7];

var ret = arr.splice(1,1);
console.log(ret); // [5]
console.log(arr); // [1,7]

arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
console.log(arr); // [ 1, 2, 3, 4, 7 ]

arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
console.log(arr); // [ 1, 2, 3, 4, 7, 6 ]

arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
console.log(arr); // [ 1, 4, 7, 6 ]

arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]
console.log(arr); // [ 1, 4, 'a', 'b', 6 ]


var arr = [1, 2, 3, 4];

// 붙여 넣을 위치, 복사 시작 위치 , 복사 종료위치 미포함 

arr.copyWithin(1, 2); // arr is now [1, 3, 4, 4]
console.log(arr); // [ 1, 3, 4, 4 ]

arr.copyWithin(2, 0, 2); // arr is now [1, 3, 1, 3]
console.log(arr); // [ 1, 3, 1, 3 ]

arr.copyWithin(0, -3, -1); // arr is now [3, 1, 1, 3]
console.log(arr); // [ 3, 1, 1, 3 ]


var str = "Hello Wolrd";

var ret = str.substr(0,3);
console.log(str); // Hello Wolrd
console.log(ret); // Hel

console.log("-----------------------------");

var ret = str.substring(0,3); // 시작 , 끝 직전
console.log(str); // Hello Wolrd
console.log(ret); // Hel

console.log("-----------------------------");

var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));
// expected output: Array [4, 4, 5, 4, 5]



