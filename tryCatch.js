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