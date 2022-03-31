// String methods in JavaScript

let myFullName = "Prasad Kumar";

// P r a s a d   K u m a  r
// 0 1 2 3 4 5 6 7 8 9 10 11 

// slice()

let slicedName1 = myFullName.slice(7);          
let slicedName2 = myFullName.slice(0,6);       
let slicedName3 = myFullName.slice(4,8);       

console.log(myFullName);       // "Prasad Kumar"
console.log(slicedName1);      // "Kumar"
console.log(slicedName2);      // "Prasad"
console.log(slicedName3);      // "ad K"

// trim()

let myName = "    Prasad Kumar    ";

let trimedName = myName.trim();             

console.log(myName);           // "    Prasad Kumar    "
console.log(trimedName);       // "Prasad Kumar"


// // replace()

let note = "Please visit Microsoft";

let replacedNote = note.replace("Microsoft", "W3Schools"); 

console.log(note)                    // "Please visit Microsoft"
console.log(replacedNote)            // "Please visit W3Schools"

// // toLowercase()

let myFullName2 = "PRASAD KUMAR";

let myFullName3 = myFullName2.toLowerCase();

console.log(myFullName2);           // "PRASAD KUMAR"
console.log(myFullName3);           // "prasad kumar"

// toUpperCase()

let myFullName4 = "prasad kumar";

let myFullName5 = myFullName4.toUpperCase();

console.log(myFullName4);           // "prasad kumar"
console.log(myFullName5);           // "PRASAD KUMAR"
