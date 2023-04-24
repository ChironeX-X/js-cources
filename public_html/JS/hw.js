"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');  
    
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько его оцените?', '');
    if (a && b != null && a.length && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else
    {
        i--;
        console.log("error");
    }
}
    
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
    const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
          personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();


function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов')
    } else if (10 < personalMovieDB.count < 30) {
    console.log('любитель');
    } else if (personalMovieDB.count > 30) {
    console.log('вы киноман');
    } else {
    console.log('произошла ошибка');
    }
    
}

detectPersonalLvl();


//let privat = false;

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

