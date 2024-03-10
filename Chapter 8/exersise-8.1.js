//Exersise 8.1
let string = "How's%20it%20going%3F";
let decodedString = decodeURIComponent(string);
let encodedString =encodeURIComponent(decodedString);
console.log(decodedString);
console.log(encodedString);

let URI = `http://www.basescripts.
com?=Hello World"`;
let encodedURI = encodeURI(URI)
console.log(encodedURI);