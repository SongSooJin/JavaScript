/*
arr.reduce(callback[, initialValue])
callback : 함수 
initialValue :  초기값(시드값)
caa이 가리키는 베열의  길이만큼 callback 함수를 호출한다.
initialValue를 주는 경우 1회전에서 callback함수의 첫 파라미터로 전달한다.
두번째 파라미터는 배열의 첫 요소를 전달한다.
2회전에서 부터는 이전 회전에서 return 한 값을 함수의 첫 파라미터로 전달한다.
두번쨰 파라미터는 배열의 두번째 요소를 전달한다.
... 위 과정을 배열의 길이만큼 반복한다.
마지막이 callback 함수의 return값이 최종적인 return값이 된다.
*/

const arr = [5, 7, 2, 4];
const sum = arr.reduce(
  (a, x) => a += x, // callback
   0 // initialValue
);

/*
          a            x             return
1회전     0            5                5 
2회전     5            7                12
3회전     12           2                14
4회전     14           4                18
*/



console.log(sum); //18