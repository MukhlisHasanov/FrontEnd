console.log('\n=====> task_01 <=====\n');

let array = [];
const arrayLength = 10;

for (let m = 0; m < arrayLength; m++) {
    array.push(Math.floor(Math.random() * 100) + 1);
}
let max = Math.max(...array);
let min = Math.min(...array);

console.log("Array: ", array);
console.log("Max number in Array: ", max);
console.log("Min number in Array: ", min);

console.log('\n=====> task_02 <=====\n');

let array2 = [];
const arrayLength2 = 10;

for (let n = 0; n < arrayLength2; n++) {
    array2.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array: ", array2);
let firstNumber = array2.shift();
console.log("Deleted number: ", firstNumber);
array2.push(firstNumber);

console.log("Array: ", array2);
console.log("Added number: " + firstNumber);

console.log('\n=====> task_03 <=====\n');

let array3 = [];
const arrayLength3 = 10;

for (let p = 0; p < arrayLength3; p++) {
    array3.push(Math.floor(Math.random() * 75) + 1);
}
let max3 = Math.max(...array3);
let min3 = Math.min(...array3);

console.log("Array: ", array3);
console.log("Min number in Array: ", min3);
console.log("Max number in Array: ", max3);
console.log("Min + Max in Array = " + (min3 + max3));

console.log('\n=====> task_04 <=====\n');

let array4 = [];
const arrayLength4 = 10;

for (let s = 0; s < arrayLength4; s++) {
    array4.push(Math.floor(Math.random() * 50) + 1);
}
console.log('Array: ', array4);

let sum = 0;
for (let j = 0; j < arrayLength4; j++) {
    sum += array4[j];
}

console.log('Sum of numbers in array: ' + sum);

console.log('\n=====> task_05 <=====\n');

let array5 = [];
const arrayLength5 = 5;

for (s = 0; s < arrayLength5; s++) {
    array5.push(Math.floor(Math.random() * 100) + 1);
}
console.log('Array: ', array5);

const [first, second, third, fourth, fifth] = array5;
console.log('first = ' + first);
console.log('second = ' + second);
console.log('third = ' + third);
console.log('fourth = ' + fourth);
console.log('fifth = ' + fifth);

console.log('\n=====> task_06 <=====\n');

const text = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."
const cleanText = text.replace(/[.,:;?()]/g,'');
let words = cleanText.split(' ');
for (let r = 0; r < words.length; r++) {
    console.log(words[r])
}

console.log('\n=====> task_07 <=====\n');

let reverseArray = [];
for (let n = words.length - 1; n >= 0; n--) {
    reverseArray.push(words[n]);
}

for (let n = 0; n < reverseArray.length; n++) {
    console.log(reverseArray[n]);
}