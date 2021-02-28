var express = require('express');
var app = express();

// user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36',

// JavaScript Regular Expressions
// https://www.w3schools.com/js/js_regexp.asp

// JavaScript String match() Method
// https://www.w3schools.com/jsref/jsref_match.asp

app.use(function (request, response) {
  var agent = request.header('User-Agent');

  if (agent.toLowerCase().match(/chrome/)) {
    response.send('<h1>Hello Chrome .. !</h1>');
  } else {
    response.send('<h1>Hello express .. !</h1>');
  }
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});