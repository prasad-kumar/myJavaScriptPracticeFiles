// Maps in JavaScript

const user = new Map();

user.set("name", "Prasad");
user.set("age", 24);
user.set("gender", "male");

console.log(user);                    // Map(3) { 'name' => 'Prasad', 'age' => 24, 'gender' => 'male' }

console.log(user.get("name"));        // Prasad
console.log(user.delete("gender"));   // true
console.log(user);                    // Map(2) { 'name' => 'Prasad', 'age' => 24 }
console.log(user.has("name"));        // true
console.log(user.size);               // 2    


// real world example

const productSpecs = {
    pName : "Apple iPhone 12",
    brand : "Apple",
    model :  "iPhone 12",
    proce :  "Apple A14 bionic"
}
const productVarients = {
    colors : [{color:'red',quantity:100,price:65000},{color:'white',quantity:200,price:68000}],
    sizes : ['128GB','256GB','512GB']
}

const products = new Map();

products.set(productSpecs, productVarients);

console.log(products);
console.log(products.get(productSpecs).colors[0]["color"]);         // red



