ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ В ПРИМИТИВЫ

Что произойдёт, если сложить два объекта obj1 + obj2, вычесть один из другого obj1 - obj2 или вывести их на экран, воспользовавшись alert(obj) ?

  JavaScript совершенно не позволяет настраивать, как операторы работают с объектами.

В случае таких операций, объекты автоматически преобразуются в примитивы, затем выполняется сама операция над этими примитивами,
  и на выходе мы получим примитивное значение.

Это важное ограничение: результатом obj1 + obj2(или другой математической операции) не может быть другой объект!

В этой главе мы рассмотрим, как объект преобразуется в примитив и как это можно настроить.

У нас есть две цели:

Это позволит нам понять, что происходит в случае ошибок в коде, когда такая операция произошла случайно.
Есть исключения, когда такие операции возможны и вполне уместны.Например, вычитание или сравнение дат(Date объекты).Мы встретимся с ними позже.

ПРАВИЛА ПРЕОБРАЗОВАНИЯ

  - Не существует преобразования к логическому значению.В логическом контексте все объекты являются true, всё просто. 
Существует лишь их числовое и строковое преобразование.

- Числовое преобразование происходит, когда мы вычитаем объекты или применяем математические функции.
  Например, объекты Date(которые будут рассмотрены в главе Дата и время) могут быть вычтены, и результатом date1 - date2 будет разница во времени между двумя датами.

- Что касается преобразований к строке – оно обычно происходит, когда мы выводим на экран объект при помощи alert(obj) и в подобных контекстах.

Мы можем реализовать свои преобразования к строкам и числам, используя специальные объектные методы.

  ХИНТЫ

Существует три варианта преобразования типов, которые происходят в различных ситуациях.

"string"
Для преобразования объекта к строке, когда мы выполняем операцию над объектом, которая ожидает строку, например alert:

// вывод
alert(obj);

// используем объект в качестве ключа
anotherObj[obj] = 123;
"number"
Для преобразования объекта к числу, в случае математических операций:

// явное преобразование
let num = Number(obj);

// математические (не считая бинарного плюса)
let n = +obj; // унарный плюс
let delta = date1 - date2;

// сравнения больше/меньше
let greater = user1 > user2;
Большинство встроенных математических функций также включают в себя такое преобразование.

"default"
Происходит редко, когда оператор «не уверен», какой тип ожидать.

  Например, бинарный плюс + может работать как со строками(объединяя их в одну), так и с числами(складывая их).Поэтому, если бинарный плюс получает объект в качестве аргумента, он использует хинт "default" для его преобразования.

    Также, если объект сравнивается с помощью == со строкой, числом или символом, тоже неясно, какое преобразование следует выполнить, поэтому используется хинт "default".

// бинарный плюс использует хинт "default"
let total = obj1 + obj2;

// obj == number использует хинт "default"
if (user == 1) { ... };
Операторы сравнения больше / меньше, такие как < >, также могут работать как со строками, так и с числами.Тем не менее, по историческим причинам, они используют хинт "number", а не "default".

Впрочем на практике, всё немного проще.

Все встроенные объекты, за исключением одного(объект Date, который мы рассмотрим позже), реализуют "default" преобразование тем же способом, что и "number".И нам следует поступать так же.

ЧТОБЫ ВЫПОНИТЬ ПРЕОБРАЗОВАНИЕ, JavaScript пытается найти и вызвать три следующих метода объекта:

-Вызвать obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.toPrimitive(системный символ), если такой метод существует,

  -Иначе, если хинт равен "string"
попробовать вызвать obj.toString() или obj.valueOf(), смотря какой из них существует.

- Иначе, если хинт равен "number" или "default"
попробовать вызвать obj.valueOf() или obj.toString(), смотря какой из них существует.

  Symbol.toPrimitive

Давайте начнём с первого метода.Есть встроенный символ с именем Symbol.toPrimitive,
  который следует использовать для обозначения метода преобразования, вот так:

