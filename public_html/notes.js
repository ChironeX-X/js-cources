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
    
    
    27.04.23
    
    Досмотрел урок про передачу по ссылке и по значению.
    вместе с этим досмотрел урок по Spread оператору,
    очень крутой тул, огонь прямо.
    надо пользоваться.
    //"use strict";
//
//let a = 5,
//    b = a;
//    
//    
//b = b + 5;
//
//console.log(b);
//console.log(a);
//
//
//const obj = {
//    a: 5,
//    b: 1
//};
//
//
////const copy = obj; //В переменную copy кладется ссылка на obj
////copy.a = 10;
////
////console.log(copy);
////console.log(obj);
//
//function copy(mainObj) {
//     let objCopy = {};
//     
//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     
//     return objCopy;
//}
//
//const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//        x:7,
//        y:4
//    }
//}
//
//
//const newNumbers = copy(numbers);
//
//newNumbers.a = 10;
//newNumbers.c.x = 10;
//
//console.log(newNumbers);
//console.log(numbers);
//
//
//const add = {
//    d: 17,
//    e: 20
//};
//
//
////console.log(Object.assign(numbers, add));
////Ниже идет вариант поверхностного копирования объекта
//const clone = Object.assign({},add);
//
//clone.d = 20;
//
//console.log(add);
//console.log(clone);
//
//
//const oldArray = ['a','b','c'];
////const newArray = oldArray;
////Если оставим так, то опять же массив передастся по ссылке
////как с объектами.
//const newArray = oldArray.slice();
//
//newArray[1] = 'assdadsa';
//console.log(newArray);
//console.log(oldArray);
//
//
//const video = ['youtube','vimeo','rutube'],
//      blogs = ['wordpress','livejournal','blogger'],
//      internet = [...video, ...blogs, 'vk', 'facebook'];
//      //spread оператор, оператор разворота.
//      
//console.log(internet);
//
//function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
//}
//
//
//const num = [2, 5, 7];
//
//log(...num); // функция принимает 3 числа, а не массив.
//             // но с помощью оператора развертки мы можем это исправить.
//             
//const array = ["a", "b"];
//
//const newAarray = [...array];
//
//const q = {
//   one: 1,
//   two: 2
//};
//
//
//const newObj = {...q};
// 

          28.04.23
          Основы ООП и прототипно ориентированное наследование
"use strict";


let str = "some";
let strObj = new String(str);


console.log(typeof(str));
console.log(typeof(strObj));
// Когда строка идет в работу 
// она оборачивается JS в объект, потом опять становится
// просто строкой

// прототип
//когда мы создаем массив, мы создаем новый экземпляр прототипа
//массивов.

//легковая машина, это прототип, а всякие лады мерседесы, это экземпляры прототипов,
//        все свойства у них одинаковые, колеса там и двигатель есть у всех но сами эти свойства
//по значению разные, типо того.

console.dir([1,2,3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
      console.log("Hello");
  }
};

const john = {
    health: 100
};


 // Сначала устаревший формат
 john.__proto__ = soldier;
 
 console.log(john);
 // Выдает, что у john есть только свойство health
 console.log(john.armor);
 // выдает 100, как у прототипа.
console.log(john.sayHello());

//теперь новый формат.

object.setPrototypeOf(John, soldier);
// это когда объект есть, а когда его нет, то
const bob = Object.create(soldier);
//ООП - это о том, как правильно делать архитектуру.


//

        10.05.23
        Практика по использованию объектов.
        я очень устал, но надо двигаться дальше...
        дорогу осилит идущий...

        15.05.23
        У нас всё получится.
         const personalMovieDB = {

    movies: {},
    actors: {},
    genres: [],
    privat: false
 };
 
 for (let i = 1; i < 4; i++) {
             
          const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
          console.log(a);
          if (a != '' || a!=null){
             console.log("bro dude");
             personalMovieDB.genres[i - 1] = a;
          } else {
              i--;
          }
 }
 
 console.log(personalMovieDB);
