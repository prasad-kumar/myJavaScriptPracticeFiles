// Arrays methods in JavaScript

const fruits = [ "Mango", "Banana",  "Apple", "Orange" ];


// push()

fruits.push("Grapes");
fruits.push("Kiwi");

console.log(fruits);         //  [ 'Mango', 'Banana', 'Apple', 'Orange', 'Grapes', 'Kiwi' ]


// pop()

let pop1 = fruits.pop();
let pop2 = fruits.pop();

console.log(pop1);           //   Kiwi
console.log(pop2);           //   Grapes
console.log(fruits);         //   [ 'Apple', 'Banana', 'Mango', 'Orange' ]


// sort()

fruits.sort(); 
console.log(fruits);         //   [ 'Mango', 'Banana', 'Apple', 'Orange' ]

const myNumbers = [ 5, 2, 4, 1, 3 ];

myNumbers.sort();
console.log(myNumbers);      //   [ 1, 2, 3, 4, 5 ]

// main working method
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points);


// slice()

let slicedFruits1 = fruits.slice(1);
let slicedFruits2 = fruits.slice(1,3);

console.log(fruits);         //   [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(slicedFruits1);  //   [ 'Banana', 'Mango', 'Orange' ]
console.log(slicedFruits2);  //   [ 'Banana', 'Mango' ]


// includes()

console.log(fruits.includes("Apple"));   //  true
console.log(fruits.includes("A"));       //  false


// concat()

const myBoys = ["Prasad", "Maruthi", "Sai"];
const myGirls = ["Divya", "Harika", "Mythri"];

const myStudents = myBoys.concat(myGirls);

console.log(myStudents);                 //  [ 'Prasad', 'Maruthi', 'Sai', 'Divya', 'Harika', 'Mythri' ]


const arr1 = [ 1, 2, 3, 4, 5 ];
const arr2 = [ 6, 7, 8, 9 ];
const arr3 = [ 10, 11, 12 ];

const myArray = arr1.concat(arr2, arr3);

console.log(myArray);                    // [ 1,  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// shift()

const users = ["Prasad", "Maruthi", "Sai", "Kumar"];

const shiftedUsers = users.shift();

console.log(shiftedUsers);               //  "Prasad"
console.log(users);                      //  [ 'Maruthi', 'Sai', 'Kumar' ]


//unshift()

users.unshift("Prasad");
users.unshift("Priya");

console.log(users);                     //  [ 'Priya, 'Prasad', 'Maruthi', 'Sai', 'Kumar' ] 





