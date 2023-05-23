/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
        promoList = document.querySelectorAll('.promo__interactive-item');
        
adv.querySelectorAll('*').forEach(n => n.remove());
//Звездочка видимо помечает вообще ВСЕ элементы
promoGenre.innerHTML = 'ДРАМА';
promoBg.style.backgroundImage = 'url("http://localhost:8383/js-cources/img/bg.jpg")';
promoList.forEach((n,i)=>{
     n.textContent = `${i+1}. ${movieDB.movies[i]}`;
});










