// Sets in JavaScript

const myArr = new Set();

myArr.add(1);
myArr.add(4);
myArr.add(5);
console.log(myArr);                   // Set(3) { 1, 4, 5 }

const numbers = [1,2,3,3,4,4,5,5,6,7,7,8,9]

const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);           // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

for (let i of uniqueNumbers){         // for in loop will not work on sets
    console.log(i);
}

console.log(uniqueNumbers);  
console.log(uniqueNumbers.add(10));
console.log(uniqueNumbers);
console.log(uniqueNumbers.delete(2));  
console.log(uniqueNumbers);    
console.log(uniqueNumbers.has(4));    // true
console.log(uniqueNumbers.has());     // false
console.log(uniqueNumbers.size);      // 9 size of set
 


