// Напишите функцию rejectPromise(arr), которая принимает массив промисов и возвращает массив только с теми промисами, которые были отклонены (rejected).

function rejectPromise(arr) {
  return Promise.allSettled(arr).then((res) => {
    return res
      .filter((item) => item.status === "rejected")
      .map((item) => item.reason);
  });
}

const promises = [
  Promise.resolve(1),
  Promise.reject("Ошибка 1"),
  Promise.resolve(2),
  Promise.reject("Ошибка 2"),
];

rejectPromise(promises).then((rejectedPromises) => {
  console.log(rejectedPromises); // ["Ошибка 1","Ошибка 2"]
});

// Последовательное выполнение промисов
// Задача: Напишите функцию runSequentially, которая принимает массив функций, возвращающих промисы, и выполняет их последовательно.

function runSequentially(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then((results) => {
      return currentTask().then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
}

function asyncTask1() {
  return new Promise((resolve) => setTimeout(() => resolve(1), 1000));
}

function asyncTask2() {
  return new Promise((resolve) => setTimeout(() => resolve(2), 500));
}

function asyncTask3() {
  return new Promise((resolve) => setTimeout(() => resolve(3), 200));
}

runSequentially([asyncTask1, asyncTask2, asyncTask3]).then(console.log);
// Ожидаемый результат: [1, 2, 3], но каждый элемент появится только после завершения предыдущего

//  Ограничение количества одновременных запросов
// Задача: Напишите функцию limitConcurrency(tasks, limit), которая выполняет промисы максимум в limit потоков одновременно.
// Пример использования:

function limitConcurrency(tasks, limit) {
  let activeCount = 0; // Количество активных промисов
  let result = [];
  let index = 0;

  return new Promise((resolve) => {
    function runNext() {
      if (index >= tasks.length && activeCount === 0) {
        resolve(result); // Все задачи выполнены
        return;
      }

      while (activeCount < limit && index < tasks.length) {
        const taskIndex = index;
        const task = tasks[index++];
        activeCount++;

        task()
          .then((res) => {
            result[taskIndex] = res;
          })
          .finally(() => {
            activeCount--;
            runNext(); // Запускаем следующую задачу
          });
      }
    }

    runNext(); // Запускаем первую порцию
  });
}

const tasks = [
  () => new Promise((res) => setTimeout(() => res(1), 1000)),
  () => new Promise((res) => setTimeout(() => res(2), 500)),
  () => new Promise((res) => setTimeout(() => res(3), 200)),
  () => new Promise((res) => setTimeout(() => res(4), 100)),
];

limitConcurrency(tasks, 2).then(console.log);
// Ожидаемый результат: [1, 2, 3, 4], но не более 2 промисов выполняются одновременно

// Первый успешно выполненный промис
// Задача: Напишите функцию firstResolved(promises), которая возвращает значение первого успешно завершенного промиса.
function firstResolved(promises) {
  return Promise.any(promises);
}
// Пример использования:
const pr1 = new Promise((res, rej) => setTimeout(rej, 500, "Ошибка 1"));
const pr2 = new Promise((res) => setTimeout(res, 300, "Успех 2"));
const pr3 = new Promise((res) => setTimeout(res, 700, "Успех 3"));

firstResolved([pr1, pr2, pr3]).then(console.log);
// Ожидаемый результат: "Успех 2"

// Цепочка промисов с обработкой ошибок
// Задача: Напишите функцию handleWithRetry(fn, retries), которая выполняет переданную асинхронную функцию fn и в случае ошибки повторяет попытку retries раз.
function handleWithRetry(fn, retries) {
  // Выполняем функцию fn и обрабатываем ошибку
  return new Promise((resolve, reject) => {
    function attemptFn(attemptsLeft) {
      fn()
        .then(resolve)
        .catch((error) => {
          if (attemptsLeft <= 1) {
            reject("Не удалось выполнить задачу после всех попыток: " + error);
          } else {
            attemptFn(attemptsLeft - 1); // Повторяем попытку
          }
        });
    }

    attemptFn(retries); // Запускаем первую попытку
  });
}

// Пример использования:
let attempt = 0;
function unstableTask() {
  return new Promise((resolve, reject) => {
    attempt++;
    if (attempt < 3) reject("Ошибка " + attempt);
    else resolve("Успех на попытке " + attempt);
  });
}

handleWithRetry(unstableTask, 5).then(console.log).catch(console.error);
// Ожидаемый результат: "Успех на попытке 3"

// // Группировка результатов промисов
// Задача: Напишите функцию groupPromises(promises), которая группирует промисы на успешно выполненные и отклоненные.
function groupPromises(promises2) {
  return Promise.allSettled(promises2).then((results) => {
    const grouped = { fulfilled: [], rejected: [] };

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        grouped.fulfilled.push(result.value);
      } else if (result.status === "rejected") {
        grouped.rejected.push(result.reason);
      }
    });

    return grouped;
  });
}

