/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum TypeDayOfWeek {

  Monday = 'workday',
  Tuesday = 'workday',
  Wednesday = 'workday',
  Thursday = 'workday',
  Friday = 'workday',
  Saturday = 'weekend',
  Sunday = 'weekend',

};

type day = {
  monday : TypeDayOfWeek,
  tuesday : TypeDayOfWeek,
  wednesday : TypeDayOfWeek,
  thursday : TypeDayOfWeek,
  friday : TypeDayOfWeek,
  saturday : TypeDayOfWeek,
  sunday : TypeDayOfWeek,
};

const days: day = {
  monday : TypeDayOfWeek.Monday,
  tuesday : TypeDayOfWeek.Tuesday,
  wednesday : TypeDayOfWeek.Wednesday,
  thursday : TypeDayOfWeek.Thursday,
  friday : TypeDayOfWeek.Friday,
  saturday : TypeDayOfWeek.Saturday,
  sunday : TypeDayOfWeek.Sunday,
};

function isWeekend(day: string): boolean {
  
  if(days[day] === 'weekend') {
    return true;
  } else {
    return false;
  };
};

console.log(isWeekend('monday'));