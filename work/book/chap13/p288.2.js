/*
Tail Call Optimization Recursion : 메소드 내 로직을 처리하기 위해 사용하는
메모리 공간의 재활용을 위해서 보존해야 하는 상태변수를 두지 않는 기술 
*/

// 4! =  4 *3 * 2 * 1
// function fact(n) {
//  if(n === 1) {
// return 1;
// }
//  return n * fact(n-1);
// }

function fact(n, result) {
 if(n === 1) {
 return result;
}
 return fact(n-1, n*result);
}

/*
fact(4,1)
fact(3,4*1)
fact(2,3*4*1)
fact(1,2*3*4*1)

*/

var result1 = fact(4,1);
console.log(result1);

