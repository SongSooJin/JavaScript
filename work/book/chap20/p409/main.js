const fs = require('fs');

console.log(typeof fs);

// 이미 처리한 대상을 재 사용한다.
const fs2 = require('fs');

console.log(fs === fs2); // true

const colors = require('colors');

console.log("Hello".blue);
console.log("Hello".red);
console.log("Hello".green);

// book폴더 밑에 있는 node_modules 폴더 밑에 설치되어 있는것을 사용한다.
const _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3],[[4]]);

console.log(other);
// [ 1, 2, 3, [ 4 ] ]

console.log(array);
// [ 1 ]


// cmd 켜서 npm init -y 설치 후 npm i colors 입력 실행

