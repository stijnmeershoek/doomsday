const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let actualDay;
let startTime;

const dateSpan = document.getElementById("date");
const answerSpan = document.getElementById("answer");
const timeSpan = document.getElementById("time");

const form = document.querySelector("form");
const nextBtn = document.getElementById("next");
const dropDown = document.querySelector("select");

start();

form.addEventListener("submit", handleSubmit);

nextBtn.addEventListener("click", start);

function start() {
  dropDown.value = "";
  answerSpan.classList.add("hidden");
  timeSpan.classList.add("hidden");

  let date = getRandomDate();
  actualDay = days[date.getDay()];

  dateSpan.innerText = date.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  answerSpan.innerText = actualDay;
  startTime = new Date();
}

function handleSubmit(e) {
  e.preventDefault();
  let val = dropDown.value;
  if (val === "") return;

  let endTime = new Date().getTime() - startTime.getTime();
  timeSpan.innerText = Math.round(endTime / 1000) + "s";

  if (val === actualDay) {
    answerSpan.classList.add("correct");
  }

  answerSpan.classList.remove("hidden");
  timeSpan.classList.remove("hidden");
}

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}