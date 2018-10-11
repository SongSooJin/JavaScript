
function Vehicle() {
  // this.color = "black";
  // this.print = function () {
  //   console.log("Vehicle # print() called.");
  // };
}

console.log("#1 >> ", Vehicle.prototype);

Vehicle.prototype.color = "black";
Vehicle.prototype.print = function () {
  console.log("Vehicle.prototype # print() called.");
};

console.log("#2 >> ", Vehicle.prototype);

function Car() {

}

Car.prototype.__proto__ = Vehicle.prototype; 

var car = new Car();
console.log(car);
console.log(car.color); //undefined 
car.print(); //TypeError: car.print is not a function 


