"use strict";

const refs = {
  render: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.getElementById('boxes'),
};

refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
};

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

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
