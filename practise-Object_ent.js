// 1. Перечисление всех ключей объекта

//Напишите функцию getKeys, которая принимает объект и возвращает массив всех ключей объекта, отсортированных по алфавиту.

function getKeys(obj) {
  return Object.keys(obj).sort()
}

console.log(getKeys({ name: "Alice", age: 25, city: "Paris" }))


// 2. Проверка наличия значения в объекте

// Напишите функцию hasValue, которая проверяет, есть ли в объекте хотя бы одно свойство с заданным значением. Функция должна вернуть true, если значение найдено, и false в противном случае.

function hasValue(obj,value) {
  return Object.values(obj).includes(value)
}

hasValue({ name: "Alice", age: 25, city: "Paris" }, 25);
// Должно вернуть: true

hasValue({ name: "Alice", age: 25, city: "Paris" }, "London");
// Должно вернуть: false

// 3. Сумма всех числовых значений

// Напишите функцию sumValues, которая принимает объект с числовыми значениями и возвращает сумму всех этих чисел.

function sumValues(obj) {
  return Object.values(obj).reduce((acc, value) => acc + value, 0)
}

console.log(sumValues({ a: 1, b: 2, c: 3 })) //6

// 4. Преобразование объекта в массив пар [ключ, значение]

// Напишите функцию objectToArray, которая принимает объект и возвращает массив его пар ключ-значение.

function objectToArray(obj) {
  return Object.entries(obj)
}

console.log(objectToArray({ name: "Alice", age: 25 }));


// 5. Инвертирование объекта

// Напишите функцию invertObject, которая принимает объект и возвращает новый объект, где ключи и значения меняются местами.

function invertObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
  }, {})
}

console.log(invertObject({ name: "Alice", age: 25 }))

// 6. Поиск максимального значения среди всех значений объекта

// Напишите функцию findMaxValue, которая находит максимальное значение среди всех числовых значений объекта.

function findMaxValue(obj) {
  return Math.max(...Object.values(obj));
}

console.log(findMaxValue({ a: 1, b: 5, c: 3 }))

// 7. Удаление ключа из объекта

//Напишите функцию removeKey, которая принимает объект и строку (ключ), и удаляет это свойство из объекта. Функция должна возвращать новый объект без этого ключа.

function removeKey(obj, key) {
  const newObj = { ...obj}
  delete newObj[key]
  return newObj
}

removeKey({ name: "Alice", age: 25, city: "Paris" }, "age");

// 8. Группировка значений по ключам

// Напишите функцию groupBy, которая принимает массив объектов и ключ, и возвращает объект, 
// где ключи — это значения указанного свойства из каждого объекта, а значения — это массивы объектов с таким свойством.

function groupBy(arr, key) {
  return arr.reduce((result, obj) => {
    const keyValue = obj[key];
    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(obj);
    return result;
  }, {});
}

groupBy([{ name: "Alice", city: "Paris" }, { name: "Bob", city: "Paris" }, { name: "Charlie", city: "London" }], "city");
// Должно вернуть:
// {
//   Paris: [{ name: "Alice", city: "Paris" }, { name: "Bob", city: "Paris" }],
//   London: [{ name: "Charlie", city: "London" }]
// }

// 9. Создание нового объекта с ключами из массива

//Напишите функцию arrayToObject, которая принимает массив строк и возвращает объект, где эти строки будут ключами, а значениями — null.

function arrayToObject(arr) {
  return arr.reduce((obj, key) => {
    obj[key] = null
    return obj
  }, {})
}

arrayToObject(["name", "age", "city"]);
// Должно вернуть: { name: null, age: null, city: null }

// 10. Подсчет количества каждого значения

//Напишите функцию countValues, которая принимает объект и возвращает объект, 
// где ключи — это значения из исходного объекта, а значения — это количество их повторений.

function countValues(obj) {
  return Object.values(obj).reduce((count, value) => {
    count[value] = (count[value] || 0) + 1
    return count
  },{})
}

countValues({ a: 1, b: 2, c: 1, d: 3, e: 2 });
// Должно вернуть: { 1: 2, 2: 2, 3: 1 }