"use strict";

function rotateClockAndShowTime() {
    let now = new Date();
    let secNow = now.getSeconds();
    let minNow = now.getMinutes();
    let hourNow = now.getHours();

    setupDigitalClock(hourNow, minNow, secNow);
    setupClock(hourNow, minNow, secNow);
}

function setupDigitalClock(hourNow, minNow, secNow) {
    let hourString = 0;
    if (hourNow < 10) {
        hourString = "0" + hourNow + ":"; 
    } else {
        hourString = hourNow + ":";
    }
    let minString = 0;
    if (minNow < 10) {
        minString = "0" + +minNow + ":";
    } else {
        minString = minNow + ":";
    }
    let secString = 0;
    if (secNow < 10) {
        secString = "0" + secNow;
    } else {
        secString = secNow;
    }
    let time = hourString + minString + secString;
    document.querySelector(".time").innerText = time;
}

function setupClock(hourNow, minNow, secNow) {
    if (hourNow > 12) {
        hourNow = hourNow - 12; 
    }
    hourNow = hourNow + (minNow / 60);
    let secDeg = secNow * 6;
    let minDeg = minNow * 6;
    let hourDeg = hourNow * 30;
    let secClass = document.querySelector(".seconds");
    let minClass = document.querySelector(".minutes");
    let hourClass = document.querySelector(".hours");
   // secClass.setAttribute("style", `transform: rotate(${secDeg}deg)`);
    secClass.style.transform = `rotate(${secDeg}deg)`; 
    minClass.style.transform = `rotate(${minDeg}deg)`;
    hourClass.style.transform = `rotate(${hourDeg}deg)`;

    setTimeout(rotateClockAndShowTime, 1000);
}

window.onload = rotateClockAndShowTime;
