let obj1 = { a: 1 };
let obj2 = { a: 1 };
let map = new Map();
map.set(obj1, 'value1');
map.set(obj2, 'value2');
console.log(map.size) // 2 


//Создай Map с ключами различных типов данных (число, строка, объект).
//Добавь туда несколько элементов и выведи их значения.

const map = new Map([['numb', 1], [1, 2], [{ obj: 4 }, 3]])

map.set('gdssgd', true)
map.set(234, 4244)

console.log(map.entries())

for (const [key, value] of map.entries()) {
  console.log(key, value);
}


//Напиши код, который проверяет, содержится ли объект в Map

let map = new Map();
let obj = { key: 'value' };
map.set(obj, 'данные');
console.log(map.has(obj))

//Создай Set из массива, содержащего повторяющиеся элементы, и удали дубликаты.

let arr = [1, 2, 3, 3, 4, 4, 5];
let set = new Set(arr)
console.log(set)


//Напиши функцию, которая принимает массив строк и возвращает только уникальные строки, 
//используя Set

function uniqueStrings(arr) {
  return new Set(arr)
}
console.log(uniqueStrings(['a', 'b', 'a', 'c', 'b'])); // ['a', 'b', 'c']


///Напиши код, который добавляет значения в Set, удаляет одно из них, а затем выводит оставшиеся

const set = new Set([1, 2, 3, 3, 4, 4, 5])
set.delete(2)
console.log(set)


//Напиши код, который подсчитывает количество уникальных слов в строке, используя Set.

let str = 'яблоко банан яблоко апельсин банан';
let set = new Set(str.split(' '))
console.log(set.size)

//Создай Map, в котором ключами будут объекты, а значениями — строки. Перебери этот Map и выведи все ключи и значения.

let map = new Map();
let obj = { id: 1 }
let obj2 = { id: 2 }

map.set(obj, 'first')
map.set(obj2, 'two')


map.entries()

map.forEach((value, key) => console.log(key, value));

// У вас есть объект, где ключи — это имена пользователей, а значения — их возраст. 
// Напишите функцию, которая принимает этот объект и возвращает новый объект, где возраст каждого пользователя будет увеличен на 1, 
// а имя пользователя будет записано в верхнем регистре.

const users = {
  alice: 25,
  bob: 30,
  charlie: 35
};

function usersAges() {
  const updatedUsers = Object.entries(users).reduce((res, [name, age]) => {
    res[name.toUpperCase()] = age + 1
    return res
  }, {})
  return updatedUsers
}


const updatedUsers = usersAges(users);
console.log(updatedUsers);



// Пример Set с объектами

const obj1 = { id: 1, name: 'Alice' };
const obj2 = { id: 2, name: 'Bob' };
const obj3 = { id: 3, name: 'Charlie' };


const set = new Set([
  [obj1, obj2],
  [obj2, obj3],
  [obj1, obj2],
]);

console.log(set); // Set { [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ], [ { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ], [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ] }

//  Сравнение с идентичными массивами

const obj1 = { id: 1, name: 'Alice' };
const obj2 = { id: 2, name: 'Bob' };


const array1 = [obj1, obj2];
const array2 = [obj1, obj2];


const set = new Set();
set.add(array1);
set.add(array2);

console.log(set); // Set { [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ], [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ] }