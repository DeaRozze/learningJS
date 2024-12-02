ЧИСЛА 

В современном JS  существует два типа чисел:

1. Обычные числа хранятся в 64 - битном формате IEEE - 754, который также называют "числа с плавающей точкой двойной точности".
2. BigInt числа дают возможность работать с целыми числами произвольной длины. 
Они нужны редко и используются в случаях, когда необходимо работать со значением более чем(2 ^ 53 - 1) или менее чем - (2 ^ 53 - 1). 


СПОСОБЫ ЗАПИСИ ЧИСЛА

нужно записать число 1 миллирд.самый очевидный путь
let billion = 1_000000000

можно так
let billion = 1_000_000_000

символ _ - это синтаксический сахар, он делает число более читабельным.движок JS игнорирует _ между цифрами, поэтому это точно такой же миллиард.

В JS чтобы укоротить запись числа мы можем добавить к нему букву "е" и уцказать необходимое число нулей:

let billion = 1e9 // 1миллирд
alert(7.3e9) //7,3 миллиарда(7,300,000,000)

другими словами "е" умножает число на 1 с указанным количеством нулей.

1e3 === 1 * 1000 //e3 означает *1000
1.23e6 === 1.23 * 1000000 // e6 означает *1000000

а теперь запишем что нибудь очень маленькое. 1 микросекунда

let mcs = 0.000001

в этом случае нам также поможет "e".

let ms = 1e-6; // шесть нулей слева от 1

0.000001 = 1e-6

"e" = деление на 1 с указанным количеством нулей

//1 делится на 1 с 3 нулями
1e-3 === 1 / 1000(=0.01)

// 1.23 делится на 1 с 6 нулями
1.23e-6 === 1.23 / 1000000(=0,00000123)

Шестнадцатеричные, двоичные и восьмеричные числа

Шестнадцатеричные числа широко используются в JavaScript для представления цветов, кодировки символов и многого другого.
  Естественно, есть короткий стиль записи: 0x, после которого указывается число.

    alert(0xff); // 255
alert(0xFF); // 255 (то же самое, регистр не имеет значения)

Двоичные и восьмеричные числа используются не так часто, но они также поддерживаются: 0b для двоичных и 0o для восьмеричных:

let a = 0b11111111; // двоичная (бинарная) форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

alert(a == b); // true, с двух сторон число 255

Есть только 3 системы счисления с такой поддержкой.Для других систем счисления мы рекомендуем использовать функцию parseInt.

  toString(base)

Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.

let num = 255;

alert(num.toString(16));  // ff
alert(num.toString(2));   // 11111111

base может варьироваться от 2 до 36(по умолчанию 10).

Часто используемые:

base = 16 — для шестнадцатеричного представления цвета, кодировки символов и т.д., цифры могут быть 0..9 или A..F.

  base = 2 — обычно используется для отладки побитовых операций, цифры 0 или 1.

base = 36 — максимальное основание, цифры могут быть 0..9 или A..Z.То есть, используется весь латинский алфавит для представления числа.
  Забавно, но можно использовать 36 - разрядную систему счисления для получения короткого представления большого числового идентификатора. 
К примеру, для создания короткой ссылки.Для этого просто преобразуем его в 36 - разрядную систему счисления:

alert(123456..toString(36)); // 2n9c

ДВЕ ТОЧКИ ДЛЯ ВЫЗОВА МЕТОДА

Внимание! Две точки в 123456..toString(36) это не опечатка. 
Если нам надо вызвать метод непосредственно на числе, как toString в примере выше, то нам надо поставить две точки..после числа.

Если мы поставим одну точку: 123456.toString(36), тогда это будет ошибкой, поскольку синтаксис JavaScript предполагает,
  что после первой точки начинается десятичная часть. 
А если поставить две точки, то JavaScript понимает, что десятичная часть отсутствует, и начинается метод.

Также можно записать как(123456).toString(36).

  ОКРУГЛЕНИЕ

Одна из часто используемых операций при работе с числами – это округление.

В JavaScript есть несколько встроенных функций для работы с округлением:

Math.floor
Округление в меньшую сторону: 3.1 становится 3, а - 1.1 — -2.

