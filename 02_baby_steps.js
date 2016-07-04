const startIndex = 2;

var processArgs = process.argv;
var argLength = process.argv.length

//console.log(processArgs);
processArgs.splice(0, 2);

//console.log(processArgs);

function getSum(total, num) {
  return Number(total) + Number(num);
}
var totalSum = processArgs.reduce(getSum);  
console.log(totalSum);
// return processArgs.reduce(getSum);
