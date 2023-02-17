function getDate(now) {
 let currentDate = now.toLocaleString("en-US", {
    hour12: false,
  });
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = weekDays[now.getDay()];
  //feb 17 2023 - adding day and month
  let date = now.getDate();

  return ${weekDay}, ${date} th, ${hour}:${minutes};
}

function searchForCity(event) {
  let searchInput = document.querySelector("#search-bar-input").value;
  let city = document.querySelector("#submitted-city");
  city.innerHTML = searchInput;
  let apiKey = "56d476ff22ec60814055fe5e814322ae";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showCurrentWeatherConditions);
}

function showCurrentWeatherConditions(response) {
  let temp = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temp;
}

function showPosition(response) {
  let currentLocationButton = document.querySelector("#current-location-btn");
  currentLocationButton.addEventListener("click", showPosition);

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "56d476ff22ec60814055fe5e814322ae";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showCurrentWeatherConditions);
}

let today = document.querySelector("#date");
let now = new Date();
today.innerHTML = getDate(now);

let temperatureElement = document.querySelector("#currentTemperature");
let searchCityButton = document.querySelector("#search-btn");
searchCityButton.addEventListener("click", searchForCity);

// navigator.geolocation.getCurrentPosition(showPosition);
