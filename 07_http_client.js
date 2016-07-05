var http = require('http');
var getUrl = process.argv[2]; 
http.get(getUrl, function callback (response) {
  response.on('data', function (data) {
    console.log(data);
  });
});
