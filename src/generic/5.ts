/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair <Type> {
  key: Type;
  value: Type;
}

// тільки такий варіант можу застосувати, але ж він дивний, бо як передати тип до інтерфейсу... хто знає)
/*
типу так: 
class KeysValue implements KeyValuePair<any> {
  constructor(public key, public value){};
};
*/
export {};