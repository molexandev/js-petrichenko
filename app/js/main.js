'use strict';
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
//       const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
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
