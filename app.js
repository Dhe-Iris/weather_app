function displayCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityName = document.querySelector("#weather-city");
  cityName.innerHTML = searchInput.value.trim();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCityName);
