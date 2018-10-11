
// require('./amanda.js') : 노드가 제공하는 외부 모듈을 임포트 하는 함수 
// ./amanda.js : 모둘명, ./ 기호가 붙으면 개발자가 작성한 파일이라는 뜻이다.
// 노드 내장모듈, 써드 파티 모듈(node_modules 폴더 안에) 들은 ./ 기호없이  사용한다. 
const amanda_calculate = require('./amanda.js');
// amanda_calculate === amanda.js # module.exports
const tyler_calculate = require('./tyler.js');


console.log(amanda_calculate(1, 2, 5)); // logs 31
console.log(tyler_calculate(2)); // logs 33.510321638291124