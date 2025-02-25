firstPerson = {
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

function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)