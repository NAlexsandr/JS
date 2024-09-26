// Задание 1
console.log(`1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.`);

const dropdownItemsElements = document.querySelectorAll(`.dropdown-item`);
console.log(dropdownItemsElements);
console.log(Array.from(dropdownItemsElements));
function addClass(item) {
  item.classList.add(`super-dropdown`);
  }
const arr = Array.from(dropdownItemsElements).forEach(addClass);
console.log(arr);

// Задание 2
console.log(`2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.`);

const btnEl = document.querySelector(`.btn`);
if (btnEl.classList.contains(`btn-secondary`)) {
  btnEl.classList.remove(`btn-secondary`)
} else {
  btnEl.classList.add(`btn-secondary`);
}
console.log(btnEl);

// Задание 3
console.log(`3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".`);

const class_menuEl = document.querySelector(`.menu`);
class_menuEl.classList.remove(`dropdown-menu`);
console.log(class_menuEl);

// Задание 4
console.log(`4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
  <a href="#">link</a>`);

const dropdownArrayDiv = document.getElementsByTagName(`div`);
console.log(dropdownArrayDiv);
let dropdownDiv = null;
for (let i = 0; i < dropdownArrayDiv.length; i++) {
  if (dropdownArrayDiv[i].className = `dropdown`) {
    dropdownDiv = dropdownArrayDiv[i];
  }
}
dropdownDiv.insertAdjacentHTML('afterBegin', `<a href="#">link</a>`);
console.log(dropdownDiv);

  // Задание 5
console.log(`5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".`);

const idEl = document.getElementById(`dropdownMenuButton`);
idEl.id = `superDropdown`;
console.log(idEl);

// Задание 6
console.log(`6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton", используя dataset.`);

const attributEl = document.querySelector(`[aria-labelledby="dropdownMenuButton"]`);
attributEl.setAttribute('data-dd','3');
console.log(attributEl);

// Задание 7
console.log(`7. Удалите атрибут type у элемента с классом "dropdown-toggle".`);

const classEl = document.querySelector(`.dropdown-toggle`);
classEl.removeAttribute(`type`);
console.log(classEl);