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

const dateSpan = document.getElementById("date");
const answerSpan = document.getElementById("answer");

const form = document.querySelector("form");
const nextBtn = document.getElementById("next");
const dropDown = document.querySelector("select");

start();

form.addEventListener("submit", handleSubmit);

nextBtn.addEventListener("click", start);

function start() {
  answerSpan.classList.add("hidden");
  dropDown.value = "";
  let date = getRandomDate();
  actualDay = days[date.getDay()];

  let doomsday = getDoomsDay(date);

  console.log(doomsday);

  dateSpan.innerText = date.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  answerSpan.innerText = actualDay;
}

function handleSubmit(e) {
  e.preventDefault();
  let val = dropDown.value;
  if (val === "") return;

  if (val === actualDay) {
    answerSpan.classList.add("correct");
  }

  answerSpan.classList.remove("hidden");
}

function getDoomsDay(date) {
  let year = date.getFullYear() % 100;
  let twelves = Math.floor(year / 12);
  let difference = Math.floor(year - 12 * twelves);
  let leaps = Math.floor(difference / 4);

  let alg = (3 + twelves + difference + leaps) % 7;
  return days[alg];
}

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}