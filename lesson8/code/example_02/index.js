// // opearators + - * / ** < > >= <=
// let a = 3;
// let b = a**3;
// console.log(b);

// let res = a < b;
// console.log(res);
// console.log(a < b);

// // +

// let str1 = "Hello ";
// let str2 = "Mike";
// console.log(str1 + str2);

// console.log(a + b);

// console.log(a + str2);

// //
// let str3 = "3";
// console.log(typeof a);
// console.log(typeof str3);
// console.log(str3 + b);

// // Приведение типов
// console.log(typeof str3);
// let str3a = Number(str3);
// console.log(typeof str3a);
// console.log(str3a);
// console.log(str3 + 3);
// console.log(str3a + 3);
// console.log(Number(str3) + 3);


// let str66 = String(66);


// Приведение типов опять структурно !!!!!!!

// к строке
let num1 = 0;
// явно приводим к строке
let strFromNum1 = String(num1);
console.log(String(3));
console.log(String(null));
console.log(String(undefined));
console.log(String(true) + "<<<<<<<<<");

// к числу
console.log("=== to number ===");
console.log(Number("3"));
console.log(Number("ab"));
let numberFromString = Number("ab");
console.log(typeof numberFromString);
console.log(" true, false, null, undefined -> to number");
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log("especially for number");
let strForPlus = "30";
console.log(+strForPlus);
console.log("examples");
console.log(700 + strForPlus);
console.log(700 + Number(strForPlus));
console.log(700 + +strForPlus);

// к булевому типу
console.log("to Boolean ====>>>>>")
console.log(Boolean("afdfa")); // true
console.log(Boolean("")); // false
console.log(Boolean(4)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false


// if (num1) {
//     console.log("полулось тру в условии")
// } else {
//     console.log("полулся фолс")
// }



// Операторы сравнения
let t1 = 3;
let t2 = "3";
console.log("operatos == & ===")
console.log(t1 == t2);
console.log(true == "1");

// null & undefined не приводяться к числу при нестрогом сравнении, равны только сами себе


// Условный оператор
// if (true) {
//     //
// } else if () {
// //
// }
// else if() {
// //
// }
// else {
// //
// }


if (true) {
    // что то делаем
} else {
// что делаем, или нечего, тогда else можно удалить (как ниже)
}


if (true) {
    // что то делаем
}

let day = "Tuesday";

switch (day) {
    case "Monday":
      console.log("It's Monday!");
      break;
    case "Tuesday":
      console.log("It's Tuesday!");
   break; // ...
    default:
      console.log("It's another day!");
   }
