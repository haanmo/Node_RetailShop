var express = require('express');
var app = express();

app.use(function (request, response) {
  var agent = request.header('User-Agent');
  //console.log(request.headers);
  console.log(request);
  console.log("---");
  console.log(agent);
  response.sendStatus(200);
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});