obj[Symbol.toPrimitive] = function (hint) {
// вот код для преобразования этого объекта в примитив
// он должен вернуть примитивное значение
// hint = чему-то из "string", "number",

Если метод Symbol.toPrimitive существует, он используется для всех хинтов, и больше никаких методов не требуется.

    Например, здесь объект user реализует его:

  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };

  // демонстрация результатов преобразований:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500
  Как мы можем видеть из кода, user становится либо строкой со своим описанием, либо суммой денег в зависимости от преобразования.
  Единый метод user[Symbol.toPrimitive] обрабатывает все случаи преобразования.

    toString / valueOf

  Если нет Symbol.toPrimitive, тогда JavaScript пытается найти методы toString и valueOf:

Для хинта "string": вызвать метод toString, а если он не существует или возвращает объект вместо примитивного значения, то valueOf(таким образом, toString имеет приоритет при строковом преобразовании).
Для других хинтов: вызвать метод valueOf, а если он не существует или возвращает объект вместо примитивного значения, то toString(таким образом, valueOf имеет приоритет для математических операций).
Методы toString и valueOf берут своё начало с древних времён.Это не символы(символов тогда ещё не было), а скорее просто «обычные» методы со строковыми именами.Они предоставляют альтернативный «старомодный» способ реализации преобразования.

Эти методы должны возвращать примитивное значение.Если toString или valueOf возвращает объект, то он игнорируется(так же, как если бы метода не было).

По умолчанию обычный объект имеет следующие методы toString и valueOf:

Метод toString возвращает строку "[object Object]".
Метод valueOf возвращает сам объект.
Взгляните на пример:

  let user = { name: "John" };

  alert(user); // [object Object]
  alert(user.valueOf() === user); // true

Таким образом, если мы попытаемся использовать объект в качестве строки, как например в alert или вроде того, то по умолчанию мы увидим[object Object].

Для примера, используем их в реализации всё того же объекта user.Но уже используя комбинацию toString и valueOf вместо Symbol.toPrimitive:

  let user = {
    name: "John",
    money: 1000,

    // для хинта равного "string"
    toString() {
      return `{name: "${this.name}"}`;
    },

    // для хинта равного "number" или "default"
    valueOf() {
      return this.money;
    }

  };

  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500
Как видим, получилось то же поведение, что и в предыдущем примере с Symbol.toPrimitive.

Довольно часто нам нужно единое «универсальное» место для обработки всех примитивных преобразований.В этом случае мы можем реализовать только toString:

  let user = {
    name: "John",

    toString() {
      return this.name;
    }
  };

  alert(user); // toString -> John
  alert(user + 500); // toString -> John500
В отсутствие Symbol.toPrimitive и valueOf, toString обработает все примитивные преобразования.

ПРЕОБРАЗОВАНИЕ МОЖЕТ ВЕРНУТЬ ЛЮБОЙ ПРИМИТИВНЫЙ ТИП

Важная вещь, которую следует знать обо всех методах преобразования примитивов, заключается в том, что они не обязательно возвращают подсказанный хинтом примитив.

Нет никакого контроля над тем, вернёт ли toString именно строку, или чтобы метод Symbol.toPrimitive возвращал именно число для хинта "number".

Единственное обязательное условие: эти методы должны возвращать примитив, а не объект.

Историческая справка

ДАЛЬНЕЙШЕЕ ПРЕОБРАЗОВАНИЕ

Как мы уже знаем, многие операторы и функции выполняют преобразования типов, например, умножение * преобразует операнды в числа.

Если мы передаём объект в качестве аргумента, то в вычислениях будут две стадии:

Объект преобразуется в примитив(с использованием правил, описанных выше).
Если необходимо для дальнейших вычислений, этот примитив преобразуется дальше.
    Например:

  let obj = {
    // toString обрабатывает все преобразования в случае отсутствия других методов
    toString() {
      return "2";
    }
  };

  alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом
Умножение obj * 2 сначала преобразует объект в примитив(это строка "2").
    Затем "2" * 2 становится 2 * 2(строка преобразуется в число).
А вот, к примеру, бинарный плюс в подобной ситуации соединил бы строки, так как он совсем не брезгует строк:

  let obj = {
    toString() {
      return "2";
    }
  };

  alert(obj + 2); // "22" ("2" + 2), преобразование к примитиву вернуло строку => конкатенация

  ИТОГО

