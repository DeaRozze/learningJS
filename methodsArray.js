// Найти сумму всех элементов массива

const arr = [1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur, 0)
console.log(arr); //15


// Найти максимальный элемент массива

const arr2 = [10, 5, 8, 20, 3];
const max = Math.max(...arr2);
console.log(max); // 20


//еще вариант

const arr3 = [10, 5, 8, 20, 3];
let max3 = arr3[0];

for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] > max3) {
    max3 = arr3[i]
  }
}

console.log(max3); // 20

// Развернуть массив (без метода reverse)

const newArr = [1, 2, 3, 4, 5].sort((a, b) => b - a)
console.log(newArr); // (5) [5, 4, 3, 2, 1]


//еще вариант

const newArr2 = [1, 2, 3, 4, 5].reduce((acc, cur) => [cur, ...acc], [])

console.log(newArr2); // (5) [5, 4, 3, 2, 1]

// вариант с for

const newArr3 = [1, 2, 3, 4, 5];
const reversed = []

for (let i = newArr3.length - 1; i >= 0; i--) {
  reversed.push(newArr3[i])
}

console.log(reversed); // (5) [5, 4, 3, 2, 1]


// Удалить дубликаты из массива

const num = [1, 2, 2, 3, 4, 4, 5]
const uniqueArr = [...new Set(num)]

console.log(uniqueArr); // [1, 2, 3, 4, 5]


// еще метод

const newNum = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr2 = newNum.filter((acc,index) => newNum.indexOf(acc) === index)

console.log(uniqueArr2); // [1, 2, 3, 4, 5]

//еще метод 

const newNum2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr3 = newNum2.reduce((acc,num) => {
  if(!acc.includes(num)) {
    acc.push(num)
  }
  return acc
}, [])

console.log(uniqueArr); // [1, 2, 3, 4, 5]