// Не получилось, завтра попробую найти ошибку или посмотрю ответы.

        16.05.23
        Получилось решить самому, ниже мой вариант


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
       
           for (let i = 1; i < 4; i++) {
             
          let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
          
        while (a == '' || a == null) {
            a = prompt(`Ваш любимый жанр под номером ${i}`, '');  
    
    }
    personalMovieDB.genres[i - 1] = a; 
    }
            personalMovieDB.genres.forEach(function(item,index,array){
              console.log(`Любимый жанр ${index} - это ${item}`)  
            });
         
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

        
            Использование breakpoints в консоли разработчика для дебаггинга
            можно переходить к следующей функции, или войти в тело вызываемой функции.

            с помощью ключевого слова debugger мы можем так же поставить что-то вроде
            breakpoint
use strict";

function hello(){
    console.log("Hello World!");
    debugger; //ключевое слово для breakpoints
}

hello();

function hi(){
    console.log("Say hi!");
}

hi()


const arr =[1, 14, 4, 30, 54],
        sorted = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(sorted);

код с урока по консоли разработчика и breakpoints


        17.05.23
        Пробуем работать с утра, посмотрим что из этого выйдет.
        026 Динамическая типизация в JS
        
        
         "use strict";
 
 // to string, старый метод
 
 // 1)
 console.log(typeof(String(null)));
 console.log(typeof(String(4)));
 
 // 2)
 // конкатенация строк,
 // при сложении со строкой
 // у нас все равно получается строка
 console.log(typeof(5 + ''));

const num = 5;

//пример старого кода

console.log("https://vk.com/catalog/" + num);

//Пример использования с CSS

const fontSIze = 26 + 'px';

// to number

// 1) редский способ

 console.log(typeof(Number('4')));
 
// 2) Унарный плюс, его используют чаще

  console.log(typeof(+'5'));
  
// 3) 
   console.log(typeof(parseInt("15px", 10)));
   
   
   // реальное применение
   // Превращаем строковые данные в число
   // Все что мы получаем от пользователя,
   // Это строка.
   let answ = +prompt("Hello","");
   
   
   
 // to boolean
 
 // false - 0, '',null, undefined, NaN;
 // остальное - true
 
 
let switcher = null;

if (switcher) {
    console.log('Working...')
}
   
   
 switcher = 1;
 
if (switcher) {
    console.log('Working...')
}

// 2)

console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));


Выше представлен код по динамической типизации в JS

      027  Задачи с собеседования на понимание основ
      "use strict";

//let x = 5, alert(x++);

// [] + false - null + true

//console.log([] + false - null + true); // "NaN"

//let y = 1; let x = y = 2; alert(x);

//console.log([] +1 +2); // "12"

//alert( "1"[0] ); // "1"

//console.log(2 && 1 && null && 0 && undefined); // null

//console.log(!!(1&&2) === (1&&2));
//console.log(!!(1&&2))
//console.log((1&&2))

//alert( null || 2 && 3 || 4 ); 


//const a = [1, 2, 3];
//const b = [1, 2, 3];
//
//console.log(a == b);

//alert( +"Infinity" );

//console.log("Ёжик" > "яблоко"); //false

//console.log(0 || "" || 2 || undefined || true || falsе );

//  Предположения:
//  1) 7            
//  2) Object
//  3) 2
//  4) Object
//  5) 10
//  6) false
//  7) нет
//  8) true
//  9) нет
//  10) infinity
//  11) Верно
//  12) true
//
//  Ответы:
//  1) 5, потому-что если бы стояло перед x, то сначала плюс потом выводит x,
//  а тут получается, что сначала выводит значение, а потом плюсует
//  2) NaN, При сложении массива, пустой массив заменяется
//  пустой строкой
//      когда пытаемся убавить null, получаем NaN, т.к. мы пытаемся применить
//      математическую операцию к строкам. 
//  
//  3)2, примитивы передаются по значению справа налево 
//  4) 12
//  5) 1, квадратные скобки, это обращение к строке! Это индекс номера символа в
//   строке
//  6) null, потому-что null - это false, но выводится не булево значение,
//  а сама величина
//  И запинается на лжи
//  или запинается на правде
//  7) нет, та же фишка, что в задаче до этого. Нам выдается не тру или фолс, а
//  само значение
//  8) 3, смотрим таблицу приоритета операторов для решения этой задачи.
//      2&&3 будет 3, потому-что при таком выражении, мы берем последнее число
//  9) нет, это просто два хранилища информации, содержащие одинаковые данные
//      Они идентичны - но не равны. 
//  10) infinity, всё как думали, это число бесконечность, из-за плюса перед строкой
//
//  11) false, я стоит дальше по алфавиту, смотрим Unicode.
//  
//  12) 2, это мы знаем, или запинается на true

            Были косяки, но разобрали все
            возможные вопросы.

   
            028 Получение элементов со страницы
            Просмотрел урок и всё протестировал, код находится
            в скрипте, помимо этого там  есть ксс файл и сама страничка с примитивами
            'use strict';

