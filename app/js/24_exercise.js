/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
// if (numberOfFilms <= 10) {
//    alert('Просмотрено довольно мало фильмов');
// } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
//    alert('Вы классический зритель');
// } else if (numberOfFilms > 30) {
//    alert('Вы киноман!');
// } else {
//    alert('Произошла ошибка!');
// }
// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
// };

// for (let i = 0; i < 2; i++) {
//    const filmName = prompt('Один из последних просмотренных фильмов?', '');
//    const filmRating = prompt('На сколько оцените его?', '');

//    if (
//       filmName != null &&
//       filmRating != null &&
//       filmName != '' &&
//       filmRating != '' &&
//       filmName.length < 50
//    ) {
//       personalMovieDB.movies[filmName] = filmRating;
//    } else {
//       console.log('error');
//       i--;
//    }
// }
// console.log(personalMovieDB);
