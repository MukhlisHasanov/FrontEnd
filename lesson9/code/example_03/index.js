// loops (циклы)

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
arr1.length;


for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// выводим элементы массива в консоль
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// создать пустой массив, заполнить случайными числами (Math.random()), 5 элементов (в цикле)
const arrWithRandoms = [];

const arr2 = [];
let a = 10;
for (let i = 0; i < a; i++) {
   let a = (Math.random() * 10);
   arr2.push(a);
}
console.log(arr2, arr2.length)

// задачка про четверть часа

// if
// math
let minutes = 38;

if (minutes < 15 ) {
    console.log(1)
 } else if (minutes < 30) {
    console.log(2)
 } else if (minutes < 45) {
    console.log(3)
 } else {
    console.log(4)
 }

let numberOfQ = Math.ceil(minutes/15);
console.log(numberOfQ + " четверть");
console.log(`${numberOfQ} четверть`);

// решение Родиона

let minutes1 = 27;
let quarter1 = Math.floor(minutes1 / 15) + 1;
// if (quarter1 > 4) {
//     return (
//         console.log("Minutes should be in the rande of 0 to 59."))
// }
console.log((`The minute ${minutes1} is in the ${quarter1} quarter of the hour.`));
console.log(("The minute" + minutes1 + " is in the " + quarter1 + " quarter of the hour."));