// методы ниже работают с ДОМом

const box = document.getElementById('box');

console.log(box);

//const btns = document.getElementsByTagName('button')[1];
//
//// мы получаем псевдомассив!!!
//// с помощью квадратных скобок ищем элемент по номеру
//
//console.log(btns);

const btns = document.getElementsByTagName('button');

// Если хотим использовать из коллекции
// элемент, ставим вот так скобки
//  
// Даже если это один элемент, 
// все равно получаем псевдомассив
//


console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

//Теперь нормальный новый метод.
//Отличается тем, что он ищет элемент по CSS 
// селектору, и в отличие от псевдомассивов имеет
// один метод, forEach
// 
//
const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
    console.log(item);
});

// Следующий метод возвразает только один обьект
// Первый, который попадется 
//

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);


        21.05.23
    
    Пытаемся работать из дома.
    урок 029, действия с элементами на странице
    14:37

        22.05.23
    Предыдущий урок с 14:37
    'use sctrict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
      wrapper = document.querySelector('.wrapper');
//
// Выводит в консоль обьект с его свойствами      
//console.dir(box);
// 

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
//нужно передавать значение через строку
// такими командами мы создаем инлайн стили
// тоесть редактируем HTML, а не CSS файл
//
// Теперь попробуем сразу несколько свойств
//
//

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// Если нужно несколько элементов
// используем перебор с помощью for или forEach

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}

// но циклы мы использовать не будем, будем
// использовать перебирающие методы
hearts.forEach(item => {
    
   item.style.backgroundColor = 'blue';
    
});

const div = document.createElement('div');
// Сказал привыкать к тому, что мы будем называть часто
// элементы Нодами
//const text = document.createTextNode('тут был я');

div.classList.add('black');
//14:37

//берем тег бади как родителя
//в самый низ ставим наш див
document.body.append(div);
//document.querySelector('.wrapper').append(div);
//Произведем рефакторинг кода
//тоесть переделаем под новые условия
//
//wrapper.append(div);// ставит элемент в конец родителя
//wrapper.prepend(div); // ставит элемент в начало родителя
//так же есть методы before и after
//hearts[1].before(div);//ставит элементы до или после выбранного
//hearts[1].after(div);
//можем и удалить элементы
//circles[0].remove();
// замена элементов
//hearts[1].replaceWith(circles[0]);

//Далее идут устаревшие конструкции
//wrapper.appendChild(div);
//

//wrapper.insertBefore(div, hearts[1]);

//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0],hearts[0]);

//
//с этим методом ниже можно добавить 
//код html
//div.innerHTML = "<h1>Hello world!</h1>";
//нижний метод просто для текста, для защиты страницы
//от всякого лишнего кода.
//div.textContent = "hello";

//29:33



    28.05.23
    Продолжение урока 029
    //метод ниже используется для того, чтобы вставить
//html код до или после элемента
div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');

// еще одна возможность получить элемент, без слова документ
//const         wrapper = document.querySelector('.wrapper');
//              oneHeart = wrapper.querySelector('.heart');
//      
   добил этот урок, идем к следующему.
        30 практика

        Решил первое задание.
const adv = document.querySelector('.promo__adv');
        
adv.querySelectorAll('*').forEach(n => n.remove());
//Звездочка видимо помечает вообще ВСЕ элементы
        Второе задание решено
        перерыв.
        третье задание решено
        4 и 5 тоже.

        ниже представленно моё решение.

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        promoList = document.querySelectorAll('.promo__interactive-item');
        
