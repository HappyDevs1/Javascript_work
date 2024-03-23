//Spread function is another way to add values of an array
/*
function addTwoNumbers(x, y) {
  console.log(x + y);
}
let arr = [5, 9]
addTwoNumbers(...arr);

function addFourNumbers(x, y, z, a) { 
  console.log(x + y + z + a); 
 } 
 let arr = [5, 9];
 let arr2 = [6, 7];
 addFourNumbers(...arr, ...arr2);
 
 function someFunction(param1, param2) {
  console.log(param1, param2);
 }
 someFunction("hi", "there!", "How are you?");
 
//If your function have 2 statements that is when you have to use a return statement
let addNumbers = (x, y) => {
  x + y;
};
let result = addNumbers(4, 5);

let addTwoNumbers = (x, y) => {
  console.log("Adding...");
  return x + y;
 }
 addTwoNumbers(10, 5);
 
//Local and Global scope

 function testAvailability() {
  let y = "I'll return";
  console.log("Available here:", y);
  return y;
 }
 let z = testAvailability();
 console.log("Outside the function:", z);
 console.log("Not available here:", y);
 
//"let & const" variable that are created inside an if statement are only accessible within the if statement but "var"" variable are accessible outside the if statement but limited to the function
 function doingStuff() {
  if (true) {
  var x = "local";
  }
  console.log(x);
 }
 doingStuff();
//This is how you can create a function and call it at the same time but this makes the function to be accessible in the local scope
 (function () {
  if (true) {
  var x = "global";
  }
  console.log(x);
 });
 
//Recursive function
//The function call itself and rn till infitity
function getRecursive(nr) {
  console.log(nr);
  getRecursive(--nr);
 };
 
 function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
  getRecursive(--nr);
  }
 }
 getRecursive(3);
 
 function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
  logRecursive(nr - 1);
  } else {
  console.log("done with recursion");
  }
  console.log("Ended function:", nr);
 }
 logRecursive(3);

 //Nested function
 function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
  console.log(x + 7);
  console.log("I can access outer variables:", nr);
 }
};
doOuterFunctionStuff(2);

let functionVariable = function () {
  console.log("Not so secret though.");
 };

function doFlexibleStuff() {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction.");
 }
 doFlexibleStuff(functionVariable);
 
//This indicates that you can pass a function as an argument not only a variable
 function firstFunction () {
  console.log("Hello World!");
 };

 function secondFunction (childFunction) {
  console.log("Hello mates!");
  childFunction();
 };
 secondFunction(firstFunction);
 */