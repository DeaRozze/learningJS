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


// // В рамках этого ката вам необходимо создать функцию, 
// которая при наличии триплета возвращает индекс числового элемента, который находится между двумя другими элементами.

// Например:

// gimme([2, 3, 1]) => 0

arr = [2, 3, 1]

const asc = (a, b) => a - b;
const gimme = arr => arr.indexOf(arr.slice().sort(asc)[1]); // бред какой то
console.log(gimme)

// Напишите функцию, которая принимает массив и возвращает новый массив, где удалены все дубликаты.

const arr =[1, 2, 2, 3, 4, 4, 5]// [1, 2, 3, 4, 5]

const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index); понял что нужно использовать filter, но условие для выполнения не смог сделать

console.log(uniqueArr); // [1, 2, 3, 4, 5]


// Напишите функцию для разбиения строки и преобразования ее в массив слов.

const str = 'Robin Singh'

const arr = str.split(' ')

console.log(arr);

// Вам будет дан массив чисел. Вам нужно отсортировать нечетные числа в порядке возрастания, оставив четные числа на своих исходных позициях.

const arr = [5, 8, 6, 3, 4]

const res = arr.sort((a,b) => (a - b) % 2 == 0 ? (a -b) : '') // ответ не сходится, не понимаю как написать условие

console.log(res);


// создайте новый массив, в котором будут только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((item) => item % 2 == 0 )
console.log(numbers);


// создайте новый массив, в котором каждый элемент будет удвоен

const numbers = [1, 2, 3, 4, 5].map((item) => item * 2)
console.log(numbers);

// Используя метод reduce(), найдите сумму всех элементов массива.

const numbers = [1, 2, 3, 4, 5].reduce((acc, prevValue) =>{
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
].sort((a,b) => {
  return b.grade - a.grade
})
console.log(students);


// объедините их в один массив

const array1 = [1,2,3].concat([4,5,6])
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