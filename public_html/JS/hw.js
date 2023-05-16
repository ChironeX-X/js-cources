"use strict";


let numberOfFilms;




const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start: function(){
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');  
    
    }},
    rememberMyFilms: function(){
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
    }},
    writeYourGenres: function(){
       for(let i = 1; i < 2; i++ ){
           
//           let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//           
//                 if(genre ==='' || genre ==null){
//                 console.log('Вы ввели некорректные данные');
//                 i--;
//       } else {
//       personalMovieDB.genres[i - 1] = genre;         
//       }}
//   
//   
//       personalMovieDB.genres.forEach((item,i)=>{
//           
//           console.log(`Любимый жанр ${i+1} - это ${item}`)
//       });
//      
            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();
           
                 if(genres ==='' || genres ==null){
                 console.log('Вы ввели некорректные данные');
                 i--;
                 } else {
                 personalMovieDB.genres = genres.split(', ');
                 personalMovieDB.genres.sort();
                 }
             
                     //можно запустить цикл всего лишь один раз,
                     //но используя i-- откатываться к его началу. 
       }
    },   
    detectPersonalLvl: function(){
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
    ,
    showMyDB: function(hidden){
           if (!hidden) {
        console.log(personalMovieDB);
    }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat == true){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLvl();
personalMovieDB.toggleVisibleMyDB();

//let privat = false;

personalMovieDB.showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);
