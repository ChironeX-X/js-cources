/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieList = document.querySelectorAll('.promo__interactive-item'),
        delBtn = document.querySelectorAll('.delete'),
        inpFilm = document.querySelector('.adding__input'),
      addBtn = document.querySelector('.add').lastElementChild;

adv.querySelectorAll('*').forEach(n => n.remove());
//Звездочка видимо помечает вообще ВСЕ элементы
promoGenre.innerHTML = 'ДРАМА';
promoBg.style.backgroundImage = 'url("http://localhost:8383/js-cources/img/bg.jpg")';

delBtn.forEach((btn)=>{
    console.log('done...');
    btn.addEventListener('click',()=>{
        console.log('click');
    });
    console.log('done2');
});



function filmSort(){ 
    movieDB.movies.sort();
    movieList.innerHTML = "";
    movieList.forEach((e,i)=>{
        e.innerHTML = `${i+1} ${movieDB.movies[i]}
            <div class="delete"></div>`;
    });
    };

filmSort();






addBtn.addEventListener('click',(e)=>{
     e.preventDefault();
        if (inpFilm.value.length > 21){
             movieDB.movies.push(`${inpFilm.value.slice(0,22)}...`);
             filmSort();
        } else
        {
            movieDB.movies.push(inpFilm.value);
               //console.log(movieDB.movies);
            filmSort();
        };
    
    
});



