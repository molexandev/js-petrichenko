'use strict';

// let str = 'Some';
// let strObj = new String(str);

// // console.log(typeof str);
// // console.log(typeof strObj);

// // console.dir([1, 2, 3]);

// const soldier = {
//    health: 400,
//    armor: 100,
//    sayHello: function () {
//       console.log('Hello');
//    },
// };

// const john = Object.create(soldier);

// // const john = {
// //    health: 100,
// // };

// // john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayHello();

//

// Основная задача - это написать функцию isBudgetEnough, которая будет возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//    shops: [
//       {
//          width: 10,
//          length: 5,
//       },
//       {
//          width: 15,
//          length: 7,
//       },
//       {
//          width: 20,
//          length: 5,
//       },
//       {
//          width: 8,
//          length: 10,
//       },
//    ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000,
// };

// function isBudgetEnough(data) {
//    let totalArea = 0;
//    let volume = 0;

//    data.shops.forEach((shop) => {
//       totalArea += shop.width * shop.length;
//    });
//    // console.log(totalArea);

//    volume += data.height * totalArea;
//    console.log(volume);

//    if (data.budget - volume * data.moneyPer1m3 >= 0) {
//       return console.log('Бюджета достаточно');
//    } else {
//       return console.log('Бюджета не достаточно');
//    }
// }

// isBudgetEnough(shoppingMallData);

//

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека.
// Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту.
// Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
// Эти группы должны быть массивами.
// Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки.
// Все оставшиеся ученики попадают туда.
// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.
// Просто распишите логику действий строка за строкой.

// const students = [
//    'Peter',
//    'Andrew',
//    'Ann',
//    'Mark',
//    'Josh',
//    'Sandra',
//    'Cris',
//    'Bernard',
//    'Takesi',
//    'Sam',
// ];
// console.log(students.sort());

// // Функція сортування
// // function compareName(a, b) {
// //    return a - b;
// // }

// function sortStudentsByGroups(arr) {
//    arr.sort();
//    const a = [],
//       b = [],
//       c = [],
//       rest = [];
//    for (let i = 0; i < arr.length; i++) {
//       if (i < 3) {
//          a.push(arr[i]);
//       } else if (i < 6) {
//          b.push(arr[i]);
//       } else if (i < 9) {
//          c.push(arr[i]);
//       } else {
//          rest.push(arr[i]);
//       }
//    }

//    return [
//       a,
//       b,
//       c,
//       `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`,
//    ];
// }

// console.log(sortStudentsByGroups(students));

// Место для первой задачи
// function sayHello(name) {
//    return `Привет, ${name}`;
// }
// console.log(sayHello('Alex'));

// // Место для второй задачи
// function returnNeighboringNumbers(s) {
//    const a = [s - 1, s, s + 1];
//    return a;
// }
// console.log(returnNeighboringNumbers(5));

// // Место для третьей задачи
// function getMathResult(num, times) {
//    if (typeof times !== 'number' || times <= 0) {
//       return num;
//    }

//    let str = '';

//    for (let i = 1; i <= times; i++) {
//       if (i === times) {
//          str += `${num * i}`;
//          // Тут без черточек в конце
//       } else {
//          str += `${num * i}---`;
//          // Это тоже самое, что и
//          // str = str + num * i + "---"
//       }
//    }

//    return str;
// }

// getMathResult(10, 5);
