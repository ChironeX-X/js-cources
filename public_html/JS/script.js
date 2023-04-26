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

