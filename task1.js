// 1. Створіть функцію яка клонує об'єкти
// Приклад вхідних данних:

// const obj = {
//     cart: [
//         {
//             id: 2,
//             prices: [
//                 123
//             ]
//         }
//     ],
//     userInfo: {
//         id: 33,
//         bio: {
//             name: 'user',
//             phone: '+380000000000',
//             location: {
//                 region: 'ua',
//                 state: 'lv'
//             }
//         }
//     }
// }
// Функція повина приймати обьєкти схожого типу і не бути прив'язана до назви полів. Використовувати JSON.stringify/parse забороненно

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
}

  const clonedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          clonedObj[key] = deepClone(obj[key]);
      }
  }

  return clonedObj;
}


const obj = {
  cart: [
      {
          id: 2,
          prices: [
              123
          ]
      }
  ],
  userInfo: {
      id: 33,
      bio: {
          name: 'user',
          phone: '+380000000000',
          location: {
              region: 'ua',
              state: 'lv'
          }
      }
  }
}

const copy = deepClone(obj);
