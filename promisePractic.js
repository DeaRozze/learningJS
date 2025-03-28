// пример промиса

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("finish good");
    } else {
      reject("Error");
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log(result); // finish good
  })
  .catch((error) => {
    console.log(error); // "Error", если success === false
  })
  .finally(() => {
    console.log("finish operation");
  });

// пример цепочки промисов

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

getData()
  .then((res) => {
    console.log("a", res);
    return res * 2;
  })
  .then((res) => {
    console.log("b", res);
    return res * 2;
  })
  .then((res) => {
    console.log("c", res);
    return res * 2;
  })
  .then((result) => {
    console.log("d", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

//Функция-таймер:
//Напишите функцию delay, которая принимает время в миллисекундах и возвращает
//промис, который резолвится через заданное время.

function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}
delay(3000).then(() => {
  console.log("3 сек");
});

// интересные примеры
//1. Асинхронность обработчиков even для уже завершённого промиса
const promise2 = Promise.resolve("Ready");

promise.then((res) => {
  console.log("debug", res); //debug
});

console.log("first complete"); //выполнится первым

//2. Цепочки промисов и автоматическая обёртка значений

Promise.resolve(5)
  .then((result) => {
    console.log("first", result);
    return result * 2;
  })
  .then((result) => {
    console.log("second", result); //10
    return new Promise((resolve) =>
      setTimeout(() => resolve(result + 3), 1000)
    );
  })
  .then((result) => {
    console.log("third", result); // 13 через 1 секунду
  });

// 3. Обработка ошибок и "перехват исключений" в цепочке

Promise.resolve(10)
  .then((result) => {
    console.log("get", result);
    throw new Error("crash");
  })
  .then((result) => {
    console.log("не вызовится", result);
  })
  .catch((err) => {
    console.error("err", err.message);
    return 42;
  })
  .then((result) => {
    console.log("after catch", result); // 42
  });

//4. Метод finally

Promise.resolve("Успех")
  .then((result) => {
    console.log("Результат:", result);
    return result;
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  })
  .finally(() => {
    console.log("Операция завершена");
  });
