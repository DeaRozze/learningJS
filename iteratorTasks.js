const myIterable = {
  items: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0
    const items = this.items

    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (const item of myIterable) {
  console.log(item);
}





// const fib = {max:21} реализовать фиббоначи в итераторе // f0 = 0 , f1=1, f2=1,   fn = fn-1 + fn-2
// //Создайте итерируемый объект с числами Фибоначчи и выведите их в консоль до max
let fibonacci = {
  max: 21,
  [Symbol.iterator]() {
    let a = 0;
    let b = 1;
    let max = this.max;
    return {
      next() {
        if (a < max) {
          let c = a + b;
          a = b;
          b = c;
          return { done: false, value: a };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of fibonacci) {
  console.log(num);
}


// Написать итератор, чтобы выводил рандомные натуральные числа в диапазоне [0..500] и итерировал пока не найдет
// заданное рандомное число (заранее вычисленное по этому же алгоритму и имеющееся в свойстве объекта) и показано перед циклом.

function randomNum() {
  return Math.floor(Math.random() * 501)
}

const random = {
randomTarget: randomNum(),
[Symbol.iterator]() {
  const randomNumber = this.randomTarget
  let num = 0 
  return {
    next() {
      if (num <= randomNumber) {
        return { value: num++, done: false }
      } return { done: true } 
    }
  }
}
}

for (const num of random) {
console.log(num);
}


//Создайте функцию которая принимает массив и возращает итерируемый объект с уникальными значениями. 


function unique(arr) {
  const uniqueSet = new Set(arr); 
  const uniqueArray = Array.from(uniqueSet); 

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < uniqueArray.length) {
            return { value: uniqueArray[index++], done: false }; 
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}


let arr = ["apple", "orange", "banana", "apple"];
let uniqueValues = unique(arr);

for (let value of uniqueValues) {
  console.log(value);
}

// Проитерировать массив

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumberIterator = {
  index: 0,
  array: arr,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    while (this.index < this.array.length) {
      const value = this.array[this.index++];
      if (value % 2 === 0) {
        return { value, done: false };
      }
    }
    return { done: true };
  }
};

for (const num of evenNumberIterator) {
  console.log(num); 
}

// Практика с Array.from
let newStr = Array.from({ length: 5 }, (v, i) => i) 

console.log(newStr)

// Сокращенная запись итератора
let str = "Hello";
let iterator = str[Symbol.iterator]();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())