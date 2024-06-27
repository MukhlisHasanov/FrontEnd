// синхронный код
// console.log('Script start');
// const result = prompt('Введите ваш возраст');
// console.log(`Введенный возраст ${result}`);

// асинхронный код
// console.log('Script start');
// let result;
// const inputElement = document.querySelector('#age');
// document.querySelector('#ok-btn').addEventListener('click', okHandler);

// function okHandler() {
//     result = inputElement.value;
//     console.log(result);
// }
// console.log(`Введенный возраст ${result}`)

// promise
const firstPromise = new Promise(
    // (resolve) => {
    //     setTimeout(
    //         () => { resolve(true) }, 20000
    //     )
    // }
    (resolve) => {
        const inputElement = document.querySelector('#age');
        document.querySelector('#ok-btn').addEventListener('click', okHandler);
        function okHandler() {
            result = inputElement.value;
            resolve(result)
        }
    }
);

firstPromise.then((ring) => {console.log(ring)});



function promiseFullField(a) {
    console.log(a);
}