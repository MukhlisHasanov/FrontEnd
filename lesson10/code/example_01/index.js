// function
// 1. Function declaration

// hosting
const resultFunctionPrintHello = printHello();
console.log(resultFunctionPrintHello);

function printHello(name = 'Patrik') {
    const fullString = 'Hello ' + name;
    return fullString;
}

// 2. Function expression

const printHelloAlternative = function(name = 'Patrik') {
    const fullString = 'Hello ' + name;
    return fullString;
}

const resultFunctionPrintHelloAlter = printHelloAlternative();
console.log(resultFunctionPrintHelloAlter);

// 3. Arrow functions
const printHelloArrow = (name) => {
    const fullString = 'Hello ' + name;
    return fullString;
}

const nameJ = "John"
const resultFunctionPrintHelloArrow = printHelloAlternative(nameJ);
console.log(resultFunctionPrintHelloArrow);

// сокращение стрелочной функции
const printHelloArrowShort = name => 'Hello ' + name;
console.log(printHelloArrowShort('David'));