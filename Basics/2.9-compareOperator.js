`
Операторы сравнения


Результат сравнения имеет логический тип

Все операторы сравнения возвращают значение логического типа:

true – означает «да», «верно», «истина».
false – означает «нет», «неверно», «ложь».

Например:

alert( 2 > 1 );  // true (верно)
alert( 2 == 1 ); // false (неверно)
alert( 2 != 1 ); // true (верно)

let result = 5 > 4; // результат сравнения присваивается переменной result
alert( result ); // true
`


  `
Сравнение строк
Чтобы определить, что одна строка больше другой, JavaScript использует «алфавитный» или «лексикографический» порядок.

Другими словами, строки сравниваются посимвольно.

Например:

alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

`


  `
Сравнение разных типов
При сравнении значений разных типов JavaScript приводит каждое из них к числу.

Например:

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1
Логическое значение true становится 1, а false – 0.

Например:

alert( true == 1 ); // true
alert( false == 0 ); // true
Забавное следствие
Возможна следующая ситуация:

Два значения равны.
Одно из них true как логическое значение, другое – false.
Например:

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
С точки зрения JavaScript, результат ожидаем. Равенство преобразует значения, используя числовое преобразование, поэтому "0" становится 0. В то время как явное преобразование с помощью Boolean использует другой набор правил.
`


  `
Строгое сравнение

Использование обычного сравнения == может вызывать проблемы. Например, оно не отличает 0 от false:

alert( 0 == false ); // true

Та же проблема с пустой строкой:

alert( '' == false ); // true
Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу. В итоге, и пустая строка, и false становятся нулём.

Как же тогда отличать 0 от false?
`

  `
Оператор строгого равенства === проверяет равенство без приведения типов.

Другими словами, если a и b имеют разные типы, то проверка a === b немедленно возвращает false без попытки их преобразования.

Давайте проверим:

alert( 0 === false ); // false, так как сравниваются разные типы

Ещё есть оператор строгого неравенства !==, аналогичный !=.

Оператор строгого равенства дольше писать, но он делает код более очевидным и оставляет меньше места для ошибок.
`

  `
Сравнение с null и undefined

оведение null и undefined при сравнении с другими значениями — особое:

При строгом равенстве ===
Эти значения различны, так как различны их типы.

alert( null === undefined ); // false
При нестрогом равенстве ==
Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.

alert( null == undefined ); // true
При использовании математических операторов и других операторов сравнения < > <= >=
Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.
`

  `

Странный результат сравнения null и 0

Сравним null с нулём:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
`

  `
Несравненное значение undefined

Значение undefined несравнимо с другими значениями:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

Почему же сравнение undefined с нулём всегда ложно?

На это есть следующие причины:

Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN, а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.
Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.
`

  `
Как избежать проблем
Зачем мы рассмотрели все эти примеры? Должны ли мы постоянно помнить обо всех этих особенностях? Необязательно. Со временем все они станут вам знакомы, но можно избежать проблем, если следовать надёжным правилам:

Относитесь очень осторожно к любому сравнению с undefined/null, кроме случаев строгого равенства ===.
Не используйте сравнения >= > < <= с переменными, которые могут принимать значения null/undefined, разве что вы полностью уверены в том, что делаете. Если переменная может принимать эти значения, то добавьте для них отдельные проверки.
`

`
Итого
Операторы сравнения возвращают значения логического типа.
Строки сравниваются посимвольно в лексикографическом порядке.
Значения разных типов при сравнении приводятся к числу. Исключением является сравнение с помощью операторов строгого равенства/неравенства.
Значения null и undefined равны == друг другу и не равны любому другому значению.
Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null/undefined. Хорошей идеей будет сделать отдельную проверку на null/undefined.
`

//ЗАДАЧИ

5 > 4// true
"ананас" > "яблоко"//false
"2" > "12"//true
undefined == null//true
undefined === null//false
null == "\n0\n"//false
null === +"\n0\n"//false

`
Разъяснения:

Очевидно, true.
Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
Строгое сравнение разных типов, поэтому false.
Аналогично (4), null равен только undefined.
Строгое сравнение разных типов.
`