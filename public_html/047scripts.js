"use strict";

class Rectangle{
    //чтобы экземпляр класса, используем конструктор.
    //без слова function
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    //между методами нет точек с запятой ;
    calcArea(){
         return this.height * this.width   
    }
}

class ColoredRectangleWithText extends Rectangle{
    //Этот класс будет наследоваться от Rectangle

}

const square = new Rectangle(10,10);
const long = new Rectangle(20,100);

console.log("Bro")
console.log(long.calcArea())
console.log(square.calcArea())