// function getUser() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//      .then(response => response.json())
//      .then(json => console.log(json.length))
//      .catch (function(error){
//         console.log('Deu problema')
//      })
// }

// getUser();

const endpoints = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4"
   ]
   
   const promises = endpoints.map(url => fetch(url).then(res => res.json()))
   
   Promise.all(promises)
    .then(valores => {console.log(valores)})