//const timerId = setTimeout(function(text){
//    console.log(text);
//}, 2000, 'Hello');
// по синтаксису можно делать интересные вещи,
// например передавать аргумент функции на выполнение
// третий аргумент передается в функцию.

// можем так же передавать функцию как аргумент
const timerId = setTimeout(logger, 2000);
//скобки не пишем, функцию не вызываем.
function logger(){
    console.log('Hello');
};

//setTimeout(logger, 2000);
// работает и так.

//ставим переменную чтобы следить за конкретным таймером.

//clearInterval(timerId);
//Останавливаем таймер



const btn = document.querySelector('.btn');
let timerId;
//можем создавать пустые глобальные переменные, чтобы они были джоступны 

btn.addEventListener('click',()=>{
    //const timerId = setTimeout(logger, 2000);
    //Пробуем команду setInterval;
    timerId = setInterval(logger, 2000);
});

 
