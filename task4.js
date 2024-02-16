
// 4. Напишіть функцію, яка приймає на вхід число та повертає його факторіал.

const factorial = (num) => {
  let result = 1;

  for (let index = 1; index <= num; index++) {
   result *= index;
  }
  return result;
}

factorial();


