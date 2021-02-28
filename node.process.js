
//// 3.5. process.argv
// node node.process.js --exit 1000
process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof (item) + ' : ', item);
    if (item == '--exit') {
      var exitTime = Number(process.argv[index + 1]);
      setTimeout(function () {
        process.exit();
      }, exitTime);
    }
  });
// result
// 0 : string :  /usr/local/bin/node
// 1 : string :  /Users/haanmo/Documents/Programming/Node/Book/node.global.js
// 2 : string :  --exit
// 3 : string :  3000


// 3.6.
console.log('- process.env:', process.env);
console.log('- process.version:', process.version);
console.log('- process.versions:', process.versions);
console.log('- process.arch:', process.arch);
console.log('- process.platform:', process.platform);
console.log('- process.connected:', process.connected);
console.log('- process.execArgv:', process.execArgv);
console.log('- process.exitCode:', process.exitCode);
console.log('- process.mainModule:', process.mainModule);
console.log('- process.release:', process.release);
console.log('- process.memoryUsage():', process.memoryUsage());
console.log('- process.uptime():', process.uptime());
