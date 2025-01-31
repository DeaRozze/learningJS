// Лексическое Окружение - невидимый(скрытый) объект, который есть у любого блока, скрипта или функции в JS. 
// Создается автоматически, есть у функций и у скриптов Js
// Состоит из двух частей: список переменных и ссылка на родительское окружение

const x = 1;

const logToConsole = function () {
  const i = 'Hi'
  console.log(i);
}

logToConsole()
//   есть два лексических окружений
// 1. Глобальное: 
// переменные X:1 , logToConsole: function
// ИМЕЕТ ДОСТУП ТОЛЬКО К СВОИМ ПЕРМЕННЫМ

// 2. Локальное(внутри y) :
// перменные i: 'Hi'
// ИМЕЕТ ДОСТУП КО ВСЕМ ПЕРЕМЕННЫМ

// ЗАМЫКАНИЕ - это способность функции в JS запоминать лексическое окружение, в котором она была создана, т.е. хранить в себе ссылку на это окружение



const y = 1;

const newLogToConsole = function () {
  console.log(y);
}

newLogToConsole()



let w = 1;

const NownewLogToConsole = function () {
  console.log(w);
}

w = 2

NownewLogToConsole()

w = 3



function makeCounter(count) {
  return function () {
    return count++
  }
}

let counter = makeCounter(0)
let counter2 = makeCounter(0)

alert(counter()) // 0
alert(counter()) // 1

alert(counter2()) // 0
alert(counter2()) // 1

// Задачи учебник


let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi() // Pete


function makeWorker() {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // Pete


function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1




function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1



//Обратите внимание: результат зависит от режима выполнения кода. Здесь используется строгий режим "use strict".
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); //Результатом будет ошибка. для use strict, без него все будет работать 


// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) {
  return function (b) {
    return a + b // берёт "a" из внешнего лексического окружения
  }
}

console.log(sum(1)(2)); //3
console.log(sum(5)(-1));  //4


// Что выведет данный код?

let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}

func();



function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inBetween(3, 6)));


function inArray(arr) {
  return function (x) {
    return arr.includes(x)
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inArray([1, 2, 10])));


//Сортировать по полю 

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

// Обычный способ был бы таким:

// // по имени (Анна, Иван, Пётр)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('age'))


// Армия функций


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i
    let shooter = function () { // функция shooter
      alert(j); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.




// Задача 1: Счетчик

function createCounter() {
  let count = 0
  return {
    increment() {
      count++
      return count
    },
    decrement() {
      count--
      return count
    },
    getCount() {
      return count
    }
  }
}

const counter = createCounter()


console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); //1

// Задача 2: Приватные данные

function createPerson(name) {
  return {
    getName() {
      return name
    },
    setName() {
      return name
    }
  }
}

const person = createPerson('Alice');
console.log(person.getName()); // "Alice"
person.setName('Bob');
console.log(person.getName()); // "Bob"
person.setName(''); // Ошибка: имя не может быть пустым!



// Нужно написать функцию, которая принимает число N и возвращает функцию,
// вызов которой первые N раз возвращает 'yes', а потом – 'no'.


function canGetCount(n) {
  let count = 0
  return function () {
    if (count < n) {
      count++
      return 'yes'
    } else {
      return 'no'
    }
  }
}

const getOne = canGetCount(2);

getOne(); //=== "yes";
getOne(); //=== "yes";
getOne(); //=== "no";



// Задача:
// Создать функцию createBeggar, которая возвращает другую функцию beggar. 
// Функция beggar должна увеличивать счетчик count на случайное число от 0 до 100 и выводить текущее значение счетчика. 
// Если счетчик достигает или превышает 250, функция должна завершить выполнение.

// Условия:
// Функция randomInteger(min, max) должна возвращать случайное целое число в диапазоне от min до max включительно.
// Функция createBeggar должна возвращать функцию beggar, которая увеличивает счетчик count на случайное число от 0 до 100.
// Функция beggar должна выводить текущее значение счетчика count.
// Если счетчик count достигает или превышает 250, функция beggar должна завершить выполнение.
// Каждый вызов createBeggar должен создавать независимую функцию beggar с собственным счетчиком count.

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

function createBeggar() {
  let count = 0
  return function beggar() {
    count = count + randomInteger(0, 100)
    console.log(count);
    if (count >= 250) {
      console.log('250');
      return 
    }
  }
}


const begg = createBeggar();
const begg1 = createBeggar();

begg(); // Вызов первой функции beggar
begg1(); // Вызов второй функции beggar

let x = 2

const f = () => {
  x++
}

const f2 = () => {
  f()
  return x
}

const f3 = () => {
  let x = 0
  f()
  return x
}

console.log('f2', f2()) // 3
console.log('f3', f3()) // 0
console.log('x', x) // 4

// Что будет записано в консоль для следующего фрагмента кода (code snippet):

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? //1
  }
  console.log(count); // What is logged? //0
})();


// Что будет записано в консоль для следующего фрагмента кода (code snippet):

(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?// 0
  })(1);
})(0);


// Рассмотрим следующие функции: clickHandler, immediate, и delayReload:

let countClicks = 0;
button.addEventListener('click', function clickHandler() {
  countClicks++; //обращается
});

const result = (function immediate(number) {
  const message = `number is: ${number}`;
  return message;
})(100); //не обращается

setTimeout(function delayedReload() {
  location.reload();
}, 1000); //обращается к глобальной переменной location  из глобальной области видимости

// Какие из этих 3 функций получают доступ к переменным внешней области видимости (outer scope)?


// Что будет записано в консоль в следующем фрагменте кода (code snippet):
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? 3,3,3
  }, 1000);
}



// Вопрос 5: Правильное или неправильное сообщение
// Что будет записано в консоль в следующем фрагменте кода (code snippet):

function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}

const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // What is logged? //Count is 0



// Вопрос 6: Восстановление инкапсуляции (Restore encapsulation)
// Следующая функция createStack() создает элементы структуры стековых данных:

function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
// Стек работает, как и ожидалось, но с одной маленькой проблемой. Любой может изменить массив элементов напрямую,
// потому что свойство stack.items открыто.

// Это неприятная деталь, так как она нарушает инкапсуляцию стека: только методы push() и pop() должны быть публичными, 
// а stack.items или любые другие элементы не должны быть доступны.

// Рефакторизуйте описанную выше реализацию стека, используя концепцию замыкания, 
// так, чтобы не было возможности доступа к массиву items вне области видимости функции createStack():

function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

stack.items; // => undefined


// Вопрос 7: Умное перемножение
// Напишите функцию multiply(), которая умножает 2 числа:

function multiply(num1, num2) {
  // Write your code here...
}
// Если multiply(num1, numb2) будет вызвана с 2 аргументами, то она должна вернуть умножение 2 аргументов.

// Но в том случае, если вызывается 1 аргумент const anotherFunc = multiply(numb1), то функция должна возвращать другую функцию. Возвращаемая функция при вызове anotherFunc(num2) выполняет умножение num1 * num2.

multiply(4, 5); // => 20
multiply(3, 3); // => 9


//решение
const double = multiply(2);
double(5);  // => 10
double(11); // => 22

function multiply(number1, number2) {
  if (number2 !== undefined) {
    return number1 * number2;
  }
  return function doMultiply(number2) {
    return number1 * number2;
  };
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9

const double = multiply(2);
double(5);  // => 10
double(11); // => 22