adv.querySelectorAll('*').forEach(n => n.remove());
//Звездочка видимо помечает вообще ВСЕ элементы
promoGenre.innerHTML = 'ДРАМА';
promoBg.style.backgroundImage = 'url("http://localhost:8383/js-cources/img/bg.jpg")';
movieDB.movies.sort();
promoList.forEach((n,i)=>{
     n.textContent = `${i+1}. ${movieDB.movies[i]}`;
});
        
        24.05.23
        030
        Смотрим урок по практике.
        основная ошибка - не отсортировал массив
        Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
 //решение с урока
const adv = document.querySelectorAll('.promo__adv img'),
        //можно выбирать вот так теги, кучей, вспомни CSS.
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
      //лучше одно в другом

        adv.forEach(item => {
            item.remove();
        });

genre.textContent = 'ДРАМА';
//лучше использовать в таких случаях textCOntent
poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";


 //сортируем сразу в базе
movieDB.movies.sort();
movieDB.movies.forEach((film,i)=>{
   movieList.InnerHTML += `
    <li class="promo__interactive-item"> ${i+1} ${film}
            <div class="delete"></div>
    </li>

`;
});
// а вот здесь лучше innerHTML, у нас текст контент
// это чтобы сохранить классы и прочее
// хотя у меня вроде тоже норм работало.
        
        
        Далее идёт важный урок.
        031 События и обработчики
        Говорит, что самый важный урок в JS
        клик - это сигнал от браузера, что что-то происходит
        
        обработчик, это функция, которая выполняется когда событие произошло.
        
        3 способа создать обработчик событий
        1) прямо в HTML документе.
         <button onClick="alert('Click')" id="btn">Нажми меня</button>
         но так ессесна почти никто не делает.
        2) использование дом-дерева
        const btn = document.querySelector('button');
        btn.onclick = function() {
            alert('click');
        };
        тоже не особо используется.
        есть большая проблема.
        нельзя повторить, чтобы после второго клика мышкой было другое
        действие
        
        3)//btn.addEventListener('click',()=>{
          //    alert('click');
          //});
           
           лучший способ
           11:35 перерыв
           
           'use strict';

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


//btn.onclick = function() {
//    alert('click');
//};

//btn.addEventListener('click',()=>{
//    alert('click');
//});
//
// //callback функция, это функция, выполняющаяся строго за другой функцией.
//
//btn.addEventListener('click',()=>{
//    alert('second click');
//});

//события в JS выполняются в виде очереди.

//btn.addEventListener('mouseenter',()=>{
//    console.log('hover');
//});

//для того, чтобы получить информацию о событии, что за элемент используется,
// его координаты например и прочую информацию
// так же как и любой объект в JS он может иметь свои свойства.
// !!!Объект события передается как аргумент в callback функцию
// называть мы его можем как угодно
// Передается ВСЕГДА первым аргументом.

//btn.addEventListener('mouseenter',(e)=>{
//    console.log(e.target);
//    e.target.remove();
//    
//    
////    console.log('hover');
//});

//type и target
//два важных свойства
// через таргет можем менять кнопку или другой элемент
// привязанный к евент листенеру
//let i = 0;

const deleteElement = (e)=>{
    console.log(e.currentTarget);//чаще всего используем просто таргет
    console.log(e.type);
    //e.target.remove();
//    i++;
//    if(i==1){
//        btn.removeEventListener('click',deleteElement);
//    };
    };

//btn.addEventListener('click',deleteElement);
//btn.addEventListener('click',deleteElement);

//пишем этот код выше, чтобы потом удалять листенер
// вспоминаем как смассивами, даже если они выглядят одинаково
//и имеют одинаковые элементы, это ДВА  СОВЕРШЕННО разных массива.

//еще одно, не забывай, что функция, которая заканчивается скобками,
// выполняется сразу (), а которая без скобок нет.
//btn.removeEventListener('click',deleteElement);


//btn.addEventListener('click',deleteElement);
//overlay.addEventListener('click',deleteElement);
//
//!!!!
//  Всплытие событий, это когда обработчик событий сначала
//  срабатывает на самом вложенном элементе,затем на родителе,
//  если он есть и дальше по иерархии
//!!!!
//

//!!!
//  далее, как отменять стандартное поведение браузера
//  например, возможность выделения текста или
//  свойство, по которому при нажатии на ссылку мы переходим по ней.
//!!!


const link = document.querySelector('a');

link.addEventListener('click',(e)=>{
    e.preventDefault(); //метод, который говорит браузеру
                            //не делать действия по умолчанию, помещаем его в начало.
     
    console.log(e.target);
});


