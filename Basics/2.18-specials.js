`Особенности JavaScript
Давайте кратко повторим изученный материал и отметим наиболее «тонкие» моменты.

Структура кода
Инструкции разделяются точкой с запятой:

alert('Привет'); alert('Мир');
Как правило, перевод строки также интерпретируется как разделитель, так тоже будет работать:

alert('Привет')
alert('Мир')
Это так называемая «автоматическая вставка точки с запятой». Впрочем, она не всегда срабатывает, например:

alert("После этого сообщения ждите ошибку")

[1, 2].forEach(alert)
Большинство руководств по стилю кода рекомендуют ставить точку с запятой после каждой инструкции.

Точка с запятой не требуется после блоков кода {…} и синтаксических конструкций с ними, таких как, например, циклы:

function f() {
  // после объявления функции необязательно ставить точку с запятой
}

for(;;) {
  // после цикла точка с запятой также необязательна
}
…Впрочем, если даже мы и поставим «лишнюю» точку с запятой, ошибки не будет. Она просто будет проигнорирована.

Подробности: Структура кода.

Строгий режим
Чтобы по максимуму использовать возможности современного JavaScript, все скрипты рекомендуется начинать с добавления директивы "use strict".

'use strict';

...
Эту директиву следует размещать в первой строке скрипта или в начале тела функции.

Без "use strict" код также запустится, но некоторые возможности будут работать в «режиме совместимости» со старыми версиями языка JavaScript. Нам же предпочтительнее современное поведение.

Некоторые конструкции языка (например, классы, которые нам ещё предстоит изучить) включают строгий режим по умолчанию.

Подробности: Строгий режим — "use strict".

Переменные
Можно объявить при помощи:

let
const (константа, т.е. изменению не подлежит)
var (устаревший способ, подробности позже)
Имя переменной может включать:

Буквы и цифры, однако цифра не может быть первым символом.
Символы $ и _ используются наряду с буквами.
Иероглифы и символы нелатинского алфавита также допустимы, но обычно не используются.
Переменные типизируются динамически. В них могут храниться любые значения:

let x = 5;
x = "Вася";
Всего существует 8 типов данных:

number для целых и вещественных чисел,
bigint для работы с целыми числами произвольной длины,
string для строк,
boolean для логических значений истинности или ложности: true/false,
null – тип с единственным значением null, т.е. «пустое значение» или «значение не существует»,
undefined – тип с единственным значением undefined, т.е. «значение не задано»,
object и symbol – сложные структуры данных и уникальные идентификаторы; их мы ещё не изучили.
Оператор typeof возвращает тип значения переменной, с двумя исключениями:

typeof null == "object" // ошибка в языке
typeof function(){} == "function" // именно для функций
Подробности: Переменные, Типы данных.

Взаимодействие с посетителем
В качестве рабочей среды мы используем браузер, так что простейшими функциями взаимодействия с посетителем являются:

prompt(question, [default])
Задаёт вопрос question и возвращает то, что ввёл посетитель, либо null, если посетитель нажал на кнопку «Отмена».
confirm(question)
Задаёт вопрос question и предлагает выбрать «ОК» или «Отмена». Выбор возвращается в формате true/false.
alert(message)
Выводит сообщение message.
Все эти функции показывают модальные окна, они останавливают выполнение кода и не позволяют посетителю взаимодействовать со страницей, пока не будет дан ответ на вопрос.

Например:

let userName = prompt("Введите имя", "Алиса");
let isTeaWanted = confirm("Вы хотите чаю?");

alert( "Посетитель: " + userName ); // Алиса
alert( "Чай: " + isTeaWanted ); // true
Подробности: Взаимодействие: alert, prompt, confirm.

Операторы
JavaScript поддерживает следующие операторы:

Арифметические
Простые * + - /, а также деление по модулю % и возведение в степень **.

Бинарный плюс + объединяет строки. А если одним из операндов является строка, то второй тоже будет конвертирован в строку:

alert( '1' + 2 ); // '12', строка
alert( 1 + '2' ); // '12', строка
Операторы присваивания
Простые a = b и составные a *= 2.

Битовые операции
Битовые операторы работают с 32-битными целыми числами на самом низком, побитовом уровне. Подробнее об их использовании можно прочитать на ресурсе MDN и в разделе Побитовые операторы.

Условный оператор
Единственный оператор с тремя параметрами: cond ? resultA : resultB. Если условие cond истинно, возвращается resultA, иначе – resultB.

Логические операторы
Логические И &&, ИЛИ || используют так называемое «ленивое вычисление» и возвращают значение, на котором оно остановилось (не обязательно true или false). Логическое НЕ ! конвертирует операнд в логический тип и возвращает инвертированное значение.

Оператор нулевого слияния
Оператор ?? предоставляет способ выбора определённого значения из списка переменных. Результатом a ?? b будет a, если только оно не равно null/undefined, тогда b.

Сравнение
Проверка на равенство == значений разных типов конвертирует их в число (за исключением null и undefined, которые могут равняться только друг другу), так что примеры ниже равны:

alert( 0 == false ); // true
alert( 0 == '' ); // true
Другие операторы сравнения тоже конвертируют значения разных типов в числовой тип.

Оператор строгого равенства === не выполняет конвертирования: разные типы для него всегда означают разные значения.

Значения null и undefined особенные: они равны == только друг другу, но не равны ничему ещё.

Операторы сравнения больше/меньше сравнивают строки посимвольно, остальные типы конвертируются в число.

Другие операторы
Существуют и другие операторы, такие как запятая.

Подробности: Базовые операторы, математика, Операторы сравнения, Логические операторы, Операторы нулевого слияния и присваивания: '??', '??='.

Циклы
Мы изучили три вида циклов:

// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
Переменная, объявленная в цикле for(let...), видна только внутри цикла. Но мы также можем опустить let и переиспользовать существующую переменную.

Директивы break/continue позволяют выйти из цикла/текущей итерации. Используйте метки для выхода из вложенных циклов.

Подробности: Циклы while и for.

Позже мы изучим ещё виды циклов для работы с объектами.

Конструкция «switch»
Конструкция «switch» может заменить несколько проверок if. При сравнении она использует оператор строгого равенства ===.

Например:

let age = prompt('Сколько вам лет?', 18);

switch (age) {
  case 18:
    alert("Так не сработает"); // результатом prompt является строка, а не число

  case "18":
    alert("А так сработает!");
    break;

  default:
    alert("Любое значение, неравное значению выше");
}
Подробности: Конструкция "switch".

Функции
Мы рассмотрели три способа создания функции в JavaScript:

Function Declaration: функция в основном потоке кода

function sum(a, b) {
  let result = a + b;

  return result;
}
Function Expression: функция как часть выражения

let sum = function(a, b) {
  let result = a + b;

  return result;
};
Стрелочные функции:

// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;
У функций могут быть локальные переменные: т.е. объявленные в теле функции. Такие переменные видимы только внутри функции.
У параметров могут быть значения по умолчанию: function sum(a = 1, b = 2) {...}.
Функции всегда что-нибудь возвращают. Если нет оператора return, результатом будет undefined.
Подробности: Функции, Стрелочные функции, основы.`