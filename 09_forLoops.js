// Different kinds of for loops in JavaScript

const fruits = ["Apple", "Banana", "Mango", "Orange"];

// for loop

for (let i = 0; i < fruits.length; i++){
    console.log(i,`-->`,fruits[i]);
};


// for in loop

for (let i in fruits){
    console.log(i,`-->`,fruits[i]);
};

//for of loop

for (let i of fruits){
    console.log(i);
};


