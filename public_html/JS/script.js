"use strict";

function first() {
    //do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}


function second() {
    console.log(2);
}

first();
second(); 

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
    
}

learnJS('JavaScript', function(){
    
    console.log('i finish that job!');
    
});