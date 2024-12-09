СОЗДАНИЕ МАССИВА

let arr = new Array();
let arr = []

ЗНАЧЕНИЕ МАССИВА

let arrOne = [
  'Ваня',
  'Оля',
  'Влад',
]

или
let arrOne = ['Ваня', 'Оля', 'Влад',]

РАЗЛИЧНЫЕ ТИПЫ ЗНАЧЕНИЙ

let arrTwo = [
  "Коля",
  {
    type: "Js",
    age: 30
  },
  true,
  function () {
    console.log('Привет,я Коля');
  }
]

МНОГОМЕРНЫЕ МАССИВЫ

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

ПОЛУЧЕНИЕ ЗНАЧЕНИЙ

let arrOne = [
  'Ваня', // 0позиция
  'Влад', //1я позиция
  'Оля', // 2я позиция
]
console.log(arrOne[1]);
console.log(arrOne[5]); //undefined


let arrTwo = [
  "Коля",
  {
    type: "Js",
    age: 30
  },
  true,
  function () {
    console.log('Привет,я Коля');
  }
]

console.log(arrTwo); // Все элементы и ключи
console.log(arrTwo[0]); // Коля
console.log(arrTwo[1].type); //js
console.log(arrTwo[2]); // true
arrTwo[3]() // Привет, я Коля

МНОГОМЕРНЫЕ МАССИВЫ

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(matrix); // все массивы
console.log(matrix[0][1]); // 2

let arrOne = ['Ваня', 'Оля', 'Влад',]
console.log(arrOne); // (3) ['Ваня', 'Оля', 'Влад',]
console.log(arrOne.length); // 3

ДОСТУП К МАССИВАМ

МАССИВ = ОБЪЕКТ => ПОВЕДЕНИЕ КАК У ОБЪЕКТА

let arr = ['Ваня', 'Оля', 'Влад',]
console.log(arr); // (3) ['Ваня', 'Оля', 'Влад',]

let arrNew = arr

arrNew.length = 2
console.log(arr) // (2) ['Ваня', 'Оля',]

ИЗМЕНЕНИЕ ЗНАЧЕНИЙ
let arr = ['Ваня', 'Оля', 'Влад',]

Меняем существующее
arr[0] = 'Коля'
console.log(arr); //['Коля', 'Оля', 'Влад',]

Добавляем новое
arr[3] = 'Ваня'
console.log(arr);// ['Коля', 'Оля', 'Влад', 'Ваня']

МЕТОДЫ МАССИВОВ

ВАРИАНТЫ ПРИМЕНЕНИЯ

1. очередь или упорядоченная коллекция элементов.
   Очередь поодерживает два вида операций:
- добавление элементов в конец очереди
  - удаление элемента в начале, сдвигая очередь, так что второй элемент становится первым.

2. Структура данных, называемая СТЕК.
    - добавление элемента в конец
  - удаление последнего элемента

МАССИВЫ МОГУТ РАБОТАТЬ и как очередь и как стек.
Мы можем добавлять / удалять элементы как в начало, так и в конеец массива.


МЕТОД push - добавляет элемент в конец массива

let arr = ['Ваня', 'Влад', 'Оля',]
arr.push('Вася')
console.log(arr); // (4) ['Ваня', 'Влад', 'Оля', 'Вася']

arr.push('Дима', 'Катя')
console.log(arr); // (6) ['Ваня', 'Влад', 'Оля', 'Вася', 'Дима', 'Катя']

МЕТОД shift - удаляет элемент в начале
так что второй элемент становится первым.

let arr = ['Ваня', 'Влад', 'Оля',]
arr.shift()
console.log(arr); // ['Влад', 'Оля',]

МЕТОД pop - удаляет последний элемент в массиве

let arr = ['Ваня', 'Влад', 'Оля',]
arr.pop()
console.log(arr); //(2) ['Ваня', 'Влад']

МЕТОД unshift - добавляет элемент в начало массива

let arr = ['Ваня', 'Влад', 'Оля',]
arr.unshift('Вася');
console.log(arr); // (4) ['Вася', 'Ваня', 'Влад', 'Оля']

arr.unshift('Дима', 'Катя')
console.log(arr); // (6) ['Дима', 'Катя', 'Вася', 'Ваня', 'Влад', 'Оля']

Методы push / pop  выполняются быстро, а методы shift / unshift - медленно

пример с unshift

просто добавить элемент с номером 0 недостаточно,
  нужно также заново пронумеровать остальные элементы.

unshift выполняет 3 действия:
1. добавляет элемент с индексом 0
2. сдивгает все элементы вправо, заново пронумировывает их,
  заменив 0 на 1, 1 на 2 и т.д.
3. обновить св - во length

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
  больше операция с памятью.

