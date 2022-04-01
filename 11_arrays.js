// Arrays in JavaScript

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);                       // "Apple"
console.log(fruits[1]);                       // "Banana"
console.log(fruits[fruits.length - 1]);       // "Orange"

console.log(fruits.length);                   //  4


// 2nd way of creating array

const numbers = new Array(1,2,3,4);
numbers.push(5);
numbers.push(6);

console.log(numbers);           //  [ 1, 2, 3, 4, 5, 6 ]
 
let pop = numbers.pop();        //  6
 
console.log(numbers);           //  [ 1, 2, 3, 4, 5 ]
console.log(pop);               //  6



