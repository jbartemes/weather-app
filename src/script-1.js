function cityInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let apiKey = "ft4830boc9b9a345e3ffa44748c5cd48";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCityInfo);
}

function displayCityInfo(response) {
  let cityElement = document.querySelector("#current-location");
  let city = response.data.city;
  cityElement.innerHTML = city;

  let temperatureElement = document.querySelector("#weather-temp");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = currentTemperature;
}

let city = document.querySelector("#search-form");
city.addEventListener("submit", cityInput);

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let currentDateElement = document.querySelector("#current-time");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
