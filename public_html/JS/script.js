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
