// Извлеки первое число 1 в переменную a, 
// Число 3 во вложенном массиве — в переменную b,
// Число 5 — в переменную c.

const numbers = [1, [2, 3], [4, [5, 6]]];

let [a,[,b],[,[c,]]] = numbers

console.log(a)
console.log(b)
console.log(c)


// вытащить два значения в массиве 

const numbers = [1,2,3,5,6]
const [a,b] = [numbers.slice(0,2),...numbers]

console.log(a)
console.log(b)


// Деструктурировать массив как объект и получить не undefined значения

const arr = [10, 20, 30, 40, 50];
const {0:first, 1:two, 2:three, 3:four, 4:five} = arr

console.log(Object.fromEntries(Object.entries(arr)))


// Деструктурировать объект как массив . Применить Symbol.iterator чтобы деструкторизировать без ошибок

const obj = {
  one: 10,
  two: 20,
  three: 30,
};
obj[Symbol.iterator] = function () {
  const key = Object.keys(this);
  let i = 0;
  return {
    next: () => {
      if (i < key.length) {
        return { done: false, value: this[key[i++]] };
      } else {
        return { done: true };
      }
    },
  };
};
const [a, b, c] = obj;
console.log(a, b, c);

// Деструктуризация с вложенными массивами
// У вас есть массив, содержащий информацию о нескольких пользователях:

const users = [
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'Los Angeles'],
  ['Charlie', 35, 'Chicago']
];

// Используя деструктуризацию, извлеките имена и города всех пользователей в отдельные массивы names и cities.// 
const names = []
const cities = []
for (let [name,,city] of users) {
    names.push(name)
    cities.push(city)
}

console.log(names)
console.log(cities)