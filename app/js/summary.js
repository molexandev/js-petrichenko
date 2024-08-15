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
//! 41. Получение элементов со страницы. DOM
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

//
//! 46. Рекурсия.
//

// https://ru.hexlet.io/courses/introduction_to_programming/lessons/recursion/theory_unit

// Рекурсия это прием, при котором функция вызывает сама себя внутри себя же.
// Класический пример рекурси - это функция возведения в степень.

// Требования рекурсии:
// - Простой базовый случай, или терминальный сценарий, или терминальное условие. Простыми словами, когда остановиться. В нашем примере это был 0: мы остановили вычисление факториала, когда достигли 0.
// - Правило передвижения по рекурсии, углубление. В нашем случае, это было n * factorial(n-1).

// function pov(x, n) {
//    let result = 1;

//    for (let i = 0; i < n; i++) {
//       result *= x;
//    }
//    return result;
// }

// Та же функция, но здесь задача решается с помощью рекурсии.

// function pov(x, n) {
//    if (n === 1) {
//       return x;
//    } else {
//       return x * pov(x, n - 1);
//    }
// }

// console.log(pov(2, 1));
// console.log(pov(2, 2));
// console.log(pov(2, 3));
// console.log(pov(2, 4));
// console.log(pov(2, 5));
// console.log(pov(2, 10));
// console.log(pov(2, 20));

// Вычисляем факториал. Факториал -Это число которое умножается само на себя - 1.

// function factorial(n) {
//    if (n == 0) {
//       return 1;
//    } else {
//       return n * factorial(n - 1);
//    }
// }

// console.log(factorial(7));

//
//! 47. События на мобильных устройствах.
//

// // touchstart - событие, которое срабатывает при касании на элемент.
// // rouchend - противоположное touchmove. При отрыве пальца от элемента.
// // touchmove - палец при касании начинает двигаться по элементу, то событие срабатывает при каждом движении.
// // touchenter - когда мы ведем пальцем по экрану и наскальзываем на элемент, на который оно повешено.

// window.addEventListener('DOMContentLoaded', () => { // Ожилание готовности загрузки всего DOM-дерева.
//    const box = document.querySelector('.box');
//    box.addEventListener('touchstart', (e) => {
//       console.log('Start');
//       console.log(e.touches);
//    });
//    box.addEventListener('touchmove', (e) => {
//       console.log('Move');
//    });
//    box.addEventListener('touchend', (e) => {
//       console.log('End');
//    });
// });

//
//! 48. Async, defer, динамические скрипты.
//

// // Defer
// // Атрибут defer в теге <script defer src="js/main.min.js"></script> сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме. Скрипты с таким атрибутом всегда выполняются, когда DOM-дерево уже готово.

// // Async
// // Страница не ждет асинхронных скриптов. Содержимое просто обрабатывается и отображается.
// // Событие Домконтентлоадед и асинхронные скрипты не ждут друг друга.
// // То есть, если мы добавляем атрибут async, то скрип начинает загружаться как только до него доходит очередь, но при этом он запускается как только он был загружен. Он вообще никого не ждет.

// // Скрипты на страницу можно помещить и следующим способом:
// function loadScripts(src) {
//    const script = document.createElement('script');
//    script.src = src;
//    script.async = false;
//    document.body.append('script');
// }

// loadScripts('js/test.js');
// loadScripts('js/some.js');

//
//! 52. Оператор нулевого слияния (Нулиш оператор)
//

// // Оператор нулевого слияния реагирует не на все false значения, а только на null и undefined.
// // Логический "И" и нулиш операторы не могут быть смешаны внутри одного выражения.
// // Пример:
// // console.log(userName && userKey ?? 'User');

// const box2 = document.querySelector('.box-2');
// const newHeight = 100,
//    newWidth = 400;

// function chngeParams(elem, h, w) {
//    elem.style.height = `${h ?? 20}px`;
//    elem.style.width = `${w ?? 20}px`;
//    elem.innerHTML = (h ?? 20) * (w ?? 20);
// }

// chngeParams(box2, newHeight, newWidth);

// let userName;
// let userKey;

// console.log(userName ?? userKey ?? 'User');

//
//! 53. Оператор опциональной цепочки.
//

// // Оператор опциональной цепочки проверяет выражение слева от себя и останавливает операции, если оно имеет значение undefined или null. И при этом возвращает undefined, как результат. Это всё происходит без ошибки.
// // Оператор опциональной цепочки нужно использовать только там, где предполагаются проблемы.

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');
// console.log(block);

// // if (block) {
// //    console.log(block.textContent); // Как решалась проблема раньше.
// // }

// // Оператор опциональной цепочки '?':
// console.log(block?.textContent); // Это работа на чтение свойства, но эсли записать туда что-то, то будет ошибка.
// // block?.textContent = '123', // Слева от "=" мы, как результат работы, получаем undefined. В резулььаье ошибка.
// console.log(1 + 2);

