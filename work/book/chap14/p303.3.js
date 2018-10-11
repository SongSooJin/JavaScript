

const EventEmitter = require('events').EventEmitter;

function Counter(max) {
  this.start = function () {
    this.emit("start"); // counter.this.emit("start"); 
  
    let self = this; // 이 지점에 this(== counter)를 변수에 담아 기억한다.
    
    let intervalId = setInterval(function () {
      max--;
      self.emit("count", max);
      
      if (max <= 0) { // 카운트가 0이 되면 반복작업을 중단한다.
        clearInterval(intervalId);
      }
    },1000);
    
  
  };
}

Counter.prototype.__proto__ = EventEmitter.prototype;

// counter 함수를 작성한 개발자와 그 함수를 사용하는 개발자가 다르다.

let counter = new Counter(5);

counter.on("start", function () {
  console.log("START");
});

counter.on("count", function (val) {
  console.log("val = " + val);
});

counter.start();




