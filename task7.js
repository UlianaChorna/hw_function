// 7. Напишіть функцію, яка приймає на вхід масив строк та повертає новий масив, який містять тільки унікальні значення.

const originArray = (arr) => {
  const arrOrigin = new Set(arr);

  return [...arrOrigin];
}

originArray([1,2,3,2,3]);