console.log('\n=====> task_01 <=====\n');
/**
Задание 1. Even/Odd
Создайте ф-цию, которая определяет парность числа

Функция должна принимать целое число
Если число не целое - скруглить его в меньшую сторону
Функция должна вернуть строку 'even' если число четное
Функция должна вернуть строку 'odd' если число не четное
 */

const randNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number is " + randNum);

if (randNum % 2 == 0) {
    console.log("This is even")
} else {
    console.log("This is odd")
}

console.log('\n=====> task_02 <=====\n');
/**
Задание 2. Стрелочная ф-ция возводящая число в квадрат
Создайте ф-цию, которая возвращает квадрат числа

Функция должна принимать целое число
Если число не целое - скруглить его в меньшую сторону
Функция должна вернуть квадрат этого числа
 */
const randNum2 = Math.floor(Math.random() * 10) + 1;
console.log("Random number is " + randNum2);

const squareNumb = numb => 'Square number is ' + numb ** 2;
console.log(squareNumb(randNum2));

console.log('\n=====> task_03 <=====\n');
/**
Задание 3. Сумма четных чисел в заданном промежутке
Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке

Аргументы функции два - начало промежутка и конец промежутка
Если число не целое - скруглить его в меньшую сторону
На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму
 */

let randomArr = Array(10).fill().map(() => Math.floor(Math.random() * 100) + 1);
console.log("Random array => ", randomArr);

function getEvenNumbers(randomArr) {
    let arr2 = [];

    for (let i = 0; i < randomArr.length; i++) {
        if (randomArr[i] % 2 === 0) {
            arr2.push(randomArr[i]);
        }
    }
    return arr2;
}

let evenNumbers = getEvenNumbers(randomArr);
console.log("Even numbers array => ", evenNumbers);

let sum = evenNumbers.reduce(function (a, b) {
    return a + b;
}, 0);

console.log("Sum of numbers in even array => ", sum);

console.log('\n=====> task_04 <=====\n');

/**
 Задание 4. Простые числа в заданном промежутке
Нужно создать две функции.
Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым, или нет. Число является простым, если оно делиться без остатка только на 1 и само на себя.
Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n - первый аргумент функции.
Вторая функция должна пользоваться первой функцией для определения простых чисел.
Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.
 */

function checkForPrimeNumber(num) {
    num = Math.floor(num);
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
checkForPrimeNumber();

const returnArrayPrimeNumbers = (n) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (checkForPrimeNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log('Fill the array with prime numbers: ', returnArrayPrimeNumbers(17));

console.log('\n=====> task_05 <=====\n');

/**
*  Задание 5. (необязательное)
* «FizzBuzz»
* Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
* Функция должна выводить в консоль числа от 1 до n, заменяя числа:
• кратные трём — на fizz;
• кратные пяти — на buzz;
• кратные и трём, и пяти одновременно — на fizzbuzz.
*/

function fizzBuzz(numb) {
    // numb = Math.floor(numb);
    for (let j = 1; j <= numb; j++) {
        if (j % 3 === 0 && j % 5 === 0) {
            console.log('fizzbuzz');
        } else if (j % 5 === 0) {
            console.log('buzz');
        } else if (j % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(j);
        }
    }
}
fizzBuzz(16);


console.log('\n=====> task_06 <=====\n');
/** Задание 6. (необязательное)
* Напишите функцию reverseWords(str), принимающую на вход строку.
* Функция должна вернуть новую строку, расставив слова в обратном порядке.
* Если в строке есть знаки препинания, их можно удалить или оставить — на ваше усмотрение.
*/

function reverseWords(str) {
    const cleanText = str.replace(/[.,:;!?()]/g, '');
    let words = cleanText.split(' ');
    let reverseWords = words.reverse();
    let result = reverseWords.join(' ');
    console.log('Строка: ' + str);
    console.log('Строка наоборот: ' + result);
}
reverseWords('Ка бы не было зимы, в городах и селах. Никогда б не знали мы этих дней веселых!')

console.log('\n=====> task_07 <=====\n');
/** Задание 7. (необязательное)
* Напишите функцию intersection(arr1, arr2). 
* Она должна принимать на вход два массива целых чисел. 
* Функция должна вернуть новый массив чисел, содержащихся в обоих исходных массивах.
* Протестируйте решение, вызывая функцию с разными аргументами:
• console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // должна вернуть [4, 1] 
• console.log(intersection([1, 5, 4, 2], [7, 12])); // должна вернуть [] 
• console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // должна вернуть [ 1, 1, 0, 0, 0, 1 ]
*/

function intersection(arr10, arr20) {
    const arr30 = [];
    for (let k = 0; k < arr10.length; k++) {
        if (arr20.includes(arr10[k])) {
            arr30.push(arr10[k]);
        }
    }
    return arr30;
}
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));
console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0]));