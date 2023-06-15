"use strict";

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1. поиск по классу
const listRef = document.querySelector('.gallery');
// 2. создание массива li
const markup = images.reduce((acc, { url, alt }) => acc + `<li><img src="${url}" alt="${alt}" width="200" height="200"></li>`, '');
// 3. добавление стилей на li
listRef.style.listStyle = 'none';
listRef.style.display = 'grid';
listRef.style.gridTemplateColumns = 'repeat(3, 1fr)';
listRef.style.gridTemplateRows = '1fr';
listRef.style.gridColumnGap = '10px';
// 4. добавление массива li
listRef.insertAdjacentHTML('beforeend', markup);
// console.log(listRef);