"use strict";

// 1. поиск input по id
let inputEl = document.querySelector('#validation-input');
// 2. задано кол-во символов
let inputLength = inputEl.dataset.length;
// 3. проверка кол-ва введенных символов
const input = document.querySelector('input');
    // 3.1 слушатель
inputEl.addEventListener('change', e => {
    const text = e.target.value;
    // 3.2 проверка пройдена
    if (text.length === +inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
    // 3.3 проверка не пройдена
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});

// inputEl.classList.remove("invalid", "valid");
// let addClass = "invalid";
// if (text.length === +inputLength) addClass = "valid";
// inputEl.classList.add(addClass);

// if (text.length === +inputLength) inputEl.className = "valid";
// else inputEl.className = "invalid";