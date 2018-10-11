const fs = require('fs');

const dir = __dirname + '/';

const rs = fs.createReadStream(dir + 'stream.txt', { encoding: 'utf8' });
rs.on('data', function(data) {
 console.log('>> data: ' + data.replace('\n', '\\n'));
});
rs.on('end', function(data) {
 console.log('>> end');
});