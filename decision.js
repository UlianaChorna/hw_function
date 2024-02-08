// task1

const cloneObj = (obj) => {
  Object.values(obj).forEach(value => {
    console.log(value);
  });
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

console.log(cloneObj(obj))

// task2

const obj1 = {
  userName: 'Pavlo',
  age: 29,
}

const obj2 = {
  userName: 'Pavlo',
  age: 29,
}

const obj3 = {
  userName: 'Uliana',
  age: 25,
}

const comparisonObj = (obj1,obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  for (let key of key1) {
    const value = obj1[key];
    const value2 = obj2[key];

    if (value !== value2){
      return false;
    }

    return true;
 }
}

console.log(comparisonObj(obj1,obj3))

// task3
const primeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// task4
const factorial = (num) => {
  let result = 1;

  for (let index = 1; index <= num; index++) {
   result *= index;
  }
  return result;
}

console.log(factorial(4))

// task5
const palindrome = (str) => {
 const reverseStr = str.split('').reverse().join('')

 if(reverseStr !== str) {
  return false;
 }

 return true;
}

palindrome();

// task 6
function toUpperCase(inputString) {
  return inputString.toUpperCase();
}
console.log(toUpperCase('first'));

// task7
const originArray = (arr) => {
  const arrOrigin = new Set(arr);

  return [...arrOrigin];
}
console.log(originArray([1,2,3,2,3]))

// task8
const formatDate = (date) => {
  if (!(date instanceof Date)) {
    console.error('Invalid date');
    return;
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 

  minutes = minutes < 10 ? '0' + minutes : minutes;

  const formattedTime = `${hours}:${minutes} ${amOrPm}`;
  return formattedTime;
}

console.log(formatDate(new Date()))