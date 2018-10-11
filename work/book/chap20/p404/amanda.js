function calculate(a, x, n) {
 if(x === 1) return a*n;
 return a*(1 - Math.pow(x, n))/(1 - x);
}

// exports :이 파일에 존재하는 자원중에 외부에 제공하고 싶은 자원을 등록하는 객체 
// console.log(module);


module.exports = calculate;


console.log(module);