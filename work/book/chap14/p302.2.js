const Promise = require("bluebird");
// fs 모듈내 함수는 이제 모두 프라미스 객체를 리턴한다.
const fs = Promise.promisifyAll(require("fs"));

let dir = __dirname + "/";
console.log("START");
console.log(__dirname);

// __dirname :항상 현재 파일의 디렉토리를 보여줌 

// npm init -y  : 페키지 제이슨 만듬

// npm i bluebird : bluebird는 간단하게 동기식으로 처리

let result1;
let result2;
let result3;


fs.readFileAsync(dir + 'a.txt')
  .then(function(dataA) {
      result1 = dataA;
      return fs.readFileAsync(dir + 'b.txt');
    })
  .then(function(dataB) {
    result2 = dataB;
    return fs.readFileAsync(dir + 'c.txt');
  })
  .then(function(dataC) {
    result3 = dataC;
    let data = result1 + result2 + result3;
    fs.writeFileAsync(dir + 'd.txt',data);
    console.log("Done");
  })
  .catch(function(err) {
    if (err) {
      console.log(err);
    }
  });




// fs.readFile(dir + 'a.txt', function(err, dataA) {
//   if (err) console.error(err);
// 
//   fs.readFile(dir + 'b.txt', function(err, dataB) {
//     if (err) console.error(err);
// 
//     fs.readFile(dir + 'c.txt', function(err, dataC) {
//       if (err) console.error(err);
// 
//       setTimeout(function() {
//         let data = dataA + dataB + dataC;
// 
//         fs.writeFile(dir + 'd.txt', data, function(err) {
//           if (err) console.error(err);
//           console.log("Done");
//         });
//       }, 2 * 1000);
// 
//     });
// 
//   });
// 
// });