var adder=function(a,b){
  return `The sum of the two numbers is ${a+b}`;
}

var pi=3.142;
module.exports.adder=adder;
module.exports.pi=pi;

//or you can export them in following way

/*
module.exports.adder=function(a,b){
  return `The sum of the two numbers is ${a+b}`;
}
module.exports.pi=3.142;
*/

//or you can export them in following way

/*
module.exports={
  adder:adder,
  pi:pi
}
*/
