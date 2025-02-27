let firstPerson = {
  sleep() {
    console.log('sleep');
  },
  isSleep: true,
  name: 'Lusic',
  surName: 'aboba',
  get fullName() {
    return `${this.name} ${this.surName}`
  },
  set fullName(value) {
    [this.name, this.surName] = value.split(' ')
  }
}

let person = {
  say: true,
  walk() {
    console.log('go for a walk')
  }
}

let person2 = {
  run: true
}

person2.__proto__ = person
person.__proto__ = firstPerson

console.log(person2.run); //true
console.log(person2.say); //true
person2.walk() // go for a walk

console.log(person2.isSleep); //true
person2.sleep() //sleep


let falsePerson = {
  __proto__: person2
}

falsePerson.walk = function () {
  console.log('make false solution');
}

falsePerson.walk() //make false solution
person2.walk() // все равно go for a walk

console.log(person.fullName) //Lusic aboba

person.fullName = 'margaret mipo'
console.log(person.name); //margaret
console.log(person.surName); // mipo
console.log(falsePerson.fullName)// margaret mipo
console.log(firstPerson.fullName)// Lusic aboba

console.log(person2.hasOwnProperty('say')) //false
console.log(person2.hasOwnProperty('run')) //true


let animal = {
  eats: true,
  walk: 'Ушел гулять'
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal

let rabbit = new Rabbit('какой то кролик')

console.log(rabbit.eats); //true

let secondRabbit = new Rabbit('второй кроль')

console.log(secondRabbit.eats); //true

let user = {
  makingDish: 'Кажется так'
}

Rabbit.prototype = user
let person3 = new Rabbit('надеюсь я понял')
console.log(person3.makingDish); // Кажется так
console.log(rabbit.walk) //Ушел гулять


function Rabbit() { }
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

console.dir(Rabbit.prototype.constructor == Rabbit) // true 
console.dir(Rabbit.prototype.constructor)

function Rabbit() { }
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

let obj = {}

console.log(obj.__proto__ === Object.prototype); //true
// obj.toString === obj.__proto__.toString === Object.prototype.toString

let arr = [1, 2, 3];
// наследует ли от Array.prototype?
alert(arr.__proto__ === Array.prototype); // true

// затем наследует ли от Object.prototype?
alert(arr.__proto__.__proto__ === Object.prototype); // true

// и null на вершине иерархии
alert(arr.__proto__.__proto__.__proto__); // null

let person = {
  walk: true
}

let person2 = Object.create(person)

console.log(person2.walk); // true

console.log(Object.getPrototypeOf(person2) === person); //true

Object.setPrototypeOf(person2, {}); //больше нет в прототипе объекта person

console.log(Object.getPrototypeOf(person2) === person); //false

// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));


let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value" // прототипом будет null


function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");


rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined



let obj1 = {
  name: 'Vlad'
}

let obj2 = {}

Object.setPrototypeOf(obj2, obj1)
Object.getPrototypeOf(obj2)
obj1.hasOwnProperty('name') //true
obj2.hasOwnProperty('name') //false


function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function () {
  console.log(`Hello, ${this.name}, ${this.age}`);
}

let person = new Person('Vlad', 23)
person.greet() // Hello, Vlad,23

Person.prototype.greet = function () {
  console.log(`aboba ${this.name}, ${this.age}`);
}

let person2 = new Person('nikita', 27)
person2.greet() //aboba nikita, 27
person.greet() // aboba Vlad, 23

const animal = {
  speak: function () {
    console.log(`${this.name} makes sound`);
  }
}

const dog = Object.create(animal)
dog.name = 'Dog'
dog.speak() // Dog makes sound
Object.getPrototypeOf(dog)