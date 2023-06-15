"use strict";

// 1. поиск содержимого <span>
// let valueEl = Number(document.querySelector('#value').textContent);
let valueEl = 0;

// 2. подсчет значений
let counterValue = document.querySelector('#value');
console.log(counterValue.textContent);

// // 3. поиск button по id div
// const dekrBtn = document.querySelector('#counter').firstElementChild;
// const inkrBtn = document.querySelector('#counter').lastElementChild;

// 3. поиск button по dataset
const dekrBtn = document.querySelector('[data-action="decrement"]');
const inkrBtn = document.querySelector('[data-action="increment"]');

// 4. слушатели
inkrBtn.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
});
dekrBtn.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
    // console.log("counterValue", counterValue);
});


// // вариант 
// let counterValue = 0

// const displayCounter = document.querySelector('#value')
// const buttonMinus = document.querySelector('button[data-action="decrement"]')
// const buttonPlus = document.querySelector('button[data-action="increment"]')

// buttonMinus.addEventListener('click', () => {
//     counterValue--
//     displayCounter.textContent = counterValue
// })

// buttonPlus.addEventListener('click', () => {
//     counterValue++
//     displayCounter.textContent = counterValue
// })
