

const EventEmitter = require('events').EventEmitter;

function Counter(max) {
  this.start = function () {
    this.emit("start"); // counter.this.emit("start"); 
    
    max--;
    this.emit("count", max);
  };
}

Counter.prototype.__proto__ = EventEmitter.prototype;


let counter = new Counter(5);

counter.on("start", function () {
  console.log("START");
});

counter.on("count", function (val) {
  console.log("val = " + val);
});

counter.start();