// Пример использования:
const promises2 = [
  Promise.resolve("Успех 1"),
  Promise.reject("Ошибка 1"),
  Promise.resolve("Успех 2"),
  Promise.reject("Ошибка 2"),
];

groupPromises(promises2).then(console.log);
// Ожидаемый результат:
// {
//   fulfilled: ["Успех 1", "Успех 2"],
//   rejected: ["Ошибка 1", "Ошибка 2"]
// }

// Задача 4: Promise.all с обработкой ошибок
// Условие:
// Если хотя бы один промис завершится с ошибкой, весь Promise.all должен перейти в catch.

function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Ошибка загрузки данных"), 1000);
  });
}

Promise.all([fetchData1(), fetchData2(), fetchDataWithError()])
  .then(console.log)
  .catch(console.error); // Ошибка загрузки данных

// Задача 7: Промисификация колбэка
// Условие:
// Использовать fs.readFile с промисами.

const fs = require("fs");

function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readFileAsync("test.txt").then(console.log).catch(console.error);

async function loadJson(url) {
  let response = await fetch(url);

  if ((response.status = 200)) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // Error: 404

// 🔧 Задача 1: Промисифицируй setTimeout
// Создай функцию delay(ms), которая возвращает промис и ждёт указанное количество миллисекунд:
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
delay(2000).then(() => console.log("Прошло 2 секунды"));

// 🔧 Задача 2: Промисифицируй функцию loadScript
// Есть функция, добавляющая <script> на страницу:
// Сделай промисифицированную версию: loadScriptPromise(src), которая позволяет использовать await.
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Ошибка загрузки"));
  document.head.append(script);
}
async function loadScriptPromise(src) {
  return promisify(loadScript(src))
    .then((script) => console.log("SCRIPPT", script))
    .catch((e) => console.log("ERROR", e));
}

const test = await loadScriptPromise("https://example.com/script.js");

const { error } = require("console");
// 🔧 Задача 3: Промисифицируй функцию с Node.js
// Вот пример Node.js-функции:
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// 🔧 Напиши promisify, чтобы использовать:
function promisify(fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, data) => {
        if (err) rej(err);
        else res(data);
      });
    });
  };
}
const readFilePromise = promisify(fs.readFile);
const content = readFilePromise("example.txt", "utf8")
  .then((data) => console.log("Содержимое файла:", data))
  .catch((err) => console.error("Ошибка:", err));

// 🔧 Задача 4: Несколько аргументов в callback
// Промисифицируй её так, чтобы Promise возвращал оба значения в виде массива [lat, lng].
// Допустим у тебя есть функция:

function promisify1(fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, ...result) => {
        if (err) rej(err);
        else res(result);
      });
    });
  };
}
function getCoordinates(callback) {
  // callback(null, lat, lng)
  callback(null, 59.9386, 30.3141);
}
const coordinates = promisify1(getCoordinates);
coordinates.then(([lat, lng]) => console.log("Координаты:", lat, lng));

// 🔧 Задача 5: Напиши универсальную функцию promisify
// Напиши свою версию функции promisify, которая:
// Принимает любую функцию вида f(arg1, arg2..., callback)
// Возвращает новую, возвращающую Promise
// Работает с callback(err, result)
// Для следующего использования:
function promisify1(fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, result) => {
        if (err) rej(err);
        else res(result);
      });
    });
  };
}
const promisifiedFn = promisify(myFunc);
const result = await promisifiedFn(arg1, arg2);
