// 'use strict';

// const str = 'test';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello World!';
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// let numberOfFilms;

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

// function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

//    while (
//       numberOfFilms == '' ||
//       numberOfFilms == null ||
//       isNaN(numberOfFilms)
//    ) {
//       numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//    }
// }
// start();

// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');

//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//       } else {
//          console.log('error');
//          i--;
//       }
//    }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов');
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('Вы классический зритель');
//    } else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//    } else {
//       console.log('Произошла ошибка');
//    }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//    if (!hidden) {
//       return console.log(personalMovieDB);
//    }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//    for (let i = 1; i <= 3; i++) {
//       personalMovieDB.genres[i - 1] = prompt(
//          `Ваш любимый жанр под номером ${i}`
//       );
//    }
// }
// writeYourGenres();
// console.log(personalMovieDB);

//

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба(тоже базовая математика, иногда используется в создании анимаций).
// Эта функция принимает в себя целое число со значением длины ребра куба.Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea(num) {
//    let area, volume;
//    area = num * num * 6;
//    volume = num * num * num;

//    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
//       return console.log('При вычислении произошла ошибка');
//    } else {
//       return console.log(
//          `Объем куба: ${volume}, площадь всей поверхности: ${area}`
//       );
//    }
// }
// calculateVolumeAndArea(5);

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.
// Ответ с кодом этих задач можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
// Но постарайтесь решить самостоятельно 🙂

//

// function getCoupeNumber(num) {
//    if (typeof num !== 'number' || !Number.isInteger(num)) {
//       return console.log(
//          'Ошибка. Проверьте правильность введенного номера места'
//       );
//    } else if (num <= 0 || num > 36) {
//       return console.log('Таких мест в вагоне не существует');
//    } else {
//       return console.log(Math.ceil(num / 4));
//    }
// }
// getCoupeNumber(31);

//

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример).
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами(10 часов).
// Так как проверки на большие числа будут раздувать код(33 часа, 31 час, 11 часов и тд).
// Этого будет достаточно и код будет проверять именно этот промежуток(1 - 10 часов).
// Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// variant 1
// function getTimeFromMinutes(time) {
//    let divider = 60;
//    let hour = Math.floor(time / divider);
//    let minutes = time % divider;
//    if (typeof time == 'string' || !Number.isInteger(time) || time < 0) {
//       return console.log('Ошибка, проверьте данные');
//    } else if (hour === 0) {
//       return console.log(`Это ${hour} часов и ${minutes} минут`);
//    } else if (hour === 1) {
//       return console.log(`Это ${hour} час и ${minutes} минут`);
//    } else if (hour === 2 || hour === 3 || hour === 4) {
//       return console.log(`Это ${hour} часa и ${minutes} минут`);
//    } else {
//       return console.log(`Это ${hour} часов и ${minutes} минут`);
//    }
// }
// getTimeFromMinutes(179);

// variant 2
// function getTimeFromMinutes(minutesTotal) {
//    if (
//       typeof minutesTotal !== 'number' ||
//       minutesTotal < 0 ||
//       !Number.isInteger(minutesTotal)
//    ) {
//       return console.log('Ошибка, проверьте данные');
//    }

//    const hours = Math.floor(minutesTotal / 60);
//    const minutes = minutesTotal % 60;

//    let hoursStr = '';

//    switch (hours) {
//       case 0:
//          hoursStr = 'часов';
//          break;
//       case 1:
//       case 21:
//       case 31:
//       case 41:
//       case 51:
//       case 61:
//       case 71:
//       case 81:
//       case 91:
//       case 101:
//          hoursStr = 'час';
//          break;
//       case 2:
//       case 22:
//       case 23:
//       case 24:
//       case 3:
//       case 32:
//       case 33:
//       case 34:
//       case 4:
//       case 42:
//       case 43:
//       case 44:
//          hoursStr = 'часа';
//          break;
//       default:
//          hoursStr = 'часов';
//    }
//    return console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
// }

// getTimeFromMinutes(150);

//

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0
// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS.
// Подходит любое:)
// Ответ с кодом этих задач можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке.
// Помните, что вариантов решения всегда несколько.
// Но постарайтесь решить самостоятельно 🙂

// function findMaxNumber(num1, num2, num3, num4) {
//    if (
//       typeof (num1, num2, num3, num4) !== 'number' ||
//       (num1, num2, num3, num4) <= 0 ||
//       findMaxNumber.length < 4
//    ) {
//       return console.log(0);
//    } else {
//       return console.log(Math.max(num1, num2, num3, num4));
//    }
// }
// findMaxNumber(50, 5.5, 70);

// function findMaxNumber(a, b, c, d) {
//    // Самое простое - это использовать Math.max :)
//    // А оптимизировать такую проверку мы научимся совсем скоро
//    if (
//       typeof a !== 'number' ||
//       typeof b !== 'number' ||
//       typeof c !== 'number' ||
//       typeof d !== 'number'
//    ) {
//       return console.log(0);
//    } else {
//       return console.log(Math.max(a, b, c, d));
//    }
// }

// findMaxNumber(5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');

// Числа Фибоначчи!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Создайте функцию, которая будет принимать в себя один аргумент - целое положительное число.
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
// Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку.
// Решать без применения рекурсии.

// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

// function fib(num) {
//    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
//       return '';
//    }

//    let result = '';
//    let a = 0;
//    let b = 1;
//    for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//          result += `${a}`;
//          // Без пробела в конце
//       } else {
//          result += `${a} `;
//       }

//       let c = a + b;
//       a = b;
//       b = c;
//    }
//    return console.log(result);
// }
// fib(30);
