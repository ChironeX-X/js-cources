 window.addEventListener('DOMContentLoaded',()=>{
     //tabs
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

             tabs.forEach((item,i)=>{
                 if(target == item){
                     hideTabContent();   
                     showTabContent(i);
                 };
             });
         };
     });
     
     //стили лучше менять не inline, а через добавление css классов
     
     
     
     //timer
     const deadline = '2023-07-23';
     
     function getTimeRemaining(endtime) {
         const t = Date.parse(endtime) - Date.parse(new Date()), //количество милисекунд в конечном времени, до которого нужно
         //досчитать
               days = Math.floor(t / (1000*60*60*24)), //количество мс в сутках
               hours = Math.floor((t / (1000*60*60)) % 24), //количество суток
               minutes = Math.floor((t/(1000*60))% 60),
               seconds = Math.floor((t/(1000))% 60);
               return{
                   'total': t,
                   'days': days,
                   'hours': hours,
                   'minutes': minutes,
                   'seconds': seconds
               }; //фигурные скобки создают объект
     };
     
     
     function getZero(num){
         if (num >= 0 && num < 10){
             return `0${num}`;                     // Вспомогательная функция,
         } else {                                  // чтобы ставить нолик перец числом
             return num;                           // если оно меньше 10
         }
             
     }
     
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector);
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);
         
         updateClock();//чтобы верстка не мигала, ибо обновление часов происходит
                       //только через секунду после загрузки страницы
                       
         function updateClock() {
             const t = getTimeRemaining(endtime);    //функция возвращает тот самый объект
             
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
             
             if(t.total <= 0) {clearInterval(timeInterval)};
         }
     };
     
     setClock('.timer',deadline);
     
     //modal
     
      const modalBtn = document.querySelectorAll('[data-modal]'),
            modalClose = document.querySelector('[data-close]');    
            let modalWindow = document.querySelector('.modal');
      
      function openModal(){
          modalWindow.classList.add('display'); //можно использовать toggle
          modalWindow.classList.remove('hide');
          document.body.style.overflow = 'hidden'; //чтобы страница не скролилась когда
                                                     //модальное окно открыто
          clearInterval(modalTimerId);//убираем таймер, чтобы каждый раз не включался опять
      };
      
      modalBtn.forEach((item)=>{
            item.addEventListener('click',openModal);
      });
      
      
      
      function closeModal(){
          modalWindow.classList.remove('display'); 
          modalWindow.classList.add('hide');
          document.body.style.overflow = '';
      };
      
      modalClose.addEventListener('click',closeModal); //здесь мы не вызываем функцию
                                                       //а передаем
      
      modalWindow.addEventListener('click',(e)=>{
          if(e.target === modalWindow){
          closeModal();
          };
      });
      
      document.addEventListener('keydown', (e)=>{
          if (e.code === "Escape" && modalWindow.classList.contains('display')) { //eventcode гуглим
              closeModal();
          };
          
      });
      
      const modalTimerId = setTimeout(openModal, 5000);
      
      function showModalByScroll(){
          if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();              
          } //то что проскроллили
        //+ размер окна
            window.removeEventListener('scroll',showModalByScroll);
      };
      
      window.addEventListener('scroll',showModalByScroll);
     
 });
