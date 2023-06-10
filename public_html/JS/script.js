 'use strict';
 
 window.addEventListener('DOMContentLoaded',()=>{
     const tabs = document.querySelectorAll('.tabheader__item'),
           tabsContent = document.querySelectorAll('.tabcontent'),
           tabsParent = document.querySelector('.tabheader__items');
           
     function hideTabContent() {
         tabsContent.forEach(item => {
             item.classList.add('hide');
             item.classList.remove('show','fade');
             //скрываем табы вот этой небольшой частью кода
         });
         tabs.forEach(item=>{
             item.classList.remove('tabheader__item_active');
         });
     };
     
     function showTabContent(i = 0) {
         tabsContent[i].classList.add('show','fade');
         tabsContent[i].classList.remove('hide');
         tabs[i].classList.add('tabheader__item_active');
     };
     //новая фишка стандарта ES6, можем прямо при создании функции
     //поставить значение по умолчанию
     hideTabContent();
     showTabContent();
     
     tabsParent.addEventListener('click',(event)=>{
         console.log(event.target);
         const target = event.target;
         
         if(target && target.classList.contains('tabheader__item')){
             console.log('bruh');   
             tabs.forEach((item,i)=>{
                 if(target == item){
                     hideTabContent();
                     showTabContent(i);
                 };
             });
         };
     });
     
     //стили лучше менять не inline, а через добавление css классов
     
     
     
     
 });
