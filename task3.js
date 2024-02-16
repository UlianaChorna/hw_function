// 3. Напишіть функцію, яка приймає на вхід число та перевіряє, чи є воно простим числом.

const primeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return 'It is not a prime number';
    }
  }

  return 'It is a prime number';
}

primeNumber();