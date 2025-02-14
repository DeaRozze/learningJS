// Планирование: setTimeout и setInterval

// Синтаксис:

setTimeout(function, delay);

setTimeout(() => {
  console.log("Это сообщение появится через 2 секунды");
}, 2000);


// Синтаксис: 

setInterval(function, interval);

let counter = 0
const intervalid = setInterval(() => {
  counter++
  console.log(`Прошло ${counter} секунд`);

  if (counter === 5) {
    clearInterval(intervalid)
    console.log('Интервал остановлен');
  }
}, 1000)

// Важные моменты:

// Асинхронность: Оба метода работают асинхронно, то есть они не блокируют остальную программу.

// this в setTimeout и setInterval: Внутри функции, переданной в setTimeout или setInterval, значение this может зависеть от контекста, в котором была вызвана функция. 
// Это важно учитывать, особенно в случаях с объектами или методами.

const obj = {
  name: 'Тест',
  greet: function () {
    setTimeout(function () {
      console.log('ПРивет, ' + this.name); //this будет ссылаться на глобальный объект (window в браузере)
    }, 1000)
  }
}

obj.greet();  //  "Привет, undefined"

// Чтобы избежать таких проблем, можно использовать стрелочные функции, которые не имеют собственного контекста this:

const obj = {
  name: "Тест",
  greet: function () {
    setTimeout(() => {
      console.log("Привет, " + this.name); // Стрелочная функция сохраняет контекст
    }, 1000);
  }
};

obj.greet();  // Выведет: "Привет, Тест"


// 1.  Задача: Простая задержка

setTimeout(() => {
  console.log('Привет,мир');
}, 3000)

// 2. Таймер с обратным отсчетом

let count = 10

const valid = setInterval(() => {
  console.log(count);
  count--

  if (count === 1) {
    clearInterval(valid)
    console.log('Поехали!');
  }
}, 1000)


// 3. Повторяющееся сообщение

let count = 0

const sayStart = setInterval(() => {
  console.log('ПРИВЕТ');
  count++

  if (count === 5) {
    clearInterval(sayStart)
    console.log('Конец');
  }
}, 1000)


//4. Пауза с задержкой

setTimeout(() => {
  console.log('Начало')

  setTimeout(() => {
    console.log('Пауза');

    setTimeout(() => {
      console.log('Конец');
    }, 3000)
  }, 2000)
}, 0)

//5. Прогресс с задержкой и паузой
//Представьте, что у вас есть процесс обработки данных, который состоит из нескольких этапов. Каждый этап занимает 2 секунды.
//После каждого этапа должен быть вывод прогресса, например: Процесс: 20%, Процесс: 40% и так далее.
//После каждого этапа, вместо того чтобы продолжать сразу, программа должна делать паузу в 1 секунду.
//После завершения всех этапов, выведите сообщение "Обработка завершена!".


let progress = 0;
const totalStages = 5; 
const stageTime = 2000; 
const pauseTime = 1000; 

function startProcess() {
  let stage = 0; 


  function processStep() {
    stage++;
    progress = (stage / totalStages) * 100; 

    console.log(`Процесс: ${progress}%`);
    
    if (stage === totalStages) {
      console.log("Обработка завершена!");
    } else {
      setTimeout(processStep, pauseTime); 
    }
  }

  setTimeout(processStep, stageTime);
}

startProcess();