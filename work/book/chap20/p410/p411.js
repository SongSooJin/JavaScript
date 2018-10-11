// 각각 다른 함수이지만
// lastMessage 변수는 1개를 공유한다.
const debug1 = require('./debug')('one');
const debug2 = require('./debug')('two');

debug1('started first debugger!');
debug2('started second debugger!');

setTimeout(function() {
 debug1('after some time...');
 debug2('what happens?');
}, 200);