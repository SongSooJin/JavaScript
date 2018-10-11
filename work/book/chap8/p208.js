var arr = [1, 2, 3];

// arr.concat(4, 5, 6); 
// 
// console.log(arr);

var ret = arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(ret);
console.log(arr);

// 파라미터로 받은 1차원 배열은 풀어서 적용한다.
arr.concat([4, 5, 6]);
arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified

// 1차원 배열은 풀렸으니 2차원 배열은 안 풀고 바로 적용한다.
arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified

var arr = [1, 2, 3, 4, 5];
var ret = arr.slice(3); // returns [4, 5]; arr unmodified
console.log(ret);
console.log(arr);


arr.slice(2, 4); // returns [3, 4]; arr unmodified
arr.slice(-2); // returns [4, 5]; arr unmodified
arr.slice(1, -2); // returns [2, 3]; arr unmodified
arr.slice(-2, -1); // returns [4]; arr unmodified

var ret  = arr.slice();
console.log(ret);
console.log(arr);
console.log(ret === arr);





