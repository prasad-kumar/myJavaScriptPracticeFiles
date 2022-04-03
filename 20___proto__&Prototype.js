// __proto__ & Prototype in JavaScript


// this keyword

const employee = {
    name : "Prasad",
    wishes : "Happy Birth Day",
    wishMe : function (message,message2){
        console.log(`${this.wishes} ${this.name}, ${message}, ${message2}`);
    }
}


employee.wishMe("Stay Blessed", "Party Hard");  // Happy Birth Day Prasad, Stay Blessed,Party Hard


// call()

const employee2 = {
    name : "Maruthi",
    wishes : "Happy Birth Day",  
}


employee.wishMe.call(employee2, "Stay Blessed", "Party Hard");  // Happy Birth Day Maruthi, Stay Blessed, Party Hard


// apply()

const employee3 = {
    name : "Sai",
    wishes : "Happy Birth Day",  
}

employee.wishMe.apply(employee2, ["Stay Blessed", "Party Hard"]);  // Happy Birth Day Maruthi, Stay Blessed, Party Hard


// bind()

function wishMe2(message,message2){
    console.log(`${this.wishes} ${this.name}, ${message}, ${message2}`);
}

const myFunc = wishMe2.bind(employee3, "Stay Blessed", "Party Hard");  // binding object with function

myFunc();        // Happy Birth Day Sai, Stay Blessed, Party Hard


// __proto__ ([[prototype]])

const empMethods = {
    is18 : function (){ return this.age >= 18},
    about : function (){ return `${this.name}, ${this.age}`}
}

// const employee4 = {
//     name : "Divya",
//     age : 24,
// }

const employee4 = Object.create(empMethods);    // chaining given object (empMethods) as __proto__  

employee4.name = "Divya"  // assigning properties to object
employee4["age"] = 24

console.log(employee4.__proto__);      // { is18: [Function: is18], about: [Function: about] }

console.log(employee4.is18());         // true
console.log(employee4.about());        // Divya, 24


function createWorkers(name, age){
    const worker = Object.create(empMethods);
    worker.name = name
    worker.age = age

    return worker
}

const worker1 = createWorkers("Sunil", 28);
console.log(worker1);                  // { name: 'Sunil', age: 28 }
console.log(worker1.__proto__);        // { is18: [Function: is18], about: [Function: about] }
console.log(worker1.is18());           // true


// Prototype

function createProducts(name, quantity, price){
    const product = Object.create(createProducts.prototype);
    product.productName = name
    product.quantity = quantity
    product.price = price

    return product
}

const productMethods = {
    isavailable : function (){ return this.quantity > 0 },
    gst : function(){ 
        let percentage = this.price * 0.18 
        return this.price + percentage
    }
}

console.log(createProducts.prototype);              // {} prototype is an empty object provided by a function
createProducts.prototype.prasad = "Prasad";
console.log(createProducts.prototype);              // { prasad: 'Prasad' }
console.log(createProducts.prototype.prasad);       // Prasad

createProducts.prototype = productMethods;
console.log(createProducts.prototype);              // { isavailable: [Function: isavailable], gst: [Function: gst] }



const product1 = createProducts("iPhone 12", 100, 65000);
console.log(product1);                              // { productName: 'iPhone 12', quantity: 100, price: 65000 }
console.log(product1.__proto__);                    // { isavailable: [Function: isavailable], gst: [Function: gst] }
console.log(product1.isavailable());                // true





