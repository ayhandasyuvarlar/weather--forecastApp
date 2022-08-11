let desc = document.getElementById("desc");
let imageName = document.getElementById("imageName");
let searchIcon = document.getElementById("searchIcon");
let closeIcon = document.getElementById("closeIcon");
let searchContent = document.getElementById("searchContent");
const url = "https://api.openweathermap.org/data/2.5/";
const key = "45c9fd503cc5ddd3023a83eea837cb25";
const searchBar = document.getElementById("searchBar");

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;
  fetch(query)
    .then((response) => {
      return response.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  console.log(result);
  let city = document.querySelector(".cityName");
  let temp = document.querySelector(".temp");
  let desc = document.querySelector(".desc");
  let min = document.querySelector(".minvalue");
  let max = document.querySelector(".maxvalue");
  let wind = document.querySelector(".windvalue");
  let tear = document.querySelector(".tearvalue");

  city.innerText = `${result.name}, ${result.sys.country}`;
  temp.innerText = `${Math.round(result.main.temp)} °C`;
  desc.innerText = `${result.weather[0].description}`;

  min.innerText = `${Math.round(result.main.temp_min)} °C`;
  max.innerText = `${Math.round(result.main.temp_max)} °C`;
  wind.innerText = `${result.wind.speed} km/s`;
  tear.innerText = `${Math.round(result.main.humidity)}%`;

  updateImg(result.weather[0].description);
};
function updateImg(text) {
  if (text === "clear sky") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/skc_d.svg";
  } else if (text == "scattered clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/bkn_d.svg";
  } else if (text == "broken clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/ovc.svg";
  } else if (text == "few clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/skc_d.svg";
  }
}
updateImg();

function addEventList() {
  searchIcon.addEventListener("click", getSearchBox);
  closeIcon.addEventListener("click", deleteSearchBox);
  searchBar.addEventListener("keypress", setQuery);
}
addEventList();

function getSearchBox() {
  searchContent.style.width = "100%";
  searchContent.style.transition = "1s";
  searchContent.style.float = "left";
}
function deleteSearchBox() {
  searchContent.style.width = "0px";
}
