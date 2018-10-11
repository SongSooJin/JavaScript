// function add(a) { // 함수이름이 소문자 -> 메서드기능
// // return a + 10;
// return [a,2,3];
// }

// var a = "첫번째 파라미터, var b = 두번째 ㅠㅏ라미터"
function add(a,b) {
return a + 10;
// return [a,b,4];

// 생성자로 사용하면 기본적으로 새 객체를 리턴한다.
// 하지만, 객체를 새로 만들어서 명시적으로 리턴하면
// 리턴결과가 변경된다.
}


console.log(add(2,3,10,20));

console.log(new add(2,3)); // 생성자로 씀
                                          
