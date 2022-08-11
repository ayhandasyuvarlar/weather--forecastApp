let angleDown = document.getElementById("angleDown");
let searchBar = document.getElementById("searchbar");
function addeventListener() {
  angleDown.addEventListener("click", getSearchBar);
  searchBar.addEventListener("click", deleteSearchBar);
}
addeventListener();

function getSearchBar() {
  searchBar.style.width = "100%";
  searchBar.style.height = "60px";
  searchBar.style.padding = "10px 0px";
  searchBar.style.transition = "2s ";
}

function deleteSearchBar() {
  searchBar.style.height = "0px";
  searchBar.style.widht = "0px";
  searchBar.style.padding = "0px";
}
