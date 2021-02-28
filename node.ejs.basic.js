var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
  fs.readFile('node.ejs.page.ejs', 'utf8', function (error, data) {
    console.log("-----init data ------");
    console.log(data);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(ejs.render(data, {
        name: 'Haan',
        description: "Hi Haan!"
    }));
  });
}).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});