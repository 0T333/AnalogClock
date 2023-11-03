const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];


//creat numberhours
for (let i = 1;i<=12; i++ ){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
    
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//create bar seconds
for (let i = 1;i<=60; i++ ){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    /*
    60s = 360deg so 1s = 6 deg
    60min are the same
    12h = 360deg so 1h = 30deg

    1h = 30deg means 60min = 30deg so 1min = 0.5deg

    so 1h is (h * 30 + min /2)
    */ 

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes/2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

//call getcurrenttime on page load
getCurrentTime();

//call getcurrenttime to set clock hands every seconds
setInterval(getCurrentTime,1000);