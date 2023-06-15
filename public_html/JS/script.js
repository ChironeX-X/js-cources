//const timerId = setTimeout(function(text){
//    console.log(text);
//}, 2000, 'Hello');
// по синтаксису можно делать интересные вещи,
// например передавать аргумент функции на выполнение
// третий аргумент передается в функцию.

// можем так же передавать функцию как аргумент
//const timerId = setTimeout(logger, 500);
//скобки не пишем, функцию не вызываем.
function logger(){
    if (i == 3){
        clearInterval(timerId);
    };
    console.log('Hello');
    i++;
};

//setTimeout(logger, 2000);
// работает и так.

//ставим переменную чтобы следить за конкретным таймером.

//clearInterval(timerId);
//Останавливаем таймер



const btn = document.querySelector('.btn');
let timerId,
    i = 0;
//можем создавать пустые глобальные переменные, чтобы они были джоступны 
//
//clearInterval(timerId);
//
//btn.addEventListener('click',()=>{
//    //const timerId = setTimeout(logger, 2000);
//    //Пробуем команду setInterval;
//    timerId = setInterval(logger, 500);
//});
//
//let id =  setTimeout(function log(){
//    console.log('Hello');
//    id = setTimeout(log,500);
//},500);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    
    const id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval(id); //сюда вводим idшник
        } else {
           pos++;
           elem.style.top = pos + 'px';
           elem.style.left = pos +'px';
        }
    }
}
 
btn.addEventListener('click',myAnimation);
