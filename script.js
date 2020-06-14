'use strict';

alert("Угадай число от 1 до 100");

const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameRandom = function(){

    const targetNumber = randomNum(1,100);
    console.log(targetNumber);

    return function checkNumber(){
        const userNumber = prompt('Угадай число от 1 до 100');

        if(isNum(userNumber)){
            if(userNumber > targetNumber){
                alert("Загаданное число меньше");
                return checkNumber();
            }
            else if(userNumber < targetNumber){
                alert("Загаданное число больше");
                return checkNumber();
            } else {
                alert("Поздравляю ты победил.");
            } 
        } else if(userNumber !== null){
                alert("Введи число!");
                return checkNumber;
            } else {
                alert('Game over');
            }
        }
    };



gameRandom()();
