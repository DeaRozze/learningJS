// Извлечение значение из массива
1. Извлечение значения по индексу

let set = [1, 2, 3]
let value = set[0]
console.log(value);

2. Извлечение случайного значения из массива

let set = [1, 2, 3]
let randomIndex = Math.floor(Math.random() * set.length)
let randomValue = set[randomIndex]
console.log(randomValue);

3. Использование метода shift() или pop()

let set = [1, 2, 3];
let firstValue = set.shift();
console.log(firstValue);
console.log(set);

let lastValue = set.pop();
console.log(lastValue);
console.log(set);

// Извлечение значения из коллекции Set

1. Извлечение первого значения из Set

let set = new Set([1, 2, 3]);

for (let value of set) {
  console.log(value)
  break
}

2. Преобразование Set в массив

let set = new Set([1, 2, 3])
let setArray = Array.from(set)
let value = setArray[0]
console.log(value)

3. Использование итератора

let set = new Set([1, 2, 3])
let iterator = set.values()
let value = iterator.next().value
console.log(value);



// Итерация объекта с одним элементом

const singleElement = {
  element: 42,
  iterated: false,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.iterated) {
      return { done: true };
    }
    this.iterated = true;
    return { value: this.element, done: false };
  }
};


for (const value of singleElement) {
  console.log(value);
}

// Второй вариант

const singleElement = {
  element: 42,

  [Symbol.iterator]() {
    let isDone = false;
    return {
      next() {
        if (isDone) {
          return { done: true };
        }
        isDone = true;
        return { value: this.element, done: false };
      }
    };
  }
};

// Пример использования
for (const value of singleElement) {
  console.log(value)
}

