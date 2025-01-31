function sumTo(n) {
  //  return n <= 1 ? n : n + sumTo(n - 1)

  if (n === 1) return n
  return n + sumTo(n - 1)
}

sumTo(5)

// return 5 + 4 + 3 + 2 + 1  = 5 
// return 4 + sumTo(3) = 4
// return 3 + sumTo(2) = 3 
// return 2 + sumTo(1) =  2
// return 1 = 1



//  Факториал натурального числа – это число, умноженное на "себя минус один", 

// затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

//Определение факториала можно записать как:

//n! = n * (n - 1) * (n - 2) * ...*1
//Примеры значений для разных n:

//1! = 1
//2! = 2 * 1 = 2
//3! = 3 * 2 * 1 = 6
//4! = 4 * 3 * 2 * 1 = 24
//5! = 5 * 4 * 3 * 2 * 1 = 120
//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

//alert( factorial(5) ); // 120
//P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function fact(n) {
  if (n == 1) return n
  return n * fact(n - 1)
}

fact(5)

if (n === 1) return n
return n * fact(n - 1)

//Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

//Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

//Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

//Пример работы:

//function fib(n) { /* ваш код */ }

//alert(fib(3)); // 2
//alert(fib(7)); // 13
//alert(fib(77)); // 5527939700884757


function fib(n) {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

fib(5)

//!5 fib(5-1) + fib(5 - 2) = fib(4) + fib(3)   // 3 + 2  // 5
//!4 fib(4-1) + fib(4 - 2) = fib(3) + fib(2)  // 2 + 1  // 3
//!3 fib(3-1) + fib(3 - 2) = fib(2) + fib(1) // 1 + 1  // 2
//!2 fib(2-1) + fib(2 - 2) = fib(1) + fib(0) // 1     // 1
//!1 // if(n <= 1) = 1                               // 1



// Напишите рекурсивную функцию, которая вычисляет 
// n-е число в последовательности чисел Люка.

// Последовательность чисел Люка определяется по следующему правилу:

// L(0)=2,  L(1)=1,   L(n) = L(n−1) + L(n−2) для n≥2

// Описание:
// Напишите функцию lucas(n), которая принимает число n 
// и возвращает n-е число последовательности Люка.
// Реализуйте решение с использованием рекурсии.
// Постарайтесь соблюсти правильные условия завершения рекурсии.

function lucas(n) {
  if (n === 0) return 2
  if (n === 1) return 1
  return lucas(n - 1) + lucas(n - 2)

}

lucas(5)

//5. luc(5-1) + luc(5-2) = luc(4) + luc(3) // 7 + 4 // 11
//4.luc(4-1) + luc(4-2) = luc(3) + luc(2) // 4 + 3 //  7
// 3. luc(3-1) + luc(3-2) = luc(2) + luc(1)  // 3 + 1 // 4
// 2. luc(2-1) + luc(2-2) = luc(1) + luc(0) // 1 + 2 // 3
// 1. luc(1-1) + luc(1-2) = luc(0) // 2     // 2


function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}


// Вам нужно создать рекурсивную функцию под названием replicate которая будет принимать аргументы times и number.
//Функция должна возвращать массив, содержащий повторения аргумента number . 
//Например, replicate(3, 5) должен возвращать [5,5,5]. Если аргумент times отрицательный, верните пустой массив.
//Как бы заманчиво это ни звучало, не используйте циклы для решения этой задачи.

function replicate(times, number) {
  if (times <= 0) return []
  res = replicate(times - 1, number)
  res.push(number)
  return res
}

console.log(replicate(3, 5)); // [5,5,5]
console.log(replicate(-3, 1)); // []
res = []
// 1. rep(3 - 1, 5) // rep(2 , 5) [5,5,5]
// 2. rep(2 -1, 5)  // rep(1, 5) [5]
// 3. rep(1 - 1, 5) //rep(0, 5) []

//Циклом:

const res = []
for (let i = 0; i < 3; i++) {
  res.push(5)

}
console.log(res)

//1. i = 0; 0 < 3; 0++   / 1  res[5]
//2. i = 1; 1<3; 1++ / 2 res[5,5]
//3. i = 2; 2<3;2++ / 3 res[5,5,5]


// Обход объекта через рекурсию.
// Напиши функцию, которая обходит все свойства вложенного объекта и возвращает массив всех значений.
const data = {
  name: "John",
  info: {
    age: 30,
    location: {
      country: "USA",
      city: "New York",
    },
  },
};

function getValues(obj) {
  let values = []

  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      values = values.concat(getValues(obj[key]))
    } else {
      values.push(obj[key])
    }
  }
  return values
}

console.log(getValues(data)); // (4) ['John', 30, 'USA', 'New York']


// Еще вариант

function getValues(obj) {
  let values = [];

  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      values = values.concat(getValues(value));
    } else {
      values.push(value);
    }
  }

  return values;
}

console.log(getValues(data)); // (4) ['John', 30, 'USA', 'New York']

//Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//Напишите функцию printList(list), которая выводит элементы списка по одному.

function printList(list) {
  console.log(list.value)

  if (list.next) {
    printList(list.next)
  }
}
printList(list)

// цикл:

function printList(list) {
  let tmp = list

  while (tmp) {
    console.log(tmp.value)
    tmp = tmp.next
  }
}

printList(list)

//Вывод односвязного списка в обратном порядке


function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);

// цикл:

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

printReverseList(list);




function findMultiples(integar, limit) {
  let arr = []
  for (let i = integar; i <= limit; i += integar) {
    arr.push(i)
  }
  return arr
}

findMultiples(2, 6)


let arr2 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]


  function countSheep(arr) {
    return arr.filter(Boolean).length;
}

countSheep(arr2)



