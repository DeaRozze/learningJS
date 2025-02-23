// const user = {
//   name: 'Vlad',
//   age: 30
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name')); // {value: 'Vlad', writable: true, enumerable: true, configurable: true} все true

// // Object.defineProperty(user, 'name', {
// //   writable: false, // запрещаем изменять
// //   enumerable: false, // запрещаем перечислять в циклах
// //   configurable: false // запрещаем удалять
// // })

// // user.name = 'Petr'

// // console.log(user);

// // for (let key in user) {
// //   console.log(user[key]);
// // }

// // delete user.name
// // console.log(user);


// Object.defineProperties(user, {
//   name: {
//     writable: false, // запрещаем изменять
//     enumerable: false, // запрещаем перечислять в циклах
//     configurable: false // запрещаем удалять
//   },
//   age: {
//     writable: false, // запрещаем изменять
//     enumerable: false, // запрещаем перечислять в циклах
//     configurable: false // запрещаем удалять
//   }
// })

// user.name = 'Petr'
// user.age = 35

// console.log(user);

// for (let key in user) {
//   console.log(user[key]);
// }

// delete user.name
// console.log(user);


// const newUser = {
//   name: 'Vlad',
//   age: 23
// }

// Object.freeze(newUser);

// delete newUser.age

// newUser.name = 'Gleb'

// console.log(newUser);

// console.log(Object.isExtensible(newUser));



/////////////////////////////
const laptop = {}

Object.defineProperty(laptop, 'os', {
  value: 'MacOs',
  writable: true,
  configurable: true
})

Object.getOwnPropertyDescriptor(laptop, 'os') // {value: 'MacOs', writable: true, enumerable: false, configurable: true}

Object.defineProperty(laptop, 'os', {
  writable: false
})

Object.getOwnPropertyDescriptor(laptop, 'os') // {value: 'MacOs', writable: false, enumerable: false, configurable: true}

laptop.newOs = 'pro'

Object.getOwnPropertyDescriptor(laptop, 'newOs') // {value: 'pro', writable: true, enumerable: true, configurable: true}

Object.defineProperty(laptop, 'anotherOneOs', {
  value: 'jopa'
})

Object.getOwnPropertyDescriptor(laptop, 'anotherOneOs') // {value: 'jopa', writable: false, enumerable: false, configurable: false}

laptop.anotherOneOs = 'Windows'

console.log(laptop); // {newOs: 'pro', os: 'MacOs', writable: undefined, anotherOneOs: 'jopa'}

////////////////////////////////////////////////////

let user = {
  name: 'Vlad'
}

Object.defineProperty(user, 'name', {
  writable: false
})

user.name = 'Pete'
console.log(user); //{name: 'Vlad'} 

Object.defineProperty(user, 'name', {
  writable: true
})

user.name = 'aboba'

console.log(user); // {name: 'aboba'}

Object.getOwnPropertyDescriptor(user, 'name') // {value: 'aboba', writable: true, enumerable: true, configurable: true}


Object.defineProperty(user, "name", {
  value: "lara",
  // для нового свойства необходимо явно указывать все флаги, для которых значение true
  enumerable: true,
  configurable: true
});

console.log(user.name); // lara
user.name = "Pete";
console.log(user.name) //Pete //writable осталось true с 114 



////////////////


let newUser = {
  name: 'Vlad',
  toString() {
    return this.name
  }
}

Object.defineProperty(newUser, 'toString', {
  enumerable: false
})

for (let key in newUser) {
  console.log(key); // name
}



////////////////

let body = {}

Object.defineProperty(body, 'arms', {
  value: 2,
})

console.log(body); // {arms: 2}

body.arms = 4
body.legs = 2

console.log(body); // {legs: 2, arms: 2}

Object.getOwnPropertyDescriptor(body, 'legs') //{value: 2, writable: true, enumerable: true, configurable: true}

Object.defineProperty(body, 'arms', {
  writable: true
})

Object.getOwnPropertyDescriptor(body, 'arms') //Uncaught TypeError: Cannot redefine property: arms

// Определение свойства как неконфигурируемого – это дорога в один конец. Мы не можем изменить его обратно с помощью defineProperty.


///////////////////////////////////

const obj = {}

Object.defineProperties(obj, {
  name: {
    value: 'Vlad', writable: true
  },
  age: {
    value: 25, writable: true
  }
})

Object.getOwnPropertyDescriptors(obj)
// age: {value: 25, writable: true, enumerable: false, configurable: false}
// name: {value: 'Vlad', writable: true, enumerable: false, configurable: false}

//КЛОНИРОВАНИЕ 
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));


// ГЕТТЕРЫ И СЕТТЕРЫ

let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },

  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
};


///////////////////////////////


const user = {
  name: 'Vlad',
  age: 23,
  get fullName() {
    return `${this.name} ${this.age}`
  }
}

console.log(user.fullName) // Vlad 23

const user = {
  name: 'Vlad',
  age: 23,
  get fullName() {
    return `${this.name} ${this.age}`
  },
  set fullName(value) {
    [this.name, this.age] = value.split(' ')
  }
}

user.fullName = 'Masha 25'

console.log(user.name) // 'Masha'
console.log(user.age) // '25'


////////////////////////////////

let user = {
  name: 'Vlad',
  surname: 'Kud',
}

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`
  },
  set(value) {
    [this.name, this.surname] = value.split(' ')
  }
})

console.log(user.fullName); // Vlad Kud


for (let key in user) alert(key); // name surname



let user = {
  get name() {
    return this._name
  },
  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое, должно быть более 4 символов")
      return
    }
    this._name = value
  }
}

user.name = 'Vlad'
console.log(user.name) //Vlad

user.name = "" // Имя слишком короткое, должно быть более 4 символов



function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // возраст рассчитывается из текущей даты и дня рождения
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // Wed Jul 01 1992 00:00:00 GMT+0400
alert(john.age); //33



const person = {
  _age: 23,
  get age() {
    return this._age;
  },
  set age(value) {
    if (value < 0) {
      console.log("ошибка");
      return;
    }
    this._age = value;
  },
};
person.age = -1; // ошибка
console.log(person.age); // 23


//Геттер возвращает текущее значение.
//Сеттер увеличивает значение только если переданное число больше текущего.
const counter = {
  _count: 0,
  get count() {
    return this._count;
  },
  set count(value) {
    if (value < this._count) return;
    this._count = value;
  },
};
counter.count = 2;
console.log(counter.count); // 2
counter.count = 4;
console.log(counter.count); // 4
counter.count = 2;
console.log(counter.count); // 4