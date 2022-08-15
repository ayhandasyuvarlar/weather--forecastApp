let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let days = [
  " Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  " Friday",
  "Saturday",
];
let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
document.querySelector(
  ".days"
).innerText = `${days[day]} ${months[month]} ${year}`;

function hoursController() {
  let date = new Date();
  let hours = date.getHours();
  if (
    hours === 6 ||
    hours === 7 ||
    hours === 8 ||
    hours === 9 ||
    hours === 10 ||
    hours === 11
  ) {
    document.querySelector(".loginUser").innerText = `Welcome , Good Morning `;
  } else if (
    hours === 12 ||
    hours === 13 ||
    hours === 14 ||
    hours === 15 ||
    hours === 16 ||
    hours === 17
  ) {
    document.querySelector(".loginUser").innerText = `Welcome , Good Day`;
  } else if (
    hours === 18 ||
    hours === 19 ||
    hours === 20 ||
    hours === 21 ||
    hours === 22 ||
    hours === 23
  ) {
    document.querySelector(".loginUser").innerText = `Welcome , Good Night`;
  }
}
hoursController();
