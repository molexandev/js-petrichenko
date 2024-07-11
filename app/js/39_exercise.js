// 'use strict';

// // Динамическая типизация

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

// console.log(typeof !!'123');
