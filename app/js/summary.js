'use strict';

// Про 'use strict'

// https://jsflow.org/docs/use-strict/

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
//! 39. Замыкания
//

// function createCounter() {
//    let counter = 0;
//    const myFunction = function () {
//       counter = counter + 1;
//       return counter;
//    };
//    return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

// Способ, с помощью которого я навсегда запомнил замыкания — это сравнение их с рюкзаком. Когда функция создана и передаётся куда-либо, или возвращается из другой функции, то она носит с собой рюкзак. А в этом рюкзаке хранятся все переменные, которые были в области видимости во время создания этой функции.

// https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970

//
//! 41.Получение элементов со страницы. DOM
//

// - DOM - (Document Objekt Model) - объектная модель документа.
// - Все элементы на странице представлены в виде дерева узлов.
// - Узлы связаны между собой отношениями "Родительскмй - Дочерний".
// - Когда документ сфоримрован, мы его можем представить в виде объекта, у которого есть свои методы, как и у обычного объекта.

// const box = document.getElementById('box'); // Получаем элемент по id
// const btns = document.getElementsByTagName('button'); // Получаем псевдомассив элементов.
// const btns2 = document.getElementsByTagName('button')[1]; // Получаем конкретный элемент.
// const circles = document.getElementsByClassName('circles'); // Получаем элементы по классу (HTML коллекция)

// //

// const hearts = document.querySelectorAll('.heart'); // Получаем все элементы по css-селектору (class, id)

// // У HTML-коллекции нет метода forEach(), а у NodeList есть!

// const oneHeart = document.querySelector('.heart'); // Получаем только первый элемент с таким селектором, который в DOM.

// const elem = document.createElement('div'); // Создает елемент div.
// elem.classList.add('container'); // Добавляет клас для ранее созданного div.
// document.body.append('div'); // Помещает элемент перед закрывающимся тегом (body).
// document.body.prepend('div'); // Помещает элемент перед открывающимся тегом (body).
// elem.before('div'); // Помещпет элемент перед выбраным элементом.
// elem.after('div'); // Помещпет элемент после выбранного элемента.
// elem.remove(); // Удаляет элемент со страницы.
// elem.replaceWith('button'); // Заменяет выбранный элемент на указанный в скобках.

//
//! 44. События и их обработчики.
//

// Всплытие событий - это когда обработчик событий сначала срабатывает на самом вложеном элементе, а затем на родителе и выше.

// const btn = document.querySelector('button'),
//    overlay = document.querySelector('.ocerlay'),
//    link = document.querySelector('a');

// btn.addEventListener('click', (e) => {
//    console.log('Hello');
//    console.log(e.target);
// });

// 'e' - объект события. Передается как оргумент в callback-функцию.

// let i = 1;
// const deleteElement = (e) => {
//    console.log('Hello');
//    console.log(e.target);
//    console.log(e.type);
//    // i++;
//    // if (i >= 1) {
//    //    btn.removeEventListener('click', deleteElement); // Этот метод обычно взываетмя в условии, когда что-то произошло и обработчик больше не нужен.
//    // }
// };

// btn.addEventListener('click', deleteElement /*{ once: true } */); // У eventListener существует третий аргумент, в который мы можем передать различные опции.

// - метод preventDefault() отменяет стандартное поведение. Помещается в самое начало обработчика событий.

// link.addEventListener('click', (e) => {
//    e.preventDefault();

//    //

//    console.log(e.target);
// });

// Чтобы навесить обработчик событий на несколько элементов, нужно после их получения перебрать их с помощью forEach() и внутри него добавить обработчик каждому элементу.

//
//! 45. Навигация по DOM-дереву. data-атрибуты.
//

// console.log(document.body); // Обращаемся к бади.
// console.log(document.head); // Обращаемся к хэв.
// console.log(document.documentElement); // Обращаемся ко всему документу.
// console.log(document.body.childNodes); // Обращаемся ко всем узлам, которые есть у бади.
// console.log(document.body.firstChild); // Получаем первого потомка от бади.
// console.log(document.body.lastChild); // Получаем последнего потомка от бади.
// console.log(document.body.firstElementChild); // Получаем первого потомка от бади.
// console.log(document.body.lastElementChild); // Получаем последнего потомка от бади.

// // Пллучаем НОДЫ (узлы)

// console.log(document.querySelector('.link').parentNode); // Получаем родителя элемента.
// console.log(document.querySelector('.link').parentNode.parentNode); // Получаем родителя на уровень выше.

// // Data-атрибуты позволяют назначить элементу что-то очень свойственное или, наоборот, универсальное.
// // Data-атрибуты всегда начинаются со слова "data-", а вторая часть - произвольная.
// // Пример: <div class="one" data-close data-current="3"></div>;

// // Чтобы получить элемент со страницы нужно:
// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').nextSibling); // Получаем следующую ноду.
// console.log(document.querySelector('[data-current="3"]').previousSibling); // Получаем предыдущую ноду.

// // Получаем ЭЛЕМЕНТЫ

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Получаем следующий элемент.
// console.log(
//    document.querySelector('[data-current="3"]').previousElementSibling
// ); // Получаем предыдущий элемент.
// console.log(document.querySelector('.link').parentElement); // Получаем родителя элемента.
// console.log(document.querySelector('.link').parentElement.parentElement); // Получаем родителя на уровень выше.

// // Получаем все ноды из бади и убираем лишнее (Текстовые ноды "#text").
// for (let node of document.body.childNodes) {
//    if (node.nodeName == '#text') {
//       continue;
//       // console.log('111');
//    }
//    console.log(node);
// }
