// fetch() in JavaScript

const URL = "https://jsonplaceholder.typicode.com/posts";


// const fetchData = fetch(URL).then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
//     return data
// });


//short syntax
const fetchData = fetch(URL).then(response =>  response.json()).then(data => console.log(data));





