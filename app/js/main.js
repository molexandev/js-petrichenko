'use strict';

// a = 15;
// console.log(a);
// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);
// console.log(leftBorderWidth);

// {
//    let result = 50;
//    console.log(result);
// }

// let store = 'Hollywood';
// let storeDescription = {
//    budget: 10000,
//    employees: ['Alex', 'Anna', 'Julia'],
//    products: {
//       apples: 25,
//       cucumbers: 50,
//    },
//    open: true,
// };

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам є 18?', '18');
// console.log(typeof answer);
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('Як вас звати?', '');
// answers[1] = prompt('Яке ваше прізвище?', '');
// answers[2] = prompt('Скільки вам років?', '');
// // document.write(answers);
// console.log(typeof answers);

// const category = 'toys';
// console.log(`https://someurl.com/${category}`);
// const user = 'Ivan';
// alert(`Привіт, ${user}`);

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

// const personalMovieDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: true,
//    start: function () {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//       while (
//          personalMovieDB.count == '' ||
//          personalMovieDB.count == null ||
//          isNaN(personalMovieDB.count)
//       ) {
//          personalMovieDB.count = +prompt(
//             'Сколько фильмов вы уже посмотрели?',
//             ''
//          );
//       }
//    },
//    rememberMyFilms: function () {
//       for (let i = 0; i < 2; i++) {
//          const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//          } else {
//             console.log('error');
//             i--;
//          }
//       }
//    },
//    detectPersonalLevel: function () {
//       if (personalMovieDB.count < 10) {
//          console.log('Просмотрено довольно мало фильмов');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//          console.log('Вы классический зритель');
//       } else if (personalMovieDB.count >= 30) {
//          console.log('Вы киноман');
//       } else {
//          console.log('Произошла ошибка');
//       }
//    },
//    showMyDB: function (hidden) {
//       if (!hidden) {
//          console.log(personalMovieDB);
//       }
//    },
//    toggleVisibleMyDB: function rewritePrivat() {
//       if (personalMovieDB.privat === true) {
//          return (personalMovieDB.privat = false);
//       } else {
//          return (personalMovieDB.privat = true);
//       }
//    },
//    writeYourGenres: function () {
//       for (let i = 1; i <= 3; i++) {
//          let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
//          if (genre === '' || genre == null) {
//             console.log(
//                'Вы ввели не корректные данные или не ввели их вообще!!!'
//             );
//             i--;
//          } else {
//             personalMovieDB.genres[i - 1] = genre;
//          }
//       }
//       personalMovieDB.genres.forEach((item, i) => {
//          console.log(`Любимый жанр №: ${i + 1} - это ${item}`);
//       });
//    },
// };
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
