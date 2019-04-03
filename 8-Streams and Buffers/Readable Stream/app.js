var http = require('http');
var fs = require ('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','UTF-8');

myReadStream.on('data',function (chunk){
  console.log('New chunk received:');
  console.log(chunk);
});
