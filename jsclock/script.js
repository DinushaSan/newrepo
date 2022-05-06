setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');
function setClock(){
    const currentDate = new Date();
    var currentOffset = currentDate.getTimezoneOffset();

var istOffset = 330;   // IST offset UTC +5:30 

var istTime = new Date(currentDate.getTime() + (istOffset + currentOffset)*60000);
    const secondRatio = istTime.getSeconds() / 60;
    const minuteRatio = (secondRatio + istTime.getMinutes()) / 60;
    const hourRatio = (minuteRatio + istTime.getHours()) / 12;
    setRotation(secondsHand, secondRatio);
    setRotation(minutesHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()