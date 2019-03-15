var fs = require ('fs');

fs.mkdir ('stuff',function(){
  fs.readFile('readMe.txt','UTF-8',function(err,data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});
