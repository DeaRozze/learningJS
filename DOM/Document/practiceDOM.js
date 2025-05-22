// В браузере глобальным объектом является window
// 1. Глобальный объект JavaScript: все глобальные переменные и функции становятся его свойствами
// 2. Представление окна браузера: содержит методы и свойства для управления окном.
function sayHi() {
  alert("Hello");
}

window.sayHi();

// Получение высоты окна браузера:

alert(window.innerHeight);

// Навигация по DOM-дереву

let body = document.body;

console.log(body.parentNode); // html
console.log(body.childNodes); // NodeList из всех дочерних узлов
console.log(body.firstChild); // Первый дочерний узел
console.log(body.lastChild); // Последний дочерний узел

// Фильтрация элементов

let ul = document.querySelector("ul");

console.log(ul.children); // HTMLCollection из li элементов
console.log(ul.firstElementChild); // Первый li элемент
console.log(ul.lastElementChild); // Последний li элемент

for (let elem of document.body.children) {
  console.log(elem.tagName); // Выводит теги всех дочерних элементов body
}

// Методы поиска DOM-элементов

<div id="myDiv">Привет!</div>;

let div = document.getElementById("myDiv");
console.log(div.textContent); // Привет!

<ul>
  <li>Один</li>
  <li>Два</li>
</ul>;

let notes = document.getElementsByClassName("note");
console.log(notes[0].textContent);

<div class="box" id="main-box">
  Текст
</div>;

let el = document.querySelector("#main-box");
console.log(el.className); //box

// {
// <p class="text">Первый</p>
// <p class="text">Второй</p>
// }

let texts = document.querySelectorAll(".text");
texts.forEach((p) => console.log(p.textContent));
// Первый
// Второй
