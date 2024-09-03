// Задание 1

function thirdPower(num) {
  return num**3;
}
console.log(thirdPower(2) + thirdPower(3));

// Задание 2

function SalaryСalculation(sal){
  console.log(`Размер заработной платы за вычетом налогов равен ${sal*0.87}`)
}

let numb = prompt(`Введите число`);
if (isNaN(numb))
  {alert(`Вы ввели не число`)}
else {alert(`Принято`); SalaryСalculation(numb);};

// Задание 3

function minimumOf3 (num1, num2, num3){
  let max;
  if (num1 > num2){max = num1}
  else{max = num2};
  if (max < num3){max = num3};
  return max;
};

let num1 = Number(prompt(`Введите 1-е число: `));
let num2 = Number(prompt(`Введите 2-е число: `));
let num3 = Number(prompt(`Введите 3-е число: `));
alert(`Из 3-х чисел максимальное ${minimumOf3(num1, num2, num3)}`);

// Задание 4

function sum (num1, num2){
  alert(`Сумма чисел равна ${num1 + num2}`);
};
function difference (num1, num2){
  if (num1 > num2)
    {alert(`Разность чисел равна ${num1 - num2}`);}
  else {alert(`Разность чисел равна ${num2 - num1}`);};
};
function multiplication (num1, num2){
  alert(`Умножение чисел равно ${num1 * num2}`);
};
function division (num1, num2){
  alert(`Деление первого числа на второе равно ${num1 / num2}`);
};

let numb1 = Number(prompt(`Введите 1-е число: `));
let numb2 = Number(prompt(`Введите 2-е число: `));
sum(numb1, numb2);
difference(numb1, numb2);
multiplication(numb1, numb2);
division(numb1, numb2);