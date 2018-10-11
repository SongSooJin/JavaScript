const input = "As I was going to Saint Ives";

// var obj = {};
// var arr = [];
// var regexp = /\./;


let reg = /\w{4,}/ig;
// \w = 단어 
// 단어의 길이가 4-N인 대상을 찾는다.
console.log(reg instanceof RegExp); // true

const output = input.replace(reg, '****'); 
console.log(output);
// As I was **** to **** ****