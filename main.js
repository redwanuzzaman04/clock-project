const numbreHours = document.querySelector('.numder-hours');
const barSection = document.querySelector('.bar-section');

const numbreElement = [];
const barElement = [];

//create numbre hours
for (let i = 1; i <=12; i++){
    numbreElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}


numbreHours.insertAdjacentHTML("afterbegin", numbreElement.join(""));

// creat bar section 
for (let i = 1; i <=60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSection.insertAdjacentHTML("afterbegin", barElement.join(""));


const handHours = document.querySelector(".hand.hours")
const handMinutes = document.querySelector(".hand.minutes")
const handSeconds = document.querySelector(".hand.seconds")

function getCurrentTime(){
    let date = new Date()
    let currentHours = date.getHours()
    let currentMinutes = date.getMinutes()
    let currentSeconds = date.getSeconds()


    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

//call getCurrentTime function on page load
getCurrentTime();


setInterval(getCurrentTime, 1000)