'use strict';

//
//! 9. Название переменных
//

// В JS для названий переменных импользуется camelCase.

// snake_case и Kebab-case - используется для названия файлов и папок, но не для переменных.
// UPPER_SNAKE_CASE - используется для переменных в виде констант, которые нельзя переопределять.
// _apiCode, _apiKey - идентично предыдущему.
// PascalCase - используется для названия классов в JS

//
//! 10. Типи данных в JS
//

// В JS существует 8 типов данных:
// 1. числа - 123.
// 2. строки - 'asd'
// 3. логический тип данных (Boolean) - true / false.
// 4. null - когда чего-то не существует.
// 5. undefined - когда что-то существует, но у него нет никакого значения.
// 6. BigInt - тип данных, который отображает большие числа(2 в 53 - й степени)
// 7. Symbol - представляет собой уникальный идентификатор. 'https://learn.javascript.ru/symbol'
// 8. Объекты - делятся на:
// - специальные(функции, массивы, объект даты, регулярные выражения, ошибки),
// - и обычные.

// Массив - это часный случай объекта
// Пустой массив по факту превращается в пустую строку [] = ''
// typeof(NaN) - выдаст "number"

//
//! 13. Общение с пользователем
//

// 1. alert('Hello') - выводит сообщение на экран.

// 2. confirm('Сколько вам лет') - выводит 2 варианта ответа:
// - ok - true,
// - cancel - false.
// Результат записывается в переменную.
// const result = confirm('Are you here?');

// 3. prompt('Вопрос', '') - задать вопрос пользователю. Пустая строка в конце - значение по умолчанию.

// - Информация, которая приходит от пользователя, всегда приходит в выиде строки.
// - + перед prompt() - превращает строку в число.

//
//! 14. Операторы
//

// 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence#Table';

// let incr = 10,
//    decr = 10;

// incr++ - увеличение на 1.          // Постфиксная запись
// decr-- - уменьшение на 1.

// ++incr                             // Префиксная запись
// --decr

// % - остаток от деления

// - Оператор "и" всегда возвращает первое ложное значение, если оно есть.
// - Есливсе аргументы верны, товозварщается значение последнего аргумента.Есливсе

// - "И" всегда запинается на лжи
// - "ИЛИ" запинается на правде.

// '!' - оператор отрицания
// Два знака "!!" превращают следующее за ним выражение в булиновое.

//
//! 21. Циклы
//

// let num = 50;

// // 1

// while (num < 55) {
//    console.log(num);
//    num++;
// }

// // 2

// let num2 = 50;

// do {
//    console.log(num2);
//    num2++;
// } while (num2 < 55);

// // 3

// let num3 = 10;

// for (let i = 0; i < num3; i++) {
//    if (i === 6) {
//       break;
//       // continue;
//    }

//    console.log(i);
// }

//
//! 24. Функции
//

// function someFoo() {} // - function declaration
// let func = function (args) {}; // - function expression
// (args) => {}; // - стрелочная функция = const calk = (a, b) => {a + b}

// - Переменные, объявленные внутри функции, доступны только внутри функции.
// - FD можно испольховать до того, как она была объявлена, а FE только после.
// - Когда фунция видит ключевое слово return, она сразу прекращает работу.
// - Любая функция всегда что-то ваозвращает (return или undefined).
// - После return не ставится перенос строки.

// - Callback-функция - это функция, которая должна быть выполнена после того, как другая функция завершит свое выполнение.
// Пример:
// function learnJS(lang, callback) {
//    console.log(`Я учу ${lang}`);
//    callback();
// }

// function done() {
//    console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

//
//! 31. Объекты
//
// - Объекты - это так называемые ассоциативные массивы.
// - Объекты хранаят свойства - пары: ключ: значение._
// - Ключи объектов - это, как правило, строки (могут быть и символы).
// - Значения могут быть любым типом данных.
// - Чтобы перебрать все свойства объекта можно воспользоваться 'for in'
// for (let key in options) {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// Чтобы получить доступ к свойству мы можем использовать:
// - запись через точку: Obj.property
// - квадратные скобки: obj['property']

