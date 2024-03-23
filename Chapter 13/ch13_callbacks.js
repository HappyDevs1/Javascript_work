/*
function sayHi() {
  console.log("Hi!");
}

function doSomething(callback) {
  callback();
};

doSomething(sayHi);

function judge(grade) {
  switch (true) {
    case grade == "A":
      console.log("You got an", grade, ": amazing!");
      break;
    case grade == "B":
      console.log("You got a", grade, ": well done!");
      break;
    case grade == "C":
      console.log("You got a", grade, ": alright.");
      break;
    case grade == "D":
      console.log("You got a", grade, ": hmmm...");
      break;
    default:
      console.log("An", grade, "! What?!");
  }
}

function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      console.log(score);
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}
getGrade(100, judge);

let i = 0;
let loop = setInterval(encourage, 500)
function encourage() {
while (i < 12) {
  console.log("You are doing a great job, keep going!")
  i++;
}
clearInterval(loop);
}
*/
let promise = new Promise(function (resolve, reject) {
  // do something that might take a while
  // let's just set x instead for this example 
  let x = 20;
  if (x > 10) {
  resolve(x); // on success
  } else {
  reject("Too low"); // on error
  }
 });
 promise.then(
  function (value) {
  console.log("Success:", value);
  },
  function (error) {
  console.log("Error:", error);
  }
 );