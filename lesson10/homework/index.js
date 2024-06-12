console.log('\n=====> task_01 <=====\n');
const randNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number is " + randNum);

if (randNum % 2 == 0) {
    console.log("This is even")
} else {
    console.log("This is odd")
}