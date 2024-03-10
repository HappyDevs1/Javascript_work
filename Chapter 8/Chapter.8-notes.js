//All URL are URI but not all URI are URL
//phone numners and emails are an example of an URI
//Encode is to change fix the format of the URI
//Decode is to return the URI into its original format
//Avoid using eval() for security purposes

let URI = "https://www.example.com/submit?name=maaike van putten";
let encoded = encodeURI(URI)
console.log(encoded);
let decode = decodeURI(encoded);
console.log(decode);

//using forEach
let arr = ["grapefruit", 4, "hello", 5.6, true];
function print (element, index) {
  console.log(element, index)  
}
arr.forEach (print);

//Filtering an array
let arr2 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
 return typeof element === "string";
}
let filterArr = arr2.filter(checkString);
console.log(filterArr);

//Checking condition for all elements
console.log(arr2.every(checkString));
console.log(filterArr.every(checkString));

arr3 = ["grapefruit", 4, "hello", 5.6, true];
console.log(arr3.copyWithin(0, 3, 4));
