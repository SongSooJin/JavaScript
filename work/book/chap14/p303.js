
// 노드가 제공하는 require 함수를 사용하면 다른 ~js 파일이나 
// node_modules 폴더밑에 설치한 프로그램 또는 노드가
// 기본적으로 제공하는 내장 모듈이 제공하는 객체를 획득할 수 있다.
const EventEmitter = require('events').EventEmitter;

function Counter() {
  this.start = function () {
    // "start"라는 문자열을 이벤트에미터에게 보내어
    // 해당 문자열과 연동되는 콜백함수를 호출하게 만든다.
    this.emit("start"); // counter.this.emit("start"); 
  };
}

// 상속 설정
Counter.prototype.__proto__ = EventEmitter.prototype;

// console.log(Object.keys(EventEmitter.prototype));

let counter = new Counter();
// console.log(counter);

// https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
// emitter.on(eventName, listener)
// on 함수로 이벤트에미터에게 누군가가 나중에 "start"라는 문자열로 
// 신호를 보내거든 같이 전달하는 콜백함수를 호출해달라고 미리 신청한다.
counter.on("start", function () {
  console.log("START");
});

counter.start();




