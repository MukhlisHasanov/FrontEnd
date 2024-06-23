console.log('\n=====> task_01 <=====\n');

/**
 * Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. 
 * Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. 
 * Пример работы функции:
['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
 */

const examplArr = ['a', 36.6, 'John Doe'];

function arrayToObject(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }
    return obj;
}
console.log(arrayToObject(examplArr));

console.log('\n=====> task_02 <=====\n');

/**
 * Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
[
  [ 'height', 170 ],
  [ 'weight', 80 ],
  [ 'sport', 'regbi' ],
  [ 'full name', 'John Doe' ],
  [ 'sing', 'love' ],
  [ 'speed', 90 ]
]
 */
const arrayWithDoubleElements = [
    ['height', 170],
    ['weight', 80],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
]

function makeNewObject(arrayWithDoubleElements) {
    const obj1 = {};
    for (let i = 0; i < arrayWithDoubleElements.length; i++) {
        // console.log(arrayWithDoubleElements[i]);
        // console.log(arrayWithDoubleElements[i][0]);
        // console.log(arrayWithDoubleElements[i][1]);
        obj1[arrayWithDoubleElements[i][0]] = arrayWithDoubleElements[i][1];
    }
    return obj1;
}

console.log(makeNewObject(arrayWithDoubleElements));
