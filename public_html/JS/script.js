'use strict';

//событие для того, чтобы скрипт выполнялся после загрузки дом дерева
// можно еще сделать так,  чтобы скрипт выполнялся только после загрузки всей страницы

document.addEventListener('DOMContentLoaded',()=>{
    
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkBox = addForm.querySelector('[type = "checkbox"]');
      
      //получение HTML типа через селектор
      
    addForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        const newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        
    });
      
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    //это пример функционального выражения.
    //function expressions
    
    deleteAdv(adv);
    
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';

    };

    makeChenges();
    
    const sortArr = (arr)=>{
        arr.sort();
    };
movieDB.movies.sort();



function createMovieList(films,parent) {
    
    parent.innerHTML = "";

    films.forEach((film,i)=>{
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
    
});
};

createMovieList(movieDB.movies,movieList);

});
