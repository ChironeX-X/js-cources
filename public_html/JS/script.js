'use strict';

// методы ниже работают с ДОМом

const box = document.getElementById('box');

console.log(box);

//const btns = document.getElementsByTagName('button')[1];
//
//// мы получаем псевдомассив!!!
//// с помощью квадратных скобок ищем элемент по номеру
//
//console.log(btns);

const btns = document.getElementsByTagName('button');

// Если хотим использовать из коллекции
// элемент, ставим вот так скобки
//  
// Даже если это один элемент, 
// все равно получаем псевдомассив
//


console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

//Теперь нормальный новый метод.
//Отличается тем, что он ищет элемент по CSS 
// селектору, и в отличие от псевдомассивов имеет
// один метод, forEach
// 
//
const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
    console.log(item);
});

// Следующий метод возвразает только один обьект
// Первый, который попадется 
//

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);


