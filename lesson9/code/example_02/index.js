// arrays

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];

console.log(arr1[2]);
console.log(arr1[6][2]);

console.log(arr1.length);

// добавляем элемент в конец массива
const newLength = arr1.push(777);
console.log(arr1);
console.log(newLength);

// удаляем последний элементи из массива
arr1.pop();
console.log(arr1.pop());
console.log(arr1);

// вставить элемент в начало
arr1.unshift("первый");
console.log(arr1);


// удалить первый элемент из массива
arr1.shift();
console.log(arr1);


// вставить куда то в серединку
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // начиная с индекса 1 - первый аргумент, удалить 0 элементов, и на их место вставить третий аргумент
console.log(months);

// перевернуть массив
console.log(months.reverse());
console.log(months.reverse());


// удаление по индексу (начиная с индекса 1 - первый аргумент удалить 1 элемент - второй аргумент)
months.splice(1, 1);
console.log(months);


// "двумерный" массив
const doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(doubleArr[0][2]);
console.log(doubleArr[2][1]);




// Спред / деструктуризация
const arrC = [1, 2, 3];
const arrY = [4, 5, 6];

const arr3 = [...arrC, ...arrY];

console.log(arr3);

console.log(Math.max(...arr3));


let a;
let b;
let c;

[a, b, c] = [...arrC];

console.log(b);