// // Ещё один пример
// const userData = {
//    name: 'Olex',
//    age: null,
//    say: function () {
//       console.log('Hello');
//    },
// };

// // if (userData && userData.skills && userData.skills.js) { // Как решалась проблема раньше.
// //    console.log(userData.skills.js);
// // }

// console.log(userData?.skills?.js);
// userData.say();
// userData.hay?.(); // Проверка на наличие метода объекта. Показано полное написание оператора.

//
//! 54. Живые коллекции и полезные методы.
//

// const boxesQuery = document.querySelectorAll('.box-4');
// const boxesGet = document.getElementsByClassName('box-4');

// console.log(boxesQuery); // NodeList - есть forEach, entries и т. д.
// // - мы получили состояние элемента на момент вызова команды querySekectorAll. Это как бы отпечаток (слепок) того, что происходило на тот момент. Эта коллекция статична. Она не знает, что проиходило потом.
// console.log(boxesGet); // HTMLCollection - нет методов.
// // - boxesGet, наоборот, отслеживает все изменения в DOM-дереве и дает текущий результат. Результат который мы в этой строке получаем и есть живой коллекцией.

// // console.log(document.body.children);

// // // Ошибки, которые допускают новечки.
// // for (let i = 0; i < 5; i++) {
// //    const div = document.createElement('div');
// //    div.classList.add('box-4');
// //    document.body.append(div);
// //    // boxesGet[boxesGet.length] = div; // Выдаст ошибку, так как напрямую работать с HTML-коллекцией именно так нельзя. Это запрещено синтаксисом JS.
// // }

// boxesQuery[0].remove();
// boxesGet[0].remove();

// // В современном мире почти для всех задач подходит querySelectorAll, но бывают случаи, когда нам нцжно что-то, чтобы следить за всеми изменениями в DOM-дереые, тогда на посощь приходят живие коллекции. Но у них нет методов для работы с ними. В таком случае применяются разные техники.
// // Пример:
// console.log(Array.from(boxesGet)); // Мы создаем массив из массивоподобного объекта.
// // Проблема в том,что при обращении к HTMLCollection образовался статичный массив, то есть, это уже не живая коллекция, а обычный массив с данными.

// // Ещё два метода.
// // Иногда у нас есть задача среди всех элементов найти тот, который подъодит по определенным параметрам (css селектор). (Закомментировать 706 и 707)
// boxesQuery.forEach((box) => {
//    if (box.matches('.this')) console.log('This one!');
// });

// console.log(boxesQuery[0].closest('.wrapper-2'));

//
//! 55. Тип данных Symbol
//

// // Символы - это уникальные идентификаторы.
// // Символы всегда уникальны, даже если у них одно описание.
// // Символи можно создавать разными способами.
// // Символы можно создавать без описани: let id2 = Symbol();

// let id = Symbol('id');

// const obj = {
//    name: 'Test',
//    [id]: 1, // Второй способ создания символов.
//    getId: function () {
//       return this[id];
//    },
// };

// // let id = Symbol('id');
// // let id2 = Symbol('id');

// // console.log(id == id2);

// // obj[id] = 1;

// console.log(obj);
// console.log(obj.getId());
// console.log(Object.getOwnPropertySymbols(obj));
// // console.log(obj[id]);

// for (let value in obj) console.log(value);

//
//! 56. Дескрипторы свойств и полезные методы объектов.
//

// // У каждого из свойств объекта, помимо значения, есть специальные атрибуты, которые ещё глубже определяют, как именно работает это свойство. Их ещё называют флагами. Всего их 3.

// const user = {
//    name: 'Olexandr',
//    surname: 'Motashko',
//    birthday: '24/12/1988',
//    showMyPublicData: function () {
//       console.log(`${this.name} ${this.surname}`);
//    },
// };

// user.showMyPublicData();

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'name', { writable: false }); // запрещаем перезаписывать свойство. С
// Object.defineProperty(user, 'gender', { writable: 'male' }); // помощью defineProperty можно создавать новые свойства с заданными параметрами.
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Object.defineProperty(user, 'birthday', { writable: false });
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// // writable - если true, то свойство можно изменить, если false - то свойство только для чтения.
// // enumerable - если true, то свойство будет перечисляться в циклах, false - нет.
// // configurable - если true, то свойство можно удалить, а атрибуты изменить, false - нет.

// Object.defineProperty(user, 'showMyPublicData', { enumerable: false }); // Мы говорим, что метод не будет перечисляться в циклах.

// for (let key in user) {
//    console.log(key);
// }

// Object.defineProperties(user, {
//    name: { writable: false },
//    surname: { writable: false },
// });

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

//
//! 57. Итерируемые (перебираемые) констркции. Отличие for of от for in.
//

// // По-простому итерируемый объект - это тот, который мы можем использовать в for of.
// // for in не рекомендуется применять на массивах и строках, так как при переборе данные могут идти не по порядку.
// // for in получает сам ключ, а при переборе с помощью for of в "key" записывается значение.

