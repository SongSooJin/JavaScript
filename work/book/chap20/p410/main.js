const debug = require('./debug')('main'); 
// note that we immediately call the
// function that the module returns
 
debug("starting"); 
// will log "main starting +0ms"
// if debugging is enabled

let sum = 0;
for (var i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log(sum);

debug("END");