"use strict";

// 1. поиск input по dataset
let inputEl = document.querySelector('#name-input');
// 2. слушатель input
inputEl.addEventListener('input', onInputChange);
// 3. поиск span по dataset
let outputEl = document.querySelector('#name-output');
// 4. функция заполнения span


function onInputChange(event) {
  outputEl.textContent = event.target.value;
  console.log(outputEl);

    // inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
  
    if (event.target.value === '') {
      outputEl.textContent = 'Anonymous'
    }
};

// // вариант решения
// const textInput = document.querySelector('#name-input')
// const output = document.querySelector('#name-output')

// textInput.addEventListener('input', event => {
//   output.textContent = event.target.value

//   if (event.target.value === '') {
//     output.textContent = 'Anonymous'
//   }
// })