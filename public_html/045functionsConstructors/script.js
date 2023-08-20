'use strict';

//типы данных с ключевым словом new
//const num = new Number(3);
//console.log(num);

//тоже самое можно с function
//const num = new Function(3);
//console.log(num);

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
    };
    
    User.prototype.exit = function() {
            console.log(`Пользователь ${this.name} ушел`)
    };
    
    const ivan = new User('Ivan',28);
    const alex = new User('Alex',20);
    
    ivan.exit();
    alex.exit();
    
    
    ivan.hello();
    alex.hello();

    console.log(ivan);
    console.log(alex);
    
    
    //
    //      То, как это
    //          делается
    //      сейчас, на момент урока
    //      
    //          Это будет в следующем уроке.
    