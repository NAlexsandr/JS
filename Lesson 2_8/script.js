// Задание 1
console.log(`1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.`);

const inputIdFromEl = document.getElementById(`from`);
const spanEl = document.getElementsByTagName(`span`);

console.log(spanEl[0]);
inputIdFromEl.addEventListener('input', function (e) {
  spanEl[0].textContent = inputIdFromEl.value;
});


// Задание 2
console.log(`2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.`);

const ButtonMessageBtnEl = document.querySelector(`.messageBtn`);
ButtonMessageBtnEl.classList.add(`animate_animated`, `animate_fadeInLeftBig`);
ButtonMessageBtnEl.style.visibility = `visible`;
console.log(ButtonMessageBtnEl);

// Задание 3
console.log(`3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.`);

const formEl = document.querySelector(`form`);

const buttonFormEl = formEl.querySelector(`button`);

const inputEl_1 = formEl.querySelector(`input`);

const inputEl_2 = formEl.querySelector(`select`);

const inputEl_3 = formEl.querySelector(`.form-control`);


buttonFormEl.addEventListener('click', function (e) {
  if ((inputEl_1.value == ``) || (inputEl_2.value == ``)) {
    inputEl_1.style.border = `1px solid red`;
    inputEl_1.classList.add("error");
    console.log(inputEl_1);
    inputEl_2.style.border = `1px solid red`;
    inputEl_2.classList.add(`error`);
    
    e.preventDefault();
  }
});
console.log(inputEl_1);
console.log(inputEl_2);
