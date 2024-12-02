
// ЗАДАЧА из RoadMap

const obj = {
  calls: 0,
  valueOf() {
    this.calls++;
    if (this.calls === 1) return -1;
    return 1;
  }
};

console.log(String(obj < 0) + String(obj < 0));



// Задача 1: Переопределение valueOf и toString

// Создайте объект, который будет возвращать разные значения для метода valueOf и toString. При этом:


// Чтобы выражение obj + 1 возвращало 11 (если obj является вашим объектом).

// А String(obj) должно возвращать "Hello".

const obj = {
  valueOf() {
    return 1
  },
  toString() {
    return "Hello"
  }
}

console.log(obj + '1')
alert(obj)

// Задача 2: Счетчик вызовов


// Создайте объект, у которого есть метод valueOf, который будет хранить и возвращать количество раз, когда он был вызван. При этом:


// Если obj меньше 10, он должен возвращать количество вызовов.

// Если obj больше или равно 10, возвращайте 10.

const count = {
  calls: 0,
  valueOf: function () {
    this.calls++;
    if (this.calls < 4) {
      return this.calls;
    }
    return 5;
  }
};

console.log(count < 4);
console.log(count < 4);
console.log(count < 4);
console.log(count < 4);
console.log(count < 4);



// Задача 3: Персонализированное сообщение

// Создайте объект user, который имеет свойство name и метод valueOf.Метод valueOf должен возвращать длину имени пользователя.При этом:


// Если длина имени меньше 5, выводите сообщение "Имя слишком короткое".

// Если длина имени 5 или больше, просто возвращайте длину имени как число.

const user = {
  name: 'Vladislav',
  valueOf() {
    const length = this.name.length;
    if (length < 5) {
      return "Имя слишком короткое";
    }
    return length;
  }
}

console.log(user < 5); // false
console.log(String(user)); // "[object Object]"
console.log(user.valueOf()); // 9

user.name = 'Bob';
console.log(user < 5); // "Имя слишком короткое"
console.log(user.valueOf());// "Имя слишком короткое"


Задача 4: Конкатенация строк


// Создайте объект, который будет иметь метод toString, возвращающий true, 
// а также метод valueOf, возвращающий 5. Выведите результат выполнения следующего кода:

// const obj = ваш_объект;
// console.log(obj + " is a number"); 
// console.log(String(obj));

const obj = {
  toString() {
    return true
  },
  valueOf() {
    return 5
  }
};
console.log(obj + " is a number");
console.log(String(obj));

// Задача 5: Сложение с примитивами

// Создайте объект, который имеет:


// Метод valueOf, возвращающий 42.

// Метод toString, возвращающий "The Answer".
// Проверьте результат выполнения этого кода:

const obj = {
  valueOf() {
    return 42
  },
  toString() {
    return "The Answer"
  }
};
console.log(obj + 8); // Какой результат? 50
console.log(String(obj)); // Какой результат? "The Answer"


Задача: Создание объекта "Автомобиль"

const car = {
  make: 'BMW',
  model: 'M5',
  year: 2010,
  mileage: 0,
  addMileage(distance) {
    if (typeof distance !== 'number' || distance < 0) {
      throw new Error("Некорректное значение пробега")
    }
    this.mileage += distance;
  },
  getInfo() {
    return `Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}, Пробег: ${this.mileage} км`
  },
  isVintage() {
    if (this.year > 20) {
      return true
    } return false
  }
}

console.log(car.getInfo()); 
car.addMileage(100);
console.log(car.getInfo()); 
console.log(car.isVintage());