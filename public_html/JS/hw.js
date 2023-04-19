"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов')
    } else if (10 < personalMovieDB.count < 30) {
    console.log('любитель');
    } else if (personalMovieDB.count > 30) {
    console.log('вы киноман');
    } else {
    console.log('произошла ошибка');
    }


console.log(personalMovieDB);