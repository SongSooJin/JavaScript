const http = require('http');

const server = http.createServer(function(req, res) {
  console.log("Client connected.");
  // Request:
  // 브라우저가 서버로 보내는 데이터를 담고 있는 객체이다.

  // 웹서버에 브라우저가 접촉하면 로직이 기동합니다.
  console.log(`${req.method} ${req.url}`);

  //  cmd 실행후 node p424.js 
  //   GET /
  // GET /favicon.ico
  // GET /
  // GET /favicon.ico
  //
  // Responce :
  // 리스폰스 객체에 데이터를 추가하면 브라우저에게 전송된다.
  res.end('Hello world!');
});

const port = 8080;

// http://Localhost:8080
// http://Localhost:8080/emps
server.listen(port, function() {
  // you can pass a callback to listen that lets you know
  // the server has started
  console.log(`server startd on port ${port}`);
});