//
//!!
//      если просят навесить функционал на множесмтво элементов
//      тоесть как навесить обработчики событий на несколько элементов
//      querySelectorAll, потом перебираем псевдомассив через forEach
//!!
//
//
    btns.forEach(n =>{
        n.addEventListener('click',deleteElement, {once:true});        
    }); 
        
//      Опции события, у eventListener существует и третий аргумент
//      удобная штука, например можно чтобы обработчик событий
//      только один раз сработал, как в примере выше
        
        закончили урок по обработчикам событий, бомбическая штука
        
        25.05.23
        утро.
        032 Навигация по DOM - элементам
        data-аттрибуты, преимущества for_of
        'use strict';

//console.log(document.body);
//можно получить тег html
//

//console.log(document.documentElement);
//применение кода ниже, получить родительский или деткий элемент.
//console.log(document.body.childNodes);
//теги - элементы
//всё остальное, например перенос стоки text в нашем случае, это ноды
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//далее команды для доступа к соседям детям родителям

//console.log(document.querySelector('#current').parentNode);

//!!
//  node и element разные вещи
//!!

//console.log(document.querySelector('#current').parentNode.parentNode);
//это если нужно добраться до деда

//далее говорим про дата аттрибуты
//а точнее, вскользь упоминаем :)
//console.log(document.querySelector('[data-current = "3"]').nextSibling);
//console.log(document.querySelector('[data-current = "3"]').previousSibling);

//у этих команд есть аналоги, с помощью которых
//мы можем получить не ноды, а именно элементы.
//
//console.log(document.querySelector('[data-current = "3"]').nextElementSibling);
//console.log(document.querySelector('#current').parentElement);

console.log(document.body.firstElementChild);

//когда не получается использовать конструкцию forEach
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}
        ...готово
        033 практика

        Начал решать первое задание

        26.05.23
        продолжение решения практики по заданиям
        решено 2 задания

        27.05.23
        встал пораньше, надеюсь получится покодить немного :D
        
        29.05.23
        встрял на одной ошибке с innerHTML
        Либо всё переделывать самому, либо использовать его контекст.

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        delBtn = document.querySelectorAll('.delete'),
        inpFilm = document.querySelector('.adding__input'),
      addBtn = document.querySelector('.add').lastElementChild;

adv.querySelectorAll('*').forEach(n => n.remove());
//Звездочка видимо помечает вообще ВСЕ элементы
promoGenre.innerHTML = 'ДРАМА';
promoBg.style.backgroundImage = 'url("http://localhost:8383/js-cources/img/bg.jpg")';

function filmSort(){ 
    movieDB.movies.sort();
    movieList.InnerHTML = "";
    movieDB.movies.forEach((film,i)=>{
    movieList.InnerHTML += `
    <li class="promo__interactive-item"> ${i+1} ${film}
            <div class="delete"></div>
    </li>
    `;});
    };

filmSort();




function addFilm(){  
        e.preventDefault();
        if (inpFilm.value.length > 21){
             movieDB.movies.push(`${inpFilm.value.slice(0,22)}...`);
             filmSort();
        } else
        {
            movieDB.movies.push(inpFilm.value);
               //console.log(movieDB.movies);
            filmSort();
        };
};
addBtn.addEventListener('click',addFilm);
console.log(delBtn);

delBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        console.log('click');
});
});

//delBtn[0].addEventListener('click',(e)=>{
//    console.log(e.target);
//    console.log('del film');
//});
        
        
            
            дело было таки в том, что обьекты отличаются, даже если названия у них
            одинаковые
            
            30.05.23
            попался на бесконечный цикл, буду переделывать по видео.

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieList = document.querySelectorAll('.promo__interactive-item'),
        inpFilm = document.querySelector('.adding__input'),
      addBtn = document.querySelector('.add').lastElementChild;

adv.querySelectorAll('*').forEach(n => n.remove());
//Звездочка видимо помечает вообще ВСЕ элементы
promoGenre.innerHTML = 'ДРАМА';
promoBg.style.backgroundImage = 'url("http://localhost:8383/js-cources/img/bg.jpg")';





