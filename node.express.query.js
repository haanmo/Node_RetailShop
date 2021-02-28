
// http://127.0.0.1:52273/?name=rint&region=seoul
// check development tool. we can see query. security issue.

var express = require ('express');
var app = express ();

app.use(function(request, response, next) {
    var name = request.query.name;
    var region = request.query.region;
    response.send('<h1>' + name + '-' + region + '</h1>');
    //console.log(next());
});

app.listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});