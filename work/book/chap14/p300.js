// 콜백의 헬을 해결하기 위한 시도 
// 여러 레벨의 들여쓰기로 인한 난독증을 해결하기 위해서 
// 프라미스를 사용하면 들여쓰기 레벨이 1레벨로 축소된다. 

// #1 promise문법
// let promise = new Promise(function (resolve, reject) {
//   if (true) {
//     // 로직 처리 성공
//     resolve("처리 결과");
//   } else {
//     // 로직 처리 실패(에러 발생)
//     reject(new Error"실패 사유");
//   }
// 
// }); 
// 
// promise.then(function (result) { // 성공 콜백
// 
// }).catch(function (error) { // 실패 콜백
// 
// }).finally(function () { // 최후의 항상 작동하는 콜백
// 
// }); // 여기 까지 전체 문법






function countdown(seconds) {
  // 프라미스 객체가 생성되면 즉시 리턴한다.
  return new Promise(function(resolve, reject) {

    for (let i = seconds; i >= 0; i--) {

      setTimeout(function() { // jshint ignore :line
        if (i > 0) { 
          console.log(i + '...');
        }
        else { 
          console.log("GO!")
          resolve("Done");
        }
      }, (seconds - i) * 1000);

    }

  });
}

// countdown 함수가 작업결과 대신 작업 결과를 알려주겠다.
// 프라미스 (약속) 객체를 즉시 리턴하므로 대기 현상이 발생하지 않는다.
let promise = countdown(10);
console.log(promise instanceof Promise);

promise.then(function (result) { // 성공 콜백
  console.log("result =" + result);
}).catch(function (error) { // 실패 콜백
  console.log(error.message);
});