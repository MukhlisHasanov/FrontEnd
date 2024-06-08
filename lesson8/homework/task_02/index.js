const a = 17;
const b = 5;
console.log("===> a = 17, b = 5 <===" + '\n');
console.log('a > b => ' + (a > b));//true
console.log('a <= b => ' + (a <= b));//false
console.log('a == b => ' + (a == b));//false
console.log('a != b => ' + (a != b));//true
console.log("'a' < 'b' => " + ('a' < 'b'));//true | Unicode: a = 97 & b = 98
console.log("'ab' > 'a' => " + ('ab' > 'a'));//true | Unicode: a = 97 & b = 98
console.log("'17' > 1 => " + ('17' > 1));//true | bcoz String(17) converted to Number(17)

/*The strict equality operator (===) in JavaScript compares
 both the value and the type of the two operands.
It does not perform type coercion. */

console.log('17 === 1 => ' + (17 === 1));//false
console.log('17 === 17 => ' + (17 === 17));//true
console.log("17 === '17' => " + (17 === '17'));//false | bcoz when we use '===' JS doesn't convert String(17) to Number(17)
console.log('17 === true => ' + (17 === true));//false
console.log("'0' === '' => " + ('0' === ''));//false | bcoz "''" is an empty string with no characters.
console.log('true === false => ' + (true === false));//false
console.log('true === true => ' + (true === true));//true
console.log('null === undefined => ' + (null === undefined));//false
console.log('false === 0 => ' + (false === 0));//false
console.log("17 == '17' => " + (17 == '17'));//true
console.log("'0' == '' => " + ('0' == ''));//false | bcoz "''" coverted to Number(''), String != Number
console.log("0 == '' => " + (0 == ''));//true 
console.log('null == undefined => ' + (null == undefined));//true | bcoz both values are considered equal and are not equal to any other value in JavaScript
console.log('false == 0 => ' + (false == 0));//true | bcoz Boolean converted to Number
console.log('undefined == null => ' + (undefined == null));//true | bcoz both values are considered equal and are not equal to any other value in JavaScript 
console.log('undefined == 0 => ' + (undefined == 0));//false | bcoz underfined is not equal to any other value in JavaScript
console.log('null == 0 => ' + (null == 0));//false | bcoz null is not equal to any other value in JavaScript 
console.log('undefined < 0 => ' + (undefined < 0));//false | bcoz underfined is not equal to any other value in JavaScript
console.log('undefined > 0 => ' + (undefined > 0));//false | bcoz underfined is not equal to any other value in JavaScript

