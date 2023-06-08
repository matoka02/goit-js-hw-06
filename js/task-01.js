"use strict";

// const generalList = Array.from(document.querySelectorAll('ul#categories>li.item'));
// const generalList = Array.from(document.querySelectorAll('.item'));
// console.log(`Number of categories: ${generalList.length}`);
// console.log(generalList);

// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });

const generalList = document.querySelectorAll('.item');
console.log(`Number of categories: ${generalList.length}`);
// console.log(generalList);

const partsOfList = document.querySelectorAll('#categories>li');
partsOfList.forEach(element => {
    const nameList = element.firstElementChild.textContent;
    const numberList = element.lastElementChild.children.length;
    console.log(`Category: ${nameList} \n Elements: ${numberList}`);
});

