var fs = require('fs');
const filePath = './test_file.txt';
var file = fs.readFileSync(filePath);
console.log(file);
