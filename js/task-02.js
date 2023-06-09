"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// // 1. поиск по id
// const listRef = document.querySelector('#ingredients');
// // 2. создание элемента
// const list = ingredients.reduce((acc, item) => 
//   acc + `<li class="item">${item}</li>`, ''
// );
// // 3. добавление элементов
// listRef.innerHTML = list;

// console.log(listRef);

// 1. поиск по id
const listRef = document.querySelector('#ingredients');
// 2. создание массива
const arr = [];
for (let i = 0; i < ingredients.length; i++) {
  // 2.1 создание элемента li
  const li = document.createElement('li');
  // 2.2 добавление стиля элемента li
  li.classList.add('item');
  // 2.3 добавление текста в элемент li
  li.textContent = ingredients[i];
  // 2.4 заполнение массива
  arr.push(li);
}
// 3. добавление в ul массива
listRef.append(...arr);
// console.log(listRef);

