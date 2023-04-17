"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const mvobj = {},
        actList = {},
        genarr = [];

const personalMovieDB = {
    count: numberOfFilms,
    movies: mvobj,
    actors: actList,
    genres: genarr,
    privat: false
};

let movieName = prompt('Один из последних просмотренных фильмов?', '');
let movieScore = prompt('На сколько его оцените?', '');

mvobj[movieName] = movieScore;

console.log(mvobj);
console.log(numberOfFilms);
