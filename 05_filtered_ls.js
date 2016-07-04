var fs = require('fs');
var filePath = process.argv[2];
var filterTerm = process.argv[3];
var filterPattern = RegExp('\w*.' + filterTerm);
fs.readdir(filePath, (err, list) => {
  // console.log(list);
  var matched = [];
  for (var index = 0; index < list.length; index++) {
    if (filterPattern.test(list[index])) {
      console.log(list[index]);
      // matched.push(list[index]);
    }
  }
  // console.log(matched);
});