function filmSort(){ 
    movieDB.movies.sort();
    movieList.innerHTML = "";
    movieList.forEach((e,i)=>{
        e.innerHTML = `${i+1} ${movieDB.movies[i]}
            <div class="delete"></div>`;
    });
    };

filmSort();

   const delBtn = document.querySelectorAll('.delete');
    delBtn.forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
             movieDB.movies.splice(i,1);
             console.log(movieDB.movies.length);
             movieList[movieDB.movies.length].innerHTML = "";
        });
        });




addBtn.addEventListener('click',(e)=>{
     e.preventDefault();
        if (inpFilm.value.length > 21){
             movieDB.movies.push(`${inpFilm.value.slice(0,22)}...`);
             filmSort();
        } else
        {
            movieDB.movies.push(inpFilm.value);
               //console.log(movieDB.movies);
            filmSort();
        };
    
    
});


            31.05.23
            
            Мои предположения оказались верны, ДОМ дерево не успевало грузиться,
            поэтому скрипт на удаление работал неверно.
            будем делать по видео-уроку, нельзя обвинять себя за незнание в этом случае)
            
            остановился на 16.23
            
            'use strict';

//событие для того, чтобы скрипт выполнялся после загрузки дом дерева
// можно еще сделать так,  чтобы скрипт выполнялся только после загрузки всей страницы

document.addEventListener('DOMContentLoaded',()=>{
    
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkBox = addForm.querySelector('[type = "checkbox"]');
      
      //получение HTML типа через селектор
      
    addForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        const newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        
    });
      
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    //это пример функционального выражения.
    //function expressions
    
    deleteAdv(adv);
    
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';

    };

    makeChenges();
    
movieDB.movies.sort();


function createMovieList(films,parent) {
    
    parent.innerHTML = "";

    films.forEach((film,i)=>{
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
    
});
};

createMovieList(movieDB.movies,movieList);

});

        02.06.23
        Продолжаем с 16:23
        
        пока исправил мелкие ошибки, будьте внимательны.
        в отличие от обычных функций function expressions могут быть
        вызваны только после обьявления
        
        'use strict';

//событие для того, чтобы скрипт выполнялся после загрузки дом дерева
// можно еще сделать так,  чтобы скрипт выполнялся только после загрузки всей страницы

