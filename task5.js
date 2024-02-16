// 5. Напишіть функцію, яка приймає на вхід рядок та перевіряє, чи є він паліндромом 

const palindrome = (str) => {
  const reverseStr = str.split('').reverse().join('')
 
  if(reverseStr !== str) {
   return false;
  }
 
  return true;
 }
 
 palindrome();