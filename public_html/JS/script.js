'use strict';

const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    //можно и убрать этот аттрибут
    document.body.append(script);
    //динамические скрипты ведут себя как async
    
};

//из-за того, что мы ставим ассинхронность false
//Они будут выполнятся друг за другом
loadScript("js/test.js");
loadScript("js/Some.js");
