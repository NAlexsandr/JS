// Задание 1
console.log(`1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.`);

const bodyEl = document.querySelector(`body`);
bodyEl.onload = function(){
  console.log(`все теги прогрузились`);
}

// Задание 2
console.log(`2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.`);

window.addEventListener('load', function(e){
  console.log(`страница загрузилась`);
})

// Задание 3
console.log(`3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- Собщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
- Необходимо использовать делегирование.`);

document.addEventListener(`click`,function(e) {
  console.log(e.target);
  if (e.target.classList.contains('super_element')) {
    console.log(`присутствует класс "super_element"`);
  } else {
    console.log(`отсутствует класс "super_element"`);
  };
})

// Задание 4
console.log(`4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."`);

const textareaEl = document.querySelector(`textarea`);
textareaEl.addEventListener(`mouseover`, function(e) {
  console.log(`Вы навели на textarea.`);
})

// Задание 5
console.log(`5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование."`);

const ulEl = document.querySelector(`ul`);
ulEl.addEventListener(`click`,function(e){
  const targetEl = e.target;
  //console.log(e.target);
  if (targetEl.tagName.toLowerCase() === `button`) {
    //console.log(targetEl.tagName);
    console.log(targetEl.textContent);
  }
})

// Задание 6
console.log(`6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

  *** Ответ: Погружение - при взаимодействии с объектом. Сначала событие будет обработано на последнем, далее обработчик сработает на всех потомках и только потом на всех родителях.
  `);

// Задание 7
console.log(`7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.`);
const liEls = document.querySelectorAll(`li`);
console.log(liEls);
for (let i = 1; i < liEls.length; i = i + 2) {
  liEls[i].style.backgroundColor = `blue`;
}