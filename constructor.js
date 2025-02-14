
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
  this.addItem = function (item, count) {
    let existingItem = this.items.find(cur => cur.name === item.name)
    console.log(existingItem);
    
    if (existingItem) {
      existingItem.count = existingItem.count + count
    } else {
      this.items.push({
        name: item.name,
        price: item.price,
        count: count
      })
    }
  }
  //   this.removeItem = function (item, count) {

  //   },
  //   this.getCheck = function () {

  //   },
  //   this.lockOrder = function () {

  //   },
  //   this.unlockOrder = function () {
  //   }
}

const apple = { name: 'apple', price: 100 }
const bread = { name: 'bread', price: 20 }
const milk = { name: 'milk', price: 50 }

let newInstans = new Purchase()

newInstans.addItem(apple, 2)
newInstans.addItem(bread, 2)
newInstans.addItem(milk, 2)

console.log(newInstans)