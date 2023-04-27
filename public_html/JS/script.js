"use strict";

let a = 5,
    b = a;
    
    
b = b + 5;

console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
};


//const copy = obj; //В переменную copy кладется ссылка на obj
//copy.a = 10;
//
//console.log(copy);
//console.log(obj);

function copy(mainObj) {
     let objCopy = {};
     
     let key;
     for(key in mainObj) {
         objCopy[key] = mainObj[key];
     }
     
     return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
}


const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};


//console.log(Object.assign(numbers, add));
//Ниже идет вариант поверхностного копирования объекта
const clone = Object.assign({},add);

clone.d = 20;

console.log(add);
console.log(clone);


const oldArray = ['a','b','c'];
//const newArray = oldArray;
//Если оставим так, то опять же массив передастся по ссылке
//как с объектами.
const newArray = oldArray.slice();

newArray[1] = 'assdadsa';
console.log(newArray);
console.log(oldArray);


const video = ['youtube','vimeo','rutube'],
      blogs = ['wordpress','livejournal','blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      //spread оператор, оператор разворота.
      
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}


const num = [2, 5, 7];

log(...num); // функция принимает 3 числа, а не массив.
             // но с помощью оператора развертки мы можем это исправить.
             
const array = ["a", "b"];

const newAarray = [...array];

const q = {
   one: 1,
   two: 2
};


const newObj = {...q};



