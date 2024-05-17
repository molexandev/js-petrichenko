'use strict';
// 1. Objects

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red',
//    },
//    makeTest: function () {
//       console.log('Test');
//    },
// };

// console.log(Object.keys(options).length);

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(options['colors']['border']);
// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//    if (typeof options[key] === 'object') {
//       for (let i in options[key])
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//    } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//    }
// }
// console.log(counter); // === console.log(Object.keys(options).length);

// 2. Arrays

// const arr = [1, 28, 53, 156, 8, 10];

// Linear search in array

// function LinearSearch(t, A) {
//    // t - искомый элемент,
//    // A - массив, в котором ищем.
//    var n = A.length,
//       i = 0;

//    A[n] = t;

//    while (A[i] !== t) i++;

//    if (i < n) return i; // На выходе индекс искомого элемента.
//    else return -1; // Если искомого элемента нет в массиве, то -1.
// }
// console.log(LinearSearch(53, arr));

// END linear search in array

// Binary search in array

// function BinarySearch(t, A) {
//    // t - искомый элемент,
//    // A - упорядоченный массив, в котором ищем.
//    var i = 0,
//       j = A.length,
//       k;

//    while (i < j) {
//       k = Math.floor((i + j) / 2);
//       if (t <= A[k]) j = k;
//       else i = k + 1;
//    }

//    if (A[i] === t) return i; // На выходе индекс искомого элемента.
//    else return -1; // Если искомого элемента нет в массиве, то -1.
// }
// console.log(BinarySearch(28, arr));

// END binary search in array

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//    return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function (item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//
// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for (let value of arr) {
//    console.log(value);
// }

//

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));
