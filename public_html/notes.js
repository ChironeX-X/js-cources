/* 
19.04.2023
    015
   let num = 50;

while (num <= 55) {
    console.log(num);
    num++;

}

do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
} 

21.04.23
 Формат Camel Case
 Вопрос на собеседовании: что такое замыкание фукции?

замыкание функции, это сама функция плюс все внешние элементы, которые ей доступны.
 функции могут выполняться даже после их вызова, т.к. при загрузке JS файла сначала ищутся вары и функции.



let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);

}


showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {

    return a + b;

}

console.log(calc(4, 5));
console.log(calc(3, 2));
console.log(calc(4, 1));


function ret() {
    let num = 50;

    //какой то код

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// пример function expression
const logger = function () {
    console.log('Hello!')
};


logger();


// пример стрелочной функции

const calcAr = (a, b) => a + b;

console.log(calcAr(6,6));

22.04.23

Урок по методам и свойствам строк и чисел

const str = 'test';
const arr = [1, 2, 4];

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";

// производим поиск подстроки
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

const loggr = "good bruh";

console.log(loggr.slice(3, 6));

console.log(loggr.substring(3, 6));

console.log(loggr.substr(3, 3));

console.log(Math.random());

const num = 12.2;

console.log(Math.round(num));


const test = "12.2px";

console.log(parseInt(test))
console.log(parseFloat(test))
//Самодеятельность, рандомайзер.
let numRand = Math.random() * 100;
console.log(parseInt(numRand))

//наконец дошел до рандома :)
    24.04.23
    Урок про callback функции
    при вызове этой функции не нужно ставить
    двойных скобок, просто название функции.
    При попытке запустить код в консоли, получил ошибку.
    Дело было в самой консоли, она не знала setTimeout.
    В браузере всё получилось ОК.

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

function done(){
    console.log('i finish that job!');
}

learnJS('JavaScript', done);

    25.04.23
    Объекты и деструктуризация объектов.
    for (let key OF options) не работает с объектами.
    Когда ставятся круглые скобки, значит что-то идет в работу.
"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test')
    }
    
    
}

console.log(options['colors']['border']);


delete options.name;

console.log(options);
let counter = 0;

for (let key in options) {
    if(typeof(options[key])==='object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
        counter++;
    }
            
    
}

console.log(counter);

console.log(Object.keys(options).length);
//Рациональное рещение для поиска количества объектов в object

const bro = {
    name: 'brothan',
    age: '30',
    bag: {
        money: 10,
        phone: 'Nokia'
    }
}


console.log(Object.keys(bro).length);

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
  //всё идет от обьектов, например стротка это объект.
  // например String
  // все сущности сводятся к объектам
  // скорее прототипно ориентированный язык
    
    Массивы и псевдомассивы
        let of работает только с массивоподобными сущностями
        
        **вопрос собеседования
            как соотносится arr.length 
            с нумерацией массива - номер индекса + 1
            
            "use strict";

const arr = [11,2,1,6,5];
arr.sort(compareNum);//внутрь sort мы можем добавить callback функцию
console.log(arr);


function compareNum(a,b) {
    return a - b;//работает с числами. Нужно вникнуть в работу sort
}

//Псевдомассивы, у них нет никаких встроенных методов.
//console.log(arr.length);
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);
////arr.pop();
//arr.push(10);
//
//
//console.log(arr);
//
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}
//


// Самый полезный метод.
 arr.forEach(function(item,i,arr){
     console.log(`${i}: ${item} внутри массива ${arr}`);
 })
// Используем чаще всего именно этот метод
// У метода через просто for есть плюс, в том плане что можем
// использовать break и continue.
// Остановился на 15 минуте. Посмотри картинку :P
// Готово, урок пройден.
 for (let value of arr) {
    console.log(value);
}

const str = prompt("","");
const products = str.split(", ");
products.sort();// работает только со строками.
console.log(products.join('; '));
    


    26.04.23
    Передача по ссылке и по значению. Spread оператор в (ES6-ES9)
    примитивнык типы данных передаются по значению.
    Запомнить два понятия, глубокие и поверхностные копии объектов.
    
    мы работаем с поверхностными копиями, объект внутри объекта копируется по ссылке.
    16:48 урок.
  */


