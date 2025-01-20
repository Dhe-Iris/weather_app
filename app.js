function updateCityTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.daily[0].temperature.day;
  let cityName = document.querySelector("#weather-city");
  let decriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windspeed");
  let currentDateELement = document.querySelector("#time");
  let currentDate = new Date();
  let iconElement = document.querySelector("#icon");

  cityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  decriptionElement.innerHTML = response.data.daily[0].condition.description;
  humidityElement.innerHTML = `${response.data.daily[0].temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.daily[0].wind.speed}km/h`;
  currentDateELement.innerHTML = formatDate(currentDate);
  iconElement.innerHTML = `<img src= "${response.data.daily[0].condition.icon_url}" class = weather-app-icon>`;
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

searchCity("lagos"); // search lagos info by default

// Format the current date and time for display
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
