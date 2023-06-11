"use strict";

let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);
let outputEl = document.querySelector('#name-output');
function onInputChange(event) {
  outputEl.textContent = event.target.value;
  console.log(outputEl);

//     inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';

    if (event.target.value === '') {
      outputEl.textContent = 'Anonymous'
    }  
}
