// Object Oriented Programming in JavaScript

// new keyword
// 1. new keyword create an empty object
// 2. it will return this
// 3. it will invoke constructor 

function CreateProducts(name, quantity, price){     // this is a contructor function 
    this.productName = name
    this.quantity = quantity
    this.price = price
}

const productMethods = {
    isavailable : function (){ return this.quantity > 0 },
    gst : function(){ 
        let percentage = this.price * 0.18 
        return this.price + percentage
    }
}

console.log(CreateProducts.prototype);              // {} prototype is an empty object provided by a function
CreateProducts.prototype.prasad = "Prasad";
console.log(CreateProducts.prototype);              // { prasad: 'Prasad' }
console.log(CreateProducts.prototype.prasad);       // Prasad
CreateProducts.prototype = productMethods;
console.log(CreateProducts.prototype);              // { isavailable: [Function: isavailable], gst: [Function: gst] }

const product1 = new CreateProducts("iPhone 12", 100, 65000);
console.log(product1);                              // { productName: 'iPhone 12', quantity: 100, price: 65000 }
console.log(product1.__proto__);                    // { isavailable: [Function: isavailable], gst: [Function: gst] }
console.log(product1.isavailable());                // true
console.log(product1.gst());                        // 76700

for (let key in product1){
    // console.log(key);                               // it will print all object and prototype keys
    if (product1.hasOwnProperty(key)){
        console.log(key);                              // it will print only object own properties or keys
    }                              
}


// class keyword

class CreateProducts2{     
    constructor(name, quantity, price){           // this is a contructor function 
        this.productName = name
        this.quantity = quantity
        this.price = price
    }
    
    isavailable (){ return this.quantity > 0 }

    gst (){ 
        let percentage = this.price * 0.18 
        return this.price + percentage
    }
}

const product2 = new CreateProducts2("iPhone 12", 100, 65000);
console.log(product1);                              // { productName: 'iPhone 12', quantity: 100, price: 65000 }
console.log(product1.__proto__);                    // { isavailable: [Function: isavailable], gst: [Function: gst] }
console.log(product1.isavailable());                // true
console.log(product1.gst());                        // 76700


// inheritance ( super() )

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    about (){
        return `Name is ${this.name}, Age is ${this.age}`
    }

    isAdult(){
        return this.age >= 18
    }
}

// Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class Student extends Person{
    constructor(name, age, year, result){
        super(name, age);
        this.graduationYear = year
        this.result = result
    }

    isPassed(){
        return this.result === "pass"
    }

    about(){                   // method overriding
        if (this.result === "pass"){
            return `Name: ${this.name}, Age: ${this.age}, Resiult: pass`
        }else{
            return `Name: ${this.name}, Age: ${this.age}, Resiult: fail`
        }
    }
}

const student1 = new Student("Prasad", 24, 2020, "pass");
console.log(student1);

// Student {
//   name: 'Prasad',
//   age: 24,
//   graduationYear: 2020,
//   result: 'pass'
// }

console.log(student1.name);                   // Prasad
console.log(student1.isAdult());              // true
console.log(student1.isPassed());             // true
console.log(student1.about());                // Name: Prasad, Age: 24, Resiult: pass


// static method and properties

class Car{
    constructor(name, brand){
        this.name = name
        this.brand = brand
    }

    static className = "Car";

    static hello(){
        console.log("Hello");
    }

    about(){
        return `Name: ${this.name}, Brand: ${this.brand}`
    }
}

Car.hello();                      // we can access static methods before calling
console.log(Car.className);       // Car we can access static properties before callig

const car1 = new Car("S8", "Audi");
 
console.log(car1.brand);          // Audi
console.log(car1.about());        // Name: S8, Brand: Audi


// getters and setters

class Doctor{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set  updateName(fullName){
        const [fName, lName] = fullName.split(" ");
        this.firstName = fName
        this.lastName = lName
    }
}

const doctor1 = new Doctor("Prasad", "Kumar", 41);

// console.log(doctor1.fullName());         // doctor1.fullName is not a function - because we use get to make function as property

console.log(doctor1.fullName);              // Prasad Kumar - getter

doctor1.updateName = "Divya Kumar";         // setter allows a function to use like property

console.log(doctor1.fullName);              // Divya Kumar



