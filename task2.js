// 2. Створіть функцію яка порівнює два об'єкти

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

  for (let key of key1) {
    const value = obj1[key];
    const value2 = obj2[key];

    if (value !== value2){
      return false;
    }

    return true;
 }
}

comparisonObj();