let str  = " I Love you!";

let arr = str.split(" ");
console.log(arr); // [ '', 'I', 'Love', 'you!' ]

// let result =  str.replace(/\s/,",");
// console.log(result); // ,I Love you!

// let result =  str.replace(/\s/g,",");
// console.log(result); // ,I,Love,you!

// let result =  str.replace(/[ \t\v\n\r]/g,",");
// console.log(result); // ,I,Love,you!

let result =  str.replace(/ /g,",");
console.log(result); // ,I,Love,you!





