// 'use strict';

// let a = 5,
//    b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//    a: 5,
//    b: 1,
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

//

// function copy(mainObj) {
//    let objCopy = {};
//    let key;

//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }

//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4,
//    },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//    d: 17,
//    e: 20,
// };

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

//

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'asassdasd';
// console.log(newArray);
// console.log(oldArray);

//

// const video = ['youtube', 'vimeo', 'aaaaaaas'],
//    blogs = ['wordpress', 'livejournal', 'blogger'],
//    internet = [...video, ...blogs, 'facebook', 'twitter'];
// console.log(internet);

//

// function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];
// const newArray2 = [...array];

// const q = {
//    one: 1,
//    two: 2,
// };

// const newOnj = { ...q };
// console.log(newOnj);

//

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно

// const personalPlanPeter = {
//    name: 'Peter',
//    age: '29',
//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%',
//       },
//       exp: '1 month',
//    },
//    showAgeAndLangs: function (plan) {
//       const { age } = plan;
//       const { languages } = plan.skills;
//       let str = `Мне ${age} и я владею языками: `;

//       languages.forEach(function (lang) {
//          str += `${lang.toUpperCase()} `;
//       });

//       return str;
//    },
// };

// function showExperience(personalPlanPeter) {
//    const { exp } = personalPlanPeter.skills;
//    return exp;
// }
// showExperience(personalPlanPeter);
// console.log(showExperience(personalPlanPeter));

//

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

//

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const fff = [];
// console.log(family);

// function showFamily(arr) {
//    if (arr.length != 0) {
//       return console.log(`Семья состоит из: ${arr.join(' ')}`);
//    } else {
//       return console.log(`Семья пуста`);
//    }
// }
// showFamily(family);

// 2 variant
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    let str = '';

//    arr.length === 0 ? (str = 'Семья пуста') : (str = 'Семья состоит из: ');

//    arr.forEach((member) => {
//       str += `${member} `;
//    });

//    return str;
// }
// showFamily();

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах.
// В том числе и с разными буквами:) Поэтому нам нужно привести строки в один формат для правильной работы.

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//    arr.forEach((member) => {
//       console.log(member.toLowerCase());
//    });
// }
// standardizeStrings(favoriteCities);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами.
// Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает.
// Как небольшая подсказка, есть метод, который может вам помочь.И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂

// const someString = 'This is some strange string';
// const someEmptyString = 89;

// function reverse(str) {
//    if (typeof str === 'string' && str !== '') {
//       return console.log(str.split('').reverse().join(''));
//    } else {
//       return console.log('Ошибка');
//    }
// }
// reverse(someString);

//

// 4) Представьте такую реальную ситуацию.
// У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
// Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента:
// первый - это массив со всеми доступными валютами из двух банков сразу(сейчас представим, что они не могут повторяться),
// второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
// Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
// Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:UAH RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//    let str = '';
//    arr.length === 0
//       ? (str = 'Нет доступных валют')
//       : (str = 'Доступные валюты:\n');

//    // arr.forEach(function (curr, i) {
//    //    if (curr !== missingCurr) {
//    //       str += `${curr}\n`;
//    //    }
//    // });

//    // Или
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === missingCurr) {
//          continue;
//       }
//       str += `${arr[i]}\n`;
//    }

//    return str;
// }

// // availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));
