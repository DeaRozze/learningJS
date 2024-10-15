`Логические операторы
В JavaScript есть семь логических операторов:

|| (ИЛИ)
||= (Оператор логического присваивания ИЛИ)
&& (И)
&&= (Оператор логического присваивания И)
! (НЕ)
?? (Оператор нулевого слияния)
??= (Оператор нулевого присваивания)`

  `
|| (ИЛИ)
Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:

result = a || b;`

  `Если значение не логического типа, то оно к нему приводится в целях вычислений.

Например, число 1 будет воспринято как true, а 0 – как false:

if (1 || 0) { // работает как if( true || false )
  alert( 'истинно!' );
}
Обычно оператор || используется в if для проверки истинности любого из заданных условий.

К примеру:

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'Офис закрыт.' );
}
Можно передать и больше условий:

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}`



  `ИЛИ "||" находит первое истинное значение
Описанная выше логика соответствует традиционной. Теперь давайте поработаем с «дополнительными» возможностями JavaScript.

Расширенный алгоритм работает следующим образом.

При выполнении ИЛИ || с несколькими значениями:

result = value1 || value2 || value3;
Оператор || выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
Если все операнды являются ложными (false), возвращает последний из них.
Значение возвращается в исходном виде, без преобразования.

Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.

Например:

alert( 1 || 0 ); // 1 (1 - истинное значение)
alert( true || 'какая-то строка' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)
Это делает возможным более интересное применение оператора по сравнению с «чистым, традиционным, только булевым ИЛИ».`

  `
Получение первого истинного значения из списка переменных или выражений.

let firstName = "";
let lastName = "";
let nickName = "Суперкодер";

alert( firstName || lastName || nickName || "Аноним"); // Суперкодер

Сокращённое вычисление.

true || alert("никогда не сработает");
false || alert("сработает");
В первой строке оператор ИЛИ || останавливает выполнение сразу после того, как сталкивается с истинным значением (true), поэтому сообщение не показывается.
`

  `||= (Логическое присваивание ИЛИ)


Вот его синтаксис:

a ||= b;
Оператор ||= принимает два операнда и выполняет следующие действия:

Вычисляет операнды слева направо.
Конвертирует a в логическое значение.
Если a ложно, присваивает a значение b.



a || (a = b);
Мы уже знаем, что ИЛИ || возвращает первое истинное значение, поэтому, если a является таковым, вычисление до правой части выражения не дойдёт.

Вот пример с очевидным использованием оператора ||=:

let johnHasCar = false;

johnHasCar ||= "У Джона нет машины!"; // то же самое, что false || (johnHasCar = "...")

alert( johnHasCar ); // "У Джона нет машины!"


…А здесь происходит преобразование к логическому значению:

let manufacturer = ""; // оператор ||= преобразует пустую строку "" к логическому значению false

manufacturer ||= "Неизвестный производитель"; // то же самое, что false || (manufacturer = "...")

alert( manufacturer ); // "Неизвестный производитель"
`



  `&& (И)
Оператор И пишется как два амперсанда &&:

result = a && b;
В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
Пример с if:

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'Время 12:30' );
}
Как и в случае с ИЛИ, любое значение допускается в качестве операнда И:

if (1 && 0) { // вычисляется как true && false
  alert( "не сработает, так как результат ложный" );
}`


  `И «&&» находит первое ложное значение
При нескольких подряд операторах И:

result = value1 && value2 && value3;
Оператор && выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
Если все операнды были истинными, возвращается последний.

Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.

Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "какая-то строка" ); // 0


Можно передать несколько значений подряд. В таком случае возвратится первое «ложное» значение, на котором остановились вычисления.

alert( 1 && 2 && null && 3 ); // null
Когда все значения верны, возвращается последнее

alert( 1 && 2 && 3 ); // 3

`

  `
Приоритет оператора && больше, чем у ||
Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.

Таким образом, код a && b || c && d по существу такой же, как если бы выражения && были в круглых скобках: (a && b) || (c && d).`


  `&&= (Логическое присваивание И)

Оператор логического присваивания И &&= записывается как два амперсанда && и символ присваивания =.

Вот его синтаксис:

a &&= b;

Принцип действия &&= практически такой же, как и у оператора логического присваивания ИЛИ ||=. Единственное отличие заключается в том, что &&= присвоит a значение b только в том случае, если a истинно.

Концепция оператора логического присваивания И &&= также основывается на «сокращённом вычислении»:

a && (a = b);
Пример использования:

let greeting = "Привет"; // строка непустая, поэтому будет преобразована к логическому значению true оператором &&=

greeting &&= greeting + ", пользователь!"; // то же самое, что true && (greeting = greeting + "...")

alert( greeting ) // "Привет, пользователь!"


тоже самое

let greeting = "Привет";

if (greeting) {
  greeting = greeting + ", пользователь!"
}

alert( greeting ) // "Привет, пользователь!"
`


  `
! (НЕ)
Оператор НЕ представлен восклицательным знаком !.

Синтаксис довольно прост:

result = !value;

Оператор принимает один аргумент и выполняет следующие действия:

Сначала приводит аргумент к логическому типу true/false.
Затем возвращает противоположное значение.


Например:

alert( !true ); // false
alert( !0 ); // true
В частности, двойное НЕ !! используют для преобразования значений к логическому типу:

alert( !!"непустая строка" ); // true
alert( !!null ); // false

Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.`


//Задачи

alert(alert(1) || 2 || alert(3)); //сначала 1, затем 2.

alert(1 && null && 2);// null

alert(alert(1) && alert(2)); //1, а затем undefined.

alert(null || 2 && 3 || 4);//3

`Приоритет оператора && выше, чем ||, поэтому он выполнится первым.

Результат 2 && 3 = 3, поэтому выражение приобретает вид:

null || 3 || 4
Теперь результатом является первое истинное значение: 3.`

let value = NaN;

value &&= 10; //Nan
value ||= 20;// 20
value &&= 30;//20
value ||= 40;//30

alert(value);

`value &&= 10
value=NaN
NaN конвертируется в логическое значение false
value ложно, поэтому присваивание не срабатывает
value ||= 20
value=NaN
NaN конвертируется в логическое значение false
value ложно, поэтому присваивание срабатывает
value &&= 30
value=20
20 конвертируется в логическое значение true
value истинно, поэтому присваивание срабатывает
value ||= 40
value=30
30 конвертируется в логическое значение true
value истинно, поэтому присваивание не срабатывает`

//Ответ 30

// let age
// if(age >= 14 && age <= 90) {
// }

// let age 
// if(!age >= 14 || !age <= 90 ){}

// if(age < 14 || age >90) {}


// if (-1 || 0) alert( 'first' ); //выполнится //true
// if (-1 && 0) alert( 'second' );// не выполнится //false
// if (null || -1 && 1) alert( 'third' ); //выполнится // true


let userName = promt('КТо там?', '')

if (userName === 'Админ') {
  let passWord = promt('Пароль?', '')

  if (psaaWord === 'Я главный') {
    alert('Здравствйте')
  }
  else if (passWord === '' || passWord === null) {
    alert('Отмена')
  } else {
    aler('Неверный пароль')
  }

} else if (userName === '' || userName === null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}
