"use strict";

// let valueEl = Number(document.querySelector('#value').textContent);
let valueEl = 0;

let counterValue = document.querySelector('#value');
console.log(counterValue.textContent);

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
});
dekrBtn.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
    // console.log("counterValue", counterValue);
});

