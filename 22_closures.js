// Closures in JavaScript


const myFunc = () => {
    let count = 0
    return () => {
        if (count === 0){
            console.log(`Hi`);
            count += 1
        }else{
            console.log(`you've called me before ${count} times`)
            count += 1
        }
    }
}

const fun = myFunc();  // myFunc will return a function with local variables
fun();                 // fun() can access myFunc() local variables
fun();
fun();


// traditional arrow function
// const powerOf = (power) => {
//     return (number) => {
//         return number ** power
//     }
// }

// short syntax
const powerOf = power => number =>  number ** power

const result = powerOf(2);

console.log(result(3));




