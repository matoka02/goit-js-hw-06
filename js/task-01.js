"use strict";

const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(element => {
    const nameSubList = element.firstElementChild.textContent;
    const numberSubList = element.lastElementChild.children.length;
    console.log(`Category: ${nameSubList}`);
    console.log(`Elements: ${numberSubList}`);
});

