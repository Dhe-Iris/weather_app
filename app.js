function updateCityTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.daily[0].temperature.day;

  let cityName = document.querySelector("#weather-city");

  cityName.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
  console.log(temperatureElement);
}

function searchCity(city) {
  // Fetch weather data for the provided city
  let apiKey = "952c930fb329c422ctbo0af41a6cb25f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateCityTemperature);
}

function displayCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCityName);

searchCity("lagos"); // search lagos by default