Math.ceil
Округление в большую сторону: 3.1 становится 4, а - 1.1 — -1.

Math.round
Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а - 1.1 — -1.

Math.trunc(не поддерживается в Internet Explorer)
Производит удаление дробной части без округления: 3.1 становится 3, а - 1.1 — -1.


Например, у нас есть 1.2345 и мы хотим округлить число до 2 - х знаков после запятой, оставить только 1.23.

Есть два пути решения:

1. Умножить и разделить.

  Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100,
    вызвать функцию округления и разделить обратно.

let num = 1.23456;

alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

2.Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.

let num = 12.34
alert(num.toFixed(1)) //'12.3'

Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round:

let num = 12.34
alert(num.toFixed(5)) // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой

Мы можем преобразовать полученное значение в число, используя унарный оператор + или Number(),
  пример с унарным оператором: +num.toFixed(5).

  НЕТОЧНЫЕ ВЫЧИСЛЕНИЯ

  Внутри JavaScript число представлено в виде 64 - битного формата IEEE - 754.
  Для хранения числа используется 64 бита: 52 из них используется для хранения цифр,
  11 для хранения положения десятичной точки и один бит отведён на хранение знака.

  Если число слишком большое, оно переполнит 64 - битное хранилище, JavaScript вернёт бесконечность:

alert(1e500); // Infinity

  Наиболее часто встречающаяся ошибка при работе с числами в JavaScript – это потеря точности.

Посмотрите на это(неверное!) сравнение:

alert(0.1 + 0.2 == 0.3); // false

Да - да, сумма 0.1 и 0.2 не равна 0.3.

  Странно! Что тогда, если не 0.3 ?

    alert(0.1 + 0.2); // 0.30000000000000004

    Но почему это происходит ?

  Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей.Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.

    alert(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
alert(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

Числовой формат IEEE - 754 решает эту проблему путём округления до ближайшего возможного числа.Правила округления обычно не позволяют нам увидеть эту «крошечную потерю точности», но она существует.

  Пример:

alert(0.1.toFixed(20)); // 0.10000000000000000555

И когда мы суммируем 2 числа, их «неточности» тоже суммируются.

Вот почему 0.1 + 0.2 – это не совсем 0.3.

Можно ли обойти проблему ? Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // "0.30"

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)) = '0.30'

Помните, что метод toFixed всегда возвращает строку.
Это гарантирует, что результат будет с заданным количеством цифр в десятичной части. 
Также это удобно для форматирования цен в интернет - магазине $0.30.В других случаях можно использовать унарный оператор +, чтобы преобразовать строку в число:

let sum = 0.1 + 0.2;
alert(+sum.toFixed(2)); // 0.3

Также можно временно умножить число на 100(или на большее), чтобы привести его к целому, выполнить математические действия, а после разделить обратно.Суммируя целые числа, мы уменьшаем погрешность, но она всё равно появляется при финальном делении:

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

Таким образом, метод умножения / деления уменьшает погрешность, но полностью её не решает.

Просто используйте округление, чтобы отрезать «хвосты», когда надо.


Забавный пример
// Привет! Я – число, растущее само по себе!
alert(9999999999999999); // покажет 10000000000000000

Причина та же – потеря точности.
  Из 64 бит, отведённых на число, сами цифры числа занимают до 52 бит, остальные 11 бит хранят позицию десятичной точки и один бит – знак.
  Так что если 52 бит не хватает на цифры, то при записи пропадут младшие разряды.

Интерпретатор не выдаст ошибку, но в результате получится «не совсем то число», что мы и видим в примере выше.
 Как говорится: «как смог, так записал».

 Два нуля

 Другим забавным следствием внутреннего представления чисел является наличие двух нулей: 0 и - 0.

Все потому, что знак представлен отдельным битом, так что, любое число может быть положительным и отрицательным, включая нуль.

В большинстве случаев это поведение незаметно, так как операторы в JavaScript воспринимают их одинаковыми.

  ПРОВЕРКА: isFinite и isNaN

