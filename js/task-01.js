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

// const list = document.querySelectorAll('.item');
// console.log(`Number of categories: ${list.length}`);

// поиск li в ul с id
// const subList = document.querySelectorAll('#categories>li');
// subList.forEach(element => {
//     const nameSubList = element.firstElementChild.textContent;
//     const numberSubList = element.lastElementChild.children.length;
//     console.log(`Category: ${nameSubList} \n Elements: ${numberSubList}`);
// });

// 1. поиск по классу
const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);
// 2. перебор массива
list.forEach(element => {
    const nameSubList = element.firstElementChild.textContent;
    const numberSubList = element.lastElementChild.children.length;
    console.log(`Category: ${nameSubList}`);
    console.log(`Elements: ${numberSubList}`);
});

