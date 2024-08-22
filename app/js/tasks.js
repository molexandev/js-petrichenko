//
//! 88.
//

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

const films = [
   {
      name: 'Titanic',
      rating: 9,
   },
   {
      name: 'Die hard 5',
      rating: 5,
   },
   {
      name: 'Matrix',
      rating: 8,
   },
   {
      name: 'Some bad film',
      rating: 4,
   },
   {
      name: 'Some good film',
      rating: 9.8,
   },
];

function showGoodFilms(arr) {
   return arr.filter((item) => item.rating >= 8);
}

// console.log(showGoodFilms(films));

//2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

// Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

function showListOfFilms(arr) {
   let someStr = '';
   return (someStr = arr
      .map((item) => item.name)
      .reduce((sum, current) => `${sum}, ${current}`));
}

// console.log(showListOfFilms(films));

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:

// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 }

function setFilmsIds(arr) {
   return arr.map((film, i) => {
      film.id = i;
      return film;
   });
}

// console.log(setFilmsIds(films));

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

// P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.

const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

function checkFilms(arr) {
   return arr.every((item) => {
      console.log(item);
      if (item.id >= 0) {
         return true;
      }
   });
}

console.log(checkFilms(tranformedArray));

// const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
   return arr.every((film) => (film.id || film.id === 0 ? true : false));
}

// Еще короче, так как условие все равне вернет true или false:
function checkFilms(arr) {
   return arr.every((film) => film.id || film.id === 0);
}

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

checkFilms(tranformedArray);

//
//! 89
//

// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

// Пример:

// getPositiveIncomeAmount(funds) => 13300

const funds = [
   { amount: -1400 },
   { amount: 2400 },
   { amount: -1000 },
   { amount: 500 },
   { amount: 10400 },
   { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
   return data
      .filter((item) => item.amount > 0)
      .map((item) => item.amount)
      .reduce((sum, current) => sum + current);
};

console.log(getPositiveIncomeAmount(funds));

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:

const getTotalIncomeAmount = (data) => {
   if (data.some((item) => item.amount < 0)) {
      return data
         .map((item) => item.amount)
         .reduce((sum, current) => sum + current);
   } else {
      return getPositiveIncomeAmount(data);
   }
};

console.log(getTotalIncomeAmount(funds));

// getTotalIncomeAmount(funds) => -500
