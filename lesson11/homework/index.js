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
 * Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект.
 * Первый элемент каждого внутреннего массива ключ, второй - значение. 
 * Например такой:
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

console.log('\n=====> task_03 <=====\n');

/**
* Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
* Пример работы функции:
* { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
 */

const obj2 = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
function objToString(obj) {
    const valuesObj = Object.values(obj);
    const resultStr = valuesObj.join(', ');
    console.log(resultStr);
}
objToString(obj2);

console.log('\n=====> task_04 <=====\n');

/**
* Напишите функцию, которая принимает объект и возвращает другой обьект,
* который содержит все свойства исходного объекта,
* но значения свойств - это их типы.
* Пример:
* { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
*/

function objToType(obj) {
    const resultType = {};
    for (const [key, value] of Object.entries(obj)) {
        resultType[key] = typeof value;
    }
    return console.log(resultType);
}
objToType(obj2);


console.log('\n=====> task_04* <=====\n');

/**
 * 4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект,
 * который содержит все свойства исходного обьетка, 
 * но значения свойств - это объект содержащий исходное значение, и его тип.
 * Пример:
 * { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 
 * { a: { value: 'a', type: 'string' }, 
 * '36.6': { value: 36.6, type: 'number' }, 
 * 'John Doe': { value: 'John Doe', type: 'string' } }
 */

function objToType(obj) {
    const resultType = {};
    for (const key in obj) {
        resultType[key] = {value: obj[key], type: typeof(obj[key])};
    }
    return console.log(resultType);
}
objToType(obj2); 