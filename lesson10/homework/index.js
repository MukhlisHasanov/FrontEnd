// console.log('\n=====> task_01 <=====\n');
/**
Задание 1. Even/Odd
Создайте ф-цию, которая определяет парность числа

Функция должна принимать целое число
Если число не целое - скруглить его в меньшую сторону
Функция должна вернуть строку 'even' если число четное
Функция должна вернуть строку 'odd' если число не четное
 */

// const randNum = Math.floor(Math.random() * 100) + 1;
// console.log("Random number is " + randNum);

// if (randNum % 2 == 0) {
//     console.log("This is even")
// } else {
//     console.log("This is odd")
// }

// console.log('\n=====> task_02 <=====\n');
/**
Задание 2. Стрелочная ф-ция возводящая число в квадрат
Создайте ф-цию, которая возвращает квадрат числа

Функция должна принимать целое число
Если число не целое - скруглить его в меньшую сторону
Функция должна вернуть квадрат этого числа
 */
// const randNum2 = Math.floor(Math.random() * 10) + 1;
// console.log("Random number is " + randNum2);

// const squareNumb = numb => 'Square number is ' + numb ** 2;
// console.log(squareNumb(randNum2));

console.log('\n=====> task_03 <=====\n');
/**
Задание 3. Сумма четных чисел в заданном промежутке
Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке

Аргументы функции два - начало промежутка и конец промежутка
Если число не целое - скруглить его в меньшую сторону
На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму
 */




function getEvenNumbers(randomArr) {
    let arr2 = [];

    for (let i = 0; i < randomArr.length; i++) {
        if (randomArr[i] % 2 === 0) {
            arr2.push(randomArr[i]);
        }
    }
    return arr2;
}

let randomArr = Array(10).fill().map(() => Math.floor(Math.random() * 100) + 1); // массив из 10 случайных чисел от 0 до 99
console.log(randomArr);
let evenNumbers = getEvenNumbers(randomArr);
console.log(evenNumbers); 
