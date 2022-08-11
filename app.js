let imageName = document.getElementById("imageName");
let desc = document.getElementById("desc");
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
  .then(response => {
    return response.json()
  })
  .then(displayResult)
};

const displayResult = (result) => {
    console.log(result)
    let city = document.querySelector('.cityName')
    let temp = document.querySelector('.temp')
    city.innerText = `${result.name}, ${result.sys.country}`
    temp.innerHTML = `${result.main.temp} °C` 
}
function updateImg() {
  if (desc.innerText === "r") {
    imageName.src =
      "https://yastatic.net/weather/i/icons/funky/dark/ovc_ra.svg";
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
