 // 배열을 이용하여 다음 단어를 뒤집어서 출력하세요.
 // Hello 문자열을 받아서 alleh 문자열로 리턴하는 함수를 작성하세요.
 
 var str = "Hello";
 console.log(str.split("")); // strong to array
 
 console.log("--------------------------------");
 
 console.log(str); // hello
 str = str.split("").reverse().join("");
 console.log(str); // olleh
 
 console.log("--------------------------------");
 
 function myReverse(input = "") {
   // split(""); 의 코드
  //  let ary = [];
  // for (var i = 0; i < input.length; i++) {
  //   ary[i] = input[i];
  // }
  let ary = input.split("");
   console.log(ary);
   
  // reverse(); 의 코드 
  //  let size = ary.length;
  //  let arr = [];
  // for (var i = 0; i < size; i++) {
  //   arr[i] = ary.pop(); 
  //   }
  let arr = ary.reverse();
   console.log(arr);   
   
   let output = arr.join("");
   return output;
 }
 
 var result = myReverse("Hello");
 console.log(result); // olleh