метод push - не нужно ничего перемещать,
  также не нужно заново нумеровать элементы.достаточно увеличить значение length.



    УДАЛЕНИЕ / ДОБАВЛЕНИЕ / ИЗМЕНЕНИЕ КОНКРЕТНЫХ ЭЛЕМЕНТОВ

let arr = ['Ваня', 'Оля', 'Влад']

delete arr[1]
console.log(arr); // (3) ['Ваня', empty, 'Влад']
console.log(arr[1]); // undefined
console.log(arr.length); // 3


МЕТОД splice
ПОзволяет добавлять, удалять и заменять элементы.
синтаксис Array.splice(index[, deleteCount, elem1, ... , elemN])

Удаляет элемент

let arrOne = ['Vlad', 'Ivan', 'Olga',]
//начиная с первой позиции  удаляет один элемент
arrOne.splice(1, 1)
console.log(arrOne); // (2) ['Vlad', 'Olga']


Удаляет элемент и возвращает его в переменную
let arrTwo = ['Vlad', 'Ivan', 'Olga',]
let removed = arrTwo.splice(1, 1)
console.log((removed)); //['Ivan']

Заменяет элементы

let arrThree = ['Vlad', 'Ivan', 'Olga',]
//начиная с нулевой позиции, заменяем один элемент
arrThree.splice(0, 1, 'Inna')
console.log(arrThree); //(3) ['Inna', 'Ivan', 'Olga']

Добавляет элементы

let arrFour = ['Vlad', 'Ivan', 'Olga',]
//начиная с первой позиции,добавляет два элемента
arrFour.splice(1, 0, 'Inna', 'Boris')
console.log(arrFour); // (5) ['Vlad', 'Inna', 'Boris', 'Ivan', 'Olga']

Удаляет элемент
let arrFive = ['Vlad', 'Ivan', 'Olga',]
//начиная с последней позиции, удаляет один элемент
arrFive.splice(-1, 1)
console.log(arrFive); // (2) ['Vlad', 'Ivan']

МЕТОД slice
создает новый массив, в который копирует часть либо весь массив
синтаксис arr.slice([start], [end]) не включая[end]

копирует часть массива
let arrOne = ['Vlad', 'Ivan', 'Olga',]
//начиная с первой позиции 'Vlad'
// до второй позиции 'Ivan' (не включая)
let arrTwo = arr.One.slice(1, 2)
console.log(arrTwo); // ['Ivan']

// начиная с предпоследней позиции 'Ivan'
// до последней 'Olga' (не включая)
let arrThree = arrOne.slice(-2, -1)
console.log(arrThree); // ['Ivan']


// копирует весь массив
let arrFour = arrOne.slice()
console.log(arrFour); // (3) ['Vlad', 'Ivan', 'Olga',]


МЕТОД concat
Создает новый массив, в который копирует данные из других массивов
и дополнительные значения(в конец массива)
Синтаксис arr.concat(arg1, arg2 ...)

let arrOne = ['Vlad', 'Ivan', 'Olga',]
let arrTwo = arrOne.concat('Петя')
console.log(arrTwo); // (4) ['Vlad', 'Ivan', 'Olga', 'Петя']



ПОИСК В МАССИВЕ

МЕТОДЫ indexof / lastIndexOf и includes
аналоги строковым методам

1. arr.indexOf(item, from) ищет item, начиная с индекса from,
  и возвращает индекс, на котором  был найден искомый элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) - то же самое, но ищет справа налево.
3. arr.includes(item, from) - ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

let arr = ['Vlad', 'Ivan', 'Olga',]

//indexOf
console.log(arr.indexOf('Ivan')); // 1
console.log(arr.indexOf('Olgaffff')); // -1
console.log(arr.indexOf('Ivan', 2)); // -1

//includes
console.log(arr.includes('Ivan')); // true
console.log(arr.includes('Ivanfeef')); // false
console.log(arr.includes('Ivan', 2)); // false


МЕТОДЫ find / findIndex
Поиск в массиве объектов с определнным условием

синтаксис
let result = arr.find(function (item, index, array) {
  //если true - возвращается текущий элемент и перебор прерывается
  //если все итерации оказались ложными, возвращается undefined
})

let arr = [
  { name: 'Вася', age: 36 },
  { name: 'Коля', age: 19 },
  { name: 'Оля', age: 'не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
  return item.age === 18
})

// let resultOne = arr.find(item => item.age === 18)
console.log(resultOne); //{name:'Коля', age: 18 }

findIndex
let resultTwo = arr.findIndex(item => item.age === 18)
console.log(resultTwo); //1

МЕТОД filter
метод ищет все элементы, на которых функция - колбэк вернет true

let result = arr.filter(function (item, index, array) {
  если true - элемент добавляется к результату, и перебор продолжается
  возвращается пустой массив, в случае если ничего не найдено
})

