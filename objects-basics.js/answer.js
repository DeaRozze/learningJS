Объект - это набор св - в.Каждое св - во состоит из названия и значения. 
Название может быть строкой или символом, а зачение может быть любым.

Создаются объекты с помощью конструктора Object

const book = new Object(
  { title: 'Война и мир', author: 'Лев Толстой' }
)

и с помощью ЛИТЕРАЛЬНОЙ ЗАПИСИ.
пустой объект без св - в можно создать парой фигурных скобок

const cat = {}

когда нужно создать объект со св - вами, то их описывают внутрни фигурных скобок.
  Св - ва указываются в формате имяСвойста: значение, между св - вами ставится запятая

const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  pages: 1274,
  isFinish: true
}

ЗНАЧЕНИЕМ МОЖЕТ БЫТЬ ДРУГОЙ ОБЪЕКТ ИЛИ МАССИВ:

const cat = {
  kittens: ['Беляш', 'Михаил', 'Чарли',],
  favouriteToy: {
    name: 'мячик',
    size: 'маленький'
  },
}

или даже функция

const cat = {
  name: 'Tom',
  meow: function () {
    console.log('мяу-мяу');
  },
}
cat.meow

СВ - ВА можно добавлять и после создания объекта:

Свойства объекта — это переменные, которые принадлежат объекту.

const cat = {}
cat.name = 'Simon'
console.log(cat); //Simon

!!Несмотря на то, что переменная cat объявлена неизменяемой, свойства хранимого объекта можно менять.
Дело в том, что объект хранится по ссылке.Изменение внутреннего состояния не изменяет ссылку.

Объявление const защищает от изменений только саму переменную user, а не ее содержимое.

  ЧТЕНИЕ СВ-В:

С ПОМОЩЬЮ ТОЧКИ

  - Значение может быть любого типа.

- Для удаления св - ва мы можем использовать оператор delete:
delete user.age;

-Имя св - ва может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки


КВАДРЫТНЫХ СКОБОК

user.likes birds = true //Вызовет синтаксическую ошибку

  - Для св - в, имена которых состоят из нескольких слов, доступ к значению < через точку > не работает

    - ключ не должен иметь пробелы, не начинался с цифры и не содержал специальные символы, кроме $ и _

      - Квадратные скобки также позволяют обратитьсмя к свойству, имя которого может быть результатом выражения. 
Например имя св - ва может хранится в переменной:
let key = "likes birds"

//то же самое что и user["likes birds"] = true
user[key] = true

let user = {};
//присваиваем занчение свойству
user['likes birds'] = true;

//получение значения свойства
alert(user['likes birds']) //true

//удаление свойства
delete user['likes birds'];

ОБРАТИТЕ ВНИМАНИЕ что строка в квадратных скобках заключена в кавычки


ДОБАВЛЕНИЕ И ИЗМЕНЕНИЕ СВ - В

const book = {
  title: 'Капитанская дочка'
}

//добавляем новое св-во
book.author = 'А. С. Пушкин'

//изменяем св-во
book.title = 'Сказка о царе Салтане'
console.log(book)
// { title: 'Сказка о царе Салтане', author: 'А. С. Пушкин'}

Чаще всего свойства не удаляют, а сбрасывают значение, устанавливая undefined или подходящее по смыслу:

const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  pages: 1274,
  isFinished: true,
  usersReading: [1946, 1293, 7743]
}

book.usersReading = undefined
book['isFinished'] = undefined
// {
//    title: 'Война и мир',
//    author: 'Лев Толстой',
//    pages: 1274
//    isFinished: undefined,
//    usersReading: undefined
// }


ИМЕНА СВ - В

ИНОГДА ИХ НАЗЫВАЮТ КЛЮЧИ, ПОЛЯ.МОГУТ БЫТЬ СТРОКАМИ ИЛИ СИМВОЛАМИ.
ЕСЛИ ИСПОЛЬЗОВАТЬ ДРУГОЙ ТИП ДАННЫХ, ТО ОН БУДЕТ ПРИВЕДЕН К СТРОКЕ С ПОМОЩЬЮ ВЫЗОВА МЕТОДА toString()

const obj = {}
const key = {}
obj[key] = 'value for the object key'

