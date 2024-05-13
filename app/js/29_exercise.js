'use strict';

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

let numberOfFilms;

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

   while (
      numberOfFilms == '' ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
   ) {
      numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
   }
}
start();

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}
rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Произошла ошибка');
   }
}
detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      return console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(
         `Ваш любимый жанр под номером ${i}`
      );
   }
}
writeYourGenres();
// console.log(personalMovieDB);