"use strict";

// события
const refs = {
  render: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.getElementById('boxes'),
};

// слушатели
refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);

// функция получения кол-ва div
function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
};

// функция создания div
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {

    const size = basicSize + i * 10;

    const div = document.createElement('div');

    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} `;
    
    fragment.appendChild(div);
  }
  refs.boxes.appendChild(fragment);
}

// функция очищения содержимого div
function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

// функция генерации цвета (была в задании)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
