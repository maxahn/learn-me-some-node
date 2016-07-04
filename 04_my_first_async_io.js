var fs = require('fs');
var filePath = process.argv[2]; 
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  var newLineNum = data.split('\n').length - 1;
  console.log(newLineNum);
});
