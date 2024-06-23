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

function objToType2(obj) {
    const resultType = {};
    for (const key in obj) {
        resultType[key] = {value: obj[key], type: typeof(obj[key])};
    }
    return console.log(resultType);
}
objToType2(obj2); 

console.log('\n=====> task_05* <=====\n');
/**
 * 5*. Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники. 
 * На вход функция получает объект корзины (пример ниже - наименование товара и количество, а также обьект с ценами на товары, с доп. уровнями вложености). 
 * К названиям товаров привязываться не стоит, они могут быть другими, в примере просто пример.
 * const bucket = { display: 20, videocard: 100, cpu: 40, }
 * const products = { warehouse1: { videocard: 12.5, }, warehouse2: { display: 56.2, cpu: 150, }, }
 * calculateCost(bucket, products); // результат = 8374
 */

const bucket = { display: 20, videocard: 100, cpu: 40, };
const products = { 
    warehouse1: { videocard: 12.5, },
    warehouse2: { display: 56.2, cpu: 150, }
 };

function calculateCost(bucket, products) {
    let result = 0;
    for (let key in bucket) {
        const posOfShopCart = key;
        const amountOfPos = bucket[key];
        for (key in products) {
            const warehouse = products[key];
            for (key in warehouse) {
                if (posOfShopCart === key) {
                    result += warehouse[key] * amountOfPos;
                }
            }
        }
    }
    return result;
}
console.log('Total price of shoppin cart:', calculateCost(bucket, products));

console.log('\n=====> task_06* <=====\n');
/**
 * 6*. Напишите функцию, которая сравнивает 2 объекта, и возвращает результат true если они равны или false в противном случае
 * Функция принимает 2 аргумента - объекты. Объекты в качестве значений свойств могут иметь только примитивные типы данных
 * Объекты равные, если их содержание (пары ключ-значение) совпадает, количество свойств также должно совпадать. Порядок не важен.
 * function compareObjects(firstObj, secondObj) { // тут ваш код }
 * примеры объектов которые можно использовать для тестирования функции:
 * const obj1 = { name: 'John', age: 17, };
 * const obj2 = { name: 'Mark', age: 17, };
 * const obj3 = { name: 'Mark', age: 17, student: false, };
 * const obj4 = { name: 'John', age: 17, };
*/

const obj1 = { name: 'John', age: 17, };
const obj22 = { name: 'Mark', age: 17, };
const obj3 = { name: 'Mark', age: 17, student: false, };
const obj4 = { name: 'John', age: 17, };

function compareObjects(firstObj, secondObj) {
    const keys1 = Object.keys(firstObj);
    const keys2 = Object.keys(secondObj);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key in firstObj) {
        if (!(key in secondObj) || firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    return true;
}
console.log('compareObjects(obj1, obj2) is', compareObjects(obj1, obj22));    // false
console.log('compareObjects(obj1, obj4) is', compareObjects(obj1, obj4));    // true
console.log('compareObjects(obj2, obj3) is', compareObjects(obj22, obj3));    // false
console.log('compareObjects(obj1, obj3) is', compareObjects(obj1, obj3));    // false
console.log('compareObjects(obj3, obj3) is', compareObjects(obj3, obj3));    // true