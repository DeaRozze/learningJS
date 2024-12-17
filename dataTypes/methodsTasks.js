// У вас есть массив ['Яблоко', 'Апельсин', 'Груша']. Как добавить в начало массива «Банан» и в конец — «Киви»?

let arr = ['Яблоко', 'Апельсин', 'Груша']

arr.push('киви')
arr.unshift('Банан')

console.log(arr);


//Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. 

const words = ['hello', 'world', 'this', 'is', 'great']
function smash(words) {
  return words.join(' ')
};
console.log(smash(words));


//Дан массив целых чисел, вернуть новый массив, в котором каждое значение удвоено.

const arr = [1, 2, 3]

const doubles = arr.map((item) => item * 2)

console.log(doubles);


//Определите метод/функцию, которая удаляет из заданного массива целых чисел все значения, содержащиеся во втором массиве.

let arr1 = [1, 1, 2, 3, 1, 2, 3, 4];
let arr2 = [1, 3];

console.log(arr1.filter(item => !arr2.includes(item)));


//Напишите функцию, которая возвращает минимальное и максимальное число из указанного списка/массива.

// Примеры (Вход -> Выход)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

const arr = [2334454, 5]

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
minMax(arr)

// Напишите функцию, которая принимает массив и возвращает новый массив, где удалены все дубликаты.

const arr = [1, 2, 2, 3, 4, 4, 5]// [1, 2, 3, 4, 5]

const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uniqueArr); // [1, 2, 3, 4, 5]


// Напишите функцию для разбиения строки и преобразования ее в массив слов.

const str = 'Robin Singh'

const arr = str.split(' ')

console.log(arr);

// Вам будет дан массив чисел. Вам нужно отсортировать нечетные числа в порядке возрастания, оставив четные числа на своих исходных позициях.

const arr = [5, 8, 6, 3, 4];
const oddSorted = arr.filter(num => num % 2 !== 0)
  .sort((a, b) => a - b);
const res = arr.map(num => (num % 2 !== 0 ? oddSorted.shift() : num));
console.log(res);



// создайте новый массив, в котором будут только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((item) => item % 2 == 0)
console.log(numbers);


// создайте новый массив, в котором будут только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((item) => item % 2 == 0)
console.log(numbers);


// создайте новый массив, в котором каждый элемент будет удвоен

const numbers = [1, 2, 3, 4, 5].map((item) => item * 2)
console.log(numbers);

// Используя метод reduce(), найдите сумму всех элементов массива.

const numbers = [1, 2, 3, 4, 5].reduce((acc, prevValue) => {
  return acc + prevValue
}, 0)
console.log(numbers);

// проверьте, содержит ли массив конкретное значение.
const fruitToCheck = 'banana';
const fruits = ['apple', 'banana', 'orange', 'mango'].includes(fruitToCheck)
console.log(fruits);

// отсортируйте студентов по их оценкам в порядке убывания.

const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 21, grade: 90 },
  { name: 'Charlie', age: 19, grade: 80 }
].sort((a, b) => {
  return b.grade - a.grade
})
console.log(students);


// объедините их в один массив

const array1 = [1, 2, 3].concat([4, 5, 6])
console.log(array1);

// извлеките только названия книг в новый массив.

const books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
]

const titles = books.map(book => book.title)

console.log(titles);

// создайте новый массив, который будет содержать только уникальные значения.

const numbers = [1, 2, 2, 3, 4, 4, 5]
const trueNumb = numbers.filter((item, index) => numbers.indexOf(item) === index)
console.log(trueNumb);


// accumulator

function mediumValue(array) {
  const res = array.reduce(
    (acc, currentV) => acc + currentV, 0
  )
  return res
}
console.log(mediumValue(array1))


//  Удаление и добавление элементов в массив

const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

students.splice(1, 2)

console.log(students);

students.splice(1, 0, 'Frank')

console.log(students);

// Извлечение подмассива

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

const twoCity = cities.slice(1, 3)
console.log(twoCity);


// Применение функции к каждому элементу массива

const numbers = [1, 2, 3, 4, 5].forEach((number) => console.log(number * number))
console.log(numbers);

