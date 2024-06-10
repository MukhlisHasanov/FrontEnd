
function transformArray(array, callback) {
    return array.map(callback);
}
const arr = [2, 3, 5];
const callF = a => a * 2;

const callBackArr = transformArray(arr, callF);
console.log(callBackArr);