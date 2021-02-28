var myModule = require('./node.myModule.js');
//var myModule = require('./node.myModule');

var num = -222;
var rad = 7;

console.log('abs(%d) = %d', num, myModule.myAbs(num));
console.log('radius(%d) = %d', rad, myModule.myCircleArea(7));