СБОРКА МУСОРА

управление памятью выполняется автоматически и незаметно.

  ДОСТИЖИМОСТЬ

достижимые значения - это те, которые доступны и используюся.Они гарантированно находятся в памяти.

1. Существует базовое множество достижимых значений, которые не могут быть удалены.

  Например:

-Выполняемая в данный момент функция, её локальные переменные и параметры.
- Другие функции в текущей цепочке вложенных вызовов, их локальные переменные и параметры.
- Глобальные переменные.
- (некоторые другие внутренние значения)
Эти значения мы будем называть корнями.
2. Любое другое значение считается достижимым, если оно доступно из корня по ссылке или по цепочке ссылок.

  Например, если в глобальной переменной есть объект, и он имеет свойство, в котором хранится ссылка на другой объект, то этот объект считается достижимым.И те, на которые он ссылается, тоже достижимы.

// в user находится ссылка на объект
let user = {
  name: "John"
};

Если перезаписать значение user, то ссылка потеряется:

user = null;

Теперь объект John становится недостижимым.К нему нет доступа, на него нет ссылок.Сборщик мусора удалит эти данные и освободит память.

ДВЕ ССЫЛКИ

// в user находится ссылка на объект
let user = {
  name: "John"
};

let admin = user;

user = null;

объект John всё ещё достижим через глобальную переменную admin, поэтому он находится в памяти.Если бы мы также перезаписали admin, то John был бы удалён.

ВЗАИМОСВЯЗАННЫЕ ОБЪЕКТЫ

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

На данный момент все объекты достижимы.

Теперь удалим две ссылки:

delete family.father;
delete family.mother.husband;

Исходящие ссылки не имеют значения.Только входящие ссылки могут сделать объект достижимым.Объект John теперь недостижим и будет удалён из памяти со всеми своими данными, которые также стали недоступны.

НЕДОСТИЖИМЫЙ ОСТРОВ

Возьмём объект family из примера выше.А затем:

family = null;

Бывший объект family был отсоединён от корня, на него больше нет ссылки, поэтому весь «остров» становится недостижимым и будет удалён.

ВНУТРЕННИЕ АЛГОРИТМЫ

Основной алгоритм сборки мусора называется «алгоритм пометок» (от англ. «mark - and - sweep»).

Согласно этому алгоритму, сборщик мусора регулярно выполняет следующие шаги:

Сборщик мусора «помечает» (запоминает) все корневые объекты.
Затем он идёт по ним и «помечает» все ссылки из них.
Затем он идёт по отмеченным объектам и отмечает их ссылки.Все посещённые объекты запоминаются, чтобы в будущем не посещать один и тот же объект дважды.
…И так далее, пока не будут посещены все достижимые(из корней) ссылки.
Все непомеченные объекты удаляются.

НЕКОТОРЫЕ ИЗ ОПТИМИЗАЦИЙ:

-СБОРКА ПО ПОКОЛЕНИЯМ(Generational collection) - объекты делятся на два набора: «новые» и «старые».
-ИНКРЕМЕНТАЛЬНАЯ СБОРКА(Incremental collection) - если объектов много, и мы пытаемся обойти и пометить весь набор объектов сразу, это может занять некоторое время и привести к видимым задержкам в выполнении скрипта.Так что движок делит всё множество объектов на части, и далее очищает их одну за другой.Получается несколько небольших сборок мусора вместо одной всеобщей
  - СБОРКА В СВОБОДНОЕ ВРЕМЯ(Idle - time collection) - чтобы уменьшить возможное влияние на производительность, сборщик мусора старается работать только во время простоя процессора.

    Итого
Главное, что нужно знать:

Сборка мусора выполняется автоматически.Мы не можем ускорить или предотвратить её.
Объекты сохраняются в памяти, пока они достижимы.
Если на объект есть ссылка – вовсе не факт, что он является достижимым(из корня): набор взаимосвязанных объектов может стать недоступен в целом, как мы видели в примере выше.