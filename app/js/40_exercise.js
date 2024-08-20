// 'use strict';

// Замыкания

// let number = 5;

// function logNumber() {
//    console.log(number);
// }

// number = 6;

// logNumber();

// number = 8;

// logNumber();

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

// console.log(c1, c2, c3);

// function makeArmy() {
//    let shooters = [];

//    let i = 0;
//    while (i < 10) {
//       let j = i;
//       let shooter = function () {
//          // функция shooter
//          alert(j); // должна выводить порядковый номер
//       };
//       shooters.push(shooter); // и добавлять стрелка в массив
//       i++;
//    }

//    // ...а в конце вернуть массив из всех стрелков
//    return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.

// Задачи

// 1

// const restorantData = {
//    menu: [
//       {
//          name: 'Salad Caesar',
//          price: '14$',
//       },
//       {
//          name: 'Pizza Diavola',
//          price: '9$',
//       },
//       {
//          name: 'Beefsteak',
//          price: '17$',
//       },
//       {
//          name: 'Napoleon',
//          price: '7$',
//       },
//    ],
//    waitors: [
//       { name: 'Alice', age: 22 },
//       { name: 'John', age: 24 },
//    ],
//    averageLunchPrice: '20$',
//    openNow: true,
// };

// function isOpen(prop) {
//    let answer = '';
//    prop.openNow == false ? (answer = 'Закрыто') : (answer = 'Открыто');
//    return answer;
// }

// console.log(isOpen(restorantData));

// //
// if (prop.openNow == true) {
//    return (answer = 'Открыто');
// } else {
//    return (answer = 'Закрыто');
// }

// 2

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//    if (
//       (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1)) / 2 <
//       +average.slice(0, -1)
//    ) {
//       return 'Цена ниже средней';
//    } else {
//       return 'Цена выше средней';
//    }
// }

// console.log(
//    isAverageLunchPriceTrue(
//       restorantData.menu[0],
//       restorantData.menu[1],
//       restorantData.averageLunchPrice
//    )
// );

// 3

// function transferWaitors(data) {
//    const copy = Object.assign({}, data);

//    copy.waitors = { name: 'Mike', age: 32 };

//    return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData.waitors);
