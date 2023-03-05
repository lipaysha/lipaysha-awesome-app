function searchForCity(event) {
  let searchInput = document.querySelector("#search-bar-input");
  let city = document.querySelector("#submitted-city");
  city.innerHTML = searchInput.value;
  let apiKey = "56d476ff22ec60814055fe5e814322ae";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showCurrentLocationTemperature);
}

function showCurrentLocationTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temp;
}

// function showPosition(response) {
//   let currentLocationButton = document.querySelector("#current-location-btn");
//   currentLocationButton.addEventListener("click", showPosition);

//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let apiKey = "56d476ff22ec60814055fe5e814322ae";
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
//   axios.get(url).then(showCurrentLocationTemperature);
// }

let currentDate = new Date();
currentDate.toLocaleString(
  "en-US",
  { minimumIntegerDigits: 2, useGrouping: false },
  {
    hour12: false,
  }
);
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
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
let searchCityButton = document.querySelector("#search-btn");
searchCityButton.addEventListener("click", searchForCity);

// navigator.geolocation.getCurrentPosition(showPosition);
