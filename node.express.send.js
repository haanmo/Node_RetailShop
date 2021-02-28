// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// request �̺�Ʈ �����ʸ� �����մϴ�.
app.use(function (request, response) {
  // �����͸� �����մϴ�.
  var output = [];
  for (var i = 0; i < 3; i++) {
    output.push({
      count: i,
      name: 'name - ' + i
    });
  }

  // �����մϴ�.
  response.send(output);
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});