console.log(obj)
// { '[object Object]': 'value for the object key' }

Чтение свойств 
Существует два вида синтаксиса для обращения к значению свойства объекта.В обоих случаях используется имя свойства.

Самый распространённый способ — с помощью точки:

Если прочитать свойство, которого нет у объекта, вернётся undefined:

const signature = book.signature

console.log(signature)
// undefined

Добавление и изменение свойств
Созданный объект можно изменять: добавлять, изменять и удалять свойства.

Для добавления и изменения свойств используется одинаковый синтаксис.
Нужно обратиться к свойству и присвоить в него значение с помощью стандартного оператора присваивания =.
Если свойство не существует, оно будет создано:

const book = {
  title: 'Капитанская дочка'
}

// Добавляем новое свойство
book.author = 'А. С. Пушкин'

// Изменяем существующее
book.title = 'Сказка о царе Салтане'

console.log(book)
// { title: 'Сказка о царе Салтане', author: 'А. С. Пушкин'}


Синтаксис с квадратными скобками работает и здесь:

const book = {
  title: 'Капитанская дочка'
}

// Добавляем новое свойство
book['author'] = 'А. С. Пушкин'

// Изменяем существующее
book['title'] = 'Сказка о царе Салтане'

console.log(book)
// { title: 'Сказка о царе Салтане', author: 'А. С. Пушкин'}


Удаление свойств Скопировать ссылку "Удаление свойств"
Для удаления свойств используют оператор delete:

const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  pages: 1274,
  isFinished: true,
  usersReading: [1946, 1293, 7743]
}

delete book.usersReading
delete book['isFinished']

console.log(book)
// { title: 'Война и мир', author: 'Лев Толстой', pages: 1274 }

Чаще всего свойства не удаляют, а сбрасывают значение, устанавливая undefined или подходящее по смыслу:

const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  pages: 1274,
  isFinished: true,
  usersReading: [1946, 1293, 7743]
}

book.usersReading = undefined
book['isFinished'] = undefined
// {
//    title: 'Война и мир',
//    author: 'Лев Толстой',
//    pages: 1274
//    isFinished: undefined,
//    usersReading: undefined
// }

Если ключ содержит пробел, то обращаться к нему возможно только через синтаксис квадратных скобок:

const obj = {
  'the answer': 42
}

console.log(obj['the answer'])
// 42


Сравнение объектов Скопировать ссылку "Сравнение объектов"
Объекты — ссылочный тип данных.Сравнению по ссылке посвящена отдельная статья.

При сравнении двух объектов JavaScript сравнивает не значения свойств этих объектов, а адреса в памяти, по которым эти объекты хранятся.
Поэтому любое сравнение двух объектов будет возвращать false, даже если они выглядят одинаково:

// Создаётся один объект
const book = { title: 'Дюна' }

// Создаётся другой объект
const anotherBook = { title: 'Дюна' }

console.log(book === anotherBook)
// false


Сравнение будет возвращать true, только если мы сравниваем переменные, указывающие на один и тот же объект:

// Создаётся один объект
const book = { title: 'Дюна' }

// В anotherBook записывается ссылка на объект
const anotherBook = book

console.log(book === anotherBook)
// true

КЛОНИРОВАНИЕ И ОБЪЕДИНЕНИЕ, Object.assign

Также мы можем использовать для этого метод Object.assign.

  Синтаксис:

Object.assign(dest, [src1, src2, src3...])

  - Первый аргумент dest — целевой объект.
- Остальные аргументы src1, ..., srcN(может быть столько, сколько необходимо) являются исходными объектами
  - Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest.Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
- Возвращает объект dest.

Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

  let user = {
    name: "John",
    age: 30
  };

let clone = Object.assign({}, user);

Как определить существует нужное свойство в объекте или нет
Чтобы определить, существует ли свойство, используйте оператор in.Он возвращает true, 
если объект имеет свойство с заданным именем, и false в противном случае.Также проверяется, есть ли свойство в прототипе объекта.

const person = {
  name: 'Igor',
  age: 30,
};

console.log('name' in person); // true
console.log('height' in person); // false
console.log('toString' in person); // true - наследуется от Object.prototype

Как перебрать свойства объекта
Цикл for…in — это способ перебрать все свойства объекта и выполнить некоторое действие для каждого из них:

