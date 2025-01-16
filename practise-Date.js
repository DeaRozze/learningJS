// // 1. Создание объектов

// // текущая дата и время
// let now = new Date()
// console.log(now);

// //дата по определенному времени
// let specificDate = new Date('2025-01-15T12:00:00')
// console.log(specificDate); //Wed Jan 15 2025 12:00:00 GMT+0300 (Москва, стандартное время)

// //дата по году, месяцу, дню, часам, минутам, секундам, миллисекундам
// let customDate = new Date(2025, 0, 15, 12, 0, 0, 0) //месяцы начинаются с 0
// console.log(customDate); // Wed Jan 15 2025 12:00:00 GMT+0300 (Москва, стандартное время)


// //2. Методы работы с датой

// //Получение компонентов даты

// let date = new Date()

// console.log(date.getFullYear()); // год
// console.log(date.getMonth()); // месяц
// console.log(date.getDate()); // день
// console.log(date.getHours()); // часы
// console.log(date.getMinutes()); // минуты
// console.log(date.getSeconds()); // секунды
// console.log(date.getMilliseconds()) // миллисекунды

// //установка компонентов даты
// //аналогичны методам получения

// let date2 = new Date()
// date.setFullYear(2025)
// date.setMonth(0)
// date.setDate(15)
// console.log(date2);// Wed Jan 15 2025 14:11:54

// //3. Формирование даты 
// //JavaScript предоставляет метод toLocaleString(), который позволяет форматировать дату в зависимости от места.
// let date3 = new Date();
// console.log(date3.toLocaleString());  // выводит дату в локальном формате
// console.log(date3.toLocaleDateString());  // только дата
// console.log(date3.toLocaleTimeString());  // только время

// //4. Операции с датами
// //Разница между датами
// //Для вычисления разницы между двумя датами можно использовать методы getTime(), которые возвращают время в миллисекундах с 1 января 1970 года (временная метка).

// let date1 = new Date('2025-01-01')
// let newDate = new Date('2025-01-15')
// let diff = newDate.getTime() - date1.getTime()
// console.log(diff); //разница в миллисекундах
// console.log(diff / (1000 * 60 * 60 * 24));  // разница в днях

// //Манипуляции с датами
// //Для выполнения операций с датами, таких как прибавление или вычитание дней, используем методы setDate() или setTime().

// let finalDate = new Date()
// date.setDate(date.getDate() + 7)
// console.log(date); // дата через 7 дней

//Задачи

// //Напишите функцию, которая принимает строку с датой (например, "2025-01-15") и возвращает день недели (например, "Вторник").

// function getDayOfWeek(dateStr) {
//   const date = new Date(dateStr)
//   const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//   return daysOfWeek[date.getDay()]
// }

// console.log(getDayOfWeek('2025-01-14'));


// // Напишите функцию, которая принимает две даты и возвращает количество дней между ними.

// function daysBetweenDates(dateStr1,dateStr2) {
//   const date1 = new Date(dateStr1)
//   const date2 = new Date(dateStr2)
//   const diffTime = Math.abs(date2.getTime() - date1.getTime())
//   return Math.floor(diffTime / (1000 * 3600 * 24))  // перевести миллисекунды в дни
// }

// console.log(daysBetweenDates('2025-01-01', '2025-01-15')); // 14


// //Задача 3:

// // Напишите функцию, которая выводит текущее время в формате "Часы:Минуты:Секунды", обновляемое каждую секунду.

// function displayCurrentTime() {
//   setInterval(() => {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, '0');
//       const minutes = String(now.getMinutes()).padStart(2, '0');
//       const seconds = String(now.getSeconds()).padStart(2, '0');
//       console.log(`${hours}:${minutes}:${seconds}`);
//   }, 1000);
// }

// displayCurrentTime();


// // Задача 4:

// //Напишите функцию, которая принимает год и месяц и возвращает количество дней в этом месяце.

// function getDaysInMonth(year, month) {
//   // Месяцы начинаются с 0, поэтому для январь передаем 0, для февраль - 1 и так далее.
//   return new Date(year, month + 1, 0).getDate();  // Создаем объект Date для следующего месяца, и возвращаем последний день текущего
// }

// console.log(getDaysInMonth(2025, 0));  // 31 (январь)
// console.log(getDaysInMonth(2025, 1));  // 28 (февраль, невисокосный год)


// //Задача 5:
// //Напишите функцию, которая принимает дату и возвращает строку в формате "DD.MM.YYYY".

// function formatDate(dateStr) {
//   const date = new Date(dateStr);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}.${month}.${year}`;
// }

// console.log(formatDate("2025-01-15"));  // "15.01.2025"


//Учебник

// const date = new Date(2012, 1, 20, 3, 12)
// console.log(date);


// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
//   return days[date.getDay()]
// }

// let date = new Date(2014, 0, 3)
// console.log(getWeekDay(date));


// function getLocalDay(date) {
//   let day = date.getDay()

//   if (day == 0) {
//     day = 7
//   }
//   return day
// }

// let date2 = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getLocalDay(date) );   



// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// function getWeekDay(date) {
//   const arr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',]
//   console.log(arr[date.getDay()])
// }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log(getWeekDay(date));        // нужно вывести "ВТ"



// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.


// function getLocalDay(date) {
//  return date.getDay() 
// }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getLocalDay(date) );       // вторник, нужно показать 2



// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:


// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days)
//   return date.getDate()
// }




// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
// // P.S. Функция не должна изменять переданный ей объект date.





// // Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// // Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// // В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// // В противном случае, если меньше часа, вывести "m мин. назад".
// // В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// // Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

function getSecondsToday() {
  
}


getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.