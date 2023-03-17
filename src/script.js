function searchForCity(event) {
  let searchInput = document.querySelector("#search-bar-input");
  let city = document.querySelector("#submitted-city");
  city.innerHTML = searchInput.value;
  let apiKey = "56d476ff22ec60814055fe5e814322ae";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showCurrentLocationWeather);
}

function showCurrentLocationWeather(response) {
  let temp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temp;
  let description = response.data.weather[0].description;
  descriptionElement.innerHTML = description;
  let feelsLike = Math.round(response.data.main.feels_like);
  feelsLikeElement.innerHTML = `${feelsLike}°C`;
  let humidity = Math.round(response.data.main.humidity);
  humidityElement.innerHTML = `${humidity}%`;
  let windSpeed = Math.round(response.data.wind.speed);
  windSpeedElement.innerHTML = `${wind}m/s`;
}

// function showPosition(response) {
//   let currentLocationButton = document.querySelector("#current-location-btn");
//   currentLocationButton.addEventListener("click", showPosition);

//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let apiKey = "56d476ff22ec60814055fe5e814322ae";
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//   axios.get(url).then(showCurrentLocationWeather);
// }

let currentDate = new Date();
currentDate.toLocaleString("en-US", {
  hour12: false,
});
let hour = currentDate.getHours().toString().padStart(2, "0");
let minutes = currentDate.getMinutes().toString().padStart(2, "0");
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = weekDays[currentDate.getDay()];

let date = document.querySelector("#date");
date.innerHTML = `${weekDay}, ${hour}:${minutes}`;

let temperatureElement = document.querySelector("#currentTemperature");
let descriptionElement = document.querySelector("#weather-descrip");
let feelsLikeElement = document.querySelector("#feels-like");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let searchCityButton = document.querySelector("#search-btn");
searchCityButton.addEventListener("click", searchForCity);

// navigator.geolocation.getCurrentPosition(showPosition);

//  ATHENA code that is not working  05/03/2023
// const apiKey = "56d476ff22ec60814055fe5e814322ae";
// const searchInput = document.querySelector("#search-bar-input");
// const city = document.querySelector("#submitted-city");
// const temperatureElement = document.querySelector("#currentTemperature");
// const descriptionElement = document.querySelector("#weather-descrip");
// const searchCityButton = document.querySelector("#search-btn");
// const date = document.querySelector("#date");

// function setWeatherInfo(temp, description) {
//   temperatureElement.innerHTML = Math.round(temp);
//   descriptionElement.innerHTML = description;
// }

// async function showCurrentLocationWeather() {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric";
//   try {
//     const response = await axios.get(url);
//     const temp = response.data.main.temp;
//     const description = response.data.weather[0].description;
//     setWeatherInfo(temp, description);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function setDate() {
//   const now = new Date();
//   const weekDay = now.toLocaleDateString("en-US", {weekday: "long" });
//   const hour = now.getHours();
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   date.innerHTML = '${ weekDay }, ${ hour }:${ minutes }';
//   let weekDays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let day = weekDays[currentDate.getDay()];
// }

// function searchForCity(event) {
//   event.preventDefault();
//   if (searchInput.value.trim() === "") {
//     alert("Please enter a city name.");
//     return;
//   }
//   city.innerHTML = searchInput.value;
//   showCurrentLocationWeather();
//   setDate();
// }

// searchCityButton.addEventListener("click", searchForCity);
