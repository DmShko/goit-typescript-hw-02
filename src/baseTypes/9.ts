/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type data = {
  [key: string] : any;
}

const page1: data = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: data = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};