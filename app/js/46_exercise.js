'use strict';

// function pov(x, n) {
//    let result = 1;

//    for (let i = 0; i < n; i++) {
//       result *= x;
//    }
//    return result;
// }

// function pov(x, n) {
//    if (n === 1) {
//       return x;
//    } else {
//       return x * pov(x, n - 1);
//    }
// }

// console.log(pov(2, 50));
// console.log(pov(2, 1));
// console.log(pov(2, 2));
// console.log(pov(2, 3));
// console.log(pov(2, 4));

// Здесь мы с вами рассмотрим одну из классических задач на рекурсию, которую дают на собеседованиях.
// Звучит она очень просто:
// Напишите функцию, которая вычисляет факториал.
// Задание простое, но нужно понимать что такое факториал вообще.
// Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом.
// Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение:)
// Поэтому, если в нашу функцию приходит дробное число или не число - возвращается строка с любым сообщением на ваше усмотрение.
// Если 0 и меньше - возвращается число 1.

// Сам же факториал с примерами выглядит вот так:
// n! = n * (n - 1) * (n - 2) * ...* 1 - это общая формула

// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120

// factorial(4) => 24

// function factorial(n) {
//    if (typeof n == 'number' && Number.isInteger(n) && n >= 1) {
//       if (n === 0) {
//          return `Fuck`;
//       } else if (n === 1) {
//          return 1;
//       }
//       return n * factorial(n - 1);
//    } else {
//       return console.log('Ну і шо?');
//    }
// }
// console.log(factorial(5));

// Конттекст виклику

// function showThis(a, b) {
//    console.log(this);
//    function sum() {
//       console.log(this);
//       return a + b;
//    }
//    console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function () {
//       console.log(this);
//       function shout() {
//          console.log(this);
//       }
//       shout();
//    },
// };

// obj.sum();

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function () {
//       console.log('Hello, ' + this.name);
//    };
// }

// let ivan = new User('Ivan', 23);
// ivan.hello();

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + ' ' + surname);
// }

// const user = {
//    name: 'John',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//    return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 1) Звичайна функція this = window, але якщо 'use strict', то this = undefined
// 2) Контекст у методів об'єкту - це сам об'єкт
// 3) this у конструкторах і класах - це новий екземпляр об'єкту
// 4) Ручна прив'язка this - це методи call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//    e.target.style.backgroundColor = 'blue';
// });

// const obj = {
//    num: 5,
//    sayNumber: function () {
//       const say = () => {
//          console.log(this.num);
//       };

//       say();
//    },
// };

// obj.sayNumber();

// const double = (a) => a * 2;
// console.log(double(4));
