КОПИРОВАНИЕ ОБЪЕКТОВ И ССЫЛКИ

ОБЪЕКТЫ ХРАНЯТЬСЯ И КОПИРУЮТСЯ ПО ССЫЛКЕ, тогда как примитивные значение - всегда копируются как целое значение.

  ПЕРМЕННАЯ, КОТОРОЙ ПРИСВОЕН ОБЪЕКТ, ХРАНИТ НЕ САМ ОБЪЕКТ, А ЕГО АДРЕС В ПАМЯТИ - ДРУГИМИ СЛОВАМИ ССЫЛКУ НА НЕГО.

ПРИ КОПИРОВАНИИ ПЕРЕМЕННОЙ ОБЪЕКТА КОПИРУЕТСЯ ССЫЛКА, НО САМ ОБЪЕКТ НЕ ДУБЛИРУЕТСЯ.

let user = { name: "John" };

let admin = user; //копируется ссылка
теперть есть две переменные, каждая из которых содержит ссылку на один и тот же объект.

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"


СРАВНЕНИЕ ПО ССЫЛКЕ

ДВА ОБЪЕКТА РАВНЫ ТОЛЬКО В ТОМ СЛУЧАЕ, ЕСЛИ ЭТО ОДИН И ТОТ ЖЕ ОБЪЕКТ.

let a = {};
let b == a; // копирование по ссылке

alert(a == b) // true, обе переменные ссылаются на один и тот же объект
alert(a === b) // true

И ЗДЕСЬ ДВА НЕЗАВИСИМЫХ ОБЪЕКТА НЕ РАВНЫ, ДАЖЕ ЕСЛИ ОНИ ВЫГЛЯДЯТ ОДИНАКОВО(оба пусты):
let a = {}
let b = {} //два независимых объекта

alert(a == b) // false

КЛОНИРОВАНИЕ И ОБЪЕДИНЕНИЕ, Object.assign

Итак, копирование объектной переменной создает еще одну ссылку на тот же объект.
но что если нужно дублировать объект ?

  let user = {
    name: "John",
    age: 30
  };

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

alert(user.name); // все ещё John в первоначальном объекте

ТАКЖЕ МЫ МОЖЕИ ИСПОЛЬЗОВАТЬ ДЛЯ ЭТОГО МЕТОД Object.assign

Object.assign(dest, [src1, src2, src3...])

  - Первый аргумент dest — целевой объект.
- Остальные аргументы src1, ..., srcN(может быть столько, сколько необходимо) являются исходными объектами
  - Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest.Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
- Возвращает объект dest.

  Например, мы можем использовать его для объединения нескольких объектов в один:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "John", canView: true, canEdit: true }

Если скопированное имя свойства уже существует, оно будет перезаписано:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // теперь user = { name: "Pete" }

Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

  let user = {
    name: "John",
    age: 30
  };

let clone = Object.assign({}, user);
Он копирует все свойства user в пустой объект и возвращает его.

ВЛОЖЕННОЕ КЛОНИРОВАНИЕ

до сих пор мы предполагали, что все св - ва user примитивные.

НО СВ - ВА МОГУТ БЫТЬ И ССЫЛКАМИ НА ДРУГИЕ ОБЪЕКТЫ.

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert(user.sizes.height); // 182

Теперь недостаточно просто скопировать clone.sizes = user.sizes, потому что user.sizes – это объект, он будет скопирован по ссылке.Таким образом, clone и user будут иметь общий объект sizes:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, тот же объект

// user и clone обладают общим свойством sizes
user.sizes.width++;       // изменяем свойства в первом объекте
alert(clone.sizes.width); // 51, видим результат в другом

Чтобы исправить это, мы должны использовать цикл клонирования, который проверяет каждое значение user[key] и, если это объект, тогда также копирует его структуру.Это называется «глубоким клонированием».

Мы можем реализовать глубокое клонирование, используя рекурсию.Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, например _.cloneDeep(obj) из библиотеки JavaScript lodash.

Также мы можем использовать глобальный метод structuredClone(), который позволяет сделать полную копию объекта.К сожалению он поддерживается только современными браузерами.Здесь можно ознакомиться с поддержкой этого метода.

Итого
Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение. Таким образом, копирование такой переменной или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.

Все операции с использованием скопированных ссылок (например, добавление/удаление свойств) выполняются с одним и тем же объектом.

Чтобы создать «реальную копию» (клон), мы можем использовать Object.assign для так называемой «поверхностной копии» (вложенные объекты копируются по ссылке) или функцию «глубокого клонирования», такую как _.cloneDeep(obj).