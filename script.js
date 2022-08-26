import ancientsData from '/data/ancients.js';
/* import azathoth from './Azathoth.png';
import cthulhu from './Cthulthu.png';
import iogSothoth from './IogSothoth.png';
import shubNiggurath from './ShubNiggurath.png';
import Ancients from 'assets/Ancients/index.js' */




//"use strict";

//переменные выбора
let level = null; //уровень сложности
let ancient = null; //это древний

//получаем кнопки сложности
const vLight = document.querySelector('.very-light');
const light = document.querySelector('.light');
const middle = document.querySelector('.middle');
const high = document.querySelector('.high');
const vHigh = document.querySelector('.very-high');

//вешаем на них слушателей
vLight.addEventListener('click', function() {
    level = 0;
    vLight.classList.add('color');
    cleanLevel(level);
});
light.addEventListener('click', function() {
    level = 1;
    light.classList.add('color');
    cleanLevel(level);
});
middle.addEventListener('click', function() {
    level = 2;
    middle.classList.add('color');
    cleanLevel(level);
});
high.addEventListener('click', function() {
    level = 3;
    high.classList.add('color');
    cleanLevel(level);
});
vHigh.addEventListener('click', function() {
    level = 4;
    vHigh.classList.add('color');
    cleanLevel(level);
});

//получаем карты древних
const azathoth = document.querySelector('.first');
const cthulhu = document.querySelector('.second');
const iogSothoth = document.querySelector('.third');
const shubNiggurath = document.querySelector('.forth');

//вешаем на них слушателей
azathoth.addEventListener('click', function() {
    ancient = 0;
    azathoth.classList.add('border');
    cleanElder(ancient);
})
cthulhu.addEventListener('click', function() {
    ancient = 1;
    cthulhu.classList.add('border');
    cleanElder(ancient);
})
iogSothoth.addEventListener('click', function() {
    ancient = 2;
    iogSothoth.classList.add('border');
    cleanElder(ancient);
})
shubNiggurath.addEventListener('click', function() {
    ancient = 3;
    shubNiggurath.classList.add('border');
    cleanElder(ancient);
})

//кнопку для замешивания и блок схемы карт
const btn = document.querySelector('.button');
const scheme = document.querySelector('.scheme');
btn.addEventListener('click', function() {
    btn.style.display = 'none';
    scheme.style.display = 'block';
    changeDot();
    //тут сделаем функцию вывода пока, потом её вынести надо будет блочно
    //для начала - простенько выведем имя в консоль выбранного - получив данные из файла ancients.js
})

//получаем по DOM все цифры по количеству карт, после пишем функцию, которая будет их заполнять
//первая буква лини, вторая положение
let fl = document.querySelector('.fl');
let fc = document.querySelector('.fc');
let fr = document.querySelector('.fr');

let sl = document.querySelector('.sl');
let sc = document.querySelector('.sc');
let sr = document.querySelector('.sr');

let tl = document.querySelector('.tl');
let tc = document.querySelector('.tc');
let tr = document.querySelector('.tr');

//функция заполняет цифры на основе выбора чудика
function changeDot() {
    fl.textContent = ancientsData[ancient]['firstStage']['greenCards'];
    fc.textContent = ancientsData[ancient]['firstStage']['blueCards'];
    fr.textContent = ancientsData[ancient]['firstStage']['brownCards'];

    sl.textContent = ancientsData[ancient]['secondStage']['greenCards'];
    sc.textContent = ancientsData[ancient]['secondStage']['blueCards'];
    sr.textContent = ancientsData[ancient]['secondStage']['brownCards'];

    tl.textContent = ancientsData[ancient]['thirdStage']['greenCards'];
    tc.textContent = ancientsData[ancient]['thirdStage']['blueCards'];
    tr.textContent = ancientsData[ancient]['thirdStage']['brownCards'];
}

//получаем массив карт чудиков через квери селектор олл и после пробегаем по нему в функции ниже и удаляем свойство
const arrayElder = document.querySelectorAll('.an-card');

//функция очистки для чудиков
function cleanElder(ancient) { 
    for(let i = 0; i < 4; i++) {
        if(i == ancient) {
            continue;
        }
        arrayElder[i].classList.remove('border');
    }
}

//массив уровней
const arrayLevel = document.querySelectorAll('.choose');

//функция очистки для уровней
function cleanLevel(level) { 
    for(let i = 0; i < 5; i++) {
        if(i == level) {
            continue;
        }
        arrayLevel[i].classList.remove('color');
    }
}



