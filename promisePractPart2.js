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
