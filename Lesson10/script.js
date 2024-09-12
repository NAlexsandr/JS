// Задание 1
console.log(`Задание 1`);
console.log(``);
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
  }
  for (const item in numbers) {
    if (numbers[item] >= 3) {console.log(item + `: ` + numbers[item]);}
      }
console.log(``);

// Задание 2
console.log(`Задание 2`);
console.log(``);

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
  {
  userId: 10,
  userName: "Alex",
  text: "lorem ipsum",
  rating: {
  likes: 10,
  dislikes: 2, // вывести это число
  },
  },
  {
  userId: 5, // вывести это число
  userName: "Jane",
  text: "lorem ipsum 2", // вывести этот текст
  rating: {
  likes: 3,
  dislikes: 1,
  },
  },
  ],
  };

  console.log(post[`author`]);
  console.log(post[`comments`][0][`rating`][`dislikes`]);
  console.log(post[`comments`][1][`userId`]);
  console.log(post[`comments`][1][`text`]);
  console.log(``);

// Задание 3
console.log(`Задание 3`);
console.log(``);

const productsP = [
  {
  id: 3,
  price: 200,
  },
  {
  id: 4,
  price: 900,
  },
  {
  id: 1,
  price: 1000,
  },
  ];

  function priceChange(prod) {
    prod[`price`] = prod[`price`] * 0.85;
  }
  productsP.forEach(priceChange);
  console.log(`Скидка на товары 15%, новый прайс:`);
  console.log(productsP);

console.log(``);

// Задание 4
console.log(`Задание 4`);
console.log(``);

const products = [
  {
  id: 3,
  price: 127,
  photos: [
  "1.jpg",
  "2.jpg",
  ],
  },
  {
  id: 5,
  price: 499,
  photos: [],
  },
  {
  id: 10,
  price: 26,
  photos: [
  "3.jpg",
  ],
  },
  {
  id: 8,
  price: 78,
  },
  ];

function photoPresent(el){
    if (el[`photos`] == undefined || el[`photos`].length == 0) {
      return false;
    } else {return true};
}

function compareFn(a, b)
{
  if (a[`price`] < b[`price`]) {
    return -1;
  } else if (a[`price`] > b[`price`]) {
    return 1;
  }
  return 0;
}
console.log(`Продукты в которых есть хоть одна фотография:`);
console.log(products.filter(photoPresent));
console.log(`Сортировка по цене:`);
console.log(products.sort(compareFn));

console.log(``);

// Задание 5
console.log(`Задание 5`);
console.log(``);

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const week = {};

if (en.length === ru.length) {
  for (let i = 0; i < en.length; i++) {
    week[en[i]] = ru[i];
  }
  console.log(week);
} else {
  console.log(`Списки дней недели не совпадают`);
}

