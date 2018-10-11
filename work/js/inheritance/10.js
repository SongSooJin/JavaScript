
function Vehicle() {
  this.color = "black";
  this.print = function () {
    console.log("Vehicle # print() called.");
  };
}

function Car() {

}

Car.prototype.__proto__ = Vehicle.prototype; 

var car = new Car();
console.log(car);
// console.log(car.color); //undefined 
// car.print(); //TypeError: car.print is not a function 


