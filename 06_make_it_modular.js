var FilterDir = require('./06_filter_module.js');

// console.log(process.argv[2]);
// console.log(process.argv[3]);
// 
// mymodule.exports(process.argv[2], process.argv[3], function(list) {
//   for (var count = 0; count < list.length; count++) {
//     console.log(list[count]);
//   }
// });

FilterDir(process.argv[2], process.argv[3], (err, list) => { 
  if (list) {
    for (var count = 0; count < list.length; count++) {
      console.log(list[count]);
    }
  } else {
    console.log(err);
  }
});
  
// mymodule.exports(argv[2], argv[3], fun);
// (process.argv[2], process.argv[3], (err, list) => {
//   if (err) {
//     return err;
//   }
// });

