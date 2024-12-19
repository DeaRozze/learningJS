// 1. Группировка объектов по ключу:

// Напишите функцию, которая принимает массив объектов и ключ.Функция должна группировать объекты по указанному ключу и возвращать объект,
//   где ключи — это уникальные значения по указанному ключу, а значения — массивы объектов, у которых этот ключ имеет соответствующее значение.
const arr = [
  { id: 1, category: 'A', value: 10 },
  { id: 2, category: 'B', value: 20 },
  { id: 3, category: 'A', value: 30 },
  { id: 4, category: 'B', value: 40 },
  { id: 5, category: 'C', value: 50 },
];
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const prop = obj[key];
    if (!acc[prop]) {
      acc[prop] = []
    }
    acc[prop].push(obj)
    return acc
  }, {})
}
console.log(groupBy(arr));


// Мы используем метод reduce, который позволяет преобразовать массив в объект.

// Для каждого объекта мы проверяем его значение по ключу. Если такого ключа в acc еще нет, создаем новый массив.

// Добавляем объект в соответствующий массив.

// Возвращаем итоговый объект.

// 2. Перевернуть массив без использования встроенных методов

// Напишите функцию, которая принимает массив и возвращает новый массив, содержащий те же элементы в обратном порядке,
//   но без использования методов reverse(), slice() или других встроенных методов массивов.

function reverseArr(arr) {
  const result = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
      const index = arr.length - i - 1;
      result[index] = arr[i];
  }
  
  return result;
}

reverseArr([1, 2, 3, 4, 5]);

// Мы создаем новый пустой массив reversed.

// С помощью цикла for проходим по исходному массиву от последнего элемента к первому.

// Добавляем каждый элемент в новый массив.

// В конце возвращаем массив в обратном порядке.



// 3. Нахождение медианы:

// Напишите функцию, которая принимает массив чисел и возвращает медиану.
//   Медиана — это среднее значение элементов массива, если он отсортирован.
//   Если количество элементов чётное, медианой будет среднее значение двух средних элементов.
const nums = [1, 2, 3, 4, 5, 6]
function findMedian() {
  nums.sort((a, b) => a - b)
  const mid = Math.floor(nums.length / 2)
  return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

console.log(findMedian(nums));

// Сначала сортируем массив.

// Находим середину массива.

// Если количество элементов нечетное, просто возвращаем средний элемент. Если четное — вычисляем среднее значение двух средних элементов.


// 4. Кумулятивная сумма:


// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
//   в котором каждый элемент является кумулятивной суммой элементов предыдущего массива.Например, входной массив[1, 2, 3] должен вернуть[1, 3, 6].
const arr = [1, 2, 3, 4, 5]
function cumulativeSum() {
  const result = []
  let sum = 0
  for (let number of arr) {
    sum += number
    result.push(sum)
  }
  return result
}

console.log(cumulativeSum(arr))

// Мы создаем новый массив для результатов и переменную для хранения суммы.

// Проходим по каждому элементу исходного массива, добавляя его к сумме.

// Сохраняем текущую сумму в новом массиве.



// 5. Пересечение двух массивов:

// Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий только те элементы,
//   которые есть в обоих массивах(пересечение массивов).

arr1 = [1, 2, 4]
arr2 = [3, 4, 5]

function resultarr() {
  return arr1.filter(value => arr2.includes(value))
}

console.log(resultarr(arr1));

// Используем метод filter, который создает новый массив, содержащий только те элементы из arr1, которые присутствуют в arr2.


// 6. Фильтрация уникальных элементов:

// Напишите функцию, которая принимает массив и возвращает новый массив, содержащий только те элементы, которые встречаются в массиве единожды.


function uniqueElements(arr) {
  return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
}

// Используем метод filter, чтобы найти элементы, индекс которых совпадает с их последним индексом. 
// Это означает, что элемент встречается в массиве только один раз.



// 7. Наибольшая последовательность одинаковых элементов:

// Напишите функцию, которая принимает массив и возвращает длину самой длинной последовательности одинаковых элементов.
//   Например, для массива[1, 1, 2, 2, 2, 3, 3, 1, 1] длина самой длинной последовательности будет равна 3.
arr = [1, 1, 2, 2, 2, 3, 3, 1, 1]
function longestNum() {
  let maxLength = 1
  let currentLength = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++
    } else {
      maxLength = Math.max(maxLength, currentLength)
      currentLength = 1
    }
  }
  return Math.max(maxLength, currentLength)
}

console.log(longestNum(arr));


// Инициализируем максимальную и текущую длину последовательности.

// Проходим по массиву и увеличиваем currentLength, если текущий элемент равен предыдущему.

// Если они разные, обновляем maxLength и сбрасываем currentLength.


// 8. Объединение массивов объектов:

// Напишите функцию, которая принимает два массива объектов, где каждый объект содержит уникальный идентификатор.
// Функция должна объединять объекты с одинаковыми идентификаторами в один объект в новом массиве. 


function mergeArrays(arr1, arr2) {
  const map = new Map();
  arr1.forEach(obj => map.set(obj.id, { ...obj }));
  arr2.forEach(obj => {
    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, { ...obj });
    }
  });
  return Array.from(map.values());
}

// Используем Map для хранения объектов с уникальными идентификаторами.

// Перебираем оба массива. Если идентификатор уже есть, объединяем объекты. Если нет — добавляем новый объект.

// В конце возвращаем массив объединенных объектов.
// Эти решения являются удобными примерами различных подходов к решению задач, связанных с массивами и объектами в JavaScript.





// Проработка метода reduce()

// 1. Суммирование элементов массива

const numbers = [1, 2, 3, 4, 5,]

const sum = numbers.reduce((acc, current) => {
  return acc + current
}, 0)

