const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.textContent = currentYear + 1;
function updateCounter() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // перевод в дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // часов всего, далее остаток от деления на 24
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.textContent = daysLeft;
  hours.textContent = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minutes.textContent = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.textContent = secondsLeft
    < 10 ? '0' + secondsLeft : secondsLeft;
}
updateCounter();
setInterval(updateCounter, 1000);