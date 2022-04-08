// Async Await in JavaScript

const URL = "https://jsonplaceholder.typicode.com/posts";


const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

fetchData().then((data) => {
    console.log(data);
})


