"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// // Вариант с reduce
// // 1. поиск по id
// const listRef = document.querySelector('#ingredients');
// // 2. создание элемента
// const list = ingredients.reduce((acc, item) => 
//   acc + `<li class="item">${item}</li>`, ''
// );
// // 3. добавление элементов
// listRef.innerHTML = list;

// console.log(listRef);


// // Вариант с циклом for, отклонено ментором
// // 1. поиск по id
// const listRef = document.querySelector('#ingredients');
// // 2. создание массива
// const arr = [];
// for (let i = 0; i < ingredients.length; i++) {
//   // 2.1 создание элемента li
//   const li = document.createElement('li');
//   // 2.2 добавление стиля элемента li
//   li.classList.add('item');
//   // 2.3 добавление текста в элемент li
//   li.textContent = ingredients[i];
//   // 2.4 заполнение массива
//   arr.push(li);
// }
// // 3. добавление в ul массива
// listRef.append(...arr);
// // console.log(listRef);


// // Вариант с циклом map, отклонено ментором
// // 1. поиск по id
// const listRef = document.querySelector('#ingredients');
// // 2. перебор массива
// const markup = ingredients.map((el) =>
// `<li class="item">
// ${el}
// </li>`).join('');
// console.log(markup);
// // // 3. добавление в ul массива
// listRef.insertAdjacentHTML('beforeend', markup);


const list = document.querySelector('#ingredients');

const li = [];

ingredients.map(ingredient => {
	const item = document.createElement('li');
	item.className = 'item';
	item.textContent = ingredient;
	li.push(item);
})

console.log(li);

list.append(...li);