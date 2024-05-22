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

const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5,
      },
      {
         width: 15,
         length: 7,
      },
      {
         width: 20,
         length: 5,
      },
      {
         width: 8,
         length: 10,
      },
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000,
};

function isBudgetEnough(data) {
   let volume = shoppingMallData.height;
   console.log(volume);
}

isBudgetEnough();
