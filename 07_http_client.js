var http = require('http');
var getUrl = process.argv[2]; 
http.get(getUrl, function callback (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  });
  response.on('error', function(error) {
    throw error; 
  });
});
