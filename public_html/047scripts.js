'use strict';

class Rectangle{
    //чтобы экземпляр класса, используем конструктор.
    //без слова function
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    //между методами нет точек с запятой ;
    callArea(){
         return this.height * this.width   
    }
}


const square = new Rectangle(10,10);
console.log(square.callArea())