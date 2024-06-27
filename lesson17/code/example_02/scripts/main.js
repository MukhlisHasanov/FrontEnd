// promise
const secondPromise = new Promise(
    (resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber)
        } else {
            reject(randomNumber)
        }
    }
);

secondPromise
.then(promiseFullField)
.catch(promiseRejected)
.finally(forFinally)

function promiseFullField(a) {
    console.log('Success with result ' + a);
}

function promiseRejected(a) {
    console.log('Rejected with result ' + a);
}

function forFinally() {
    console.log('Finally is done!');
}

// rewrite promise
secondPromise
.then((a) => {
    console.log('Success with result ' + a);
})
.catch((a) => {
    console.log('Rejected with result ' + a);
})
.finally((a) => {console.log('Finally is done!');
})
