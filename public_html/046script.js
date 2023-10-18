"use strict";
function showThis() {
    console.log(this)
}
showThis();
//  комментарии от Udemy
// 1) Обычная функция: this - window, но если use strict - то undefined
//практическая задача с собеседования.
// 2) Контекст у методов объекта ссылается на сам объект.
// 3) this у конструкторах и классах - это новый экземпляр класса
// очень важная тема.
// 4) Ручная привязка this: call, apply, bind.
/*
function showThisSumm(a,b) {
    console.log(this)
    function sum(){
        return this.a + this.b
        //Для того, чтобы это работало, нужно использовать замыкание функции.
        //не смотря на то, что в самой функции sum нет этих переменных, 
        //с помощью замыкания функции они будут доступны.
        //Она ищет эти переменные для себя, и если не находит, то обращается
        //к родительской функции.
    }
    console.log(sum())
}
*/
//неважно где контекст вызова вызывается, будет либо window либо undefined.
//showThisSumm(8,5);

const  obj={
    a: 20,
    b: 15,
    sum: function(){
        //console.log(this);
        function shout(){
            console.log(this);
        }
        shout()
        //вот если функция вызывается просто внутри функции, то опять будет undefined.
    }
};

obj.sum();

//3 случай
//через функции конструкторы.

//function User(name, id){
//    this.name = name;
//this.id = id;
//    this.human = true;
 //   this.hello = function(){
//        console.log("Hello!" + this.name);
//    }
//}

//let ivan = new User('Ivan', 23);
//тоесть контекст ссылается на новый объект user
// в данном случае, и будет User.name например.

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
    // как получить доступ не к window, а к name?
}

const user = {
    name: "John"
};
//ниже два метода для того, чтобы привязать this к конкретной функции.
sayName.call(user, "Smith")   //говорим, эй, функция, заработай на вот этом вот объекте.
//здесь surname мы ставим просто в виде строки, а в случае с apply нужно использовать
//массив данных
sayName.apply(user, ["Smith"])
//Это только 2 варианта ручного присвоения контекста, есть еще 3.
//он создает НОВУЮ ФУНКЦИЮ с нужным контекстом.
function count(num){
    return this*num;
}

const double = count.bind(2);//привязка 2 к this в функции count.
//тоесть double - это новая функция, которая передает двойку.
//часто будем его встречать.



//далее пробуем применить это к кнопке.
//const btn = document.querySelector("button");
//btn.addEventListener("click",function(){
//    console.log(this);
//    this.style.backgroundColor = "red";
//});
//выводит <button></button>
//контекст вызова это сам элемент, на котором прозошло событие
//но это не всегда, но когда он написать в классическом виде через function
// прямо как eventtarget.

//у стрелочных функций есть одна фишка, у них НЕТ КОНТЕКСТА ВЫЗОВА.
//она всегда берет контекст у родителя.

const sayObj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        };

        say();
    }
};


sayObj.sayNumber();
// у обычной функции say превратился бы в undefined
// но в нашем случае стоит стрелочка функция, поэтому она будет брать
// своего родителя sayObj в качестве контекста.


//еще один пример.
const anotherDouble = a => a*2;
//  можем писать в одну строку, при это даже return писать не надо.
// и если там один аргумент, то даже круглые скобки не нужны.


//const btn = document.querySelector("button");
//btn.addEventListener("click",() =>{
//    console.log(this);
//    this.style.backgroundColor = "red";
//});
// код выше будет выводить undefined из-зи свойства стрелочных функций.
// поэтому в таком случае лучше наверное использовать eventTarget.
// вот так:

const btn = document.querySelector("button");
btn.addEventListener("click",(e)=>{
    console.log(this);
    e.target.style.backgroundColor = "red";
});