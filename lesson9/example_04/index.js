const strA = '  Hello, my little bro Hello';

console.log(strA.length);
console.log(strA.toLowerCase());
console.log(strA.toUpperCase());

let substring = strA.substring(7, 9);
console.log(substring);

const replacedString = strA.replaceAll('Hello', 'Привет');

console.log(replacedString);
console.log(strA);
console.log(strA.trim());

console.log(strA.trim().split(' '));
