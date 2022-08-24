"use strict";
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
vLight.addEventListener('click', function(level) {
    level = 0;
    console.log(level);
});
light.addEventListener('click', function(level) {
    level = 1;
    console.log(level);
});
middle.addEventListener('click', function(level) {
    level = 2;
    console.log(level);
});
high.addEventListener('click', function(level) {
    level = 3;
    console.log(level);
});
vHigh.addEventListener('click', function(level) {
    level = 4;
    console.log(level);
});

//получаем карты древних
const azathoth = document.querySelector('.first');
const cthulhu = document.querySelector('.second');
const iogSothoth = document.querySelector('.third');
const shubNiggurath = document.querySelector('.forth');

//вешаем на них слушателей
azathoth.addEventListener('click', function(ancient) {
    ancient = 0;
    console.log(ancient);
})
cthulhu.addEventListener('click', function(ancient) {
    ancient = 1;
    console.log(ancient);
})
iogSothoth.addEventListener('click', function(ancient) {
    ancient = 2;
    console.log(ancient);
})
shubNiggurath.addEventListener('click', function(ancient) {
    ancient = 3;
    console.log(ancient);
})


