'use strict';

const btn = document.querySelector('button');


//btn.onclick = function() {
//    alert('click');
//};

//btn.addEventListener('click',()=>{
//    alert('click');
//});
//
// //callback функция, это функция, выполняющаяся строго за другой функцией.
//
//btn.addEventListener('click',()=>{
//    alert('second click');
//});

//события в JS выполняются в виде очереди.

//btn.addEventListener('mouseenter',()=>{
//    console.log('hover');
//});

//для того, чтобы получить информацию о событии, что за элемент используется,
// его координаты например и прочую информацию
// так же как и любой объект в JS он может иметь свои свойства.
// !!!Объект события передается как аргумент в callback функцию
// называть мы его можем как угодно
// Передается ВСЕГДА первым аргументом.

btn.addEventListener('mouseenter',(e)=>{
    console.log(e);
//    console.log('hover');
});

//type и target
//два важных свойства
