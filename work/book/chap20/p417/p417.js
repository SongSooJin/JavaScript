const fs = require('fs');
fs.readdir('data', function(err, files) {
 if(err) {
 console.error("Fatal error: couldn't read data directory.");
 process.exit(1); // 프로그램을 종료하겠다.
 }
 const txtFiles = files.filter(f => /\.txt$/i.test(f));
 if(txtFiles.length === 0) {
 console.log("No .txt files to process.");
 process.exit(0);
 }
 // process .txt files...
 
   console.log(txtFiles.join('\n'));
});
