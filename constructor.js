
// [Конструктор заказа. Основы. learnjs 1.1..1.4]
// 1. написать функцию конструктор для заказа в магазине.
// Новый инстанс - новый заказ
// у него будут методы
// addItem(item, count) - добавить итем в чек (+ имя +цена)
// removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
// getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
// lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
// unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

// Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке

// 3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов

function Purchase() {
  this.items = []
  this.locked = false;
  this.addItem = function (item, count = 1) {
    if (this.locked) {
      console.log("Order is locked. Cannot add items.");
      return;
    }

    const existingItem = this.items.find(cur => cur.name === item.name)

    if (existingItem) {
      existingItem.count += count
    } else {
      this.items.push({ ...item, count })
    }
  },
    this.removeItem = function (item, count) {
      if (this.locked) {
        console.log("Order is locked. Cannot remove items.");
        return;
      }

      const existingItem = this.items.find(cur => cur.name === item.name)

      if (existingItem) {
        if (count === -1 || existingItem.count <= count) {
          let index = this.items.indexOf(existingItem);
          this.items.splice(index, 1)
        } else {
          existingItem.count -= count
        }
      } else {
        console.log("Item not found in the order.");
      }
    },

    this.getCheck = function () {
      let total = 0;
      let checkInfo = this.items.map(i => {
        let itemTotal = i.item.price * i.count;
        total += itemTotal;
        return `${i.count} x ${i.item.name} - ${itemTotal} руб.`;
      })
      checkInfo.push(`Total: ${total} руб.`);
      return checkInfo.join('\n');
    };
  this.lockOrder = function () {
    this.locked = true;
  };
  this.unlockOrder = function () {
    this.locked = false;
  };
}

const newInstans = new Purchase()

newInstans.addItem({ name: 'apple', price: 100 }, 6)
newInstans.removeItem({ name: 'apple', price: 100 }, 3)
newInstans.addItem({ name: 'bread', price: 20 }, 1)
newInstans.addItem({ name: 'milk', price: 50 }, 1)

console.log(newInstans)
