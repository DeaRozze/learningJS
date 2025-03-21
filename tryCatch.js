// Задача: Написать функцию, которая принимает два числа и возвращает их частное. Если второе число — 0, выбрасывать ошибку и обрабатывать её через try...catch.

function divine(a, b) {
  if (b === 0) {
    throw new Error("нельзя делить на ноль");
  }
  return a / b
}

try {
  console.log(divine(10, 2));
  console.log(divine(10, 0));
} catch (error) {
  console.log('Ошибка', error.message);
}

// Задача: Написать функцию, которая принимает строку JSON и парсит её. Если строка некорректна, выбрасывать ошибку и возвращать {}.

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log('ошибка', error.message);
    return {};
  }
}

console.log(safeParse('{"name": "Alex"}')); // { name: 'Alex' }
console.log(safeParse('{name: "Alex"}')); // Ошибка , вернёт {}

// пример в finally

function readFile() {
  try {
    console.log('Открытие файла...');
    throw new Error('Ошибка чтения файла!')
  } catch (error) {
    console.log('Ошибка:', error.message);
  }
  finally {
    console.log('закрытие файла...');
  }
}
readFile();

// Открытие файла...
// tryCatch.js:35
// Ошибка: Ошибка чтения файла!
// tryCatch.js:38
// закрытие файла...

// пример с throw new Error

function checkAge(age) {
  if (age < 18) {
    throw new Error("Возраст должен быть 18 или больше!");
  }
  return "Доступ разрешен!";
}

try {
  console.log(checkAge(20)); // "Доступ разрешен!"
  console.log(checkAge(15)); // Ошибка
} catch (error) {
  console.log("Ошибка:", error.message);
}


// Проверка логина и пароля

function login(username, password) {
  if (username || password === "") {
    throw new Error("Логин и пароль не могут быть пустыми!")
  }
  if (username != 'admin' || password != '12345') {
    throw new Error('Неверные учетные данные!')
  }
  return 'Вход выполнен'
}

try {
  console.log(login("admin", "1234"));  //Вход выполнен!
  console.log(login("user", "1234"));   //Неверные учетные данные!
  console.log(login("", "1234")); // Логин и пароль не могут быть пустыми!
} catch (error) {
  console.log("Ошибка:", error.message);
}

// Генерация случайного числа с ограничением

