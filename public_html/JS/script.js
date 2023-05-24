'use strict';

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


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

//btn.addEventListener('mouseenter',(e)=>{
//    console.log(e.target);
//    e.target.remove();
//    
//    
////    console.log('hover');
//});

//type и target
//два важных свойства
// через таргет можем менять кнопку или другой элемент
// привязанный к евент листенеру
//let i = 0;

const deleteElement = (e)=>{
    console.log(e.currentTarget);//чаще всего используем просто таргет
    console.log(e.type);
    //e.target.remove();
//    i++;
//    if(i==1){
//        btn.removeEventListener('click',deleteElement);
//    };
    };

//btn.addEventListener('click',deleteElement);
//btn.addEventListener('click',deleteElement);

//пишем этот код выше, чтобы потом удалять листенер
// вспоминаем как смассивами, даже если они выглядят одинаково
//и имеют одинаковые элементы, это ДВА  СОВЕРШЕННО разных массива.

//еще одно, не забывай, что функция, которая заканчивается скобками,
// выполняется сразу (), а которая без скобок нет.
//btn.removeEventListener('click',deleteElement);


//btn.addEventListener('click',deleteElement);
//overlay.addEventListener('click',deleteElement);
//
//!!!!
//  Всплытие событий, это когда обработчик событий сначала
//  срабатывает на самом вложенном элементе,затем на родителе,
//  если он есть и дальше по иерархии
//!!!!
//

//!!!
//  далее, как отменять стандартное поведение браузера
//  например, возможность выделения текста или
//  свойство, по которому при нажатии на ссылку мы переходим по ней.
//!!!


const link = document.querySelector('a');

link.addEventListener('click',(e)=>{
    e.preventDefault(); //метод, который говорит браузеру
                            //не делать действия по умолчанию, помещаем его в начало.
     
    console.log(e.target);
});


//
//!!
//      если просят навесить функционал на множесмтво элементов
//      тоесть как навесить обработчики событий на несколько элементов
//      querySelectorAll, потом перебираем псевдомассив через forEach
//!!
//
//
    btns.forEach(n =>{
        n.addEventListener('click',deleteElement, {once:true});        
    }); 
        
//      Опции события, у eventListener существует и третий аргумент
//      удобная штука, например можно чтобы обработчик событий
//      только один раз сработал, как в примере выше
