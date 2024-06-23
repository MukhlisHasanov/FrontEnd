// array.map
const arr1 = [2, 3, 4]; // хотим [4, 9, 16]

const pow2 = (a) => {
    return a**2;
}

const arr1Pow = arr1.map(pow2);
console.log(arr1Pow);

const arr1Pluw2 = arr1.map((element, index) => {
    return element + index;
});

console.log(arr1Pluw2);


const toBuy = ['молоко', 'пиво', 'вода']; // =>  <li>молоко</li>, <li>пиво</li>, <li>вода</li>

const toBuyHTML = toBuy.map(element => `<li>${element}</li>`);
console.log(toBuyHTML);

// const toBuyHTMLforVanillaJS = toBuy.map(element => {
//     const listItem = document.createElement('li');
//     listItem.textContent = element;
//     return listItem;
// });

// console.log(toBuyHTML);


// forEach
toBuy.forEach(elem => {
    console.log(`Надо купить ${elem}`);
});


// пример map для двумерного массива
    // const doubleArr = [[1, 2], [10, 20], [100, 200]];
    // const call1 = elem => {
    //     return [elem[0]*2, elem[1]*2];
    // }
    // const call2 = elem => elem[0] + elem[1];
    // console.log(doubleArr.map(call1));
