var fs = require('fs');

//read a file
var readMe = fs.readFileSync('readMe.txt' ,'UTF-8');
console.log(readMe);

//write a file
fs.writeFileSync('writeMe.txt','You have successfully write this file.');

//aulternative method to read and write a file.
fs.readFile ('readMe.txt' ,'UTf-8', function(err,data){
  //console.log(data);
  fs.writeFile('writeMe.txt', data);
});
