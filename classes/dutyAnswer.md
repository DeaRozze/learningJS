# Св-во которое удалили из языка, из-за class не просто синтаксический сахар

В `JavaScript` не удаляли никакое свойство, которое мешало бы повторить `class` без него. Однако, изменили механизм, связанный с `prototype.constructor` и добавили `[[HomeObject]]`, что сделало классы чем-то большим, чем просто синтаксическим сахаром.

# Что такое `[[HomeObject]]`?

`[[HomeObject]]` — это внутреннее скрытое свойство, которое есть у методов, определённых внутри `class`. Оно позволяет методам правильно работать с `super`.

`До ES6 (функции-конструкторы)`
Раньше, если пытаться эмулировать классы через прототипы, `super` не работал:

```JavaScript
function Parent() {}

Parent.prototype.sayHello = function () {
    console.log("Hello from Parent");
};

function Child() {}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.sayHello = function () {
    // Нельзя вызвать super здесь
    console.log("Hello from Child");
};

const child = new Child();
child.sayHello(); // "Hello from Child"
```

В обычных функциях `super` просто не работал, потому что у них не было `[[HomeObject]]`.

`После ES6 (классы)`
Теперь в классах `super` работает, потому что методы получают `[[HomeObject]]`:

```JavaScript
class Parent {
    sayHello() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    sayHello() {
        super.sayHello(); // Теперь можно вызывать super
        console.log("Hello from Child");
    }
}

const child = new Child();
child.sayHello();
/*
Hello from Parent
Hello from Child
*/
```

`Почему это важно?`

- `super` теперь работает в классах благодаря `[[HomeObject]]`, и этот механизм невозможно воспроизвести без `class`.

- Если попытаться вручную создать объекты через `Object.create()`, `super` работать не будет, потому что обычные функции не запоминают, откуда они были вызваны.

Но если говорить именно об удалении, то самым близким изменением было то, что методы классов больше не имеют свойства `prototype`, в отличие от обычных функций.

`До ES6 (функции-конструкторы)`
Раньше в функциях каждый метод был просто обычной функцией, и у него был свой `prototype`:

```JavaScript
function Parent() {}
Parent.prototype.sayHello = function () {
    console.log("Hello from Parent");
};

console.log(typeof Parent.prototype.sayHello.prototype); // "object" (у метода есть prototype!)
```

`После ES6 (классы)`
Теперь методы в `class` не имеют `prototype`, потому что они не являются обычными функциями:

```JavaScript
class Parent {
    sayHello() {
        console.log("Hello from Parent");
    }
}

console.log(typeof Parent.prototype.sayHello.prototype); // "undefined" (у метода нет prototype!)
```

### Почему это важно?

Удаление prototype у методов классов делает их `неконструируемыми` (не вызываемыми с `new`), то есть методы классов нельзя использовать как конструкторы:

```JavaScript
lass Parent {
    sayHello() {}
}

new Parent.prototype.sayHello(); // TypeError: sayHello is not a constructor

Аналогичный код с функцией работает:

function Parent() {}
Parent.prototype.sayHello = function () {};

new Parent.prototype.sayHello(); // Всё нормально
```
