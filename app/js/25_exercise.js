'use strict';

// // Function declaration

// let num = 20;
// function showFirstMessage(text) {
//    console.log(text);
//    let num = 10;
//    console.log(num);
// }
// showFirstMessage('Hello world!');
// console.log(num);

// function calc(a, b) {
//    return a + b;
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(7, 8));

// function ret() {
//    let num = 50;
//    return num;
// }
// let anotherNum = ret();
// console.log(anotherNum);

// // Function expression

// const logger = function () {
//    console.log('Hello!');
// };
// logger();

// Arrow function

// const calc2 = (a, b) => a + b;
// calc2(4, 7);

// const calc2 = (a, b) => {
//    a + b;
// };
// calc2(4, 7);

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//    console.log(amount * curr);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

//

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//    return amount * curr;
// }

// function promotion(result) {
//    console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);
// convert(500, usdCurr);
// convert(500, eurCurr);

// function test() {
//    for (let i = 0; i < 5; i++) {
//       console.log(i);
//       if (i === 3) return;
//    }
//    console.log('Done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

//

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
// В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// function sayHello(name) {
//    return `Привет, ${name}`;
// }
// console.log(sayHello('Alex'));

//

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел:
//  одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(s) {
//    const a = [s - 1, s, s + 1];
//    return a;
// }
// console.log(returnNeighboringNumbers(5));

//

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии.
// (Смотри пример ниже).
// Функция должна возвращать строку(или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---".
// После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.
// (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20
// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри.
// Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения.
// Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя.
// Это базовая математика, которая и нужна для работы в 95 % случае на фронтенде.
// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// function getMathResult(num, times) {
//    if (typeof times !== 'number' || times <= 0) {
//       return num;
//    }

//    let str = '';

//    for (let i = 1; i <= times; i++) {
//       if (i === times) {
//          str += `${num * i}`;
//          // Тут без черточек в конце
//       } else {
//          str += `${num * i}---`;
//          // Это тоже самое, что и
//          // str = str + num * i + "---"
//       }
//    }

//    return str;
// }

// console.log(getMathResult(10, 15));
