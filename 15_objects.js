// Objects in JavaScript


const myObject = {
    key1 : "value1",
    "key 2": "value2"
}

const user = {
    name : "Prasad",
    age : 24,
    gender : "Male"
}

// dot notation

console.log(user.name);                 // accesing object property using dot notaion

user.name = "Prasad Kumar";             // assiging new value to object property using dot notation
 
console.log(user.name);                 // accesing object property using dot notaion


// bracket notation

console.log(user["age"]);                 // accesing object property using dot notaion

user["age"] = 20;                         // assiging new value to object property using dot notation
 
console.log(user["age"]);                 // accesing object property using dot notaion


const myObj = {};

let key = "name";
let key2 = "age";

myObj[key] = "Prasad";
myObj.key2 = 24;

console.log(myObj);                       // { name: 'Prasad', key2: 24 }  

// if you use dot notaion for storing variable as a key then it will store variable name as key not value
// use bracket notaion for storing variable as a key or if you want space between key names

myObj[key2] = 24;
myObj["mobile no"] = 12344566;

console.log(myObj);                       // { name: 'Prasad', key2: 24, age: 24, 'mobile no': 12344566 }

// spread operator

const employee = {
    name : "prasad",
    age  : 24
};
const employee2 = {
    name2 : "maruthi",
    age2  : 24
};

const myEmployees = {...employee, ...employee2};

console.log(myEmployees);                // { name: 'prasad', age: 24, name2: 'maruthi', age2: 24 }


// object destructuring

const car = {
    model : "S8",
    brand : "Audi",
    year  : "2018"
}

let {model:modelName, year} = car;

console.log(modelName);                 // S8
console.log(year);                      // 2018


// nested destructuring

const users = [
    {username : "Prasad",age : 24, phone : 987654321},
    {username : "Maruthi",age : 24, phone : 987654322},
    {username : "Sai",age : 24, phone : 987654323},
]

let [{username, phone}, ,{username:username3,phone:phone3}] = users;

console.log(username, phone);          // Prasad 987654321
console.log(username3, phone3);        // Sai 987654323


const userInfo = {
    fullName : "Prasad Kumar",
    age : 23,
    gender : "male",
    hobbies : ['playing cricket', 'music', 'books'],
    skills : {
        skill1 : "JavaScript",
        skill2 : "Python",
        skill3 : "React"
    }
}

console.log(userInfo);

let {fullName, hobbies, skills, ...rest} = userInfo;

console.log(fullName, skills, hobbies, rest);

console.log(userInfo["skills"]["skill1"]);       // JavaScript
console.log(userInfo["hobbies"][1]);             // music
