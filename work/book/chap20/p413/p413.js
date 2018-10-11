const fs = require('fs');

let data = 'hello from Node!';


// __dirname 예약어 : 지금 현재 폴더 옆에
let dir = __dirname + '/';

// 가장 가까운 package.js에 파일이 생긴다
fs.writeFile(dir + 'hello.txt', 'hello from Node!', function(err) {
  if (err) return console.log('Error writing to file.');
  console.log('DONE.');
});


// npm init -y 설치후 npm i lodash 입력후 실행