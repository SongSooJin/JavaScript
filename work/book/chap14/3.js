function sumAsync(start, end, cb) {
  setTimeout(function() {
    let result = 0;
    for (var i = start; i <= end; i++) {
      result += i;
    }

    let existError = false;
    if (Math.random() < 0.5) {
      existError = true;
    }

    if (existError) {
      let e =  new Error("모든 코드는 비정상이 될 가능성이 있다.")
      // 관습 룰  
      // 에러가 발생하면
      // : 첫번째 파라미터는 에러객체, 그다음은 모두 null
      // 
      cb(e, null);
        } 
    else {
      // 에러가 발생하지 않는다면
      // : 첫번째 파라미터는  null, 그 다음 처리결과 데이터
      cb(null, result);
    }
  }, 0);
}


console.log("START");
let oldTime = Date.now();

try {
  // 비동기 함수는 try구문으로 에러를 잡을 수 없다.
  // why? 메인 스레드가 비동기 함수를 호출하고
  // 바로 다음 줄 코드를 처리하기 위해서 내려간다.
  // 비동기 함수는 아직 제대로 코드를 수행하기도 전이므로 에러가 
  // 발생할 틈이 없고 따라서, 비동기 함수는 try구문으로 에러를 잡을 수 없다.
  sumAsync(1, 2000000000, function(error, result) {
    if (error) {
      console.log("에러 대응 코드 : " + error.message);
      return;
    }
  
    console.log("value = " + result);
  });

} catch (e) {
  console.log("영원히 작동하지 않는다");
}

let newTime = Date.now();
console.log("Elapsed Time = " + (newTime - oldTime));

console.log("긴급한 처리해야 하는 로직");