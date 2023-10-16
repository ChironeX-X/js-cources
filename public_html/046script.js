"use strict";
function showThis() {
    console.log(this)
}
showThis();
//  комментарии от Udemy
// 1) Обычная функция: this - window, но если use strict - то undefined
//практическая задача с собеседования.
// 2) Контекст у методов объекта ссылается на сам объект.

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
//неважно где контекст вызова вызывается, будет либо window либо undefined.
showThisSumm(8,5);

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


