`Функция в JavaScript – это не магическая языковая структура, а особого типа значение.

Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):

function sayHi() {
  alert( "Привет" );
}
  
Существует ещё один синтаксис создания функций, который называется Function Expression (Функциональное Выражение).

Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.

Это выглядит следующим образом:

let sayHi = function() {
  alert( "Привет" );
};
Здесь мы можем видеть переменную sayHi, получающую значение, новую функцию, созданную как function() { alert("Привет"); }.

Поскольку создание функции происходит в контексте выражения присваивания (с правой стороны от =), это Function Expression.

Обратите внимание, что после ключевого слова function нет имени. Для Function Expression допускается его отсутствие.

Здесь мы сразу присваиваем её переменной, так что смысл этих примеров кода один и тот же: "создать функцию и поместить её в переменную sayHi".

В более сложных ситуациях, с которыми мы столкнёмся позже, функция может быть создана и немедленно вызвана, или запланирована для дальнейшего выполнения, нигде не сохраняясь, таким образом, оставаясь анонимной.

`



`ункция – это значение
Давайте повторим: независимо от того, как создаётся функция – она является значением. В обоих приведённых выше примерах функция хранится в переменной sayHi.

Мы даже можем вывести это значение с помощью alert:

function sayHi() {
  alert( "Привет" );
}

alert( sayHi ); // выведет код функции

В JavaScript функция – это значение, поэтому мы можем обращаться с ней как со значением. Приведённый выше код показывает её строковое представление, которое является её исходным кодом.`

`function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)

Мы также могли бы использовать Function Expression для объявления sayHi в первой строке:

let sayHi = function() { // (1) создаём
  alert( "Привет" );
};

let func = sayHi;
// ...`



`Функции-«колбэки»
Давайте рассмотрим больше примеров передачи функции в виде значения и использования функциональных выражений.

Давайте напишем функцию ask(question, yes, no) с тремя параметрами:

question
Текст вопроса
yes
Функция, которая будет вызываться, если ответ будет «Yes»
no
Функция, которая будет вызываться, если ответ будет «No»
Наша функция должна задать вопрос question и, в зависимости от того, как ответит пользователь, вызвать yes() или no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

Аргументы showOk и showCancel функции ask называются функциями-колбэками или просто колбэками.`


`Мы можем переписать этот пример значительно короче, используя Function Expression:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

Здесь функции объявляются прямо внутри вызова ask(...). У них нет имён, поэтому они называются анонимными. Такие функции недоступны снаружи ask (потому что они не присвоены переменным), но это как раз то, что нам нужно.`

`Функция – это значение, представляющее «действие»
Обычные значения, такие как строки или числа представляют собой данные.

Функции, с другой стороны, можно воспринимать как действия.

Мы можем передавать их из переменной в переменную и запускать, когда захотим.`



`Function Expression в сравнении с Function Declaration

Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.

// Function Declaration
function sum(a, b) {
  return a + b;
}
Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};
Более тонкое отличие состоит в том, когда создаётся функция движком JavaScript.


Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
После того, как поток выполнения достигнет правой части выражения присваивания let sum = function… – с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д. ).

С Function Declaration всё иначе.

Function Declaration может быть вызвана раньше, чем она объявлена.

Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».
`

// sayHi("Вася"); // Привет, Вася

// function sayHi(name) {
//   alert( `Привет, ${name}` );
// }

// …Если бы это было Function Expression, то такой код вызвал бы ошибку:

// sayHi("Вася"); // ошибка!

// let sayHi = function(name) {  // (*) магии больше нет
//   alert( `Привет, ${name}` );
// };


`В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.`


// let age = prompt("Сколько Вам лет?", 18);

// // в зависимости от условия объявляем функцию
// if (age < 18) {

//   function welcome() {
//     alert("Привет!");
//   }

// } else {

//   function welcome() {
//     alert("Здравствуйте!");
//   }

// }

// ...не работает
welcome(); // Error: welcome is not defined

`Это произошло, так как объявление Function Declaration видимо только внутри блока кода, в котором располагается.`

let age = 16; // возьмём для примера 16

if (age < 18) {
  welcome();               // \   (выполнится)
                           //  |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
  welcome();               // /   (выполнится)

} else {

  function welcome() {
    alert("Здравствуйте!");
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

welcome(); // Ошибка: welcome is not defined

`Верным подходом будет воспользоваться функцией, объявленной при помощи Function Expression, и присвоить значение welcome переменной, объявленной снаружи if, что обеспечит нам нужную видимость.

Такой код заработает, как ожидалось:

let age = prompt("Сколько Вам лет?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Привет!");
  };

} else {

  welcome = function() {
    alert("Здравствуйте!");
  };

}

welcome(); // теперь всё в порядке


let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); // теперь всё в порядке`

`Когда использовать Function Declaration, а когда Function Expression?
Как правило, если нам понадобилась функция, в первую очередь нужно рассматривать синтаксис Function Declaration, который мы использовали до этого. Он даёт нам больше свободы в том, как мы можем организовывать код. Функции, объявленные таким образом, можно вызывать до их объявления.

Также функции вида function f(…) {…} чуть более заметны в коде, чем let f = function(…) {…}. Function Declaration легче «ловятся глазами».

…Но если Function Declaration нам не подходит по какой-то причине, или нам нужно условное объявление (мы рассмотрели это в примере выше), то следует использовать Function Expression.`



`Итого
Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
Если функция была создана как часть выражения, то это “Function Expression”.
Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.
В большинстве случаев, когда нам нужно объявить функцию, Function Declaration предпочтительнее, т.к функция будет видна до своего объявления в коде. Это даёт нам больше гибкости в организации кода, и, как правило, делает его более читабельным.

Исходя из этого, мы должны использовать Function Expression только тогда, когда Function Declaration не подходит для нашей задачи. Мы рассмотрели несколько таких примеров в этой главе, и увидим ещё больше в будущем.`