// Чтобы получить ключи объекта можно использовать метод Objekt.keys().
// Этот метод создает массив на основании ключей передаваемого объекта.
// В объектах можно создавать методы.
// Пример:
// const obj = {
//    name: 'John Connor',
//    age: 15,
//    mother: 'Sahra Konnor',
//    father: undefined,
//    someMethod: function () {
//       console.log('Test');
//    },
// };

// obj.someMethod();

//
//! 31. Деструктуризация объектов.
//

// - Для того, чтобы получить доступ ко вложеным свойствам объекта, применяется деструктуризация.

// const obj = {
//    name: 'John Connor',
//    age: 15,
//    mother: 'Sahra Konnor',
//    father: undefined,
//    someMethod: function () {
//       console.log('Test');
//    },
//    hobby: {
//       football: true,
//       hockey: false,
//       basketball: undefined,
//    },
// };
// const { football, hockey, basketball } = obj.hobby;
// console.log(football, hockey, basketball);

//
//! 32. Массивы.
//

// - Массив - это упорядоченый список элементов.
// - Для перебора массива можно использавать:

// const arr = [1, 2, 3, 5, 6, 12, 334];

// for (let i = 0; i < array.length; i++) {}

// for (let value of arr) {
//    console.log(value);
// }

// arr.forEach(function (item, i, arr) {});
// - item - значение элемента массива.
// - i - номер по порядку.
// - arr - массив, который перебирается.

//
//! 34. Передача по ссылке или по знаяению. Spred оператор.
//

// - Модифицируя копию, мы модифицируем изначальный объект.

// const obj = {
//    a: 5,
//    b: 10,
// };

// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// Поверхностная копия объектов:

// function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }

//    return objCopy;
// }

// let numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 9,
//    },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(numbers);
// console.log(newNumbers);

// Object.assign() Позволяет поместить в уже существующий объект еще 1 объект.
// - Первый аргумент - это объект, в который помещаем, а второй - это помещаемый объект.

// const add = {
//    d: 17,
//    e: 20,
// };

// console.log(Object.assign(numbers, add)); // Помещаем новый объект в старый
// const clone = Object.assign({}, add); // Создаем поверхносную копию объекта
// clone.d = 20;
// console.log(add);
// console.log(clone);

//

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // Метод, который позволяет скопировать старый массив.
// newArray[1] = 'asassdasd';
// console.log(newArray);
// console.log(oldArray);

// Оператор разворота
// Разворачивает структуру массива и превращает его в набор данных.

// const video = ['youtube', 'vimeo', 'aaaaaaas'],
//    blogs = ['wordpress', 'livejournal', 'blogger'],
//    internet = [...video, ...blogs, 'facebook', 'twitter'];
// console.log(internet);

// Здесь мы передаем в функцию развернутый массыв.

// function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// Помещаем старый объект в новый с помощью спред оператора.

// const array = ['a', 'b'];
// const newArray2 = [...array];

// const q = {
//    one: 1,
//    two: 2,
// };

// const newOnj = { ...q };
// console.log(newOnj);

//
//! 38. Динамическая типизация.
//

// - Динамическая типизщация - это возможность одного типа данных превращаться в другой.
// - "+" перед строкой преобразовывает её в число.

// // To String

// // 1

// console.log(typeof String(null));
// console.log(typeof String(5));

// // 2
// console.log(typeof String(null + ''));
// console.log(typeof String(5 + ''));

// // 3

// const num = 5;
// console.log('https://fb.com/ctalog/' + num);

// // 4

// const fontSize = 26 + 'px';
// console.log(fontSize);

// // To Number

// // 1

// console.log(typeof Number('4'));

// // 2

// console.log(typeof +'4');

// // 3
// console.log(typeof parseInt('15px'));

// // To Boolean

// // 0, '', null, undefined, NaN - Будут всегда превращаться в false

// // 1

// let switcher = null;

// if (switcher) {
//    console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//    console.log('Working...');
// }

// // 2

// console.log(typeof Boolean('4'));

// // 3

// console.log(typeof !!'123'); // Два знака "!!" превращают следующее за ним выражение в булиновое.

//
