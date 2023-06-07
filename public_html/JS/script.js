'use strict';
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);

//метод classList выводит информацию о принадлежности обьекта к определенным
//классам

//console.log(btns[0].classList.item(0));
//console.log(btns[1].classList.add('red','bruh'));
//console.log(btns[0].classList.remove('blue'));
//методы для добавления или удаления класса
//Можно использотвать сразу несколько классов
//console.log(btns[0].classList.toggle('red'));
//включает и выключает класс в html

//метод contains позволяет проверить наличие определенного класса в элементе.
//if (btns[1].classList.contains('red')){
//    console.log('red');
//};

//btns[0].addEventListener('click',()=>{
//   if(!btns[1].classList.contains('red')){
//       btns[1].classList.add('red');
//   } else {
//       btns[1].classList.remove('red');
//   };
//});
//этот метод используется для создания,например
//бургер меню
btns[0].addEventListener('click',()=>{
   btns[1].classList.toggle('red');
});
//toggle можно использовать, но внутрь этого метода
// не влезть, и в крупных проектах это не совсем удобно
//нужно конкретно знать что мы хотим сделать.

//console.log(btns[0].className);

//делегирование событий
//вместо того, чтобы вешать листенер на каждую кнопку, вешаем на родительский
//и вот он будет ставить листенеры на кнопки. важная тема, как и та что выше.
//wrapper.addEventListener('click', (event) => {
//    //console.dir(event.target);
//    //можем получить тег кнопки
//    if (event.target && event.target.tagName == "BUTTON") {
//        console.log('Hello');
//    }
//    ;
//});

//wrapper.addEventListener('click',(event)=>{
//    if(event.target && event.target.classList.contains('blue')){
//        console.log('Hello');
//    };
//});

//const btn = document.createElement('button');
//btn.classList.add('red');
//wrapper.append(btn);

//можно использовать классический метод
//Но лучше использовать предыдущий

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log('Hello!');
    });
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


//Есть ещё один дико крутой метод, который тоже можно
//и нужно использовать

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
    ;
});