document.addEventListener('DOMContentLoaded',()=>{
    
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkBox = addForm.querySelector('[type="checkbox"]');
      
      //получение HTML типа через селектор
      
    addForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        let newFilm = addInput.value;
        const favorite = checkBox.checked;
        
        if (newFilm) {
            // по умолчанию пустой запрос это false
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
                //напомню, что это выражение с бэктиками называется интерполяцией
            };
            
            if (favorite){
                console.log("Добавлен любимый фильм");
            };
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

            event.target.reset();

            // этот метод стирает данные формы

        };
        
    });
      
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    //это пример функционального выражения.
    //function expressions
    
    
    
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';

    };

    
    
    const sortArr = (arr)=>{
        arr.sort();
    };

    

    function createMovieList(films, parent) {

        parent.innerHTML = "";
        sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
                `;

        });
        
        document.querySelectorAll('.delete').forEach((btn,i)=>{
            btn.addEventListener("click",()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films, parent);
            });
        });
        
    };


deleteAdv(adv);
createMovieList(movieDB.movies,movieList);
makeChanges();
});

        Просмотрел решение, большая часть из того, что он делал на уроке
        я тоже сделал, была пара ошибок с тем, что не знал метод дом контент лоадед
        и то, что функицю можно вызывать рекурсией.

        03.06.23
        034 события на мобильных устройствах
        сам браузер отрабатывает события кликов, но иногда полезно испоользовать
        события Touch
        4.37
        Продолжаем.
        Есть прикольная кнопка, чтобы смотреть адаптацию под разные устройства
        например, под смартфон, и протестить тапы на экран смартфона.
        
        'use strict';
//touch start
//touch move
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded',()=>{
    
    const box = document.querySelector('.box');
    
    box.addEventListener('touchstart',(e)=>{
        e.preventDefault();
        
        console.log('Start');
        console.log(e.touches);
    });
    
    box.addEventListener('touchmove',(e)=>{
        e.preventDefault();
        
        console.log(e.targetTouches[0].pageX);
    });
//    
//     box.addEventListener('touchend',(e)=>{
//        e.preventDefault();
//        
//        console.log('End');
//     });
     
     //touches
     // выводит все пальцы на экране и их свойства/методы
     // если нужно узнать направленные именно на этот элемент тапы
     // changed touches показывает именно убранные во время события пальцы
     
});
       Досмотрел урок, много интересного касательно тачей и прочего.
       плюс, в курсах есть инфа по топ ссылкам
       например, готовая библиотека для слайдеров.

       04.06.23
       034 async,defer и динамические скрипты.
       рещение проблем с загрузкой скриптов
       пока мы помещали его в конец, если поместить в начало, то будет проблема
       1) с загрузкой страницы
       2) с тем, что сайт зависнет на загрузке скрипта
       
       <script defer src="js/script.js"></script>
       defer - страница грузится дальше а скрипт грузится в фоновом режиме.
       скрипты с defer никогда не блокируют страницу
       плюс такой скрипт ждет пока наша верстка полностью загрузится.
       срабатывают они еще до DOMContentLoaded
       
       еще один +, сохраняется последовательность загрузки скриптов.
       даже если второй скрипт маленький, он будет грузится после первого.
       
       следующий аттрибут это async
       
       async скрипты не ждут никого, выполняются по готовности параллельно.
       нужен для подключения сторонних скриптов.
       когда мы такой скрипт запускаем, должны точно знать
       что он не зависит от ДОМ структуры.

       Особенности defer и async могут спросить на собеседовании.
       
       05.06.2023
       начал изучение 3 блока
       
       05.06.2023
       classList и делегирование событий
       изучил classList, дико крутая штука.

       Немного продолжил работу вечером.
       Ну, значит совсем немного
       
       06.06.23
       делегирование событий
       элемент на странице называется дом-узлом
       
       Делегирование событий, самый лучший способ работать с ДОМ деревом.
'use strict';
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);

//метод classList выводит информацию о принадлежности обьекта к определенным
//классам

//console.log(btns[0].classList.item(0));
//console.log(btns[1].classList.add('red','bruh'));
//console.log(btns[0].classList.remove('blue'));
//методы для добавления или удаления класса
//Можно использотвать сразу несколько классов
//console.log(btns[0].classList.toggle('red'));
//включает и выключает класс в html

//метод contains позволяет проверить наличие определенного класса в элементе.
//if (btns[1].classList.contains('red')){
//    console.log('red');
//};

//btns[0].addEventListener('click',()=>{
//   if(!btns[1].classList.contains('red')){
//       btns[1].classList.add('red');
//   } else {
//       btns[1].classList.remove('red');
//   };
//});
//этот метод используется для создания,например
//бургер меню
btns[0].addEventListener('click',()=>{
   btns[1].classList.toggle('red');
});
//toggle можно использовать, но внутрь этого метода
// не влезть, и в крупных проектах это не совсем удобно
//нужно конкретно знать что мы хотим сделать.

//console.log(btns[0].className);

//делегирование событий
//вместо того, чтобы вешать листенер на каждую кнопку, вешаем на родительский
//и вот он будет ставить листенеры на кнопки. важная тема, как и та что выше.
//wrapper.addEventListener('click', (event) => {
//    //console.dir(event.target);
//    //можем получить тег кнопки
//    if (event.target && event.target.tagName == "BUTTON") {
//        console.log('Hello');
//    }
//    ;
//});

//wrapper.addEventListener('click',(event)=>{
//    if(event.target && event.target.classList.contains('blue')){
//        console.log('Hello');
//    };
//});

//const btn = document.createElement('button');
//btn.classList.add('red');
//wrapper.append(btn);

//можно использовать классический метод
//Но лучше использовать предыдущий

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log('Hello!');
    });
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


//Есть ещё один дико крутой метод, который тоже можно
//и нужно использовать

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
    ;
});

        038 Создаем табы в новом проекте
        09.06.23
        038 создаем табы в новом проекте
        есть 30 мин. +-
        при создании табов.
        1) нужен функционал, чтобы скрывать ненужные табы
        2) функционал показывать нужные
        3) обработчик событий на меню
        
        Остановился на 9.39
        
        10.06.23
        038 создаем табы в новом проекте.
        продолжение изучения урока.
        готово.
        
 */


