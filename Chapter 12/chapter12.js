/*
let text = "I love JavaScript!";
console.log(text.match(/javascript/));

let text = "I love JavaScript!";
console.log(text.match(/javascript|nodejs|react/i));

let text = "I love React and JavaScript!";
console.log(text.match(/javascript|nodejs|react/gi));

let text = "d";
console.log(text.match(/[abc]/));
console.log(text.match(/[abcd]/));

let text = "d";
console.log(text.match(/[a-d]/));

let text = "t";
console.log(text.match(/[a-zA-Z]/));
console.log(text.match(/[a-z]/i));
console.log(text.match(/[a-zA-Z0-9]/));

let text = "äé!";
console.log(text.match(/[a-zA-Z0-9]/));

let text = "Just some text.";
console.log(text.match(/./g));

//If you want to look for a number yuo have to add a backslash and a d
let text = "I'm 29 years old.";
console.log(text.match(/\d/g));

//Searching for white spaces
let text = "Coding is a lot of fun!";
console.log(text.match(/\s/g));

//Checking if a string begin with particular, add a b and the character that you are searching for
let text = "In the end or at the beginning?";
console.log(text.match(/\bin/gi));
let nr = 357;
console.log(nr.match(/3/g));

let text = "I love JavaScript!";
console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

let text = "You are doing great!";
console.log(text.match(/n?g/gi));

let text = "123123123";
console.log(text.match(/(123)+/));

let text = "I love JavaScript!";
console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-
9]/g));

let text = "You are doing great!";
console.log(text.match(/n?g/gi));

let text = "123123123a";
console.log(text.match(/(123)+a/));

let text = "abcabcabc";
console.log(text.match(/(abc){1,2}/));

let text = "I love JavaScript!";
console.log(text.match(/(?<language>javascript)/i));

let text = "That's not the case.";
console.log(text.search(/Case/i));

let text = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text.replace("Coding", "JavaScript"));

let text = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text.replace(/Coding/g, "JavaScript"));

let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";
console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));

//So basically here the arguments[0] is the same as having a inside the parameter
function test(a, b, c) {
  arguments[1] = "nice";
  console.log("first:", a, arguments[0]);
  console.log("second:", b, arguments[1]);
  console.log("third:", c, arguments[2]);
}
test("fun", "js", "secrets");

//Var allows hoising but let does not allows hoisting
x = 5;
console.log(x);
var x;

y = 5;
console.log(y);
let y;

try {
  somethingVeryDangerous(99);
 } catch (e) {
  if (e instanceof TypeError) {
  // deal with TypeError exceptions
  } else if (e instanceof RangeError) {
  // deal with RangeError exceptions
  alert("Range ERROR!");
  } else if (e instanceof EvalError) {
  // deal with EvalError exceptions
  } else {
  //deal with all other exceptions
  throw e; //rethrow
  }
 }

 function somethingVeryDangerous(num) {
  if (num > 100) {
    throw RangeError();
  }
 };
 */