let arr = [
  { name: 'Вася', age: 36 },
  { name: 'Коля', age: 18 },
  { name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
  return item.age >= 18
})

console.log(result); //(2) [{…}, {…}]  0:{name: 'Вася', age: 36} , 1: {name: 'Коля', age: 18} , length: 2


СОРТИРОВКА МАССИВОВ

МЕТОД sort(fn)
Сортирует массив на месте, меняя в нем порядок элементов.

 Сортировка слов
let arrOne = ['Миша', 'Влад', 'Вася',]
console.log(arrOne.sort()); //(3) ['Вася', 'Влад', 'Миша']

Сортировка чисел

let arrTwo = [8, 22, 1,]
console.log(arrTwo.sort()); // (3) [1, 22, 8]

По умолчанию все элементы сортируются как строки
Для строк применяется лексикографический порядок,
  и действительно выходит, что '8' > '22'
console.log("8" > "22") // true

функция сортировки
function compareNumeric(a, b) {
  console.log(`Сравниваем ${a} и ${b}`);
  // if (a > b) return 1;
  // if (a == b) return 0;
  // if (a < b) return -1

  можно так
  //return a - b
}
  еще проще
console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric)); // (3) [1, 8 , 22]

МЕТОД reverse
меняем порядок элементов в массиве на обратный

let arrOne = ['Миша', 'Влад', 'Вася',]
console.log(arrOne.reverse()); // (3) ['Вася', 'Влад', 'Миша',]

ПРЕОБРАЗОВАНИЕ МАССИВОВ

МЕТОД map
вызывает функцию для каждого элемента массива
и возвращает массив результатом выполнения этой функции

let result = arr.map(function (item, index, array) {
  возвращается новое значение вместо элемента
})

let arr = ['Миша', 'Влад', 'Вася',]

let result = arr.map(function (item, index, array) {
  return item[0]
})
// let result = arr.map(item => item[0])
console.log(arr);// ( 3 ) ['Миша', 'Влад', 'Вася',]
console.log(result); (3)['М', 'В', 'В']


МЕТОДЫ split и join

Метод split преобразовывает строку в массив по заданному разделителю
Синтаксис: structuredClone.split(delim)

let str = 'Ваня,Миша,Оля'

let arr = str.split(',')
console.log(arr); // (3) ['Ваня', 'Миша', 'Оля']

можно ограничить количество объектов
которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo); // (2) ['Ваня', 'Миша']

Метод join преобразовывает массив в строку с заданным разделителем
Синтаксис arr.join(glue)

let arr = ['Ваня', 'Миша', 'Оля']
let str = arr.join(',') //МОЖЕМ УКАЗАТЬ ЛЮБОЙ РАЗДЕЛИТЕЛЬ
console.log(str); // 'Ваня,Миша,Оля'

//Получение строки из массива 
let arrTWo = ['Ваня', 'Миша', 'Оля']
console.log(String(arrTwo)); // 'Ваня,Миша,Оля'

ПРОВЕРКА Array.isArray()

let obj = {}
let arr = []

console.log(typeof obj); // object
console.log(typeof obj); // object

// Как же нам узнать где массив а где нет?

if (Array.isArray(arr)) {
  console.log('ЭТО массив!');  // это МАССИВ!
} else {
  console.log('ЭТО не массив');
}

ПЕРЕБОР ЭЛЕМЕНТОВ

let arr = ['Ваня', 'Миша', 'Оля'];
console.log(arr.length); // 3

ЦИКЛ for

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //'Ваня', 'Миша', 'Оля'
}

ЦИКЛ for...of
Можно использовать для вызова значений

let arr = ['Ваня', 'Миша' , 'Оля']

for (let arrITem of arr) {
  console.log(arrItem); // 'Ваня', 'Миша', 'Оля'
}

МЕТОД ПЕРЕБОРА forEach
выполняет функцию для каждого элемента массива

arr.forEach(function(item, index,array) {
  // ... делать что-то с item
})

let arr = ['Ваня', 'Миша' , 'Оля']

arr.forEach(function (item, index, arary)) {
  console.log(`${item} находится на ${index} позиции в ${array}`);
}

let arr = ['Ваня', 'Миша' , 'Оля']
arr.forEach(show)

function show(item) {
  console.log(item); // Ваня миша оля
}

МЕТОДЫ reduce/reduceRight

let value = arr.reduce(function(previousValue, item, index, array {
  // ...
}, [initial])

previousValue - результат предыдущего вызова функции
равен initial при первом вызовее (если передан в initial)
item - очередноц элемент массива
index - его индекс
array - его массив


let arrOne = [1, 2, 3, 4]
let reduceValueOne = arrOne.reduce(function (previousValue, item, index,array) {
  return item + previousValue
}, 0)
console.log(reduceValueOne);