const numbers = [1, 2, 3, 4, 5].map((number) => number * number)
console.log(numbers);

// Поиск индекса элемента в массиве

const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

console.log(fruits.indexOf('orange'))
console.log(fruits.lastIndexOf('mango'))
console.log(fruits.includes('banana'))


// Поиск объекта в массиве


const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
]

const person = people.find((name) => name.name == 'Charlie').findIndex((name) => name.name == 'Charlie')
const person2 = people.findIndex((name) => name.name == 'Charlie')


console.log(person, person2);


//  Фильтрация товаров по критериям

const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics', inStock: true },
  { name: 'Phone', price: 800, category: 'Electronics', inStock: false },
  { name: 'Shirt', price: 25, category: 'Clothing', inStock: true },
  { name: 'Shoes', price: 50, category: 'Clothing', inStock: true },
  { name: 'Coffee Maker', price: 100, category: 'Home Appliances', inStock: false },
  { name: 'Headphones', price: 150, category: 'Electronics', inStock: true }
];

const filteredProducts = products.filter((product) => {
  return (
    (product.category === 'Electronics' || product.category === 'Clothing') &&
    product.price < 300 &
    product.inStock === true
  )
})
console.log(filteredProducts);


const numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7]

const filtered = numbers.filter((item, index) => {
  return numbers.indexOf(item) === index
})

console.log(filtered)

const uniqArray = numbers.reduce((uniq, item) => {
  return uniq.includes(item) ? uniq : [...uniq, item]
}, [])


//Сортировка массива объектов по свойству

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 30 },
  { name: 'Dave', age: 22 }
].sort((a, b) => a.age - b.age)

console.log(people);



// Подсчет статистики по массиву чисел


const grades = [88, 92, 76, 81, 95, 89, 73];

const stats = grades.reduce((accumulator, current) => {
  accumulator.sum += current; // Суммируем оценки
  if (current > accumulator.max) {
    accumulator.max = current; // Обновляем максимальную оценку
  }
  if (current < accumulator.min) {
    accumulator.min = current; // Обновляем минимальную оценку
  }
  return accumulator;
}, { sum: 0, max: Number.NEGATIVE_INFINITY, min: Number.POSITIVE_INFINITY });

// Вычисляем среднюю оценку
stats.average = stats.sum / grades.length;

console.log(stats);

// Рассмотрим массив / список овец, где некоторые овцы могут отсутствовать на своих местах.
// Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве(true означает присутствие).


const arr = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]

const newFilt = arr.filter((item) => {
  if (item !== true) {
    return null
  } return item
})

console.log(newFilt.length);


// Преобразовать число в обратный массив цифр
// Дано случайное неотрицательное число, необходимо вернуть цифры этого числа в массиве в обратном порядке.

const number = 35231;
const arr = number.toString().split('').reverse()
console.log(arr);



// Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"

// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), которое гласит:

const array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"].findIndex((item) => item == "needle")

console.log(`нашел иглу на позиции ${array}`);



// Дан массив целых чисел в виде строк и чисел, вернуть сумму значений массива, как если бы все они были числами.

// Ответ дайте числом.

const numbers = ['1', '2', '3', '4', '5', '6', '6']

const result = numbers.reduce((acc, current) => +acc + +current)

console.log(result);


//Создайте метод, который принимает массив имен и возвращает массив каждого имени с заглавной первой буквой.

let names = ['kosTya', 'serGey', 'joRDan', 'aleksandr'];

let new_names = names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase())

console.log(new_names)


// создание объектов с частотами 

const fruits = ['apple', 'banana', 'orange', 'banana', 'apple'];

const frequency = fruits.reduce((acc, currentV) => {
  acc[currentV] = (acc[currentV] || 0) + 1
  return acc
}, {})

console.log(frequency) // Вывод: { apple: 2, banana: 2, orange: 1 }


//Нахождение максимального значения:

const numbers = [5, 12, 8, 130, 44];

const max = numbers.reduce((accumulator, currentValue) => {
    return (currentValue > accumulator) ? currentValue : accumulator;
}, numbers[0]);

console.log(max); // Вывод: 130