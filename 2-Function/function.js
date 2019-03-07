//Normal function statement
function sayHi(){
  console.log('Hi');
}
//Calling the function
sayHi();

//Function Expression
var sayBye= function(){
  console.log('Bye');
}
//Calling the Variable
sayBye();

//Function calling through via another Function
function callFunction(fun){
  fun();
}
//Calling the function
callFunction(sayHi);
