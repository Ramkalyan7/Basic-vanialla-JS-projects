const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

function countDownSetter() {
  const targetDate = new Date(2023, 0, 1, 0, 0, 1);
  const currentDate = new Date();
  const numOfSec = Math.floor((targetDate - currentDate) / 1000);
  const numOfDays = Math.floor(numOfSec / (3600 * 24));
  const numOfHours = Math.floor((numOfSec / 3600) % 24);
  const numOfMins = Math.floor((numOfSec / 60) % 60);
  const numOfSecs = Math.floor(numOfSec) % 60;
  days.innerHTML = formatDate(numOfDays);
  hours.innerHTML = formatDate(numOfHours);
  mins.innerHTML = formatDate(numOfMins);
  seconds.innerHTML = formatDate(numOfSecs);
}
function formatDate(time) {
  return time < 10 ? `0${time}` : time;
}
countDownSetter();
setInterval(countDownSetter, 1000);
