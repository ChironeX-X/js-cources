'use sctrict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth,
      height = box.clientHeight,
      scroll = box.scrollHeight;
      console.log(width, height, scroll);
     
btn.addEventListener('click', ()=>{
    console.log('click!');
//    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});


console.log(box.getBoundingClientRect());
//показывает координаты элемента и многое другое


//какой css применяется к нашему элементу?
//есть в консоли разработчика.

const style = window.getComputedStyle(box);
//можем узнать, укакие стили в данный момент выполняются для элемента, полезно.
console.log(style);
//круто, можно вообще стили получить
//с CSS естественно
// инлайн стили это другое.
// мы просто добавляем инлайн стилями сам css

console.log(document.documentElement.clientHeight);
//у самого document этого свойства нет.
//document.documentElement.scrollTop = 0
//     !!!
//     !!       На основе этого можно сделать стрелочку, которая возвращает 
//     !!       пользователя наверх, вот зачем это надо! Красота!
//     !!!
//window.scrollBy(0,400)
//window.scrollTo(0,400)
