const card = document.querySelectorAll('.timer__flipcard');
const daysCard = document.querySelector('.days');
const hoursCard = document.querySelector('.hours');
const minCard = document.querySelector('.minutes');
const secCard = document.querySelector('.seconds');

const date = new Date();
const currentTime = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();

const daysSetting = 14;
const secondsSetting = daysSetting * 24 * 60 * 60; // 14 days * 24 hours * 60 minutes * 60 seconds
let timerSetting = secondsSetting - currentTime;
let timePassed = 0;

const timer = () => {
    timerSetting--;
    timerCheck = timerSetting + 1;

    const days = String(Math.trunc(timerSetting / 24 / 60 / 60 )).padStart(2, 0);
    const hours = String(Math.trunc(timerSetting / 60 / 60 % 24)).padStart(2, 0);
    const min = String(Math.trunc(timerSetting / 60 % 60)).padStart(2, 0);
    const sec = String(timerSetting % 60).padStart(2, 0);
    const daysCheck = String(Math.trunc(timerCheck / 24 / 60 / 60 )).padStart(2, 0);
    const hoursCheck = String(Math.trunc(timerCheck / 60 / 60 % 24)).padStart(2, 0);
    const minCheck = String(Math.trunc(timerCheck / 60 % 60)).padStart(2, 0);

    // Adding animation class to card
    if (days !== daysCheck) daysCard.classList.add('card-animation');
    if (hours !== hoursCheck) hoursCard.classList.add('card-animation');
    if (min !== minCheck) minCard.classList.add('card-animation');
    if (timePassed !== 0) secCard.classList.add('card-animation');

    daysCard.firstElementChild.innerHTML = days;
    hoursCard.firstElementChild.innerHTML = hours;
    minCard.firstElementChild.innerHTML = min;
    secCard.firstElementChild.innerHTML = sec;

    timePassed++;
}

timer();
const interval = setInterval(timer, 1000);

card.forEach(item => item.addEventListener('animationend', () => item.classList.remove('card-animation')));