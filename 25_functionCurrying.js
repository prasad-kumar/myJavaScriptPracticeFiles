// Function Currying in JavaScript


const multiply = function (x, y){
    return x * y
}

// using bind()

let mul = multiply.bind(this, 4);

console.log(mul(5));         // 20


// using closure

const sum = (a) => {
    return (b) => {
        return a + b
    }
}


let sumtwo = sum(1);

console.log(sumtwo(4));



