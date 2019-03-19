var http = require ('http');

var server = http.createServer (function(req,res){
  console.log('Request was made: ' + req.url)

  //creating response object
  res.writeHeader(200,{'Content-Type':'text/plain'});
  res.end('Hey welocome to Server');
});

server.listen(3000,'127.0.0.1');
console.log('You are now listening to port 3000');
