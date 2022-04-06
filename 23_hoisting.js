// Hoisting in JavaScript

// In other words; a variable can be used before it has been declared.

x = 5;

console.log(x);    // 5

var x;
// let x;  // Cannot access 'x' before initialization

one();         // function declaration can be used before it has been declared.

two();         // function expression can not used before it has been declared.

three();       // arrow function can not used before it has been declared.

// function declaration
function one(){
    console.log('hello from one');
};

// function expreesion
const two = function () {
    console.log('hello from two');
};

// arrow function
const three = () => {
    console.log('hello from three');
};



