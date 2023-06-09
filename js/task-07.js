"use strict";

// 1. поиск span и input по id
const textEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");

// 2. слушатель
inputEl.addEventListener("input", (e) => {
    const size = inputEl.value;
    // console.log(size);

    textEl.style.fontSize = size + "px";
});