// variables in JavaScript

// var is function scoped
var a = 10;

console.log(a);

// let & const are block scoped

let firstName = "Prasad";
let lastName = "Kumar";

console.log(firstName,lastName);

firstName = "K Prasad"

console.log(firstName,lastName);

const pi = 3.14;
// pi = 3.25;    TypeError: Assignment to constant variable.

// variable scope example

const myFunction = () => {
    var sum = 100;
    if (sum === 100){
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(a);   // it will print 10
        console.log(b);   // it will print 20
        console.log(c);   // it will print 30
    };
    console.log(a);       // it will print 10
    console.log(b);       // ReferenceError: b is not defined
    console.log(c);       // ReferenceError: c is not defined
    console.log(sum);     // it will print 0
};

myFunction()
