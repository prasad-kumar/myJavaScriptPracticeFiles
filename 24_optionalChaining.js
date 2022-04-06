// Optional Chaining in JavaScript

const user = {
    name : 'Prasad',
    age : 24, 
    address : {
        hNo : '21-12',
        city : 'Hyderabad'
    }
};

console.log(user.name)           // Prasad

console.log(user.address);       // { hNo: '21-12', city: 'Hyderabad' }

console.log(user.address.city);  // Hyderabad

const user2 = {
    name : 'Maruthi',
    age : 23, 
    // address : {
        // hNo : '21-102',
        // city : 'Hyderabad'
    // }
};

console.log(user2.name)              // Prasad

console.log(user2.address);          // undefined
console.log(user2?.address)          // undefined

console.log(user2.address.city);     // Cannot read properties of undefined (reading 'city')
console.log(user2?.address?.city);   // undefined - we used optional chaining to get rid of errors