function getRandomNumber(min, max) {
  if (min > max) {
    throw new Error("Минимальное значение не может быть больше максимального!");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

try {
  console.log(getRandomNumber(1, 10));  //  Число от 1 до 10
  console.log(getRandomNumber(5, 5));   //  Всегда 5 (min == max)
  console.log(getRandomNumber(10, 1));  //  Ошибка
} catch (error) {
  console.log("Ошибка:", error.message);
}

// Конвертация строки в число

function toNumber(value) {
  let number = Number(value);
  if (isNaN(number)) {
    throw new Error('Невозможно преобразовать в число');
  }
  return number;
};

try {
  console.log(toNumber('123')); // 123
  console.log(toNumber('abc')); // ошибка Невозможно преобразовать в число
} catch (error) {
  console.log('ошибка', error.message);
}

// Ограничение длины пароля

function checkPassword(password) {
  if (password.length < 6) {
    throw new Error('Пароль слишком короткий')
  }
  if (password.length > 20) {
    throw new Error('Пароль слишком длинный')
  }
  return 'Пароль принят'
}

try {
  console.log(checkPassword("secure123"));  // Пароль принят!
  console.log(checkPassword("abc"));        // Ошибка
  console.log(checkPassword("a".repeat(21))); // Ошибка
} catch (error) {
  console.log("Ошибка:", error.message);
}

// RoadMap

// Что будет с кодом ниже после throw?
//После throw выполнение немедленно прерывается, и код ниже не выполнится (если нет catch).

`console.log('до throw');
throw new Error('ошибка')
console.log('после throw');` // Uncaught Error

//Что будет с кодом второго setTimeout после throw в первом?
// Ошибки внутри setTimeout не прерывают выполнение программы, так как setTimeout выполняется асинхронно.

// setTimeout(() => {
//   throw new Error('Ошибка в первом таймере') // Uncaught Error Error: Ошибка в первом таймере
// }, 100)

setTimeout(() => {
  console.log('второй таймер'); // второй таймер
}, 200)

// Что будет с кодом ниже, если код выше обернут в try..catch и делает throw?

try {
  console.log('до throw');
  throw new Error('ошибка')
  console.log('после throw'); // Не выполнится
} catch (error) {
  console.log('поймана ошибка', error.message);
}

console.log('код после try...catrh'); // продорлжает работать


//  Что технически возможно throw'ить?
// В JavaScript можно throw'ить любой тип данных (не только ошибки).

// throw "Произошла ошибка";  // строка
// throw 404;                 // число
// throw { message: "Ошибка" }; // объект
// throw new Error("Ошибка!"); // стандартный объект ошибки

// Можно ли сделать блок try без catch?
//Нет, try должен иметь catch или finally.

// try {
//   console.log("Без catch или finally"); // ошибка 
// } 

// Можно ли сделать блок try..finally без catch?
// Да, try может быть без catch, если есть finally

// try {
//   console.log('начало');
//   throw new Error('ошибка')
// } finally {
//   console.log('этот блок выполнится в любом случае');
// }
//выведет в консоль
// Начало
// Этот блок выполнится в любом случае
// Uncaught Error: Ошибка!

// Зачем нужна обработка ошибок? Используется ли она на проде?

`
1. Предотвращает краш приложения (без try...catch приложение может упасть).

2. Упрощает отладку (можно логировать ошибки и понять, что пошло не так).

3. Позволяет показывать пользователю понятные сообщения вместо системных ошибок.

4. Обязательна в продакшене (на реальных сайтах ошибки обрабатываются, чтобы не сломать приложение).
`

function test() {
  try {
    console.log("Внутри try");
    throw new Error("Ошибка!");
  } catch (error) {
    console.log("Ошибка поймана:", error.message);
  } finally {
    console.log("Этот код выполнится всегда!");
  }
}

test();

// Внутри try
// Ошибка поймана: Ошибка!
// Этот код выполнится всегда!

function example() {
  try {
    console.log("Внутри try");
    return "Возвращаем из try";
  } catch (error) {
    console.log("Ошибка поймана");
    return "Возвращаем из catch";
  } finally {
    console.log("Выполняем finally");
    return "Возвращаем из finally";
  }
}

console.log(example());

// Внутри try
// Выполняем finally
// Возвращаем из finally

function example1() {
  try {
    console.log("Внутри try");
    return "Возвращаем из try";
  } finally {
    console.log("Выполняем finally");
    return "Возвращаем из finally";
  }
}

console.log(example1());

// Внутри try
// Выполняем finally
// Возвращаем из finally

function example4() {
  try {
    console.log("Внутри try");
    return "Возвращаем из try";
  } catch (error) {
    console.log("Ошибка поймана");
    return "Возвращаем из catch";
  } finally {
    console.log("Выполняем finally");
    throw new Error("Новая ошибка из finally");
  }
}

try {
  console.log(example4());
} catch (error) {
  console.log("Перехват ошибки:", error.message);
}

// Внутри try
// Выполняем finally
// Перехват ошибки: Новая ошибка из finally

// 1. ReferenceError (Ошибка ссылки)
// Возникает, если мы обращаемся к необъявленной переменной.

console.log(undeclaredVar); // ReferenceError: undeclaredVar is not defined

try {
  console.log(nonExistentVariable);
} catch (error) {
  console.log(error.name); // ReferenceError
  console.log(error.message); // nonExistentVariable is not defined
}

//2. TypeError (Ошибка типа)
//Возникает, если пытаемся выполнить недопустимую операцию с переменной неправильного типа.
let num = 10;
num(); // TypeError: num is not a function

try {
  null.someMethod(); // Ошибка: нельзя вызвать метод у null
} catch (error) {
  console.log(error.name); // TypeError
  console.log(error.message);
}

try {
  let obj = {};
  obj.someMethod(); // Ошибка: метод не определён
} catch (error) {
  console.log(error.name); // TypeError
  console.log(error.message);
}

// 3. SyntaxError (Ошибка синтаксиса)
// Возникает при нарушении правил написания кода (обычно во время парсинга кода, а не во время выполнения).

try {
  eval("var a = ;"); // Ошибка из-за некорректного синтаксиса
} catch (error) {
  console.log(error.name); // SyntaxError
  console.log(error.message);
}
//eval() позволяет выполнить строку как код JavaScript, и если в ней есть ошибка, выбрасывается SyntaxError.

// 4. RangeError (Ошибка диапазона)
//Возникает, если передаём в функцию недопустимое значение в пределах допустимого типа.

try {
  let arr = new Array(-1); // Нельзя создать массив с отрицательной длиной
} catch (error) {
  console.log(error.name); // RangeError
  console.log(error.message);
}

try {
  function recursive() {
    return recursive(); // Бесконечная рекурсия
  }
  recursive();
} catch (error) {
  console.log(error.name); // RangeError: Maximum call stack size exceeded
}

//5. URIError (Ошибка URI)
//Возникает при некорректном использовании функций decodeURI() и encodeURI().

try {
  decodeURI("%"); // Некорректный URI
} catch (error) {
  console.log(error.name); // URIError
  console.log(error.message);
}

//6. Custom Error (Своя ошибка)
//Если нужно выбросить свою ошибку, можно использовать throw new Error():

try {
  throw new Error("Моя кастомная ошибка");
} catch (error) {
  console.log(error.name); // Error
  console.log(error.message); // Моя кастомная ошибка
}

//Можно также создать свой класс ошибок, наследуя от Error:

class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

try {
  throw new MyCustomError("Что-то пошло не так!");
} catch (error) {
  console.log(error.name); // MyCustomError
  console.log(error.message); // Что-то пошло не так!
}

// Свой ErrorHandling

class ErrorHandling extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ErrorHandling";
  }
}

try {
  console.log('что-то');
  throw new ErrorHandling('у нас проблемы');
} catch (err) {
  if (err instanceof ErrorHandling) {
    console.log('наследуется от нашей ошибки', err);
  } else {
    throw err;
  }
}

// Вынесем второй try...catch за пределы первого.
try {
  console.log(sum("1", 2));  // sum не определена, будет ошибка ReferenceError
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log('Ошибка: некорректная функция sum', err);
  } else {
    throw err;
  }
}

function sum(a, b) {
  return a + b;
}