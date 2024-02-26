//Miles to kilometers converter
let km = 130;
let miles = 209.2142;

let milesToKm = miles / km;
console.log(milesToKm);

//BMI calculator
let height = 1;
let weight = 2.2046;

height = 2.54;
weight = 1;

let result1 = height;
let result2 = weight;
console.log(result1);
console.log(result2);

let BMI = result2 / (2.54 ** 2 / 100);

console.log(BMI)

//Self Check Quiz
const c = "5";
console.log(typeof c);//String
const d = 91;
console.log(typeof d);//Number
let empty1 = undefined;
let empty2 = null;
console.log(empty1);
console.log(empty2);//line 2 is better
let a = "Hello";
a = "world";
console.log(a);//world is the output
let e = "world";
let f = `Hello ${e}!`;
console.log(f);//Hello World is the output
let g = "Hello";
//g = prompt("world");
console.log(g)//Will result in a prompt with a string "world"
let h = 5;
let i = 70;
let j = "5";
i++;
console.log(i)//The value if i that will be printed in the console is 70
let result = 3 + 4 * 2 / 8;
console.log(result)//The value of result is 4
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);//The value of total is 16
let total2 = 500 + 100 / 5 + total--;
console.log(total2);//The value of total2 is 536
const k = 5;
const l = 10;
console.log(k > 0 && l > 0);//True
console.log(k == 5 && l == 4);//False
console.log(true ||false);//True
console.log(k == 3 || l == 10);//True
console.log(k == 3 || l == 7);//False
