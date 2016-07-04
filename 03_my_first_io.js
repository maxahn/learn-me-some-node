var fs = require('fs');
var filePath = process.argv[2]; 
var file = fs.readFileSync(filePath, 'utf8').split('\n');
var newLineNum = file.length - 1;
console.log(newLineNum);
