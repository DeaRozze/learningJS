// Named Function Expression (NFE):

const greet = function sayHello(name) {
  console.log('Hello, ' + name);
}

greet('Alice') // Output: Hello, Alice

// sayHello() здесь не доступна за пределами функции, только greet()

//рекурсии с NFE

const factorial = function fact(n) {
  if (n === 0) return 1
  return n * fact(n - 1)
}

console.log(factorial(5)); // 120


// использования NFE внутри другого выражения:

const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = numbers.map(function double(num) {
  return num * 2
})

console.log(doubleNumbers); //[2, 4, 6, 8, 10]



//////////////////////////

// Синтаксис "new Function"

//new Function([arg1, arg2, ..., argN], functionBody);

const sum = new Function('a', 'b', 'return a + b;');
console.log(sum(2, 3));  //  5

// с несколькими аргументами:

const multiply = new Function('x', 'y', 'z', 'return x * y * z;');
console.log(multiply(2, 3, 4));  //  24

// без аргументов 

const greet = new Function('return "Hello, world!";');
console.log(greet());  // Hello, world!

