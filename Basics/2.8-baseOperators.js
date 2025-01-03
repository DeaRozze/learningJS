`Термины: «унарный», «бинарный», «операнд»
Прежде, чем мы двинемся дальше, давайте разберёмся с терминологией.

Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».

Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный:

let x = 1;

x = -x;
alert( x ); // -1, применили унарный минус
Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

let x = 1, y = 3;
alert( y - x ); // 2, бинарный минус вычитает значения
Формально, в последних примерах мы говорим о двух разных операторах, использующих один символ: оператор отрицания (унарный оператор, который обращает знак) и оператор вычитания (бинарный оператор, который вычитает одно число из другого).`


`
Взятие остатка %
Оператор взятия остатка %, несмотря на обозначение, никакого отношения к процентам не имеет.

Результат a % b – это остаток от целочисленного деления a на b.

Например:

alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3
alert( 8 % 4 ); // 0, остаток от деления 8 на 4
Возведение в степень **
Оператор возведения в степень a ** b возводит a в степень b.

В школьной математике мы записываем это как ab.

Например:

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
Математически, оператор работает и для нецелых чисел. Например, квадратный корень является возведением в степень ½:

alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)`

`Сложение строк при помощи бинарного +`

let s = "моя" + "строка"
console.log(s);

`
Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.

Например:
`
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // будет "41", а не "221"




alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам


`Приведение к числу, унарный +
Плюс + существует в двух формах: бинарной, которую мы использовали выше, и унарной.

Унарный, то есть применённый к одному значению, плюс + ничего не делает с числами. Но если операнд не число, унарный плюс преобразует его в число.

Например:

// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0

На самом деле это то же самое, что и Number(...), только короче.





Бинарный плюс сложит их как строки:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки

Поэтому используем унарный плюс, чтобы преобразовать к числу:

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5
`


`

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0`


`

Присваивание по цепочке
Рассмотрим ещё одну интересную возможность: цепочку присваиваний.

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4`


`
Сокращённая арифметика с присваиванием
Часто нужно применить оператор к переменной и сохранить результат в ней же.

Например:

let n = 2;
n = n + 5;
n = n * 2;
Эту запись можно укоротить при помощи совмещённых операторов += и *=:

let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

alert( n ); // 14


Инкремент/декремент
Одной из наиболее частых числовых операций является увеличение или уменьшение на единицу.

Для этого существуют даже специальные операторы:

Инкремент ++ увеличивает переменную на 1:

let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3
Декремент -- уменьшает переменную на 1:

let counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
alert( counter ); // 1
Важно:
Инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке.
`

let counter = 1;
let a = ++counter; // (*)

alert(a); // 2


let count = 1;
let b = counter++; // (*) меняем ++counter на counter++

alert(a); // 1


`
Подведём итоги:

Если результат оператора не используется, а нужно только увеличить/уменьшить переменную, тогда без разницы, какую форму использовать:

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же
Если хочется тут же использовать результат, то нужна префиксная форма:

let counter = 0;
alert( ++counter ); // 1
Если нужно увеличить и при этом получить значение переменной до увеличения – нужна постфиксная форма:

let counter = 0;
alert( counter++ ); // 0
`


let counter1 = 1;
alert( 2 * ++counter1 ); // 4

// Сравните с:

let counter2 = 1;
alert( 2 * counter2++ ); // 2, потому что counter++ возвращает "старое" значение


// Лучше использовать стиль «одна строка – одно действие»:

let counter3 = 1;
alert( 2 * counter3 );
counter3++;



`
Побитовые операторы

Поддерживаются следующие побитовые операторы:

AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )




Оператор «запятая»
Оператор «запятая» (,) редко применяется и является одним из самых необычных. Иногда он используется для написания более короткого кода, поэтому нам нужно знать его, чтобы понимать, что при этом происходит.

Оператор «запятая» предоставляет нам возможность вычислять несколько выражений, разделяя их запятой ,. Каждое выражение выполняется, но возвращается результат только последнего.

Например:

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (результат вычисления 3 + 4)
`

//ЗАДАЧИ
//1
`let a = 1, b = 1;

alert( ++a ); // 2, префиксная форма возвращает новое значение
alert( b++ ); // 1, постфиксная форма возвращает старое значение

alert( a ); // 2, значение увеличено один раз
alert( b ); // 2, значение увеличено один раз`

//2 

`let a = 2;

let x = 1 + (a *= 2);

a = 4 (умножено на 2)
x = 5 (вычислено как 1 + 4)`

//3

"" + 1 + 0//10
"" - 1 + 0//-1
true + false//1
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//45px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//NaN
"  -9  " + 5// " -9 5"
"  -9  " - 5//-14
null + 1//1
undefined + 1//Nan
" \t \n" - 2//-2



`let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b);


или
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b);`