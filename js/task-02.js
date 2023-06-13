"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// // отклонено
// const listRef = document.querySelector('#ingredients');

// const arr = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredients[i];
//   arr.push(li);
// }
// listRef.append(...arr);

// // отклонено
// const listRef = document.querySelector('#ingredients');

// const markup = ingredients.map((el) =>
// `<li class="item">
// ${el}
// </li>`).join('');
// // console.log(markup);

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
