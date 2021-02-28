var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/getCookie', function (request, response) {
  response.send(request.cookies);
});
app.get('/setCookie', function (request, response) {
  response.cookie('string', 'cookie', {
      maxage: 6000,
      secure: true
  });
  
  response.cookie('json', {
    name: 'cookie',
    property: 'delicious'
  });
  
  // overwrite. how can I make it as a list?
  response.cookie('json', {
    name: 'cookie2',
    property: 'delicious2'
  });


  response.redirect('/getCookie');
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});