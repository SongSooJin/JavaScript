console.log("START");

var fn = function () {  
  console.log(i);
};

for (var i = 1; i <= 3; i++) {
  setTimeout(fn,2000);
}

console.log("END");


// START
// END
// 4
// 4
// 4