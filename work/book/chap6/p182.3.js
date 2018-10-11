global.count = 100;

function increase() {
  this.count++;
  console.log("1 >>", this.count);
}

increase(); //this는  global

var obj = {
  count: 0,
  increase,
  escalate() {
    this.count++; // this 는 obj
    console.log("2 >>", this.count);

    function increase() {
      this.count++; // this 는 global
      console.log("3 >>", this.count);

      function lift() {
        this.count++; // this는 global
        console.log("3 >>", this.count);
      }
      lift();

    }
    increase();

  }
};

obj.escalate();