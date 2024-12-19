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
console.log([...set])


//Напиши функцию, которая принимает массив строк и возвращает только уникальные строки, 
//используя Set

function uniqueStrings(arr) {
  return new Set(arr)
}
console.log(uniqueStrings(['a', 'b', 'a', 'c', 'b'])); // ['a', 'b', 'c']


///Напиши код, который добавляет значения в Set, удаляет одно из них, а затем выводит оставшиеся

const set = new Set([1, 2, 3, 3, 4, 4, 5])
set.delete(2)
console.log([...set])


//Напиши код, который подсчитывает количество уникальных слов в строке, используя Set.

let str = 'яблоко банан яблоко апельсин банан';
let set = new Set(str.split(' '))
console.log(set.size)

//Создай Map, в котором ключами будут объекты, а значениями — строки. Перебери этот Map и выведи все ключи и значения.

let map = new Map();
let obj = {id:1}
let obj2 = {id:2} 

map.set(obj,'first')
map.set(obj2,'two')


map.entries()

map.forEach((value, key) => console.log(key, value));