"use strict";

// 1. поиск input по dataset
let inputEl = document.querySelector('#name-input');
// 2. слушатель input
inputEl.addEventListener('input', onInputChange);
// 3. поиск span по dataset
let outputEl = document.querySelector('#name-output');
// 4. функция заполнения span
function onInputChange(event) {
  inputEl = event.currentTarget.value;
  console.log(inputEl);

    inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}