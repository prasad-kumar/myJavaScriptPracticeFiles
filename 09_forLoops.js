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


// nested for of loop

const fruits2 = ["Mango", "Grapes", "Apple", "Orange" ];

for (let j of fruits2){
    console.log(j);
    for (let k of j){
        console.log(" |_", k);
    };
};

// output:-

// Mango
//  |_ M
//  |_ a
//  |_ n
//  |_ g
//  |_ o
// Grapes
//  |_ G
//  |_ r
//  |_ a
//  |_ p
//  |_ e
//  |_ s
// Apple
//  |_ A
//  |_ p
//  |_ p
//  |_ l
//  |_ e
// Orange
//  |_ O
//  |_ r
//  |_ a
//  |_ n
//  |_ g
//  |_ e



