'use sctrict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
//
// Выводит в консоль обьект с его свойствами      
//console.dir(box);
// 

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
//нужно передавать значение через строку
// такими командами мы создаем инлайн стили
// тоесть редактируем HTML, а не CSS файл
//
// Теперь попробуем сразу несколько свойств
//
//

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// Если нужно несколько элементов
// используем перебор с помощью for или forEach

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}

// но циклы мы использовать не будем, будем
// использовать перебирающие методы
hearts.forEach(item => {
    
   item.style.backgroundColor = 'blue';
    
});

const div = document.createElement('div');
// Сказал привыкать к тому, что мы будем называть часто
// элементы Нодами
//const text = document.createTextNode('тут был я');

div.classList.add('black');
//14:37
