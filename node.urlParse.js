// node node.urlParse.js 
var url = require('url');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160');
console.log(parsedObject);

var querystring = require('querystring');
console.log(querystring.parse(parsedObject.query));