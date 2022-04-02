// Functions in JavaScript

function hellWorld(){
    console.log("Hello WOrld!");
};
 
hellWorld();              // Hello World!


// function declaration

function sum(a, b){
    return a + b
};

console.log(sum(1,4));                // 5


// function expression

const mul = function (a, b){
    return a * b
};

console.log(mul(2, 7));    // 14


// arrow function

const sub = (a, b) => {
    return a - b
};

console.log(sub(6, 1));    // 5


// function inside function (nested functions)

function calculator(fun, a, b){
    function add(a, b){
        return a + b
    }
    function sub(a, b){
        return a - b
    }
    function mul(a, b){
        return a * b
    }
    function div(a, b){
        return a / b
    }

    let result

    if (fun === "add"){
        result = add(a, b);
    }else if (fun === "sub"){
        result = sub(a, b);
    }else if (fun === "mul"){
        result = mul(a, b);
    }else {
        result = div(a, b);
    }    

    return result
}

let cal = calculator("add", 1, 4);
console.log(cal);

// default parameters

const sumTwo = (a = 0, b = 0) => {
    return a + b
}

console.log(sumTwo());            // 0
console.log(sumTwo(1));           // 1
console.log(sumTwo(4, b = 1));    // 5
console.log(sumTwo(1,4));         // 5


// rest operator

const sumAllNumbers = (...numbers) => {
    let total = 0;
    for (let num of numbers){
        total += num
    }
    return total
}

console.log(sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));   // 55


// param destructuring

const myFunc = ({name, age}) => {
    console.log(name, age)
}

const user = {
    name : "Prasad",
    age  : 24
}

myFunc(user);                           // Prasad 24


// callback function

const funOne = () => {
    console.log("Hello from funcOne");
}

const funTwo = (callback) => {
    console.log("Hello from funcTwo");
    callback();
}

funOne(funTwo);                      // hello from funOne


// function returning function

const myFunc2 = () => {
    const hello = () => console.log(`Hello`);
    return hello
}

let j = myFunc2();
console.log(j);                     // const hello = () => console.log(`Hello`);
j();                                // Hello









