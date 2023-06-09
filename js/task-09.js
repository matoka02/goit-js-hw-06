"use strict";

// 1. события
const refs = {
  changeButton: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorValue: document.querySelector('span.color')
};

// 2. слушатели
refs.changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
});

// 3. функция генерации цвета (была в задании)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};