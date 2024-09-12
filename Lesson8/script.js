// Задание 1

for (let index = 0; index <= 10; index++) {
  console.log(index);
}
// Задание 2

const arr =[1,2,3,4,5,6,7];
console.log(arr);             // Было
arr.splice(4,1);
arr.splice(3,1);
console.log(arr);             //Стало

// Задание 3

const arrayR = [];
for (let index = 1; index <=5; index++) {
  arrayR.push(Math.round(Math.random(0,9)*10));
}

console.log(arrayR);  // Созданный массив рандомным способом
let sumElArray = 0;
for (let i = 0; i < arrayR.length; i++) {
  sumElArray = sumElArray + arrayR[i];
}
console.log(`Сумма элемементов массива = ${sumElArray}`)

let minElArray = arrayR[0];
for (let j = 1; j < arrayR.length; j++) {
  if (minElArray > arrayR[j]) {
    minElArray = arrayR[j];
  }
}
console.log(`Минимальное число из элемементов массива = ${minElArray}`);
if (arrayR.indexOf(3) === -1) {
  console.log(`Число 3 среди элементов массива Нет`);
} else {
  console.log(`Число 3 среди элементов массива Есть`);
}

// Задание 4

for (let index = 1; index <= 20; index++) {
  for (let k = 1; k<= index; k++) {
    console.log(`x`);
  };
  console.log(`\n`);
}

for (let i = 1; i <= 20; i++) {
  console.log('x'.repeat(i));
}

const dead = ['Джон Сноу', 'Джофри', 'Нед Старк', 'Король ночи']
const isAryaDead = dead.includes('Арья Старк')
console.log(isAryaDead)