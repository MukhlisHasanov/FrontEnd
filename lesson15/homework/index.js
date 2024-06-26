console.log('\n=====> task_01 <=====\n');
/**
 *  Написать функцию, которая принимает на вход массив имен и возвращает массив имен, 
 *  начинающихся на букву "а" (большую или маленькую).
 */

const names = ["Alex", "Boris", "Kirill", "Andrey", "Oleg", "Roman", "Arnold", "Leonid", "Eugene"];
const namesFilterA = (arr) => {
    return arr.filter(name => name[0].toLowerCase() === 'a');
}
console.log(namesFilterA(names));

console.log('\n=====> task_02 <=====\n');
/**
 * Написать функцию, которая принимает на вход массив чисел и возвращает их сумму. 
 * Если получится использовать метод reduce - будет здорово.
 */




console.log('\n=====> task_03 <=====\n');

/**
 * Написать функцию, которая принимает на вход массив чисел и возвращает массив из тех же элементов, но в обратном порядке.
 */


console.log('\n=====> task_04 <=====\n');
/**
 *  Написать функцию, которая примет объект вида:
*/
const customer = {
    'customer-id-1': {
       name: 'William',
       age: 54
    },
    'customer-id-2': {
       name: 'Tоm',
       age: 17
    }
 }

 const getObjectView = (customer) => {
    const changeElement = (custId) => {
        return {id: custId, ...customer[custId]}
    }
    const customerId = Object.keys(customer);
    const newArray = customerId.map(changeElement);
    return newArray;
 }
 console.log(getObjectView(customer));
 