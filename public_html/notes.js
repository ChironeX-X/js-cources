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

 */


