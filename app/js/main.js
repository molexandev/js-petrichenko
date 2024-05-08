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

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

for (let i = 0; i < 2; i++) {
   const filmName = prompt('Один из последних просмотренных фильмов?', '');
   const filmRating = prompt('На сколько оцените его?', '');
   personalMovieDB.movies[filmName] = filmRating;
}
console.log(personalMovieDB);
