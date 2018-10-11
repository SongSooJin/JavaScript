//callback's hell : 콜백함수를 중첩해서 사용하면 
// 처리순서를 예측하기 어려운 난독증에 빠지는 현상

//노드가 내장하여 제공하는 파일처리 모듈
const fs = require('fs'); // fs는 객체

console.log(__dirname);
// C:\Users\TopC290\Documents\SONG\git\work\book\chap14

let dir = __dirname + "/";

console.log("START");
// 노드가 제공하는 대부분의 함수는 비동기 함수고 
// 동기함수는 sync라는 단어가 붙는다.
fs.readFile(dir + 'a.txt', function(err, dataA) {
  if (err) console.error(err);
  
  fs.readFile(dir + 'b.txt', function(err, dataB) {
    if (err) console.error(err);
    
    fs.readFile(dir + 'c.txt', function(err, dataC) {
      if (err) console.error(err);
      
      setTimeout(function() {
        let data = dataA + dataB + dataC;
        
        fs.writeFile(dir + 'd.txt', data, function(err) {
          if (err) console.error(err);
          console.log("Done");
        });
      }, 2 * 1000);
      
    });
    
  });
  
});


 