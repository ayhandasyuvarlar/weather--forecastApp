let imageName = document.getElementById("imageName");
let desc = document.getElementById("desc");
let searchIcon = document.getElementById("searchIcon");
let closeIcon = document.getElementById("closeIcon");
let searchContent = document.getElementById("searchContent");
function updateImg() {
  if (desc.innerText === "r") {
    imageName.src =
      "https://yastatic.net/weather/i/icons/funky/dark/ovc_ra.svg";
  }
}
updateImg();
function addEventList() {
  searchIcon.addEventListener("click", getSearchBox);
}

function getSearchBox() {
    searchContent.style.width = '100%'
    searchContent.style.transition ='1s'
}

getSearchBox()