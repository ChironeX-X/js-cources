 'use strict';
 
 windows.addEventListener('DOMContentLoaded',()=>{
     const tabs = document.querySelectorAll('.tabheader__item'),
           tabsContent = document.querySelectorAll('.tabcontent'),
           tabsParent = document.querySelector('.tabcontent');
           
     function hideTabContent() {
         tabsContent.forEach(item => {
             item.style.display = 'none';
             //скрываем табы вот этой небольшой частью кода
         });
         tabs.forEach(item=>{
             item.classList.remove('tabheader__item_active');
         });
     };
 });