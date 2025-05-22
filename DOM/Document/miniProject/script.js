// Получаем элементы из DOM
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.querySelector("#todo-list");

// Добавление задачи
addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  // Создаём элемент задачи
  const item = document.createElement("div");
  item.className = "todo-item";

  // Добавляем текст
  item.innerHTML = `
    <span>${text}</span>
    <span class="remove-btn">&times;</span>
  `;

  // Добавляем в список
  list.appendChild(item);

  // Очищаем поле ввода
  input.value = "";

  // Назначаем обработчик на кнопку удаления
  const removeBtn = item.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    item.remove();
  });
});
