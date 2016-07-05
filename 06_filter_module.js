// var fs = require('fs');
// var filePath = process.argv[2];
// var filterTerm = process.argv[3];
// var filterPattern = RegExp('\w*.' + filterTerm);
// function hello() {
//   console.log('hello');
// }

// module.exports = {
//   filterDir
// };  
var FilterDir = function (dir, ext, callback) {  
  var fs = require('fs');
  var filterPattern = RegExp('\w*.' + ext);
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    var output = [];
    for (var index = 0; index < list.length; index++) {
      if (filterPattern.test(list[index])) {
        output.push(list[index]);
      }
    }
    callback(undefined, output);
  });
}
module.exports = FilterDir; 