Infinity(и - Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.

NaN представляет ошибку.

Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, поэтому есть функции для их проверки:

isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

Нужна ли нам эта функция ? Разве не можем ли мы просто сравнить === NaN ? К сожалению, нет.Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:

alert(NaN === NaN); // false

isFinite(value) преобразует аргумент в число и возвращает true,
  если оно является обычным числом, т.е.не NaN / Infinity / -Infinity:

alert(isFinite("15")); // true
alert(isFinite("str")); // false, потому что специальное значение: NaN
alert(isFinite(Infinity)); // false, потому что специальное значение: Infinity

Иногда isFinite используется для проверки, содержится ли в строке число:

let num = +prompt("Введите число:", '');

// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
alert(isFinite(num));

Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite.

  Number.isNaN и Number.isFinite

Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite.
 Они не преобразуют аргумент в число, а наоборот – первым делом проверяют, является ли аргумент числом(принадлежит ли он к типу number).

  Number.isNaN(value) возвращает true только в том случае, если аргумент принадлежит к типу number и является NaN. 
 Во всех остальных случаях возвращает false.

  alert(Number.isNaN(NaN)); // true
alert(Number.isNaN("str" / 2)); // true

// Обратите внимание на разный результат:
alert(Number.isNaN("str")); // false, так как "str" является строкой, а не числом
alert(isNaN("str")); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN

Number.isFinite(value) возвращает true только в том случае, если аргумент принадлежит к типу number и не является NaN / Infinity / -Infinity. 
Во всех остальных случаях возвращает false.

  alert(Number.isFinite(123)); // true
alert(Number.isFinite(Infinity)); // false
alert(Number.isFinite(2 / 0)); // false

// Обратите внимание на разный результат:
alert(Number.isFinite("123")); // false, так как "123" является строкой, а не числом
alert(isFinite("123")); // true, так как isFinite сначала преобразует строку "123" в число 123

Не стоит считать Number.isNaN и Number.isFinite более «корректными» версиями функций isNaN и isFinite.
 Это дополняющие друг - друга инструменты для разных задач.


 СРАВНЕНИЕ Object.is

 Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

1. Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.

 2. Значения 0 и - 0 разные: Object.is(0, -0) === false, это редко используется, но технически эти значения разные.

 Во всех других случаях Object.is(a, b) идентичен a === b.

Этот способ сравнения часто используется в спецификации JavaScript.
 Когда внутреннему алгоритму необходимо сравнить 2 значения на предмет точного совпадения, он использует Object.is(Определение SameValue).

 parseInt и parseFloat

 Для явного преобразования к числу можно использовать + или Number(). 
 Если строка не является в точности числом, то результат будет NaN:

alert(+"100px"); // NaN

 Единственное исключение — это пробелы в начале строки и в конце, они игнорируются.

 В реальной жизни мы часто сталкиваемся со значениями у которых есть единица измерения, например "100px" или "12pt" в CSS. 
 Также во множестве стран символ валюты записывается после номинала "19€".Так как нам получить числовое значение из таких строк ?

  Для этого есть parseInt и parseFloat.

    Они «читают» число из строки.Если в процессе чтения возникает ошибка, они возвращают полученное до ошибки число.
 Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой:

alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5

alert(parseInt('12.3')); // 12, вернётся только целая часть
alert(parseFloat('12.3.4')); // 12.3, произойдёт остановка чтения на второй точке

Функции parseInt / parseFloat вернут NaN, если не смогли прочитать ни одну цифру:

alert(parseInt('a123')); // NaN, на первом символе происходит остановка чтения

ВТОРОЙ АРГУМЕНТ parseInt(str, radix)
Функция parseInt() имеет необязательный второй параметр.
Он определяет систему счисления, таким образом parseInt может также читать строки с шестнадцатеричными числами, двоичными числами и т.д.:

alert(parseInt('0xff', 16)); // 255
alert(parseInt('ff', 16)); // 255, без 0x тоже работает

alert(parseInt('2n9c', 36)); // 123456

ДРУГИЕ МАТЕМАТИЧЕСКИЕ ФУНКЦИИ

В JavaScript встроен объект Math, который содержит различные математические функции и константы.

Несколько примеров:

Math.random()
Возвращает псевдослучайное число в диапазоне от 0(включительно) до 1(но не включая 1)

alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (любое количество псевдослучайных чисел)

Math.max(a, b, c...) / Math.min(a, b, c...)
Возвращает наибольшее / наименьшее число из перечисленных аргументов.

  alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

Math.pow(n, power)
Возвращает число n, возведённое в степень power

alert(Math.pow(2, 10)); // 2 в степени 10 = 1024

В объекте Math есть множество функций и констант, включая тригонометрические функции, подробнее можно ознакомиться в документации по объекту Math.

  ИТОГО

Чтобы писать числа с большим количеством нулей:

Используйте краткую форму записи чисел – "e", с указанным количеством нулей.Например: 123e6 это 123 с 6 - ю нулями 123000000.
Отрицательное число после "e" приводит к делению числа на 1 с указанным количеством нулей.Например: 123e-6 это 0.000123(123 миллионных).

Для других систем счисления:

-Можно записывать числа сразу в шестнадцатеричной(0x), восьмеричной(0o) и бинарной(0b) системах счисления
  - parseInt(str, base) преобразует строку в целое число в соответствии с указанной системой счисления: 2 ≤ base ≤ 36.
    - num.toString(base) представляет число в строковом виде в указанной системе счисления base.

Для проверки на NaN и Infinity:

-isNaN(value) преобразует аргумент в число и проверяет, является ли оно NaN
  - Number.isNaN(value) проверяет, является ли аргумент числом, и если да, то проверяет, является ли оно NaN
    - isFinite(value) преобразует аргумент в число и проверяет, что оно не является NaN / Infinity / -Infinity
      - Number.isFinite(value) проверяет, является ли аргумент числом, и если да, то проверяет, что оно не является NaN / Infinity / -Infinity

Для преобразования значений типа 12pt и 100px в число:

Используйте parseInt / parseFloat для «мягкого» преобразования строки в число,
  данные функции по порядку считывают число из строки до тех пор пока не возникнет ошибка.

 Для дробей:

Используйте округления Math.floor, Math.ceil, Math.trunc, Math.round или num.toFixed(precision).

  Помните, что при работе с дробями происходит потеря точности.
Ещё больше математических функций:

ЗАДАЧИ

let a = +prompt('Введите первое число', '')
let b = +prompt('Введите второе число', '')

alert(a + b)

Почему 6.35.toFixed(1) == 6.3 ?

  Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону,
    тогда как 5..9 в большую сторону.

    Например:

alert( 1.35.toFixed(1) ); // 1.4

Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3

Во внутреннем двоичном представлении 6.35 является бесконечной двоичной дробью. Хранится она с потерей точности…

Давайте посмотрим:

alert( 6.35.toFixed(20) ); // 6.34999999999999964473
Потеря точности может как увеличивать, так и уменьшать число. В данном случае число становится чуть меньше, поэтому оно округляется в меньшую сторону.

А для числа 1.35?

alert( 1.35.toFixed(20) ); // 1.35000000000000008882

Тут потеря точности приводит к увеличению числа, поэтому округление произойдёт в большую сторону.

Каким образом можно исправить ошибку в округлении числа 6.35?

Мы должны приблизить его к целому числу, перед округлением:

alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

Обратите внимание, что для числа 63.5 не происходит потери точности. Дело в том, что десятичная часть 0.5 на самом деле 1/2.
Дробные числа, делённые на степень 2, точно представлены в двоичной системе, теперь мы можем округлить число:
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}

Потому что i никогда не станет равным 10.

Запустите скрипт и вы увидите реальные значения i:

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
Ни одно из этих чисел не равно 10.

Это происходит из-за потери точности, при прибавлении таких дробей как 0.2.

Вывод: избегайте проверок на равенство при работе с десятичными дробями.

Случайное число от min до max

Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.

Это можно сделать в 2 шага:

Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
И, если мы прибавим min, то интервал станет от min до max.
Функция:

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

Случайное целое число от min до max

Есть много правильных решений этой задачи. Одно из них – использовать Math.floor для получения случайного числа от min до max+1:

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );
Теперь все интервалы отображаются следующим образом:

число от 1  ... до 1.9999999999  округлится до 1
число от 2  ... до 2.9999999999  округлится до 2
число от 3  ... до 3.9999999999  округлится до 3


    
