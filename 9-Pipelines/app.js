var http = require ('http');
var fs = require ('fs');

var server =http.createServer(function(req,res){
  console.log('Request was made: ' + req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' ,'UTF-8');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log ('You are listening to port 3000. To see the output type 127.0.0.1:3000 on your broweser.');
