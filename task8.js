
// 8. Напишіть функцію, яка приймає на вхід дату та повертає час у форматі "години:хвилини AM/PM".

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

formatDate(new Date());