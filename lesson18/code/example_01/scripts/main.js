const fetchRes = fetch('https://api.github.com/users/facebook');

// fetchRes
// .then()
// .catch()
// .finally()

fetch('https://api.github.com/users/facebook')
.then(
    (response) => {
        return response.json();
    }
)
.catch((error) => {console.error('Our er 1', error)})
.then(
    (data) => {
        console.log(data);
    }
)
.catch(
    (error) => {console.log(error)}
)
.finally(
    () => {console.log('Finally')}
)

console.log("Hello world")