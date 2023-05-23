'use sctrict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
      wrapper = document.querySelector('.wrapper');
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

//берем тег бади как родителя
//в самый низ ставим наш див
document.body.append(div);
//document.querySelector('.wrapper').append(div);
//Произведем рефакторинг кода
//тоесть переделаем под новые условия
//
//wrapper.append(div);// ставит элемент в конец родителя
//wrapper.prepend(div); // ставит элемент в начало родителя
//так же есть методы before и after
//hearts[1].before(div);//ставит элементы до или после выбранного
//hearts[1].after(div);
//можем и удалить элементы
//circles[0].remove();
// замена элементов
//hearts[1].replaceWith(circles[0]);

//Далее идут устаревшие конструкции
//wrapper.appendChild(div);
//

//wrapper.insertBefore(div, hearts[1]);

//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0],hearts[0]);

//
//с этим методом ниже можно добавить 
//код html
//div.innerHTML = "<h1>Hello world!</h1>";
//нижний метод просто для текста, для защиты страницы
//от всякого лишнего кода.
//div.textContent = "hello";

//29:33
//метод ниже используется для того, чтобы вставить
//html код до или после элемента
div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');

// еще одна возможность получить элемент, без слова документ
//const         wrapper = document.querySelector('.wrapper');
//              oneHeart = wrapper.querySelector('.heart');
//      
