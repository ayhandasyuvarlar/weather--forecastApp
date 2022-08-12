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
const key = "45c9fd503cc5ddd3023a83eea837cb25";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
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
    console.log("bos deger birakma");
  } else {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(query)
      .then((response) => {
        return response.json();
      })
      .then(displayResult)
      .catch((err) => {
        console.log(err);
      });
  }
};

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
};

// const countryController = (country) => {
//   if (country === "TR") {
//     body.style.background =
//       "url(http://tmbh.org.mk/wp-content/uploads/2014/04/t%C3%BCrk-bayra%C4%9F%C4%B1-duvar-ka%C4%9F%C4%B1d%C4%B1.jpg) ";
//     body.style.backgroundSize = "850px";
//     body.style.backgroundPosition = "50% 100%";
//     body.style.transition = '1s all'
//     setTimeout(() => {
//       body.style.background =
//         "linear-gradient(to left, #47bfdf 0%, #4a91ff 100%)";
//     }, 3000);
//   }
// };
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
