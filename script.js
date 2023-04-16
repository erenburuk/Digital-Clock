const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const date = document.getElementById("date");
const today = document.getElementById("day");
const s = document.getElementById("session");
const button = document.getElementById("toggle-btn");
const clock = document.querySelector(".clock");
const session = document.querySelector(".session");

const checkTime = function (time) {
  return (time = time < 10 ? "0" + time : time);
};

const time = function (hrs, mins, sec, session) {
  hours.innerHTML = `${checkTime(hrs)}`;
  minutes.innerHTML = `${checkTime(mins)}`;
  seconds.innerHTML = `${checkTime(sec)}`;
  s.innerHTML = `${session}`;
};

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
][new Date().getDay()];

const displayDate = function () {
  const now = new Date();
  console.log(now);
  const year = now.getFullYear();
  const month = now.toLocaleString("en-us", { month: "long" });
  const day = now.getDate();

  console.log(now.toDateString());
  date.innerHTML = `${month.toUpperCase()} ${day}, ${year}`;
  today.innerHTML = `${weekday.toUpperCase()}`;
};
displayDate();

const displayTime = function () {
  const tick = function () {
    const now = new Date();

    const hrs = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();
    const session = hrs < 12 ? "AM" : "PM";

    button.checked
      ? time(hrs, mins, sec, session)
      : time(hrs > 12 ? hrs - 12 : hrs, mins, sec, session);
  };
  tick();
  setInterval(tick, 1000);
};
displayTime();

button.addEventListener("click", function () {
  clock.classList.toggle("grid--3-col");
  clock.classList.toggle("grid--4-col");
  session.classList.toggle("hidden");
});
