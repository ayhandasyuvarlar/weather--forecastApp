const city = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const min = document.querySelector(".minvalue");
const max = document.querySelector(".maxvalue");
const wind = document.querySelector(".windvalue");
const tear = document.querySelector(".tearvalue");
const imageName = document.getElementById("imageName");
const searchIcon = document.getElementById("searchIcon");
const closeIcon = document.getElementById("closeIcon");
const searchContent = document.getElementById("searchContent");
const searchBar = document.getElementById("searchBar");
const body = document.getElementById("body");
const url = "https://api.openweathermap.org/data/2.5/";
const urlTwo = 'api.openweathermap.org/data/2.5/forecast/'
const key = "45c9fd503cc5ddd3023a83eea837cb25";
let user = 's'

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
    getResultTwo(searchBar.value)
  }
};

const getResult = (cityName) => {
  if (cityName === "") {
    searchContent.style.background = "darkred";
    searchContent.placeholder = "lutfen doldurun";
    setTimeout(() => {
      searchContent.style.background = "white";
    }, 1000);
  } else if (cityName === null) {
    console.log("plesaa enter value");
  } else {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(query)
      .then((response) => {
        return response.json();
      })
      .then(result =>{
        if(result ===' country'){
          console.log(undefined)
        }
        else{
          displayResult(result)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
const getResultTwo = (cityName) =>{
   let cnt = 16
   let query = `${urlTwo}daily?q=${cityName}&cnt=${cnt}&appid=${key}`
   fetch(query)
      .then((response) => {
        return response.json();
      })
      .then(result =>{ 
      displayResultTwo(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }


const displayResult = (result) => {
  city.innerText = `${result.name}, ${result.sys.country}`;
  temp.innerText = `${Math.round(result.main.temp)} °C`;
  desc.innerText = `${result.weather[0].description}`;

  min.innerText = `${Math.round(result.main.temp_min)} °C`;
  max.innerText = `${Math.round(result.main.temp_max)} °C`;
  wind.innerText = `${result.wind.speed} km/s`;
  tear.innerText = `${Math.round(result.main.humidity)}%`;
  updateImg(result.weather[0].description);
  // countryController(result.sys.country);
  searchBar.value = "";
  searchContent.style.width = "0px";
};
const displayResultTwo = (result) =>{
   console.log(result)
}
const updateImg = (text) => {
  if (text === "clear sky") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/skc_d.svg";
  } else if (text == "scattered clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/bkn_d.svg";
  } else if (text == "broken clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/ovc.svg";
  } else if (text == "few clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/skc_d.svg";
  } else if (text == "moderate rain") {
    imageName.src =
      "https://yastatic.net/weather/i/icons/funky/dark/bkn_ra_d.svg";
  } else if (text == "overcast clouds") {
    imageName.src = "https://yastatic.net/weather/i/icons/funky/dark/ovc.svg";
  }
  else if (text === 'light rain'){
    imageName.src= 'https://yastatic.net/weather/i/icons/funky/dark/bkn_+ra_d.svg'
  }
  else if (text === 'light intensity shower rain'){
    imageName.src= 'https://yastatic.net/weather/i/icons/funky/dark/bkn_+ra_d.svg'
  }
};



function addEventList() {
  searchIcon.addEventListener("click", getSearchBox);
  closeIcon.addEventListener("click", deleteSearchBox);
  searchBar.addEventListener("keypress", setQuery);
}
addEventList();

function getSearchBox() {
  searchContent.style.width = "100%";
  searchContent.style.transition = "1s";
}
function deleteSearchBox() {
  searchContent.style.width = "0px";
}
function hoursController(){
  let date = new Date();
  let hours = date.getHours()
  if(hours === 6 ||hours === 7 ||hours === 8 || hours === 9 ||  hours === 10 || hours === 11){
     document.querySelector('.loginUser').innerText = `Welcome , Good Morning `
  }
  else if ( hours === 12 || hours === 13|| hours === 14|| hours === 15|| hours === 16|| hours === 17){
    document.querySelector('.loginUser').innerText = `Welcome , Good Day`
  }
  else if(hours === 18|| hours === 19|| hours === 20|| hours === 21|| hours === 22|| hours === 23){
    document.querySelector('.loginUser').innerText = `Welcome , Good Night`
  }
  
}
hoursController() 