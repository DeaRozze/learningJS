// 1. Деструктуризация массивов(извлекать элементы из массива в переменные)

// let arr = [1, 2, 3, 4, 5]

// let [a, b, c] = arr

// console.log(a);
// console.log(b);
// console.log(c);

// с пропуском элемента

// let arr2 = [1, 2, 3, 4]

// let [a, , , d] = arr2

// console.log(a);
// console.log(d);

// с присваиванием по умолчанию

// let arr = [1]

// let [a, b = 2] = arr

// console.log(a);
// console.log(b);


// 2. Деструктуризация объектов (позволяет извлекать по ключам)

// let obj = {name: 'Vlad', age: 23}

// let {name, age} = obj

// console.log(name);
// console.log(age);

// Переименование переменных

// let obj2 = {name: 'vlad', age: 23}

// let {name: userName, age: userAge} = obj2
// console.log(userName);
// console.log(userAge);

//присваивание по умолчанию

// let obj = { name: 'alice'}

// let {name, age = 10} = obj

// console.log(name);
// console.log(age);

// 3. Деструктуризация в функциях (более компактный код)

// объект в параметре функции

// function greet({name, age}) {
//   console.log(`Hello, ${name}. You are ${age} years old`)
// }

// let person = {name: 'Vlad', age: 23}

// greet(person);


//массив в параметре функции
// function sum([a, b]) {
//   return a + b
// }

// let numbers = [3, 5]
// console.log(sum(numbers)); //8

// 4. Деструктуризация вложенных объектов и массивов

//вложенный объект

// let person = {
//   name: 'Vlad',
//   adress: {city: 'New York', zip: '10001'}
// }

// let {name, adress: {city, zip}} = person

// console.log(name);
// console.log(city);
// console.log(zip);

//С вложенным массивом

// let arr = [1, [2,3], 4]

// let [a, [b,c], d] = arr

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//5. Деструктуризация с rest оператором (собирает оставшиеся элементы в массив или объект)

// let arr = [1,2,3,4,5]

// let [a, b, ...rest] = arr
// console.log(a);
// console.log(b);
// console.log(rest);


// let person = {name: 'Vlad', age: 25, city: 'Moscow'}

// let {name, ...rest} = person

// console.log(name);
// console.log(rest);


//spread оператор(используется для 'распаковки' элементов из массива или объекта в новые структуры данных)
//используется для копирования данных или объединения коолекций

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let combinedArr = [...arr1, ...arr2]
// console.log(combinedArr); //(6) [1, 2, 3, 4, 5, 6]

// let obj1 = {a: 1, b:2}
// let obj2 = {c: 3, d:4}

// let mergedObj = {...obj1, ...obj2}

// console.log(mergedObj); //a: 1, b: 2, c: 3, d: 4}

// let obj = {name: 'Vlad', age: 23}

// let copiedObj = {...obj}

// console.log(copiedObj); //{name: 'Vlad', age: 23}

//Задачи на тему деструктуризации 

// Задача 1. 

// function getPersonInfo({name, age, location}) {
//   return `Имя: ${name}, Возраст: ${age}, Место: ${location}`
// }

// let person = {name:'Vlad', age: 23, location: 'Moscow'}

// getPersonInfo(person)

// Задача 2.

// let arr = [10, 20, 30, 40]

// let [a, b, ...rest] = arr

// console.log(a);
// console.log(b);
// console.log(rest);

//Задача 3

// let person2 = {
//   name: 'Vald',
//   conctact: { phone: '1234', email: 'john@example.com' },
//   adress: 'Moscow',
// }

// let { name, conctact: { phone, email }, adress } = person2

// console.log(name);
// console.log(phone);
// console.log(email);
// console.log(adress);

//Задача 4

// function getTotalPrice({price,quantity}) {
//   return price * quantity
// }
// let item = {item:'laptop', price: 1000, quantity: 2}
// console.log(getTotalPrice(item));




// Задача 5

// let str = ['apple', 'banan', 'cherry']

// let [fruit1, fruit2, fruit3] = str

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);


// const person = { name: "Alice", age: 25, country: "USA" };

// let {name, age} = person

// console.log(name);
// console.log(age)


const car = { brand: "Toyota", model: "Corolla", year: 2020 };

let{brand: make, model: type} = car

console.log(make);
console.log(type);


const user = { username: "john_doe", email: "john@example.com" }

let {username, phone = 'gsgddg'} = user
console.log(username);
console.log(phone);



const colors = ["red", "green", "blue", "yellow"];

let [first,second] = colors

console.log(first);
console.log(second);


// const product = {
//   id: 1,
//   details: { name: "Laptop", brand: "Apple", price: 1200 },
// };

// let {details: {name, brand}} = product

// console.log(name);
// console.log(brand);


// const employee = { name: "Mike", position: "Developer", department: "IT", age: 28 };

// let {name, position, ...otherInfo} = employee

// console.log(name);
// console.log(position);
// console.log(otherInfo);

// function greet({name, age}) {
//   console.log(`Hello, my name is ${name} and I am ${age} years old`);
// }

// let person33 = {name:'Vlad', age:30}

// greet(person33)


//Задача 1: Деструктуризация с вложенными массивами



const users = [
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'Los Angeles'],
  ['Charlie', 35, 'Chicago']
];

const names = []
const cities = []

for (const [name, age, city] of users) {
  names.push(name)
  cities.push(city)
}

console.log(names);
console.log(cities);



function createUser({name, age = 18, location = 'Unknown'}) {
  return {
    name, age, location
  }
}

const user1 = createUser({name: 'Alice', age: 25, location:'New York'})
const user2 = createUser({name: 'Bob'})

console.log(user1);
console.log(user2);
