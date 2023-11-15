/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum TypeDayOfWeek {

  Monday ,
  Tuesday ,
  Wednesday ,
  Thursday,
  Friday ,
  Saturday ,
  Sunday ,

};

const isWeekend = (day: TypeDayOfWeek): boolean => {

  return day === TypeDayOfWeek.Saturday || day === TypeDayOfWeek.Sunday;
  
};

console.log(isWeekend(1));