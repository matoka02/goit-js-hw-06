"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listRef = document.querySelector('#ingredients');

// const arr = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredients[i];
//   arr.push(li);
// }
// listRef.append(...arr);

const listRef = document.querySelector('#ingredients');

const markup = ingredients.map((el) =>
`<li class="item">
${el}
</li>`).join('');
// console.log(markup);

listRef.insertAdjacentHTML('beforeend', markup);
