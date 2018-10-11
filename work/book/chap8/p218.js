/*
arr.reduce(callback[, initialValue])
callback : 함수 
initialValue :  초기값(시드값)
caa이 가리키는 베열의  길이만큼 callback 함수를 호출한다.
initialValue를 주지않는 경우 1회전에서 callback함수의 첫 파라미터로 베열의 첫요소에 전달한다.
두번째 파라미터는 배열의 두번쨰 요소를 전달한다.
2회전에서 부터는 이전 회전에서 return 한 값을 함수의 첫 파라미터로 전달한다.
두번쨰 파라미터는 배열의 세번째 요소를 전달한다.
callback함수의 수행횟수는 배열의 길이 -1만큼 수행된다.
마지막 callback 함수의 return값이 최종적인 return값이 된다.
*/


const arr = [5, 7, 2, 4];
const sum = arr.reduce(
  (a, x) => a += x
);

/*
          a            x             return
1회전     5            7                12 
2회전     12           2                11
3회전     14           4                18
4회전   
*/

console.log(sum);
