// Arithmetic Operators in JavaScript

//   Operator	      Example	   Same As
//    =	               x = y	    x = y
//    +=	           x += y	    x = x + y
//    -=	           x -= y	    x = x - y
//    *=	           x *= y	    x = x * y
//    /=	           x /= y	    x = x / y
//    %=	           x %= y	    x = x % y
//    **=	           x **= y	    x = x ** y

let a = 10;
let b = 5;

console.log(a + b);      // 15
console.log(a - b);      //5 
console.log(a * b);      //50
console.log(a / b);      //2
console.log(a ** b);     //100000
console.log(a % b);      //0
a++;
console.log(a);          // 11
b--;
console.log(b);          // 4


// Assignment Operators in JavaScript

//   Operator	  Description

//    ==	      equal to
//    ===	      equal value and equal type
//    !=	      not equal
//    !==	      not equal value or not equal type
//    >	          greater than
//    <	          less than
//    >=	      greater than or equal to
//    <=	      less than or equal to

console.log(10 == 10);      // true
console.log(10 == "10");    // true
console.log(10 === 10);     // true
console.log(10 === "10");   // false

console.log(10 != 10);      // false
console.log(10 != "10");    // false
console.log(10 !== 10);     // false
console.log(10 !== "10");   // true


console.log(10 > 10);       // false
console.log(10 > 8);        // true
console.log(10 > 20);       // false


console.log(10 < 10);       // false
console.log(10 < 8);        // false
console.log(10 < 20);       // true


console.log(10 >= 10);       // true
console.log(10 >= 8);        // true
console.log(10 >= 20);       // false


console.log(10 <= 10);       // true
console.log(10 <= 8);        // false
console.log(10 <= 20);       // true

//    Operator	       Description
//     &&	            logical and
//     ||	            logical or


let userName = "logan"; 
let password = "logan*123";

if (userName === "logan" && password === "logan*123"){
    console.log("login succesfull");
}else{
    console.log("login failed");                            // login succesfull
};


if (userName === "logan" && password === "logan@12345"){
    console.log("login succesfull");
}else{
    console.log("login failed");                            // login failed
};



if (userName === "logan" || password === "logan*123"){
    console.log("login succesfull");
}else{
    console.log("login failed");                            // login succesfull
};


if (userName === "logan" || password === "logan@12345"){
    console.log("login succesfull");
}else{
    console.log("login failed");                            // login succesfull
};

if (userName === "john" || password === "john@12345"){
    console.log("login succesfull");
}else{
    console.log("login failed");                            // login failed
}
