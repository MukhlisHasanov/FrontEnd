function sumOfNumbers(a, b) {
    return a + b;
}

console.log(sumOfNumbers(4, 6));

// function numberx(a, b) {
//     return a ** b
// }

// console.log(numberx(3, 3));

// const numberY = (a, b) => a ** b;
// console.log(numberY(3, 3));

// const numberZ = (a, b) => Math.pow(a, b);
// console.log(numberZ(3, 3));


// // Функция, которая использует другие функции

// // = () => {}

// const makeOperations = (a, b) => {

//     function sumOfNumbers(a, b) {
//         return a + b;
//     }

//     console.log('Sum of our numbers = ' + sumOfNumbers(a, b))
// }

// makeOperations(7, 3);

// const makeOperations2 = (a, b) => {
//     console.log('Sum of our numbers = ' + sumOfNumbers(a, b))
// }

// makeOperations2(7, 4);

// callback функции

const makeOperationsWithCallBack = (a, b, operation1) => {
    return operation1(a, b);
}

console.log(makeOperationsWithCallBack(5, 3 ,sumOfNumbers));

//===============================================================//
// напишем функцию, которая принимает 2 числа, и две колбек функции.
// функция которая возвращает сумму чисел
// функция которая возвращает возведение в степень
// результат выполнения функции:
// Сумма чисел = 
// Число а в степени б =  




function sumOfNumbers2(a, b) {
    return a + b;
}

const powNumberArrow2 = (num, powN) => Math.pow(num, powN);

const callBackOperations = (a, b, x, y) => {
    console.log(x(a, b));
    console.log(y(a, b));
}

const sumOfNumberS = (a, b) => a + b


callBackOperations(2, 10, sumOfNumberS, powNumberArrow2);

