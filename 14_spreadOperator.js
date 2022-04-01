// Spread Operator in JavaScript

const arr1 = [ 1, 2, 3, 4, 5 ];
const arr2 = [ 6, 7, 8, 9, ];

const myArr = [...arr1, ...arr2];

console.log(myArr);           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


console.log(...arr1);

for (let i of [...arr1, ...arr2]){
    console.log(i);
};