Преобразование объекта в примитив вызывается автоматически многими встроенными функциями и операторами, которые ожидают примитив в качестве значения.

Существует всего 3 типа(хинта) для этого:

  "string"(для alert и других операций, которым нужна строка)
  "number"(для математических операций)
  "default"(для некоторых других операторов, обычно объекты реализуют его как "number")
Спецификация явно описывает для каждого оператора, какой ему следует использовать хинт.

Алгоритм преобразования таков:

Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
    В случае, если хинт равен "string"
происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
В случае, если хинт равен "number" или "default"
происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.
Все эти методы должны возвращать примитив(если определены).

На практике часто бывает достаточно реализовать только obj.toString() в качестве универсального метода для преобразований к строке,
    который должен возвращать удобочитаемое представление объекта для целей логирования или отладки.

преобразование примитивов

  console.log(true + false); //1
  console.log(null + undefined); //Nan
  console.log(1 + '2');// 12
  console.log({} + 1); //[object object]1
  console.log({ name: 'Alex' } + { name: "John" });// [object object][object object]
  alert({ age: 22 })// [object object]

  // const person = {
  //   name: 'Alex',
  //   age: 22
  // }

  // const personList = {}

  // personList[person] ='Odessa'

  // console.log(personList);//{[object object]: 'Odessa'}


  // const person = {
  //   name: 'Alex',
  //   age: 22,
  //   toString() {
  //     return this.name
  //   }

  //   // toString: null //ошибка
  //   valueOf() {
  //     return this.name
  //   }
  // }

  // const personList = {}

  // personList[person] ='Odessa'

  // console.log(personList);//{Alex: 'Odessa'}

  // const person = {
  //   name: "Alex",
  //   age: 22,
  //   valueOf: null,
  //   [Symbol.toPrimitive]: function (hint) {
  //     console.log(hint); //string
  //     switch (hint) {
  //       case 'string':
  //         return this.name
  //       case 'number':
  //         return this.age
  //       default:
  //         return `${this.name}, ${this.age}`
  //     }
  //   }
  // }

  // const personList = {}

  // personList[person] = 'Odessa' // если написать +person то в консоли hint будет number

  // console.log(personList);//{22: 'Odessa'}
  // console.log(person + preson); //Alex, 22Alex, 22
  // console.log(+person + +preson); /number number 44 


Логическое преобразование 

Любой объект в логическом преобразовании - true, даже если это пустой массив или объект

  if ({} && []) {
    alert('Все объекты - true!') // flert сработает
  }
  

Строковое преобразование

  var user = {
    firstName: 'Vlad'
  }

  alert(user) //[object object]

Если в объекте присутствует метод toString, который возвращает  примитив, то он используется для преобразования

  var user = {
    firstName: 'Василий',
    toString: function () {
      return 'Пользователь ' + this.firstName
    }
  }

  alert(user)

Результатом toString может быть любой примитив

метод toString не обязан возвращать именно строку.

его результат может быть любого примитивного типа.Например число

  var obj = {
    toString: function () {
      return 123
    }
  }

  alert(obj) //123

  Поэтому мы и называем его здесь «строковое преобразование», а не «преобразование к строке».

  Все объекты, включая встроенные, имеют свои реализации метода toString, например:

  alert([1, 2]) // toString для массивов выводит список элементов '1,2'
  alert(new Date) // toString для дат выводит дату в виду строки
  alert(function () { }); // toString для функции выводит её код

  Численное преобразование
  для численного преобразования объекста используется метод valueOf, а если его нет - то toString

  var room = {
    number: 777,

    valueOf: function () { return this.number },
    toString: function () { return this.number }
  }

  alert(+room) // 777, вызвался valueOf
  delete room.valueOf // удаление valueof
  alert(+room) // 777, вызвался toString

  Метод valueOf обязан возвращать примитивное значение, иначе его результат будет проигнорирован.
   При этом – не обязательно числовое.

   У БОЛЬШИНСТВА ОБЪЕКТОВ НЕТ valueOf

  у большинства встроенных объектов такого valueOf нет, поэтому численное и строквое преобразование для них работает одинаково.
  
  иСключение является объект Date, который поддерживает оба типа преобразований

  alert(new Date()); // toString: Дата в виде читаемой строки
  alert(+new Date()); // valueOf: кол-во миллисекунд, прошедших с 01.01.1970

  ДВЕ СТАДИИ ПРЕОБРАЗОВАНИЯ

  вполне возможно что в процессе вычислений примитив бдует преобразован во что то другое.

  например, применение к объекту операции ==

  var obj = {
    valueOf: function() {
      return 1;
    }
  };
  
  alert(obj == true); // true

  объект obj был сначала преобразован в примитив, используя численное преобразование, получилось 1 ==true
  Далее, так как значения все еще разных типов, применяются правила преобразования примитивов, результат true

  то же самое при сложении с объектом при помощи +

  var obj = {
    valueOf: function() {
      return 1;
    }
  };
  
  alert( obj + "test" ); // 1test

  Или вот, для разности объектов:

var a = {
  valueOf: function() {
    return '1';
  }
};
var b = {
  valueOf: function() {
    return '2';
  }
};

alert( a + b ); // "12"
alert( a - b ); // "1" - "2" = -1


ЗАДАЧИ

alert(['x'] == 'x') //true

Если с одной стороны – объект, а с другой – нет, то сначала приводится объект.

В данном случае сравнение означает численное приведение.
 У массивов нет valueOf, поэтому вызывается toString, который возвращает список элементов через запятую.

В данном случае, элемент только один – он и возвращается. 
Так что ['x'] становится 'x'. Получилось 'x' == 'x', верно.

P.S. По той же причине верны равенства:

alert( ['x', 'y'] == 'x,y' ); // true
alert( [] == '' ); // true


Объявлен объект с toString и valueOf.

Какими будут результаты alert?


var foo = {
  toString: function() {
    return 'foo';
  },
  valueOf: function() {
    return 2;
  }
};

console.log( foo ); //foo
console.log( foo + 1 ); // 3
console.log( foo + "3" );// 23


Почему [] == [] неверно, а [ ] == ![ ] верно?
Почему первое равенство – неверно, а второе – верно?

alert( [] == [] ); // false потому что это два объекта с разными ссылками
alert( [] == ![] ); // true
Какие преобразования происходят при вычислении?

ответ по второму равенству,

1.обе части сравнения вычисляются. спрова находится ![].
логическое НЕ '!' преобразует аргумент к логическому типу. Массив является объектом, так что это true
значит, правая часть становится ![] = !true = false

1. alert([] ==false)

2.проверка равенства между объектами и примитивом вызывает численное преобразование объекта.
у массива нет valueOf, сработает toString и преобразует массив в список элементов, то есть в пустую строку

alert( '' == false )

3. Сравнение различных типов вызывает численное преобразование слева и справа

alert (0 == 0)
теперь результат очевиден



new Date(0) - 0 // 0
new Array(1)[0] + ""  //  "undefined"
({})[0] //undefined
[1] + 1 // "11"
[1,2] + [3,4] //"1,23,4"
[] + null + 1 //"null1"
[[0]][0][0] //0
({} + {}) //"[object Object][object Object]"



const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 42;
    }
    if (hint === 'string') {
      return 'Hello';
    }
    return null;
  }
};

console.log(obj + 10); // Вывод: 52
console.log(obj.toString()); // Вывод: Hello


как сделать чтобы объект был раен определенному числу?

let obj = {
  valueOf () {
    return 2
  }
}
console.log(+obj)

был равен определенной строке?

let obj = {
  toString: function () {
    return 'Hello'
  }
}

console.log(obj + 2)
console.log(String(obj))

запомни алерт вернет строку и без дополнительных вычислений, консоль вернет функцию

obj > 0 // true. Как это сделать?
let obj = {
  toString () {
    return 1
  }
}
console.log(String(obj > 0))


String(obj < 0) + String(obj < 0) // "truefalse". Как это сделать?

let obj = {
  toString() {
    return '-1'
  }
}

console.log(String(obj < 0) + String(!obj < 0))