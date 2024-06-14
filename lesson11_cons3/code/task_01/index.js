
// написать функцию, которая принимает массив, 
// и колбек функцию для обработки элементов массива

const arrIn = [1, 3, 5, 7];

const power = (y) => {
    y = Math.floor(y);
    return y * y;
}

const changeArray = (arr, callB) => {
    const arr1 = [];
    for (i = 0; i < arr.length; i++) {
        // arr1.push(arr[i] * 2);

        arr1.push(callB(arr[i]))
        

    } return arr1;
}

console.log(changeArray(arrIn, power));