// // const user = {
// //    name: 'Olexandr',
// //    surname: 'Motashko',
// //    birthday: '24/12/1988',
// //    showMyPublicData: function () {
// //       console.log(`${this.name} ${this.surname}`);
// //    },
// // };

// // for (const key in user) {
// //    console.log(user[key]);
// // }

// // const arr = ['b', 'a', 'c'];

// // Array.prototype.someMethod = function () {};

// // // for (const key in arr) {
// // //    console.log(arr[key]);
// // // }

// // for (const key of arr) {
// //    console.log([key]);
// // }

// // const str = 'string';

// // for (const key in str) {
// //    console.log(str[key]);
// // }

// const salaries = {
//    john: 500,
//    ivan: 1000,
//    ann: 5000,
//    sayHello: function () {
//       console.log('Hello!');
//    },
// };

// salaries[Symbol.iterator] = function () {
//    return {
//       current: this.john,
//       last: this.ann,
//       next() {
//          if (this.current < this.last) {
//             this.current += 500;
//             return { done: false, value: this.current };
//          } else {
//             return { done: true };
//          }
//       },
//    };
// };

// for (let res of salaries) {
//    console.log(res);
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

//
//! 58. Map
//

// // Картами или Map называются спецефические структуры данных, которые очень похожи на объект, но у них вместо свойств может использоваться и объект, и массив, и функция...
// // Порядок свойств в картах всегда такой, в котором мы их добавляем.
// // При создании пустой карты в ней ничего не будет содержаться.
// // Карты легко перебирать.
// // Размер карты легко получить через size.

// const user = {
//    name: 'Olexandr',
//    surname: 'Motashko',
//    birthday: '24/12/1988',
//    showMyPublicData: function () {
//       console.log(`${this.name} ${this.surname}`);
//    },
// };

// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);

// // console.log(user);
// // console.log(typeof Object.keys(user)[0]);

// // const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

// // const budget = [5000, 15000, 25000];

// // const map = new Map([
// //    [
// //       {
// //          paper: 400,
// //       },
// //       8000,
// //    ],
// // ]);

// // shops.forEach((shop, i) => {
// //    map.set(shop, budget[i]);
// // });

// // console.log(map);

// // map.set(shops[0], 5000);
// // console.log(map);

// // console.log(map.get(shops[0]));
// // console.log(map.has(shops[0]));

// // map.delete(key);
// // map.clear();
// // map.size;
// // map.keys();

// // let goods = [];
// // for (let shop of map.keys()) {
// //    goods.push(Object.keys(shop)[0]);
// // }
// // console.log(goods);

// // for (let price of map.values()) {
// //    console.log(price);
// // }

// // for (let [shop, price] of map.entries()) {
// //    console.log(price, shop);
// // }

// // map.forEach((value, key, map) => {
// //    console.log(key, value);
// // });

//
//! 59. Set
//

// // Set - это особый вид коллекций по типу массивов, где каждое значение может повторяться только один раз.
// // Если ещё проще - это массив, где каждое значение встречается только однажды.

// // const arr = [1, 1, 2, 2, 3, 4, 5, 6, 5];
// const arr = ['Alex', 'Anna', 'Olexandr', 'Ivan', 'Alex'];

// const set = new Set(arr);

// set.add('Ivan');
// set.add('Olexandr');

// console.log(set);

// // set.delete(value);
// // set.has(value);
// // set.clear();
// // set.size;

// // for (let value of set) console.log(value);

// // set.forEach((value, valueAgain, set) => {
// //    console.log(value, valueAgain);
// // });

// // console.log(set.values());
// // console.log(set.keys());
// // console.log(set.entries());

// function unique(arr) {
//    return Array.from(new Set(arr));
// }

// console.log(unique(arr));

//
//! 60. Bigint
//

// // Bigint нельзя использовать с методами, со встроенным объектом Math():
// // console.log(Math.round(57n)); // Ошибка

// // Нельзя смешивать в операциях Bigint и другие числа:
// // console.log(5n + 1); // Ошибка

// // Складывать Bigint с Bigint можно:
// // console.log(1n + 2n);

// // Операция деления всегда будет возвращать результат без дробной части.

// // При сравнении Bigint нормально работает. Даже с обычними числами:
// // console.log(5n > 7);
// // console.log(2n > 1n);

// // console.log(Number.MAX_SAFE_INTEGER); // 2 в 53-й степены мигус 1

// // const bigint = 777516516516513613516546516516516551n;

// // const sameBigint = BigInt(777516516516513613516546516516516551);

// // console.log(typeof bigint);

// // Чтобы сложить BigInt с Number его нужно конвертировать.
// let bigint = 1n;
// let number = 2;

// console.log(bigint + BigInt(number)); // Будет BigInt - 3т
// console.log(Number(bigint) + number); // Будет Number - 3
