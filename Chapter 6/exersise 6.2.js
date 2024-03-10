<<<<<<< HEAD
let descriptiveWords = [
  "beautiful",
  "tall",
  "short",
  "calm"
];

function getUserName() {
  var name = prompt("What is your name buddy?");
  let randomWord = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
  console.log(randomWord + " " + name);
};
=======
let descriptiveWords = [
  "beautiful",
  "tall",
  "short",
  "calm"
];

function getUserName() {
  var name = prompt("What is your name buddy?");
  let randomWord = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
  console.log(randomWord + " " + name);
};
>>>>>>> origin/main
getUserName();