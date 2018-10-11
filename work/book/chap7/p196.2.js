console.log("START");

for (var i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("END");

console.log("---------------------");


console.log("START");

var fn = function () {  
  console.log(i);
};

for (var i = 1; i <= 3; i++) {
  setTimeout(fn,3000);
}

console.log("END");




// START
// 1
// 2
// 3
// END


// START
// END
// 4
// 4
// 4