// Very Important Array Methods in JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach()

let total = 0;
numbers.forEach((val, idx) => total += val );
console.log(total);                           // 45


// map()

const a = numbers.map((val, idx) => val * 2 );

console.log(a);                             // [ 2,  4,  6,  8, 10, 12, 14, 16, 18 ]


// filter()

const evenArray = numbers.filter((val) => val % 2 === 0);

console.log(evenArray);                 [ 2, 4, 6, 8 ]


// reduce()

const sumAll = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);       // 0 is initial value of accumulator

console.log(sumAll);                // 45

// real world example for map, filter, reduce


const users = [
    {name:"Prasad", age:24, gender:"male"},
    {name:"Maruthi", age:24, gender:"male"},
    {name:"Sai", age:25, gender:"male"},
    {name:"Divya", age:23, gender:"female"},
];

// map
const usersNames = users.map((val, idx) => val.name);
 
console.log(usersNames);             // [ 'Prasad', 'Maruthi', 'Sai', 'Divya' ]

// filter
const filteredUsers = users.filter((val, idx) => val.age < 24 );

 console.log(filteredUsers);         // [ { name: 'Divya', age: 23, gender: 'female' } ]

 console.log(filteredUsers[0].name)  // divya

 // reduce
const userAges = users.reduce((ages, curVal) => {
    if (ages[curVal.age]){
        ages[curVal.age] = ++ages[curVal.age]
    }else{
        ages[curVal.age] = 1
    }
    return ages;
}, {});              // {} initial value of ages

console.log(userAges);               // { '23': 1, '24': 2, '25': 1 }


// sort()

const myNumbers = [5, 4, 88, 10, 100, 1400];

// myNumbers.sort();
// console.log(myNumbers);             // [ 10, 100, 1400, 4, 5, 88 ]

   // Ascending order
myNumbers.sort((a, b) => a - b);      
console.log(myNumbers);               // [ 4, 5, 10, 88, 100, 1400 ]

   // Descending order
myNumbers.sort((a, b) => b - a);
console.log(myNumbers);               // [ 1400, 100, 88, 10, 5, 4 ]

const userNames = ["Prasad", "Sai", "Maruthi", "Divya"];

userNames.sort();
console.log(userNames);               // [ 'Divya', 'Maruthi', 'Prasad', 'Sai' ]


// find()

const output2 = numbers.find((val) => val > 4);

console.log(output2);                 // 5


// every()

const isEven = numbers.every((val) => val % 2 === 0);
console.log(isEven);                 // false


// some()

const isAnyEven = numbers.some((val) => val % 2 === 0);
console.log(isAnyEven);              // true

const isAbove20 = numbers.some((val) => val > 20);
console.log(isAbove20);              // false


// fill()

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myNum.fill(0, 1, 2);

console.log(myNum);     // [ 1, 0, 3, 4, 5, 6, 7, 8, 9 ]


// splice()

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArray.splice(1,2));                // [ 2, 3 ]
console.log(myArray);                            // [ 1, 4, 5, 6, 7, 8, 9 ]  delete

console.log(myArray.splice(1,2, 400, 500));      // [ 4, 5 ]
console.log(myArray);                            // [ 1, 400, 500, 6, 7, 8, 9 ]  deletes and inserts