console.log(sum);

// 2. НАхождение максимального значения в массиве 

const nums = [1, 2, 3, 10, 20, 4, 30]

const max = nums.reduce((acc, current) => {
  return Math.max(acc, current)
})

console.log(max);


// 3. Преобразование массива объектов в объект

// Условие: Дано множество объектов, каждый из которых содержит уникальный id.
// Необходимо создать объект, в котором ключами будут id, а значениями — все остальные данные.

const items = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 3, name: 'Item 3', price: 300 },
];

const itemsById = items.reduce((acc, current) => {
  acc[current.id] = current
  return acc
}, {})

console.log(itemsById);

// 4. Подсчет количества вхождений элементов в массив

const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

const countOccurrences = strings.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(countOccurrences);


// 5. Флэттенинг массива

// Условие: Дано множество вложенных массивов. Необходимо создать один плоский массив, содержащий все элементы.


const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, current) => {
  return acc.concat(current)
}, [])

console.log(nestedArray);




// Более сложный уровень reduce()

//Задача 1: Группировка объектов по свойству

//Условие: Дано множество объектов, каждый из которых содержит свойство category. Необходимо сгруппировать объекты по этому свойству.

const items = [
  { id: 1, name: 'Item 1', category: 'A' },
  { id: 2, name: 'Item 2', category: 'B' },
  { id: 3, name: 'Item 3', category: 'A' },
  { id: 4, name: 'Item 4', category: 'C' },
];

const groupedByCategory = items.reduce((acc, current) => {
  const category = current.category
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(current)
  return acc
}, {})

console.log(groupedByCategory);


//Задача 2: Удаление дубликатов из массива

const numbers = [1, 2, 3, 1, 2, 4, 5, 3];

const uniqueNum = numbers.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current)
  }
  return acc
}, [])

console.log(uniqueNum);


//ЗАДАЧА НА LC СЛОЖНЕЕ 

//Задача: Слияние массивов объектов с учетом уникальности

// Условие: Дано несколько массивов объектов, каждый из которых содержит уникальный id. Необходимо объединить эти массивы в один, 
// при этом объекты с одинаковыми id должны быть объединены в один объект, а их свойства должны быть объединены в массив.

const array1 = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
];

const array2 = [
  { id: 2, name: 'Item 2 Updated', price: 250 },
  { id: 3, name: 'Item 3', price: 300 },
];

const merged = [...array1, ...array2].reduce((accumulator, currentItem) => {
  const { id, name, price } = currentItem;
  if (!accumulator[id]) {
    accumulator[id] = { id, names: [], prices: [] };
  }
  accumulator[id].names.push(name);
  accumulator[id].prices.push(price);
  return accumulator;
}, {});

console.log(merged);


// Задача для боссов качалки 

// Задача: Слияние и агрегация данных пользователей
// Условие: Даны три массива объектов, представляющих пользователей, где каждый объект содержит id, name, age и salary. 
// Необходимо объединить три массива в один, исключив дубликаты по id.
//  Если у двух объектов одинаковый id, нужно оставить объект с наибольшим значением age.
//   Если age одинаковый, нужно оставить объект с наибольшим значением salary. Результат должен быть представлен в виде массива объектов.
// Кроме того, необходимо вернуть общий средний возраст и среднюю зарплату всех уникальных пользователей.


const array1 = [
  { id: 1, name: 'Alice', age: 25, salary: 50000 },
  { id: 2, name: 'Bob', age: 30, salary: 60000 },
  { id: 3, name: 'Charlie', age: 35, salary: 70000 }
];

const array2 = [
  { id: 2, name: 'David', age: 28, salary: 65000 },
  { id: 3, name: 'Eve', age: 35, salary: 70000 },
  { id: 4, name: 'Frank', age: 40, salary: 80000 }
];

const array3 = [
  { id: 1, name: 'Alice', age: 26, salary: 55000 },
  { id: 5, name: 'Grace', age: 32, salary: 72000 },
  { id: 4, name: 'Frank', age: 39, salary: 85000 }
];

// Ожидаемый вывод:
// [
//   { id: 1, name: 'Alice', age: 26, salary: 55000 },
//   { id: 2, name: 'Bob', age: 30, salary: 60000 },
//   { id: 3, name: 'Charlie', age: 35, salary: 70000 },
//   { id: 4, name: 'Frank', age: 40, salary: 80000 },
//   { id: 5, name: 'Grace', age: 32, salary: 72000 }
// ]
// Средний возраст: 32.2
// Средняя зарплата: 67400


const mergeAndAggregateUsers = (arr1, arr2, arr3) => {
  const combined = [...arr1, ...arr2, ...arr3];

  const uniqueUsers = combined.reduce((accumulator, currentUser) => {
      const existingUser = accumulator.find(user => user.id === currentUser.id);

      if (!existingUser) {
          accumulator.push(currentUser);
      } else {
          if (currentUser.age > existingUser.age || 
              (currentUser.age === existingUser.age && currentUser.salary > existingUser.salary)) {
              const index = accumulator.indexOf(existingUser);
              accumulator[index] = currentUser;
          }
      }

      return accumulator;
  }, []);

  const totalAge = uniqueUsers.reduce((sum, user) => sum + user.age, 0);
  const totalSalary = uniqueUsers.reduce((sum, user) => sum + user.salary, 0);
  const averageAge = totalAge / uniqueUsers.length;
  const averageSalary = totalSalary / uniqueUsers.length;

  return {
      uniqueUsers,
      averageAge,
      averageSalary
  };
};

const result = mergeAndAggregateUsers(array1, array2, array3);
console.log(result.uniqueUsers);
console.log(`Средний возраст: ${result.averageAge}`);
console.log(`Средняя зарплата: ${result.averageSalary}`);