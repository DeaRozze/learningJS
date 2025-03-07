// метод map

Object.prototype.myMap = function (callback) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}

const arr = [1, 2, 3, 4, 5];
const newArr = arr.myMap(num => num * 2);

console.log(newArr); // [2, 4, 6, 8, 10]


// метод filter

Object.prototype.myFilter = function(callback) {
  let res = []
  for(let i = 0; i < this.length;i++) {
    if(callback(this[i],i,this)) {
      res.push(this[i])
    }
  }
  return res
}

const number = [1, 2, 3, 4, 5, 6];
const evenNumbers = number.myFilter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// метод forEach

Object.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const arr2 = [1, 2, 3, 4, 5];

arr.myForEach((value, index) => {
  console.log(` ${index}: ${value}`);
});

// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5


//метод reduce

Object.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue
  let startIndex = 0

  if (acc === undefined) {
    acc = this[0]
    startIndex = 1
  }
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }

  return acc
}

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.myReduce((acc, value) => acc + value, 0);

console.log(sum); // 15



function CustomArray() {
  // Inherit properties and methods of the native Array
  let array = [];

  // Set the prototype of CustomArray to Array's prototype so it behaves like an array
  Object.setPrototypeOf(array, CustomArray.prototype);

  // You can use the push method of the array (or any array method)
  array.push = function (...args) {
      Array.prototype.push.apply(this, args);
  };

  // Custom method 'hi' to return the length of the array
  array.hi = function () {
      return `length - ${this.length}`;
  };

  return array;
}

// Usage
const myArray = new CustomArray();
myArray.push(1, 2, 3, 4);
console.log(myArray.hi());