for (var key in person) {
  console.log(key + ": " + person[key]);
}
// name: Alice
// age: 26
// sayHello: function () {
//      console.log("Hello, I'm " + this.name);
//   }
// height: 170


Функцию, которая является свойством объекта, называют методом этого объекта.

Для доступа к информации внутри объекта метод может использовать ключевое слово this.

Значение this – это объект «перед точкой», который используется для вызова метода.

Что такое this

Ключевое слово this одна из особенностей JS для реализации объектно - оринтированного программирования.Особенность в том что, это слово может означать разные объекты в зависимости от того где она написана.

  this - это ссылка на какой то объект.Объект, на который ссылается this может меняться в зависимости от контекста.


    Как "потерять" this ?

      Если мы решим скопировать ссылку на объект в другую переменную

      Как "не терять" this ?
  Простой вызов

в общем случае this указывает на глобальный объект.Для браузера такой объект - это само окно браузера, поэтому если набрать
console.log(this) //Window

ЕСЛИ ВКЛЮЧЕН СТРОГИЙ РЕЖИМ, ТО this БУДЕТ РАВНО undefined.


Чему равен this в свойствах объекта ?

  Если функция получена как свойство объекта и сразу же используется, то this будет равно этому объекту.


  Чему равен this в геттерах / сеттерах объекта ?



  Чему равен this внутри функции - стрелки ?

    Стрелочные функции особенные: у них нет своего «собственного» this.Если мы ссылаемся на this внутри такой функции, то оно берётся из внешней «нормальной» функции.

      Итого
Функции, которые находятся в свойствах объекта, называются «методами».
Методы позволяют объектам «действовать»: object.doSomething().
Методы могут ссылаться на объект через this.
Значение this определяется во время исполнения кода.

При объявлении любой функции в ней можно использовать this, но этот this не имеет значения до тех пор, пока функция не будет вызвана.
Функция может быть скопирована между объектами(из одного объекта в другой).
Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова является object.
Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this.Когда внутри стрелочной функции обращаются к this, то его значение берётся извне.

const obj = {
  a: 'a',
  b: 'b',
  c: 'c',
}

const { a, b, c, ...obj4 } = obj

console.log(obj4);
KATANA - Пустая строка ''

КОНСТРУТОР, оператор new

  Функция - конструктор
Функции - конструкторы технически являются обычными функциями.Но есть два соглашения:

Имя функции - конструктора должно начинаться с большой буквы.
  Функция - конструктор должна выполняться только с помощью оператора "new".

    Например:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
Когда функция вызывается как new User(...), происходит следующее:

-Создаётся новый пустой объект, и он присваивается this.
- Выполняется тело функции.Обычно оно модифицирует this, добавляя туда новые свойства.
- Возвращается значение this.

Обычно конструкторы не имеют оператора return.Их задача – записать все необходимое в this, и это автоматически становится результатом.

Но если return всё же есть, то применяется простое правило:

При вызове return с объектом, вместо this вернётся объект.
При вызове return с примитивным значением, оно проигнорируется.
Другими словами, return с объектом возвращает этот объект, во всех остальных случаях возвращается this.

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert(new BigUser().name);  // Godzilla, получили этот объект


А вот пример с пустым return

function SmallUser() {

  this.name = "John";

  return; // <-- возвращает this
}

alert(new SmallUser().name);  // John

// let user = {
//   name: 'Vitality',
//   age: 30,
//   sayHi() {
//     alert('Hello ' + this.name) //this === user
//   }
// }

// user.sayHi = function() {
//   alert('Hello')
// }

// function sayHi() {
//   alert('Hello')
// }

// user.sayHi = sayHi


// function sayHi() {
//   alert(this.name)
// }

// let user = { name: 'Vitaliy' }
// let admin = { name: 'Sergey' }

// user.f = sayHi
// admin.f = sayHi

// user.f()
// admin.f()

// function newF() {
//   const sayHi = () => {
//     alert(this.name)
//   }
//   sayHi()
// }

// let user = { name: 'Vitaliy' }
// let admin = { name: 'Sergey' }

// user.f = sayHi
// admin.f = sayHi

// user.f()
// admin.f()